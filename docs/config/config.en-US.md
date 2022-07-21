---
title: Config
order: 1
nav:
  title: Config
  path: /config
  order: 2
---

> Check [umi document](https://umijs.org/zh-CN/config) for more configuration

## base

-Type: `string` -Default: `/`

Set the routing prefix, usually used to deploy to a non-root directory.

For example, if you have routes `/` and `/users`, and then set the base to `/foo/`, then you can access the previous routes through `/foo/` and `/foo/users`.

## chainWebpack

-Type: `Function`

Modify the webpack configuration through the API of [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain).

such as:

```tsx | pure
export default {
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // set alias
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // Delete the umi built-in plugin
    memo.plugins.delete('progress');
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('copy');
  },
};
```

Support asynchronous,

```tsx | pure
export default {
  async chainWebpack(memo) {
    await delay(100);
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');
  },
};
```

When SSR, modify the server-side build configuration

```tsx | pure
import { BundlerConfigType } from 'umi';

export default {
  chainWebpack(memo, { type }) {
    // Modification of ssr bundler config
    if (type === BundlerConfigType.ssr) {
      // Server-side rendering build extension
    }

    // Modification of csr bundler config
    if (type === BundlerConfigType.csr) {
      // Client rendering build extension
    }

    // Both ssr and csr are extended
  },
};
```

The parameters are:

-memo, the current webpack-chain object -env, current environment, `development`, `production` or `test` etc. -webpack, webpack instance, used to get its internal plug-ins -createCSSRule, used to extend other CSS implementations, such as sass, stylus -type, the current webpack instance type, csr is used by default, if ssr is turned on, there will be a webpack instance of ssr

## devServer

-Type: `object` -Default: `{}`

Configure the development server.

Contains the following sub-configuration items:

-port, port number, default `8000` -host, default `0.0.0.0` -https, whether https server is enabled, and HTTP/2 will also be enabled -writeToDisk, generate `assets` to the file system

The enabled port and host can also be specified temporarily through the environment variables PORT and HOST.

## devtool

-Type: `string` -Default: `cheap-module-source-map` in dev, `false` in build

The user configures the sourcemap type.

Common optional types are:

-eval, the fastest type, but does not support lower version browsers, if the compilation is slow, you can try -source-map, the slowest and most comprehensive type

For more details, please refer to [webpack#devtool configuration](https://webpack.js.org/configuration/devtool/#devtool).

## dynamicImport

-Type: `object` -Default: `false`

Whether to enable on-demand loading, that is, whether to split the build product, download additional JS and execute it when needed.

When closed by default, only one js and one css will be generated, namely `umi.js` and `umi.css`. The advantage is that it is worry-free and easy to deploy; the disadvantage is that it will be slower for users to open the website for the first time.

It usually looks like this after packaging,

```bash
+ dist
  -umi.js
  -umi.css
  -index.html
```

After enabling, you need to consider the configuration of publicPath, and you may also need to consider runtimePublicPath, because you need to know where to load resources such as JS, CSS, and images asynchronously.

This is usually the case after packaging,

```bash
+ dist
  -umi.js
  -umi.css
  -index.html
  -p__index.js
  -p__users__index.js
```

The `p__users_index.js` here is the path `src/pages/users/index` where the routing component is located, where `src` will be ignored, and `pages` will be replaced with `p`.

Contains the following sub-configuration items,

-loading, the type is a string, pointing to the loading component file

such as:

```tsx | pure
export default {
  dynamicImport: {
    loading: '@/Loading',
  },
};
```

Then create a new `Loading.tsx` in the src directory,

```tsx | pure
import React from 'react';

export default () => {
  return <div>Loading...</div>;
};
```

After construction, use low network simulation to see the effect.

## dynamicImportSyntax

-Type: `object` -Default: `false`

If you don't need to load routes on demand, but only need to support code splitting with `import()` syntax, you can use this configuration.

such as:

```tsx | pure
export default {
  dynamicImportSyntax: {},
};
```

## exportStatic

-Type: `object`

Configure the output format of html, and only output `index.html` by default.

If you need pre-rendering, please enable the [ssr](#ssr-32) configuration, which is commonly used to solve the problem of speeding up the SEO and first-screen rendering of the page when there is no server.

If you enable `exportStatic`, html files will be output for each route.

Contains the following attributes:

-htmlSuffix, enable the `.html` suffix. -dynamicRoot, deploy to any path. -extraRoutePaths, generate additional route pages, see [Pre-rendering dynamic routing](https://v3.umijs.org/docs/ssr#%E9%A2%84%E6%B8%B2%E6%9F%93%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1)

## externals

-Type: `object` -Default: `{}`

Set which modules can not be packaged, and import them through `<script>` or other methods, which usually need to be used together with scripts or headScripts configuration.

such as,

```tsx | pure
export default {
  externals: {
    react: 'window.React',
  },
  scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
};
```

In simple understanding, it can be understood that `import react from'react'` will be replaced with `const react = window.React`.

## fastRefresh <Badge>3.3+</Badge>

-Type: `object`

Fast refresh (Fast Refresh), you can **keep the component state** during development, while editing to provide **instant feedback**.

[Document](/docs/fast-refresh)

## hash

-Type: `boolean` -Default: `false`

Configure whether to include the hash suffix in the generated file, which is usually used for incremental publishing and to prevent the browser from loading the cache.

After enabling hash, the product usually looks like this,

```bash
+ dist
  -logo.sw892d.png
  -umi.df723s.js
  -umi.8sd8fw.css
  -index.html
```

Note:

-html files never have a hash

## headScripts

-Type: `Array` -Default: `[]`

Configure the extra script in `<head>`, the array items are strings or objects.

In most scenarios, the string format is sufficient, such as:

```tsx | pure
export default {
  headScripts: [`alert(1);`, `https://a.com/b.js`],
};
```

Will generate HTML,

```html
<head>
  <script>
    alert(1);
  </script>
  <script src="https://a.com/b.js"></script>
</head>
```

If you want to use additional attributes, you can use the object format,

```tsx | pure
export default {
  headScripts: [
    { src: '/foo.js', defer: true },
    { content: `alert('Hello');`, charset: 'utf-8' },
  ],
};
```

Will generate HTML,

```html
<head>
  <script src="/foo.js" defer></script>
  <script charset="utf-8">
    alert('Hello');
  </script>
</head>
```

## history

-Type: `object` -Default: `{ type:'browser' }`

Configure [history type and configuration items](https://github.com/ReactTraining/history/blob/master/docs/GettingStarted.md).

Contains the following sub-configuration items:

-type, optional `browser`, `hash` and `memory` -options, the configuration items passed to create{{{ type }}}History, the configuration items of each type are different

note,

-In options, `getUserConfirmation` does not support configuration because it is a function format -In options, `basename` does not need to be configured, it is specified by umi's `base` configuration

## links

-Type: `Array` -Default: `[]`

Configure additional link tags.

## outputPath

-Type: `string` -Default: `dist`

Specify the output path.

note:

-It is not allowed to set as a convention directory such as `src`, `public`, `pages`, `mock`, and `config`

## proxy

-Type: `object` -Default: `{}`

Configure agent capabilities.

```
export default {
  proxy: {
    '/api': {
      'target':'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': {'^/api':'' },
    },
  },
}
```

Then you can access the data of [http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users) by visiting `/api/users`.

> Note: The proxy configuration only takes effect in dev.

## publicPath

-Type: `publicPath` -Default: `/`

Configure the publicPath of webpack. When packaging, webpack will add the value of `publicPath` in front of the static file path. When you need to modify the static file address, such as using CDN deployment, set the value of `publicPath` to the value of CDN. If you use some special file systems, such as hybrid development or cordova technologies, you can try to set `publicPath` to `./` relative path.

> The relative path `./` has some limitations, for example, it does not support multi-layer routing `/foo/bar`, but only supports single-layer path `/foo`

If your application is deployed on a sub-path of the domain name, such as `https://www.your-app.com/foo/`, you need to set the `publicPath` to `/foo/`, if you also want to take into account the normal development environment For debugging, you can configure it like this:

```tsx | pure
import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/foo/' : '/',
});
```

## routes

-Type: `Array(route)`

Configure routing.

umi's routing is implemented based on [react-router@5](https://reacttraining.com/react-router/web/guides/quick-start), and the configuration is basically the same as that of react-router, see [Routing Configuration](https://v3.umijs.org/docs/routing) chapter.

such as:

```tsx | pure
export default {
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/user', redirect: '/user/login' },
        { path: '/user/login', component: './user/login' },
      ],
    },
  ],
};
```

note:

-If the value of `component` is a relative path, it will start parsing with `src/pages` as the base path -If `routes` is configured, profile routing is preferred, and conventional routing will not take effect

## runtimePublicPath

-Type: `boolean` -Default: `false`

Configure whether to enable runtime publicPath.

It is usually used for a set of codes that have different publicPath requirements in different environments, and then publicPath is output by the server through the HTML global variable `window.publicPath`.

After enabling, this paragraph will be added when packaging,

```tsx | pure
__webpack_public_path__ = window.resourceBaseUrl || window.publicPath;
```

Then webpack will start searching from `window.resourceBaseUrl` or `window.publicPath` when loading resource files such as JS asynchronously.

## targets

-Type: `object` -Default: `{ chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }`

The configuration requires a compatible minimum version of the browser, and the polyfill and syntax conversion will be automatically introduced.

For example, to be compatible with ie11, you need to configure:

```tsx | pure
export default {
  targets: {
    ie: 11,
  },
};
```

note:

-The configured targets will be merged to the default value, no need to repeat the configuration -The sub-item configuration is `false` to delete the version number of the default configuration

## theme

-Type: `object` -Default: `{}`

Configuring the theme is actually configuring less variables.

such as:

```tsx | pure
export default {
  theme: {
    '@primary-color': '#1DA57A',
  },
};
```
