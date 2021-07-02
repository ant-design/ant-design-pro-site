---
order: 22
title: Advanced menu
group:
  title: Advanced Usage
nav:
  title: Documents
  path: /docs
  order: 1
---

By default, Pro will read the routes configuration in `config/config.tsx` as the menu data of ProLayout to generate the menu. If you cooperate with [`plugin-access`](https://umijs.org/plugins/plugin-access), you can easily manage the authority of the menu. This mode can meet most of the needs, but the complexity of the business is always there, and sometimes it requires some advanced usage.

## Request the menu from the server

In some cases, hard-coded menu data may not meet our needs. Pro also provides corresponding solutions for remote menu data requests. We need to use two APIs here, `menu.request` and `menu.params`. Request supports passing in a promise and automatically hosting loading. Modification of params will trigger request to facilitate re-requesting the menu.

The specific code implementation is as follows, we can define the layout object in `src/app.tsx` and export it. It might look like this:

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    menu: {
      // Re-execute request whenever initialState?.currentUser?.userid is modified
      params: {
        userId: initialState?.currentUser?.userid,
      },
      request: async (params, defaultMenuData) => {
        // initialState.currentUser contains all user information
        const menuData = await fetchMenuData();
        return menuData;
      },
    },
  };
};
```

The above is a case of remotely requesting the menu. Generally, the menu is implemented according to the role. We can configure the data in the `initialState` to request different data from the backend.

If your data wants to be saved by initialState, you can read it directly in the request, so that the menu will be reloaded every time the `initialState` changes.

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    menu: {
      // Re-execute request whenever initialState?.currentUser?.userid is modified
      params: initialState,
      request: async (params, defaultMenuData) => {
        return initialState.menuData;
      },
    },
  };
};
```

## Custom highlight

Most of the time, the highlighting of the menu can be satisfied by the parent-child relationship, and we also recommend this usage. Add a page with additions, deletions and changes, which can be set as follows:

```tsx | pure
export default {
  path: '/product',
  name: 'Product Management',
  routes: [
    { path: '/product', redirect: 'product/list' },
    {
      path: '/product/list',
      name: 'Product List',
    },
    {
      path: '/product/new',
      name: 'New product',
    },
    {
      path: '/product/:id',
      hideInMenu: true,
      name: 'Product Details',
    },
    {
      path: '/product/update/:id',
      hideInMenu: true,
      name: 'Modify product',
    },
  ],
};
```

This kind of routing is very standard and can be perfectly consumed by ProLayout, and the highlight can be displayed correctly, but not all menus can be so standardized. ProLayout also provides a way to redirect the highlight of the menu. If we want `/list/:id`, highlighting `/product` can be configured like this.

```tsx | pure
export default [
  {
    path: '/product',
    hideInMenu: true,
    name: 'Product Management',
  },
  {
    path: '/list/:id',
    hideInMenu: true,
    name: 'List details',
    parentKeys: ['/product'],
  },
];
```

In this way, you can also highlight `/product` in the path of `/list/:id`. The `key` in `parentKeys` is generally a path. If it is not convenient to set the flower as a path, you can add the key in the menu configuration Attribute, Layout will use the configured `Key` attribute first.

## Change the layout according to the path

In some complex paths, we may need to display different interfaces according to different url's.

For example, we don't need the left menu when creating new ones. If we use traditional methods to implement it, we need to perform different configurations based on `pathname`. The implementation cost is relatively high. In order to reduce the implementation cost, we have added some conventions in the `routers` configuration.

```tsx | pure
export default [
  {
    path: '/product',
    // Do not show the menu
    menuRender: false,
    name: 'Product Management',
  },
  {
    path: '/list/:id',
    // Use the top menu when editing
    layout: 'top',
    name: 'List details',
    parentKeys: ['/product'],
  },
];
```

In this way, the menu is not displayed when in `/product`, and the top menu is displayed when in `/list/:id`. The following api can be configured in the menu.

```tsx | pure
export interface Setting {
  /**
   * Do not show the top bar when @name is false
   */
  headerRender?: false;
  /**
   * Do not show footer when @name is false
   */
  footerRender?: false;
  /**
   * Do not show the menu when @name is false
   */
  menuRender?: false;
  /**
   * When @name is false, the menu top bar is not displayed
   */
  menuHeaderRender?: false;

  /**
   * @name fixed top bar
   **/
  fixedHeader: boolean;

  /**
   * @name fixed menu
   */
  fixSiderbar: boolean;

  /**
   * @name theme for nav menu
   * @name the theme of the navigation menu
   */
  navTheme: 'dark' | 'light' | 'realDark' | undefined;
  /**
   * @name nav menu position: `side` or `top`
   * @name Navigation menu location
   * @description side is the normal mode, the top menu is displayed at the top, and mix is ​​available
   */
  layout: 'side' | 'top' | 'mix';
  /**
   * @name Top navigation theme, mix mode takes effect
   */
  headerTheme: 'dark' | 'light';
}
```
