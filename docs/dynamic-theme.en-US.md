---
order: 5
title: Dynamic theme
type: Development
---

ntd-theme] (https://github.com/chenshuai2144/umi-plugin-antd-theme), and the main idea is still to implement the ant variable rules and the rules in the project. Extract and then compile the less.

His configuration is as follows:

> key should be the same as the file name. If it is a black theme, the file name should be something like `dark-green.css`.

```js
[
      'umi-plugin-antd-theme',
      {
        Theme: [
          {
            Theme: 'dark',
            Key: 'dark',
            fileName: 'dark.css',
          },
          {
            fileName: 'mingQing.css',
            Key: 'dark',
            modifyVars: {
              '@primary-color': '#13C2C2',
            },
          },
        ],
        // Whether to compress css
        Min: true,
        // css module
        isModule: true,
        / / Ignore the dependency of antd
        ignoreAntd: false,
        // ignore pro-layout
        ignoreProLayout: false,
        // don't use the cache
        Cache: true,
      },
    ],

```

After configuring the plugin, the plugin will generate css according to the configuration of theme. Each node in the theme array will generate a file. We can find them in `src/page/.umi/plugin-theme/theme`. When used, we can introduce them via `/theme/filename.css`.

> The more the number of configured theme nodes, the slower the compilation. It takes about 1s to compile a css file.

```js
Const style = document.createElement('link');
Style.type = 'text/css';
Style.rel = 'stylesheet';
Style.id = 'theme-style';
Style.onload = () => {
  // do something
};
Style.href = '/theme/dark.css';
Document.body.append(style);
```

## Use with SettingDrawer

It is recommended to configure [SettingDrawer](https://github.com/ant-design/ant-design-pro-layout#settingdrawer) together. [umi-plugin-antd-theme](https://github.com/chenshuai2144/umi-plugin-antd-theme) The plugin will mount the theme configuration information to `window.umi_plugin_ant_themeVar`, SettingDrawer Will read this configuration to automatically generate the corresponding UI.
