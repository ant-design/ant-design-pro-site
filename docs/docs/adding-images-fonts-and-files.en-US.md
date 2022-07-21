---
order: 44
title: Add pictures, fonts and files
group:
  title: styles and resources
nav:
  title: Documents
  path: /docs
  order: 1
---

In actual development, we often use some static files, especially pictures and some icons. We recommend using cdn for most images, but sometimes it may need to be directly packaged in js for loading speed.

We can directly reference resource files in tsx or jsx, and most of the resource files will be converted into a path after being imported. We can set it to the src of the picture or the address of window.open.

```tsx | pure
import logo from './logo.png';

console.log(logo); //logo.84287d09.png

// Use antd image
return <Image src={logo} />;
```

In order to speed up the loading speed and reduce network requests, we will convert less than 1000k into [base64](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), this version Only valid for pictures.

You may notice that the final generated `logo.png` will become `logo.84287d09.png`. This is to ensure that the image will be updated every time the version is released. If the name is not changed, it will hit the cache of `logo.png` , You can use import without worrying about caching.

If you want to use the cache, you can put the file in `public/logo.png` and use it like this in the code.

```tsx | pure
// Use antd image
return <Image src="/logo.png" />;
```

When compiling, all public will be moved to dist without any processing. Be sure to use the absolute path when using it. Usually we recommend importing stylesheets, images and fonts from JavaScript. The public folder can be used as a workaround for many unusual situations.

## Add SVG

svg is a special tag, in order to facilitate management, we recommend that you convert it into a component to use. There are many [tools](https://github.com/sairion/svg-inline-react) for converting svg into react components on the Internet. The final result is this:

```tsx | pure
return (
  <svg width={300} height={300}>
    <rect
      width="100%"
      height="100%"
      style={{ fill: 'purple', strokeWidth: 1, stroke: 'rgb(0,0,0)' }}
    />
  </svg>
);
```

### TypeScript

TypeScript only supports json and js. If you want to use other resources, you may get an error. So some special configuration is required. Commonly used ones are set by default in Pro, if you need to, you can modify the code of `src/typing`.

```tsx | pure
declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

// add pdf

declare module '*.pdf';
```
