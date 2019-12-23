---
order: 5
title: Dynamic theme
type: Development
---
In just a few steps, you can complete dynamic theme function. It applies to Ant Design Pro v2 and v4.

## antd dynamic theme

[umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme), and the main idea is still to implement the ant variable rules and the rules in the project. Extract and then compile the less.

First, install this plugin:
```js
npm i umi-plugin-antd-theme
```
* v2

Copy codes as follows to `config/config.*.js`:
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
      min: true,
      isModule: true,
      ignoreAntd: false,
      ignoreProLayout: false,
      cache: true,
    },
  ],
];
```
* v4

Copy codes as follows to `config/themePluginConfig.ts`:
```js
export default {
  theme: [
    ...
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
};
```
All variables could be found in [default.less](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

> The more the number of configured theme nodes, the slower the compilation. It takes about 1s to compile a css file.

## custom component

Add codes as follows in file `global.less`
```js
.body-wrap-theme1 {
    // theme1下的全局变量在此定义
    --font-color: #000000;
    --bg-color: #011313;
}

.body-wrap-theme2 {
    // theme2下的全局变量在此定义
    --font-color: #ffffff;
    --bg-color: #ffffff;
}
```
In your custom component, usage as follows in `index.less`
```js
.flatButton{
  color: var(--font-color);
  background: var(--bg-color);
}
```

## switch theme

Add codes in your switch theme function
```js
theme1 = true;
onClick = () => {
    let styleLink = document.getElementById("theme-style");
    let body = document.getElementsByTagName('body')[0];
    if (styleLink) { // if link tag which id is 'theme-style' exsits, modify its href
      if (this.theme1) {
        styleLink.href = '/theme/theme1.css';  // switch antd component theme
        body.className = "body-wrap-theme1";  // switch custom component theme
      } else {
        styleLink.href = '/theme/theme2.css';
        body.className = "body-wrap-theme2";
      }
      this.theme1 = !this.theme1;
    } else { // if link tag which id is 'theme-style' do not exsit, create it
      styleLink = document.createElement('link');
      styleLink.type = 'text/css';
      styleLink.rel = 'stylesheet';
      styleLink.id = 'theme-style';
      if (this.theme1) {
        styleLink.href = '/theme/theme1.css';
        body.className = "body-wrap-theme1";
      } else {
        styleLink.href = '/theme/theme2.css';
        body.className = "body-wrap-theme2";
      }
      this.theme1 = !this.theme1;
      document.body.append(styleLink);
    }
  }
```

## Use with SettingDrawer

It is recommended to configure [SettingDrawer](https://github.com/ant-design/ant-design-pro-layout#settingdrawer) together. [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) The plugin will mount the theme configuration information to `window.umi_plugin_ant_themeVar`, SettingDrawer Will read this configuration to automatically generate the corresponding UI.
