---
order: 4
title: New Page
type: Development
---

This "page" refers to a module that is configured with a route and can be directly accessed through a link. To create a new page, usually only a simple configuration is required on the scaffold.

> If you want to create new landing page, check [this link](https://landing.ant.design/docs/use/pro-cn)

## First, add js,less files

Create new js,less files under src/pages. If there are multiple related pages, you can create a new folder to place related files.

```diff
config
src
  models
  pages
+   NewPage.ts
+   NewPage.less
  ...
...
package.json
```

For better Demonstration, we initialize the contents of `NewPage.ts` as follows:

```jsx
export default () => {
  return <div>New Page</div>;
};
```

Temporarily do not add content to the style files in this document, you can also try to add them yourself.

Style files are used by default [CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html), If needed, you can import [antd style variable file](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) in the head of the file:

```css
@import '~antd/lib/style/themes/default.less';
```

This makes it easy to get antd style variables and use them in your files, which helps to maintain the consistency of the page, and facilitate the implementation of custom themes.

## Second, add the files into menus,routes

Because Ant Design Pro uses the configuration route of umi, you need to add the corresponding routing information in the configuration file `config/config.ts`:

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

Where `icon` and `name` are the required configuration in the menu component, and `config/config.ts` is also read in the menu component to add the relevant logic.

We implemented internationalization in Ant Design Pro 2.0, so you also need to add the relevant copy in `src/locales/zh-CN.ts` and `src/locales/en-US`:

```diff
// zh-CN.ts
export default {
  'navbar.lang': 'English',
+ 'menu.new': '新页面',
  'menu.home': '首页',
  ...
```

```diff
// en-US.ts
export default {
  'navbar.lang': '中文',
+ 'menu.new': 'New Page',
  'menu.home': 'Home',
  ...
```

Then visit `http://localhost:8000/new` to see the new page.

<img alt="New Page" src="https://gw.alipayobjects.com/zos/rmsportal/PNyWCgzHEynHvMSXxSQe.png" />

See the introduction in [Router and Nav](/docs/router-and-nav) for more details on routing.

## Third, add model,service

After the layout and routes are configured, go back to the newly created `NewPage.ts` and start writing business codes! If you need to use the data flow in [dva](https://github.com/dvajs/dva/), you also need to set the corresponding model and service in `src/models` and `src/services`. Refer to the writing of the built-in page of the scaffold for details.
