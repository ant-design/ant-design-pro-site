---
order: 5
title: New Component
type: Development
---

For some reusable UI, it is a best practice to abstract it as React components which should have these features:

- Independent, reusable and stable pieces.
- Don't contain routes info.
- Stateless or contain isolate state within it.

Now we try to write a simple component as sample. Assume that you have a picture presentation UI which has fixed width, grey background, and text description like this:

<img src="https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png" width="400" />

## Create file in components

Create a folder named `ImageWrapper` (capitalised and same as component name) under `src/components`, and `index.ts` `index.less` inside it.

> You can split sub-component into other files and import them in `index.ts`.

> ```js
> // MainComponent.ts
> export default ({ ... }) => (...);
>
> // SubComponent1.ts
> export default ({ ... }) => (...);
>
> // SubComponent2.ts
> export default ({ ... }) => (...);
>
> // index.ts
> import MainComponent from './MainComponent';
> import SubComponent1 from './SubComponent1';
> import SubComponent2 from './SubComponent2';
>
> MainComponent.SubComponent1 = SubComponent1;
> MainComponent.SubComponent2 = SubComponent2;
> export default MainComponent;
> ```

The Component source code would be like:

```jsx
// index.ts
import React from 'react';
import styles from './index.less'; // import style in css modules way

export default ({ src, desc, style }) => (
  <div style={style} className={styles.imageWrapper}>
    <img className={styles.img} src={src} alt={desc} />
    {desc && <div className={styles.desc}>{desc}</div>}
  </div>
);
```

```css
/* index.less */
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

Then you have a component `ImageWrapper` you can use at anywhere in your application.

## Use it

Import your component and use it like other React components.

```js
import React from 'react';
import ImageWrapper from '@/components/ImageWrapper'; // @ means the relative path of source

export default () => (
  <ImageWrapper src="https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png" desc="sample" />
);
```
