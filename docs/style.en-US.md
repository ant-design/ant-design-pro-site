---
order: 6
title: Edit Style
type: Development
---

This document is mainly about how to use and organize style files in projects. If you want to get a basic knowledge of CSS or look for properties usage, you can refer to the [MDN doc](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).

## less

Ant Design Pro defaults to using less as the style language, we recommend that you learn about the features of [less](http://lesscss.org/) before using it or sometimes when you have some questions.

## CSS Modules

In the style development process, there are two prominent problems:

- Global Pollution - CSS selectors are globally valid. Selectors with the same name in different files will be built together, and the former will be overrided by the latter.
- Complex Selector - in order to avoid the above problem, we have to be careful when writing styles. The increase in flags for range restriction will lead to a growing class name, besides that, naming style confusion in multi person development and an increasing number of selectors on an element is hard to avoid.

In order to solve the above problems, our scaffold use CSS Modules as a modular solution. Let us have a look at how to write style in this mode.

```tsx
// example.ts
import styles from './example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css
/* example.less */
.title {
    color: @heading-color;
    font-weight: 600;
    margin-bottom: 16px;
}
```

Write style use less file does not seem to change much, but the class name is relatively simple (the actual project is also the case). The classname in js files would be replaced by an object attribute, which has the same name as the selector in the less file from where the object was imported.

In the above style file, `.title` will only work in this file, you can use the same selector name in any other file, it will not affect here. But sometimes, we just want a global style which can take effect everywhere? You can use `:global`.

```css
 /* example.less */
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

Hash value is added to the class name automatically, which guarantees its uniqueness.

In addition to the basics above, there are some key points to be noted:

- CSS Modules only convert `className` and `id`. Others such as property selectors and tag selectors are not processed. It is recommended to take className as the first choice.
- Since you do not have to worry about className repeat, your className can be as simple as possible with basic semantics.

It's a brief introduction for CSS Modules, for details, please refer to:

- [github/css-modules](https://github.com/css-modules/css-modules)
- [CSS Modules Usage Tutorial](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules Detailed and Practice in React](https://github.com/camsong/blog/issues/5)

## Style file category

In a project, style files can be divided into different categories depending on their function.

### src/index.less

Global style file, where you can make some common settings, such as scaffold comes with:

```css
html,
body,
:global (#root) {
    height: 100%;
}

body {
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

// temporary font size patch
:global(.ant-tag) {
    font-size: 12px;
}
```

> Because antd will bring some global settings, such as font size, color, line height. So there is no need to do a lot of reset, you can focus on your individualized demands.

### src/utils/utils.less

Here you can place some tool functions, such as clearing the floating `.clearfix`.

### Module style

Files that use for a module or page.

#### Universal module level

For example, `src/layouts/BasicLayout.less`, which contains some basic layout styles, is referenced by `src/layouts/BasicLayout.ts`, and the pages that use this layout do not need to care about the overall layout settings anymore. If you need to use other layouts in your project, it is also recommended to put layout-related js and less in `src/layouts`.

#### Page level

Specific page-related style, such as `src/routes/Dashborad/Monitor.less`, the content is only related to the content of this page. Under normal circumstances, if it is not particularly complex page, with the previous global style and common module style, there should be little to write.

#### Component level

This is also very simple, they are component-related styles. In your project, there are some reuseable fragments in the page or relatively independent function which can be define as components, the relevant style should be extracted on the component, rather than confusing in the page.

> The above style categories are for independent style files. Sometimes the style configuration is especially simple and is not repeated. You can also use the inline style `style = {{...}}`.

## Override the component style

Because of the special needs of the project, we often meet the need to cover the component style, here is a simple example.

Antd Select In multi-select state, the default will show all the select items, here we add a limit height for display scroll bar when the content beyond this height.

```js
// TestPage.ts
import { Select } from 'antd';
import styles from './TestPage.less';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: 300 }}
    placeholder="Please select"
    className={styles.customSelect}
  >
        {children}
      
  </Select>,
  mountNode,
);
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

Two points need to be noted:

- The imported antd component class name is not translated by CSS Modules, so the overridden class name `.ant-select-selection` must be put in `:global`.
- Because of the previous note, the override is global. To avoid affecting other Select components, the setting needs to be wrapped by an extra classname to add range restriction.
