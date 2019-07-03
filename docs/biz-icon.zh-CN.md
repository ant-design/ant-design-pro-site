---
order: 12
title: 业务图标
type: 进阶
---

通常情况下，你可以通过 Ant Design 提供的 `<Icon />` 图标组件来使用 [Ant Design 官方图标](http://ant.design/components/icon-cn/)。基本使用方式如下：

```jsx
<Icon type="heart" style={{ fontSize: '16px', color: 'hotpink' }} />
```

如果你没有在 Ant Design 官方图标中找到需要的图标，可以到 [iconfont.cn](http://iconfont.cn/) 上采集并生成自己的业务图标库，再进行使用。

## 一、生成图标库代码

首先，搜索并找到你需要的图标，将它采集到你的购物车里，在购物车里，你可以将选中的图标添加到项目中（没有的话，新建一个），后续生成的资源/代码都是以项目为维度的。

> 如果你已经有了设计稿，只是需要生成相关代码，可以上传你的图标后，再进行上面的操作。

<img width="600" alt="账户相关布局" src="https://gw.alipayobjects.com/zos/rmsportal/jJQYzRyqVFBBamUOppXH.png" />

<br />

来到刚才选中的项目页，点击『生成代码』的链接，会在下方生成不同引入方式的代码，下面会分别介绍。

<img width="600" alt="账户相关布局" src="https://gw.alipayobjects.com/zos/rmsportal/DbDSgiRukSANKWyhULir.png" />

## 二、引入

有三种引入方式供你选择：SVG Symbol、Unicode 及 Font class。我们推荐在现代浏览器下使用 SVG Symbol 方式引入。

### SVG Symbol

SVG 符号引入是现代浏览器未来主流的图标引入方式。其方法是预先加载符号，在合适的地方引入并渲染为矢量图形。有如下特点：

- 支持多色图标，不再受到单色图标的限制
- 通过一些技巧，支持像字体那样，通过 `font-size`、`color` 来调整样式
- 支持 IE 9+ 及现代浏览器

一般使用步骤如下：

1. 切换到 Symbol 页签，复制项目生成的地址代码：

```
//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js
```

2. 加入图标样式代码，如果没有特殊的要求，你可以直接复用 Ant Design 图标的样式

```css
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.125em;
}
```

3. 挑选相应图标并获取类名，应用于页面

```html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#icon-ali-pay"></use>
</svg>
```

你也可以通过使用 Ant Design 图标组件提供的 `Icon.createFromIconfontCN({...})` 方法来更加方便地使用图标，使用方式如下：

1. 配置项目地址，创建图标组件。[详细用法](https://ant.design/components/icon/#API)

```jsx
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js',
});

export default IconFont;
```

2. 之后可以像使用 `<Icon />` 组件一样方便地使用，支持配置样式

```jsx
<IconFont type="icon-ali-pay" style={{ fontSize: '16px', color: 'lightblue' }} />
```

### Unicode

这是最原始的方式，需要三步来完成引入：

1. 拷贝项目生成的字体库代码，你可以新建一个样式文件来放置图标相关的样式。

   ```css
   @font-face {
     font-family: 'iconfont';
     src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot');
     src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix') format('embedded-opentype'),
       url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff') format('woff'),
       url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf') format('truetype'), url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont')
         format('svg');
   }
   ```

2. 加入图标样式代码，如果没有特殊的要求，你可以直接复用 Ant Design 图标的样式。

   ```css
   .iconfont {
     display: inline-block;
     font-style: normal;
     vertical-align: baseline;
     text-align: center;
     text-transform: none;
     line-height: 1;
     text-rendering: optimizeLegibility;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     &:before {
       display: block;
       font-family: 'iconfont' !important; /* 注意与 font-face 中的匹配 */
     }
   }
   ```

3. 在项目中鼠标移动到要用的图标上，点击『复制代码』，就得到了图标对应的字体编码，现在可以直接引入了：

   ```html
   <i class="iconfont">&#xe66b;</i>
   ```

### Font Class

这种方式只是在上一种方式的基础上，给每个图标对应设置了一个语义化的类名，方便使用及后期维护。

1. 切换到 Font class 页签，在页面头部引入下面生成的 css 代码：

```html
//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css
```

> 如果不喜欢标签引入的方式，也可以直接拷贝上面链接中的代码到你的样式文件中。如果不喜欢网站默认生成的类名，自己重写这部分代码即可，比如：

    ```diff
    - .icon-ali-pay:before { content: "\e66b"; }              // 修改前
    + .monitor-icon-alipay:before { content: "\e66b"; }       // 修改后
    ```

2. 这时你可以选择拷贝图标对应代码（就是类名，如果类名被重写过，这里记得用修改后的），直接使用：

```html
<i class="iconfont icon-ali-pay"></i>
```

不过我们更推荐将它封装一下：

```js
import React from 'react';

const BizIcon = props => {
  const { type } = props;
  return <i className={`iconfont icon-${type}`} />;
};
export default BizIcon;
```

现在可以更加方便地使用：

```jsx
<BizIcon type="ali-pay" />
```

Unicode 和 Font Class 本质上就是字体，你可以通过一些字体的样式属性去控制这种图标的展现，同时浏览器兼容性很好，但不支持多色图标。

> 相关内容可以参考：
>
> - [iconfont.cn 代码使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code)
> - [Web 设计新趋势: 使用 SVG 代替 Web Icon Font](https://io-meter.com/2014/07/20/replace-icon-fonts-with-svg/)
