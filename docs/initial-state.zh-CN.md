---
order: 18
title: 全局初始数据
type: 基础使用
---

## 简介

配合 [plugin-model](./simple-model-cn)，提供一个在项目初始化之前获取全局数据的方法

## 如何使用

### 初始化

在项目的 `src/app.ts`  中添加运行时配置 `getInitialState` ，该配置需要是一个 async function，示例如下：

```typescript
export async function getInitialState() {
  return {
    userName: 'xxx',
  };
}
```

### 在组件中消费

该方法返回的数据最后会被默认注入到一个 namespace 为 `@@initialState`  的 model 中。可以通过 `useModel`  这个 hook 来消费它：

```typescript
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

| 返回值 | 类型 | 说明 |
|-|-|------|
| initialState | T | getInitialState 的返回值 |
| loading | boolean | 是否处在加载状态 |
| refresh | () => void | 重新执行 getInitialState 方法 |
| setInitialState | (newState: T) => void | 手动设置初始值 |

### 相关 umi 插件

- [plugin-model](./simple-model-cn)
配合 plugin-initial-state 可以快速在组件内获取到全局初始状态
- [plugin-layout](./layout-cn)
layout 中可以获取到 initialState 的状态，用于展示用户信息
- [plugin-access](./authority-management-cn)
plugin-access 中可以获取到 initialState 的状态，用于决定用户权限
