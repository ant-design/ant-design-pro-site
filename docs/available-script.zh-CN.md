---
order: 3
title: 可用的脚本
type: 入门
---

在项目中，你可以运行这些命令：

### `npm start`

运行这个脚本会启动服务，自动打开默认浏览器展示你的页面。当你重新编辑代码后，页面还会自动刷新。

### `npm run build`

运行这个脚本将会编译你的项目，你可以在项目中的 `dist` 目录中找到编译后的文件用于部署。

编译之后的文件经过压缩。如果你想知道更详细的信息可以查阅 [编译](/docs/build-cn)。

如果你需要部署，可以查阅 [部署](/docs/deploy-cn)。

![image](https://user-images.githubusercontent.com/8186664/58555863-2a94d380-824d-11e9-8000-db085c7494f7.png)

### `npm run analyze`

analyze 脚本做的事情与 build 的相同，但是他会打开一个页面来展示你的依赖信息。如果需要优化性能和包大小，你需要它。

### `npm run lint`

我们提供了一系列的 lint 脚本，包括 TypeScript，less，css，md 文件。你可以通过这个脚本来查看你的代码有哪些问题。在 commit 中我们自动运行相关 lint。

### `npm run lint:fix`

这个脚本会自动修复一些 lint 错误，如果你被 lint 搞的焦头烂额，试试它吧。

### `npm test`

这个脚本会执行一系列测试，包括 e2e 测试。详细信息可以看 [测试](/doc/ui-test-cn)。

### `npm run fetch:blocks`

这个脚本可以将所有的区块下载到当前项目中。你会得到与 `https://preview.pro.ant.design/` 相同的界面。

> 如果速度缓慢，可以尝试升级 umi 版本到最新，并在 [config.ts](https://github.com/ant-design/ant-design-pro/blob/ad5db1c268100735b5d99624aa75a5cd1be56e2c/config/config.ts#L78) 设置 block.defaultGitUrl 为 'https://gitee.com/ant-design/pro-blocks'。

### `npm run i18n-remove`

这个脚本将会尝试删除项目中所有的 i18n 代码，对于复杂的运行时代码，表现并不好，慎用。
