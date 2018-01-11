---
order: 2
title: Layout
type: Introduction
---

Layout is the outermost structure for a project, ususaly consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page.

Ant Design currently provides two componetns for layout: [Layout](http://ant.design/components/layout/) and [Grid](http://ant.design/components/grid/).

---

## Using the Grid Component

Grid layout is widely used, one of its major benefits is responsiveness.

Grid Component provided by Ant Design is tremedously powerful. you can set span, responsive columns, and optional `flex` layout. It covers a majority of use-cases: See [Grid](http://ant.design/components/grid/) for details.

## Using the Layout Component

If you need more structured layout components, then [Layout](http://ant.design/components/layout/) is your best option. You only need to fill in the blanks to build professional layout. See [Layout](http://ant.design/components/layout/) for details.

## Building layout components for specific use cases.

Under most cases, we will build more specific components from the above ones, that includes navigation, sidebar, notification, titles etc., An example would be [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js) from Ant Design Pro.

We put layout components inside `layout`, parrallel to `routes` and `components`. It is worth noting that layout components has no fundamental difference from other components, just that it deals with layout.

### Handling `this.props.children`

In the process of building higher level abstraction, we often need to handle child nodes contained by Layout, `this.props.children` refers to the children of a component, If you need to filter`children`, we recommend using [React.children.forEach](https://facebook.github.io/react/docs/react-api.html#react.children.map).

```jsx
React.Children.forEach(children, function[(thisArg)])
```

If you need to pass additional `props` to children, we recommend using [Context](https://facebook.github.io/react/docs/context.html)

## Layout from Ant Design Pro

We abstract common layouts in Ant Design Pro, and put them in `/layouts`, includes:

- BasicLayout: Basic Layout, includes header navigation, sidebar and notification.

<img src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

- BlankLayout: Blank Layout
- PageHeaderLayout: Standard Layout with Page Header
- UserLayout: Layout for login and sign-ups.

<img src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

### Usage

To manage mappings between routes and pages, we put configurations under `src/common/router.js` as follows:

```jsx
const routerConfig = {
  '/': {
    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),
  },
  '/dashboard/analysis': {
    component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
  },
  '/user': {
    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),
  },
  '/user/login': {
    component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),
  },
};
```

See [router.js](https://github.com/ant-design/ant-design-pro/blob/master/src/router.js) for more details.
