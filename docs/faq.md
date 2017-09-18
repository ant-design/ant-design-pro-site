---
order: 19
title: 常见问题
---

提问之前，请先查阅下面的常见问题。

- 如何使用 Ant Design Pro？

  请阅读文档 [开始使用](./getting-started)。

- 如何更新 Ant Design Pro？

  - 单独升级 `antd` 版本，用于更新基础组件。
  - 比较不同的 Ant Design Pro 版本间的差异，手动修改本地配置。
  - 直接在 GitHub 上拷贝最新的典型模板。

- npm test 在 `MacOS Sierra` 下使用报错？

  你需要安装 [watchman](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-test-hangs-on-macos-sierra)。

- 如何修改默认 webpack 配置？

  详见 [roadhog 配置](https://github.com/sorrycc/roadhog#%E9%85%8D%E7%BD%AE)。

- 如何添加 babel 插件？

  详见 [roadhog extraBabelPlugins](https://github.com/sorrycc/roadhog#extrababelplugins)。

- 如何使用图片等静态资源？

  可以直接使用绝对路径（需要图床支持），若需直接使用本地文件，可按以下方式引入。

  ```jsx
  <img src={require('../assets/picture.png')} />
  ```

- 如何添加 scss 支持？

  在 `.roadhogrc` 中开启 `sass` 配置，详见 [sass](https://github.com/sorrycc/roadhog#sass)。

- Git commit 时报错？

  ![](https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png)

  脚手架默认开启了 [eslint](http://eslint.org/) 代码风格检查，请按照提示内容进行修改后重新提交，也可以手动 `npm run lint` 进行检查。

- 如何禁止 `npm start` 时自动打开浏览器？

  将 `package.json` 里的 `scripts.start`。

  ```js
  "start": "BROWSER=none roadhog server",
  ```

  For windows:

  ```js
  "start": "set BROWSER=none &&r oadhog server",
  ```

更多常见问题可以查看 [Trouble Shooting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting)。如果这里未能解决你的问题，欢迎[报告给我们](https://github.com/ant-design/ant-design-pro/issues)。
