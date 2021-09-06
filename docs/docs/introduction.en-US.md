---
order: 4
title: Beginner's Need to know
group:
  title: Introduction
nav:
  title: Documents
  path: /docs
  order: 1
---

> This document is for users who use the front-end framework for the first time. If you already know about umi, Ant Design, webpack and other development tools, you can quickly skip it.

Ant Design Pro is striving to provide an out-of-the-box development experience, for which we offer a complete scaffolding involving [the internationalization of the world](https://umijs.org/plugins/plugin-locale), [Permissions](https://umijs.org/plugins/plugin-access), the mock, [the data stream](https://umijs.org/plugins/plugin-model), [the network requests](https://umijs.org/plugins/plugin-request) Best practices are provided for scenarios common in these backgrounds to reduce learning and development costs.

At the same time, to provide a more efficient development experience, we have provided a number of column heavy components, [ProLayout](https://procomponents.ant.design/components/layout), [ProTable](https://procomponents.ant.design/components/table), and [ProList](<[https.ant.design](https://procomponents.ant.design/components/list)/>) are good helpers in the background in development, significantly reducing boilerplate code.

Let's take a big look at the architecture of the entire Ant Design Pro in the big picture below.

![pro](https://gw.alipayobjects.com/zos/antfincdn/AhUzrugUr%26/yuque_diagram.jpg)

After we just started running the project, we can see an interface. Although easy development is fine, if we understand some basic knowledge, our development will be smoother and debugging will be easier.

# [web technology](https://developer.mozilla.org/zh-CN/docs/Web/Reference)

Web technology refers to the use of [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference), [HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML), [css](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS) to build website technology, [mdn](https://developer.mozilla.org/zh-CN/docs/Web/Guide) provides a very convenient document to help us learn this knowledge.

## [Node.js](https://nodejs.org/en/) Basic front-end development environment

[Node.js](https://nodejs.org/en/) is a JavaScript runtime based on the Chrome V8 engine. The emergence of Node.js has greatly promoted the engineering of javascript. Node.js is already the basic environment for current front-end development and the place where any workflow starts.

## [Webpack](https://webpack.js.org/) A must-learn and must-know packaging tool for the front end

Webpack can help us accomplish some tasks. Such as js compression, css compression, compiling template files, etc., thereby reducing the workload of the front-end. Of course, Webpack is very powerful, and it can help us accomplish far more than these. If we use umi, it can greatly simplify the configuration of webpack, but it is still recommended to learn the basics to facilitate debugging and customize some configurations.

## [React Router](https://reactrouter.com/web/guides/quick-start) routing library

**React Router** is a powerful routing library based on **React**, which allows you to quickly add views and data streams to your application, while keeping pages and URLs in sync. React Router can convert the location into a state to help us manage all the states related to routing.

## [proxy](https://webpack.docschina.org/configuration/dev-server/) Reverse proxy tool

With the development of more and more biased front-end separation, we will inevitably encounter the problem of [cross-domain](https://www.ruanyifeng.com/blog/2016/04/cors.html) during development. Proxy can be a perfect reverse proxy. As one of the main functions of [webpack-dev-server](https://github.com/webpack/webpack-dev-server), proxy can help us proxy to any server, Solve cross-domain problems encountered in development.

## [dva](https://dvajs.com/guide/#%E7%89%B9%E6%80%A7) Lightweight application framework

dva is first a data flow solution based on [redux](https://github.com/reduxjs/redux) and [redux-saga](https://github.com/redux-saga/redux-saga), and then In order to simplify the development experience, dva also built-in [react-router](https://github.com/ReactTraining/react-router) and [fetch](https://github.com/github/fetch), so It can be understood as a lightweight application framework.

## [fabric](https://github.com/umijs/fabric) Strict but not strict lint rule set

Pro has built-in fabric as a coding standard. Fabric provides a strict but not strict lint rule set, including [eslint](https://cn.eslint.org/), [stylelint](https://stylelint.io /), [prettier](https://prettier.io/) three tools can significantly improve code quality and standardize code style.

## [TypeScript](https://www.typescriptlang.org/) JavaScript with types

TypeScript is a superset of javascript. TypeScript not only includes the syntax of [JavaScript](https://zh.wikipedia.org/wiki/JavaScript), but also provides static type checking and a more complete code hint function. Any existing JavaScript program is a legal TypeScript program, and you can get a better development experience with simple learning.

## [Ant Design](https://ant.design/index-cn) Front-end component library

Ant Design is an enterprise-level UI design language and React component library. As the best component library in Xihu District, it greatly improves the efficiency of middle and back-end development and is widely loved by developers at home and abroad.

## [Ant Design Chart](https://charts.ant.design/zh-CN) Simple and easy to use React chart library

Ant Design Charts is an out-of-the-box, easy-to-configure, general-purpose statistical chart library with good visual and interactive experience. It is based on g2's high-interaction visualization graphics grammar and presets the configuration. One component can realize a variety of complex charts.

## [ProComponents](https://procomponents.ant.design/) template components

ProComponents is more standardized than Ant Design. As a template component, a single component can be used to build a page. At the expense of some degrees of freedom, the efficiency of CRUD can be improved a hundredfold. If tables and forms are dominant in your project, it is recommended to use ProComponents to complete the development.

## [useModel Simple Data Flow](https://umijs.org/zh-CN/plugins/plugin-initial-state)

Simple data flow is a simple data management solution based on the hooks paradigm (some scenarios can replace dva), which is usually used for global shared data of middle and Taiwan projects. In the middle and back-end development, we often do not need to share a lot of data, only user information or part of the data sent by the back-end, simple data flow and initialization data can solve 90% of the scenes, and it is cheaper and better to use natural.

## Runtime and compile time

The base of Pro is based on umi. Compared with webpack, umi increases runtime-related capabilities. Sometimes it may be difficult for us to distinguish it during development.

-Compile time refers to what the code does when it is compiled. The environment at this stage is generally the node environment, and functions such as fs and path can be used. But at the same time, because webpack is not used, jsx, the ability to introduce pictures and other non-node capabilities is not available. -Runtime refers to the stage where the code has been compiled and started to run. This stage is generally in the browser environment, and functions such as fs and path cannot be used. There will be cross-domain problems when accessing the URL. However, this environment has been compiled by webpack, so it can Write jsx, import pictures and other functions.

The above two environments are easy to confuse. Here is a easy version. The src folder contains all the runtime code, which will be compiled by webpack. Other directories can be considered to be able to use node capabilities when compiling. This is why we cannot write JSX in config.ts.

## Umi

The base of Pro is umi, which is an integrated tool on top of webpack. webpack is a packaging tool for the node environment, and Node.js is a JavaScript runtime based on the Chrome V8 engine.

Compared with webpack, umi has increased runtime capabilities and helped us configure many webpack presets. It also reduces the problems caused by webpack upgrades. This is why we can provide plug-ins.

- [plugin-access](https://umijs.org/plugins/plugin-access), authority management
- [plugin-analytics](https://umijs.org/plugins/plugin-analytics), statistics management
- [plugin-antd](https://umijs.org/plugins/plugin-antd), integrate antd UI components
- [plugin-initial-state](https://umijs.org/plugins/plugin-initial-state), initialize data management
- [plugin-layout](https://umijs.org/plugins/plugin-layout), configure the layout to enable ant-design-pro
- [plugin-locale](https://umijs.org/plugins/plugin-locale), internationalization capability
- [plugin-model](https://umijs.org/plugins/plugin-model), a easy data flow based on hooks
- [plugin-request](https://umijs.org/plugins/plugin-request), a request scheme based on umi-request and umi-hooks

If you don't like the default configuration of umi, you can check here to see if there is any [configuration](https://umijs.org/config) you like. If you still can’t meet the requirements, you need to customize webpack. [chainWebpack](https://umijs.org/config#chainwebpack) can customize the built-in webpack configuration.

Webpack also has version requirements for node, and different webpacks have different dependencies on node versions, so the best way is to upgrade to the latest [long-term maintenance version](https://nodejs.org/en/).
