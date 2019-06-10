---
order: 24
title: Authority Management
subtitle: Data text
col: 1
cols: 1
type: Advanced
---

Authority Management control is one of the common requirements in the background system. You can use the permission control components provided by us to implement some basic permission control functions. The scaffold also contains several simple examples to provide reference.

## Applications

Through the application of data organization and permission components, the scaffold implements basic rights management. The following briefly introduces the application of several common scenarios.

> The basic encapsulation of the RenderAuthorized function of component export in the [scaffold](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/utils/Authorized.ts) The permissions (mock data), so when using in the scaffold, do not need to pay attention to the current permissions.

### Menu and router permission

For permission control of certain menus, just go to the router configuration file [config.ts](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts). The menu item sets the authority attribute, which represents the access permission of the route. In the route generation file, page components will be wrapped by `Authorized` by default for judgment processing.

```js
{
  path: '/form',
  icon: 'form',
  name: 'form',
  routes:[{
    path: '/form/basic-form',
    name: 'basicform',
    component: './Forms/BasicForm',
  }, {
    path: '/form/step-form',
    name: 'stepform',
    component: './Forms/StepForm',
    authority: ['guest'], // only guest can access
  }, {
    path: '/form/advanced-form',
    name: 'advancedform',
    component: './Forms/AdvancedForm',
    authority: ['admin'], // only admin can access
  }],
}
```

### Control page element display

Using [Authorized](http://pro.ant.design/components/Authorized#Authorized) or [Authorized.Secured](http://pro.ant.design/components/Authorized#Authorized.Secured) can be easily Control element/component rendering. For details, see the component documentation.

### Modify current permissions

Scaffolding uses localstorage to simulate the role of permissions, which may need to be read from the background in real projects.

A simple method of refreshing permissions was implemented in the scaffold, and the current permissions were updated at the key nodes such as login/logout.

For details, see the definition of [reloadAuthorized](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/utils/Authorized.ts) in `Authorized.ts`.

### How do I control the access authority(User roles)？

There are several ways to get it here, like pro now passes the value from config, it can also be obtained from the server via http request, and even the local json file can be loaded. routerData is a json array. Just get back to json in a similar format after getting it.

```js
routerData: {
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

> Note that routerData and menuData can use the same data or different data, just pay attention to their necessary attributes.
