---
order: 22
title: Dynamic Theme
group:
  title: styles and resources
nav:
  title: Documents
  path: /docs
  order: 1
---

In addition to less custom themes, we also provide the [CSS Variable](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) version to support the ability to dynamically switch themes. This function has been built in the new version of the layout.

> The dynamic theme based on CSS Variable has many advantages. It has better performance and can be dynamically updated, but it is not compatible with ie11. If you want to support ie, you cannot use this feature.

## how to use

### All variables supported

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

### umd method

If you are using the umd package, you need to modify the css reference.

```tsx | pure
- import'antd/dist/antd.min.css';
++ import'antd/dist/antd.variable.min.css';
```

Then you can use static methods to configure the theme:

```tsx | pure
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
```

### less method

If you use the less method, first you set `@root-entry-name: default;` at the entry. The entry file of less may be difficult to find, you can configure it in the theme configuration of `config/config.ts`

```tsx | pure
theme: {
    'root-entry-name':'variable',
}
```

If you manually imported antd's less, it is recommended to use the following replacement

```less | pure
- @import'~antd/es/style/themes/default.less';
++ @import (reference)'~antd/es/style/themes/index';
```

Then you can use static methods to configure the theme:

```tsx | pure
import { ConfigProvider } from 'antd';

ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
```

## Pro comes with components

After v5.2.0, Pro has built-in SettingDrawer. After opening, you can directly see the small gear on the right. After opening, some dynamic theme functions are added.

![img](https://gw.alipayobjects.com/zos/antfincdn/7%269blFI8X/0C9925F5-9479-443A-B71D-65CCDAF69B80.png)

This component can also control the state of the layout through the control of `initialValues`.

### How to turn off the dynamic setting of SettingDrawer?

SettingDrawer is actually built-in in `src/app.tsx`, if you want to delete it, you can delete it in `app.tsx`.

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

### IE11 compatible

CSS Variable does not support IE11. In order to support IE11, we have to turn off the default dynamic theme.

First, we have to turn off the theme configuration, you can find it in the theme field of `config/config.ts`,

```tsx | pure
theme: {
    'root-entry-name':'variable',
}
```

Delete it, or set it to `'root-entry-name':'default'`, then you need to delete the SettingDrawer in `src/app.tsx`, so that you can play "happily" under ie11.

### Black theme

Pro’s dynamic black theme is based on [darkreader](https://github.com/darkreader/darkreader), you can configure `enableDarkTheme={false}` to turn it off.
