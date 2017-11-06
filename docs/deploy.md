---
order: 7
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

由于 Ant Design Pro 底层使用的 [roadhog](https://github.com/sorrycc/roadhog) 工具，已经将复杂的流程封装完毕，对于大部分场景，构建打包文件只需要一个命令 `roadhog build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `index.js`、`index.css`、`index.html` 三个静态文件。

不过你如果需要自定义构建，比如指定 `dist` 目录等，则需要通过 `.roadhogrc` 进行配置，详情参看：[roadhog 配置](https://github.com/sorrycc/roadhog#配置)。

### 环境变量

当你需要区别开发和部署以及测试环境的时候，可以通过在 `.roadhogrc` 中设置 [env](https://github.com/sorrycc/roadhog#env) 环境变量来实现。

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

如果你的构建文件很大，你可以通过 `analyze` 命令构建并分析依赖模块的体积分步，从而优化你的代码。

```bash
$ npm run analyze
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/jibuOPHTyWMpMGvrlFDl.png" width="600" />

然后打开 `dist/stats.html` 查看体积分步数据。

<img src="https://gw.alipayobjects.com/zos/rmsportal/sjzZbbsgthNtruKKHbiG.png" width="400" />

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。

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
  history: browserHistory,
});

// default hashHistroy
const app = dva();
```

接着你需要把根目录下的 `public/index.html` 文件中引用静态文件的方式改为 __相对路径__：

```diff
- <link rel="stylesheet" href="index.css" />
+ <link rel="stylesheet" href="/index.css" />

- <script src="index.js"></script>
+ <script src="/index.js"></script>
```

可以看到，这里已经使用 `react-router@4` 的方式，按照去中心化的方式设置路由配置。

关于路由更多可以参看 [React Router](https://github.com/ReactTraining/react-router) 。
关于 `react-router@4` 更多可以参看 [All About React Router 4](https://css-tricks.com/react-router-4/) 。
