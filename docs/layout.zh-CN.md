---
order: 3
title: 布局
type: 开发
---

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。

## Ant Design Pro 的布局

在 Ant Design Pro 中，我们抽离了使用过程中的通用布局，都放在 `layouts` 目录中，分别为：

- BasicLayout：基础页面布局，包含了头部导航，侧边栏和通知栏：

<img src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

- UserLayout：抽离出用于登录注册页面的通用布局
- BlankLayout：空白的布局

<img src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

### 如何使用 Ant Design Pro 布局

通常布局是和路由系统紧密结合的，Ant Design Pro 的路由使用了 Umi 的路由方案，我们将配置信息统一抽离到 `config/config.ts` 下，通过如下配置定义每个页面的布局：

```js
routers: [
  {
    path: '/',
    component: '../layouts/BasicLayout', // 指定以下页面的布局
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
          { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
          { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
        ],
      },
    ],
  },
];
```

映射路由和页面布局（组件）的关系如代码所示，完整映射转换实现可以参看 [config.ts](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts)。

更多 Umi 的路由配置方式可以参考：[Umi 配置式路由](https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1)。

#### Pro 扩展配置

我们在 `config.ts` 扩展了一些关于 pro 全局菜单的配置。

```
{
  name: 'dashboard',
  icon: 'dashboard',
  hideInMenu: true,
  hideChildrenInMenu: true,
  hideInBreadcrumb: true,
  authority: ['admin'],
}
```

- `name`: 当前路由在菜单和面包屑中的名称，注意这里是国际化配置的 key，具体展示菜单名可以在 [/src/locales/zh-CN.ts](https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/zh-CN.ts) 进行配置。
- `icon`: 当前路由在菜单下的图标名。
- `hideInMenu`: 当前路由在菜单中不展现，默认 `false`。
- `hideChildrenInMenu`: 当前路由的子级在菜单中不展现，默认 `false`。
- `hideInBreadcrumb`: 当前路由在面包屑中不展现，默认 `false`。
- `authority`: 允许展示的权限，不设则都可见，详见：[权限管理](/docs/authority-management)。

## Ant Design 布局组件

除了 Pro 里的内建布局以外，在一些页面中需要进行布局，可以使用 Ant Design 目前提供的两套布局组件工具：[Layout](http://ant.design/components/layout/) 和 [Grid](http://ant.design/components/grid/)。

### Grid 组件

栅格布局是网页中最常用的布局，其特点就是按照一定比例划分页面，能够随着屏幕的变化依旧保持比例，从而具有弹性布局的特点。

而 Ant Design 的栅格组件提供的功能更为强大，能够设置间距、具有支持响应式的比例设置，以及支持 `flex` 模式，基本上涵盖了大部分的布局场景，详情参看：[Grid](http://ant.design/components/grid/)。

### Layout 组件

如果你需要辅助页面框架级别的布局设计，那么 [Layout](http://ant.design/components/layout/) 则是你最佳的选择，它抽象了大部分框架布局结构，使得只需要填空就可以开发规范专业的页面整体布局，详情参看：[Layout](http://ant.design/components/layout/)。

### 根据不同场景区分抽离布局组件

在大部分场景下，我们需要基于上面两个组件封装一些适用于当下具体业务的组件，包含了通用的导航、侧边栏、顶部通知、页面标题等元素。例如 Ant Design Pro 的 [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/layouts/BasicLayout.tsx)。

通常，我们会把抽象出来的布局组件，放到跟 `pages`、 `components` 平行的 `layouts` 文件夹中方便管理。需要注意的是，这些布局组件和我们平时使用的其它组件并没有什么不同，只不过功能性上是为了处理布局问题。

> 除了 Ant Design 官方提供的布局组件，也可以试试 [社区精选](https://ant.design/docs/react/recommendation-cn) 里推荐的布局组件。
