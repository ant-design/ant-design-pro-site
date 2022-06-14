---
order: 24
title: 添加图片，字体和文件
group:
  title: 样式和资源
nav:
  title: 文档
  path: /docs
  order: 1
---

在实际的开发中我们经常会用到一些静态文件，尤其是图片和一些图标。我们推荐大部分图片使用 cdn，但是有些时候为了加载速度可能也需要直接打包在 js 中。

我们可以直接在 tsx 或者 jsx 中直接引用资源文件，大部分的资源文件引入之后都会转化为一个路径。我们可以将其设置为了图片的 src，或者是 window.open 的地址。

```tsx | pure
import logo from './logo.png';

console.log(logo); //logo.84287d09.png

// 使用 antd 的图片
return <Image src={logo} />;
```

为了加快加载速度，并且减少网络请求，我们会把小于 1000k 的转化为 [base64](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)，这一版只对图片有效。

你可能注意到最后生成的 `logo.png` 会变成 `logo.84287d09.png` ，这个是为了保证每次发布版本都会更新图片，如果不改名字的话，会命中 `logo.png` 的缓存，你可以放心的使用 import 而不用担心缓存。

如果想要使用缓存，可以把文件放到 `public/logo.png`，然后再代码中这样使用。

```tsx | pure
// 使用 antd 的图片
return <Image src="/logo.png" />;
```

在编译的时候，public 会全部移动到 dist 中，不会进行任何处理。使用时一定要使用绝对路径。通常我们建议从 JavaScript 导入 stylesheets，图片和字体。 public 文件夹可用作许多不常见情况的变通方法.

## 添加 SVG

svg 是一种特殊标签，为了方便管理，我们建议大家将其转化为一个组件来使用。网络上有很多将 svg 转化为的 react 组件的[工具](https://github.com/sairion/svg-inline-react)。最后结果是这样的：

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

TypeScript 只支持 json 和 js ，要使用别的资源可能会报错。所以需要进行一些特殊配置。Pro 中默认设置了常用的，如果你有需要可以修改 `src/typing` 的代码。

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

// 增加 pdf

declare module '*.pdf';
```
