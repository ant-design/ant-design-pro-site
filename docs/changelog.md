---
order: 20
title:
  en-US: Changelog 
  zh-CN: 更新日志
type: 其他
---

### 0.3.0

`2017-11-20`

- 脚手架
  - 🌟 升级路由系统为 [Dynamic Router](https://pro.ant.design/docs/router-and-nav)，按需加载加速页面展现速度。[184](https://github.com/ant-design/ant-design-pro/pull/184) [@WhatAKitty](https://github.com/WhatAKitty)
  - 🌟 接入 [sentry.io](https://sentry.io/alipay-me/)，监控 js 报错，提高项目反馈度。 [b8a96c5](https://github.com/ant-design/ant-design-pro/commit/b8a96c5b853dc6aca16ec462655a875914292ddb)
  - 🐞 修复三级路由展示面包屑不正常的问题。[#128](https://github.com/ant-design/ant-design-pro/issues/128)
  - 🐞 修复重复点击当前激活菜单报 `Warning` 的问题。[#159](https://github.com/ant-design/ant-design-pro/issues/159)
  - 🐞 修复禁用代理模式在 Windows 下启动的问题。[#181](https://github.com/ant-design/ant-design-pro/issues/181)
  - 🐞 修复 `Lodash Debounce` 对 `window.onResize` 不生效的问题。[5cce044](https://github.com/ant-design/ant-design-pro/commit/5cce044192684535c93a23952ec831529b71f350)

- 组件
  - 🌟 保持组件样式独立性，移除 `antd v2-compatible-reset.less` 的依赖。[63b7645](https://github.com/ant-design/ant-design-pro/commit/63b76456fd8a79f1f08edc0cbf6e00487793e6ce)
  - 🐞 修复 Timeline 组件数值读取错误的问题。[#130](https://github.com/ant-design/ant-design-pro/issues/130)
  - 🐞 重构 TagSelect `state` 状态处理，避免在多处使用场景下状态异常的问题。[#161](https://github.com/ant-design/ant-design-pro/issues/161)
  - 🐞 修复 Ellipsis 大量问题（排版错误、样式异常、单行死循环等）。[#167](https://github.com/ant-design/ant-design-pro/issues/167) [#212](https://github.com/ant-design/ant-design-pro/issues/212)
  - 🐞 升级打包工具，修复 `className` 重复导致样式展现错乱的问题。[#205](https://github.com/ant-design/ant-design-pro/issues/205)

### 0.2.2

`2017-11-09`

- 🌟 开放国际化的支持。[#120](https://github.com/ant-design/ant-design-pro/issues/120)
- 🌟 优化多处细节样式问题，使得整体观感更加精细。
- 脚手架
  - 🌟 优化网络请求错误的界面响应以及容错处理。[#82](https://github.com/ant-design/ant-design-pro/issues/82)
  - 🐞 修复三级菜单展开失效的问题。[#125](https://github.com/ant-design/ant-design-pro/pull/125)
- 组件
  - 🌟 分离组件样式，兼容非 CssModule 项目。[#85](https://github.com/ant-design/ant-design-pro/issues/85)
  - 🐞 修复 PageHeader 不支持 url 参数的问题。[#64](https://github.com/ant-design/ant-design-pro/issues/64)
  - 🐞 修复 HeaderSearch `onPressEnter` 方法获取不到参数的问题。[#131](https://github.com/ant-design/ant-design-pro/issues/131)
  - 🌟 新增多行省略文本组件 Ellipsis。[#133](https://github.com/ant-design/ant-design-pro/issues/133)

### 0.2.1

`2017-11-02`

- 🐞 修复组件包依赖错误以及 `module export` 异常的问题。[#73](https://github.com/ant-design/ant-design-pro/issues/73)
- 脚手架
  - 🐞 修复分析页饼状图位置偏移的问题。[#76](https://github.com/ant-design/ant-design-pro/issues/76)
  - 🐞 修复 Editable Table 编辑保存的问题。 [#68](https://github.com/ant-design/ant-design-pro/issues/68)
  - 📱 增加查询表格搜索表单的响应式支持。[9709268](https://github.com/ant-design/ant-design-pro/commit/97092686cfbcc69b29b1f038c18b17a98a25d8d5)

- 组件
  - 📱 优化 Pie 组件的响应式。[8d9b7cf](https://github.com/ant-design/ant-design-pro/commit/8d9b7cfd94bc45adb4b26e44ff9ec83ea760dacd) [84ebabf](https://github.com/ant-design/ant-design-pro/commit/84ebabf53daa609c830d331594dd03772bbf3599)


### 0.2.0

`2017-10-31`

- 📱 模板响应式全面优化升级。
- 🌟 模板整体设计细节全面优化升级。
- 脚手架
  - 🐞 修复了登出失效的问题。[#52](https://github.com/ant-design/ant-design-pro/issues/52)
  - 🐞 修复了监控页布局样式问题。 [#40](https://github.com/ant-design/ant-design-pro/issues/40)
- 组件
  - 🌟 优化了 PageHeader `logo` 尺寸。[0d177915](https://github.com/ant-design/ant-design-pro/commit/0d1779157883ad456b5efd0a04f2f50fb65db05c)
  - 🌟 优化了图表加载的显示效果。 [#33](https://github.com/ant-design/ant-design-pro/issues/33)
  - 🐞 修复了 Pie 图表响应式展示的标题样式问题。 [34027103](https://github.com/ant-design/ant-design-pro/issues/33#issuecomment-340271035)
  - 🐞 修复了雷达图在 safari 下样式超出的问题。 [39](https://github.com/ant-design/ant-design-pro/pull/39)

### 0.1.10

`2017-10-27`

💎 Ant Design Pro 的第一个版本。

我们提供了：

- 一个 React 技术栈的脚手架。
- 7 个标准化场景，22 个页面模板。
- 开发、调试、模拟数据、部署的一整套流程以及配套文案。
- 14 个精品组件。
