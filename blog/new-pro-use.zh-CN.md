---
order: 1
title: Pro 的 Layout 组件
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2019-05-08
---

在 Pro 中一直存在一个问题，我们将整个项目交给了用户，虽然提升了用户的 DIY 的能力，可以让用户对任何功能修改，完全掌控项目。但是也会让用户需要了解很多细节。并且无法快速的进行版本的升级。

尤其是 Pro 的核心 Layout，作为 Pro 的中使用最多的一块，在业务支持中我们见到了几乎的各个时期的版本。 0.x，1.x，2.x，几乎每个版本都有用户，但是却无法跟随官方升级，只能发生了错误之后再官方社区提供帮助。

在 V4 中我们提供了一个解决方案。将 Layout 进行组件化，既可以让任何脚手架使用 Layout 的能力，同时也可以平滑升级，跟进社区的发展。代码仓库在这里 [pro-layout](https://github.com/ant-design/pro-components)。

[ProLayout](https://procomponents.ant.design/components/layout) 提供了丰富的 api 配置,解耦了对 umi 的依赖,即使是旧的项目也可以快速接入。

## 使用

使用 layout:

```shell
npm i @ant-design/pro-layout --save
// or
yarn add @ant-design/pro-layout
```

在 jsx 中:

```tsx | pure
import BasicLayout from '@ant-design/pro-layout';

render(<BasicLayout title="Ant Design Pro" />, document.getElementById('root'));
```

启动项目，你就可以得到

![image](https://user-images.githubusercontent.com/8186664/55930941-276e6580-5c56-11e9-800d-bc284bda4daf.png)

## 高级用法

Layout 有很多需要自定义的需求，所以我们暴露了一系列的方法，希望在灵活和简单之间找到一个平衡。Layout 的一系列 Api 都有预设值，不需要特殊配置也可以正常运行。

### 自定义菜单

Layout 通过 route props 来生成菜单，如果你使用的是 umi 在 prop 中或自带这个参数。你可以这样使用：

```tsx | pure
const Layout = (props: BasicLayoutProps) => {
  return <BasicLayout title="Ant Design Pro" {...props} />;
};
```

如果你使用的其他脚手架，你可以将路由配置手动传入，数据结构如下：

```tsx | pure
// can be imported { RouterTypes } from '@ant-design/pro-layout/typings'  to get this type
export interface Route {
  path?: string;
  routes: Array<{
    exact?: boolean;
    icon?: string;
    name?: string;
    path: string;
    // optional secondary menu
    children?: Route['routes'];
  }>;
}

const route: Route = {
  routes: [
    { path: '/', name: 'welcome', icon: 'smile' },
    { path: '/home', name: '主页', icon: 'home' },
  ],
};

const Layout = (props: BasicLayoutProps) => {
  return <BasicLayout title="Ant Design Pro" {...props} route={route} />;
};
```

作为补充，我们还提供了 `menuDataRender` 和 `menuItemRender` props，

#### menuDataRender Props

`menuDataRender` 进行对菜单数据再进行一次筛选，Pro 中菜单权限就是通过这种方式实现的。

```tsx | pure
export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
}

const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
  return menuList.map((item) => {
    const localItem = { ...item, children: item.children ? menuDataRender(item.children) : [] };
    return Authorized.check(item.authority, localItem, null) as MenuDataItem;
  });
};
const Layout = (props: BasicLayoutProps) => {
  return <BasicLayout title="Ant Design Pro" menuDataRender={menuDataRender} />;
};
```

#### menuItemRender Props

`menuItemRender` 控制具体的菜单 dom 渲染，你可以自定义 menuItem 的点击事件等等。

```tsx | pure
export interface MenuDataItem {
  authority?: string[] | string;
  children?: MenuDataItem[];
  hideChildrenInMenu?: boolean;
  hideInMenu?: boolean;
  icon?: string;
  locale?: string;
  name?: string;
  path: string;
}

const Layout = (props: BasicLayoutProps) => {
  return (
    <BasicLayout
      title="Ant Design Pro"
      menuItemRender={(menuItemProps, defaultDom) => {
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
    />
  );
};
```

### SettingDrawer

SettingDrawer 提供了一个界面来动态的设置 Layout 的一些参数。具体效果可以在 [preview](https://preview.pro.ant.design/) 预览效果。使用方式也很简单。

```tsx | pure
import BasicLayout, { SettingDrawer } from '@ant-design/pro-layout';
import React, { useState } from 'react';

const Layout = (props: BasicLayoutProps) => {
  const [settings, setSettings] = useState({});
  return (
    <>
      <BasicLayout
        {...settings}
        title="Ant Design Pro"
        menuItemRender={(menuItemProps, defaultDom) => {
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
      />
      <SettingDrawer settings={settings} onSettingChange={setSettings} />
    </>
  );
};
```

### PageContainer

PageContainer 提供了对 antd 的 pageHeader 的封装提供了面包屑和 title 的自动配置。

```tsx | pure
import { PageContainer } from '@ant-design/pro-layout';

const Page = () => <PageContainer>this is a page</PageContainer>;
```

### RouteContext

RouteContext 可以提供 Layout 的内置的数据。例如 isMobile 和 collapsed，你可以消费这些数据来自定义一些行为。

```tsx | pure
import { RouteContext } from '@ant-design/pro-layout';

const Page = () => (
  <RouteContext.Consumer>
    {(value) => {
      return value.title;
    }}
  </RouteContext.Consumer>
);
```
