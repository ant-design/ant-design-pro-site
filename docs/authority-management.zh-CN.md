---
order: 24
title: 权限管理
type: 进阶
---

权限控制是中后台系统中常见的需求之一，你可以利用我们提供的权限控制组件，实现一些基本的权限控制功能，脚手架中也包含了几个简单示例以提供参考。

## 应用实例

通过对数据的组织及权限组件的应用，脚手架实现了基本的权限管理，下面简单介绍了几个常见场景的应用方式。

> 脚手架中对组件 export 的 RenderAuthorized 函数进行了[基本封装](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/utils/Authorized.ts)，默认传入当前的权限（mock 数据），因此在脚手架中使用时，无需再关注当前权限。

### 控制菜单和路由显示

如需对某些页面进行权限控制，只须在路由配置文件 [config.ts](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 中设置 `Routes` 属性即可，代表该路由的准入权限，pro 的路由系统中会默认包裹 `Authorized` 进行判断处理。

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

### 修改当前权限

脚手架中使用 `localStorage` 模拟权限角色，实际项目中可能需要从后台读取。

脚手架中实现了一个简单的刷新权限方法，在登录/注销等关键节点对当前权限进行了更新。

具体可以查看 `Authorized.ts` 中 [reloadAuthorized](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/utils/Authorized.ts) 的定义。

### 如何控制页面访问权限（用户角色）

这里的获取方式有几种，像 pro 现在这样从 config 中传值，也可以通过 http 请求从服务端获取，甚至本地的 json 文件加载也可以。routerData 是一个 json 数组。获取之后只需返回类似格式的 json 即可。

```js
router: {
  routes: [
    // dashboard
    {
      path: '/dashboard',
      authority: ['admin'],
      routes: [
        {
          path: '/dashboard/analysis',
          authority: ['admin', 'user'],
        },
      ],
    },
  ];
}
```

> 注意 router 和 menuData 可以使用同一个数据，也可以使用不同的数据，注意他们的必要属性即可。
