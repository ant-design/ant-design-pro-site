---
order: 3
title:
  en-US: Router and Nav
  zh-CN: 路由和菜单
type: 入门
---

路由和菜单是组织起一个应用的关键骨架，我们的脚手架提供了一些基本的工具及模板，帮助你更方便的搭建自己的路由/菜单。

如果你想了解更多关于 `browserHistory` 和 `hashHistory`，请参看 [构建和发布](/docs/deploy)。

> 注意：我们的脚手架依赖 `dva@2`，路由方面是基于 `react-router@4` 的实现，在写法以及 API 上与之前的版本有较大不同，所以，在开始前你需要具备一些相关的基础知识。这里给出几篇关键文档：
>
  - [react-router](https://reacttraining.com/react-router/web/guides/philosophy)
  - [Migrating from v2/v3 to v4](https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/migrating.md)
  - [dva@2.0](https://github.com/sorrycc/blog/issues/48)
  - [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)

---

## 基本结构

在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能：

- `路由生成` 结合路由信息的配置文件和预设的基本算法，提供了在不同层级文件中自动生成路由列表的能力。
- `菜单生成` 由确定数据结构的菜单配置文件生成，其中的菜单项名称，嵌套路径与路由有一定关联关系。
- `面包屑` 组件 [PageHeader](http://pro.ant.design/components/PageHeader) 中内置的面包屑也可由脚手架提供的配置信息自动生成。

下面简单介绍下各个模块的基本思路，如果你对实现过程不感兴趣，只想了解应该怎么实现相关需求，可以直接查看[需求实例](/docs/router-and-nav#需求实例)。

### 路由

目前在脚手架中，除了[顶层路由](https://github.com/ant-design/ant-design-pro/blob/master/src/router.js)，其余路由列表都是自动生成，其中最关键的就是中心化配置文件 `src/common/router.js`，它的主要作用有两个：

- 配置路由相关信息。如果只考虑生成路由，你只需要指定每条配置的路径及对应渲染组件。
- 输出路由数据，并将路由数据（routerData）挂载到每条路由对应的组件上。

这样我们得到一个基本的路由信息对象，它的结构大致是这样：

```js
{
  '/dashboard/analysis': {
    component: DynamicComponent(),
    name: '分析页',
  },
  '/dashboard/monitor': {
    component: DynamicComponent(),
    name: '监控页',
  },
  '/dashboard/workplace': {
    component: DynamicComponent(),
    name: '工作台',
  },
}
```

为了帮助自动生成路由，在 `src/utils/utils.js` 中提供了工具函数 getRoutes，它接收两个参数：当前路由的 [match](https://reacttraining.com/react-router/web/api/match) 路径及路由信息 routerData，主要完成两个工作：

- 筛选路由信息，筛选的算法为**只保留当前 match.path 下最邻近的路由层级（更深入的层级留到嵌套路由中自行渲染）**，举个例子(每条为一个 route path)：

  ```js
  // 当前 match.path 为 /
  /a                 // 没有更近的层级，保留
  /a/b               // 存在更近层级 /a，去掉
  /c/d               // 没有更近的层级，保留
  /c/e               // 没有更近的层级，保留
  /c/e/f             // 存在更近层级 /c/e，去掉
  ```
- 自动分析路由 [exact](https://reacttraining.com/react-router/web/api/Route/exact-bool) 参数，除了下面还有嵌套路由的路径，其余路径默认设为 exact。

经过 getRoutes 处理之后的路由数据就可直接用于生成路由列表：

```js
// src/layouts/BasicLayout.js
getRoutes(match.path, routerData).map(item => (
  <Route
    key={item.key}
    path={item.path}
    component={item.component}
    exact={item.exact}
  />
))
```

> 如果你不需要自动生成路由，也可以用 routerData 自行处理。

### 菜单

菜单信息配置在 `src/common/menu.js` 中，它的作用是：

- 配置菜单相关数据，**菜单项的跳转链接为配置项及其所有父级配置 path 参数的拼接。**
- 为 `src/common/router.js` 提供路由名称（name）等数据，**根据拼接好的跳转链接来匹配相关路由。**

> 如果你的项目并不需要菜单，你也可以直接在 `src/common/router.js` 中配置 name 信息。

配置文件输出的菜单数据，可以直接提供给侧边栏组件使用。[SiderMenu.js](https://github.com/ant-design/ant-design-pro/blob/master/src/components/SiderMenu/SiderMenu.js)。除了生成菜单，菜单数据还可辅助生成重定向路由等模块，参考 [BasicLayout.js#L154](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js#L154)。

### 面包屑

之前提到的路由信息 routerData 可以直接传递给 PageHeader 组件用以生成面包屑，你可以用 props 或者 context 的方式进行传递。脚手架里的[示例](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js#L76)。

## 需求实例

上面对这部分的实现概要进行了介绍，接下来通过实际的案例来说明具体该怎么做。

### 新增页面

脚手架默认提供了两种布局模板：`基础布局 - BasicLayout` 以及 `账户相关布局 - UserLayout`：

<img alt="基础布局" src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

<img alt="账户相关布局" src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

如果你的页面可以利用这两种布局，那么只需要在路由及菜单配置中增加一条即可：

```js
// src/common/router.js
'/dashboard/test': {
  component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Test')),
},
```

```js
// src/common/menu.js
const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',  // https://demo.com/icon.png or <Icon type="dashboard" />
  path: 'dashboard',
  children: [{
    name: '分析页',
    path: 'analysis',
  }, {
    name: '监控页',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
  }, {
    name: '测试页',
    path: 'test',
  }],
}, {
  // 更多配置
}];
```

加好后，会默认生成相关的路由及导航。

### 新增布局模板

如果提供的布局不能满足你的要求，就需要自己新建 Layout 模板了。假设有两个新的页面需要使用新模板，你需要先配置好路由及菜单：

```js
// src/common/router.js
'/new': {
  component: dynamicWrapper(app, ['monitor'], () => import('../layouts/NewLayout')),
},
'/new/page1': {
  component: dynamicWrapper(app, ['monitor'], () => import('../routes/New/Page1')),
},
'/new/page2': {
  component: dynamicWrapper(app, ['monitor'], () => import('../routes/New/Page2')),
},
```

```js
// src/common/menu.js
const menuData = [{
  name: '新布局',
  icon: 'table',
  path: 'new',
  children: [{
    name: '页面一',
    path: 'page1',
  }, {
    name: '页面二',
    path: 'page2',
  }],
}, {
  // 更多配置
}];
```

在根路由中增加这组新模板：

```js
// src/router.js
<Router history={history}>
  <Switch>
    <Route path="/new" render={props => <NewLayout {...props} />} />
    <Route path="/user" render={props => <UserLayout {...props} />} />
    <Route path="/" render={props => <BasicLayout {...props} />} />
  </Switch>
</Router>
```

然后在你的新模板中，仿照 `src/layouts/BasicLayout.js` 或 `src/layouts/UserLayout.js` 生成路由列表即可。

### 带参数的路由/菜单

脚手架默认支持带参数的路由、菜单及面包屑配置，直接在路由的 key 以及菜单中的 path 配置即可：

```js
// src/common/router.js
'/dashboard/:workplace': {
  component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Workplace')),
},
'/:list/table-list': {
  component: dynamicWrapper(app, ['rule'], () => import('../routes/List/TableList')),
},
```

```js
// src/common/menu.js
const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '分析页',
    path: 'analysis',
  }, {
    name: '监控页',
    path: 'monitor',
  }, {
    name: '工作台',
    path: ':workplace',
  }],
}, {
  name: '列表页',
  icon: 'table',
  path: ':list',
  children: [],
}, {
  // 更多配置
}];
```

### 嵌套布局

有时在当前 layout 下还需要嵌套其他布局，例如有几个页面都需要展示同一个模块，你可以把这部分提炼出来变成一个新的布局，再到该布局下生成路由列表。与[新增布局模板](/docs/router-and-nav#新增布局模板) 的区别，只是不需要将它增加到根路由中。具体可以参照 `src/common/router.js` /list/search 相关配置，及相关组件文件。

### 嵌套路由同级展示

脚手架默认使用工具函数 getRoutes 对 routerData 进行处理，然后生成路由列表，根据[基本算法](/docs/router-and-nav#路由)，在每一级组件中只会渲染当前 match.path 下最邻近的路由，所以，如果你要实现嵌套路由的同级展示（如：将 `/list/search` 和 `/list/search/projects` 在同一个地方渲染），就需要手动获取该路由的数据并添加在合适的地方。

```jsx
{/* src/layouts/BasicLayout.js 类比你的上层 layout 组件 */}
<Content style={{ margin: '24px 24px 0', height: '100%' }}>
  <div style={{ minHeight: 'calc(100vh - 260px)' }}>
    <Switch>
      {/* 默认生成的路由列表，不包含 /list/search/projects */}
      {
        getRoutes(match.path, routerData).map(item => (
          <Route
            key={item.key}
            path={item.path}
            component={item.component}
            exact={item.exact}
          />
        ))
      }
      {/* 补充 /list/search/projects 的路由 */}
      <Route exact path="/list/search/projects" component={routerData['/list/search/projects'].component} />
      <Redirect exact from="/" to="/dashboard/analysis" />
      <Route render={NotFound} />
    </Switch>
  </div>
</Content>
```

同时在嵌套 layout 的文件中去掉这一条路由（如果还有下层路由需要 render）。

```jsx
{/* src/routes/List/List.js 类比你的嵌套 layout 组件 */}
<Switch>
  {
    getRoutes(match.path, routerData).filter(item => item.path !== '/list/search/projects').map(item =>
      (
        <Route
          key={item.key}
          path={item.path}
          component={item.component}
          exact={item.exact}
        />
      )
    )
  }
</Switch>
```

### 隐藏菜单

如果需要隐藏某条菜单项，可以在该条数据中增加 hideInMenu 参数。

```js
// src/common/menu.js
const menuData = [{
  name: 'dashboard',
  icon: 'dashboard',
  path: 'dashboard',
  children: [{
    name: '分析页',
    path: 'analysis',
  }, {
    name: '监控页',
    path: 'monitor',
  }, {
    name: '工作台',
    path: 'workplace',
    hideInMenu: true,  // 隐藏该条
  }],
}, {
  name: '表单页',
  icon: 'form',
  path: 'form',
  hideInMenu: true,  // 隐藏该组
  children: [{
    name: '基础表单',
    path: 'basic-form',
  }, {
    name: '分步表单',
    path: 'step-form',
  }, {
    name: '高级表单',
    path: 'advanced-form',
  }],
}, {
  // 更多配置
}];
```

### 隐藏面包屑

如需隐藏面包屑中的某个层级，可以增加 hideInBreadcrumb 属性。

```js
// src/common/router.js
'/dashboard/analysis': {
  component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
  hideInBreadcrumb: true,  // 隐藏该条
},
'/dashboard/monitor': {
  component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
},
```

## 常见问题

### 为什么我的路由列表里有些条目没有渲染？

框架默认使用 [getRoutes](https://github.com/ant-design/ant-design-pro/blob/master/src/utils/utils.js) 函数对配置的路由列表进行筛选处理，对于类似 `/ant-design/ant-design-pro` 的路由，我们默认你希望它在 `/ant-design` 里嵌套展示（如果有配置 `/ant-design`），所以在渲染 `/ant-design` 的地方不会同时渲染 `/ant-design/ant-design-pro`，如须将这两条同级展示，参见[嵌套路由同级展示](/docs/router-and-nav#嵌套路由同级展示)。

### `Link` to 属性

在 `react-router@4` 中，这一属性变为必选项，如果值为 undefined，会引发一系列报错和警告，这一点需要格外注意。相关文档及 issue：

- [react-router@4 Link](https://reacttraining.com/react-router/web/api/Link)
- [相关讨论](https://github.com/ReactTraining/react-router/pull/5271)

### 关于 dynamicWrapper

```js
import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  // eslint-disable-next-line no-underscore-dangle
  models: () => models.filter(m => !app._models.some(({ namespace }) => namespace === m)).map(m => import(`../models/${m}.js`)),
  // add routerData prop
  component: () => {
    const routerData = getRouterData(app);
    return component().then((raw) => {
      const Component = raw.default || raw;
      return props => <Component {...props} routerData={routerData} />;
    });
  },
});
```

为了代码的简洁性，我们对 `dva/dynamic` 进行了二次封装，需要注意的是这里使用了 [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/) 的动态 `import`，`dva` 的 `dynamic` 方法已经帮我们封装好了 `Promise` 动态加载的相关事宜，所以我们只需要直接使用即可。
