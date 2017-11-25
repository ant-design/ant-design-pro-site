---
order: 21
title:
  en-US: FAQ
  zh-CN: 常见问题
type: 其他
---

提问之前，请先查阅下面的常见问题。

---

### Ant Design Pro 和 Ant Design React 有什么区别？

可以理解为后者是 React 组件库，前者是 React 脚手架。

### 如何使用 Ant Design Pro？

请阅读文档 [开始使用](/docs/getting-started)。

### 是否可以在生产环境中使用 Ant Design Pro？

Ant Design Pro 目前基于 antd@3.0 版本开发，antd 现在依然在 beta 开发阶段，因此建议在正式版本发布之后再使用。

antd@3.0 预计在 11 月底发布：https://github.com/ant-design/ant-design/issues/5570

### 如何更新 Ant Design Pro？

- 单独升级 `antd` 版本，用于更新基础组件。
- 比较不同的 Ant Design Pro 版本间的差异，手动修改本地配置。
- 也可以尝试合并远程分支：`git pull https://github.com/ant-design/ant-design-pro`（注意，需要自行解决冲突）。
- 直接在 GitHub 上拷贝最新的典型模板。

### npm test 在 `MacOS Sierra` 下使用报错？

你需要安装 [watchman](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-test-hangs-on-macos-sierra)。

### 如何修改默认 webpack 配置？

详见 [roadhog 配置](https://github.com/sorrycc/roadhog#%E9%85%8D%E7%BD%AE)。

### 如何添加 babel 插件？

详见 [roadhog extraBabelPlugins](https://github.com/sorrycc/roadhog#extrababelplugins)。

### 如何使用图片等静态资源？

可以直接使用绝对路径（需要图床支持），若需直接使用本地文件，可按以下方式引入。

```jsx
<img src={require('../assets/picture.png')} />
```

### 我的 url 里怎么有 `#` 号？要如何去掉？

请参考文档 [前端路由与服务端的结合](/docs/deploy#前端路由与服务端的结合)。

### 如何添加 scss 支持？

在 `.roadhogrc` 中开启 `sass` 配置，详见 [sass](https://github.com/sorrycc/roadhog#sass)。

### Git commit 时报错？

<img src="https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png" width="600" />

脚手架默认开启了 [eslint](http://eslint.org/) 代码风格检查，请按照提示内容进行修改后重新提交，也可以手动 `npm run lint` 进行检查。

### 如何禁止 `npm start` 时自动打开浏览器？

修改 `package.json` 里的 `scripts.start` 为：

```js
"start": "BROWSER=none roadhog server",
```

For windows:

```js
"start": "set BROWSER=none && roadhog server",
```

### 站点是否支持国际化？

这是 Ant Design Pro 的特性之一，目前第一个版本只有中文文案。国际化将是我们下一步的首要工作。

### English Documentation?

English Documentation will be translated in next couple of monthes, trace [ant-design/ant-design-pro#54](https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479)

---

更多常见问题可以查看 [Trouble Shooting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting) 和 [roadhog](https://github.com/sorrycc/roadhog)。如果这里未能解决你的问题，欢迎 [报告给我们](https://github.com/ant-design/ant-design-pro/issues)。
