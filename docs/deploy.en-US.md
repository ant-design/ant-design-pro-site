---
order: 8
title: Build & Deploy
type: Basic
---

## Build

When you finish the development, you can run the following command to build your application:

```bash
$ npm run build
```

Since Ant Design Pro use [roadhog](https://github.com/sorrycc/roadhog) as development tool, complex processes have been encapsulated and for most scenarios only one command `roadhog build` is required to build the package, after build successfully, it will generate the `dist` folder in the root directory, which contains packaged files, usually static files like` *** .js`, `***.css`, ` index.html`.

But if you want to custom the build result, like specify the result directory, you can configure it in `.webpackrc`, see more information at [roadhog configuration](https://github.com/sorrycc/roadhog#configuration).

### Environment

When you want to use different settings for deployment and test environments, you can use the  [env](https://github.com/sorrycc/roadhog#env) option to achieve it.

```
"env": {
  "development": {
    "extraBabelPlugins": [
      "dva-hmr",
    ]
  },
  "production": {
    "extraBabelPlugins": [
      "transform-runtime",
      "transform-decorators-legacy",
      ["import", { "libraryName": "antd", "style": true }]
    ]
  }
},
```

### Analyze build result

If your build file is large, you can optimize your code with the `analyze` command to build and analyze the volume distribution of dependent modules.

```bash
$ npm run analyze
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/jibuOPHTyWMpMGvrlFDl.png" width="600" />

Then open `dist/stats.html` to see the analyze result.

<img src="https://gw.alipayobjects.com/zos/rmsportal/sjzZbbsgthNtruKKHbiG.png" width="400" />

## Release

For release purposes, you only need publish the resulting static file, which is usually the static file in the `dist` folder, to your CDN or static server. It should be noted that` index.html` will be your application's entry page.

### Code splitting and dynamic imports

After version 0.3.0, we added support for code splitting and dynamic imports, only corresponding code will be loaded after matching a route, to avoid the first screen loading too much unnecessary js files to improve the scalability of large-scale frontend application.

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

> If you turn on the `hash` option, the file name will become `0.2df975b2.async.js`, changing the code will change the hash to avoid caching issues.

This approach has some requirements for deployment, you can deploy built files to your backend application's static resource directory (usually named static or public) so that the default static resource reference path points directly to the application's root directory `//your.application.domain/***.js` and `//your.application.domain/***.css`.

If your static server's domain name is different from the application's domain name (for example, a separate CDN address), you need to use `publicPath` to configure the static path of the production environment in the `.webpackrc` file. You can refer to the deployment documentation of [create-react-app](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment).

```json
{
  "publicPath": "https://cdn.com/your_app"
}
```

After version 1.0, we turned off this feature through `disableDynamicImport` option in `.webpackrc`, if you need dynamic imports, you can delete this option.

### Routing and server integration

Ant Design Pro uses [React Router](https://github.com/ReactTraining/react-router) so that you can use `browserHistory` or `hashHistory`.

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

### Using router in Ant Design Pro

Routing information locate in `router.js`, but the configuration of history is in the `index.js` file, you can configure it by passing `history` option to the constructor of [dva](https://github.com/dvajs/dva/blob/master/docs/API.md#dva-api).

Since `react-router@4` was used, the way to introduce `browserHistory` to the original `dva` has changed.

```jsx
import dva from 'dva';
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

You can refer to [React Router](https://github.com/ReactTraining/react-router) for more router information.
Refer to [All About React Router 4](https://css-tricks.com/react-router-4/) for more `react-router@4` information.
