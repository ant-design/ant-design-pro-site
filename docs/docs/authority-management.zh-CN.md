---
order: 30
title: 权限管理
group:
  title: 数据管理
nav:
  title: 文档
  path: /docs
  order: 1
---

## 一、简介

在项目中经常有的场景是不同的用户的权限不同，通常有如下场景：

- 不同的用户在页面中可以看到的元素和操作不同
- 不同的用户对页面的访问权限不同

> 针对这些场景，我们为中台场景下常用的权限控制提供了一种更加简单、易用、通用的解决方案。实现了一个基于 umi 插件的权限管理方案 - [@umijs/plugin-access](https://umijs.org/zh-CN/plugins/plugin-access)。通过定义权限，使用权限，完成 **React 组件内的执行权限控制，渲染权限控制。**搭配 [@alipay/umi-plugin-layout](https://umijs.org/zh-CN/plugins/plugin-layout) 插件一起使用，还可以进一步完成对**路由权限**的控制。

## 二、如何使用

### 初始化

权限的定义依赖于初始数据，初始数据需要通过 [@umijs/plugin-initial-state](https://umijs.org/zh-CN/plugins/plugin-initial-state) 生成。

生成完初始化数据后，就可以开始定义权限了。首先新建 `src/access.ts` ，在该文件中 `export default` 一个函数，定义用户拥有的权限，以下是示例定义：

```tsx | pure
// src/access.ts
export default function (initialState) {
  return {
    canReadFoo: true,
    canUpdateFoo: () => true,
    canDeleteFoo: (data) => data?.status < 1, // 按业务需求自己任意定义鉴权函数
  };
}
```

该文件需要返回一个 function，返回的 function 会在应用初始化阶段被执行，执行后返回的对象将会被作为用户所有权限的定义。对象的每个 key 对应一个 boolean 值，只有 true 和 false，代表用户是否有该权限。

其中的 `initialState`  来自于[全局初始化数据](initial-state)，你可以基于这些数据来初始化用户权限。

### 页面内的权限控制
> 【注意】使用 useAccess, Access 前，需要在 config/config.ts 存在配置 *access: {},*，其他配置详见 [@umijs/plugin-access](https://v3.umijs.org/zh-CN/plugins/plugin-access)
> 
使用示例如下：

```tsx | pure
import React from 'react';
import { useAccess, Access } from 'umi';

const PageA = (props) => {
  const { foo } = props;
  const access = useAccess(); // access 实例的成员: canReadFoo, canUpdateFoo, canDeleteFoo

  if (access.canReadFoo) {
    // 任意操作
  }

  return (
    <div>
      <Access accessible={access.canReadFoo} fallback={<div>Can not read foo content.</div>}>
        Foo content.
      </Access>
      <Access accessible={access.canUpdateFoo()} fallback={<div>Can not update foo.</div>}>
        Update foo.
      </Access>
      <Access accessible={access.canDeleteFoo(foo)} fallback={<div>Can not delete foo.</div>}>
        Delete foo.
      </Access>
    </div>
  );
};
```

你可以通过 `useAccess` hook 来获取权限定义，另外我们内置了 `Access`  组件用于页面的元素显示和隐藏的控制。

`Access` 组件只有 hooks 的用法，如果需要在 class 组件中使用的话，可以把需要用到权限的拆分为 function。

示例如下：

```react
const Button=()=>{
   const  access =  useXX();
   // 权限处理
   return <Button/>
}
```

## 三、路由和菜单的权限控制

如果需要对路由还有菜单进行权限控制，可以直接在路由上原有基础配置上加上权限控制相关的属性，即可快速实现路由和菜单的权限控制。**（前提需要使用最佳实践的 Layout 方案 - [@alipay/umi-plugin-layout](https://umijs.org/zh-CN/plugins/plugin-layout) ）**。

在以上定义(`src/access.ts`, `src/app.ts`)完成的基础上，再在路由配置项上添加 `access` 属性即可完成路由和菜单的权限控制。`access` 属性的值为 `src/access.ts` 中返回的对象的 key。以下为实际例子：

假设权限定义文件 `src/access.ts` 内容如下：

```tsx | pure
// src/access.ts
export default function (initialState = {}) {
  const { isAdmin, hasRoutes = [] } = initialState;
  return {
    // ...
    adminRouteFilter: () => isAdmin, // 只有管理员可访问
    normalRouteFilter: (route) => hasRoutes.includes(route.name), // initialState 中包含了的路由才有权限访问
  };
}
```

> 通过以上示例可以看到，权限路由控制相关的函数，接收"当前处理的路由"作为第一个参数

那么只需要按以下方式在常规路由配置中加上 `access` 这一项即可：

```tsx | pure
// config/config.ts
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/foo',
      name: 'foo',
      // ...
      access: 'normalRouteFilter', // 会调用 src/access.ts 中返回的 normalRouteFilter 进行鉴权
    },
    {
      path: '/admin',
      name: 'admin',
      // ...
      access: 'adminRouteFilter', // 会调用 src/access.ts 中返回的 adminRouteFilter 进行鉴权
    },
  ],
  // ...
});
```

对应鉴权函数(比如 `adminRouteFilter`)在接收路由作为参数后返回值为 `false`，该条路由将会被禁用，并且从左侧 layout 菜单中移除，如果直接从 URL 访问对应路由，将看到一个 403 页面。
