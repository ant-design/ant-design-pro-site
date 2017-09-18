---
order: 10
title: 业务图标
type: 进阶
---

如果你没有在 [antd Icon](https://ant.design/components/icon-cn/) 中找到需要的图标，可以到 [iconfont.cn](http://iconfont.cn/) 上采集并生成自己的业务图标库，再进行使用。

---

## Step1 生成图标库代码

<div class="preview-image-boxes clearfix">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/jJQYzRyqVFBBamUOppXH.png" alt="" />
</div>

首先，搜索并找到你需要的图标，将它采集到你的购物车里，在购物车里，你可以将选中的图标添加到项目中（没有的话，新建一个），后续生成的资源/代码都是以项目为维度的。

> 如果你已经有了设计稿，只是需要生成相关代码，可以上传你的图标后，再进行上面的操作。

<br />

<div class="preview-image-boxes clearfix">
  <img src="https://gw.alipayobjects.com/zos/rmsportal/DbDSgiRukSANKWyhULir.png" alt="" />
</div>

来到刚才选中的项目页，点击『生成代码』的链接，会在下方生成三种引入方式的代码，下面会分别介绍。

## Step2 引入

现在有三种引入方式供你选择：Unicode、Font class 以及 Symbol 方式。

### Unicode

这是最原始的方式，需要三步来完成引入：

1. 拷贝项目生成的字体库代码，你可以新建一个样式文件来放置图标相关的样式。

	```css
	@font-face {
	  font-family: 'iconfont';
	  src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot');
	  src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff') format('woff'),
	  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont') format('svg');
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
	    font-family: "iconfont" !important;  /* 注意与 font-face 中的匹配 */
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

	> 如果不喜欢标签引入的方式，也可以直接拷贝上面链接中的代码到你的样式文件中。如果不喜欢网站默认生成的类名，自己重写这部分代码即可(使用时注意对应)。

	> ```css
	.your-prefix-ali-pay:before { content: "\e66b"; }
	```

2. 拷贝图标对应代码（类名），直接使用：

	```html
	<i class="iconfont icon-ali-pay"></i>
	```

Unicode 和 Font Class 本质上就是字体，你可以通过一些字体的样式属性去控制这种图标的展现，同时浏览器兼容性很好，但不支持多色图标。

### Symbol

这种方式的本质是引入一个包含多个 Symbols 的 SVG 集合，再通过预设好的标识引用其中的某一部分。

1. 切换到 Symbol 页签，引入下面生成的 js 代码

	```html
	  //at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js
	```

2. 加入通用样式代码

	```css
	.icon {
	  width: 1em; height: 1em;
	  vertical-align: -0.15em;
	  fill: currentColor;
	  overflow: hidden;
	}
	```

3. 使用时引入这段代码，同样的，锚点名可以 hover 到图标上复制：

	```html
	<svg class="icon" aria-hidden="true">
	  <use xlink:href="#icon-ali-pay"></use>
	</svg>
	```

Symbol 方式可以支持多色图标，但仅兼容 ie9+，及现代浏览器。

如果需要在原来的基础上新增图标，只需要将新图标添加到原来的项目中，重新生成字体库链接或 Symbol 代码即可。[iconfont.cn] 网站上也有详细的 [使用介绍](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code) 可以参考。
