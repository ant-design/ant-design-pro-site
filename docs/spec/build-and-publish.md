---
order: 12
title: 构建和发布
---

---

## 构建

由于 Ant Design Pro 底层使用的 [roadhog](https://github.com/sorrycc/roadhog) 工具，已经将复杂的流程封装完毕，对于大部分场景，构建打包文件只需要一个命令 `roadhog build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `index.js`、`index.css`、`index.html` 三个静态文件。

不过你如果需要自定义构建，比如指定 `dist` 目录等，则需要通过 `.roadhogrc` 进行配置，详情参看：[roadhog 配置](https://github.com/sorrycc/roadhog#配置)。

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

### 前端路由与服务端的结合

Ant Design Pro 中，前端路由使用的是 [React Router](https://github.com/ReactTraining/react-router)，所以你可以选择两种方式：`browserHistory` 和 `hashHistory`。

如果你使用的是静态站点，那么使用 `browserHistory` 可能会无法访问你的应用，因为假设你访问 `http://localhost:8000/dashboard/monitor`，那么其实你的静态服务器并没有能够映射的文件，而使用 `hashHistory` 则不会有这个问题，因为它的页面路径是以 `#` 开始的，所有访问都在前端完成，如：`http://localhost:8000/#/dashboard/monitor`。

不过如果你有对应的后台服务器，那么我们推荐采用 `browserHistory`，只需要在服务端做一个映射，比如：

[express](http://expressjs.com/) 的例子
```
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
```

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

更多可以参看 [React Router](https://github.com/ReactTraining/react-router) 。

