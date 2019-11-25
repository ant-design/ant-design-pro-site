---
order: 4
title: 新增页面
type: 开发
---

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

> 需要新建 Landing Page [请查看](https://landing.ant.design/docs/use/pro-cn)

## 一、新增 js、less 文件

在 src / pages 下创建新的 js，less 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件。

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

为了更好的演示，我们初始化`NewPage.js`的内容如下：

```jsx
export default () => {
  return <div>New Page</div>;
};
```

暂时不向本文档中的样式文件添加内容，您也可以尝试自己添加内容。

样式文件默认使用[CSS Modules](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)，如果需要，可以导入[antd less 变量](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 在文件的头部：

```less
@import '~antd/lib/style/themes/default.less';
```

这样可以轻松获取 antd 样式变量并在文件中使用它们，这可以保持保持页面的一致性，并有助于实现自定义主题。

## 二、将文件加入菜单和路由

加入菜单和路由的方式请参照 [路由和菜单 - 添加路由/菜单](/docs/router-and-nav#添加路由/菜单) 中的介绍完成。加好后，访问 `http://localhost:8000/#/new` 就可以看到新增的页面了。

<img alt="新增页面" src="https://gw.alipayobjects.com/zos/rmsportal/xZIqExWKhdnzDBjajnZg.png" />

<br />

## 三、新增 model、service

布局及路由都配置好之后，回到之前新建的 `NewPage.js`，可以开始写业务代码了！如果需要用到 [dva](https://github.com/dvajs/dva/) 中的数据流，还需要在 `src/models` `src/services` 中建立相应的 model 和 service，具体可以参考脚手架内置页面的写法。
