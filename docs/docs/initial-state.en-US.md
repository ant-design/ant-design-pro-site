---
order: 32
title: Global Initial State
group:
  title: Data Management
nav:
  title: Documents
  path: /docs
  order: 1
---

## Introduction

Almost most middleware projects have a requirement to request user information or some globally dependent base data before the entire application loads. This information is typically used for base information on Layout (usually user information), permission initialization, and base data that many pages may use.

In the middleground best practice, we provide a minimalistic way to initialize this data and to bridge it with Layout and permissions. The solution is based on the umi plugin [@umijs/plugin-initial-state](https://umijs.org/zh-CN/plugins/plugin-initial-state).

## How to use

### Initialization

Add the runtime configuration `getInitialState` to umi's runtime configuration ``src/app.ts`, which is an async function, for example

```tsx | pure
export async function getInitialState() {
  return {
    userName: 'xxx',
  };
}
```

### Consuming in a component

The data returned by this method is eventually injected by default into a model with namespace `@@initialState`. It can be consumed via the ``useModel`'' hook.

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

| return value    | type                  | description                                            |
| --------------- | --------------------- | ------------------------------------------------------ |
| initialState    | T                     | Return value of getInitialState                        |
| loading         | boolean               | Whether or not the application is in the loading state |
| refresh         | () => void            | re-execute the getInitialState method                  |
| setInitialState | (newState: T) => void | Manually set the initial value                         |
