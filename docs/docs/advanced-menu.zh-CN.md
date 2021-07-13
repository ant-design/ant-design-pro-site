---
order: 90
title: 菜单的高级用法
group:
  title: 高级使用
nav:
  title: 文档
  path: /docs
  order: 1
---

Pro 中默认会读取 `config/config.tsx` 中的 routes 配置作为 ProLayout 的菜单数据来生成菜单，并且配合 [`plugin-access`](https://umijs.org/zh-CN/plugins/plugin-access) 还可以很方便的进行菜单的权限管理。这个模式可以满足大部分需求，但是业务的复杂度总是在的，有些时候就需要一些高级的用法。

## 从服务端请求菜单

> 服务端获取的菜单重定向不生效且 icon 不会自动转化。重定向需要配置在路由中才会生效。 icon 需要[手工映射](https://github.com/ant-design/ant-design-pro/issues/8101)。

在某些情况下，写死的菜单数据可能满足不了我们的需求，Pro 也提供了相应的解决方案来进行远程的菜单数据请求。我们这里需要用到两个 API, `menu.request` 和 `menu.params`，request 需要传入一个 promise，它会自动托管 loading，params 修改会触发 request 方便重新请求菜单。

具体的代码实现如下，我们可以在 `src/app.tsx` 定义 layout 对象，并且导出。看起来可能是这样的：

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    menu: {
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: {
        userId: initialState?.currentUser?.userid,
      },
      request: async (params, defaultMenuData) => {
        // initialState.currentUser 中包含了所有用户信息
        const menuData = await fetchMenuData();
        return menuData;
      },
    },
  };
};
```

以上就是一个远程请求菜单的案例，一般情况的菜单都是根据角色来实现的，我们可以配置 `initialState` 中的数据来向后端请求不同的数据。

如果你的数据希望通过 initialState 来保存，你可以在 request 中直接读取，这样每次 `initialState` 变化都会重新加载菜单。

```tsx | pure
// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    menu: {
      // 每当 initialState?.currentUser?.userid 发生修改时重新执行 request
      params: initialState,
      request: async (params, defaultMenuData) => {
        return initialState.menuData;
      },
    },
  };
};
```

如果你希望可以手动的控制菜单刷新，可以使用 `actionRef` 功能。

```tsx | pure
import { createRef } from 'react';

export const layoutActionRef = createRef<{ reload: () => void }>();

// https://umijs.org/zh-CN/plugins/plugin-layout
export const layout: RunTimeLayoutConfig = () => {
  return {
    actionRef: layoutActionRef,
    menu: {
      request: async (params, defaultMenuData) => {
        return initialState.menuData;
      },
    },
  };
};

// 调用
request().then(() => {
  layoutActionRef.current.reload();
});
```

## 自定义高亮

大部分时候菜单的高亮是可以通过父子关系来满足的，我们也推荐这种用法。假如有一个增删改查的页面，可以如下设置：

```tsx | pure
export default {
  path: '/product',
  name: '产品管理',
  routes: [
    { path: '/product', redirect: 'product/list' },
    {
      path: '/product/list',
      name: '产品列表',
    },
    {
      path: '/product/new',
      name: '新建产品',
    },
    {
      path: '/product/:id',
      hideInMenu: true,
      name: '产品详情',
    },
    {
      path: '/product/update/:id',
      hideInMenu: true,
      name: '修改产品',
    },
  ],
};
```

这样的路由非常标准，可以被 ProLayout 完美的消费，高亮也能正确展示，但是不一定所有的菜单的都可以做的这么规范，ProLayout 也提供一个方式来重定向菜单的高亮。如果我们想要 `/list/:id`，高亮 `/product`可以这样配置。

```tsx | pure
export default [
  {
    path: '/product',
    hideInMenu: true,
    name: '产品管理',
  },
  {
    path: '/list/:id',
    hideInMenu: true,
    name: '列表详情',
    parentKeys: ['/product'],
  },
];
```

这样就可以在`/list/:id`路径的时候，也高亮 `/product`, `parentKeys` 中的 `key` 一般是路径，如果不方便设置为路径的话可以在 菜单配置中增加 key 属性，Layout 会优先使用配置的 `Key` 属性。

## 根据路径更换布局

在一些复杂的路径中我们可以需要根据不同的 `url` 展示不同的界面，比如在新建的时候我们是不需要左侧菜单，如果用传统的方法实现需要根据 `pathname` 来进行不同的配置。实现成本比较高，为了降低实现成本，我们在 `routers` 配置中增加了一些约定。

```tsx | pure
export default [
  {
    path: '/product',
    // 不展示菜单
    menuRender: false,
    name: '产品管理',
  },
  {
    path: '/list/:id',
    // 编辑的时候使用顶部菜单
    layout: 'top',
    name: '列表详情',
    parentKeys: ['/product'],
  },
];
```

这样在 `/product` 的时候不展示菜单，在 `/list/:id` 中的时候展示了顶部菜单。在菜单中可以配置以下的 api。

```tsx | pure
export interface Setting {
  /**
   * @name false 时不展示顶栏
   */
  headerRender?: false;
  /**
   * @name false 时不展示页脚
   */
  footerRender?: false;
  /**
   * @name false 时不展示菜单
   */
  menuRender?: false;
  /**
   * @name false 时不展示菜单顶栏
   */
  menuHeaderRender?: false;

  /**
   * @name 固定顶栏
   **/
  fixedHeader: boolean;

  /**
   * @name 固定菜单
   */
  fixSiderbar: boolean;

  /**
   * @name theme for nav menu
   * @name 导航菜单的主题
   */
  navTheme: 'dark' | 'light' | 'realDark' | undefined;
  /**
   * @name nav menu position: `side` or `top`
   * @name 导航菜单的位置
   * @description side 为正常模式，top菜单显示在顶部，mix 两种兼有
   */
  layout: 'side' | 'top' | 'mix';
  /**
   * @name 顶部导航的主题，mix 模式生效
   */
  headerTheme: 'dark' | 'light';
}
```
