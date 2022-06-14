---
order: 32
title: Deployment
group:
  title: Build & Deployment
nav:
  title: Documents
  path: /docs
  order: 1
---

Pro provides mock data by default, but mock data will no longer work after build. If you still want to use this data to build a demo site, you can launch an express service via [umi-serve](https://www.npmjs.com/package/umi-serve). This service is the same as the mock data.

## Release

For release purposes, you only need publish the resulting static file, which is usually the static file in the `dist` folder, to your CDN or static server. It should be noted that`index.html` will be your application's entry page.

## Routing and server integration

Umi has two modes of router, `browserHistory` and `hashHistory`.

Config it at `config/config.ts` file.

```tsx | pure
export default {
  history: { type: 'hash' }, // default type is browser
};
```

`hashHistory` uses a URL such as `https://cdn.com/#/users/123` and take the path following the `#` as the application route. `browserHistory` uses `https://cdn.com/users/123` directly. When using `hashHistory` the browser always requests `index.html` under the root directory. Using `browserHistory` requires that the server be prepared to handle URLs. It should be OK to handle the initial `/`. However, when the user jumps back and forth and refreshes `/users/123`, the server receives a `/users/123` request, then you need to configure the server to handle this URL to return the correct index.html. If you can control the server, we recommend using `browserHistory`. If you can NOT control the server, and you still want to use `browserHistory`, then you can enable `exportStatic`(https://umijs.org/docs/deployment#static) so that `npm run build` will put the `index.html` under each router folder automatically.

## Deploy to a non-root directory

A common requirement when deploying non-directed directories, such as being deployed in gitHub pages. Next we assume that we are deploying the project to `${host}/admin`.

First we need to configure [base](https://umijs.org/zh/config/#base) in `config/config.ts`, which is the prefix of react-router. We need to configure base as `admin`, if we still need to deploy it to the `/admin` directory, we also need to set `publicPath`. After setting it is like this:

```tsx | pure
export default {
  // ... some config
  base: '/admin/',
  publicPath: '/admin/',
};
```

Next we can access our static files in `${host}/admin`. The url path will also be modified in dev mode.

## Deploy to different platforms

### use nginx

As one of the most popular web containers, nginx is easy to configure and use, with high performance and high availability with a easy configuration. It is recommended to use nginx hosting. The sample configuration is as follows:

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

  # 证书的公私钥
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

### use Spring Boot

Spring Boot is the most used java framework, and it can be integrated with Ant Design Pro in just a few easy steps.

first run build script

```
 $ npm run build
```

Then copy the compiled file to the `/src/main/resources/static` directory of the Spring Boot project.

restart project, You can see the effect by visiting `http://localhost:8080/` 。

For ease of integration, it is best to use hash routing. If you want to use browserHistory, you create a controller and add the following code:

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

> Note that Ant Design Pro does not provide a java api interface implementation, if you just want to preview the demo, you can use a reverse proxy to `https://preview.pro.ant.design`.

### use express

[express](http://expressjs.com/)

```
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

### use egg

[egg](https://eggjs.org/)

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

You can refer to [Umi Router](https://umijs.org/guide/router.html) for more router information.
