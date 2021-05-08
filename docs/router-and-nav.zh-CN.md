---
order: 10
title: 路由和菜单
type: 页面开发
---

路由和菜单是组织起一个应用的关键骨架，pro 中的路由为了方便管理，使用了中心化的方式，在 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 统一配置和管理。

## 基本结构

在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：

- `路由管理` 通过约定的语法根据在 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 中配置路由。
- `菜单生成` 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。
- `面包屑` 组件 [PageContainer](https://github.com/ant-design/ant-design-pro-layout#PageContainer) 中内置的面包屑,也可通过 [RouteContext](/blog/new-pro-use-cn#routecontext) 提供的信息自定义生成。

下面简单介绍下各个模块的基本思路，如果你对实现过程不感兴趣，只想了解应该怎么实现相关需求，可以直接查看[需求实例](/docs/router-and-nav-cn#需求实例)。

### 路由

目前脚手架中所有的路由都通过 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 来统一管理，在 umi 的配置中我们增加了一些参数，如 `name`，`icon`，`hideChildrenInMenu`，`authority`，来辅助生成菜单。其中：

- `name` 和 `icon`分别代表生成菜单项的文本和图标。项目使用[Ant Design 图标](https://ant.design/components/icon-cn/)，填入对应的图标名称即可使用。
- `hideChildrenInMenu` 用于隐藏不需要在菜单中展示的子路由。用法可以查看 `分步表单` 的配置。
- `hideInMenu` 可以在菜单中不展示这个路由，包括子路由。
- `authority` 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。
  > 你可能注意到配置中的 `name` 和菜单实际展示的不同，这是因为我们使用了全球化组件的原因，具体参见 [i18n](/docs/i18n)

### 菜单

菜单根据 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 生成。

> 如果你的项目并不需要菜单，你可以在 [src/layouts/BasicLayout.tsx](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.tsx#L116) 中设置 `menuRender={false}`。

### 从服务器请求菜单

你可以在 [src/layouts/BasicLayout.tsx](https://github.com/ant-design/ant-design-pro/blob/4420ae2c224144c4114e5384bddc3e8ab0e1dc1c/src/layouts/BasicLayout.tsx#L116) 中修改 `menuDataRender`，并在代码中发起 http 请求，只需服务器返回下面格式的 json 即可。

```jsx
const [menuData, setMenuData] = useState([]);

useEffect(() => {
  // 这里是一个演示用法
  // 真实项目中建议使用 dva dispatch 或者 umi-request
  fetch('/api/example.json')
    .then(response => response.json())
    .then(data => {
      setMenuData(data || []);
    });
}, []);

...

return (
  <ProLayout
    // ...
    menuDataRender={() => menuData}
    // ...
  />
);
```

`menuData` 数据格式如下，ts 定义在此：[MenuDataItem](https://github.com/ant-design/ant-design-pro-layout/blob/56590a06434c3d0e77dbddcd2bc60827c9866706/src/typings.ts#L18).

```json
[
  {
    "path": "/dashboard",
    "name": "dashboard",
    "icon": "dashboard",
    "children": [
      {
        "path": "/dashboard/analysis",
        "name": "analysis"
      },
      {
        "path": "/dashboard/monitor",
        "name": "monitor"
      },
      {
        "path": "/dashboard/workplace",
        "name": "workplace"
      }
    ]
  }
  // ....
]
```

> 注意 path 必须要在 config.ts 中定义。（约定式路由不需要，只需页面真实有效即可）注意 如果没有选用 typescript，config.js 中菜单的嵌套写法，需要把 "children" 换成 "routes"

### 面包屑

面包屑由 `PageContainer` 实现，`Layout` 将 根据 `MenuData` 生成的 `breadcrumb`，并通过 PageContainer 将其展现。 PageContainer 封装至 Ant Design 的 [PageHeader](https://ant.design/components/page-header-cn)，api 完全相同。

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

如果你需要自定义 menuItem 的点击逻辑，你可以通过 [menuItemRender](https://github.com/ant-design/ant-design-pro/blob/e14b1311d5efdd032a04d86ed4ed80292b832822/src/layouts/BasicLayout.tsx#L103) 的来实现。

### 在菜单中使用自定义图标

由于 umi 的限制，在 [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 是不能直接使用 React 组件的，Pro 中暂时支持使用 [`ant.design`](https://ant.design/components/icon-cn/) 本身的 icon `type`，和传入一个 img 的 url。只需要直接在 icon 属性上配置即可，如果是个 url，Pro 会自动处理为一个 img 标签。

> 如果你想使用 iconfont 的图标，你可以使用[ant.design](https://ant.design/components/icon-cn/#%E8%87%AA%E5%AE%9A%E4%B9%)的自定义图标.

### 带参数的路由

在菜单中显示带参数的路由并不是个好主意，框架并不能自动的帮你注入一个参数，你可能需要在代码中自行处理。

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

更多详细内容请参见：[umi#路由](https://umijs.org/zh/guide/router.html#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1)
