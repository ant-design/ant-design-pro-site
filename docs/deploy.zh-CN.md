---
order: 8
title: 构建和发布
type: 入门
---

## 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用：

```bash
$ npm run build
```

[![asciicast](https://asciinema.org/a/198144.png)](https://asciinema.org/a/198144)

由于 Ant Design Pro 使用的工具 [Umi](https://umijs.org/) 已经将复杂的流程封装完毕，构建打包文件只需要一个命令 `umi build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `*.js`、`*.css`、`index.html` 等静态文件。。

如果需要自定义构建，比如指定 `dist` 目录等，可以通过 `config/config.js` 进行配置，详情参看：[Umi 配置](https://umijs.org/guide/config.html)。

### 分析构建文件体积

如果你的构建文件很大，你可以通过 `analyze` 命令构建并分析依赖模块的体积分布，从而优化你的代码。

```bash
$ npm run analyze
```

上面的命令会自动在浏览器打开显示体积分布数据的网页。

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

### 前端路由与服务端的结合

Ant Design Pro 使用的 Umi 支持两种路由方式：`browserHistory` 和 `hashHistory`。

可以在 `config/config.js` 中进行配置选择用哪个方式：

```javascript
export default {
  history: 'hash', // 默认是 browser
}
```

`hashHistory` 使用如 `https://cdn.com/#/users/123` 这样的 URL，取井号后面的字符作为路径。`browserHistory` 则直接使用 `https://cdn.com/users/123` 这样的 URL。使用 `hashHistory` 时浏览器访问到的始终都是根目录下 `index.html`。使用 `browserHistory` 则需要服务器做好处理 URL 的准备，处理应用启动最初的 `/` 这样的请求应该没问题，但当用户来回跳转并在 `/users/123` 刷新时，服务器就会收到来自 `/users/123` 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 `index.html`。如果你能控制服务端，我们推荐使用 `browserHistory`。

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
        try_files $uri $uri/ /index.html;

        # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验 
        # rewrite ^/(.*)$ https://preview.pro.ant.design/$1 permanent;

    }
    location /api {
        proxy_pass https://preview.pro.ant.design;
        proxy_set_header   X-Forwarded-Proto $scheme;
        proxy_set_header   Host              $http_host;
        proxy_set_header   X-Real-IP         $remote_addr;
    }
}
server {
  # 如果有资源，建议使用 https + http2，配合按需加载可以获得更好的体验 
  listen 443 ssl http2 default_server;

  # 证书的公私钥
  ssl_certificate /path/to/public.crt;
  ssl_certificate_key /path/to/private.key;

  location / {
        # 用于配合 browserHistory使用
        try_files $uri $uri/ /index.html;

  }
  location /api {
      proxy_pass https://preview.pro.ant.design;
      proxy_set_header   X-Forwarded-Proto $scheme;
      proxy_set_header   Host              $http_host;
      proxy_set_header   X-Real-IP         $remote_addr;
  }
}
```
### 使用 spring boot

Spring Boot 是使用最多的 java 框架，只需要简单的几步就可以与 Ant Design Pro 进行整合。

首先运行 build 

``` $ npm run build ```

然后将编译之后的文件复制到 spring boot 项目的 `/src/main/resources/static` 目录下。

重新启动项目，访问 `http://localhost:8080/` 就可以看到效果。

为了方便做整合，最好使用 hash 路由。如果你想使用 browserHistory ，你创建一个 controller ，并添加如下代码：

```java 
@RequestMapping("/api/**")
public ApiResult api(HttpServletRequest request, HttpServletResponse response){
    return apiProxy.proxy(request, reponse);
}

@RequestMapping(value="/**", method=HTTPMethod.GET)
public String index(){
    return "index"
}
```

> 注意 pro 并没有提供 java 的 api 接口实现，如果只是为了预览 demo，可以使用反向代理到 `https://preview.pro.ant.design`。

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
