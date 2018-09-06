---
order: 24
title: Authority Management
type: Advanced
---

Authority Management control is one of the common requirements in the background system. You can use the permission control components provided by us to implement some basic permission control functions. The scaffold also contains several simple examples to provide reference.

---

## Authorization component Authorized

This is the basis for scaffolding rights management. The basic idea is to determine whether to display normal rendering content or abnormal content by comparing the current permissions and access permissions. For details, see [Authorized Documentation](/components/Authorized).

## Applications

Through the application of data organization and permission components, the scaffold implements basic rights management. The following briefly introduces the application of several common scenarios.

> The basic encapsulation of the RenderAuthorized function of component export in the scaffold (https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js) The permissions (mock data), so when using in the scaffold, do not need to pay attention to the current permissions.

### Menu and router permission

For permission control of certain menus, just go to the router configuration file [router.config.js](https://github.com/ant-design/ant-design-pro/blob/master/src/config/router.config.js). The menu item sets the authority attribute, which represents the access permission of the route. In the route generation file, page components will be wrapped by `Authorized` by default for judgment processing.

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

Using [Authorized] (http://pro.ant.design/components/Authorized#Authorized) or [Authorized.Secured] (http://pro.ant.design/components/Authorized#Authorized.Secured) can be easily Control element/component rendering. For details, see the component documentation.

### Modify current permissions

Scaffolding uses localstorage to simulate the role of permissions, which may need to be read from the background in real projects.
A simple method of refreshing permissions was implemented in the scaffold, and the current permissions were updated at the key nodes such as login/logout.
You can check the call to [reloadAuthorized ](https://github.com/ant-design/ant-design-pro/blob/c93b0169a500427ee5fdd3c2977886c86aa3d59a/src/pages/User/models/login.js#L24) in login.js.
