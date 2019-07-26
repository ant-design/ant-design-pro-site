---
order: 6
title: 修改样式
type: 开发
---

这篇文档主要针对如何在项目中使用和规划样式文件进行介绍，如果想获取基础的 CSS 知识或查阅属性，可以参考 [MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference)。

## less

Ant Design Pro 默认使用 less 作为样式语言，建议在使用前或者遇到疑问时学习一下 [less](http://lesscss.org/) 的相关特性。

## CSS Modules

在样式开发过程中，有两个问题比较突出：

- 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
- 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标识，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多。

为了解决上述问题，我们的脚手架默认使用 CSS Modules 模块化方案，先来看下在这种模式下怎么写样式。

```tsx
// example.ts
import styles from './example.less';
export default ({ title }) => <div className={styles.title}>{title}</div>;
```

```css
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}
```

用 less 写样式好像没什么改变，只是类名比较简单（实际项目中也是这样），js 文件的改变就是在设置 className 时，用一个对象属性取代了原来的字符串，属性名跟 less 文件中对应的类名相同，对象从 less 文件中引入。

在上面的样式文件中，`.title` 只会在本文件生效，你可以在其他任意文件中使用同名选择器，也不会对这里造成影响。不过有的时候，我们就是想要一个全局生效的样式呢？可以使用 `:global`。

```css
// example.less
.title {
  color: @heading-color;
  font-weight: 600;
  margin-bottom: 16px;
}

/* 定义全局样式 */
:global(.text) {
  font-size: 16px;
}

/* 定义多个全局样式 */
:global {
  .footer {
    color: #ccc;
  }
  .sider {
    background: #ebebeb;
  }
}
```

CSS Modules 的基本原理很简单，就是对每个类名（非 :global 声明的）按照一定规则进行转换，保证它的唯一性。如果在浏览器里查看这个示例的 dom 结构，你会发现实际渲染出来是这样的：

```html
<div class="title___3TqAx">title</div>
```

类名被自动添加了一个 hash 值，这保证了它的唯一性。

除了上面的基础知识，还有一些关键点需要注意：

- CSS Modules 只会对 `className` 以及 `id` 进行转换，其他的比如属性选择器，标签选择器都不进行处理，推荐尽量使用 className。
- 由于不用担心类名重复，你的 className 可以在基本语意化的前提下尽量简单一点儿。

上面只对 CSS Modules 进行了最基础的介绍，有兴趣可以参考其他文档：

- [github/css-modules](https://github.com/css-modules/css-modules)
- [CSS Modules 用法教程](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)
- [CSS Modules 详解及 React 中实践](https://github.com/camsong/blog/issues/5)

## 样式文件类别

在一个项目中，样式文件根据功能不同，可以划分为不同的类别。

### src/index.less

全局样式文件，在这里你可以进行一些通用设置，比如脚手架中自带的：

```css
html,
body,
:global(#root) {
  height: 100%;
}

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// temporary font size patch
:global(.ant-tag) {
  font-size: 12px;
}
```

> 因为 antd 中会自带一些全局设置，如字号，颜色，行高等，所以在这里，你只需要关注自己的个性化需求即可，不用进行大量的 reset。

### src/utils/utils.less

这里可以放置一些工具函数供调用，比如清除浮动 `.clearfix`。

### 模块样式

针对某个模块/页面生效的文件。

#### 通用模块级

例如 `src/layouts/BasicLayout.less`，里面包含一些基本布局的样式，被 `src/layouts/BasicLayout.ts` 引用，项目中使用这种布局的页面就不需要再关心整体布局的设置。如果你的项目中需要使用其他布局，也建议将布局相关的 js 和 less 放在这里 `src/layouts`。

#### 页面级

具体页面相关的样式，例如 `src/routes/Dashborad/Monitor.less`，里面的内容仅和本页面的内容相关。一般情况下，如果不是页面内容特别复杂，有了前面全局样式、通用模块样式的配合，这里要写的应该不多。

#### 组件级

这个也很简单，就是组件相关的样式了，有一些在页面中重复使用的片段或相对独立的功能，你可以提炼成组件，相关的样式也应该提炼出来放在组件中，而不是混淆在页面里。

> 以上样式类别都是针对独立的样式文件，有时样式配置特别简单，也没有重复使用，你也可以用内联样式 `style={{ ... }}` 来设置。

## 覆盖组件样式

由于业务的个性化需求，我们经常会遇到需要覆盖组件样式的情况，这里举个简单的例子。

antd Select 在多选状态下，默认会展示所有选中项，这里我们给它加一个限制高度，超过此高度就出滚动条。

```js
// TestPage.ts
import { Select } from 'antd';
import styles from './TestPage.less';
const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

ReactDOM.render(
  <Select
    mode="multiple"
    style={{ width: 300 }}
    placeholder="Please select"
    className={styles.customSelect}
  >
    {children}
  </Select>,
  mountNode,
);
```

```css
// TestPage.less
.customSelect {
  :global {
    .ant-select-selection {
      max-height: 51px;
      overflow: auto;
    }
  }
}
```

方法很简单，有两点需要注意：

- 引入的 antd 组件类名没有被 CSS Modules 转化，所以被覆盖的类名 `.ant-select-selection` 必须放到 `:global` 中。
- 因为上一条的关系，覆盖是全局性的。为了防止对其他 Select 组件造成影响，所以需要包裹额外的 className 限制样式的生效范围。
