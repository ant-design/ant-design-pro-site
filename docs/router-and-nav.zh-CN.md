---
order: 3
title: 路由和菜单
type: 开发
---

路由和菜单是组织起一个应用的关键骨架，pro 中的路由为了方便管理，使用了中心化的方式，在 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 统一配置和管理。

## 基本结构

在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：

- `路由管理` 通过约定的语法根据在 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 中配置路由。
- `菜单生成` 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。
- `面包屑` 组件 [PageHeader](http://pro.ant.design/components/PageHeader) 中内置的面包屑也可由脚手架提供的配置信息自动生成。

下面简单介绍下各个模块的基本思路，如果你对实现过程不感兴趣，只想了解应该怎么实现相关需求，可以直接查看[需求实例](/docs/router-and-nav#需求实例)。

### 路由

目前脚手架中所有的路由都通过 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 来统一管理，在 umi 的配置中我们增加了一些参数，如 `name`，`icon`，`hideChildrenInMenu`，`authority`，来辅助生成菜单。其中：

- `name` 和 `icon`分别代表生成菜单项的文本和图标。
- `hideChildrenInMenu` 用于隐藏不需要在菜单中展示的子路由。用法可以查看 `分步表单` 的配置。
- `hideInMenu` 可以在菜单中不展示这个路由，包括子路由。
- `authority` 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。
  > 你可能注意到配置中的 `name` 和菜单实际展示的不同，这是因为我们使用了全球化组件的原因，具体参见 [i18n](/docs/i18n)

### 菜单

菜单根据 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 生成。

> 如果你的项目并不需要菜单，你可以在 [`src/layouts/BasicLayout`](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.tsx#L116) 中设置 `menuRender={false}`，

### 从服务器请求菜单

只需在 [models/menu](https://github.com/ant-design/ant-design-pro/blob/master/src/models/menu.ts#L111) 中发起 http 请求，menuData 是一个 json 数组。只需服务器返回类似格式的 json 即可。

```js
[
  {
    path: '/dashboard',
    name: 'dashboard',
    icon: 'dashboard',
    children: [
      {
        path: '/dashboard/analysis',
        name: 'analysis',
        exact: true,
      },
      {
        path: '/dashboard/monitor',
        name: 'monitor',
        exact: true,
      },
      {
        path: '/dashboard/workplace',
        name: 'workplace',
        exact: true,
      },
    ],
  }
  ...
]
```

> 注意 path 必须要在 config.ts 中定义。（约定式路由不需要，只需页面真实有效即可）

### 面包屑

面包屑由 `PageHeaderWrapper` 实现，`MenuContext` 将 根据 `MenuData` 生成的 `breadcrumbNameMap` 通过 props 传递给了 `PageHeader`，如果你要做自定义的面包屑，可以通过修改传入的 `breadcrumbNameMap` 来解决。

`breadcrumbNameMap` 示例数据如下：

```js
{
  '/': { path: '/', redirect: '/dashboard/analysis', locale: 'menu' },
  '/dashboard/analysis': {
    name: 'analysis',
    component: './Dashboard/Analysis',
    locale: 'menu.dashboard.analysis',
  },
  ...
}
```

## 需求实例

上面对这部分的实现概要进行了介绍，接下来通过实际的案例来说明具体该怎么做。

### 菜单跳转到外部地址

你可以直接将完整 url 填入 path 中，框架会自动处理。

```js
{
    path: 'https://pro.ant.design/docs/getting-started-cn',
    target: '_blank', // 点击新窗口打开
    name: "文档",
}
```

### 新增页面

脚手架默认提供了两种布局模板：`基础布局 - BasicLayout` 以及 `账户相关布局 - UserLayout`：

<img alt="基础布局" src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

<img alt="账户相关布局" src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

如果你的页面可以利用这两种布局，那么只需要在路由配置中增加一条即可：

```js
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      { path :'/dashboard/test',component:"./Dashboard/Test"},
    ...
},
```

加好后，会默认生成相关的路由及导航。

### 新增布局

在脚手架中我们通过嵌套路由来实现布局模板。[`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。

```js
module.exports = [
   // user
   {
    path: '/user',
    component: '../layouts/UserLayout',
    routes:[...]
   },
   // app
   {
    path: '/',
    component: '../layouts/BasicLayout',
    routes:[...]
   },
   // new
   {
    path: '/new',
    component: '../layouts/new_page',
    routes:[...]
   },
]

```

### 在菜单中使用自定义的 icon

由于 umi 的限制，在 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 是不能直接只是用组件的，Pro 中暂时支持 使用 [`ant.design`](https://ant.design/components/icon-cn/) 本身的 icon type，和传入一个 img 的 url。只需要直接在 icon 属性上配置即可，如果是个 url，Pro 会自动处理为一个 img 标签。

> 如果你想使用 iconfont 的图标，你可以使用[ant.desgin](https://ant.design/components/icon-cn/#%E8%87%AA%E5%AE%9A%E4%B9%)的自定义图标.

### 带参数的路由

脚手架默认支持带参数的路由，但是在菜单中显示带参数的路由并不是个好主意，我们并不会自动的帮你注入一个参数，你可能需要在代码中自行处理。

```js
{
  path: '/dashboard/:page',
  hideInMenu:true,
  name: 'analysis',
  component: './Dashboard/Analysis',
},
```

你可以通过以下代码来跳转到这个路由：

```js
import router from 'umi/router';

router.push('/dashboard/anyParams');

//or

import Link from 'umi/link';

<Link to="/dashboard/anyParams">go</Link>;
```

在路由组件中，可以通过`this.props.match.params` 来获得路由参数。

更多详细内容请参见：[umi#路由](https://umijs.org/guide/router.html#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1)
