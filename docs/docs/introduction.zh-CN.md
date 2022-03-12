---
order: 4
title: 新手需知
group:
  title: 入门
nav:
  title: 文档
  path: /docs
  order: 1
---

> 此文档面向首次使用前端框架的用户，如果你已经了解 umi ，Ant Design，webpack 等开发工具可以快速略过。

Ant Design Pro 在力求提供开箱即用的开发体验，为此我们提供完整的脚手架，涉及[国际化](https://umijs.org/zh-CN/plugins/plugin-locale)，[权限](https://umijs.org/zh-CN/plugins/plugin-access)，mock，[数据流](https://umijs.org/zh-CN/plugins/plugin-model)，[网络请求](https://umijs.org/zh-CN/plugins/plugin-request)等各个方面。为这些中后台中常见的方案提供了最佳实践来减少学习和开发成本。

同时为了提供更加高效的开发体验，我们提供了一系列模板组件，[ProLayout](https://procomponents.ant.design/components/layout)，[ProTable](https://procomponents.ant.design/components/table)，[ProList](https://procomponents.ant.design/components/list) 都是开发中后台的好帮手，可以显著的减少样板代码。

我们可以通过下面的大图来了解整个 Ant Design Pro 的架构。

![pro](https://gw.alipayobjects.com/zos/antfincdn/AhUzrugUr%26/yuque_diagram.jpg)

在我们刚刚开始跑起来项目之后就能看到一个界面，虽然简单的开发已经可以了，但是如果我们懂一些基础知识会让我们的开发更加顺畅，debug 也会更加简单。

## [web 技术](https://developer.mozilla.org/zh-CN/docs/Web/Reference)

web 技术是指通过 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference)，[HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML)，[css](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS) 来构建网站的技术，[mdn](https://developer.mozilla.org/zh-CN/docs/Web/Guide) 提供了相当方便的文档来帮助我们学习这些知识。

## [Node.js](https://nodejs.org/en/) 前端开发基础环境

[Node.js](https://nodejs.org/en/) 是一个基于 Chrome V8 引擎的 JavaScript 运行时，Node.js 的出现极大的推动了 javascript 的工程化。Node.js 已经是当前前端开发的基础环境，也是任何工作流开始的地方。

## [Webpack](https://webpack.js.org/) 前端必学必会的打包工具

Webpack 可以帮助我们完成一些任务。比如 js 压缩、css 压缩、编译模板文件等等，从而减少前端的工作量。当然，Webpack 功能很强大，能帮我们完成的工作远远不止这些。如果我们使用 umi 可以极大的简化 webpack 的配置，但是仍然推荐了解一下基础知识，方便 debug 和 自定义一些配置。

## [React Router](https://reactrouter.com/web/guides/quick-start) 路由库

**React Router**  是一个基于 **React**  之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。 React Router 可以把 location 转化成一个 state，帮助我们管理路由相关的所有状态。

## [proxy](https://webpack.docschina.org/configuration/dev-server/) 反向代理工具

随着开发越来越偏向的前后端分离，我们在开发中不可避免地会碰到[跨域](https://www.ruanyifeng.com/blog/2016/04/cors.html)的问题。proxy 就可以完美反向代理的问题，作为 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 的主打功能之一， proxy 可以帮助我们代理到任何服务器，解决开发中碰到的跨域问题。

## [dva](https://dvajs.com/guide/#%E7%89%B9%E6%80%A7) 轻量级的应用框架

dva 首先是一个基于 [redux](https://github.com/reduxjs/redux) 和 [redux-saga](https://github.com/redux-saga/redux-saga) 的数据流方案，然后为了简化开发体验，dva 还额外内置了 [react-router](https://github.com/ReactTraining/react-router) 和 [fetch](https://github.com/github/fetch)，所以也可以理解为一个轻量级的应用框架。

## [fabric](https://github.com/umijs/fabric) 严格但是不严苛的 lint 规则集

pro 内置了 fabric 作为了编码规范，fabric 提供了严格但是不严苛的 lint 规则集，包含 [eslint](https://cn.eslint.org/)，[stylelint](https://stylelint.io/)，[prettier ](https://prettier.io/)三种工具，可以显著的提升代码质量，规范代码风格。

## [TypeScript](https://www.typescriptlang.org/) 带类型的 JavaScript

TypeScript 是 javascript 的超集，TypeScript 不仅包含 [JavaScript](https://zh.wikipedia.org/wiki/JavaScript) 的语法，同时还提供了静态类型检查和更完善的代码提示功能。任何现有的 JavaScript 程序都是合法的 TypeScript 程序，只需要简单的学习，就可以获得更佳的开发体验。

## [Ant Design](https://ant.design/index-cn) 前端组件库

Ant Design 是一套企业级 UI 设计语言和 React 组件库。作为西湖区最好的组件库，它极大的提升了中后台开发的效率，广受国内外开发者的喜爱。

## [Ant Design Chart](https://charts.ant.design/zh)简单好用的 React 图表库

Ant Design Charts 是开箱即用、易于配置、具有良好视觉和交互体验的通用统计图表库，基于 g2 的高交互可视化图形语法的同时预设了配置，一个组件即可实现多种复杂的图表。

## [ProComponents](https://procomponents.ant.design/) 模板组件

ProComponents 相比于 Ant Design 更加标准化，作为模板组件一个组件就可以搭建一个页面，在牺牲部分自由度的情况下， 让 CRUD 的效率百倍提升。如果你的项目中表格和表单占主导，那么推荐使用 ProComponents 来完成开发。

## [useModel 简易数据流](https://umijs.org/zh-CN/plugins/plugin-initial-state)

简易数据流一种基于 hooks 范式的简易数据管理方案（部分场景可以取代 dva），通常用于中台项目的全局共享数据。在中后台开发中我们往往不需要共享很多数据，只需要用户信息或者后端下发的部分数据，简易数据流和初始化数据即可解决百分之 90 的场景，使用起来成本更低，更加自然。

## 运行时和编译时

Pro 的底座基于 umi， umi 与 webpack 相比增加了运行时相关的能力，我们在开发中有时候可能难以区分。

- 编译时指的是代码在编译的时候做的事情，这个阶段的环境一般是 node 环境，可以使用 fs，path 等功能。但是同时因为没有使用 webpack ，所以 jsx，引入图片等非 node 的能力是无法使用的。
- 运行时是指代码已经编译完成开始运行的阶段，这个阶段一般是浏览器环境，不能使用 fs，path 等功能，访问 url 也会有跨域的问题，但是这个环境被 webpack 编译过，所以可以写 jsx，导入图片等功能。

以上两个环境用起来容易混淆，这里有一个简单的版本，src 文件夹中都是运行时的代码，都会经过 webpack 编译。其他目录的都可以认为是编译时，可以使用 node 能力。这也是为什么我们不能在 config.ts 里面写 JSX 的原因。

## Umi 的插件

Pro 的底座是 umi，umi 是一个 webpack 之上的整合工具。 umi 相比于 webpack 增加了运行时的能力，同时帮助我们配置了很多 webpack 的预设。也减少了 webpack 升级导致的问题。这也是我们能提供插件的原因。

- [plugin-access](https://umijs.org/zh-CN/plugins/plugin-access)，权限管理
- [plugin-analytics](https://umijs.org/zh-CN/plugins/plugin-analytics)，统计管理
- [plugin-antd](https://umijs.org/zh-CN/plugins/plugin-antd)，整合 antd UI 组件
- [plugin-initial-state](https://umijs.org/zh-CN/plugins/plugin-initial-state)，初始化数据管理
- [plugin-layout](https://umijs.org/zh-CN/plugins/plugin-layout)，配置启用 ant-design-pro 的布局
- [plugin-locale](https://umijs.org/zh-CN/plugins/plugin-locale)，国际化能力
- [plugin-model](https://umijs.org/zh-CN/plugins/plugin-model)，基于 hooks 的简易数据流
- [plugin-request](https://umijs.org/zh-CN/plugins/plugin-request)，基于 umi-request 和 umi-hooks 的请求方案

如果不喜欢 umi 默认的配置，可以在这里看看有没有你喜欢的[配置](https://umijs.org/zh-CN/config)。如果还是不能满足就要自定义 webpack 了，[chainWebpack](https://umijs.org/zh-CN/config#chainwebpack) 可以自定义内置的 webpack 配置。

webpack 对于 node 也是有版本需求的，不同 webpack 对 node 版本的依赖也不同，所以最好的办法是升级到最新的[长期维护版本](https://nodejs.org/en/)。
