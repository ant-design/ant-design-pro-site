---
order: 2
title: Upgrade to V4
type: Introduction
---

## Upward Compatibility

We keep the best compatibility. There is nothing **must** to do with the upgrade.

## Optional Upgrade

We move Layout into [single component](https://github.com/ant-design/ant-design-pro-layout) in Ant Design 4.0.
You can consider to replace Layout with latest Layout component.

### Install Dependencies

```bash
npm i @ant-design/pro-layout --save
```

or

```bash
yarn add @ant-design/pro-layout
```

### Replace BasicLayout

Delete `BasicLayout.js` and `BasicLayout.less` under `src/layouts` folder.
Use [latest `BasicLayout.tsx`](https://github.com/ant-design/ant-design-pro/blob/v4/src/layouts/BasicLayout.tsx) to replace it.

> If you modified origin `BasicLayout`, you should apply your code logic into replaced file.
