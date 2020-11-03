---
order: 1
title: 开始使用
type: 入门
---

Ant Design Pro 基于 umi 来构架脚手架，我们可以通过简单的操作来初始化和启动脚手架。

## 准备工作

由于国内网络和前端的特殊性，在安装依赖等方面可能会失败或导致无法启动，浪费大量的时间我们推荐如下的技术栈来帮助我们顺畅的开发。

### 包管理器

推荐使用 [tyarn](https://www.npmjs.com/package/tyarn) 来进行包管理，可以极大地减少 install 的时间和失败的概率，并且完全兼容 npm。

如果喜欢使用 npm 而不是 yarn，可以使用 [cnpm](https://www.npmjs.com/package/cnpm), 安装速度比 `tyarn` 更快，但是与 npm 不是完全兼容。

### Terminal

非 windows 用户没什么好说的，iTrem2 和 my zsh 是最强选择。

对于 windows 用户而言，bash on linux 是最好的选择，但是可能会造成一些性能问题。这里推荐使用 [Windows Terminal](https://github.com/microsoft/terminal) 和 [Powershell](https://github.com/PowerShell/Powershell)。Windows Terminal 可以直接在微软商店中下载，美貌与实力并存，不逊于 iTrem2，微软官方维护品质也值得信赖。Powershell 是 window7 以来内置的命令行工具，被 linux 创始人称赞为不那么烂的命令行。并且可以配置 [posh-git](http://dahlbyk.github.io/posh-git/)，能得到部分 zsh 的能力。

配置好后效果

![Powershell](https://store-images.s-microsoft.com/image/apps.49728.13926773940052066.d057d8b2-5284-497c-95a9-c3db62fd5ed8.9fe6d0d6-c148-4742-8275-61d2d69a7ab1?w=1399&h=810&q=90&format=jpg)

## 初始化

我们提供了 create umi 来快速的初始化脚手架。

```bash
# 使用 npm
npx npx create-umi
# 使用 yarn
yarn create umi
```

<video src="https://gw.alipayobjects.com/os/antfincdn/0wSaPUs36y/My%252520Sequence_1.mp4" controls width="100%"></video>

create umi 提供了丰富的选项来满足不同用户的脚手架需求，我们可以选择开发语言 JavaScript 或者 TypeScript。

![language](https://gw.alipayobjects.com/zos/antfincdn/fvy3icO6IL/sshot-4.png)

也可以选择是否获取全部区块。

![simple](https://gw.alipayobjects.com/zos/antfincdn/Kqlh5sQslh/sshot-1.png)

选择 antd 的版本，3 或者 4。

![antd](https://gw.alipayobjects.com/zos/antfincdn/oPREL%26PSX9/sshot-2.png)

一个执行成功的脚手架日志。

![end](https://gw.alipayobjects.com/zos/antfincdn/c7f3Y9B5Om/sshot-3.png)

## 开发

脚手架初始化成功之后就可以开始进行开发了，我们提供了一些命令来辅助开发。

### `start`

运行这个脚本会启动服务，自动打开默认浏览器展示你的页面。当你重新编辑代码后，页面还会自动刷新。

![start](https://gw.alipayobjects.com/zos/antfincdn/1x2QB6onvP/74FDD893-9DBD-4A8F-BB70-C0649189BA3C.png)

### `build`

运行这个脚本将会编译你的项目，你可以在项目中的 dist 目录中找到编译后的文件用于部署。

![build](https://gw.alipayobjects.com/zos/antfincdn/DVK9LCd9Te/75ED2D26-2984-4A8C-886D-C106D9BE4B70.png)

如果你需要部署，可以查阅[部署](/docs/deploy-cn)。

### `analyze`

analyze 脚本做的事情与 build 的相同，但是他会打开一个页面来展示你的依赖信息。如果需要优化性能和包大小，你需要它。

![analyze](https://gw.alipayobjects.com/zos/antfincdn/ZTXFIYGGr%24/F8302DCB-DA37-4EDE-B6FF-76E35F727BBC.png)

### `lint`

我们提供了一系列的 lint 脚本，包括 TypeScript，less，css，md 文件。你可以通过这个脚本来查看你的代码有哪些问题。在 commit 中我们自动运行相关 lint。

![lint](https://gw.alipayobjects.com/zos/antfincdn/bUQ%24NATOiD/AEA3029A-4B88-4BEF-9C37-166BB32442A4.png)

### `lint:fix`

与 lint 相同，但是会自动修复 lint 的错误。

![lint:fix](https://gw.alipayobjects.com/zos/antfincdn/v%24E7PNxq%24R/210AAD0A-0CA1-47F3-9397-85EBD9CD4152.png)

### `i18n-remove`

这个脚本将会尝试删除项目中所有的 i18n 代码，对于复杂的运行时代码，表现并不好，慎用。

## 内部使用

在蚂蚁金服内部，推荐使用 [Bigfish](https://bigfish.antfin-inc.com/doc/getting-started) 作为前端整体解决方案。

> 在 Bigfish 中使用 Ant Design Pro，菜单、路由及权限配置等功能需要依照 Bigfish 提供的解决方案实现，请直接参考内网相关文档。
