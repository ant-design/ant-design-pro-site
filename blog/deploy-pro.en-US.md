---
order: 6
title: How do we deploy open source projects?
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

To be a good open source project, an official website is essential, and Pro is no exception. Pro also has a preview interface with API access that requires a function with function.

### Technical selection

Static websites are easy to deploy, and there are many options available on the market. More commonly used are:

- [Netlify](https://docs.netlify.com/) Support for static sites and functions, the user experience is great.
- [Github pages](https://pages.github.com/) It's completely free, but only supports static.
- [Google firebase](https://firebase.google.cn/) Powerful, with more cdn nodes.
- [cloudflare ](https://www.cloudflare.com/) Global cdn is powerful, but only supports static.

For chinese users, firebase is not available, so the best solution is netlify, a lot of free, and has many convenient features, such as PR preview. Now the PR previews of Ant Design and Pro are all used by netlify, but netlify has no nodes in China, and the access speed is delayed by more than 3000ms. If your website is more than 2m, the access speed will be slow.

Github Pages is Github's official solution, but only supports pure static pages and does not support any dynamic capabilities. And the access speed is not ideal. Cloudflare can solve this problem at this time. Cloudflare's cdn provides a global deployment node that guarantees a global access speed of less than 1000ms.

### Preview deployment

The official website is a static web page, and github + cloudflare can solve the problem perfectly. However, Pro's preview has api, you need to deploy a background service, and as a scaffold, some of the code can't be opened to users. In terms of API, we chose netlify, the function of AWS based on netlify function, and the stability and ease of use are good. Static websites can be accelerated with cloudflare acceleration.

In `fetch:blocks`, we will add the buttons of `SettingDrawer` and copy block to the project. `SettingDrawer` is not recommended for use in production environments. It is added to display capabilities in the preview interface. of.

> Cloudflare does not support third-level domain names. If you need to accelerate it like us, consider upgrading the Professional Edition.

### Built-in variable

In Pro's project, we added an environment variable `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION` to determine whether it is a preview environment. If `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION` we will inject Google Analytics and umi-plugin-pro plugin, the umi-plugin-pro plugin will be added to Pro. The Api request is converted to `https://ant-design-pro.netlify.com/api/xxx`. And the default user permissions are set to admin, allowing preview users to access any page.

It is not recommended to open `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION` and use `fetch:blocks` in the actual project.

- `SettingDrawer` is not suitable for use in production, and the usage scheme is a bit problematic.
- `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION` Open will cause permissions issues and will report your project to our Google Analytics. This field in `ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION` is long and confusing in order to prevent users from using it.
