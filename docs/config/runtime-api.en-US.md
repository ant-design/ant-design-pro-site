---
title: Runtime Config
order: 3
nav:
  title: Config
  path: /config
  order: 2
---

It is not possible to use dom during construction, so some configurations may need to be configured at runtime. Generally speaking, we manage runtime configuration in `src/app.tsx`.

## getInitialState

`getInitialState` is used to obtain initial data, and the initial data is used in various components using `useModel`. In the request, `getInitialState` will block the page loading.

```tsx | pure
/**
 * @see https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
}> {
  // If it is a login page, do not execute
  const currentUser = await fetchUserInfo();
  return {
    currentUser,
  };
}
```

## initialStateConfig

`initialStateConfig` is the supplementary configuration of `getInitialState`, `getInitialState` supports asynchronous settings, we show a loading before the initialization is completed, and `initialStateConfig` can configure this loading.

```tsx | pure
/** When obtaining user information is slow, a loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
```

## request

`request` is used to configure global network requests. You can configure interceptors, global error handling, and authentication here.

```tsx | pure
export const request: RequestConfig = {
  errorHandler: (error: ResponseError) => {
    const { messages } = getIntl(getLocale());
    const { response } = error;
    notification.error({
      description: 'Your network is abnormal and cannot connect to the server',
      message: 'Network abnormal',
    });
    throw error;
  },
};
```

## [layout](https://procomponents.ant.design/components/layout)

Dom cannot be used during construction, so some configurations may need to be configured at runtime. We can export a `layout` in `src/app.tsx` for configuration:

```tsx | pure
import React from 'react';
import { RunTimeLayoutConfig } from 'umi';
import { BasicLayoutProps, Settings as LayoutSettings } from '@ant-design/pro-layout';

// API supported by ProLayout https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.name,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      console.log(location.pathname);
    },
    // Customize the 403 page
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
    childrenRender: (children) => {
      return <div>{children}</div>;
    },
  };
};
```

The layout supports a function, which can be used in conjunction with `initialState` to put dynamic data into `initialState` and it will trigger an update every time `initialState` changes.
