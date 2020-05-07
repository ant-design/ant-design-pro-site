---
order: 11
title: 开发
type: 基础使用
---

Ant Design Pro 以 umi 作为脚手架，启动和开发与 umi 基本相同。

## 启动项目

在项目根目录下执行 `npm run start`, 即可启动项目。

![strat](https://gw.alipayobjects.com/zos/antfincdn/%26df0HXZbRD/4B634700-7C4F-44BA-A45C-E250601C8971.png)

此时访问 [http://localhost:8000/](http://localhost:8000/) 即可看到下面的界面。

![app](https://gw.alipayobjects.com/zos/antfincdn/9bvHFQRjep/0B7EE9A4-2CD7-4626-9B8E-DEEA85EE2126.png)

> 由于默认使用了 user 权限，可以需要使用 admin 登录才能看到全部页面。

### 区分环境

对于很多项目来说都需要一个区分环境的变量，同时也提供了快捷的启动方式和相应的 ui 展示。Pro 中内置 `dev`，`test`, `pre` 三个环境。可以分别通过运行 `npm run start:test` 等命令启动。同时也会给每个页面注入一个 `REACT_APP_ENV` 的变量来区分。

> `dev`，`test`, `pre` 环境都默认关闭了 mock。 `REACT_APP_ENV` 并不是挂载在 windows 中的,不能通过 `windows.REACT_APP_ENV`来获取。

## 布局

布局是一个中后台应用必备的，一个布局+ ProTable + Form 即可获得一个 CRUD 页面。Pro 中内置了 [plugin-layout](https://umijs.org/plugins/plugin-layout)。

### 使用插件

我们可以通过 [plugin-layout](https://umijs.org/plugins/plugin-layout) 来减少样板代码。简单的使用中我们只需要在 `config.ts` 中配置 layout 属性。

```tsx
import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: {
    name: 'Ant Design Pro',
    logo: 'https://preview.pro.ant.design/static/logo.f0355d39.svg',
  },
});
```

如果需要更加复杂的配置可以在 `app.tsx` 中来配置, 以 Pro 为例：

```tsx
export const layout = {
  rightRender: () => {
    return <RightContent />;
  },
  footerRender: () => <Footer />,
};
```

此项配置支持任何 ProLayout 的配置。详细可以看这个[文档](https://prolayout.ant.design)。

### 使用代码实现 layout

plugin-layout 可能无法满足复杂的需求，这时候就需要我们自己写代码来进行复杂的 layout 配置。layout 的 props 中会自动注入当前的子页面。 一个最简单的 layout 是下面这样的。

```tsx
const Layout = ({ children }) => children;
export default Layout;
```

#### v4 中的 layout 实现

```tsx
import ProLayout, {
  BasicLayoutProps as ProLayoutProps,
  DefaultFooter,
} from '@ant-design/pro-layout';
import React from 'react';
import { Link, useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import RightContent from '@/components/GlobalHeader/RightContent';

const defaultFooterDom = (
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

const BasicLayout: React.FC<ProLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;

  const { formatMessage } = useIntl();

  return (
    <ProLayout
      logo={logo}
      formatMessage={formatMessage}
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/">
          {logoDom}
          {titleDom}
        </Link>
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: formatMessage({ id: 'menu.home' }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => defaultFooterDom}
      rightContentRender={() => <RightContent />}
      {...props}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
```

## MOCK

在很多情况下前端实在后端还没有开发完成之前就开始开发的，这时候我们就需要用到 mock 数据了。Pro 中约定了两种 mock 的定义方式。

- 在根目录的 mock 中接入
- 在 src/page 中的 mock.ts 的文件中配置

一个标准的 mock 由三部分组成，以 List 配置为例。

```tsx
export default {
  'GET /api/rule': [{ name: '12' }],
  'POST /api/rule': (req: Request, res: Response, u: string) => {
    res.send({
      success: true,
    });
  },
};
```

第一部分是 网络请求的 Method 配置，完整的列表可以看[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)。一般我们都会使用 GET 和 POST。

第二部分是 URL 也就是我们发起网络请求的地址。一般我们会使用统一的前缀方便代理的使用。

第三部分是 数据处理，我们可以配置一个 JSON, JSON 数据会直接返回。或者是配置一个 function，function 有三个参数 [req](https://expressjs.com/en/4x/api.html#req), [res](https://expressjs.com/en/4x/api.html#res)，url 。具体使用方式与 [express](https://expressjs.com/) 相同。数据必须要通过 `res.send` 来返回。

## 代理

代理是为了解决跨域的问题，同时方便联调而使用的技术，在 Pro 中我们内置了代理，并且做了环境的区分。一个标准的配置是这样的。

```ts
export default {
  dev: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://preview.pro.ant.design',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
```

代理有一些重要的配置首先一个用来匹配路由的正则，`/api/` 会匹配 `/api/list`，但是不会匹配 `api/list`，或者 `/list/api`。target 需要请求的位置，`target: 'https://preview.pro.ant.design',` 会把 `/api/list` 拼接为 `https://preview.pro.ant.design/api/list` 来进行请求。pathRewrite 是一个对象 `{ '/api': '/qixian' }`会把 url 中`/api` 全部替换为`/qixian`再发出

> 代理不会修改控制台的 url，它的所有操作都在 node.js 中进行。

## 表格

开发一个表格是一个中后台的基本修养，我们封装了一个重型组件来介绍样板代码，它有个两个能节省代码功能，首先他是支持 request 来请求数据，这样刷新和所有他可以自动触发。其次它支持了很多预设比如常见的 数字，日期，或者复杂的枚举，他都可以帮你自动处理，还能顺便生成查询表单。下图是一个简单的 ProTable 的用法。

![protable](https://gw.alipayobjects.com/zos/antfincdn/Qi5lwGanlE/47FCD236-C1D4-4FD1-9721-6B4F2443F420.png)

参考文档：<https://protable.ant.design/>
