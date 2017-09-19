---
order: 5
title: 新增页面
type: 入门
---

这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。

---

## Step1 新增 js、less 文件

在 `src/routes` 下新建页面的 js 及 less 文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。

<img width="300" alt="新增页面" src="https://gw.alipayobjects.com/zos/rmsportal/hjDyFTVOgRwDzAIHApMO.png" />

<br />

样式文件默认使用 CSS Modules，如果需要，你可以在样式文件的头部引入 [antd 样式变量文件](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)：

```css
@import "~antd/lib/style/themes/default.less";
```

这样可以很方便地获取 antd 样式参数并在你的文件里使用，有利于保持页面的一致性，也方便实现定制主题。

## Step2 将文件加入菜单、路由

脚手架可以自动从信息架构数据（页面关系数据）生成菜单和路由，我们内置了三种布局模式 —— 基础布局，账户相关布局（无页头和菜单）以及空白模式，前两种的样式如下所示：

<img width="600" alt="基础布局" src="https://gw.alipayobjects.com/zos/rmsportal/nIaDNgQvbSHOzNtLTuHB.png" />

<img width="600" alt="账户相关布局" src="https://gw.alipayobjects.com/zos/rmsportal/SxlaqGtdzMtEhFjMuuGx.png" />

<br />

如果你的页面布局属于其中的一种，你只需要添加页面相关的数据，就可以完成菜单及路由的设置。比如我们刚才新建的 `NewPage` ，它使用基本布局 `BasicLayout`。打开文件 `src/common/nav.js`，添加你的页面信息（和 `Dashboard` 平级）：

```js
{
  name: '新页面',             // 页面名称，会展示在菜单栏中
  path: 'new',               // 匹配的路由
  icon: 'file',              // 页面图标，会展示在菜单栏中
  component: NewPage,        // 渲染的组件，也就是刚才新建的 NewPage，记得在页头引入 `import NewPage from '../routes/NewPage';`
}
```

菜单和路由就自动加好了，访问 `http://localhost:8000/#/new` 就可以看到新增的页面了。

<img width="600" alt="新增页面" src="https://gw.alipayobjects.com/zos/rmsportal/xZIqExWKhdnzDBjajnZg.png" />

<br />

> 如果你需要的布局并没有被内置，可以在 `src/layouts` 下新建你的布局，然后参照 `BasicLayout` `UserLayout` 那样在 `src/common/nav.js` 中使用，自动生成菜单的方式可以参考 `src/layouts/BasicLayout.js`。

## Step3 新增 model、service

布局及路由都配置好之后，回到之前新建的 `NewPage.js`，可以开始写业务代码了！如果需要用到 [dva](https://github.com/dvajs/dva/) 中的数据流，还需要在 `src/models` `src/services` 中建立相应的 model 和 service，具体可以参考脚手架内置页面的写法。

