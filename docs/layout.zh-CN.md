---
order: 15
title: 内置布局
type: 基础使用
---

布局是一个中后台应用必备的，一个布局 + ProTable + Form 即可获得一个 CRUD 页面。

Pro 中内置了 [plugin-layout](https://umijs.org/plugins/plugin-layout) 来减少样板代码。简单的使用中我们只需要在 `config.ts` 中配置 layout 属性就可以实现通用的页面布局。

## UI 配置

### 布局样式

layout 插件支持 [pro-layout](https://github.com/ant-design/ant-design-pro-layout) 的全部配置。

推荐先使用 [Pro 站点](https://preview.pro.ant.design/dashboard/analysis?primaryColor=daybreak) 的左侧抽屉来帮助你完成布局相关的整体风格、主题色、导航模式、内容区域宽度、固定 Header、固定侧边菜单、色弱模式等配置选择。然后将拷贝的配置粘贴与 layout 配置中。

![Pro 站点](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*NhA4To_Ccn8AAAAAAAAAAABkARQnAQ)

```js
// config.js
import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: {
    name: 'Ant Design Pro',
    logo: 'https://preview.pro.ant.design/static/logo.f0355d39.svg',
    // copy from pro site
    navTheme: 'dark',
    primaryColor: '#1890ff',
    layout: 'sidemenu',
    contentWidth: 'Fluid',
    fixedHeader: false,
    fixSiderbar: false,
    title: 'Ant Design Pro',
    pwa: false,
    iconfontUrl: '',
  },
});
```

### 菜单展示

我们可以在 route 中进行 menu 相关配置，来决定当前路由是否会被渲染在菜单中。[详细配置说明](https://umijs.org/plugins/plugin-layout#menu)

- 当不需要展示在菜单中展示时，可以在路由上配置 hideInMenu 或者删除 menu 相关的配置；
- 当不需要展示 children 时，可以在路由上配置 hideChildrenInMenu；
- 当不需要展示自己，只展示 children，可以在路由上配置 flatMenu；
- 如果没有配置 menu，没有配置 name 的话，则该路由不会在侧边栏中出现。

```js
// config/routes.ts
export default [
  {
    path: '/overview',
    component: 'Overview/index',
    menu: {
      name: 'overview',
      icon: 'testicon',
      flatMenu: false,
      hideInMenu: false,
      hideChildrenInMenu: false,
    },
  },
];
```

### 菜单国际化

通过 layout 配置的 [locale](https://umijs.org/plugins/plugin-layout#locale) 配置开启国际化。

开启后路由里配置的菜单名会被当作菜单名国际化的 key，插件会去 locales 文件中查找 menu.[key]对应的文案，默认值为改 key。

```js
// locale/zh-CN.js
export default {
  'menu.overview': '总览',
};
```

### 导航右上角

![右上角](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*xPFmRaztUuAAAAAAAAAAAABkARQnAQ)

用户名以及国际化可以通过配置拥有默认的 UI。国际化会通过检测 locale 目录下的文件来展示可供切换的语言种类。

用户名、头像信息可以通过配置全局初始化信息来提供数据。

```js
// src/app.ts
export function getInitialState() {
  return {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  };
}
```

退出登陆的逻辑也可以通过配置来自定义。

```js
// src/app.ts
export const layout = {
  logout: () => {
    alert('退出登录成功');
  },
};
```

如果以上满足不了需求，可以通过以下接口实现右上角 UI 完全的自定义。

```js
// src/app.tsx
import React from 'react';

export const layout = {
  rightRender: (initialState, setInitialState) => {
    // xxx
    return 'xxx';
  },
};
```

### 自定义 footer

![footer](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*kzgBSqHIGOwAAAAAAAAAAABkARQnAQ)

插件并没有提供默认的 footer UI。可以通过以下配置来完成自定义。想和 Pro 官网使用相同的样式可以参考：https://prolayout.ant.design/footer

```js
// src/app.tsx
import React from 'react';

export const layout = {
  footerRender: () => {
    // xxx
    return <xxx />;
  },
};
```

### 自定义 Layout

The layout is essentially a special component, and the corresponding component of the sub-route will be passed into the layout component as props. The simplest layout is this:

```tsx
// children must be mounted, otherwise the child routes cannot be displayed
// Here you can also set the global provide
const layout = ({ children }) => children;
export default layout;
```

We create a new `BaseLayout.tsx` in `src/layouts/`, copy the above content, and add in `config/config.ts`

```tsx
defineConfig({
  // added configuration
  routes: {
    path: '/',
    component: '.../layouts/BaseLayout',
  },
});
```

我们可以对 children 进行修改或者包裹，ProLayout 组件就是通过这样的方案来注入菜单等配置。children 是什么与你当前的路径和 layout 在项目中的配置有关系，如果满足不了需求可以试试调整位置。

## 路由配置

### 权限路由

当需要对某些路由做权限管控，能够搭配内置权限方案来方便的实现。当用户访问没有权限的路由时，layout 会提供默认的无权限页面。

![403](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*XdUsQa3xisIAAAAAAAAAAABkARQnAQ)

详细的配置方案可：[点击查看](https://umijs.org/plugins/plugin-access#%E4%BB%8B%E7%BB%8D)

1.通过全局初始化信息来请求权限相关的初始化信息

```js
// src/app.ts
export async function getInitialState() {
  const data = await fetchXXX();
  return data;
}
```

2.新增权限定义文件

```js
// src/access.ts
import { InitialState } from 'umi';

export default function accessFactory(initialState: InitialState) {
  return {
    readArticle: initialState.name === 'haha',
  };
}
```

3.给路由配置权限

```js
// config/route.ts
export default [
  {
    path: '/overview',
    component: 'Overview/index',
    name: 'overview',
    icon: 'testicon',
    access: 'readArticle',
  },
];
```

### 404 / 403

内置布局会对不存在的路由、无权访问的路由都会展示默认的 UI。无权访问如上所示。

访问不存在的 UI 时，默认 UI 如下 ![404](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*LOPuQoOGJIcAAAAAAAAAAABkARQnAQ)

### 嵌套布局

有时我们的页面可能会有一些全局的通用的处理逻辑或者 UI，会希望在页面加在前完成，通常会希望可以在内置布局内部再包一层 layout 来完成需求。

```js
// config/routes.ts
export default [
  {
    path: '/',
    component: '../layout/index',
    menu: {
      flatMenu: true,
    },
    routes: [
      {
        path: '/',
        redirect: '/overview',
      },
      {
        path: '/overview',
        component: 'Overview/index',
        menu: {
          name: 'overview',
          icon: 'testicon',
        },
      },
    ],
  },
];

// src/layout/index.tsx
const Layout = ({ children }) => children;
export default Layout;
```

### 根据路由隐藏左侧菜单、隐藏导航头、footer

有时我们的页面可能存在一些沉浸式的设计，需要针对路由隐藏部分布局。可以通过添加扩展路由配置来实现。[详细配置](https://umijs.org/zh-CN/plugins/plugin-layout#layout)

```js
// config/route.ts
export default [
  {
    path: '/overview',
    component: 'Overview/index',
    name: 'overview',
    icon: 'testicon',
    layout: {
      hideMenu: false,
      hideNav: false,
      hideFooter: false,
    },
  },
];
```

### 菜单布局展示方式的修改

有时菜单可能需要于顶部显示，左侧显示，或者顶部显示一级菜单，左侧显示二三级菜单。我们可以修改 defaultSettings 中的 layout 的配置来决定菜单的展示方式。

- top 菜单于顶部展示
- side 菜单于左侧展示
- mix 菜单于顶部和左侧混合展示，需要注意，当 mix 模式时，需要添加`splitMenus: true`，顶部才可以正确展示一级菜单

```js
// config/defaultSettings.ts
export default {
  layout: 'mix',
  splitMenus: true,
};
```

同时，当使用 mix 模式后，点击一级菜单，并不会直接定位到第一个子级菜单页面，而是会呈现空白页面，需要于配置中设置一下 redirect 的地址

```json
[
  {
    "path": "/test/list",
    "component": "./test/list"
  },
  {
    "path": "/test/list/testAdd",
    "component": "./test/list/testAdd"
  },
  {
    "redirect": "./test/list"
  }
]
```

## 更多

如果内置的 layout 插件满足不了您的需求，可以通过 [issue](https://github.com/umijs/plugins/issues) 告诉我们，我们会尽快处理。

你也可以通过以下配置来关闭默认的功能。

### 关闭 Layout 插件

将 layout 配置设置成 false。

```js
// config.js
import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: false,
});
```

### 隐藏侧边栏的 TechUI 模版

模版本身只会在开发阶段生效，目的是为了更好的研发提效。如果阻塞了您的研发，也欢迎通过 issue 给我们提供更好的建议。

您也可以通过设置环境变量 `TECHUI_PREVIEW` 来去掉它。

```js
 TECHUI_PREVIEW='none' npm run dev
```
