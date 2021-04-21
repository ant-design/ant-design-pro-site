---
order: 9
title: 开发前准备
type: Introduction
---

After we just started running the project, we can see an interface. Although easy development is fine, if we understand some basic knowledge, our development will be smoother and debugging will be easier.

## Runtime and compile time

The base of Pro is based on umi. Compared with webpack, umi increases runtime-related capabilities. Sometimes it may be difficult for us to distinguish it during development.

-Compile time refers to what the code does when it is compiled. The environment at this stage is generally the node environment, and functions such as fs and path can be used. But at the same time, because webpack is not used, jsx, the ability to introduce pictures and other non-node capabilities is not available. -Runtime refers to the stage where the code has been compiled and started to run. This stage is generally in the browser environment, and functions such as fs and path cannot be used. There will be cross-domain problems when accessing the URL. However, this environment has been compiled by webpack, so it can Write jsx, import pictures and other functions.

The above two environments are easy to confuse. Here is a easy version. The src folder contains all the runtime code, which will be compiled by webpack. Other directories can be considered to be able to use node capabilities when compiling. This is why we cannot write JSX in config.ts.

## umi webpack node

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
