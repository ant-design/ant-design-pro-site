---
order: 15
title: Layout
group:
  title: Page Development
nav:
  title: Documents
  path: /docs
  order: 1
---

Layout is necessary for a middle and back-end application. One layout + ProTable + Form can get a CRUD page.

[Plugin-layout](https://umijs.org/plugins/plugin-layout) is built into Pro to reduce boilerplate code. In easy use, we only need to configure the layout attribute in `config.ts` to achieve a common page layout.

## UI configuration

### Layout style

The layout plugin supports all configurations of [pro-layout](https://github.com/ant-design/ant-design-pro-layout).

It is recommended to use the right drawer of [Pro site](https://preview.pro.ant.design/dashboard/analysis?primaryColor=daybreak) to help you complete the overall style, theme color, navigation mode, and content area related to the layout. Width, fixed Header, fixed side menu, color weak mode and other configuration options. Then paste the copied configuration into the layout configuration.

![Pro site](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*NhA4To_Ccn8AAAAAAAAAAABkARQnAQ)

```tsx | pure
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

### Menu display

We can configure the menu in the route to determine whether the current route will be rendered in the menu. [Detailed configuration instructions](https://umijs.org/plugins/plugin-layout#menu)

- When you do not need to display in the menu, you can configure hideInMenu on the route or delete the menu-related configuration;
- When you don't need to show children, you can configure hideChildrenInMenu on the route;
- When you do not need to show yourself, only show children, you can configure flatMenu on the route;
- If the menu is not configured, and the name is not configured, the route will not appear in the sidebar.

  ```tsx | pure
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

### Menu internationalization

Enable internationalization through the [locale](https://umijs.org/plugins/plugin-layout#locale) configuration of the layout configuration.

After opening, the menu name configured in the route will be used as the key for the internationalization of the menu name, and the plug-in will search for the text corresponding to menu.[key] in the locales file. The default value is to change the key.

```tsx | pure
// locale/zh-CN.js
export default {
  'menu.overview': 'Overview',
};
```

### Navigate the upper right corner

![Upper right corner](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*xPFmRaztUuAAAAAAAAAAAABkARQnAQ)

Username and internationalization can have a default UI through configuration. Internationalization will display the available languages ​​by detecting the files in the locale directory.

User name and avatar information can provide data by configuring global initialization information.

```tsx | pure
// src/app.ts
export function getInitialState() {
  return {
    name: 'Serati Ma',
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
  };
}
```

Logout logic can also be customized through configuration.

```tsx | pure
// src/app.ts
export const layout = {
  logout: () => {
    alert('Log out successfully');
  },
};
```

If the above requirements cannot be met, the upper right corner UI can be completely customized through the following interface.

```tsx | pure
// src/app.tsx
import React from 'react';

export const layout = {
  rightRender: (initialState, setInitialState) => {
    // xxx
    return 'xxx';
  },
};
```

### Custom footer

![footer](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*kzgBSqHIGOwAAAAAAAAAAABkARQnAQ)

The plugin does not provide a default footer UI. The customization can be done through the following configuration. If you want to use the same style as Pro's official website, please refer to: https://procomponents.ant.design/components/layout#footer

```tsx | pure
// src/app.tsx
import React from 'react';

export const layout = {
  footerRender: () => {
    // xxx
    return <xxx />;
  },
};
```

### Custom Layout

# The layout is essentially a special component, and the corresponding component of the sub-route will be passed into the layout component as props. The easyst layout is like this

```tsx | pure
<BasicLayout
  {...defaultProps}
  title="Remax"
  logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
  menuHeaderRender={(logo, title) => (
    <div
      id="customize_menu_header"
      onClick={() => {
        window.open('https://remaxjs.org/');
      }}
    >
            {logo}
            {title}
          
    </div>
  )}
/>
```

If you need a custom menu, the `siderWidth` property controls the width of the menu on the right, and `menuRender` and `menuItemRender` let you customize the entire menu. `menuDataRender` can be used to customize menu data, which you can replace with data obtained from the server.

> > > > > > > master

```tsx | pure
const layout = ({ children }) => children;
export default layout;
```

We can modify or wrap children. The ProLayout component injects menu and other configurations through such a scheme. What children are is related to your current path and layout configuration in the project. If you can't meet your needs, you can try to adjust the location.

## Routing configuration

### Permission routing

When it is necessary to perform authority control on certain routes, it can be easily implemented with a built-in authority scheme. When a user accesses an unauthorized route, the layout will provide a default unauthorized page.

![403](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*XdUsQa3xisIAAAAAAAAAAABkARQnAQ)

The detailed configuration scheme can be: [click to view](https://umijs.org/plugins/plugin-access#%E4%BB%8B%E7%BB%8D)

1. Request permission-related initialization information through global initialization information

```tsx | pure
// src/app.ts
export async function getInitialState() {
  const data = await fetchXXX();
  return data;
}
```

2. Added permission definition file

```tsx | pure
// src/access.ts
import { InitialState } from 'umi';

export default function accessFactory(initialState: InitialState) {
  return {
    readArticle: initialState.name === 'haha',
  };
}
```

3. Configure permissions for routing

```tsx | pure
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

The built-in layout will display the default UI for non-existent routes and routes that are not authorized to be accessed. No access as shown above.

When accessing a UI that does not exist, the default UI is as follows![404](https://gw.alipayobjects.com/mdn/rms_30ab81/afts/img/A*LOPuQoOGJIcAAAAAAAAAAABkARQnAQ)

### Nested layout

Sometimes our page may have some global general processing logic or UI, we want to complete it before the page is added, usually we hope that we can wrap a layer of layout inside the built-in layout to complete the demand.

```tsx | pure
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

### Hide the left menu, hide the navigation header, and footer according to the route

Sometimes our page may have some immersive design, and some layouts need to be hidden for routing. This can be achieved by adding an extended routing configuration. [Detailed configuration](https://umijs.org/zh-CN/plugins/plugin-layout#layout)

```tsx | pure
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

### Modification of menu layout mode

Sometimes our menu may display at top, left or left and top either, This can be achieved by changing `layout` at defaultSettings.js.

- top Display at top
- side Display at left side
- mix Display at left and top either，by the way，when the layout mode is `mix`， we need add `splitMenus: true` at defaultSettings.js

  ```tsx | pure
  // config/defaultSettings.ts
  export default {
    layout: 'mix',
    splitMenus: true,
  };
  ```

Tips: When the layout mode is `mix`，click the first menu, page cannot route they first children menu page, you can add `redirect` at route.

```tsx | pure
[
  {
    path: '/test/list',
    component: './test/list',
  },
  {
    path: '/test/list/testAdd',
    component: './test/list/testAdd',
  },
  {
    redirect: './test/list',
  },
];
```

## Custom layout

Sometimes we don't want to use the built-in layout and want to do more customization. We also provide flexible customization solutions.

The layout is essentially a special component, and the child pages will be passed to the layout component as attributes. The easyst layout is this:

```tsx | pure
// Children must be rendered, otherwise the child routes cannot be displayed
// Here you can also set global provision
const layout = ({ children }) => children;
export default layout;
```

We create a new BaseLayout.tsx in `src/layouts/`, copy the above code, and add the following code in `config/config.ts`:

```tsx | pure
defineConfig({
  // added configuration
  routes: {
    path: '/',
    component: '.../layouts/BaseLayout',
  },
});
```

We can modify or wrap children, and the ProLayout component uses such a scheme to inject configuration such as menus. What children are is related to your current path and layout configuration in the project. If you cannot meet your needs, you can try to adjust the location.

The following is the default ProLayout configuration, we can copy the default code and then customize:

```tsx | pure
/**
 * Ant Design Pro v4 use `@ant-design/pro-layout` to handle Layout.
 *
 * @see You can view component api by: https://github.com/ant-design/ant-design-pro-layout
 */
import type {
  MenuDataItem,
  BasicLayoutProps as ProLayoutProps,
  Settings,
} from '@ant-design/pro-layout';
import ProLayout, { DefaultFooter } from '@ant-design/pro-layout';
import React from 'react';
import { Link } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import RightContent from '@/components/GlobalHeader/RightContent';
import logo from '../assets/logo.svg';

export type BasicLayoutProps = {
  breadcrumbNameMap: Record<string, MenuDataItem>;
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
} & ProLayoutProps;

export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: Record<string, MenuDataItem>;
};

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] =>
  menuList.map((item) => {
    return {
      ...item,
      children: item.children ? menuDataRender(item.children) : undefined,
    };
  });

const defaultFooterDom = (
  <DefaultFooter
    copyright={`${new Date().getFullYear()} 蚂蚁集团体验技术部出品`}
    links={[
      {
        key: 'Ant Design Pro',
        title: 'Ant Design Pro',
        href: 'https://pro.ant.design',
        blankTarget: true,
      },
      {
        key: 'github',
        title: <GithubOutlined />,
        href: 'https://github.com/ant-design/ant-design-pro',
        blankTarget: true,
      },
      {
        key: 'Ant Design',
        title: 'Ant Design',
        href: 'https://ant.design',
        blankTarget: true,
      },
    ]}
  />
);

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  const {
    children,
    location = {
      pathname: '/',
    },
  } = props;

  const { formatMessage } = useIntl();

  return (
    <ProLayout
      logo={logo}
      formatMessage={formatMessage}
      {...props}
      onCollapse={handleMenuCollapse}
      onMenuHeaderClick={() => history.push('/')}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (
          menuItemProps.isUrl ||
          !menuItemProps.path ||
          location.pathname === menuItemProps.path
        ) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      breadcrumbRender={(routers = []) => [
        {
          path: '/',
          breadcrumbName: formatMessage({ id: 'menu.home' }),
        },
        ...routers,
      ]}
      itemRender={(route, params, routes, paths) => {
        const first = routes.indexOf(route) === 0;
        return first ? (
          <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
        ) : (
          <span>{route.breadcrumbName}</span>
        );
      }}
      footerRender={() => defaultFooterDom}
      menuDataRender={menuDataRender}
      rightContentRender={() => <RightContent />}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
```

## More

If the built-in layout plugin cannot meet your needs, you can tell us through [issue](https://github.com/umijs/plugins/issues) and we will deal with it as soon as possible.

You can also turn off the default function through the following configuration.

### Close the Layout plugin

Set the layout configuration to false.

```tsx | pure
// config.js
import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: false,
});
```
