---
order: 32
title: 部署
group:
  title: 构建和部署
nav:
  title: 文档
  path: /docs
  order: 1
---

Pro 默认提供了 mock 数据，但是在 build 之后 mock 数据将不再起作用。如果你仍想使用这些数据来搭建演示站点，你可以通过 [umi-serve](https://www.npmjs.com/package/umi-serve) 来启动一个 express 服务。这个服务与 mock 的数据是相同的。

如果你只是简单的部署，你只需要将整个 dist 文件夹复制到你的 CDN 或静态服务器。index.html 应该是你的服务器入口。

## 前端路由与服务端的结合

> 如果你遇到 `https://cdn.com/users/123` 刷新后 404 的问题，你需要按照这个章节进行处理。

Ant Design Pro 使用的 Umi 可以使用两种路由方式：`browserHistory` 和 `hashHistory`。

可以在 `config/config.ts` 中进行配置选择用哪个方式：

```tsx | pure
export default {
  history: { type: 'hash' }, // 默认是 browser
};
```

`hashHistory` 使用如 `https://cdn.com/#/users/123` 这样的 URL，取井号后面的字符作为路径。`browserHistory` 则直接使用 `https://cdn.com/users/123` 这样的 URL。使用 `hashHistory` 时浏览器访问到的始终都是根目录下 `index.html`。使用 `browserHistory` 则需要服务器做好处理 URL 的准备，处理应用启动最初的 `/` 这样的请求应该没问题，但当用户来回跳转并在 `/users/123` 刷新时，服务器就会收到来自 `/users/123` 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 `index.html`，否则就会出现 404 找不到该页面的情况。如果没有对服务器端的控制权限，建议在配置中开启 [`exportStatic`](https://umijs.org/zh-CN/docs/deployment#%E9%9D%99%E6%80%81%E5%8C%96)，这样编译后的 `dist` 目录会对每一个路由都生成一个 `index.html`，从而每个路由都能支持 `deeplink` 直接访问。强烈推荐使用默认的 `browserHistory`。

## 部署到非根目录

部署在非根目录是一种常见的需求，比如部署在 GitHub pages 中。接下来我们假设我们要部署项目到 `${host}/admin` 中。首先我们需要在 `config/config.ts` 中配置 [base](https://umijs.org/zh/config/#base),`base` 是 react-router 的前缀。我们需要将 base 配置为 `admin`, 如果我们还需要将其部署到 `/admin` 目录中，我们还需要设置 [`publicPath`](https://umijs.org/zh/config/#publicpath)。设置完之后是这样的：

```tsx | pure
export default {
  // ... some config
  base: '/admin/',
  publicPath: '/admin/',
};
```

接下来我们就可以在 `${host}/admin` 中访问我们的静态文件了。值得注意的是，在 dev 模式下 url 路径同样也会被修改。

## 部署到不同的平台

### 使用 nginx

nginx 作为最流行的 web 容器之一，配置和使用相当简单，只要简单的配置就能拥有高性能和高可用。推荐使用 nginx 托管。示例配置如下：

```
server {
    listen 80;
    # gzip config
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";

    root /usr/share/nginx/html;

    location / {
        # 用于配合 browserHistory使用
        try_files $uri $uri/index.html /index.html;

        # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验
        # rewrite ^/(.*)$ https://preview.pro.ant.design/$1 permanent;

    }
    location /api {
        proxy_pass https://ant-design-pro.netlify.com;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   X-Real-IP         $remote_addr;
    }
}

server {
  # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验
  listen 443 ssl http2 default_server;

  # 证书的公私钥
  ssl_certificate /path/to/public.crt;
  ssl_certificate_key /path/to/private.key;

  location / {
        # 用于配合 browserHistory使用
        try_files $uri $uri/index.html /index.html;

  }
  location /api {
      proxy_pass https://ant-design-pro.netlify.com;
      proxy_set_header   X-Forwarded-Proto $scheme;
      proxy_set_header   Host              $http_host;
      proxy_set_header   X-Real-IP         $remote_addr;
  }
}
```

### 使用 spring boot

Spring Boot 是使用最多的 java 框架，只需要简单的几步就可以与 Ant Design Pro 进行整合。

首先运行 build

```
$ npm run build
```

然后将编译之后的文件复制到 spring boot 项目的 `/src/main/resources/static` 目录下。

重新启动项目，访问 `http://localhost:8080/` 就可以看到效果。

为了方便做整合，最好使用 hash 路由。如果你想使用 browserHistory ，可以创建一个 controller ，并添加如下代码：

```java
@RequestMapping("/api/**")
public ApiResult api(HttpServletRequest request, HttpServletResponse response){
    return apiProxy.proxy(request, response);
}

@RequestMapping(value="/**", method=HTTPMethod.GET)
public String index(){
    return "index"
}
```

> 注意 pro 并没有提供 java 的 api 接口实现，如果只是为了预览 demo，可以使用反向代理到 `https://preview.pro.ant.design`。

### 使用 express

[express](http://expressjs.com/) 的例子

```
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

### 使用 egg

[egg](https://eggjs.org/) 的例子

```
// controller
exports.index = function* () {
  yield this.render('App.jsx', {
    context: {
      user: this.session.user,
    },
  });
};

// router
app.get('home', '/*', 'home.index');
```

关于路由更多可以参看 [Umi 的路由文档](https://umijs.org/zh/guide/router.html) 。
