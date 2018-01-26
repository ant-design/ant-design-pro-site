---
order: 6
title: Style
type: Introduction
---

This document is mainly about how to use and organize style files in projects. If you want to get a basic knowledge of CSS or look for properties usage, you can refer to the [MDN doc] (https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

---

## less

Ant Design Pro defaults to using less as the style language, we recommended that you learn about the features of [less](http://lesscss.org/) before using it or sometimes when you have some questions.

## CSS Modules

In the style development process, there are two problems are prominent:

- Global Pollution - CSS file selectors are globally valid. according to the build file generated in the order, the ahead selector's style will be cover by the back one which has the same selector name;
- Selector complex - in order to avoid the above problem, we have to be careful when writing styles. the class name will be brought flag for limit the style's scope lead to it will getting longer and longer. And in multi-person development, it not only easily lead to the naming style confusion but also cause the number of selectors used on an element be more and more.

In order to solve the above problems, our scaffold use CSS Modules as a modular solution. let us have a look at how to write style in this mode.

```html
// example.js
import styles from './example.less';

export default ({title}) => <div className={styles.title}>{title}</div>;
```

```css
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}
```

Write style use less file does not seem to change, but the class name is relatively simple (the actual project is also the case). js file change at the className property, it changed with an object attribute instead of the original string. the object is import from the less file, and the attribute name same as the selector name in less file.

In the above style file, `.title` will only work in this file, you can use the same selector name in any other file, it will not affect here. But sometimes, we just want a global style which effective everywhere? You can use `:global`.

```css
// example.less
.title {
  color: @ heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}

/* Define the global style */
:global (.text) {
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

The basic principle of CSS Modules is very simple. that is: for each class name (without `:global`) in accordance with some rules for conversion, to ensure its uniqueness. If you look at the dom structure of this example in your browser, you will find that the actual rendering like this:

```html
<div class="title___3TqAx">title</div>
```

The class name is automatically added a hash value, which guarantees its uniqueness.

In addition to the basics above, there are some key points to note:

- CSS Modules only convert `className` and `id`. Others such as property selectors and tag selectors are not processed. It is recommended to use className as much as possible.
- Since you do not have to worry about className repeat, your className can be as simple as possible with basic semantics.

CSS Modules above only the most basic introduction, are interested can refer to other documents:

- [github/css-modules](https://github.com/css-modules/css-modules)
- [CSS Modules Usage Tutorial](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules Detailed and Practice in React](https://github.com/camsong/blog/issues/5)

## Style file category

In a project, style files can be divided into different categories depending on their function.

### src/index.less

Global style file, where you can make some common settings, such as scaffold comes with:

```css
html, body, :global (#root) {
  height: 100%;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// temporary font size patch
: global (.ant-tag) {
  font-size: 12px;
}
```

> Because antd will bring some global settings, such as font size, color, line height。 so here, you only need to focus on their own individual needs can be, without a lot of reset.

### src/utils/utils.less

Here you can place some tool functions for the call, such as clearing the floating `.clearfix`.

### Module style

Files that use for a module or page.

#### Universal module level

For example, `src/layouts/BasicLayout.less`, which contains some basic layout styles, is referenced by ` src/layouts/BasicLayout.js`, and the pages that use this layout do not need to care about the overall layout settings anymore. If you need to use other layouts in your project, it is also recommended to put layout-related js and less in `src/layouts`.

#### Page level

Specific page-related style, such as `src/routes/Dashborad/Monitor.less`, the content is only related to the content of this page. Under normal circumstances, if it is not particularly complex page, with the previous global style and common module style, there should be little to write.

#### Component level

This is also very simple, there are component-related styles. In your project, there are some reusing fragments in the page or relatively independent function which can be define as components, the relevant style should be extracted on the component, rather than confusing in the page.

> The above style categories are for independent style files. Sometimes the style configuration is especially simple and is not repeated. You can also use the inline style `style = {{...}}`.

## Override the component style

Because of the special needs of the project, we often meet the need to cover the component style, here is a simple example.

Antd Select In multi-select state, the default will show all the select items, here we add a limit height for display scroll bar when the content beyond this height.

```js
// TestPage.js
import {Select} from 'antd';
import styles from './TestPage.less'
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i ++) {
  children.push(<Option key = {i.toString (36) + i}>{i.toString (36) + i}</Option>);
}

ReactDOM.render (
  <Select
    mode="multiple"
    style={{width: 300}}
    placeholder="Please select"
    className={styles.customSelect}
  >
    {children}
  </Select>
, mountNode);
```

```css
// TestPage.less
.customSelect {
  :global {
    .ant-select-selection {
      max-height: 51px;
      overflow: auto;
    }
  }
}
```

Two points need to note:

- The imported antd component class name is not translated by CSS Modules, so the overridden class name `.ant-select-selection` must be put in `:global`.
- Because of the previous note, the coverage is global. To prevent this from affecting other Select components, need to wrap extra className for limit the scope of the style.
