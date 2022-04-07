---
order: 12
title: 新增页面
group:
  title: 页面开发
nav:
  title: 文档
  path: /docs
  order: 1
---

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常可以在脚手架的基础上进行简单的配置。

## 手动创建

## 新增 ts、less 文件

在 src / pages 下创建新的 js，less 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件。

```diff
config
src
  models
  pages
+   NewPage.js
+   NewPage.less
  ...
...
package.json
```

为了更好的演示，我们初始化`NewPage.js`的内容如下：

```tsx | pure | pure
export default () => {
  return <div>New Page</div>;
};
```

暂时不向本文档中的样式文件添加内容，您也可以尝试自己添加内容。

样式文件默认使用[CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)，如果需要，可以导入[antd less 变量](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 在文件的头部：

```less
@import '~antd/lib/style/themes/default.less';
```

这样可以轻松获取 antd 样式变量并在文件中使用它们，这可以保持保持页面的一致性，并有助于实现自定义主题。

### 新增布局

在脚手架中我们通过嵌套路由来实现布局模板。[`routes.ts`](https://github.com/ant-design/ant-design-pro/blob/master/config/routes.ts) 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。

> layouts 文件时一个约定，layout 都应该放入其中。v5 没有了内置的布局，所以没有这个文件夹，如果你的项目中没有手动创建即可。

```tsx | pure | pure
export default [
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

## 将文件加入菜单和路由

Bigfish 的默认布局中的菜单根据 `routes.ts` 中的路由生成的，所以我们可以配置路由，菜单也会产生。

我们需要在 `routes.ts` 中使用 `component` 配置我们页面到路由中。

```tsx | pure | pure
export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        // path 支持为一个 url，必须要以 http 开头
        path: 'https://pro.ant.design/docs/getting-started-cn',
        target: '_blank', // 点击新窗口打开
        name: '文档',
      },
      {
        // 访问路由，以 / 开头为绝对路径
        path: '/user/login',
        // ./Page ->src/pages/Login
        component: './NewPage',
      },
      {
        // 访问路由，如果不是以 / 开头会拼接父路由
        // reg -> /user/reg
        path: 'reg',
        // ./Page ->src/pages/Reg
        component: '../layouts/NewPage2',
      },
    ],
  },
];
```

路由配置完成后，访问页面即可看到效果，如果需要在菜单中显示，需要配置 `name`，`icon`，`hideChildrenInMenu`等来辅助生成菜单。

具体值如下：

- `name:string` 配置菜单的 name，如果配置了国际化，name 为国际化的 key。
- `icon:string` 配置菜单的图标，默认使用 antd 的 icon 名，默认不适用二级菜单的 icon。
- `access:string` 权限配置，需要预先配置权限
- `hideChildrenInMenu:true` 用于隐藏不需要在菜单中展示的子路由。
- `hideInMenu:true` 可以在菜单中不展示这个路由，包括子路由。
- `hideInBreadcrumb:true` 可以在面包屑中不展示这个路由，包括子路由。
- `headerRender:false` 当前路由不展示顶栏
- `footerRender:false` 当前路由不展示页脚
- `menuRender: false` 当前路由不展示菜单
- `menuHeaderRender: false` 当前路由不展示菜单顶栏
- `parentKeys: string[]` 当此节点被选中的时候也会选中 parentKeys 的节点
- `flatMenu` 子项往上提，只是不展示父菜单

### 在菜单中使用 iconFont

要使用 iconFont 的图标必须满足两个条件

- 传入一个 iconFont 的 url 链接
- icon 命名必须以 icon-开头

在 `src/app.tsx` 中的配置：

```tsx | pure| pure
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    iconfontUrl: '//at.alicdn.com/t/XXX.js',
  };
};
```

iconfontUrl 的连接需要在 [iconfont](https://www.iconfont.cn/) 官网中获取

![iconfontUrl](https://gw.alipayobjects.com/zos/antfincdn/IDUHlF6tYH/16ed4957ec7b3af5.png)

在路由中的配置:

```tsx | pure | pure
{
path: '/home',
name: 'home',
icon: 'icon-home', // 需要以 icon- 开头
component: './home',
};
```

布局及路由都配置好之后，回到之前新建的 `NewPage.js`，可以开始写业务代码了！
