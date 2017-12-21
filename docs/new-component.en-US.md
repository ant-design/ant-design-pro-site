---
order: 4
title: New Component
type: Introduction
---

For those modules that will be used in different situations, we suggest modularizing them into business logical components. Typically, a component has following characteristics: 

- Provides a single, but stable functionality. And usually is isolated in terms of business logic.
- No separate route configuration.
- A component can be either a pure static, or one with its own state yet without dva data flow, which only accepts arguments from its parent component (A page, typically).

---


Let's use a simple static component as illustration. Assume your application need to display lots of fixed width pictures. All of them have gray background, padding and some caption. Like following:

<img src="https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png" width="400" />

A component would be a good choice since it comes with a default style, but you can also pass arguments from its parent component.

## New File

Create a new directory with component's name under `src/components`, begin with a capital letter. And the name should reflect its functionality. Here, we call it `ImageWrapper`. Under this newly created directory we add a js file and a styling file, call them `index.js` and `index.less` respectively.

> When using a component, ant-design-pro will look for export object inside `index.js` by default. If you are building a complex component, it would be better to split it into a couple of subcomponents. Then export them in `index.js`. Like this:


> ```js
// MainComponent.js
export default ({ ... }) => (...);
>
// SubComponent1.js
export default ({ ... }) => (...);
>
// SubComponent2.js
export default ({ ... }) => (...);
>
// index.js
import MainComponent from './MainComponent';
import SubComponent1 from './SubComponent1';
import SubComponent2 from './SubComponent2';
>
MainComponent.SubComponent1 = SubComponent1;
MainComponent.SubComponent2 = SubComponent2;
export default MainComponent;
```

And this is how your code looks like:

```jsx
// index.js
import React from 'react';
import styles from './index.less';    // import CSS Modules

export default ({ src, desc, style }) => (
  <div style={style} className={styles.imageWrapper}>
    <img className={styles.img} src={src} alt={desc} />
    {desc && <div className={styles.desc}>{desc}</div>}
  </div>
);
```

```css
// index.less
.imageWrapper {
  padding: 0 20px 8px;
  background: #f2f4f5;
  width: 400px;
  margin: 0 auto;
  text-align: center;
}

.img {
  vertical-align: middle;
  max-width: calc(100% - 32px);
  margin: 2.4em 1em;
  box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
}
```

And now your component is ready for use.

## Usage

Just use your component wherever you want. Don't forget import them first and pass arguments according to predefined API. 

```js
import React from 'react';
import ImageWrapper from '../../components/ImageWrapper';  // Make sure your path is correct 

export default () => (
  <ImageWrapper
    src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"
    desc="desc"
  />;
)

```
