---
title: 运行时配置
order: 3
nav:
  title: 配置
  path: /config
  order: 2
---

在构建时是无法使用 dom 的，所以有些配置可能需要运行时来配置，一般而言我们都是在 `src/app.tsx` 中管理运行时配置。

## getInitialState

`getInitialState` 用于获取初始化数据，初始化数据使用 `useModel` 在各个组件中使用，在请求中 `getInitialState` 会堵塞页面加载。

```tsx | pure
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  currentUser?: API.CurrentUser;
}> {
  // 如果是登录页面，不执行
  const currentUser = await fetchUserInfo();
  return {
    currentUser,
  };
}
```

## initialStateConfig

`initialStateConfig` 是 `getInitialState` 的补充配置，`getInitialState` 支持异步的设置，在初始化没有完成之前我们展示了一个 loading，`initialStateConfig` 可以配置这个 loading。

```tsx | pure
/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};
```

## request

`request` 用于配置全局的网络请求，你可以在这里做拦截器，全局错误处理，鉴权的配置。

```tsx | pure
export const request: RequestConfig = {
  errorHandler: (error: ResponseError) => {
    const { messages } = getIntl(getLocale());
    const { response } = error;
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
    throw error;
  },
};
```

## [layout](https://procomponents.ant.design/components/layout)

在构建时是无法使用 dom 的，所以有些配置可能需要运行时来配置，我们可以在`src/app.tsx` 中 export 一个 `layout` 来进行配置：

```tsx | pure
import React from 'react';
import { RunTimeLayoutConfig } from 'umi';
import { BasicLayoutProps, Settings as LayoutSettings } from '@ant-design/pro-layout';

// ProLayout 支持的api https://procomponents.ant.design/components/layout
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
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
    childrenRender: (children) => {
      return <div>{children}</div>;
    },
  };
};
```

layout 支持一个 function，可以与 `initialState` 结合使用，将动态数据放入 `initialState` 中每次 `initialState` 变化都会触发更新。
