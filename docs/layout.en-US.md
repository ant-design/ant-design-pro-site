---
order: 3
title: Layout
type: Development
---

Layout is the outermost structure for a project, usually consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page.

## Layout in Ant Design Pro

We abstract common layouts in Ant Design Pro, and put them in `/layouts`, includes:

- BasicLayout: Basic Layout, includes header navigation, sidebar and notification.

<img src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

- BlankLayout: Blank Layout
- UserLayout: Layout for login and sign-ups.

<img src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

### Usage

To manage mappings between routes and pages, we could configure `config/config.ts` as follows:

```jsx
module.exports = [
  {
    path: '/',
    component: '../layouts/BasicLayout', // layout for pages in routes
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

See [config.ts](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) for more details.

And more router config could be found in：[Umi router](https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1)。

#### Router config for Pro

We extend some configuration for Ant Design Pro's nav menu and authority.

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

- `name`: display name in menu and breadcrumb. Note that it is the key of locales data, you can change display text in [/src/locales/en-US.ts](https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/en-US.ts).
- `icon`: icon type of menu item.
- `hideInMenu`: whether hide itself in menu, default `false`。
- `hideChildrenInMenu`: whether hide it's children in menu, default `false`.
- `hideInBreadcrumb`: whether hide itself in breadcrumb, default `false`.
- `authority`: authority key, see more in [Authority Management](/docs/authority-management)。

## Ant Design Components for layout

Ant Design currently provides two components for layout: [Layout](http://ant.design/components/layout/) and [Grid](http://ant.design/components/grid/).

## Grid Component

Grid layout is widely used, one of its major benefits is responsiveness.

Grid Component provided by Ant Design is tremendously powerful. you can set span, responsive columns, and optional `flex` layout. It covers a majority of use-cases: See [Grid](http://ant.design/components/grid/) for details.

## Layout Component

If you need more structured layout components, then [Layout](http://ant.design/components/layout/) is your best option. You only need to fill in the blanks to build professional layout. See [Layout](http://ant.design/components/layout/) for details.

## Building layout components for specific use cases.

Under most cases, we will build more specific components from the above ones, that includes navigation, sidebar, notification, titles etc., An example would be [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/layouts/BasicLayout.tsx) from Ant Design Pro.

We put layout components inside `layouts`, parrallel to `pages` and `components`. It is worth noting that layout components has no fundamental difference from other components, just that it deals with layout.

> Beside components provided by Ant Design React, you could try layout components from [communication recommendation](https://ant.design/docs/react/recommendation-cn).
