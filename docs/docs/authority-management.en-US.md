---
order: 30
title: Permission Management
group:
  title: Data Management
nav:
  title: Documents
  path: /docs
  order: 1
---

## 1. Introduction

There are often scenarios in the project where different users have different permissions, and there are usually the following scenarios:

- Different users can see different elements and do different operations.
- Different users have different access rights to the page.

> To deal with these problems, we provide a easy, easier-to-use, and universal solution, an umi plugin - [@umijs/plugin-access](https://umijs.org/plugins/plugin-access). By the steps of: 1. define permissions; 2. use permissions, you can **control the permissions in React component.** With another convenient plugin - [@umijs/plugin-layout](https://umijs.org/plugins/plugin-layout), you could control permissions of page access.

## 2. Usage

### Initialization

The definition of permissions depends on the initial state, which needs to be generated via plugin - [@umijs/plugin-initial-state](https://umijs.org/plugins/plugin-initial-state).

After the initial state is generated, you can start to define permissions. First create a new `src/access.ts` file, in this file `export default` a function to define the permissions that the user has, for example:

```tsx | pure
// src/access.ts
export default function (initialState) {
  return {
    canReadFoo: true,
    canUpdateFoo: () => true,
    canDeleteFoo: (data) => data?.status < 1, // Make any definition as you need
  };
}
```

Each key of the object returned by the function corresponds to a `boolean` or `Function` value. If it is `Function`, the return value need to be `boolean`.

### Permission control in Component

For example:

```tsx | pure
import React from 'react';
import { useAccess, Access } from 'umi';

const PageA = (props) => {
  const { foo } = props;
  const access = useAccess(); // members of access instance: canReadFoo, canUpdateFoo, canDeleteFoo

  if (access.canReadFoo) {
    // do anything you want
  }

  return (
    <div>
      <Access accessible={access.canReadFoo} fallback={<div>Can not read foo content.</div>}>
        Foo content.
      </Access>
      <Access accessible={access.canUpdateFoo()} fallback={<div>Can not update foo.</div>}>
        Update foo.
      </Access>
      <Access accessible={access.canDeleteFoo(foo)} fallback={<div>Can not delete foo.</div>}>
        Delete foo.
      </Access>
    </div>
  );
};
```

You can get the permission definition through `useAccess` hook, in addition, we have built-in `Access` component for displaying and hiding control of the elements in the Component.

`Access` component only can used in hook component, if you want to use it at class component, you can use custom component to define it.4

For example:

```react
const Button=()=>{
   const  access =  useXX();
   // do anything you want
   return <Button/>
}
```

## 3. Permission control for routing and menus

If you need to control the routing and the menu on the left side of the page, you can directly add the attributes related to the permission control to the original basic configuration of the route. For this purpose, **[@umijs/plugin-layout](https://umijs.org/plugins/plugin-layout) is needed）**.

After finish above definitions (`src/access.ts`, `src/app.ts`), add the `access` attribute to the route item to complete the routing and menu permissions control.

The value of the `access` attribute is the key of the object returned in `src/access.ts`. For example:

Suppose the contents of the permission definition file `src/access.ts` are as follows:

```tsx | pure
// src/access.ts
export default function (initialState = {}) {
  const { isAdmin, hasRoutes = [] } = initialState;
  return {
    // ...
    adminRouteFilter: () => isAdmin, // Only admin could access it
    normalRouteFilter: (route) => hasRoutes.includes(route.name), // Only the routes included in the initialState are accessible
  };
}
```

> As you can see from the above example, the functions related to routing access control receive "currently processing route" as the first parameter.

Then you only need to add `access` to the basic route configuration as follows:

```tsx | pure
// config/config.ts
import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    {
      path: '/foo',
      name: 'foo',
      // ...
      access: 'normalRouteFilter', // normalRouteFilter in the src/access.ts would be called for route permission control
    },
    {
      path: '/admin',
      name: 'admin',
      // ...
      access: 'adminRouteFilter', // adminRouteFilter in the src/access.ts would be called for route permission control
    },
  ],
  // ...
});
```

If the corresponding access control function (such as `adminRouterFilter`) returns `false`, the route will be disabled and removed from the left side menu. When try to access a route without permission, user would get a 403 page.
