---
order: 12
title: 构建和发布
---

---

## 构建

由于 ant design pro 底层使用的 [roadhog](https://github.com/sorrycc/roadhog) 工具，已经将复杂的流程封装完毕，对于大部分场景，构建打包文件只需要一个命令 `roadhog build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `index.js`、`index.css`、`index.html` 三个静态文件。

不过你如果需要自定义构建，比如指定 `dist` 目录等，则需要通过 `.roadhogrc` 进行配置，详情参看：[roadhog 配置](https://github.com/sorrycc/roadhog#配置)。

## 发布

对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 `dist` 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 `index.html` 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。
