---
order: 24
title:
  en-US: Authority Management
  zh-CN: 权限管理
type: 进阶
---

权限控制是中后台系统中常见的需求之一，你可以利用我们提供的权限控制组件，实现一些基本的权限控制功能，脚手架中也包含了几个简单示例以提供参考。

---

## 权限组件 Authorized

这是脚手架权限管理的基础，基本思路是通过比对当前权限与准入权限，决定展示正常渲染内容还是异常内容，使用方式详见 [Authorized 文档](/components/Authorized)。

## 应用实例

通过对数据的组织及权限组件的应用，脚手架实现了基本的权限管理，下面简单介绍了几个常见场景的应用方式。

> 脚手架中对组件 export 的 RenderAuthorized 函数进行了[基本封装](https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js)，默认传入当前的权限(mock 数据)，因此在脚手架中使用时，无需再关注当前权限。

### 控制菜单显示

如需对某些菜单进行权限控制，只须对菜单配置文件 [menu.js](https://github.com/ant-design/ant-design-pro/blob/master/src/common/menu.js) 中的菜单项设置 authority 属性即可，代表该项菜单的准入权限，菜单生成文件中会默认调用 Authorized.check 进行判断处理。

```js
{
  name: '表单页',
  icon: 'form',
  path: 'form',
  children: [{
    name: '基础表单',
    path: 'basic-form',
  }, {
    name: '分步表单',
    path: 'step-form',
  }, {
    name: '高级表单',
    authority: 'admin', // 配置准入权限
    path: 'advanced-form',
  }],
}
```

### 控制路由导向

与菜单控制类似，路由权限的配置也很简单：

```js
// src/common/router.js
'/dashboard/analysis': {
  component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),
},
'/dashboard/monitor': {
  component: dynamicWrapper(app, ['monitor'], () => import('../routes/Dashboard/Monitor')),
},
'/dashboard/workplace': {
  component: dynamicWrapper(app, ['project', 'activities', 'chart'], () => import('../routes/Dashboard/Workplace')),
  authority: 'admin', // 配置准入权限
},
```

> 注意：菜单中配置的权限会自动同步到对应路由中，如果 router.js 中有不同的配置，路由控制以 router.js 为准。

### 控制页面元素显示

使用 [Authorized](http://pro.ant.design/components/Authorized#Authorized) 或 [Authorized.Secured](http://pro.ant.design/components/Authorized#Authorized.Secured) 可以很方便地控制元素/组件的渲染，具体使用方式参见组件文档。

### 修改当前权限

脚手架中使用 localstorage 模拟权限角色，实际项目中可能需要从后台读取。  
脚手架中实现了一个简单的刷新权限方法，在登录/注销等关键节点对当前权限进行了更新。  
具体可以查看login.js中对[ reloadAuthorized ](https://github.com/ant-design/ant-design-pro/blob/master/src/models/login.js#L22)的调用。 
