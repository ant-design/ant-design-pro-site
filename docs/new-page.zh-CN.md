---
order: 4
title: 新增页面 
type: 入门
---

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

---

## 一、新增 js、less 文件

在 `src/pages` 下新建页面的 js 及 less 文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

```diff
config
src
  models
  pages
+   NewPage.js
+   NewPage.less
  ...
...
package.json
```

为了更好的说明，我们初始化 `NewPage.js` 的内容如下：

```jsx
export default () => {
  return <div>New Page</div>
};
```

样式文件默认使用 [CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)，如果需要，你可以在样式文件的头部引入 [antd 样式变量文件](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)：

```css
@import "~antd/lib/style/themes/default.less";
```

这样可以很方便地获取 antd 样式变量并在你的文件里使用，有利于保持页面的一致性，也方便实现定制主题。

## 二、将文件加入菜单和路由

因为 Ant Design Pro 中使用的是 umi 的配置路由，所以你需要在配置文件 `config/router.config.js` 中添加对应的路由信息：

```diff
...
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
+     // new page
+     {
+       path: 'new',
+       name: 'new',
+       icon: 'plus-square',
+       component: 'NewPage',
+     },
...
```

其中 `icon` 和 `name` 是菜单组件中需要的配置，在菜单组件中也会读取 `config/router.config.js` 来添加相关逻辑。

在 Ant Design Pro 2.0 中我们实现了国际化，所以你还需要在 `src/locales/zh-CN.js` 和 `src/locales/en-US` 中添加相关的文案：

```diff
// zh-CN.js
export default {
  'navbar.lang': 'English',
+ 'menu.new': '新页面',
  'menu.home': '首页',
  ...
```

```diff
// en-US.js
export default {
  'navbar.lang': '中文',
+ 'menu.new': 'New Page',
  'menu.home': 'Home',
  ...
```

加好后，访问 `http://localhost:8000/new` 就可以看到新增的页面了。

<img alt="新增页面" src="https://gw.alipayobjects.com/zos/rmsportal/jhelZqMljCvSflfeANrG.png" />

更多关于路由细节参照 [路由和菜单](/docs/router-and-nav) 中的介绍。

## 三、新增 model、service

布局及路由都配置好之后，回到之前新建的 `NewPage.js`，可以开始写业务代码了！如果需要用到 [dva](https://github.com/dvajs/dva/) 中的数据流，还需要在 `src/models` `src/services` 中建立相应的 model 和 service，具体可以参考脚手架内置页面的写法。
