---
order: 24
title: 升级到 2.0 版本
type: 其他
---

在 Ant Design Pro 2.0 版本中除了很多功能性上的增强外，我们还将前端构建工具从 roadhog 升级到了 [UmiJS](https://umijs.org/)（简称 umi）。之所以说是升级而不是替换，是因为 umi 不仅仅是前端构建工具，它还包含了路由以及一套插件机制用于构建一个完整的 React 应用。

所以如果你想要更好的在原有的项目中去添加 Ant Design Pro 2.0 的功能，将 2.0 的代码移植到你的项目中，你最好将你的项目从 roadhog 迁移到 umi。这边文档会指引你完成迁移工作，在此之前你可能需要先阅读 umi 的[文档](https://umijs.org/guide/)，使得先对 umi 有一个初步的认识，这对你的迁移工作会很有帮助。下面是以后大概的步骤，再往后会有更具体的说明。

注：该迁移指南是基于当前最新的 v1 版本编写的，如果你的版本过老可能会有一些细节不一样，请结合具体情况迁移。

## 迁移步骤概览

- 把 `package.json` roadhog 的依赖修改为 umi。
- 修改 `src/ruotes` 目录名称为 pages，pages 是 umi 约定的目录。
- 修改 `.webpackrc.js` 中的配置到 `config/config.js` 中。
- 删除 `src/models/index.js`，在 umi 中 models 文件夹中的 dva model 会被自动挂载。
- 重命名 `index.ejs` 为 `document.ejs`，它是 umi 约定的文件。
- 删除 `src/index.js` 和 `src/common/router.js`，在 2.0 中将使用 umi 的方式来配置路由。
- 修改 `index.less` 为 `global.less` 和修改 `index.js` 为 `global.js`，他们也是 umi 约定的文件。
- 在 `config/config.js` 中添加路由配置 routes。
- 修改 `src/layouts/BasicLayout.js` 中的组件且套语法。
