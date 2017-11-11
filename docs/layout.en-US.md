---
order: 1
title: Layout 
type: Introduction
---

Layout is the outermost structure for a project, ususaly consists of navigaation, footer, sidebar, notification and content. There are also a lot of different layouts within a page.

Ant Design currently provides two componetns for layout: [Layout](http://ant.design/components/layout/) and [Grid](http://ant.design/components/grid/).

---

## Use the Grid Component

Grid layout is widely used, one of its major benefits is responsiveness.

Grid Component provided by Ant Design is tremedously powerful. you can set span, responsive columns, and optional `flex` layout. It covers majority of, if not all, use-cases. See [Grid](http://ant.design/components/grid/) for details.

## Use the Layout Component

If you need more structured layout components, then [Layout](http://ant.design/components/layout/) is your best option. You only need to fill in the blanks to build professional layout. See [Layout](http://ant.design/components/layout/) for details.

## Build layout components for specific use cases.

Under most cases, we will build more specific components from the above ones, that includes navigation, sidebar, notification, titles etc., like [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js) from Ant Design Pro

We put layout components inside `layout`, parrallel to `routes` and `components`. It is worth noting that layout components has no fundamental difference from other components, just that it deals with layout.

### Handle `this.props.children`

在抽离的过程中，往往需要处理布局包含的内容组件，而 `this.props.children` 就代表了标签中的内容，If you need to filter`children`, we recommend [React.children.forEach](https://facebook.github.io/react/docs/react-api.html#react.children.map).

```jsx
React.Children.forEach(children, function[(thisArg)])
```

If you need to pass additional `props` to children, we recommend using [Context](https://facebook.github.io/react/docs/context.html)

## Layout for Ant Design Pro

We abstract common layouts in Ant Design Pro, and put them in `/layouts`, includes:

- BasicLayout: Basic Layout, includes header navigation, sidebar and notification.

<img src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

- BlankLayout: Blank Layout
- PageHeaderLayout: Standard Layout with Page Header
- UserLayout: Layout for login and sign-ups.

<img src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

### How-to

我们为了统一方便的管理路由和页面的关系，将配置信息统一抽离到 `common/nav.js` 下，通过如下配置：

```jsx
const data = [{
  component: BasicLayout,
  name: '首页',  // for breadcrumb
  path: '',
  children: [{...}],
}, {
  component: UserLayout,
  children: [{
    name: 'User',
    icon: 'user',
    path: 'user',
    children: [{
      name: 'Login',
      path: 'login',
      component: Login,
    }, {
      name: 'Register',
      path: 'register',
      component: Register,
    }, {
      name: 'Register Result',
      path: 'register-result',
      component: RegisterResult,
    }],
  }],
}];
```

映射路由和页面布局（组件）的关系。详细的映射转换实现, See [router.js](https://github.com/ant-design/ant-design-pro/blob/master/src/router.js)。
