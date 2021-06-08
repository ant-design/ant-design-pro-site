---
order: 5
title: Block 新升级
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2019-06-28
---

> umi ui 已经发布，点此快速[体验](https://umijs.org/zh/guide/umi-ui.html)。

在 v4 中我们发布了 block 功能，在一段时间的使用和反馈中我们增加了一些新的特性，来帮助用户更好的使用和体验 block。

## 🚀 更快的安装速度

在新的 umi block 中我们会帮助用户自动选择合适的源，而在以前的版本中 block 会使用默认的 npm 源，对于网络状态不佳的用户，改善非常明显。在区块安装中会提示你使用的包管理工具和源。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/bIMTQS7Enp/1561711640885-9978d8b0-bd9b-4ca8-936d-8295c93aaf6e.png)

如果你想使用自己的包管理工具和源，你可以通过 `--npm-client`  和 `--registry`  来自定义。

```bash
npx umi block add AccountSettings --npm-client=tyarn --registry=https://registry.npm.taobao.org
```

> 🌟block 自带了 npm 和 taobao 两种源, 会根据网络来决定使用哪个源。同时如果你的项目中包含 yarn.lock 文件，block 会使用 yarn 来安装区块。

## 🌟 TypeScript 转 JavaScript

Pro V4 中默认的区块为 TypeScript，有些用户还是希望使用 JavaScript 版本的区块来进行开发。在新版中我们加入了对 js 的支持。 如果你需要 js 的版本，只要增加 `--js`  参数。

```bash
npx umi block add AccountSettings --js
```

## 💄 umi block list 优化

umi block list 的初衷是希望大家可以快速的查到区块，但是在实际使用中，因为不支持  `defaultGitUrl`  的参数，导致在使用过程中经常发现区块找不到的问题。新版中我们解决了这个问题，

默认的 block 样式：

![image.png](https://gw.alipayobjects.com/zos/antfincdn/NtVIEG5%26Dl/1561713171094-78254575-b36c-4fab-b56a-f969984d4891.png)

在 pro 中使用:

![image.png](https://gw.alipayobjects.com/zos/antfincdn/x4QZO%24Ubyh/1561713223131-f7111829-e270-4569-b5ac-8e8585581b96.png)

为了提供更好的体验，现在支持 list 中选择某一项用于安装。Pro 的区块还提供了预览的链接。可以跳转到 Pro 的 preview 预览这个区块。

这里有一个完整的流程预览：

![Kapture 2019-06-28 at 17.25.12.gif](https://gw.alipayobjects.com/zos/antfincdn/l77kvH708D/Kapture%2525202019-06-28%252520at%25252017.25.12.gif)

最后欢迎使用，提交问题，PR。

#### 参考文档

_umi block_ [https://umijs.org/zh/guide/block.html](https://umijs.org/zh/guide/block.html)

*pro-blocks*  [https://github.com/ant-design/pro-blocks/pulls](https://github.com/ant-design/pro-blocks/pulls)

_Ant Design Pro_ [https://pro.ant.design/index-cn](https://pro.ant.design/index-cn)
