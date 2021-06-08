---
order: 6
title: 我们是如何部署开源项目的?
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2019-11-02
---

![cdn-hosting](https://user-images.githubusercontent.com/8186664/68047427-585cd780-fd19-11e9-9439-0fe05aa93475.png)

要想成为一个好的开源项目，一个官网必不可少，Pro 也不例外。 Pro 还有一个预览界面，其中带有 API 的访问，需要支持一定的动态能力。

### 技术选型

静态网站部署起来相对成熟且容易，市面上很多种方案来实现。比较常用的有：

- [Netlify](https://docs.netlify.com/)  支持静态站点 与 function，用户体验很棒。
- [Github pages](https://pages.github.com/) 完全免费，但是只支持静态。
- [Google firebase](https://firebase.google.cn/)  功能强大，cdn 节点多。
- [cloudflare ](https://www.cloudflare.com/)全球 cdn 功能强大，但是只支持静态。

面向国内用户的话 firebase 是不能够使用，所以最好的方案是  netlify，免费额度不少，并且拥有很多方便的功能，比如 PR 的 preview。现在 Ant Design 和 Pro 的 PR 预览全部是使用的  netlify，并且 支持 master 更新自动部署，统计， function 等一系列功能。但是  netlify 在国内并没有节点，访问速度延时在 3000ms 以上，如果你的网站在 2m 以上访问速度会很慢。

Github Pages 虽然是 Github 的官方方案，但是只支持纯静态页面，不支持任何动态能力。而且访问速度也不够理想。cloudflare 的 cdn 这时候就可以来解决这个问题，cloudflare 在全球拥有的部署节点，可以保证在全球的访问速度在 1000ms 以内。

### Preview 的部署

官网是一个静态网页，使用 github + cloudflare 可以完美解决问题。但是 Pro 的预览是有 api 的，需要部署一个后台服务，而且作为脚手架，其中的一些代码的不能开放给用户使用。API 方面我们选择了 netlify，netlify function 基于的 AWS 的 function，稳定性与易用性都还不错。静态网站可以配合  cloudflare  加速来保证速度。

在 `fetch:blocks`  时，我们来会将 `SettingDrawer`  和拷贝区块的按钮加到项目中去，`SettingDrawer`  并不推荐在生产环境中使用，他是为了在预览界面中展示能力才加入的。

> cloudflare 不支持三级域名，如果需要像我们一样为其加速，可以考虑氪金。

### 内置变量

在 Pro 的项目中我们增加了一个环境变量   `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION`  判断是否是 preview 的环境，如果  `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION`  我们会注入 Google Analytics 和  umi-plugin-pro 插件，umi-plugin-pro 的插件会加入讲 Pro 的 Api 请求转化为 `https://ant-design-pro.netlify.com/api/xxx` 。并且会将默认的用户权限设置为 admin，让预览用户可以访问任何页面。

不推荐在实际项目中打开  `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION`  和使用 `fetch:blocks`  。

- `SettingDrawer`  并不适合在生产中使用，使用方案有点问题。
- `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION`  打开会造成权限问题，并且会将你的项目上报到我们的 Google  Analytics 中。`ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION`  中这个字段又长又罗嗦就是为了不让用户使用。
