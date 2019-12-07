---
order: 5
title: 动态主题
type: 开发
---

Pro 中的动态主题能力来自 [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme),主要思路仍然是将 antd 的变量规则与项目中规则进行抽取，然后进行的 less 的编译。

他的配置如下：

> key 与文件名应该相同，如果是黑色主题，文件名应为类似`dark-green.css`。

```js
[
  'umi-plugin-antd-theme',
  {
    theme: [
      {
        theme: 'dark',
        key: 'dark',
        fileName: 'dark.css',
      },
      {
        fileName: 'mingQing.css',
        key: 'dark',
        modifyVars: {
          '@primary-color': '#13C2C2',
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
];
```

配置插件之后，插件会根据 theme 的配置生成 css，theme 数组中每个节点都会生成一个文件，我们可以在 `src/page/.umi/plugin-theme/theme` 中找到它们。当使用时我们可以通过 `/theme/filename.css` 来引入它们。

> 配置的 theme 节点数量越多编译越慢，一个 css 文件编译大约需要 1s。

```js
const style = document.createElement('link');
style.type = 'text/css';
style.rel = 'stylesheet';
style.id = 'theme-style';
style.onload = () => {
  // do something
};
style.href = '/theme/dark.css';
document.body.append(style);
```

## 与 SettingDrawer 一起使用

建议配置 [SettingDrawer](https://github.com/ant-design/ant-design-pro-layout#settingdrawer) 一起使用，[umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) 插件会将主题配置信息挂载到 `window.umi_plugin_ant_themeVar`, SettingDrawer 会去读这个配置自动生成相应的 UI。
