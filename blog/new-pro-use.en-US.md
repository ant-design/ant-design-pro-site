---
order: 1
title: Layout component of Ant Design Pro
type: Blog
time: 2019-05-08
---

There has always been a problem in Pro. We handed the entire project to the user. Although the user's DIY ability has been improved, the user can modify any function and fully control the project. But it also allows users to understand a lot of details. And it is not possible to quickly upgrade the version.

In particular, Pro's core Layout, as the most used piece of Pro, we have seen almost every version of the business support. 0.x, 1.x, 2.x, almost every version has users, but can not follow the official upgrade, only after the error has occurred, the official community to help.

We offer a solution in V4. Make a Layout into a component that allows any scaffolding to use Layout's capabilities, as well as smooth upgrades to keep up with the community. The code repository is here [pro-layout](https://github.com/ant-design/ant-design-pro-layout).

Layout provides a rich api configuration that decouples umi's dependencies, allowing even fast access to older projects.

## Use

It is also very simple to use

```shell
npm i @ant-design/pro-layout --save
// or
yarn add @ant-design/pro-layout
```

In jsx:

```jsx
import BasicLayout from '@ant-design/pro-layout';

render(<BasicLayout />, document.getElementById('root'));
```

Start the project and you can get

![image](https://user-images.githubusercontent.com/8186664/55930941-276e6580-5c56-11e9-800d-bc284bda4daf.png)

## Advanced usage

Layout has a lot of requirements that need to be customized, so we expose a series of methods and hope to find a balance between flexibility and simplicity. A series of Api Layouts have preset values and can run normally without special configuration.

### Custom Menu

Layout uses menu props to generate menus, if you are using umi in prop or with this parameter. You can use it like this:

```tsx
const Layout = (props: BasicLayoutProps) => {
  return <BasicLayout title="Ant Design Pro" {...props} />;
};
```

If you use other scaffolding, you can manually pass the routing configuration, the data structure is as follows:

```tsx
// can be imported { RouterTypes } from '@ant-design/pro-layout/typings' to get this type
Export interface Route {
   Path?: string;
   Routes: Array<{
     Exact?: boolean;
     Icon?: string;
     Name?: string;
     Path: string;
     //Optional secondary menu
     Children?: Route['routes'];
   }>;
}

Const route: Route = {
   Routes: [
     { path: '/', name: 'welcome', icon: 'smile' },
     { path: '/home', name: 'home', icon: 'home' },
   ],
};

Const Layout = (props: BasicLayoutProps) => {
   Return <BasicLayout title="Ant Design Pro" {...props} route={route} />;
};
```

In addition, we also provide `menuDataRender` and `menuItemRender` props,
