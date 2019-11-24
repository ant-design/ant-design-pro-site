---
order: 7
title: Same-origin policy cross-domain and agent
type: Blog
time: 2019-11-24
---

Today, at the front and rear ends, cross-domain has become the basic knowledge that every front-end engineer needs to understand, and the Nikkei topic in various interview questions. This article is intended to summarize the past and present of the same-origin strategy and how to solve it.

### Same-origin strategy

In [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy) we can see that the same-origin policy is a security mechanism. The detailed description is as follows:

> The same-origin policy limits how documents or scripts loaded from the same source interact with resources from another source. This is an important security mechanism for isolating potentially malicious files.

The starting point of this mechanism is very good, but the restrictions on homology are very strict. Any difference in url and port will cause cross-domain errors.

And you won't find any problems in the console. This is becoming more and more common as front and rear separations become more common. So how should it be solved?

![图像 1.png](https://gw.alipayobjects.com/zos/antfincdn/NIALgXw4QG/1574263212481-55d42245-f348-4f55-8508-4475f7e1f05d.png)

The same-origin policy is called "Bubble-to-Domain Strategy", which is a security mechanism built into the browser. Then we don't want to use a browser request to solve the problem perfectly. The most convenient for the front end is naturally node.js.

### Used in development

All scaffolding on the market now provides [proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) capabilities based on [http-proxy-middleware](https://github) .com/chimurai/http-proxy-middleware), this package can forward all requests that match the regular match to an address. Here is a simple demo:

```javascript
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```

This configuration can forward all requests starting with `/api` to `http://www.example.org/` with all the arguments, including headers and cookies. One thing to note is that the view in the browser console is still `http://localhost:3000/api/xxx` and the conversion steps are done in node.js.

In Pro, it is easier to configure with [proxy] in [config.ts](https://github.com/ant-design/ant-design-pro/blob/4c6a11eedad8baee97022ee452cedc76f097421a/config/config.ts#L185). Configuration may be like this:

```javascript
 proxy: {
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
```

Detailed configuration recommendations directly look at the configuration of [webpack-dev](https://webpack.js.org/configuration/dev-server/#devserverproxy).

### CORS

If you think that the above changes require more configuration, the system is simpler and you don't need to introduce new complexity. We can use [`CORS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) to allow cross-domain calls, which can be set in express:

```javascript
res.header(
  'Access-Control-Allow-Origin',
  'Your project address, using * will bring security issues',
);
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
res.header('Content-Type', 'application/json;charset=utf-8');
```

The methods are similar in other languages. The most important one is the corresponding setting of the `Access-Control-Allow-Origin` `Access-Control-Allow-Headers` `Access-Control-Allow-Methods` header.

It is highly recommended that everyone read through MDN's [HTTP Access Control](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS), and this illustrated article can resolve cross-domain percentages. Eighty doubts.

### Advanced usage

n development we may need to distinguish between multiple situations, such as the development environment, test environment, grammar environment, and the environment variables we can use in Pro to achieve this requirement.

```javascript
const serveUrlMap = {
  dev: 'https://dev.pro.ant.design/',
  pre: 'https://pre.pro.ant.design/',
  test: 'https://test.pro.ant.design/',
  idc: 'https://idc.pro.ant.design/',
};

const { SERVE_ENV = 'idc' } = process.env;

export default {
  // ....
  proxy: {
    '/server/api/': {
      target: serveUrlMap[SERVE_ENV],
      changeOrigin: true,
      pathRewrite: { '^/server': '' },
    },
  },
};
```

We can quickly switch by configuring various shortcut commands in package.json.

```json
{
  "scripts": {
    "start:dev": "cross-env SERVE_ENV=dev umi dev",
    "start:pre": "cross-env SERVE_ENV=pre umi dev",
    "start:test": "cross-env SERVE_ENV=test umi dev"
  }
}
```

> It is worth noting here that the environment of config.ts is the environment of node.js, which can not use the behavior of dom and browser.
