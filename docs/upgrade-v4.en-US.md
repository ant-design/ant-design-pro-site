---
order: 2
title: Upgrade to V4
type: Introduction
---

## Upward Compatibility
Ant Design Pro 4.0 is compatible with all the features of 2.0, and upgrading from 2.0 to 4.0 does not require any changes.

## Optional Upgrade
In Ant Design Pro 4.0, we abstracted the Layout into a separate [single component](https://github.com/ant-design/ant-design-pro-layout), if you wish to replace your current layout with this new one. Read more on how to do so below:

### 1. Install Dependencies
Using npm or yarn, install the new `pro-layout` component:

```bash
npm i @ant-design/pro-layout --save
```

or

```bash
yarn add @ant-design/pro-layout
```

### 2. Replace BasicLayout 

To replace the `BasicLayout` component, delete `BasicLayout.js` and `BasicLayout.less` in the `src/layouts` directory, and put in it's place the [latest `BasicLayout.tsx`](https://github.com/ant-design/ant-design-pro/blob/v4/src/layouts/BasicLayout.tsx) component.

> Note: if you had modified the original `BasicLayout` component, you'll need to also apply your same changed logic in the replacement file as well.
