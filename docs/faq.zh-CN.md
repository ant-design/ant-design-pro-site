---
order: 22
title: 常见问题
type: 其他
---

提问之前，请先查阅下面的常见问题。

---

### Ant Design React 和 Ant Design Pro 有什么区别？

可以理解为 Ant Design React 是一套 React 组件库，而 Pro 是使用了这套组件库的完整前端脚手架。

### 如何使用 Ant Design Pro？

请阅读文档 [开始使用](/docs/getting-started)，蚂蚁金服内网用户请阅读 [开始使用（蚂蚁金服用户）](/docs/getting-start-inner)。

### 是否可以在生产环境中使用 Ant Design Pro？

当然可以！Ant Design Pro 基于最新的 antd 版本开发，目前已有多个中后台项目正在使用。

### 如何更新 Ant Design Pro？

- 单独升级 `antd` 版本，用于更新基础组件。
- 比较不同的 Ant Design Pro 版本间的差异，手动修改本地配置。
- 也可以尝试合并远程分支：`git pull https://github.com/ant-design/ant-design-pro`（注意，需要自行解决冲突）。
- 直接在 GitHub 上拷贝最新的典型模板。

### 如何从服务器请求菜单？

只需在 [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js) 中更新 `this.state.menuData`, menuData 是一个 json 数组。只需服务器返回类似格式的json 即可。
```js
 [
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      children: [
        {
          path: '/dashboard/analysis',
          name: 'analysis',
          exact: true,
        },
        {
          path: '/dashboard/monitor',
          name: 'monitor',
          exact: true,
        },
        {
          path: '/dashboard/workplace',
          name: 'workplace',
          exact: true,
        },
      ],
    }
    ....
  ]
```
> 注意 path 必须要在 routre.config.js 中定义。

### 如何修改默认 webpack 配置？

详见 [umi配置](https://umijs.org/zh/config/)。

### 如何添加 babel 插件？

详见 [umi-babel](https://umijs.org/zh/api/#umi-babel)。

### 如何使用图片等静态资源？

可以直接使用绝对路径（需要图床支持），若需直接使用本地文件，可按以下方式引入。

```jsx
<img src={require('../assets/picture.png')} />
```

### 我的 url 里怎么有 `#` 号？要如何去掉？

请参考文档 [前端路由与服务端的结合](/docs/deploy#前端路由与服务端的结合)。

### 如何代理到后端服务器？

Ant Design Pro 内置了 umi，umi 使用了 webpack [devServer](https://webpack.docschina.org/configuration/dev-server/)来支持代理。
你只需要在 config.js 中配置 proxy 属性。只要 proxy 和 mock  url 不同，是可以共存的。
```js
{
  ...
  proxy:{
    '/server/api/': {
      target: 'https://preview.pro.ant.design/',
      changeOrigin: true,
      pathRewrite: { '^/server': '' }, // /server/api/currentUser -> /api/currentUser
    },
  },
  ...
}
```

在浏览器中输入 http://localhost:8000/server/api/currentUser 预览。

### 如何添加 scss 支持？

先安装额外的依赖，

```bash
$ npm i node-sass sass-loader --save
```

然后修改 `.umirc.js`或者`config/config.js`:

```json
{
 "sass": {}
}
```
详见 [sass](https://umijs.org/zh/guide/faq.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-sass-%EF%BC%9F)。

### Git commit 时报错？

<img src="https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png" width="600" />

脚手架默认开启了 [eslint](http://eslint.org/) 代码风格检查，请按照提示内容进行修改后重新提交，也可以手动 `npm run lint` 进行检查。

### 站点是否支持国际化？

pro 通过 umi 插件 [umi-plugin-locale](https://github.com/umijs/umi-plugin-locale) 来实现全球化的功能,详情请见 [国际化](/docs/i18n)。

### npm 安装 puppeteer 失败

尝试使用 cnpm 或者设置环境变量，可以查看这个 [issue](https://github.com/cnpm/cnpmjs.org/issues/1246)。

### English Documentation？

English Documentation will be translated in next couple of monthes, trace [ant-design/ant-design-pro#54](https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479) 
和 [ant-design-pro/issues/120](https://github.com/ant-design/ant-design-pro/issues/120) 了解更多细节。

---

更多常见问题可以查看 [Trouble Shooting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting) 和 [umi](https://github.com/umijs/umi)。如果这里未能解决你的问题，欢迎 [报告给我们](https://github.com/ant-design/ant-design-pro/issues)。
