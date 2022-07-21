---
title: 配置
order: 1
nav:
  title: 配置
  path: /config
  order: 2
---

> 查看 [umi 文档](https://umijs.org/zh-CN/config) 了解更多配置

## base

- Type: `string`
- Default: `/`

设置路由前缀，通常用于部署到非根目录。

比如，你有路由 `/` 和 `/users`，然后设置了 base 为 `/foo/`，那么就可以通过 `/foo/` 和 `/foo/users` 访问到之前的路由。

## chainWebpack

- Type: `Function`

通过 [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) 的 API 修改 webpack 配置。

比如：

```tsx | pure
export default {
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // 设置 alias
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');

    // 删除 umi 内置插件
    memo.plugins.delete('progress');
    memo.plugins.delete('friendly-error');
    memo.plugins.delete('copy');
  },
};
```

支持异步，

```tsx | pure
export default {
  async chainWebpack(memo) {
    await delay(100);
    memo.resolve.alias.set('foo', '/tmp/a/b/foo');
  },
};
```

SSR 时，修改服务端构建配置

```tsx | pure
import { BundlerConfigType } from 'umi';

export default {
  chainWebpack(memo, { type }) {
    // 对 ssr bundler config 的修改
    if (type === BundlerConfigType.ssr) {
      // 服务端渲染构建扩展
    }

    // 对 csr bundler config 的修改
    if (type === BundlerConfigType.csr) {
      // 客户端渲染构建扩展
    }

    // ssr 和 csr 都扩展
  },
};
```

参数有：

- memo，当前 webpack-chain 对象
- env，当前环境，`development`、`production` 或 `test` 等
- webpack，webpack 实例，用于获取其内部插件
- createCSSRule，用于扩展其他 CSS 实现，比如 sass, stylus
- type，当前 webpack 实例类型，默认走 csr，如果开启 ssr，会有 ssr 的 webpack 实例

## devServer

- Type: `object`
- Default: `{}`

配置开发服务器。

包含以下子配置项：

- port，端口号，默认 `8000`
- host，默认 `0.0.0.0`
- https，是否启用 https server，同时也会开启 HTTP/2
- writeToDisk，生成 `assets` 到文件系统

启用 port 和 host 也可以通过环境变量 PORT 和 HOST 临时指定。

## devtool

- Type: `string`
- Default: `cheap-module-source-map` in dev, `false` in build

用户配置 sourcemap 类型。

常见的可选类型有：

- eval，最快的类型，但不支持低版本浏览器，如果编译慢，可以试试
- source-map，最慢最全的类型

更多类型详见 [webpack#devtool 配置](https://webpack.js.org/configuration/devtool/#devtool)。

## dynamicImport

- Type: `object`
- Default: `false`

是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。

默认关闭时，只生成一个 js 和一个 css，即 `umi.js` 和 `umi.css`。优点是省心，部署方便；缺点是对用户来说初次打开网站会比较慢。

打包后通常是这样的，

```bash
+ dist
  - umi.js
  - umi.css
  - index.html
```

启用之后，需要考虑 publicPath 的配置，可能还需要考虑 runtimePublicPath，因为需要知道从哪里异步加载 JS、CSS 和图片等资源。

打包后通常是这样，

```bash
+ dist
  - umi.js
  - umi.css
  - index.html
  - p__index.js
  - p__users__index.js
```

这里的 `p__users_index.js` 是路由组件所在路径 `src/pages/users/index`，其中 `src` 会被忽略，`pages` 被替换为 `p`。

包含以下子配置项，

- loading, 类型为字符串，指向 loading 组件文件

比如：

```tsx | pure
export default {
  dynamicImport: {
    loading: '@/Loading',
  },
};
```

然后在 src 目录下新建 `Loading.tsx`，

```tsx | pure
import React from 'react';

export default () => {
  return <div>加载中...</div>;
};
```

构建之后使用低网络模拟就能看到效果。

## dynamicImportSyntax

- Type: `object`
- Default: `false`

如果你不需要路由按需加载，只需要支持 `import()` 语法的 code splitting，可使用此配置。

比如：

```tsx | pure
export default {
  dynamicImportSyntax: {},
};
```

## exportStatic

- Type: `object`

配置 html 的输出形式，默认只输出 `index.html`。

如果需要预渲染，请开启 [ssr](#ssr-32) 配置，常用来解决没有服务端情况下，页面的 SEO 和首屏渲染提速。

如果开启 `exportStatic`，则会针对每个路由输出 html 文件。

包含以下几个属性：

- htmlSuffix，启用 `.html` 后缀。
- dynamicRoot，部署到任意路径。
- extraRoutePaths，生成额外的路径页面，用法和场景见 [预渲染动态路由](https://v3.umijs.org/zh-CN/docs/ssr#%E9%A2%84%E6%B8%B2%E6%9F%93%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1)

## externals

- Type: `object`
- Default: `{}`

设置哪些模块可以不被打包，通过 `<script>` 或其他方式引入，通常需要和 scripts 或 headScripts 配置同时使用。

比如，

```tsx | pure
export default {
  externals: {
    react: 'window.React',
  },
  scripts: ['https://unpkg.com/react@17.0.1/umd/react.production.min.js'],
};
```

简单理解的话，可以理解为 `import react from 'react'` 会被替换为 `const react = window.React`。

## fastRefresh <Badge>3.3+</Badge>

- Type: `object`

快速刷新（Fast Refresh），开发时可以**保持组件状态**，同时编辑提供**即时反馈**。

[文档](/docs/fast-refresh)

## hash

- Type: `boolean`
- Default: `false`

配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。

启用 hash 后，产物通常是这样，

```bash
+ dist
  - logo.sw892d.png
  - umi.df723s.js
  - umi.8sd8fw.css
  - index.html
```

注：

- html 文件始终没有 hash

## headScripts

- Type: `Array`
- Default: `[]`

配置 `<head>` 里的额外脚本，数组项为字符串或对象。

大部分场景下用字符串格式就够了，比如：

```tsx | pure
export default {
  headScripts: [`alert(1);`, `https://a.com/b.js`],
};
```

会生成 HTML，

```html
<head>
  <script>
    alert(1);
  </script>
  <script src="https://a.com/b.js"></script>
</head>
```

如果要使用额外属性，可以用对象的格式，

```tsx | pure
export default {
  headScripts: [
    { src: '/foo.js', defer: true },
    { content: `alert('你好');`, charset: 'utf-8' },
  ],
};
```

会生成 HTML，

```html
<head>
  <script src="/foo.js" defer></script>
  <script charset="utf-8">
    alert('你好');
  </script>
</head>
```

## history

- Type: `object`
- Default: `{ type: 'browser' }`

配置 [history 类型和配置项](https://github.com/remix-run/history/blob/main/docs/getting-started.md)。

包含以下子配置项：

- type，可选 `browser`、`hash` 和 `memory`
- options，传给 create{{{ type }}}History 的配置项，每个类型器的配置项不同

注意，

- options 中，`getUserConfirmation` 由于是函数的格式，暂不支持配置
- options 中，`basename` 无需配置，通过 umi 的 `base` 配置指定

## links

- Type: `Array`
- Default: `[]`

配置额外的 link 标签。

## outputPath

- Type: `string`
- Default: `dist`

指定输出路径。

注意：

- 不允许设定为 `src`、`public`、`pages`、`mock`、`config` 等约定目录

## proxy

- Type: `object`
- Default: `{}`

配置代理能力。

```
export default {
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    },
  },
}
```

然后访问 `/api/users` 就能访问到 [http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users) 的数据。

> 注意：proxy 配置仅在 dev 时生效。

## publicPath

- Type: `publicPath`
- Default: `/`

配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 `publicPath` 的值，当你需要修改静态文件地址时，比如使用 CDN 部署，把 `publicPath` 的值设为 CDN 的值就可以。如果使用一些特殊的文件系统，比如混合开发或者 cordova 等技术，可以尝试将 `publicPath` 设置成 `./` 相对路径。

> 相对路径 `./` 有一些限制，例如不支持多层路由 `/foo/bar`，只支持单层路径 `/foo`

如果你的应用部署在域名的子路径上，例如 `https://www.your-app.com/foo/`，你需要设置 `publicPath` 为 `/foo/`，如果同时要兼顾开发环境正常调试，你可以这样配置：

```tsx | pure
import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/foo/' : '/',
});
```

## routes

- Type: `Array(route)`

配置路由。

umi 的路由基于 [react-router@5](https://reacttraining.com/react-router/web/guides/quick-start) 实现，配置和 react-router 基本一致，详见[路由配置](https://v3.umijs.org/zh-CN/docs/routing)章节。

比如：

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

注意：

- `component` 的值如果是相对路径，会以 `src/pages` 为基础路径开始解析
- 如果配置了 `routes`，则优先使用配置式路由，且约定式路由会不生效

## runtimePublicPath

- Type: `boolean`
- Default: `false`

配置是否启用运行时 publicPath。

通常用于一套代码在不同环境有不同的 publicPath 需要，然后 publicPath 由服务器通过 HTML 的 `window.publicPath` 全局变量输出。

启用后，打包时会额外加上这一段，

```tsx | pure
__webpack_public_path__ = window.resourceBaseUrl || window.publicPath;
```

然后 webpack 在异步加载 JS 等资源文件时会从 `window.resourceBaseUrl` 或 `window.publicPath` 里开始找。

## targets

- Type: `object`
- Default: `{ chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }`

配置需要兼容的浏览器最低版本，会自动引入 polyfill 和做语法转换。

比如要兼容 ie11，需配置：

```tsx | pure
export default {
  targets: {
    ie: 11,
  },
};
```

注意：

- 配置的 targets 会和合并到默认值，不需要重复配置
- 子项配置为 `false` 可删除默认配置的版本号

## theme

- Type: `object`
- Default: `{}`

配置主题，实际上是配 less 变量。

比如：

```tsx | pure
export default {
  theme: {
    '@primary-color': '#1DA57A',
  },
};
```
