---
order: 3
title: Layout
type: Development
---

Layout is the outermost structure for a project, usually consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page.

## Layout in Ant Design Pro

We abstract common layouts in Ant Design Pro, and put them in `/layouts`, includes:

- BasicLayout: Basic Layout, includes header navigation, sidebar and notification.

<img src="https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png" />

- BlankLayout: Blank Layout
- UserLayout: Layout for login and sign-ups.

<img src="https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png" />

### Usage

To manage mappings between routes and pages, we could configure `config/config.ts` as follows:

```jsx
module.exports = [
  {
    path: '/',
    component: '../layouts/BasicLayout', // layout for pages in routes
    routes: [
      // dashboard
      { path: '/', redirect: '/dashboard/analysis' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },
          { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },
          { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },
        ],
      },
    ],
  },
];
```

See [config.ts](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) for more details.

And more router config could be found in：[Umi router](https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1)。

#### Router config for Pro

We extend some configuration for Ant Design Pro's nav menu and authority.

```
{
  name: 'dashboard',
  icon: 'dashboard',
  hideInMenu: true,
  hideChildrenInMenu: true,
  hideInBreadcrumb: true,
  authority: ['admin'],
}
```

- `name`: display name in menu and breadcrumb. Note that it is the key of locales data, you can change display text in [/src/locales/en-US.ts](https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/en-US.ts).
- `icon`: icon type of menu item.
- `hideInMenu`: whether hide itself in menu, default `false`。
- `hideChildrenInMenu`: whether hide it's children in menu, default `false`.
- `hideInBreadcrumb`: whether hide itself in breadcrumb, default `false`.
- `authority`: authority key, see more in [Authority Management](/docs/authority-management)。

[Layout](https://prolayout.ant.design) The component is a new component in Pro v4. Unlike the normal components, it is very heavy and integrates menus. Layout, header, breadcrumbs, set drawers and more.

## Ant Design Pro Layout

[ProLayout](https://prolayout.ant.design/) is a highly integrated React Component of Ant Design Pro. Looks this interface below:

![](https://gw.alipayobjects.com/zos/antfincdn/qsgVmsWOrR/C8C775E0-6429-4B73-8CFD-F312ACCE9905.png)

For title and logo, Layout provides the `title` and `logo` properties. If you have more customization requirements, you can try the `menuHeaderRender: (logo,title)=>ReactNode` property, `onMenuHeaderClick` allows you Override the default click event.

```tsx
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

```tsx
<BasicLayout
  menuDataRender={() => [
    {
      Path: '/',
      Name: 'welcome',
      Icon: 'smile',
      Children: [
        {
          Path: '/welcome',
          Name: 'one',
          Children: [
            {
              Path: '/welcome/welcome',
              Name: 'two',
              Icon: 'smile',
              Exact: true,
            },
          ],
        },
      ],
    },
  ]}
  menuItemRender={(menuItemProps, defaultDom) =>
    menuItemProps.isUrl ? defaultDom : <a>open {defaultDom}</a>
  }
>
    Hello World
</BasicLayout>
```

## PageHeaderWrapper

PageHeaderWrapper encapsulates the PageHeader component of ant design, adds tabList, and content. Fill in the title and breadcrumb based on the current route. It depends on the route property of the Layout. Of course you can pass in parameters to override the default values. PageHeaderWrapper supports all the attributes of [Tabs](https://ant.design/components/tabs-cn/) and [PageHeader](https://ant.design/components/page-header-cn/).

> PageHeaderWrapper must be wrapped by ProLayout to automatically generate breadcrumbs and titles.

## SettingDrawer

> Because SettingDrawer is too flexible and cooperates with [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) has serious performance problems. Therefore, we do not recommend using SettingDrawer in a formal environment. You need to use human flesh for dating and add it via `fetch: blocks`.

SettingDrawer provides a graphical interface to set the layout configuration, which is convenient to show all the capabilities of Layout in the presentation environment.

![](https://gw.alipayobjects.com/zos/antfincdn/iITLeL7TVb/6ED60335-2A24-4C13-91CE-FD782FB2D219.png)

[Setting the theme color](/docs/dynamic-theme) of the settingDrawer needs to be used with [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme), otherwise the theme color configuration will not be displayed.

## Nested Layout

At some point it may be necessary to nest the layout, and Pro-Layout provides enough apis to support nesting.

![](https://gw.alipayobjects.com/zos/antfincdn/F6Rhw6KYUt/C253E5E1-2790-4224-9D7F-C24F39AEF398.png)

The code is configured as follows:

```tsx
<ProLayout
  Layout="topmenu"
  className="chenshuai2144"
  disableMobile
  rightContentRender={(rightProps) => <RightContent {...rightProps} {...settings} />}
  contentStyle={{ margin: 0 }}
>
    {' '}
  <ProLayout navTheme="light" menuHeaderRender={false} {...props} {...settings}>
         <PageHeaderWrapper content="Welcome to your use">{props.children}</PageHeaderWrapper>
      {' '}
  </ProLayout>
</ProLayout>
```

> Here you need disableMobile to disable the phone menu, otherwise it will behave abnormally under the phone.
