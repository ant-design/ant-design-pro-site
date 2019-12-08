---
order: 14
title: 更换主题
type: 进阶
---

我们基于 Ant Design 视觉风格搭建了 Ant Design Pro，这套风格经过设计师的精心调配，适合大多数中后台项目。如果对视觉风格有额外的要求，推荐使用以下的方式进行定制。

## 主题定制

我们基于 Ant Design React 进行开发，完全支持官方提供的 less 变量定制功能. 你可以在脚手架目录中找到 `config/config.ts` 代码类似这样:

```js
...
theme: {
  'font-size-base': '14px',
  'badge-font-size': '12px',
  'btn-font-size-lg': '@font-size-base',
  'menu-dark-bg': '#00182E',
  'menu-dark-submenu-bg': '#000B14',
  'layout-sider-background': '#00182E',
  'layout-body-background': '#f0f2f5',
};
...
```

在[变量表](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)中找到需要修改的变量，然后`npm start`，您可以在应用界面中看到效果。

更多方式可以参考官方文档：[定制主题](https://ant.design/docs/react/customize-theme-cn)。

## 样式覆盖

Ant Design 的通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 [样式](/docs/style) 章节来覆盖样式。

### 全局覆盖组件

比如在 `src/global.less` 里修改所有标签的字体大小。

```less
// src/index.less
:global {
  .ant-tag {
    font-size: 12px;
  }
}
```

### 单独覆盖指定组件

```less
// sample.less
.customTag {
  font-size: 18px;
}
```

```jsx
import styles from './sample.less';

...

return <Tag className={styles.customTag}>定制标签</Tag>;
```

> 我们不推荐进行样式覆盖，一是默认主题和组件是经过了设计师精心调节，强行覆盖可能会影响整体效果；二是覆盖代码可能因为组件库版本升级而失效。

## 在线切换主题

pro 中提供了一个可以在线切换主题和布局的 设置抽屉，使用这个抽屉可以很方便的查看更换主题的效果，无需重启脚手架。

为了方便预览，设置中的配置项会被保存在地址栏中，你可以将其拷贝给他人，分享效果。

> 由于 react-router 的特性，地址栏的参数可能被清空。

您一旦确定了这个配置，可以点击 拷贝代码 按钮将其拷贝，并在 `src/defaultSetting.ts` 中覆盖默认设置。这样您可以将该主题发布和部署。

[`src/defaultSetting.ts`](https://github.com/ant-design/ant-design-pro/blob/master/src/defaultSettings.ts) 内容如下：

```js
module.exports = {
  navTheme: 'dark', // 菜单的主题
  primaryColor: '#1890FF', // Ant Design 的主色调
  layout: 'sidemenu', // 菜单的布局，值为 sidemenu 菜单显示在左侧，值为 topmenu 菜单显示在顶部
  contentWidth: 'Fluid', // 内容的布局 Fixed 为定宽到1200px ，Fluid 为流式布局。
  fixedHeader: false, // 固定页头
  autoHideHeader: false, // 下滑时自动隐藏页头
  fixSiderbar: false, // 固定菜单
};
```

> 具体实现看这里 [动态主题](/docs/dynamic-theme-cn/)
