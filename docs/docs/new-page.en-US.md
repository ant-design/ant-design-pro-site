---
order: 12
title: New Page
group:
  title: Page Development
nav:
  title: Documents
  path: /docs
  order: 1
---

The "page" here refers to the module that is configured with routing and can be directly accessed through the link. If you want to create a new page, you can usually perform simple configuration on the basis of scaffolding.

## Manually create

## Add ts, less files

Create a new js, less file under src / pages. If there are multiple related pages, you can create a new folder to place the related files.

```diff
config
src
  models
  pages
+ NewPage.js
+ NewPage.less
  ...
...
package.json
```

For a better demonstration, we initialize the contents of `NewPage.js` as follows:

```tsx | pure | pure
export default () => {
  return <div>New Page</div>;
};
```

Don’t add content to the style files in this document for now, you can also try to add content yourself.

The style file uses [CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html) by default. If necessary, you can import [antd less variable](https://github.com/ant -design/ant-design/blob/master/components/style/themes/default.less) at the head of the file:

```less
@import '~antd/lib/style/themes/default.less';
```

This makes it easy to get the antd style variables and use them in the file, which can maintain the consistency of the page and help implement custom themes.

### New layout

In scaffolding, we implement layout templates by nesting routes. [`config.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) is an array, where the first level of data is our layout, If you need to add a new layout, you can directly add a new first-level data.

```tsx | pure | pure
export default [
 // user
 {
  path:'/user',
  component:'../layouts/UserLayout',
  routes:[...]
 },
 // app
 {
  path:'/',
  component:'../layouts/BasicLayout',
  routes:[...]
 },
 // new
 {
  path:'/new',
  component:'../layouts/new_page',
  routes:[...]
 },
]

```

## Add files to menus and routes

The menu in Bigfish's default layout is generated based on the route in `routes.ts`, so we can configure the route and the menu will also be generated.

We need to use `component` in `routes.ts` to configure our page to route.

```tsx | pure | pure
export default [
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      {
        // path is supported as a url and must start with http
        path: 'https://pro.ant.design/docs/getting-started-cn',
        target: '_blank', // Click to open a new window
        name: 'Document',
      },
      {
        // Access route, start with / as absolute path
        path: '/user/login',
        // ./Page ->src/pages/Login
        component: './NewPage',
      },
      {
        // Access the route, if it does not start with /, it will splice the parent route
        // reg -> /user/reg
        path: 'reg',
        // ./Page ->src/pages/Reg
        component: '../layouts/NewPage2',
      },
    ],
  },
];
```

After the routing configuration is completed, you can see the effect by visiting the page. If you need to display it in the menu, you need to configure `name`, `icon`, `hideChildrenInMenu`, etc. to assist in generating the menu.

The specific values ​​are as follows:

-`name:string` The name of the configuration menu. If internationalization is configured, name is the internationalization key. -`icon:string` The chart of the configuration menu uses the antd icon name by default, and the icon of the secondary menu is not applicable by default. -`access:string` permissions configuration, you need to configure permissions in advance -`hideChildrenInMenu:true` is used to hide child routes that do not need to be displayed in the menu. -`hideInMenu:true` can not show this route in the menu, including sub-routes. -`hideInBreadcrumb:true` can not show this route in breadcrumbs, including sub-routes. -`headerRender:false` The current route does not show the top bar -`footerRender:false` The current route does not display the footer -`menuRender: false` The current route does not display the menu -`menuHeaderRender: false` The current route does not display the menu top bar -`flatMenu` child items are raised, but the parent menu is not displayed

### Use iconFont in the menu

To use the iconFont icon must meet two conditions

-Pass in an iconFont url link -The icon name must start with icon-

Configuration in `src/app.tsx`:

```tsx | pure| pure
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    iconfontUrl: '//at.alicdn.com/t/XXX.js',
  };
};
```

The connection of iconfontUrl needs to be obtained from the official website of [iconfont](https://www.iconfont.cn/)

![iconfontUrl](https://gw.alipayobjects.com/zos/antfincdn/IDUHlF6tYH/16ed4957ec7b3af5.png)

Configuration in routing:

```tsx | pure | pure
{
path:'/home',
name:'home',
icon:'icon-home', // need to start with icon-
component:'./home',
};
```

After the layout and routing are configured, go back to the newly created `NewPage.js`, and you can start writing business code!
