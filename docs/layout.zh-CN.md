---
order: 15
title: 内置布局
type: 基础使用
---

布局是一个中后台应用必备的，一个布局+ ProTable + Form 即可获得一个 CRUD 页面。Pro 中内置了 [plugin-layout](https://umijs.org/plugins/plugin-layout)。

### 使用插件

我们可以通过 [plugin-layout](https://umijs.org/plugins/plugin-layout) 来减少样板代码。简单的使用中我们只需要在 `config.ts` 中配置 layout 属性。

```tsx
import { defineConfig } from 'umi';

export const config = defineConfig({
  layout: {
    name: 'Ant Design Pro',
    logo: 'https://preview.pro.ant.design/static/logo.f0355d39.svg',
  },
});
```

如果需要更加复杂的配置可以在 `app.tsx` 中来配置, 以 Pro 为例：

```tsx
export const layout = {
  rightRender: () => {
    return <RightContent />;
  },
  footerRender: () => <Footer />,
};
```

此项配置支持任何 ProLayout 的配置。详细可以看这个[文档](https://prolayout.ant.design)。

### 使用代码实现 layout

plugin-layout 可能无法满足复杂的需求，这时候就需要我们自己写代码来进行复杂的 layout 配置。layout 的 props 中会自动注入当前的子页面。 一个最简单的 layout 是下面这样的。

```tsx
const Layout = ({ children }) => children;
export default Layout;
```

#### v4 中的 layout 实现

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
