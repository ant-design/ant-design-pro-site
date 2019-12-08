---
order: 4
title: Layout Component
type: Development
---

[Layout](https://github.com/ant-design/ant-design-pro-layout) The component is a new component in Pro v4. Unlike the normal components, it is very heavy and integrates menus. Layout, header, breadcrumbs, set drawers and more.

## ProLayout

In Ant Design Pro, pro-layout is used by default. After opening Pro, we can see this interface:

![](https://gw.alipayobjects.com/zos/antfincdn/qsgVmsWOrR/C8C775E0-6429-4B73-8CFD-F312ACCE9905.png)

For title and logo, Layout provides the `title` and `logo` properties. If you have more customization requirements, you can try the `menuHeaderRender: (logo,title)=>ReactNode` property, `onMenuHeaderClick` allows you Override the default click event.

```tsx
  <BasicLayout
    {...defaultProps}
    Title="Remax"
    Logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
    menuHeaderRender={(logo, title) => (
      <div
        Id="customize_menu_header"
        onClick={() => {
          Window.open('https://remaxjs.org/');
        }}
      >
        {logo}
        {title}
      </div>
    )}
  />
);
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
  rightContentRender={rightProps => <RightContent {...rightProps} {...settings} />}
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
