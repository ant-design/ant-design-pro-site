---
order: 92
title: 升级到 V5
group:
  title: 其它
nav:
  title: 文档
  path: /docs
  order: 1
---

Pro V5 是可以渐进使用的，只要升级到 umi@3 即可使用这些特性，新的数据流虽然简单高效但是并不能满足所有的场景，我们可以混合适应，慢慢迁移。当然我们希望可以尽早迁移来减少历史债务。

## initialState

`initialState`  在 v5 中替代了原来的自带 model，`global`,`login`,`setting` 都并入了 initialState 中。我们需要删除 `src/models/global.ts`,`src/models/login.ts`,`src/models/setting.ts` ，并且将请求用户信息和登陆拦截放到 `src/app.tsx` 中。

我们可以将 `initialState` 理解为一个默认的 model，里面可以将项目中需要的不频繁修改的数据注入。

```ts
import { history } from 'umi';
import { Settings as ProSettings } from '@ant-design/pro-layout';
import { queryCurrent } from '@/services/user';
import defaultSettings from '../config/defaultSettings';

export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
  settings?: ProSettings;
}> {
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    try {
      const currentUser = await queryCurrent();
      return {
        currentUser,
        settings: defaultSettings,
      };
    } catch (error) {
      history.push('/user/login');
    }
  }
  return {
    settings: defaultSettings,
  };
}
```

## Layout

在新的架构中 Layout 被作为插件使用，作为了替代品我们在 `app.ts` 中提供了 `layout`  的配置项来支持运行时配置,我们需要将 footer 和 menu 的自定义迁移到  `app.ts` 中，在 return 中我们可以原来的任何 props 配置。

```tsx | pure
import React from 'react';
import { history } from 'umi';
import { BasicLayoutProps, Settings as ProSettings } from '@ant-design/pro-layout';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: ProSettings };
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    menuHeaderRender: false,
    ...initialState?.settings,
  };
};
```

在 V4 中我们将 layout 的配置放到了 model 中，在 V5 中我们将其放入了  `initialState` 中，还有非常重要的用户信息也在  `initialState`进行了初始化。 默认配置中的 `layout`  属性变为   `'side' | 'top' | 'mix'`，这里需要注意一下，默认是 `mix`。

```tsx | pure
export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
  settings?: ProSettings;
}> {
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    try {
      const currentUser = await queryCurrent();
      return {
        currentUser,
        settings: defaultSettings,
      };
    } catch (error) {
      history.push('/user/login');
    }
  }
  return {
    settings: defaultSettings,
  };
}
```

这里是 Footer 的配置可以修改为自己需要的。

```ts
import React from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2019 蚂蚁金服体验技术部出品"
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);
```

## 权限

我们的权限改造也依赖了它，对于原来的权限我们可以完全将其删除, 并且在  `src/access.ts`  增加相应的权限标识，以 pro 为例，我们只使用了 `canAdmin`。

```tsx | pure
// src/access.ts
export default function (initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
```

迁移之后我们就可以将原来的权限组件删除。 `src/utils/Authorized.ts`,`src/utils/authority.ts`,`src/components/Authorized/**`。

在 config.ts 的 router 中我们需要删除 `authority`，修改为 `access: 'canAdmin'` 同时我们可以 util 中的所有关于权限的方法。

对于运行时的代码，我们提供了两个 API 来帮助我们自定义任何形态的 UI 和逻辑，这里有个一看就懂的 demo。

```tsx | pure
import React from 'react';
import { useAccess, Access } from 'umi';

const PageA = (props) => {
  const { foo } = props;
  const access = useAccess(); // access 的成员: canAdmin

  if (access.canReadFoo) {
    // 如果可以读取 Foo，则...
  }

  return (
    <div>
      <Access accessible={access.canAdmin} fallback={<div>Can not read foo content.</div>}>
        Foo content.
      </Access>
      <Access accessible={access.canDeleteFoo(foo)} fallback={<div>Can not delete foo.</div>}>
        Delete foo.
      </Access>
    </div>
  );
};
```

## 请求

原有的项目中 request 定义在 `src/utils/request.ts`中，在 V5 中需要用 umi 中 import ，各项配置需要写在 app.ts 中进行实现。

```tsx | pure
import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  timeout: 1000,
  errorConfig: {},
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
  errorHandler,
};
```

V5 中还自带了 useRequest hooks ，很多页面并不需要数据共享，我们可以用 useRequest 来快速的网络请求，并且内置了 loading 和 run 来指示状态和重新请求数据，使用方式极为简单。

```ts
import { useRequest } from 'umi';

export default () => {
  const { data, error, loading } = useRequest(() => {
    return services.getUserList('/api/test');
  });
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data.name}</div>;
};
```

## 其他杂项

由于将所有的逻辑做了拆离，很多依赖都不在需要了，我们可以将其中一些依赖进行删除来增加依赖的安装速度。

```bash
path-to-regexp
react-helmet-async
jsdom-global
enzyme
chalk
checkFiles
```

现在 layout 作为插件会一直包裹在最外层，如果我们想在某个路由中不使用 layout，可以在菜单中配置 layout=false 来隐藏。详细的配置可以看[这里](https://umijs.org/zh-CN/plugins/plugin-layout#layout)。

对于 SettingDrawer，为了方便集成和部署，我们开发了 `umi-plugin-setting-drawer` ,只要在项目中安装这个插件即可快速使用。
