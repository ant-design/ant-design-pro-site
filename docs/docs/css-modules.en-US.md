---
order: 22
title: CSS Modules
group:
  title: styles and resources
nav:
  title: Documents
  path: /docs
  order: 1
---

## CSS Modules

Two issues stand out in the style development process.

- global contamination -- selectors in CSS files are globally valid, and selectors of the same name in different files, depending on the order in which they are generated in the file after build, will be overwritten by the styles that follow.
- Selector complexity -- to avoid the above problems, we have to be careful when writing styles, class names will take on the scope of the marker, become longer and longer, multi-person development can also easily lead to naming style confusion, the number of selectors used on an element may also be more and more.

To solve these problems, our scaffolding defaults to the CSS Modules modularity scheme, so let's look at how to write styles in this mode.

```tsx | pure
// example.ts
import styles from '. /example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css
/* example.less */
.title {
  margin-bottom: 16px;
  color: @heading-color;
  font-weight: 600;
}
```

Writing styles in less doesn't seem to change much, just the class name is easy (as it is in the actual project), the change in the js file is that when setting the className, the original string is replaced with an object property, the property name is the same as the corresponding class name in the less file, and the object is introduced from the less file.

In the style file above, `.title` will only take effect in this file, you can use the selector with the same name in any other file and it will not affect it. But sometimes we just want a style that takes effect globally? You can use `:global`.

```css
/* example.less */
.title {
  margin-bottom: 16px;
  color: @heading-color;
  font-weight: 600;
}

/* Define global styles */
:global(.text) {
  font-size: 16px;
}

/* Define multiple global styles */
:global {
  .footer {
    color: #ccc;
  }
  .sider {
    background: #ebebeb;
  }
}
```

The basic principle of CSS Modules is easy: each class name (not declared by :global) is transformed according to certain rules to ensure that it is unique. If you look at the dom structure of this example in your browser, you'll see that it actually renders like this

```html
<div class="title___3TqAx">title</div>
```

The class name is automatically added with a hash value, which ensures that it is unique.

In addition to the basics above, there are some key points to note.

- CSS Modules only converts `className` and `id`, other things like attribute selectors, tag selectors are not handled, and it is recommended to use className as much as possible.
- Since you don't have to worry about duplicate class names, your className can be as easy as possible with basic semantics.

The above is only a very basic introduction to CSS Modules, for those interested you can refer to the following other documentation.

- [github/css-modules](https://github.com/css-modules/css-modules)
- [CSS Modules Usage Tutorial](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules Explained and Practiced in React](https://github.com/camsong/blog/issues/5)
