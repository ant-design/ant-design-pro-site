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

### Control menu display

For permission control of certain menus, just go to the menu configuration file [menu.js] (https://github.com/ant-design/ant-design-pro/blob/master/src/common/menu.js) The menu item sets the authority attribute, which represents the access permission of the menu. In the menu generation file, Authorized.check is invoked by default for judgment processing.

```js
{
  name: 'Form page',
  icon: 'form',
  path: 'form',
  children: [{
    name: 'Basic form',
    path: 'basic-form',
  }, {
    name: 'Step-by-step form',
    path: 'step-form',
  }, {
    name: 'Advanced form',
    authority: 'admin', // Configure access permissions
    path: 'advanced-form',
  }],
}
```

### Control routing

Similar to menu control, the configuration of routing permissions is also simple:

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
  authority: 'admin', // Configure access permissions
},
```

> Note: The permissions configured in the menu will be automatically synchronized to the corresponding route. If there are different configurations in router.js, the route control is based on router.js.

### Control page element display

Using [Authorized] (http://pro.ant.design/components/Authorized#Authorized) or [Authorized.Secured] (http://pro.ant.design/components/Authorized#Authorized.Secured) can be easily Control element/component rendering. For details, see the component documentation.

### Modify current permissions

Scaffolding uses localstorage to simulate the role of permissions, which may need to be read from the background in real projects.
A simple method of refreshing permissions was implemented in the scaffold, and the current permissions were updated at the key nodes such as login/logout.
You can check the call to [reloadAuthorized](https://github.com/ant-design/ant-design-pro/blob/master/src/models/login.js#L22) in login.js.
