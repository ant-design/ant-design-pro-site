---
order: 0
title: Environment Variables
type: Build & Deployment
---

There are often requirements in development, depending on the environment, such as the replacement of url, the dev environment in the dev url, and the online use of the prd environment. There is such an environment variable `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION` in the pro scaffolding. We hope that some methods can only be used in the demo website, and will not let git clone users mistakenly introduce these functions.

## Used in config

In Pro's [config](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts#L65) there is an environment variable to confirm whether you want to join Google Analytics. Statistical code. If it's a site deployment of Pro, add the statistics for Google Analytics. If it is a user, this feature will be turned off by default.

```js
const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;

// Google Analytics stats for preview.pro.ant.design
// preview.pro.ant.design only do not use in your production ;
if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
}
```

> Although we did this, we still want users to remove them as much as possible. Google Analytics can count very detailed data, which is a big risk for your data.

## Used in src code

[config](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/config/config.ts) is a node environment, so you can get it directly with `process.env` Environment variables, but in the js code, you can only use `process.env` to get `NODE_ENV` which is a convention variable. Other variables webpack will not automatically inject for you.

> For `process.env` and `NODE_ENV` see [here](https://webpack.js.org/configuration/mode/#usagee).

At this time we need to use [`define`](https://umijs.org/config/#define), which is based on [`define-plugin`](https://webpack.js.org/plugins/define-plugin/), we also use this feature in Pro, in [`config`] (https://github.com/ant-design/ant-design-pro/blob/fbeb545a0fd050e701924cba4b8889398e474525/config/config. Js#L65) Inject the environment variable of node into the define configuration

```js
export default {
  // some config
  // preview.pro.ant.design only do not use in your production ;
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '',
  },
  // ....
};
```

Use only the following settings, the specific code to see [here](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/utils/authority.ts#L17).

```js
if (!authority && ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
  return ['admin'];
}
```

The caveat here is that we don't need to use it by window['key'], but instead use it directly. The specific principle can be seen in the implementation of the [`define-plugin`](https://webpack.docschina.org/plugins/define-plugin/) plugin.

## Umi's default environment variable

A large number of [default environment variables] are available in umi (https://umijs.org/en/guide/env-variables.html#%E5%A6%82%E4%BD%95%E9%85%8D%E7 %BD%AE). These variables can help us automate some of the scaffolding features.

## Handling errors in Lint

Since environment variables are used directly, they are not used by window.XXX, and errors are reported in both eslint and TypeScript.

Errors can be handled in eslint by adding [`globals`](https://eslint.org/docs/user-guide/configuring#specifying-globals). The code looks like this

```js
{
 globals: {
    page: true,
  },
}
```

The TypeScript can be defined in [`typings.d.ts`](https://github.com/ant-design/ant-design-pro/blob/33f562974d1c72e077652223bd816a57933fe242/src/typings.d.ts#L18):

```ts
declare var ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: string;
```
