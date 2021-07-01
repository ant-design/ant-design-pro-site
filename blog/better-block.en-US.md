---
order: 5
title: Better Block
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2019-06-28
---

> umi ui has been released, click here [experience](https://umijs.org/zh/guide/umi-ui.html).

In v4 we released the block function, and we added some new features in a period of use and feedback to help users better use and experience the block.

## 🚀 Faster

In the new umi block we will help the user to automatically select the appropriate source. In the previous version, the block will use the default npm source. For users with poor network status, the improvement is obvious. The package management tools and sources you will be prompted for during the block installation.

![image.png](https://gw.alipayobjects.com/zos/antfincdn/bIMTQS7Enp/1561711640885-9978d8b0-bd9b-4ca8-936d-8295c93aaf6e.png)

If you want to use your own package management tools and sources, you can customize them with `--npm-client` and `--registry`.

```bash
npx umi block add AccountSettings --npm-client=tyarn --registry=https://registry.npm.taobao.org
```

> 🌟 Block comes with npm and taobao sources, depending on the network to decide which source to use. Also, if your project contains a yarn.lock file, the block will use yarn to install the block.

## 🌟 TypeScript to JavaScript

The default block in Pro V4 is TypeScript, and some users still want to use the JavaScript version of the block for development. In the new version we have added support for js. If you need a version of js, just add the `--js` parameter.

```bash
npx umi block add AccountSettings --js
```

## 💄 Better umi block list

The original intention of umi block list is that you can quickly find the block, but in actual use, because the parameter of `defaultGitUrl` is not supported, it is often found that the block cannot be found during use. We solved this problem in the new version.

The default block style:

![image.png](https://gw.alipayobjects.com/zos/antfincdn/NtVIEG5%26Dl/1561713171094-78254575-b36c-4fab-b56a-f969984d4891.png)

Used in Pro:

![image.png](https://gw.alipayobjects.com/zos/antfincdn/x4QZO%24Ubyh/1561713223131-f7111829-e270-4569-b5ac-8e8585581b96.png)

To provide a better experience, now select an item from the list for installation. The Pro block also provides a link to the preview. You can jump to Pro's preview to preview this block.

Here is a complete process preview：

![Kapture 2019-06-28 at 17.25.12.gif](https://gw.alipayobjects.com/zos/antfincdn/l77kvH708D/Kapture%2525202019-06-28%252520at%25252017.25.12.gif)

Finally welcome to use, submit questions, PR.

#### Reference document

_umi block_ [https://umijs.org/zh/guide/block.html](https://umijs.org/zh/guide/block.html)

*pro-blocks*  [https://github.com/ant-design/pro-blocks/pulls](https://github.com/ant-design/pro-blocks/pulls)

_Ant Design Pro_ [https://pro.ant.design/index-cn](https://pro.ant.design/index-cn)
