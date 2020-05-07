---
order: 18
title: 全局初始数据
type: 基础使用
---

## 简介

几乎大部分中台项目都有一个需求，就是在整个应用加载前请求用户信息或者一些全局依赖的基础数据。这些信息通常会用于 Layout 上的基础信息（通常是用户信息），权限初始化，以及很多页面都可能会用到的基础数据。

在中台最佳实践中，我们提供了一个极简的方式来初始化这部分数据，并且和 Layout 以及权限打通。改方案基于 umi 插件 [@umijs/plugin-initial-state](https://umijs.org/zh-CN/plugins/plugin-initial-state)。

## 如何使用

### 初始化

在 umi 的运行时配置 `src/app.ts`  中添加运行时配置 `getInitialState` ，该配置是一个 async 的 function，示例如下：

```typescript
export async function getInitialState() {
  return {
    userName: 'xxx',
  };
}
```

### 页面中消费

该方法返回的数据最后会被默认注入到一个 namespace 为 `@@initialState`  的 model 中。你可以通过 `useModel`  这个 hook 来消费它。如下：

```typescript
import React from 'react';

import { useModel } from 'umi';
import { Spin } from 'antd';

export default () => {
  const { initialState, loading, refresh } = useModel('@@initialState');

  if (loading) {
    return <Spin />;
  }

  return <div>{initialState.userName}</div>;
};
```

如上面的示例所示，在项目中的任意组件你都可以获取到该部分数据。同时能得到一个布尔值 loading，和一个用于重新获取 initialState 的方法 refresh. 例如，将用户信息存在 initialState 中，用户修改了自己的手机号，则可以调用 refresh 重新获取最新的数据。

### 和 Layout 以及权限打通

这些初始数据会在权限初始化的时候默认传递给权限的初始化方法（在 `src/access.ts`  中定义，具体参考权限部分教程），以及传递给 Layout，返回的内容需要满足 Layout 的定义，满足的情况下 Layout 会使用它来作为 Layout 中的用户信息等来源。
