---
order: 0
title: 环境变量
type: 构建和部署
---

在开发中经常会有一些需求，根据不同的环境进行不同的操作，比如 url 的替换，dev 环境在 dev 的 url，而线上使用 prd 的环境。在 pro 的脚手架中就有这样的一个环境变量 `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION`,我们希望有一些方法只能在演示网站中使用，不会让 git clone 的用户错误的将这些功能引入。

## config 中使用

在 Pro 的[config](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts#L65) 中有根据环境变量来确认是否要加入 Google Analytics 的统计代码。如果是 Pro 的 site 部署就加入 Google Analytics 的统计。如果是用户就会默认的关闭掉这个功能。

```js
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

// 针对 preview.pro.ant.design 的 Google Analytics 统计代码
// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
}
```

> 虽然我们做了这个功能，但是还是希望用户在使用中尽量删除这些代码。 Google Analytics 可以统计非常详细的资料，这对您的数据来说是个很大的风险。

## 处理在 lint 中的报错

[config](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) 是 node 环境，所以可以直接用 `process.env` 的来直接拿到环境变量，但是在 js 的代码中,您使用 `process.env`可能只会获得 `NODE_ENV`这个在约定俗称的变量，别的变量 webpack 并不会自动帮你注入。

> 关于 `process.env` 和 `NODE_ENV` 看[这里](https://webpack.docschina.org/guides/production/#%E6%8C%87%E5%AE%9A-mode)。

这时候我们就需要使用 [`define`](https://umijs.org/zh/config/#define),他是根据[`define-plugin`](https://webpack.docschina.org/plugins/define-plugin/),在 Pro 中我们也是用了这个特性,在 [`config`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts#L65) 中将 node 的环境变量注入 define 配置中

```js
export default {
  //some config
  // preview.pro.ant.design only do not use in your production ;
  // preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '',
  },
  // ....
};
```

使用的时候只需要如下设置，具体代码看[这里](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/utils/authority.ts#L17)。

```js
if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
  return ['admin'];
}
```

这里需要注意的是我们不需要通过 window['key']的方式来使用它，而是直接使用。具体原理可以看一下[`define-plugin`](https://webpack.docschina.org/plugins/define-plugin/)插件的实现。

## umi 的默认环境变量

umi 中提供了大量的[默认环境变量](https://umijs.org/zh/guide/env-variables.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE)。这些变量可以帮助我们自动一些脚手架功能。

## 环境变量代码中报错的处理方式

由于环境变量是直接使用，不会通过 window 对象的方式来使用，在 eslint 和 TypeScript 中都会报错。

eslint 中可以通过增加 [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals) 的配置来处理报错。代码看起来是这样的

```js
{
 globals: {
    page: true,
  },
}
```

在 TypeScript 可以在[`typings.d.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/typings.d.ts#L18) 中进行定义：

```ts
declare var ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: string;
```
