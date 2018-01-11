---
order: 2
title: 布局
type: 入门
---

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。Ant Design 目前提供了两套布局方案：[Layout](http://ant.design/components/layout/) 和 [Grid](http://ant.design/components/grid/) 。

---

## 使用 Ant Design 栅格组件

栅格布局是网页中最常用的布局，其特点就是按照一定比例划分页面，能够随着屏幕的变化依旧保持比例，从而具有弹性布局的特点。

而 Ant Design 的栅格组件提供的功能更为强大，能够设置间距、具有支持响应式的比例设置，以及支持 `flex` 模式，基本上涵盖了大部分的布局场景，详情参看：[Grid](http://ant.design/components/grid/)。

## 使用 Ant Design Layout 组件

如果你需要辅助页面框架级别的布局设计，那么 [Layout](http://ant.design/components/layout/) 则是你最佳的选择，它抽象了大部分框架布局结构，使得只需要填空就可以开发规范专业的页面整体布局，详情参看：[Layout](http://ant.design/components/layout/)。

## 根据不同场景区分抽离布局组件

在大部分场景下，我们需要基于上面两个组件封装一些适用于当下具体业务的组件，包含了通用的导航、侧边栏、顶部通知、页面标题等元素。例如 Ant Design Pro 的 [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js)。

通常，我们会把抽象出来的布局组件，放到跟 `routes`、 `components` 平行的 `layouts` 文件夹中方便管理。需要注意的是，这些布局组件和我们平时使用的其它组件并没有什么不同，只不过功能性上是为了处理布局问题。

### 处理 `this.props.children` 属性

在抽离的过程中，往往需要处理布局包含的内容组件，而 `this.props.children` 就代表了标签中的内容，如果你需要对其子元素进行筛选处理，可以使用 [React.children.forEach](https://facebook.github.io/react/docs/react-api.html#react.children.map) 方法。

```jsx
React.Children.forEach(children, function[(thisArg)])
```

但是如果你需要传递额外的 `props` 给子元素，我们则推荐采用 [Context](https://facebook.github.io/react/docs/context.html) 的方式。

## Ant Design Pro 的布局

在 Ant Design Pro 中，我们抽离了使用过程中的通用布局，都放在 `layouts` 目录中，分别为：

- BasicLayout：基础页面布局，包含了头部导航，侧边栏和通知栏：

<img src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

- BlankLayout：空白的布局
- PageHeaderLayout：带有标准 PageHeader 的布局
- UserLayout：抽离出用于登陆注册页面的通用布局

<img src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

### 如何使用 Ant Design Pro 布局

我们为了统一方便的管理路由和页面的关系，将配置信息统一抽离到 `src/common/router.js` 下，同时应用动态路由，通过如下配置：

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

映射路由和页面布局（组件）的关系。详细的映射转换实现，参看 [router.js](https://github.com/ant-design/ant-design-pro/blob/master/src/router.js)。
