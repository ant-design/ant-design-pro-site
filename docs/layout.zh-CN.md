---
order: 1
title: 布局
type: 开发
---

页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。

### 如何使用 Ant Design Pro 布局

通常布局是和路由系统紧密结合的，Ant Design Pro 的路由使用了 Umi 的路由方案，我们将配置信息统一抽离到 `config/config.ts` 下，通过如下配置定义每个页面的布局：

```js
routers: [
  {
    path: '/',
    component: '../layouts/BasicLayout', // 指定以下页面的布局
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

映射路由和页面布局（组件）的关系如代码所示，完整映射转换实现可以参看 [config.ts](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts)。

更多 Umi 的路由配置方式可以参考：[Umi 配置式路由](https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1)。

#### Pro 扩展配置

我们在 `config.ts` 扩展了一些关于 pro 全局菜单的配置。

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

- `name`: 当前路由在菜单和面包屑中的名称，注意这里是国际化配置的 key，具体展示菜单名可以在 [/src/locales/zh-CN.ts](https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/zh-CN.ts) 进行配置。
- `icon`: 当前路由在菜单下的图标名。
- `hideInMenu`: 当前路由在菜单中不展现，默认 `false`。
- `hideChildrenInMenu`: 当前路由的子级在菜单中不展现，默认 `false`。
- `hideInBreadcrumb`: 当前路由在面包屑中不展现，默认 `false`。
- `authority`: 允许展示的权限，不设则都可见，详见：[权限管理](/docs/authority-management)。

## Ant Design Pro Layout 组件

[ProLayout](https://prolayout.ant.design) 组件 是 Pro v4 中新增的组件，与一般的组件不同，它非常重型，在其中集成了菜单，布局，页头，面包屑，设置抽屉等多种功能。

在 Ant Design Pro 中，默认使用了 ProLayout，打开 Pro 后我们可以看到这样的界面：

![](https://gw.alipayobjects.com/zos/antfincdn/qsgVmsWOrR/C8C775E0-6429-4B73-8CFD-F312ACCE9905.png)

对于标题和 logo，Layout 提供了 `title`和 `logo` 属性来自定，如果你有更强的定制需求，可以试试 `menuHeaderRender: (logo,title) => ReactNode` 属性，`onMenuHeaderClick` 允许你覆盖默认的点击事件。

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
);
```

如果你需要自定义的 menu ，`siderWidth` 属性可以控制右侧菜单的宽度，`menuRender` 和 `menuItemRender` 可以让你完成自定义整个菜单。`menuDataRender` 可以用于自定义菜单数据，你可以将其替换为从服务器获取的数据。

```tsx
<BasicLayout
  menuDataRender={() => [
    {
      path: '/',
      name: 'welcome',
      icon: 'smile',
      children: [
        {
          path: '/welcome',
          name: 'one',
          children: [
            {
              path: '/welcome/welcome',
              name: 'two',
              icon: 'smile',
              exact: true,
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

## PageContainer

PageContainer 封装了 ant design 的 PageHeader 组件，增加了 tabList，和 content。 根据当前的路由填入 title 和 breadcrumb。它依赖 Layout 的 route 属性。当然你可以传入参数来复写默认值。 PageContainer 支持 [Tabs](https://ant.design/components/tabs-cn/) 和 [PageHeader](https://ant.design/components/page-header-cn/) 的所有属性。

> PageContainer 必须要被 ProLayout 包裹才能自动生成面包屑和标题。

## SettingDrawer

> 因为 SettingDrawer 过于灵活而且配合 [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) 有严重的性能问题。因此我们不建议在正式环境中使用 SettingDrawer，你需要人肉引入一下 [SettingDrawer](https://github.com/ant-design/ant-design-pro-layout/blob/90464d9bf1c4b76e25efdf0160ae183be59062e5/example/src/layouts/BasicLayout.tsx)。预览网站中是通过 `fetch:blocks` 来添加的。

SettingDrawer 提供了一个图形界面来设置 layout 的配置，方便在演示环境中展示 Layout 的所有能力。

![](https://gw.alipayobjects.com/zos/antfincdn/iITLeL7TVb/6ED60335-2A24-4C13-91CE-FD782FB2D219.png)

SettingDrawer 的[切换主题色](/docs/dynamic-theme-cn)功能需要配和 [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) 一起使用，否则会不展示主题色配置。

## 嵌套布局

在某些时候可能需要进行 layout 的嵌套，Pro-Layout 提供了足够的 api 来支持嵌套。

![](https://gw.alipayobjects.com/zos/antfincdn/F6Rhw6KYUt/C253E5E1-2790-4224-9D7F-C24F39AEF398.png)

代码配置如下:

```tsx
<ProLayout
  layout="topmenu"
  className="chenshuai2144"
  disableMobile
  rightContentRender={(rightProps) => <RightContent {...rightProps} {...settings} />}
  contentStyle={{ margin: 0 }}
>
  <ProLayout navTheme="light" menuHeaderRender={false} {...props} {...settings}>
    <PageContainer content="欢迎您的使用">{props.children}</PageContainer>
  </ProLayout>
</ProLayout>
```

> 这里需要 disableMobile 来禁用手机端菜单，不然在手机端下会表现异常
