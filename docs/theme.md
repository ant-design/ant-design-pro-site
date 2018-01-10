---
order: 14
title:
  en-US: Theme 
  zh-CN: 更换主题 
type: 进阶
---

我们基于 Ant Design 视觉风格搭建了 Ant Design Pro，这套风格经过设计师的精心调配，适合大多数中后台项目。如果对视觉风格有额外的要求，推荐使用以下的方式进行定制。

## 主题定制

我们基于 Ant Design React 进行开发，完全支持官方提供的 less 变量定制功能，具体方式如下：

在脚手架目录中找到 `src/theme.js` 如下。

```js
// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
module.exports = {
  'font-size-base': '14px',
  'badge-font-size': '12px',
  'btn-font-size-lg': '@font-size-base',
  'menu-dark-bg': '#00182E',
  'menu-dark-submenu-bg': '#000B14',
  'layout-sider-background': '#00182E',
  'layout-body-background': '#f0f2f5',
};
```

在 [所有变量表](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less) 找到需要修改的变量，修改后启动 `npm start`，就可以在你的应用界面看到效果了。

更多方式可以参考官方文档：[定制主题](http://ant.design/docs/react/customize-theme-cn)。

> 小技巧：你可以把以上的主题配置文件 `theme.js` 发布成单独的 npm 包来引入，方便不同项目之间的复用。
> 在 `.webpackrc` 中修改 `"theme": "./node_modules/your-package/theme.js"` 为相应路径即可。

## 样式覆盖

Ant Design 的通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 [样式](/docs/style) 章节来覆盖样式。

### 全局覆盖组件

比如在 `src/index.less` 里修改所有标签的字体大小。

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

## 官方主题

目前 Ant Design Pro 暂时只有一套默认主题，我们计划在之后推出更多官方主题以满足个性化的需求，敬请期待。
