---
order: 1
title: 在线更换主题
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2019-05-07
---

在 pro 的 v4 版本中我们增加了一个在线换主题的功能。这个功能的本意是为了让设计师们可以更加快速的修改 Ant Design 的主色调，并且直接预览，来节省开发者的时间。但是由于方案的不成熟，造成了很多同学在开发的时候碰到了问题，却无法排查到问题。白白浪费了很多时间，所以我们写了这篇小文章来阐述我们的实现方案，以及为什么会造成这个问题。

## 背景

Pro 中为了简化 less 的使用，启用了 [`css-module`](https://github.com/css-modules/css-modules)， 在项目中使用的话 `css-module` 是一个很棒的特性，他可以解决困扰每个程序员的问题，如何起一个有意义但是不重复的 css 类名。

但是对于组件 css-module 就会增加成本，发布组件的时候如果还想保持 less 源码的话就是一个更麻烦的事情了。首先即使不保留 less。每次组件的类名都会变化。这样就无法用 css 的来修改组件的样式。

> 某些不希望被修改样式的组件可以使用 `css-module`，每次版本都是新的 className，有效防止篡改。

在线换主题的插件主要是由通过在浏览器中编译 less 来实现的，首先他找到项目所有的 less，并且将其中带有 less 的变量的选择器抽出。组合成一个新的 less，也就是 color.less，并且在浏览器中通过 less.js 来编译他，然后覆盖掉原本的属性。它是由以下三个步骤完成的：

## 合并 less

这个功能主要靠一个插件来实现，`antd-pro-merge-less`，这个插件会扫描 src 中所有的 less，并且将其合并为一个 `./temp/ant-design-pro.ess`， 这个插件也是问题最多的插件，会造成部分 less 的引用失效，

## 转化 css-module

但是作为一个换主题的插件，要保证类名进行是固定的，但是又不能重复。我们进行了两个处理。首先自定义了类名。利用 `css-module` 的 api `getLocalIdent` 可以很容易的做到这件事情。这是 pro 的处理方式。

```tsx | pure
const getLocalIdent = (context, localIdentName, localName) => {
  if (
    context.resourcePath.includes('node_modules') ||
    context.resourcePath.includes('ant.design.pro.less') ||
    // umi 的 global.less 约定不使用 css-module
    context.resourcePath.includes('global.less')
  ) {
    return localName;
  }

  // 将 uuid 的类名转化为 antd-pro-文件路径的样式。
  // 类似.antd-pro-components-global-footer-index-links
  const match = context.resourcePath.match(/src(.*)/);
  if (match && match[1]) {
    const antdProPath = match[1].replace('.less', '');
    const arr = slash(antdProPath)
      .split('/')
      .map((a) => a.replace(/([A-Z])/g, '-$1'))
      .map((a) => a.toLowerCase());
    return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
  }
  return localName;
};
```

这样只要抽取 less 的时候通过同样的方式生成类名就可以保证两者是相同的.

> 这里使用了 [`postcss-less-engine`](https://www.npmjs.com/package/postcss-less-engine)，可以将 less 生成语法树，并且将其修改。

## 抽取 less 变量

这一步是通过 `antd-theme-webpack-plugin` 来做到的。它通过遍历 less 的语法树，抽取配置中所有拥有 less 变量的选择器，并且将其组合成一个 color.less 的文件。[antd-theme-generator](git://github.com/mzohaibqc/antd-theme-generator) 可以查看具体实现。

抽取出 color.less 之后，通过 webpack 的能力在 build 生成的 html 中加入 less 的引入。默认为

```html
<script
  type="text/javascript"
  src="https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js"
></script>
```

需要更换主题时通过调用 `window.less.modifyVars`， 即可编译引用的 less。

```tsx | pure
// 因为编译时间过长，并且会堵塞渲染，请一定要增加提示。
window.less
  .modifyVars({
    '@primary-color': primaryColor,
  })
  .then(() => {
    // 编译成功
  })
  .catch(() => {
    // 编译失败
  });
```

## 现有的问题

使用以上的方案可以实现在线换主题的功能，但是同时引入了一些新的问题。所以我们并不推荐在生产环境使用它。Pro v4 中将会对他再次完善。

首先 `antd-pro-merge-less` 会造成部分的 less 的引入失效。而且很难排查。编译，合并抽取 less 会造成开发中热更新速度变慢，或者卡死。这些都会影响开发体验。其次在浏览器中编译 less 并不是一个很好的方案，less 的编译会造成的浏览器主进程的卡顿，表现出来则是整个页面卡顿。体验非常差。

`antd-theme-webpack-plugin` 抽取变量的方式也有一些问题，编译出来的 css 在小细节方面表现并不好。远远不如在 webpack 编译中进行修改来的完美。

## 未来的改进

现在的在线换主题是个 demo 方案，有一些问题，并且不适合在正式环境中适应。在 v4 中我们会改进他的表现。首先使用更加优雅的方案进行 less 的合并和抽取。支持 less 的全特性，这样不会造成开发中的坑，反而降低影响开发体验。

`antd-theme-webpack-plugin` 中的抽取变量算法也会进行优化，加快速度，并且不再编译一次之后在进行抽取。在正式环境中，将会编译多份 css 的，并且动态 import css 的方式来进行换主题，更加顺滑。体验更好。同时将插件合并，现在三个插件耦合严重，并且不支持热插拔和降级方案。
