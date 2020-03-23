---
order: 5
title: Dynamic theme
type: Development
---

In just a few steps, you can complete dynamic theme function. It applies to Ant Design Pro v2 and v4.

## antd theme switch

The dynamic theme capability in antd comes from [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme). The main idea is still to carry out the variable rules of antd and the rules in the project. Extract and then compile less.

First, install this plugin:

```bash
npm i umi-plugin-antd-theme --save-dev
```

- umi@3

umi @ 3 will automatically read the plugin. Just install `umi-plugin-antd-theme` to take effect. In order to simplify the use, you need to configure the theme through `config\theme.config.json`.

- v2 版本

Copy the following code into the `config/config.\*.js` files, and finally:

```js
const plugins = [
  [
    'umi-plugin-react',
    ...
  ],
  [
    'umi-plugin-antd-theme',
    {
      theme: [
        {
          fileName: 'theme1.css',
          key:'theme1',
          modifyVars: {
            '@primary-color': '#13C2C2',
            '@menu-dark-color': '#324444',
            '@menu-dark-bg': '#5A5A5A',
          },
        },
        {
          fileName: 'theme2.css',
          key:'theme2',
          modifyVars: {
            '@primary-color': '#4992BF',
            '@menu-dark-color': '#9B9B9B',
            '@menu-dark-bg': '#3A3A3A',
          },
        },
      ],
      // 是否压缩css
      min: true,
      // css module
      isModule: true,
      // 忽略 antd 的依赖
      ignoreAntd: false,
      // 忽略 pro-layout
      ignoreProLayout: false,
      // 不使用缓存
      cache: true,
    },
  ],
];
```

- umi@2 版本

Add similar code in `config/themePluginConfig.ts`:

```js
export default {
  theme: [
    ...{
      fileName: 'theme1.css',
      key: 'theme1',
      modifyVars: {
        '@primary-color': '#13C2C2',
        '@menu-dark-color': '#324444',
        '@menu-dark-bg': '#5A5A5A',
      },
    },
    {
      fileName: 'theme2.css',
      key: 'theme2',
      modifyVars: {
        '@primary-color': '#4992BF',
        '@menu-dark-color': '#9B9B9B',
        '@menu-dark-bg': '#3A3A3A',
      },
    },
  ],
};
```

All configuration variables can be found at [default.less](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

> The larger the number of configured theme nodes, the slower the compilation. A css file will take about 1s to compile.

[theme](https://github.com/ant-design/ant-design-pro/blob/b60aa50f9b17ef222accfabaa493d58d2c8367b3/config/config.ts#L63) plugin is included in v4, but it is only opened when Pro is deployed You can delete the judgment and open it directly, for example:

```js
plugins.push(['umi-plugin-antd-theme', themePluginConfig]);
```

## Custom component

In the `global.less` file, add the following code:

```js
.body-wrap-theme1 {
  --font-color: #000000;
  --bg-color: #011313;
}

.body-wrap-theme2 {
  --font-color: #ffffff;
  --bg-color: #ffffff;
}
```

The usage of `index.less` of the custom component is as follows:

```js
.flatButton{
  color: var(--font-color);
  background: var(--bg-color);
}
```

## Theme switch

Add the following code to the theme switching method, you can modify it according to your needs, such as adding the last theme configuration item from the local:

### Used with SettingDrawer

It is recommended to configure [SettingDrawer](https://github.com/ant-design/ant-design-pro-layout#settingdrawer) to use together, [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) The plugin will mount the theme configuration information to `window.umi_plugin_ant_themeVar`. SettingDrawer will read this configuration and automatically generate the corresponding UI.

### Custom usage

```js
theme1 = true;
onClick = () => {
  let styleLink = document.getElementById('theme-style');
  let body = document.getElementsByTagName('body')[0];
  if (styleLink) {
    // If there is a link tag with id theme-style, modify its href directly
    if (this.theme1) {
      styleLink.href = '/theme/theme1.css'; // 切换 antd 组件主题
      body.className = 'body-wrap-theme1'; // 切换自定义组件的主题
    } else {
      styleLink.href = '/theme/theme2.css';
      body.className = 'body-wrap-theme2';
    }
    this.theme1 = !this.theme1;
  } else {
    // If it does not exist, create a new one
    styleLink = document.createElement('link');
    styleLink.type = 'text/css';
    styleLink.rel = 'stylesheet';
    styleLink.id = 'theme-style';
    if (this.theme1) {
      styleLink.href = '/theme/theme1.css';
      body.className = 'body-wrap-theme1';
    } else {
      styleLink.href = '/theme/theme2.css';
      body.className = 'body-wrap-theme2';
    }
    this.theme1 = !this.theme1;
    document.body.append(styleLink);
  }
};
```
