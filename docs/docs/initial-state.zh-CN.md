---
order: 32
title: 全局初始数据
group:
  title: 数据管理
nav:
  title: 文档
  path: /docs
  order: 1
---

## 简介

几乎大部分中台项目都有一个需求，就是在整个应用加载前请求用户信息或者一些全局依赖的基础数据。这些信息通常会用于 Layout 上的基础信息（通常是用户信息），权限初始化，以及很多页面都可能会用到的基础数据。

在中台最佳实践中，我们提供了一个极简的方式来初始化这部分数据，并且和 Layout 以及权限打通。该方案基于 umi 插件 [@umijs/plugin-initial-state](https://umijs.org/zh-CN/plugins/plugin-initial-state)。

## 如何使用

### 初始化

在 umi 的运行时配置 `src/app.ts`  中添加运行时配置 `getInitialState` ，该配置是一个 async 的 function，示例如下：

```tsx | pure
export async function getInitialState() {
  return {
    userName: 'xxx',
  };
}
```

### 在组件中消费

该方法返回的数据最后会被默认注入到一个 namespace 为 `@@initialState`  的 model 中。可以通过 `useModel`  这个 hook 来消费它：

```tsx | pure
import React from 'react';

import { useModel } from 'umi';
import { Spin } from 'antd';

export default () => {
  const { initialState, loading, refresh, setInitialState } = useModel('@@initialState');

  if (loading) {
    return <Spin />;
  }

  return <div>{initialState.userName}</div>;
};
```

API:

| 返回值          | 类型                  | 说明                          |
| --------------- | --------------------- | ----------------------------- |
| initialState    | T                     | getInitialState 的返回值      |
| loading         | boolean               | 是否处在加载状态              |
| refresh         | () => void            | 重新执行 getInitialState 方法 |
| setInitialState | (newState: T) => void | 手动设置初始值                |
