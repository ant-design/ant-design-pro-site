---
order: 20
title: Using css
group:
  title: styles and resources
nav:
  title: Documents
  path: /docs
  order: 1
---

This document focuses on how to use and plan style files in your projects. For basic CSS knowledge or to check out properties, you can refer to the [MDN documentation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference).

umi comes with less and css parsing tools, so we are free to use either of the two. Here we will mainly talk about the use of css.

> We don't recommend using css, less can support all the features of css.

`index.css`

```css
.page {
  height: 100vh;
}
```

``index.ts`

```tsx | pure
import styles from 'index.css'; // tell umi to compile this css

const Page = () => {
  // append styles to className
  return <div className={styles.page}>this is a page</div>;
};
```

Here I need to bring in styles to append to the className. The reason we need to `import styles from 'index.css';` is because we have `CSS Modules` enabled to solve the naming problem.

> We don't recommend writing css for easy styles in practice, we recommend using template components for development, or writing in-line css directly. css doesn't have good dependencies, and many projects have redundant css, but are afraid to remove it.
