---
order: 14
title: Layout
type: Basic Usage
---

The layout is a must-have for a background application, and a layout, ProTable and Form, gives you a CRUD page. [plugin-layout](https://umijs.org/plugins/plugin-layout) built in Pro 。

### Use by plugin

We can reduce boilerplate code by [plugin-layout](https://umijs.org/plugins/plugin-layout). In simple use we only need to configure the layout property in `config.ts`.

```tsx
import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: {
    name: 'Ant Design Pro',
    logo: 'https://preview.pro.ant.design/static/logo.f0355d39.svg',
  },
});
```

If you need a more complex configuration that can be configured in `app.tsx`, take Pro as an example:

```tsx
export const layout = {
  rightRender: () => {
    return <RightContent />;
  },
  footerRender: () => <Footer />,
};
```

This configuration supports any ProLayout configuration. You can see this in [detail](https://prolayout.ant.design).

### Use code to implement layout

Plugin-layout may not be able to meet complex requirements, and we need to write our own code for complex layout configurations. The current subpage is automatically injected into the layout's props. One of the simplest layouts is the following.

```tsx
const Layout = ({ children }) => children;
export default Layout;
```

#### Layout implementation in v4

```tsx
import ProLayout, {
  BasicLayoutProps as ProLayoutProps,
  DefaultFooter,
} from '@ant-design/pro-layout';
import React from 'react';
import { Link, useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import RightContent from '@/components/GlobalHeader/RightContent';

const defaultFooterDom = (
  <DefaultFooter
    copyright="2019 蚂蚁金服体验技术部出品"
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

const BasicLayout: React.FC<ProLayoutProps> = (props) => {
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
      menuHeaderRender={(logoDom, titleDom) => (
        <Link to="/">
          {logoDom}
          {titleDom}
        </Link>
      )}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
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
      rightContentRender={() => <RightContent />}
      {...props}
    >
      {children}
    </ProLayout>
  );
};

export default BasicLayout;
```
