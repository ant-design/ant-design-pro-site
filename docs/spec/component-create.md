---
order: 4
title: 新增组件
---

对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理。这些组件一般有以下特征：

- 只负责一块相对独立，稳定的功能；
- 没有单独的路由配置；
- 可能是纯静态的，也可能包含自己的 state，但不涉及 dva 的数据流，仅受父组件（通常是一个页面）传递的参数控制。

---

<img class="preview-img" align="right" alt="示意图" src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png">

下面以一个简单的静态组件为例进行介绍。假设你的应用中经常需要展现图片，这些图片都展现在页面的右侧，宽度固定，有一个灰色的背景和一定的内边距，有文字介绍，就像右图这样：

<br />

你可以用一个组件来实现这一功能，它有默认的样式，同时可以接收父组件传递的参数进行展示。

## 新建文件

在 `src/components` 下新建一个以组件名命名的文件夹，注意首字母大写，命名尽量体现组件的功能，这里就叫 `ImageWrapper`。在此文件夹下新增 js 文件及样式文件（如果需要），命名为 `index.js` 和 `index.less`。

> 在使用组件时，默认会在 `index.js` 中寻找 export 的对象，如果你的组件比较复杂，可以分为多个文件，最后在 `index.js` 中统一 export。

你的代码大概是这个样子：

```jsx
// index.js
import React from 'react';
import styles from './index.less';

export default ({ src, title, desc, style }) => (
  <div style={style} className={styles.imageWrapper}>
		<div className={styles.imgBlock}>
			<img className={styles.img} src={src} alt={title}>
		</div>
		{title && <div className={styles.title}>{title}</div>}
		{desc && <div className={styles.desc}>{desc}</div>}
  </div>
);
```

```css
// index.less
@import "~antd/lib/style/themes/default.less";

.imageWrapper {
	float: right;
	background: @background-color-base;
	margin: 0 0 70px 20px;
  width: 608px;
}

.imgBlock {
  padding: 16px;
  display: inline-block;
  text-align: center;
  width: 100%;
}

.img {
  max-width: 100%;
  background: @body-background;
  padding: 12px;
  border-radius: @border-radius-base;
}

.title {
  margin-top: 5px;
  color: @text-color;
}

.desc {
  margin-top: 2px;
  color: @text-color-secondary;
}
```

到这儿组件就建好了。

## 提高可维护性

简单的组件，只要在头部添加简单的注释，说明一下功能即可，但对于一些传入参数较为复杂，或者由多人共同维护/使用的组件，建议建立更为清晰的文档说明。你可以在组建文件夹下新增 markdown 格式的文件 `index.md`，用来对组件 API 进行说明。可以参照以下形式：

| 参数      | 说明                                      | 类型         | 默认值 |
|----------|------------------------------------------|-------------|-------|
| src | 图片地址 | string | - |
| title | 标题 | ReactNode | - |
| desc | 补充说明 | ReactNode | - |
| style | 可以定义样式 | object | - |
