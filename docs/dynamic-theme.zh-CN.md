---
order: 5
title: 动态主题
type: 开发
---
简单几步可以实现Pro动态主题，此方法既适应于`V4`版本，也适应于`v2`版本。

## antd 主题切换

antd 中的动态主题能力来自 [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme)，主要思路仍然是将 antd 的变量规则与项目中规则进行抽取，然后进行的 less 的编译。

首先，安装此插件：

```
npm i umi-plugin-antd-theme --save-dev
```

* v2版本

将下面的代码复制到config/config.*.js文件中去，最后如下：
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

* v4 版本

在 `config/themePluginConfig.ts`添加类似代码：

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

所有的配置变量都可以在 [default.less](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 找到

> 配置的 theme 节点数量越多编译越慢，一个 css 文件编译大约需要 `1s`。

## 自定义组件

在 `global.less` 文件中，添加如下代码：

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

自定义组件的 `index.less` 中用法如下：

```js
.flatButton{
  color: var(--font-color);
  background: var(--bg-color);
}
```

## 主题切换

在主题切换的方法中添加如下代码，可以根据自己需要进行修改，比如添加从本地获取上次主题配置项等：

```js
theme1 = true;
onClick = () => {
    let styleLink = document.getElementById("theme-style");
    let body = document.getElementsByTagName('body')[0];
    if (styleLink) { // 假如存在id为theme-style 的link标签，直接修改其href
      if (this.theme1) {
        styleLink.href = '/theme/theme1.css';  // 切换 antd 组件主题
        body.className = "body-wrap-theme1";  // 切换自定义组件的主题
      } else {
        styleLink.href = '/theme/theme2.css';
        body.className = "body-wrap-theme2";
      }
      this.theme1 = !this.theme1;
    } else { // 不存在的话，则新建一个
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

## 与 SettingDrawer 一起使用

建议配置 [SettingDrawer](https://github.com/ant-design/ant-design-pro-layout#settingdrawer) 一起使用，[umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) 插件会将主题配置信息挂载到 `window.umi_plugin_ant_themeVar`，SettingDrawer 会去读这个配置自动生成相应的 UI。
