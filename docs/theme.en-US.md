---
order: 14
title: Theme
type: Advanced
---

We built Ant Design Pro based on the Ant Design visual style, which was carefully adapted by the designer to suit most mid- and back-office projects. If you have additional requirements for visual style, it is recommended to customize it in the following ways.

## Customize Theme

We developed based on Ant Design React and fully support the official less variable customization feature:

Find `config/config.ts` in the scaffolding directory as follows:

```js
...
theme: {
  'font-size-base': '14px',
  'badge-font-size': '12px',
  'btn-font-size-lg': '@font-size-base',
  'menu-dark-bg': '#00182E',
  'menu-dark-submenu-bg': '#000B14',
  'layout-sider-background': '#00182E',
  'layout-body-background': '#f0f2f5',
};
...
```

Find the variables that need to be modified in [All Variables Table](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less), and start `npm start` after modification. , you can see the effect in your app interface.

More ways can refer to the official documentation:[Customize Theme](http://ant.design/docs/react/customize-theme-cn)。

## Style Override

Ant Design's generic style variables may not meet all of the customization requirements, and you need to override the default component styles globally. We can override the style by referring to the [Style](/docs/style) section.

### Global Overlay Component

For example, modify the font size of all Tag in `src/global.less`.

```less
// src/index.less
:global {
  .ant-tag {
    font-size: 12px;
  }
}
```

### Overwrite Specified Component

```less
// sample.less
.customTag {
  font-size: 18px;
}
```

```jsx
import styles from './sample.less';

...

return <Tag className={styles.customTag}>定制标签</Tag>;
```

> We do not recommend style override. First, the default theme and components are carefully adjusted by the designer. Forcing override may affect the overall effect. Second, the overlay code may fail due to component library version upgrade.

## Switch Theme Online

Pro provides a setup drawer that can be used to switch themes and layouts online. This drawer makes it easy to see the effects of changing the theme without having to restart the scaffolding.

In order to facilitate preview, the configuration items in the settings will be saved in the address bar, you can copy them to others and share the effects.

> Due to the nature of the react-router, the parameters of the address bar may be cleared.

Once you have determined this configuration, you can copy it by clicking the Copy Code button and override the default setting in `src/defaultSetting.ts`. This way you can publish and deploy on this theme.

[`src/defaultSetting.ts`](https://github.com/ant-design/ant-design-pro/blob/master/src/defaultSettings.ts) The content is as follows:

```
module.exports = {
  navTheme: 'dark', // theme for nav menu
  primaryColor: '#1890FF', // primary color of Ant Design
  layout: 'sidemenu', // nav menu position: sidemenu or topmenu
  contentWidth: 'Fluid', // layout of content: Fluid or Fixed, only works when layout is topmenu
  fixedHeader: false, // sticky header
  autoHideHeader: false, // auto hide header
  fixSiderbar: false, // sticky siderbar
};
```

> Specific implementation see here [Dynamic Theme](/docs/dynamic-theme/)
