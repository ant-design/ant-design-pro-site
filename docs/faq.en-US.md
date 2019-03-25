---
order: 22
title: FAQ
type: Other
---

Before you ask a question, please check the following FAQ.

---

### What is the difference between Ant Design React and Ant Design Pro?

It can be understood that Ant Design React is a set of React component libraries, and Pro is a complete front-end scaffolding using this set of component libraries.

### How do I use Ant Design Pro?

Please read the document [Getting Started](/docs/getting-started), and Ant Financial users please read [Getting Started (Ants Financial User)] (/docs/getting-start-inner).

### Can I use Ant Design Pro in a production environment?

Of course you can! Ant Design Pro is based on the latest antd version. There are currently multiple middle and backend projects in use.

### How do I update Ant Design Pro?

- Upgrade the `antd` version separately for updating the base components.
- Compare the differences between different Ant Design Pro versions and manually modify the local configuration.
- You can also try merging remote branches: `git pull https://github.com/ant-design/ant-design-pro` (note that you need to resolve conflicts yourself).
- Copy the latest typical template directly on GitHub.

### How do I request a menu from the server?

Just update `this.state.menuData` in [BasicLayout](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js), which is a json array. Just the server returns a json of similar format.
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
> Note that path must be defined in routre.config.js.

### How do I modify the default webpack configuration?

See [roadhog configuration](https://github.com/sorrycc/roadhog#configuration) for details.

### How do I add babel plugins?

See details [roadhog extraBabelPlugins](https://github.com/sorrycc/roadhog#extrababelplugins).

### How do I use static resources such as pictures?

Absolute paths can be used directly (map support is required). If you want to use local files directly, you can import them as follows.

```jsx
<img src={require('../assets/picture.png')} />
```

### Why is there a `#` character in my url? How do I get rid of?

Please refer to the deploy document [Routing and server integration](/docs/deploy#Routing-and-server-integration).

### How do I proxy the server url?

Ant Design Pro has built-in umi, umi uses webpack [devServer](https://webpack.docschina.org/configuration/dev-server/) to support the proxy.
You only need to configure the proxy property in config.js.As long as the proxy and mock url are different, they can be used at the same time.
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

Enter http://localhost:8000/server/api/currentUser preview in your browser.

### How do I add scss support?

Open the `sass` configuration in `.webpackrc`, see [sass] (https://github.com/sorrycc/roadhog#sass).

### I'm getting a git commit error. How do I fix it?

<img src="https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png" width="600" />

Scaffolding defaults to the [eslint](http://eslint.org/) code style check. Please follow the prompts and resubmit it, or you can manually check `npm run lint`.

### How do I stop the browser from opening automatically on `npm start`?

Modify `scripts.start` in `package.json` to:

```js
"start": "cross-env BROWSER=none roadhog server",
```

### Does Ant Design Pro support internationalization?

This is one of the features of Ant Design Pro. The first version is currently available in Chinese. Internationalization is in our 2.0 plan and will be released soon.

### Npm installation of [puppeteer](https://github.com/GoogleChrome/puppeteer/) is failing

Try using cnpm or setting environment variables to see this [issue](https://github.com/cnpm/cnpmjs.org/issues/1246)。

### Is english documentation available?

English Documentation will be translated in next couple of monthes, trace [ant-design/ant-design-pro#54](https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479) and [ant-design-pro/issues/120](https://github.com/ant-design/ant-design-pro/issues/120) for more detail.

---

More FAQs can be found in [Trouble Shooting] (https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting). If this does not solve your problem, please [Report to us] (https://github.com/ant-design/ant-design-pro/issues).
