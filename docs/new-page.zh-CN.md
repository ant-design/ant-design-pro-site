---
order: 4
title: 新增页面
type: 开发
---

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

> 需要新建 Landing Page [请查看](https://landing.ant.design/docs/use/pro-cn)

## 一、新增 js、less 文件

在 `src/pages` 下新建页面的 js 及 less 文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

<img width="300" alt="新增页面" src="https://gw.alipayobjects.com/zos/rmsportal/hjDyFTVOgRwDzAIHApMO.png" />

<br />

样式文件默认使用 [CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)，如果需要，你可以在样式文件的头部引入 [antd 样式变量文件](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)：

```css
@import '~antd/lib/style/themes/default.less';
```

这样可以很方便地获取 antd 样式变量并在你的文件里使用，有利于保持页面的一致性，也方便实现定制主题。

## 二、将文件加入菜单和路由

加入菜单和路由的方式请参照 [路由和菜单 - 添加路由/菜单](/docs/router-and-nav#添加路由/菜单) 中的介绍完成。加好后，访问 `http://localhost:8000/#/new` 就可以看到新增的页面了。

<img alt="新增页面" src="https://gw.alipayobjects.com/zos/rmsportal/xZIqExWKhdnzDBjajnZg.png" />

<br />

## 三、新增 model、service

布局及路由都配置好之后，回到之前新建的 `NewPage.js`，可以开始写业务代码了！如果需要用到 [dva](https://github.com/dvajs/dva/) 中的数据流，还需要在 `src/models` `src/services` 中建立相应的 model 和 service，具体可以参考脚手架内置页面的写法。
