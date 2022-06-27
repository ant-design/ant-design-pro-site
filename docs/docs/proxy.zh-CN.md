---
order: 32
title: 代理
group:
  title: 后端集成
nav:
  title: 文档
  path: /docs
  order: 1
---

在前后端分离的今天，跨域也成了每个前端工程师都需要了解的基本知识，在各种面试题中的日经话题。这个文章就是想总结一下关于同源策略的前世今生，以及怎么解决它。

### 同源策略

在 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)中我们可以看到关于同源策略是一个安全机制。详细的说明如下：

> 同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。

这个机制本身出发点是很好的，但是同源的限制非常严格，url，端口任一不同都会造成跨域错误。

而且在控制台中你不会发现任何问题。随着前后端分离越来越普遍，这件事就越来越常见。那么它应该如何解决呢?

![图像 1.png](https://gw.alipayobjects.com/zos/antfincdn/NIALgXw4QG/1574263212481-55d42245-f348-4f55-8508-4475f7e1f05d.png)

同源策略全称叫《浏览器的同源策略》，它是浏览器内建的一种安全机制。那么我们不要使用浏览器请求就能完美解决问题了。对于前端来说最方便的自然就是 node.js 了。

### 在开发中使用

现在市面上所有的脚手架都提供了 [proxy](https://webpack.js.org/configuration/dev-server/#devserverproxy) 的能力，底层基于 [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware), 这个包可以把所有符合正则匹配的请求转发到某个地址，下面是个简单的 demo：

```tsx | pure
var express = require('express');
var proxy = require('http-proxy-middleware');

var app = express();

app.use('/api', proxy({ target: 'http://www.example.org', changeOrigin: true }));
app.listen(3000);

// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar
```

这个配置可以将所有 `/api` 开头的请求转发到 `http://www.example.org/` ,并且附带所有的参数，包括头信息和 cookie。有一点需要注意的是，在浏览器控制台里看到的仍然是 `http://localhost:3000/api/xxx` ,转化的步骤是在 node.js 中完成。

在 Pro 中是用 proxy 更加简单在 [config.ts](https://github.com/ant-design/ant-design-pro/blob/4c6a11eedad8baee97022ee452cedc76f097421a/config/config.ts#L185)  中配置即可，配置出来可能是这样的：

```tsx | pure
proxy: {
  '/server/api/': {
    target: 'https://preview.pro.ant.design/',
    changeOrigin: true,
    pathRewrite: { '^/server': '' },
  },
},
```

详细的配置建议直接查看 [webpack-dev](https://webpack.js.org/configuration/dev-server/#devserverproxy)  的配置。

### CORS

如果觉得以上改动需要配置比较麻烦，系统又比较简单，无需引入新的复杂度。我们可以使用 [`CORS`](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) 的方式来允许跨域调用，在 express 中可以这么设置：

#### express 中的配置

```tsx | pure
res.header('Access-Control-Allow-Origin', '你的项目地址，用*将会带来安全问题');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
res.header('Content-Type', 'application/json;charset=utf-8');
```

#### nginx 中的配置

```nginx
location ^~ /api {
  proxy_set_header Origin '';
  add_header Access-Control-Allow-Credentials true;
  add_header Access-Control-Allow-Headers $http_access_control_request_headers;
  add_header Access-Control-Allow-Methods POST,GET,OPTIONS,DELETE,PUT,HEAD,PATCH;
  add_header Access-Control-Allow-Origin $http_origin;
  add_header Access-Control-Expose-Headers $http_access_control_request_headers;

  if ($request_method = 'OPTIONS') {
    return 204;
  }
  if ($request_method != 'OPTIONS'){
    proxy_pass "你的项目地址";
  }
}
```

> 需要注意的是，目前 nginx 1.7.5 之前的版本，add_header 只对 2xx，3xx 的请求生效，5xx 的请求无法增加 header，仍会被浏览器跨域策略拦截，在 5xx 请求的 body 中包含的错误信息，前端无法获取到。

#### java 手动配置

```java
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HttpErrorResponseUtil {
    public static void setResponeCorsHeader(HttpServletRequest request, HttpServletResponse response) {
      response.addHeader("Access-Control-Allow-Credentials", "true");
      response.addHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS,DELETE,PUT,HEAD,PATCH");
      response.addHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
      response.addHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));
    }
}
```

在别的语言中方法也大同小异，最重要的是 `Access-Control-Allow-Origin`  `Access-Control-Allow-Headers` `Access-Control-Allow-Methods`  头的相应设置。

在这里强烈建议每个人通读一下 MDN 的  [HTTP 访问控制](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) ，这篇图文并茂的文章可以解决跨域百分之八十的疑惑。

### 高级用法

在开发中我们可能需要区分多种情况，比如开发环境，测试环境，语法环境，在 Pro 中我们可以通过的环境变量来实现这个需求。

```tsx | pure
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

我们只要在 package.json 中配置好各种快捷命令，就可以做到快速切换。

```tsx | pure
{
"scripts": {
  "start:dev": "cross-env SERVE_ENV=dev umi dev",
  "start:pre": "cross-env SERVE_ENV=pre umi dev",
  "start:test": "cross-env SERVE_ENV=test umi dev"
}
}
```

> 这里值得注意的是 config.ts 的环境为 node.js 的环境，里面是无法使用 dom 和浏览器的相关行为的。
