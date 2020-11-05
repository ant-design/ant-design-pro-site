---
order: 22
title: menu 的高级用法
type: 高级使用
---

Pro 中默认会读取 `config/config.tsx` 中的 routes 配置作为 ProLayout 的菜单数据来生成菜单，并且配合 [`plugin-access`](https://umijs.org/plugins/plugin-access) 还可以很方便的进行菜单的权限管理。

在某些情况下，写死的菜单数据可能满足不了我们的需求，Pro 也提供了相应的解决方案来进行远程的菜单数据请求。这里我们需要用到两个 API 来配置完成。`menuDataRender` 可以自定义数据格式， `menu.loading` 可以让 menu 展示为一个 loading 的状态。

具体的代码实现如下，我们可以在 `src/app.tsx` 定义 layout 对象，并且导出。

```tsx
export const layout = async ({
  initialState,
}: {
  initialState: {
    settings?: LayoutSettings;
    menuData: Promise<BasicLayoutProps>;
    currentUser?: API.CurrentUser;
  };
}): BasicLayoutProps => {
  return {
    menuDateRender: (menuData) => initialState.menuData || menuData,
    ...initialState?.settings,
  };
};
```

这样我们就可以通过 `initialState` 来完成菜单的更新工作了，我们需要在 `src/app.tsx` 中写入如下代码：

```tsx
export async function getInitialState(): Promise<{
  settings?: LayoutSettings;
  menuData: MenuDataItem[];
}> {
  // 如果是登录页面，不执行
  if (history.location.pathname !== '/user/login') {
    const currentUser = await queryMenuData();
    return {
      menuData,
      settings: defaultSettings,
    };
  }
  return {
    menuData: [],
    settings: defaultSettings,
  };
}
```

如果我们需要在页面中的重新设置菜单，我们就可以通过 `useModel` 来进行更新。代码看起来是这样的：

```tsx
const { initialState, setInitialState } = useModel('@@initialState');

const fetchMenuData = async () => {
  setInitialState({
    ...initialState,
    settings: {
      menu: {
        loading: true,
      },
    },
  });
  const menuData = await getMenuData();

  setInitialState({
    ...initialState,
    menuData,
    settings: {
      menu: {
        loading: false,
      },
    },
  });
};
```

由于 hooks 需要放在 组件的最顶层，所以要把这段代码放到一个组件的最顶层。

## 自定义高亮

大部分时候菜单的高亮是可以通过父子关系来满足的，我们也推荐这种用法。加入有一个增删改成的页面，可以如下设置：

```tsx
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

```tsx
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

这样就可以在`/list/:id`路径的时候，也高亮 `/product`, `parentKeys` 中的 `key` 一般是路径，如果不方便设置为路径的花可以在 菜单配置中增加 key 属性，Layout 会优先使用配置的 `Key` 属性。

### 根据路径更换布局

在一些复杂的路径中我们可以需要根据不同的 `url` 展示不同的界面，比如在新建的时候我们是不需要左侧菜单，如果用传统的方法实现需要根据 `pathname` 来进行不同的配置。实现成本比较高，为了降低实现成本，我们在 `routers` 配置中增加了一些约定。

```tsx
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

```tsx
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
