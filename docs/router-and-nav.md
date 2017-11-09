---
order: 2
title:
  en-US: Router and Nav 
  zh-CN: 路由和菜单 
type: 入门
---

路由和菜单是组织起一个应用的关键骨架，我们的脚手架提供了一些基本的工具及模板，帮助你更方便的搭建自己的路由/菜单。

如果你想了解更多关于 `browserHistory` 和 `hashHistory`，请参看 [构建和发布](/docs/deploy)。

---

## 前序知识

在脚手架中，我们已经搭好了自动生成路由和菜单的基本框架，根据实现方式的区别，通常对于导航和路由相关的需求，可以分为以下两种：

- **可以利用现有布局及导航展示规则，只是新增页面**。

   这种情况下，你只需要对导航数据进行增删，就能完成路由和导航的配置。

- **新增页面有不同的布局，或不同的导航展示规则**。

   这种情况会稍微麻烦一些，修改数据的同时，还需要你新建布局文件，还可能需要自己生成相应的导航，或对现有规则进行调整。

> 注意：我们的脚手架依赖 `dva@2`，路由方面是基于 `react-router@4` 的实现，在写法以及 API 上与之前的版本有较大不同，所以，对于上面提到的第二种情况，需要你具备一些相关的基础知识。这里给出几篇关键文档：
>
  - [react-router](https://reacttraining.com/react-router/web/guides/philosophy)
  - [Migrating from v2/v3 to v4](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)
  - [dva@2.0](https://github.com/sorrycc/blog/issues/48)

下面简单介绍两种情况下如何添加路由/菜单。

## 添加路由/菜单

### 添加页面

脚手架默认提供了两种布局模板：`基础布局 - BasicLayout` 以及 `账户相关布局 - UserLayout`：

<img alt="基础布局" src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

<img alt="账户相关布局" src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

如果你的页面可以利用这两种布局，那么只需要在导航数据中增加一条即可。打开文件 `src/common/nav.js`，添加你的页面信息：

```js
{
  name: '新页面',             // 页面名称，会展示在菜单栏中
  path: 'new',               // 匹配的路由
  icon: 'file',              // 页面图标，会展示在菜单栏中
  component: app => dynamic({
    app,
    component: () => import('../routes/NewPage'),
  }),                        // 动态引入页面对应的组件
}
```

加好后，会默认生成相关的路由及导航。

### 添加 Layout 模板

如果提供的布局不能满足你的要求，就需要自己新建 Layout 模板了。同样的，打开文件 `src/common/nav.js`，添加你的模板及页面信息：

```js
{
  component: app => dynamic({
    app,
    component: () => import('../layouts/NewLayout'),
  }),                         // 新建的模板，使用`dynamic`动态引入
  layout: 'NewLayout',        // 标记，生成路由时会用到
  children: [{
    name: '新布局',            // 新布局下的页面都可以放到这里
    icon: 'new',
    path: 'new',
    children: [{
      name: '新页面',
      path: 'new-page',
      component: app => dynamic({
        app,
        component: () => import('../routes/NewPage'),
      }),
    }],
  }],
}
```

在 `src/layouts` 下新建你的页面布局。因为 `react-router@4` 不再支持路由嵌套，无法在一个统一的文件中生成所有路由结构，于是在脚手架中，我们把生成路由这一工作放到了各自的 layout 文件中，所以在你的新建 layout 之内，除了要实现你需要的布局，最重要的就是负责生成相关路由，可以仿照 `src/layouts/UserLayout.js` 中的方式：

```js
{
  getRouteData('UserLayout').map(item =>
    (
      <Route
        exact={item.exact}
        key={item.path}
        path={item.path}
        component={item.component(this.props.app)}         // 将`app`参数传入，构建动态路由
      />
    )
  )
}
```

`getRouteData` 是 `src/utils/utils.js` 中的方法，他可以帮助你从之前配置的数据文件 `src/common/nav.js` 读出指定布局相关的路由信息，进而生成路由配置，传入的参数就是每个 layout 模板独有的标记。

> 上面 Route 标签的 `exact` 属性为 `react-router@4` 中新增的特性，具体请参考上面给出的文档。

到这一步，路由就建好了。新建好页面之后，相关链接就能访问了，但你会发现在基础页面的侧边导航中也包含新建的信息，这是因为，在 `src/layouts/BasicLayout.js` 中会默认读取所有数据，生成导航菜单，如果这不是你需要的，可以自己对相关逻辑进行改造。同样的，如果你的新建 layout 中需要自动生成菜单，也可以参照 `src/layouts/BasicLayout.js` 中的实现方案。

## 常见问题

### `Link` to 属性

在 `react-router@4` 中，这一属性变为必选项，如果值为 undefined，会引发一系列报错和警告，这一点需要格外注意。相关文档及 issue：

- [react-router@4 Link](https://reacttraining.com/react-router/web/api/Link)
- [相关讨论](https://github.com/ReactTraining/react-router/pull/5271)

### 利用 PageHeader 自动生成 Breadcrumb

如果你的新建 layout 模板需要面包屑，建议利用 [PageHeader](/components/PageHeader) 自动生成。前提是你需要在 layout 中以 context 的形式传入面包屑及位置相关参数，可参照 `src/layouts/BasicLayout.js` 中的方式：

```js
getChildContext() {
  const { location } = this.props;
  const routeData = getRouteData('BasicLayout');
  const menuData = getNavData().reduce((arr, current) => arr.concat(current.children), []);
  const breadcrumbNameMap = {};
  routeData.concat(menuData).forEach((item) => {
    breadcrumbNameMap[item.path] = item.name;
  });
  return { location, breadcrumbNameMap };
}
```
