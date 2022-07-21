---
order: 31
title: 构建
group:
  title: 构建和部署
nav:
  title: 文档
  path: /docs
  order: 1
---

## 构建

当项目开发完毕，只需要运行一行命令就可以打包你的应用：

```bash
$ npm run build
```

[![asciicast](https://asciinema.org/a/198144.png)](https://asciinema.org/a/198144)

由于 Ant Design Pro 使用的工具 [Umi](https://umijs.org/zh-CN) 已经将复杂的流程封装完毕，构建打包文件只需要一个命令 `umi build`，构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `*.js`、`*.css`、`index.html` 等静态文件。

如果需要自定义构建，比如指定 `dist` 目录等，可以通过 `config/config.ts` 进行配置，详情参看：[Umi 配置v3](https://v3.umijs.org/zh-CN/config)或者[Umi 配置v4](https://umijs.org/docs/api/config)。

### 分析构建文件体积

如果你的构建文件很大，你可以通过 `analyze` 命令构建并分析依赖模块的体积分布，从而优化你的代码。

```bash
npm run analyze
```

上面的命令会自动在浏览器打开显示体积分布数据的网页。

### 服务端渲染（SSR）

服务端渲染（Server-Side Rendering），是指由服务侧完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。

如果需要打开，可以在 `config/config.tsx` 中配置以下代码来打开：

```tsx | pure
export default {
  ssr: {},
};
```

[ssr](https://umijs.org/zh-CN/docs/ssr#%E5%BC%80%E5%8F%91) 是很高级的用法，需要对前端技术栈有很深的了解，请慎重使用。
