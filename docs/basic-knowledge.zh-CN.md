---
order: 1
title: 开发前准备
type: 入门
---

在我们刚刚开始跑起来项目之后就能看到一个界面，虽然简单的开发已经可以了，但是如果我们懂一些基础知识会让我们的开发更加顺畅，debug 也会更加简单。

## 运行时和编译时

Pro 的底座基于 umi， umi 与 webpack 相比增加了运行时相关的能力，我们在开发中有时候可能难以区分。

- 编译时指的是代码在编译的时候做的事情，这个阶段的环境一般是 node 环境，可以使用 fs，path 等功能。但是同时因为没有使用 webpack ，所以 jsx，引入图片等非 node 的能力是无法使用的。
- 运行时是指代码已经编译完成开始运行的阶段，这个阶段一般是浏览器环境，不能使用 fs，path 等功能，访问 url 也会有跨域的问题，但是这个环境被 webpack 编译过，所以可以写 jsx，导入图片等功能。

以上两个环境用起来容易混淆，这里有一个简单的版本，src 文件夹中都是运行时的代码，都会经过 webpack 编译。其他目录的都可以认为是编译时，可以使用 node 能力。这也是为什么我们不能在 config.ts 里面写 JSX 的原因。

## umi webpack node

Pro 的底座是 umi，umi 是一个 webpack 之上的整合工具。 webpack 是一个 node 环境的打包工具，Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行时。

umi 相比于 webpack 增加了运行时的能力，同时帮助我们配置了很多 webpack 的预设。也减少了 webpack 升级导致的问题。这也是我们为了还能提供插件的原因。

- [plugin-access](https://umijs.org/plugins/plugin-access)，权限管理
- [plugin-analytics](https://umijs.org/plugins/plugin-analytics)，统计管理
- [plugin-antd](https://umijs.org/plugins/plugin-antd)，整合 antd UI 组件
- [plugin-initial-state](https://umijs.org/plugins/plugin-initial-state)，初始化数据管理
- [plugin-layout](https://umijs.org/plugins/plugin-layout)，配置启用 ant-design-pro 的布局
- [plugin-locale](https://umijs.org/plugins/plugin-locale)，国际化能力
- [plugin-model](https://umijs.org/plugins/plugin-model)，基于 hooks 的简易数据流
- [plugin-request](https://umijs.org/plugins/plugin-request)，基于 umi-request 和 umi-hooks 的请求方案

如果不喜欢 umi 默认的配置，可以在这里看看有没有你喜欢的[配置](https://umijs.org/config)。如果还是不能满足就要自定义 webpack 了，[chainWebpack](https://umijs.org/config#chainwebpack) 可以自定义 内置的 webpack 配置。

webpack 对于 node 也是有版本需求的，不同 webpack 对 node 版本的依赖也不同，所以最好的办法是升级到最新的[长期维护版本](https://nodejs.org/en/)。
