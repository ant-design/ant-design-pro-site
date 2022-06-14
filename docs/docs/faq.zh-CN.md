---
order: 91
title: 常见问题
group:
  title: 其它
nav:
  title: 文档
  path: /docs
  order: 1
---

提问之前，请先查阅下面的常见问题。

Ant Design Pro 使用 [Umi](https://umijs.org/zh-CN) 作为开发工具，建议你先查看 Umi 的[常见问题](https://umijs.org/zh-CN/docs/faq)。

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

你可以在 [src/layouts/BasicLayout.tsx](https://github.com/ant-design/ant-design-pro/blob/4420ae2c224144c4114e5384bddc3e8ab0e1dc1c/src/layouts/BasicLayout.tsx#L116) 中修改 `menuDataRender`，并在代码中发起 http 请求，只需服务器返回下面格式的 json 即可。

```tsx | pure
const [menuData, setMenuData] = useState([]);

useEffect(() => {
// 这里是一个演示用法
// 真实项目中建议使用 dva dispatch 或者 umi-request
fetch('/api/example.json')
  .then(response => response.json())
  .then(data => {
    setMenuData(data || []);
  });
}, []);

...

return (
<ProLayout
  ...
  menuDataRender={() => menuData}
  ...
/>
);
```

`menuData` 数据格式如下，ts 定义在此：[MenuDataItem](https://github.com/ant-design/ant-design-pro-layout/blob/56590a06434c3d0e77dbddcd2bc60827c9866706/src/typings.ts#L18).

```tsx | pure
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

> 注意 path 必须要在 config.ts 中定义。（约定式路由不需要，只需页面真实有效即可）。

### 如何使用 Umi 约定式路由

有时候你可能不想要使用 config/config.ts 的配置。那你可以考虑 umi 的[约定式路由](https://umijs.org/zh-CN/docs/convention-routing)。

具体的如何在 pro 中使用约定式路由，可以查看这次[提交](https://github.com/ant-design/ant-design-pro/commit/a22d400328a7a391ed5e5a5f2bba1a5fecf9fad7)。

> 注意：约定式路由比较容易实现菜单和权限的控制，但是要求所有的菜单都必须声明权限，不然均可以通过直接访问 url 的方式访问。

> 约定式权限的声明很有趣，你可以声明如：除某某页面之外的其他页面均需要 admin 访问权限，即可过滤所有的 url。

### build 之后如何使用 mock 数据？

可以使用 [umi-serve](https://www.npmjs.com/package/umi-serve) ，在项目中或者全局安装 umi-serve。

```sh
$ yarn global add umi-serve
```

在项目根目录中运行 umi-serve

```sh
$ umi-serve

   ┌────────────────────────────────────────────────────┐
   │                                                    │
   │   Serving your umi project!                        │
   │                                                    │
   │   - Local:            http://localhost:8001        │
   │   - On Your Network:  http://134.160.170.40:8001   │
   │                                                    │
   │   Copied local address to clipboard!               │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

修改项目中的请求地址，如 `http://localhost:8001/api/users`。

```tsx | pure
[
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];
```

> 注意：如果没有全局安装，而只是在项目中安装，要把 umi-serve 命令添加到 package.json 的 script 里面。注意：build 之后 proxy 无效，不要在 proxy 中配置请求`http://localhost:8001/api/users`，而是要在 http 请求的时候，直接访问该地址。如在 [`src/utils/request.ts`](https://github.com/ant-design/ant-design-pro/blob/80ce8fe43746426abc054c1cf76b8f733f54b001/src/utils/request.ts) 中统一添加请求前缀。

### 如何关闭页面权限控制

配置式路由，删除 `config/config.ts` 中的 `Routes: ['src/pages/Authorized']` 配置。

```diff
{
    path: '/',
    component: '../layouts/BasicLayout',
-   Routes: ['src/pages/Authorized'],
    routes: []
    ...
}
```

详情可见[PR3842](https://github.com/ant-design/ant-design-pro/pull/3842)。

约定式路由，关掉路由权限插件。

### 如何修改默认 webpack 配置？

详见 [umi 配置](https://umijs.org/zh/config/)。

### 如何添加 babel 插件？

详见 [umi-babel](https://umijs.org/zh/api/#umi-babel)。

### 如何使用图片等静态资源？

可以直接使用绝对路径（需要图床支持），若需直接使用本地文件，可按以下方式引入。

```tsx | pure
<img src={require('../assets/picture.png')} />
```

### 我的 url 里怎么有 `#` 号？要如何去掉？

请参考文档 [前端路由与服务端的结合](/zh-CN/docs/deploy#前端路由与服务端的结合)。

### 如何代理到后端服务器？

Ant Design Pro 内置了 umi，umi 使用了 [webpack-dev-server](https://webpack.docschina.org/configuration/dev-server/) 来代理网络请求。你可以在 `config.js` 中配置 `proxy` 属性。`proxy` 和 `mock` 如果路径相同会优先使用 mock，如果不想使用 mock 可以用 `MOCK=none umi dev` 的方式关闭。

```tsx | pure
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

在浏览器中输入 http://localhost:8000/server/api/currentUser 预览。注意，配置了 proxy 之后，本地浏览器内的请求路径不会变（依然是 localhost），但是发送的请求会被反向代理的你配置的 `target` 后端服务上。

### 如何添加 sass 支持？

先安装额外的依赖，

```bash
$ npm i node-sass sass-loader --save
```

然后修改 `.umirc.js`或者`config/config.ts`:

```tsx | pure
{
"sass": {}
}
```

详见 [sass](https://umijs.org/zh/guide/faq.html#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-sass-%EF%BC%9F)。

### Git commit 时报错？

<img src="https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png" width="600" />

脚手架默认开启了 [eslint](http://eslint.org/) 代码风格检查，请按照提示内容进行修改后重新提交，也可以手动 `npm run lint` 进行检查。

### 站点是否支持国际化？

pro 通过 umi 插件 [@umijs/plugin-locale](https://github.com/umijs/@umijs/plugin-locale) 来实现全球化的功能，详情请见 [国际化](/zh-CN/docs/i18n/)。

### npm 安装 puppeteer 失败

尝试使用 tyarn 或者设置环境变量，可以查看这个 [issue](https://github.com/cnpm/cnpmjs.org/issues/1246)。

### English Documentation？

English Documentation will be translated in next couple of monthes， trace [ant-design/ant-design-pro#54](https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479) and [ant-design-pro/issues/120](https://github.com/ant-design/ant-design-pro/issues/120) for more details。

### Ant Design Pro 从 1.X 升级到 2.X 以及之后版本，页面进行重定向（redirect）时，页面布局组件（如 BasicLayout）会重新加载

在 config.ts 中添加 `disableRedirectHoist: true` 配置：

```diff
export default {
    ...
+   disableRedirectHoist: true,
    ...
}
```

这个是使用的 umijs 框架引起的问题，更多细节请参考 umijs 的[官方文档](https://v2.umijs.org/zh/config/#disableredirecthoist)。

---

更多常见问题可以查看 [Trouble Shooting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting) 和 [umi](https://github.com/umijs/umi)。如果这里未能解决你的问题，欢迎 [报告给我们](https://github.com/ant-design/ant-design-pro/issues)。

### 切换语言时某些组件语言无法切换

Pro 中使用了 context 来管理语言的动态切换，可以做到无刷新切换语言的效果，但是某些组件优化的比较好，context 修改不会重新渲染组件，或者像 Portal 这样组件上下文不存在， 所以无法切换。我们可以通过配置的方式来让页面重新加载来实现完全重新渲染。

```tsx | pure
import { setLocale } from 'umi-plugin-react/locale';

// 设置第二个参数为 true 即可强制刷新
setLocale(key, false);
```
