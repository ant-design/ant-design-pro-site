---
order: 91
title: FAQ
group:
  title: Other
nav:
  title: Documents
  path: /docs
  order: 1
---

Before you ask a question, please check the following FAQ.

Ant Design Pro is developed upon [Umi](https://umijs.org/), please seach in Umi [FAQ](https://github.com/umijs/umi/issues/1421) first.

### What is the difference between Ant Design React and Ant Design Pro?

It can be understood that Ant Design React is a set of React component libraries, and Pro is a complete front-end scaffolding using this set of component libraries.

### How do I use Ant Design Pro?

Please read the document [Getting Started](/docs/getting-started), and Ant Financial users please read [Getting Started (Ants Financial User)](/docs/getting-start-inner).

### Can I use Ant Design Pro in a production environment?

Of course you can! Ant Design Pro is based on the latest antd version. There are currently multiple middle and backend projects in use.

### How do I update Ant Design Pro?

- Upgrade the `antd` version separately for updating the base components.
- Compare the differences between different Ant Design Pro versions and manually modify the local configuration.
- You can also try merging remote branches: `git pull https://github.com/ant-design/ant-design-pro` (note that you need to resolve conflicts yourself).
- Copy the latest typical template directly on GitHub.

### How do I request a menu from the server?

Just update `menuData` in [models/menu](https://github.com/ant-design/ant-design-pro/blob/master/src/models/menu.js#L111), which is a json array. Just the server returns a json of similar format.

You need to update `menuDataRender` prop in [src/layouts/BasicLayout.tsx](https://github.com/ant-design/ant-design-pro/blob/4420ae2c224144c4114e5384bddc3e8ab0e1dc1c/src/layouts/BasicLayout.tsx#L116) as below, fetch menuData from your service.

```tsx | pure
const [menuData, setMenuData] = useState([]);

useEffect(() => {
// just for sample
// please use dva dispatch or umi-request in real world
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

The above menuData definite is [MenuDataItem](https://github.com/ant-design/ant-design-pro-layout/blob/56590a06434c3d0e77dbddcd2bc60827c9866706/src/typings.ts#L18).

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

> Note that path must be defined in config.ts. (All you need in Conventional Routing is the correct page.)

### How to use Conventional Routing?

Sometimes you may not want to use `config/config.ts`. Then you can consider umi's [Conventional Routing](https://umijs.org/docs/convention-routing).

Specific how to use convention routing in pro, you can see this [commit](https://github.com/ant-design/ant-design-pro/commit/a22d400328a7a391ed5e5a5f2bba1a5fecf9fad7).

> Note: Conventional routing is easier to control menus and privileges, but requires that all menus must declare privileges, otherwise they can be accessed through direct access to urls.

> Conventional permission declarations are interesting. You can declare that all pages except one page need admin access to filter all urls.

### How to use mock data after build？

You can use [umi-serve](https://www.npmjs.com/package/umi-serve),Install umi-serve in the project or globally.

```sh
$ yarn global add umi-serve
or
$ yarn add umi-serve -D
```

Run umi-serve in the project root directory

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

Modify the request address in the project,such as `http://localhost:8001/api/users`

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

> Note: If there is no global installation, but only in the project, add the umi-server command to the script of package.json.

> Note: Proxy is not valid after build. Do not configure request `http://localhost:8001/api/users` in proxy,when http requests, access the address directly.For example, add a request prefix uniformly in `src/utils/request.ts`.

### How to close page permission control

Configurable routing,remove `Routes: ['src/pages/Authorized']` configurations in `config/config.ts`.

```diff
{
    path: '/',
    component: '../layouts/BasicLayout',
-   Routes: ['src/pages/Authorized'],
    routes: []
    ...
}
```

Details can be seen [PR3842](https://github.com/ant-design/ant-design-pro/pull/3842).

Conventional routing, turn off the routing permission plugin.

### How do I modify the default webpack configuration?

See [roadhog configuration](https://github.com/sorrycc/roadhog#configuration) for details.

### How do I add babel plugins?

See details [roadhog extraBabelPlugins](https://github.com/sorrycc/roadhog#extrababelplugins).

### How do I use static resources such as pictures?

Absolute paths can be used directly (map support is required). If you want to use local files directly, you can import them as follows.

```tsx | pure
<img src={require('../assets/picture.png')} />
```

### Why is there a `#` character in my url? How do I get rid of?

Please refer to the deploy document [Routing and server integration](/docs/deploy#routing-and-server-integration).

### How do I proxy the server url?

Ant Design Pro has built-in umi, umi uses webpack [devServer](https://webpack.docschina.org/configuration/dev-server/) to support the proxy. You only need to configure the proxy property in config.js.As long as the proxy and mock url are different, they can be used at the same time.

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

Enter http://localhost:8000/server/api/currentUser preview in your browser.

### How do I add scss support?

Open the `sass` configuration in `.webpackrc`, see [sass](https://github.com/sorrycc/roadhog#sass).

### I'm getting a git commit error. How do I fix it?

<img src="https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png" width="600" />

Scaffolding defaults to the [eslint](http://eslint.org/) code style check. Please follow the prompts and resubmit it, or you can manually check `npm run lint`.

### How do I stop the browser from opening automatically on `npm start`?

Modify `scripts.start` in `package.json` to:

```tsx | pure
"start": "cross-env BROWSER=none roadhog server",
```

### Does Ant Design Pro support internationalization?

This is one of the features of Ant Design Pro. The first version is currently available in Chinese. Internationalization is in our 2.0 plan and will be released soon.

### Npm installation of [puppeteer](https://github.com/GoogleChrome/puppeteer/) is failing

Try using tyarn or setting environment variables to see this [issue](https://github.com/cnpm/cnpmjs.org/issues/1246).

### Is english documentation available?

English Documentation will be translated in next couple of monthes, trace [ant-design/ant-design-pro#54](https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479) and [ant-design-pro/issues/120](https://github.com/ant-design/ant-design-pro/issues/120) for more detail.

### After Ant Design Pro upgrades from 1.X to 2.X and after version, page layout components (such as BasicLayout) are reloaded when the page is redirected (redirect)

Add `disableRedirectHoist: true` in config.ts configuration:

```diff
export default {
    ...
+   disableRedirectHoist: true,
    ...
}
```

这是使用 umijs 框架引入的问题。配置的具体说明参考 umijs 的[官方文档](https://umijs.org/zh/config/#disableredirecthoist)说明

---

More FAQs can be found in [Trouble Shooting](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting). If this does not solve your problem, please [Report to us](https://github.com/ant-design/ant-design-pro/issues).

### Some component languages cannot be switched when switching languages

Pro uses context to manage the dynamic switching of the language, which can achieve the effect of no refresh switching language, but some components are better optimized, the context modification does not re-render the component, or the component context like Portal does not exist, so it can't Switch. We can configure the way to reload the page for full re-rendering.

```tsx | pure
Import { setLocale } from 'umi-plugin-react/locale';

// Set the second parameter to true to force a refresh
setLocale(key, false);
```
