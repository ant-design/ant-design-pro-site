---
order: 2
title: 升级到 4.0 版本
type: 入门
---

## 向上兼容

Ant Design Pro 4.0 兼容了 2.0 的所有特性，从 2.0 升级到 4.0 不需要要做任何改动。

## 可选更新

在 Ant Design Pro 4.0 中，我们将 Layout 抽离成了[单独的组件](https://github.com/ant-design/ant-design-pro-layout)。你可以选择将其替换成最新的组件。

### 安装依赖

```bash
npm i @ant-design/pro-layout --save
```

或者

```bash
yarn add @ant-design/pro-layout
```

### 替换 BasicLayout

于 `src/layouts` 目录下，删除 `BasicLayout.js` 和 `BasicLayout.less`。用 [新版 `BasicLayout.tsx`](https://github.com/ant-design/ant-design-pro/blob/v4/src/layouts/BasicLayout.tsx) 替换掉。

> 如果你修改了原 `BasicLayout`，记得将更改的逻辑应用到替换后的文件中。
