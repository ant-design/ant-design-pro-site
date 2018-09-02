---
order: 4
title: New Page
type: Introduction
---

This "page" refers to a module that is configured with a route and can be directly accessed through a link. To create a new page, usually only a simple configuration is required on the scaffold.

---

## First, add js,less files

Create new js,less files under src/routes. If there are multiple related pages, you can create a new folder to place related files.

<img width="300" alt="New Page" src="https://gw.alipayobjects.com/zos/rmsportal/hjDyFTVOgRwDzAIHApMO.png" />

<br />

Style files are used by default [CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html), If needed, you can import [antd style variable file](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) in the head of the file:

```css
@import "~antd/lib/style/themes/default.less";
```

This makes it easy to get antd style variables and use them in your files, which helps to maintain the consistency of the page, and facilitate the implementation of custom themes.

## Second, add the files into menus,routes

To add them into menus and routes, refer to the description in [router-and-nav](/docs/router-and-nav). Then visit `http://localhost:8000/#/new` to see the new page.

<img alt="New Page" src="https://gw.alipayobjects.com/zos/rmsportal/xZIqExWKhdnzDBjajnZg.png" />

<br />

## Third, add model,service

After the layout and routes are configured, go back to the newly created `NewPage.js` and start writing business codes! If you need to use the data flow in [dva](https://github.com/dvajs/dva/), you also need to set the corresponding model and service in `src/models` and `src/services`. Refer to the writing of the built-in page of the scaffold for details.
