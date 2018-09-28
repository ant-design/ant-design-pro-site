---
order: 24
title: 权限管理
type: 进阶
---

权限控制是中后台系统中常见的需求之一，你可以利用我们提供的权限控制组件，实现一些基本的权限控制功能，脚手架中也包含了几个简单示例以提供参考。

---

## 权限组件 Authorized

这是脚手架权限管理的基础，基本思路是通过比对当前权限与准入权限，决定展示正常渲染内容还是异常内容，使用方式详见 [Authorized 文档](/components/Authorized)。

## 应用实例

通过对数据的组织及权限组件的应用，脚手架实现了基本的权限管理，下面简单介绍了几个常见场景的应用方式。

> 脚手架中对组件 export 的 RenderAuthorized 函数进行了[基本封装](https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js)，默认传入当前的权限（mock 数据），因此在脚手架中使用时，无需再关注当前权限。

### 控制菜单和路由显示

如需对某些页面进行权限控制，只须在路由配置文件 [router.config.js](https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js) 中设置 `Routes` 属性即可，代表该路由的准入权限，pro 的路由系统中会默认包裹 `Authorized` 进行判断处理。

```js
{
  path: '/',
  component: '../layouts/BasicLayout',
  Routes: ['src/pages/Authorized'],
  authority: ['admin', 'user'],
  routes: [
    // forms
    {
      path: '/form',
      icon: 'form',
      name: 'form',
      routes: [
        {
          path: '/form/basic-form',
          name: 'basicform',
          component: './Forms/BasicForm',
        },
        {
          path: '/form/advanced-form',
          name: 'advancedform',
          authority: ['admin'],//配置准入权限,可以配置多个角色
          component: './Forms/AdvancedForm',
        },
      ],
    },
  ],
}
```

### 控制页面元素显示

使用 [Authorized](http://pro.ant.design/components/Authorized#Authorized) 或 [Authorized.Secured](http://pro.ant.design/components/Authorized#Authorized.Secured) 可以很方便地控制元素/组件的渲染，具体使用方式参见组件文档。

### 修改当前权限

脚手架中使用 `localStorage` 模拟权限角色，实际项目中可能需要从后台读取。
脚手架中实现了一个简单的刷新权限方法，在登录/注销等关键节点对当前权限进行了更新。
具体可以查看 `login.js` 中对 [reloadAuthorized ](https://github.com/ant-design/ant-design-pro/blob/c93b0169a500427ee5fdd3c2977886c86aa3d59a/src/pages/User/models/login.js#L24) 的调用。
