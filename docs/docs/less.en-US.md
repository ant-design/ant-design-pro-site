---
order: 23
title: use less
group:
  title: styles and resources
nav:
  title: Documents
  path: /docs
  order: 1
---

This document mainly introduces how to use and plan style files in a project. If you want to get basic CSS knowledge or view attributes, you can refer to [MDN Documentation](https://developer.mozilla.org/zh-CN/docs /Web/CSS/Reference).

Umi comes with less and css parsing tools, so we can use any of the two freely. Here mainly talk about the use of less. Ant Design Pro uses less as the style language by default. It is recommended to learn the relevant features of [less](http://lesscss.org/) before using it or when in doubt.

## `index.less`

```css
.page {
  height: 100vh;
}
```

## `index.ts`

```tsx | pure
import styles from 'index.less'; // Tell umi to compile this less

const Page = () => {
  // attach style to className
  return <div className={styles.page}>this is a page</div>;
};
```

Here I need to introduce styles and append it to className. Then umi knows that this section of less should be compiled. The reason why `import styles from'index.css';` is needed is because we have turned on `CSS Modules` to solve the naming problem.

## Use variables

As a superset of css, less provides many functions that css does not have, and the most convenient one is variables. A wealth of variables are provided in antd to help us develop. It also makes my custom theme easier. Here are some common variables provided by antd. All style variables can be found [here](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less).

```less
@primary-color: #1890ff; // 全局主色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
@font-size-base: 14px; // 主字号
@heading-color: rgba(0, 0, 0, 0.85); // 标题色
@text-color: rgba(0, 0, 0, 0.65); // 主文本色
@text-color-secondary: rgba(0, 0, 0, 0.45); // 次文本色
@disabled-color: rgba(0, 0, 0, 0.25); // 失效色
@border-radius-base: 2px; // 组件/浮层圆角
@border-color-base: #d9d9d9; // 边框色
@box-shadow-base: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
  0 9px 28px 8px rgba(0, 0, 0, 0.05); // 浮层阴影
```

Use these variables

### index.less

```less
@import '~antd/es/style/themes/default.less';

.page {
  height: 100vh;
}

.myLink {
  color: @primary-color;
  font-size: @font-size-base;
}
```

### index.ts

```tsx | pure
import styles from 'index.less'; // Tell umi to compile this less

const Page = () => {
  // 附加样式到 className 中
  return (
    <div className={styles.page}>
      <text className={styles.myLink}>this is a page</text>
    </div>
  );
};
```

This allows our project to have a very high identity with antd, and at the same time avoids the extra workload of copying the css style. It also supports to modify the theme in `config.ts`, the variables we use will be automatically compiled.
