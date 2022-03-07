---
order: 22
title: 动态主题
group:
  title: 样式和资源
nav:
  title: 文档
  path: /docs
  order: 1
---

除了 less 定制主题外，我们还提供了 [CSS Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) 版本以支持动态切换主题能力。在新版本的 layout 中已经内置了这个功能。

> 基于 CSS Variable 的动态主题有很多优点，性能更加优异并且可以做到动态更新，但是其并不兼容 ie11，如果你要支持 ie 就不能使用这个功能。

## 如何使用

### 支持的所有变量

```css | pure
html {
  --ant-primary-color: #1890ff;
  --ant-primary-color-hover: #40a9ff;
  --ant-primary-color-active: #096dd9;
  --ant-primary-color-outline: rgba(24, 144, 255, 0.2);
  --ant-primary-1: #e6f7ff;
  --ant-primary-2: #bae7ff;
  --ant-primary-3: #91d5ff;
  --ant-primary-4: #69c0ff;
  --ant-primary-5: #40a9ff;
  --ant-primary-6: #1890ff;
  --ant-primary-7: #096dd9;
  --ant-primary-color-deprecated-pure: ;
  --ant-primary-color-deprecated-l-35: #cbe6ff;
  --ant-primary-color-deprecated-l-20: #7ec1ff;
  --ant-primary-color-deprecated-t-20: #46a6ff;
  --ant-primary-color-deprecated-t-50: #8cc8ff;
  --ant-primary-color-deprecated-f-12: rgba(24, 144, 255, 0.12);
  --ant-primary-color-active-deprecated-f-30: rgba(230, 247, 255, 0.3);
  --ant-primary-color-active-deprecated-d-02: #dcf4ff;
  --ant-success-color: #52c41a;
  --ant-success-color-hover: #73d13d;
  --ant-success-color-active: #389e0d;
  --ant-success-color-outline: rgba(82, 196, 26, 0.2);
  --ant-success-color-deprecated-bg: #f6ffed;
  --ant-success-color-deprecated-border: #b7eb8f;
  --ant-error-color: #ff4d4f;
  --ant-error-color-hover: #ff7875;
  --ant-error-color-active: #d9363e;
  --ant-error-color-outline: rgba(255, 77, 79, 0.2);
  --ant-error-color-deprecated-bg: #fff2f0;
  --ant-error-color-deprecated-border: #ffccc7;
  --ant-warning-color: #faad14;
  --ant-warning-color-hover: #ffc53d;
  --ant-warning-color-active: #d48806;
  --ant-warning-color-outline: rgba(250, 173, 20, 0.2);
  --ant-warning-color-deprecated-bg: #fffbe6;
  --ant-warning-color-deprecated-border: #ffe58f;
  --ant-info-color: #1890ff;
  --ant-info-color-deprecated-bg: #e6f7ff;
  --ant-info-color-deprecated-border: #91d5ff;
}
```

### umd 方法

如果你使用的是 umd 的包，需要修改 css 引用。

```tsx | pure
-- import 'antd/dist/antd.min.css';
++ import 'antd/dist/antd.variable.min.css';
```

然后你就可以使用静态方法来配置主题：

```tsx | pure
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
```

### less 方法

如果你使用了 less 的方式，首先你在入口设置 `@root-entry-name: default;`，less 的入口文件可能比较难找，你可以在`config/config.ts` 的 theme 配置中配置

```tsx | pure
theme: {
    'root-entry-name': 'variable',
}
```

如果你手动导入了 antd 的 less，推荐是使用以下的替换

```less | pure
-- @import '~antd/es/style/themes/default.less';
++ @import (reference) '~antd/es/style/themes/index';
```

然后你就可以使用静态方法来配置主题：

```tsx | pure
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
```

## pro 自带的组件

在 v5.2.0 之后 Pro 内置了 SettingDrawer ，在打开之后就可以直接看到右边的小齿轮，打开之后增加了一些动态主题的功能。

![img](https://gw.alipayobjects.com/zos/antfincdn/7%269blFI8X/0C9925F5-9479-443A-B71D-65CCDAF69B80.png)

这个组件通过对 `initialValues` 的控制还可以控制 layout 的状态。

### 如何关掉 SettingDrawer 动态设置？

SettingDrawer 是在 `src/app.tsx` 中内置的，如果要删除可以在 `app.tsx` 中删除它。

```tsx | pure
childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
```

### IE11 兼容

CSS Variable 不支持 IE11 ，为了支持 IE11 我们要关闭默认的动态主题。

首先我们要关闭 theme 的配置，你可以在`config/config.ts` 的 theme 字段找到它，

```tsx | pure
theme: {
    'root-entry-name': 'variable',
}
```

删除掉它，或者设置为 `'root-entry-name': 'default'`,然后需要删除 `src/app.tsx` 的中 SettingDrawer，这样就可以在 ie11 下“愉快”的玩耍了。

### 黑色主题

Pro 的动态黑色主题是基于 [darkreader](https://github.com/darkreader/darkreader) 来实现的，你可以配置 `enableDarkTheme={false}` 来关掉它。
