---
order: 14
title: Theme 
type: Advanced
---

We built Ant Design Pro based on the Ant Design visual style. This style has been meticulously deployed by designers and is suitable for most middle and backstage projects. If there are additional requirements for visual style, it is recommended to use the following methods for customization.

## Theme customization

We developed based on Ant Design React and fully support the official customization of the less variables, as follows:

Find `src/theme.js` in the scaffold directory as follows.

```js
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
module.exports = {
  'font-size-base': '14px',
  'badge-font-size': '12px',
  'btn-font-size-lg': '@font-size-base',
  'menu-dark-bg': '#00182E',
  'menu-dark-submenu-bg': '#000B14',
  'layout-sider-background': '#00182E',
  'layout-body-background': '#f0f2f5',
};
```

In the [variable list] (https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) find the variables that need to be modified and start using `npm start`. After modification, you can see the effect in your application interface.

More ways to refer to the official document: [custom theme] (https://ant.design/docs/react/customize-theme)。

> Tip: You can publish the theme configuration file `theme.js` above as a separate npm package to facilitate reuse between different projects.
> Modify the `.webpackrc` in `"theme": "./node_modules/your-package/theme.js"` is the corresponding path.

## Style override

Ant Design's generic style variables may not be able to satisfy all custom requirements. You need to override the default component style globally. We can override the style by referring to the [style] (/docs/style) chapter.

### Global coverage component

For example, change the font size of all tags in `src/index.less`.

```less
// src/index.less
:global {
  .ant-tag {
    font-size: 12px;
  }
}
```

### Separately overwrite the specified component

```less
// sample.less
.customTag {
  font-size: 18px;
}
```

```jsx
import styles from './sample.less';

...

return <Tag className={styles.customTag}>Custom label</Tag>;
```

> We do not recommend style overrides. First, the default themes and components are carefully adjusted by the designer. Forced coverage may affect the overall effect. Second, the overlay code may fail due to component library version upgrades.

## Official theme

Ant Design Pro currently has only a set of default topics. We plan to launch more official themes later to meet individual needs. Stay tuned.