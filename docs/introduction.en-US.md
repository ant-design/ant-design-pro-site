---
order: 4
title: Introduction
type: Introduction
---

Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](http://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.

Ant Design Pro is striving to provide an out-of-the-box development experience, for which we offer a complete scaffolding involving [the internationalization of the world](https://umijs.org/plugins/plugin-locale), [Permissions](https://umijs.org/plugins/plugin-access), the mock, [the data stream](https://umijs.org/plugins/plugin-model), [the network requests](https://umijs.org/plugins/plugin-request) Best practices are provided for scenarios common in these backgrounds to reduce learning and development costs.

At the same time, to provide a more efficient development experience, we have provided a number of column heavy components, [ProLayout](https://procomponents.ant.design/components/layout), [ProTable](https://procomponents.ant.design/components/table), and [ProList](<[https.ant.design](https://procomponents.ant.design/components/list)/>) are good helpers in the background in development, significantly reducing boilerplate code.

Let's take a big look at the architecture of the entire Ant Design Pro in the big picture below.

![pro](https://gw.alipayobjects.com/zos/antfincdn/gjQQ3WuG8E/huitu1.svg)

After we just started running the project, we can see an interface. Although easy development is fine, if we understand some basic knowledge, our development will be smoother and debugging will be easier.

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
