---
order: 8
title:
  en-US: Build & Deploy
  zh-CN: 构建和发布
type: 入门
---

## 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用：

```bash
$ npm run build
```

由于 Ant Design Pro 底层使用的 [roadhog](https://github.com/sorrycc/roadhog) 工具，已经将复杂的流程封装完毕，对于大部分场景，构建打包文件只需要一个命令 `roadhog build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js`、`***.css`、`index.html` 等静态文件。

不过你如果需要自定义构建，比如指定 `dist` 目录等，则需要通过 `.webpackrc` 进行配置，详情参看：[roadhog 配置](https://github.com/sorrycc/roadhog#配置)。

### 环境变量

当你需要区别开发和部署以及测试环境的时候，可以通过在 `.webpackrc` 中设置 [env](https://github.com/sorrycc/roadhog#env) 环境变量来实现。

```
"env": {
  // server 环境
  "development": {
    "extraBabelPlugins": [
      "dva-hmr",
    ]
  },
  // build 环境
  "production": {
    "extraBabelPlugins": [
      "transform-runtime",
      "transform-decorators-legacy",
      ["import", { "libraryName": "antd", "style": true }]
    ]
  }
},
```

### 分析构建文件体积

如果你的构建文件很大，你可以通过 `analyze` 命令构建并分析依赖模块的体积分布，从而优化你的代码。

```bash
$ npm run analyze
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/jibuOPHTyWMpMGvrlFDl.png" width="600" />

然后打开 `dist/stats.html` 查看体积分布数据。

<img src="https://gw.alipayobjects.com/zos/rmsportal/sjzZbbsgthNtruKKHbiG.png" width="400" />

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

### 代码分割和动态加载

0.3.0 版本之后，我们支持了代码分割和动态加载，只有进入对应路由后才会加载相应的代码，避免首屏加载过多不必要的 JS 文件，提高大规模前端应用研发的扩展性。

```
├── 0.async.js
├── 1.async.js
├── 10.async.js
├── 11.async.js
├── 12.async.js
├── 13.async.js
├── 14.async.js

...
```

> 如果开启了 `hash`，会变成 `0.2df975b2.async.js` 的形式，修改代码后 hash 会变化，可以避免前端缓存问题。

这种方式对于部署有一定的要求，你可以将 dist 整体部署到你的后端应用的静态资源目录下（通常为 static 或者 public），这样默认的静态资源引用路径直接指向应用的根目录 `//your.application.domain/***.js` 和 `//your.application.domain/***.css`。

如果你的静态资源域名和应用域名不同（例如独立的 cdn 地址），你需要使用在 `.webpackrc` 文件里用 [publicPath](https://github.com/sorrycc/roadhog#publicpath) 对生产环境的静态路径进行配置。可以参考 [create-react-app 的部署文档](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

```json
{
  "publicPath": "https://cdn.com/your_app"
}
```

如果你不需要代码分割和动态加载功能， Ant Design Pro 1.0 版本后我们 `.webpackrc` 里使用了 `"disableDynamicImport": true` **默认关掉了动态加载**（roadhog@2.x 支持），回退为单文件 index.js 和 index.css 的构建方式。如果需要动态加载删掉这个配置即可。

### 前端路由与服务端的结合

Ant Design Pro 中，前端路由使用的是 [React Router](https://github.com/ReactTraining/react-router)，所以你可以选择两种方式：`browserHistory` 和 `hashHistory`。

两者的区别简单来说是对路由方式的处理不一样，`hashHistory` 是以 `#` 后面的路径进行处理，通过 [HTML 5 History](https://developer.mozilla.org/en-US/docs/Web/API/History_API) 进行前端路由管理，而 `browserHistory` 则是类似我们通常的页面访问路径，并没有 `#`，通过服务端的配置，能够访问指定的 url 都定向到当前页面，从而能够进行前端的路由管理。

所以如果你的 url 里有 `#`，想去掉的话，需要切换为 `browserHistory`。

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

### 在 Ant Design Pro 中使用前端路由

路由包含的信息在 `router.js` 中，不过关于 `history` 的配置是在 `index.js` 入口文件中，传入配置信息给 [dva](https://github.com/dvajs/dva/blob/master/docs/API_zh-CN.md#dva-api) 构造器即可。

由于使用了 `react-router@4`，所以引入 `browserHistory` 与原本 `dva` 的方式有所改变。

```jsx
import dva from 'dva';
// 引入 browserHistory
import browserHistory from 'history/createBrowserHistory'
import models from './models';

import './index.less';

// use browserHistory
const app = dva({
  history: browserHistory(),
});

// default hashHistroy
const app = dva();
```

关于路由更多可以参看 [React Router](https://github.com/ReactTraining/react-router) 。
关于 `react-router@4` 更多可以参看 [All About React Router 4](https://css-tricks.com/react-router-4/) 。
