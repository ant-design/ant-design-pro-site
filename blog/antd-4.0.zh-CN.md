---
order: 6
title: 迁移 antd@4 指南
group:
  title: Blog
  path: /
nav:
  title: Blog
  path: /blog
  order: 3
time: 2020-01-16
---

antd@4-rc 版本发布已经有一段时间了（大概已经两周了），[官网](https://.ant.design) 也已同步放出。最为一个酷爱尝鲜的人，当然要第一时间安装升级。在咨询了豆酱老师得到了 API 不会修改的承诺之后，我已经在自己的项目中迁移完成。第一时间享受到了的 antd@4 各种优势。

### 🚀 升级点

首先对我而言最大的改进在于性能，select ，table 和 tree 已经全面支持了虚拟滚动，作为了早早的使用了 rc-tree 来解决性能问题的人，antd@4 中提供自然是更好不过了，毕竟自己写样式和动态是非常复杂的。

重写的 table 和 from 解决很多遗留的疑难杂症，具体可以查看豆酱老师的 antd@4 系列[文章](https://www.zhihu.com/people/smith-jiang/activities)，里面详细写了心路历程，在 form  中我们不需要使用 `getFieldDecorator` 和 `Form.create` 这两个方法。已 Pro 全区块为例，这两个方法分别出现了 87 和 22 次，在我自己的一个维护项目中找到了 142 个 `getFieldDecorator`，更不用说为了封装组件  `getFieldDecorator`   被当成 props 传来传去的造成的各种复杂性提升了。在 v4 中我们终于可以摆脱它了。

![](https://gw.alipayobjects.com/zos/antfincdn/xJ0Xhrkwvu/8EA666B0-76C7-47AC-B999-9EE15D043215.png#align=left&display=inline&height=399&name=&originHeight=1800&originWidth=2880&status=done&style=none&width=639)

瞧这都是删除的 diff

Table 现在也可以自动的获得宽度，并且拥有更加优秀的固定到侧边，已 [Pro-Table](https://procomponents.ant.design/components/table)为例，这里是 3.0 的 table。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/1nVM1VDeiz/a4ede9b8-1822-495d-9141-9c15107172a5.png)

在 4.0 中，不会发生高度错位的问题。

![image.png](https://gw.alipayobjects.com/zos/antfincdn/fyP4ANU8Eb/ea9962b9-a317-48b6-a37a-47b6eef9664a.png)

### 🚚 迁移方法

antd@4 变得更加多才多艺，带来了巨量的提升，那我们怎么才能使用到这么棒的 4.0 呢 , 其实很简单，Pro 已经全部迁移了[一把](https://github.com/ant-design/pro-blocks/issues/145) 。官方贴心的为我们提供了 `codemod-v4`，使用起来也是非常简单。

```shell
# 通过 npx 直接运行
npx -p @ant-design/codemod-v4 antd4-codemod src

# 或者全局安装
# 使用 npm
npm i -g @ant-design/codemod-v4
# 或者使用 yarn
yarn global add @ant-design/codemod-v4

# 运行
antd4-codemod src
```

值得注意的是 如果项目中使用了 `<Icon type={type} />`  会转化成 `LegacyIcon`，这里需要检查一下，如果你不是组件库你一定是不需要 `LegacyIcon`，迁移之后一定要删除它，不然会造成图标文件被全量打入，它可是有  540K 左右的大小。

为了更加的语义化，icon 将从 i 标签修改为 span 标签，改完之后需要记得去查看一下有没有类似 `i{}`，`i.anticon` 等用法，如果有可以修改为 `span{}`, `span.antion` 来保证迁移完成的样式问题。

另外由于 form 不兼容，codemod 不会自动帮你迁移到新的写法， 但是迁移到兼容包 `@ant-design/compatible` 方便在和新版本一起使用，而不用完全迁移。兼容包中 `ant-from` 类名将会更新为 `ant-legacy-form` ，如果你修改了 form 的默认样式记得检查一下，并且修改它。

如果碰到表单无法撑开的问题可以加入下面的代码：

```css
:global {
  .ant-legacy-form-item .ant-legacy-form-item-control-wrapper {
    width: 100%;
  }
}
```

### 💎 Pro 中使用

Pro 在第一时间也迁移了 antd@4 ，我们只需要在 create umi 中选择 ant-design-pro，即可获得最新的 4.0 分支代码。

```bash
❯❯❯ create-umi
? Select the boilerplate type ant-design-pro
? 🤓 Which language do you want to use? TypeScript
? 🦄 Want to use better and faster antd? Yes
>
> 使用 antd 4.0 可能会有一些兼容性问题，阅读下面的文档了解具体的改动
> There may be some compatibility issues when using antd 4.0. Read the following documents for specific changes
> https://next.ant.design/docs/react/migration-v4-cn
>
```

如果你想获得迁移到新的版本，可以按照上面的文档描述实现，但是 Pro 中支持通过设置 icon 配置菜单图标，在 4.0 中将无法得到支持，所以我们提供了相应的[插件](https://github.com/umijs/umi-plugin-antd-icon-config)来保留此功能。

使用方式如下 :

```bash
yarn add umi-plugin-antd-icon-config -D
```

并且在 config.ts 中设置

```tsx | pure
export default {
  plugins: [['umi-plugin-antd-icon-config', {}]],
};
```

无痛迁移 antd@4 就是这么简单。所有的官方区块也已经支持了 antd@4，请大家安心使用。

> 由于 4.0 的 icon 有一些删改，如果发现图标消失，请在 antd 官网中寻找合适的进行替换。

### ✨ 一个预告

Pro 4 已经发布有一些时间了，在内外部的各种实践中我们期望可以探索出一套最佳实践，[sorrycc](https://github.com/sorrycc/blog/issues/90)  的文章中做了很深的思考。接下来我们会发布我们的解决方案。敬请期待！
