---
order: 8
title: Build & Deploy
type: Introduction
---

## Build

When you finish the development, you can run the following command to build your application:

```bash
$ npm run build
```

[![asciicast](https://asciinema.org/a/198144.png)](https://asciinema.org/a/198144)

Since Ant Design Pro use [Umi](https://umijs.org/) as development tool, complex processes have been encapsulated and for most scenarios only one command `umi build` is required to build the package, after build successfully, it will generate the `dist` folder in the root directory, which contains packaged files, usually static files like `*.js`, `*.css`, ` index.html`.

But if you want to custom the build result, like specify the result directory, you can configure it in `config/config.js`, refer to [Umi configuration](https://umijs.org/guide/config.html) for more details.

### Analyze build result

If your build file is large, you can optimize your code with the `analyze` command to build and analyze the volume distribution of dependent modules.

```bash
$ npm run analyze
```

The command will open analyze result in your default browser automatically.

## Release

For release purposes, you only need publish the resulting static file, which is usually the static file in the `dist` folder, to your CDN or static server. It should be noted that` index.html` will be your application's entry page.

### Routing and server integration

Umi has two modes of router, `browserHistory` and `hashHistory`.

`hashHistory` uses a URL such as `https://cdn.com/#/users/123` and take the path following the `#` as the application route. `browserHistory` uses `https://cdn.com/users/123` directly. When using `hashHistory` the browser always requests `index.html` under the root directory. Using `browserHistory` requires that the server be prepared to handle URLs. It should be OK to handle the initial `/`. However, when the user jumps back and forth and refreshes `/users/123`, the server receives a `/users/123` request, then you need to configure the server to handle this URL to return the correct index.html. If you can control the server, we recommend using browserHistory.

[express](http://expressjs.com/)
```
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

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
