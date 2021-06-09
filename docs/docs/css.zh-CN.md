---
order: 20
title: 使用 css
group:
  title: 样式和资源
nav:
  title: 文档
  path: /docs
  order: 1
---

这篇文档主要针对如何在项目中使用和规划样式文件进行介绍，如果想获取基础的 CSS 知识或查阅属性，可以参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)。

umi 自带了 less，css 的解析工具，所以我们可以自由的使用两种中的任意一种。这里主要讲一下 css 的使用方式。

> 我们并不推荐使用 css，less 包含了 css 的所有功能，并且增加了更多的功能

`index.css`

```css
.page {
  height: 100vh;
}
```

`index.ts`

```tsx | pure
import styles from 'index.css'; // 告诉 umi 编译这个 css

const Page = () => {
  // 附加样式到 className 中
  return <div className={styles.page}>this is a page</div>;
};
```

在这里我需要将 styles 引入，附加到 className 中。这样 umi 就知道应该编译这段 css。之所以需要 `import styles from 'index.css';` 是因为我们开启了 `CSS Modules` 来解决命名的问题。

> 实际开发中简单的样式我们并不推荐写 css，推荐使用模板组件来进行开发，或者直接写行内 css。css 并没有很好的依赖关系，很多项目都有冗余的 css，但是却不敢删除。
