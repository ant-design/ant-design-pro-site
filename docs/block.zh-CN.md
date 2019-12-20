---
order: 3
title: 区块
type: 开发
---

## 什么是区块

区块是研发资产的一种，它是一系列快速搭建页面的代码片段，它可以帮助你快速的在项目中初始化好一个页面，帮助你更快速的开发代码。当前的区块都是页面级别的区块，你可以理解为它是一些项目中经常会用到的典型页面的模板，使用区块其实相当于从已有的项目中复制一些页面的代码到你当前的项目中。

- 以前开发一个页面：创建 JS -> 创建 CSS -> 创建 Model -> 创建 service -> 写页面组件。
- 现在开发一个页面：下载区块 -> 基于区块初始化好的页面组件修改代码。

## 使用区块

Ant Design Pro 中，使用 umi ui 进行区块管理。

![ umi block list](https://gw.alipayobjects.com/zos/antfincdn/YWjTPDQAeq/CF034E49-0FE8-4011-B282-6956FC1B312C.png)

### 区块和模板

在 Pro 中资产被分为了两种，区块和模板。区块可以类比为一个组件，而模板代表一个页面。区块现在支持所有 antd 中的 demo，可以更加快速的将 demo 导入到项目中去。下图演示了快速开发一个 crud 页面。

![](https://gw.alipayobjects.com/zos/antfincdn/75%26lzz1F9P/Kapture%2525202019-11-25%252520at%25252015.35.41.gif)

### 布局区块

该类区块提供了占位的能力，可以在指定位置添加其他区块；并且会通过代码合并的方式添加到目标文件中，这点更加符合代码组织的直觉。

![](https://gw.alipayobjects.com/zos/antfincdn/FjLAmnNnwA/Kapture%2525202019-11-25%252520at%25252017.32.25.gif)

## 找回 Pro v2 中的所有界面

可以在 pro 项目根目录中执行 `npm run fetch:blocks` 来下载所有的区块。得到的界面将与 [preview](https://preview.pro.ant.design/) 中相同。

> fetch:blocks 脚本可能有一些兼容性的问题，如果您碰到了问题，请到官方仓库提 [issue](https://github.com/ant-design/ant-design-pro/issues)。

## 更多内容

如果你想进行区块开发，可以在 [umi 区块](https://umijs.org/zh/guide/block.html) 中查看完整内容。
