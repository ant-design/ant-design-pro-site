---
order: 18
title:
  en-US: CLI Tool
  zh-CN: 使用 CLI 工具
type: 进阶
---

为了更好以及高效的开发效率，我们提供了配套的 [ant-design-pro-cli](https://github.com/ant-design/ant-design-pro-cli) 工具。

pro cli 提供了如下功能：

- `pro new` 新建一个脚手架，会自动将最新的 Ant Design Pro 脚手架下载到本地并安装
- `pro generate` 新建一个模板，包含 model、service、page、component

## 如何使用

使用 `npm` 安装到本地

```bash
$ npm install ant-design-pro-cli -g
```

## 新建脚手架

运行

```bash
$ pro new
```

## 新建模板

运行

```bash
$ pro generate
```

则会显示富交互的命令行提示界面：

<img width="400" src="https://gw.alipayobjects.com/zos/rmsportal/jtRFEJZANqqjeoEbylhV.png" />

然后通过交互提示就可以添加 `pro` 提供的标准模板。

目前提供的标准模板如下：

- 页面模板
  - Blank
  - BasicList
  - BasicForm
- 组件模板
  - stateless
  - normal
- service
- model
