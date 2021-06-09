---
order: 22
title: CSS Modules
group:
  title: 样式和资源
nav:
  title: 文档
  path: /docs
  order: 1
---

在样式开发过程中，有两个问题比较突出：

- 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
- 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标识，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多。

为了解决上述问题，我们的脚手架默认使用 CSS Modules 模块化方案，先来看下在这种模式下怎么写样式。

```tsx | pure
// example.ts
import styles from './example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css
/*  example.less */
.title {
  margin-bottom: 16px;
  color: @heading-color;
  font-weight: 600;
}
```

用 less 写样式好像没什么改变，只是类名比较简单（实际项目中也是这样），js 文件的改变就是在设置 className 时，用一个对象属性取代了原来的字符串，属性名跟 less 文件中对应的类名相同，对象从 less 文件中引入。

在上面的样式文件中，`.title` 只会在本文件生效，你可以在其他任意文件中使用同名选择器，也不会对这里造成影响。不过有的时候，我们就是想要一个全局生效的样式呢？可以使用 `:global`。

```css
/* example.less */
.title {
  margin-bottom: 16px;
  color: @heading-color;
  font-weight: 600;
}

/* 定义全局样式 */
:global(.text) {
  font-size: 16px;
}

/* 定义多个全局样式 */
:global {
  .footer {
    color: #ccc;
  }
  .sider {
    background: #ebebeb;
  }
}
```

CSS Modules 的基本原理很简单，就是对每个类名（非 :global 声明的）按照一定规则进行转换，保证它的唯一性。如果在浏览器里查看这个示例的 dom 结构，你会发现实际渲染出来是这样的：

```html
<div class="title___3TqAx">title</div>
```

类名被自动添加了一个 hash 值，这保证了它的唯一性。

除了上面的基础知识，还有一些关键点需要注意：

- CSS Modules 只会对 `className` 以及 `id` 进行转换，其他的比如属性选择器，标签选择器都不进行处理，推荐尽量使用 className。
- 由于不用担心类名重复，你的 className 可以在基本语意化的前提下尽量简单一点儿。

上面只对 CSS Modules 进行了最基础的介绍，有兴趣可以参考其他文档：

- [github/css-modules](https://github.com/css-modules/css-modules)
- [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules 详解及 React 中实践](https://github.com/camsong/blog/issues/5)
