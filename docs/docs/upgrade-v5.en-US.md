---
order: 92
title: Upgrade to V5
group:
  title: Other
nav:
  title: Documents
  path: /docs
  order: 1
---

Pro V5 can be used gradually, as long as you upgrade to umi @ 3 to use these features. Although the new data stream is easy and efficient, it does not meet all scenarios. We can mix and adapt and slowly migrate. Of course, we hope that we can relocate as early as possible to reduce historical debt.

## initialState

`initialState` replaces the original built-in model in v5, and `global`, `login`, and `setting` are all incorporated into initialState. We need to delete `src/models/global.ts`,`src/models/login.ts`, `src/models/setting.ts`, and put the requested user information and login intercept into`src/app.tsx` in.

We can understand `initialState` as a default model, which can inject data that is not frequently modified in the project.

```ts
import { history } from 'umi';
import { Settings as ProSettings } from '@ ant-design/pro-layout';
import { queryCurrent } from '@/services/user';
import defaultSettings from '../config/defaultSettings';

export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
  settings?: ProSettings;
}> {
  // If it is a login page, do not execute
  if (history.location.pathname! == '/ user/login') {
    try {
      const currentUser = await queryCurrent();
      return {
        currentUser,
        settings: defaultSettings,
      };
    } catch (error) {
      history.push('/ user/login');
    }
  }
  return {
    settings: defaultSettings,
  };
}
```

## Layout

In the new architecture, Layout is used as a plug-in. As an alternative, we provide a configuration item in `app.ts` to support runtime configuration. We need to migrate the custom footer and menu to the app In .ts`, in return we can configure any original props.

```tsx | pure
import React from 'react';
import {history} from 'umi';
import {BasicLayoutProps, Settings as ProSettings} from '@ ant-design/pro-layout';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';

export const layout = ({
  initialState,
}: {
  initialState: {settings ?: ProSettings};
}): BasicLayoutProps => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    footerRender: () => <Footer />,
    menuHeaderRender: false,
    ... initialState? .settings,
  };
};
```

In V4 we put the layout configuration in the model, in V5 we put it in the `initialState`, and very important user information was also initialized in`initialState`. In the default configuration, the `layout` attribute becomes`'side' | 'top' | 'mix'`. Here we need to pay attention to it. The default is `mix`.

```tsx | pure
export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
  settings?: ProSettings;
}> {
  // If it is a login page, do not execute
  if (history.location.pathname! == '/ user/login') {
    try {
      const currentUser = await queryCurrent();
      return {
        currentUser,
        settings: defaultSettings,
      };
    } catch (error) {
      history.push('/ user/login');
    }
  }
  return {
    settings: defaultSettings,
  };
}
```

Here is the configuration of Footer can be modified to your needs.

```ts
import React from 'react';
import { GithubOutlined } from '@ ant-design/icons';
import { DefaultFooter } from '@ ant-design/pro-layout';

export default () => (
  <DefaultFooter
    copyright="2019 by Ant Financial Experience Technology Department"
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

## Permissions

Our permission modification also depends on it. For the original permission, we can completely delete it, and add the corresponding permission identifier in `src / access.ts`. Taking pro as an example, we only used`canAdmin`.

```tsx | pure
// src / access.ts
export default function (initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
  };
}
```

After the migration, we can delete the original permission component. `src / utils / Authorized.ts`,`src / utils / authority.ts`, `src / components / Authorized / **`.

In the router of config.ts we need to delete `authority` and change it to`access: 'canAdmin'` and at the same time we can use all the methods about permissions in util.

For the runtime code, we provide two APIs to help us customize any form of UI and logic. Here is a demo that you can understand at a glance.

```tsx | pure
import React from 'react';
import {useAccess, Access} from 'umi';

const PageA = (props) => {
  const {foo} = props;
  const access = useAccess (); // member of access: canAdmin

  if (access.canReadFoo) {
    // If Foo can be read, then ...
  }

  return (
    <div>
      <Access accessible = {access.canAdmin} fallback = {<div> Can not read foo content. </ Div>}>
        Foo content.
      </ Access>
      <Access accessible = {access.canDeleteFoo (foo)} fallback = {<div> Can not delete foo. </ Div>}>
        Delete foo.
      </ Access>
    </ div>
  );
};
```

## Request

In the original project, request is defined in `src / utils / request.ts`. In V5, you need to use umi to import. Each configuration needs to be written in app.ts for implementation.

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

V5 also comes with useRequest hooks, many pages do not need data sharing, we can use useRequest to quickly network requests, and built loading and run to indicate the status and re-request data, the use is extremely easy.

```ts
import { useRequest } from 'umi';

export default () => {
  const { data, error, loading } = useRequest(() => {
    return services.getUserList('/ api / test');
  });
  if (loading) {
    return <div> loading ... </div>;
  }
  if (error) {
    return <div> {error.message} </div>;
  }
  return <div> {data.name} </div>;
};
```

## Miscellaneous

Since all the logic has been detached, many dependencies are no longer needed, and we can delete some of them to increase the speed of dependency installation.

```bash
path-to-regexp
react-helmet-async
jsdom-global
enzyme
chalk
checkFiles
```

Now the layout plugin is always wrapped in the outermost layer. If we want to not use layout in a certain route, we can configure layout = false in the menu to hide it. For detailed configuration, please see [here](https://umijs.org/zh-CN/plugins/plugin-layout#layout).

For SettingDrawer, in order to facilitate integration and deployment, we developed `umi-plugin-setting-drawer`, as long as the plug-in is installed in the project and can be used quickly.
