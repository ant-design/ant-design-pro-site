---
order: 23
title: 使用 less
group:
  title: 样式和资源
nav:
  title: 文档
  path: /docs
  order: 1
---

这篇文档主要针对如何在项目中使用和规划样式文件进行介绍，如果想获取基础的 CSS 知识或查阅属性，可以参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)。

umi 自带了 less，css 的解析工具，所以我们可以自由的使用两种中的任意一种。这里主要讲一下 less 的使用方式。Ant Design Pro 默认使用 less 作为样式语言，建议在使用前或者遇到疑问时学习一下 [less](http://lesscss.org/) 的相关特性。

## `index.less`

```css
.page {
  height: 100vh;
}
```

## `index.ts`

```tsx | pure
import styles from 'index.less'; // 告诉 umi 编译这个 less

const Page = () => {
  // 附加样式到 className 中
  return <div className={styles.page}>this is a page</div>;
};
```

在这里我需要将 styles 引入，附加到 className 中。这样 umi 就知道应该编译这段 less。之所以需要 `import styles from 'index.css';` 是因为我们开启了 `CSS Modules` 来解决命名的问题。

## 使用变量

less 作为 css 的超集，提供了很多 css 没有功能，其中最方便的就是变量。antd 中提供了丰富的变量来帮助我们进行开发。同时也让我的自定义主题变得更加简单，以下是 antd 提供的一些常用变量。所有样式变量可以在 [这里](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 找到。

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

使用这些变量：

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
import styles from 'index.less'; // 告诉 umi 编译这个 less

const Page = () => {
  // 附加样式到 className 中
  return (
    <div className={styles.page}>
      <text className={styles.myLink}>this is a page</text>
    </div>
  );
};
```

这样做可以让我们的项目与 antd 的同一性非常高，同时也避免了复写 css 样式带来额外工作量。同时也支持了在 `config.ts` 中修改主题，我们使用的变量会自动的被编译。
