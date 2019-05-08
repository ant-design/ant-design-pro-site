---
order: 21
title: 更新日志
type: 其他
---

[旧版文档](http://03x.pro.ant.design/)

### 2.3.0

2.3 将会是 [Ant Design Pro](https://www.npmjs.com/package/ant-design-pro) 组件库的最后的一个版本，主要用于修正 ts 错误，此后将不接受组件库的功能添加。组件会迁移到 Ant Design 中这些组件会得到更加完善的支持与维护，Pro 中进行维护。在 Ant Design 中这些组件会得到更加完善的支持与维护，Pro 将会专注的做 Layout 和脚手架的工作。

#### 脚手架

- 增加了图编辑器的 demo。可以轻松的在 pro 中使用 g6。[#3810](https://github.com/ant-design/ant-design-pro/pull/3810)
- defaultSettings 新增了 menu.enableLocale 的配置，用于关闭菜单的全球化。[#3310](https://github.com/ant-design/ant-design-pro/pull/3310)
- defaultSettings 新增了 pwa 配置，用于关闭 pwa 功能。[#3508](https://github.com/ant-design/ant-design-pro/pull/3508)
- 增加 IconFont 组件、菜单图标可以使用自己的 IconFont 项目图标。[#3517](https://github.com/ant-design/ant-design-pro/pull/3517)
- 修复 Login 的 `onPressEnter` 在 IE11 中会触发两次的问题。[#3557](https://github.com/ant-design/ant-design-pro/pull/3557)
- 修复菜单项设置`hideInMenu` 为 `true` 时，面包屑无法显示的问题。[#3606](https://github.com/ant-design/ant-design-pro/pull/3606)
- 重写了权限控制模块。[#3587](https://github.com/ant-design/ant-design-pro/pull/3587)
- 修复网络过慢时会出现两个 loading 的问题。[#3746](https://github.com/ant-design/ant-design-pro/issues/3746)
- 修复 layout 中 menu 为空时，会获得另一个 layout menu 的问题。[#3724](https://github.com/ant-design/ant-design-pro/pull/3724)
- 修复在"顶部菜单布局"且内容区域宽度为“定宽”时，若屏幕尺寸小于 1200，顶部菜单右侧内容被遮挡的问题。[#3726](https://github.com/ant-design/ant-design-pro/pull/3726)

#### 组件

- 修复 PageHeader 在没有 `title` 的情况下，dom 不渲染的问题。[aa2f140](https://github.com/ant-design/ant-design-pro/commit/aa2f14059c576587fcee622061a0b711152ad0cb)
- 修复 TagCloud 样式覆盖的问题。[#3632](https://github.com/ant-design/ant-design-pro/pull/3632)
- NoticeIcon 移除了多余的参数，增加了一个查看更多的按钮。[#3439](https://github.com/ant-design/ant-design-pro/pull/3439)
- MiniProgress 增加 `targetLabel` props。[#3778](https://github.com/ant-design/ant-design-pro/pull/3778)
- 重写 Authorized 组建的判断逻辑。[#3813](https://github.com/ant-design/ant-design-pro/pull/3813)
- 修正了多处的 TypeScript 的类型错误。

### 2.2.0

在 下一个版本的 Pro 中，我们会逐步的删除所有的组件，这些组件将会加入的 Ant Design 中，正在路上的已经有:

- [Result](https://github.com/ant-design/ant-design/pull/14196)
- [PageHeader](https://github.com/ant-design/ant-design/pull/13637)
- [Statistic / Countdown](https://github.com/ant-design/ant-design/pull/14154)
- [Empty](https://github.com/ant-design/ant-design/pull/13651)

在 Ant Design 中这些组件会得到更加完善的支持与维护，Pro 将会专注的做 Layout 和脚手架的工作。

#### 脚手架

- 验证码按钮支持国际化。[#2810](https://github.com/ant-design/ant-design-pro/pull/2810)
- 修复在配置 `base : 'demo'`时，退出登录会跳转到错误的路径的 bug。[#2865](https://github.com/ant-design/ant-design-pro/pull/2865)
- 增加了 docker 镜像，可以通过 docker 镜像快速预览 Pro。[#2890)](https://github.com/ant-design/ant-design-pro/pull/2890)
- 支持了 PWA ，已经默认开启。[#2816](https://github.com/ant-design/ant-design-pro/pull/2816)
- prettier 现在在 windows 中也可以正确的运行。[ac86837](https://github.com/ant-design/ant-design-pro/commit/ac86837d20494f082ab39b1a52eabea3bc2ac81e)
- 增加了 gitpod，可以更加快速的预览 pro。[#3349](https://github.com/ant-design/ant-design-pro/pull/3349)
- 增加了一个新的配置 `title`，可以快速的配置 header title。[#3332](https://github.com/ant-design/ant-design-pro/pull/3332)
- 默认打开 tree-shaking。[#3350](https://github.com/ant-design/ant-design-pro/pull/3332)
- 默认关闭了 hardSource。[#3358](https://github.com/ant-design/ant-design-pro/pull/3358)

#### 组件

- NoticeIconTab 组件增加了 `conut` props 。[#2862](https://github.com/ant-design/ant-design-pro/pull/2862)。
- 修复 Login 组件在 children 为 object 的情况下报错的问题。[d97935](https://github.com/ant-design/ant-design-pro/commit/d9793524b7a1061cb4eb5887b12633716d796570)
- 修复了 `breadcrumbList` 不工作的 bug。[#2955](https://github.com/ant-design/ant-design-pro/pull/2955)
- 词云修复鼠标移过时变色的偏移并支持 Tooltip 显示数量。[#2896](https://github.com/ant-design/ant-design-pro/pull/2896)
- AvatarList 组件支持了 `maxLength` props。[#2984](https://github.com/ant-design/ant-design-pro/pull/2984)
- 修复 resetFields 对 TagSelect 组件不起作用的问题。[#3031](https://github.com/ant-design/ant-design-pro/pull/3031)
- 修复 HeaderSearch 不触发 onSearch 回调的问题。[#3227](https://github.com/ant-design/ant-design-pro/commit/31d63bc701890df3a487c2e7a5603b20fb50892f)
- NoticeIcon 增加了 LoadMore 支持。[#3221](https://github.com/ant-design/ant-design-pro/pull/3221)

### 2.1.1

#### 脚手架

- 增加了 `typescript` 支持，现在可以直接新建 tsx 文件来进行开发。[deb1433](https://github.com/ant-design/ant-design-pro/commit/deb14330ad5e5ba86df404fdb63021866ea93d4a)
- 增加了 `isUrl` 和 `fixedZero` 的测试。[#2600](https://github.com/ant-design/ant-design-pro/pull/2600)
- 修复了验证手机号码的错误正则。 [#2605](https://github.com/ant-design/ant-design-pro/pull/2605)
- 修复菜单在只有一级菜单时无法正确匹配的问题。[#2630](https://github.com/ant-design/ant-design-pro/issues/2630)
- 增加了 netlify 支持。[#2651](https://github.com/ant-design/ant-design-pro/pull/2651)
- 修复了菜单自动隐藏的 bug。[#2681](https://github.com/ant-design/ant-design-pro/pull/2681)
- e2e 测试支持自定义端口。[#2633](https://github.com/ant-design/ant-design-pro/issues/2633)

#### 组件

- Ellipsis 组件 `tooltip` 属性支持 `TooltipProps`。[#2713](https://github.com/ant-design/ant-design-pro/pull/2713)
- 修复图表 Gauge 中值显示的浮点数异常的问题。[#2682](https://github.com/ant-design/ant-design-pro/pull/2682)
- 更完善的 typescript 的支持。

### 2.1.0

`2018-10-14`

#### 脚手架

- 增加和完善了多处[文档](https://pro.ant.design/docs/getting-started-cn)。
- 修复退出登录不工作的问题。[#2157](https://github.com/ant-design/ant-design-pro/issues/2157)
- 增加一个环境变量 `APP_TYPE`，在非 pro 官网的环境下，默认不添加设置边栏。[8e28420](https://github.com/ant-design/ant-design-pro/commit/8e28420e0bb68d1cfc5fb3e6b3f943c043a2e770)
- 修复在白色主题下，logo 和 侧边栏边框样式错误的问题。[3472590](https://github.com/ant-design/ant-design-pro/commit/3472590fca1834f86126b6e2665e677e93f52eae) [ 57cb464](https://github.com/ant-design/ant-design-pro/commit/57cb464f9ea2e9b444f76451c422304cfa724249)
- 侧边栏现在可以单独滚动。 [#2191](https://github.com/ant-design/ant-design-pro/issues/2191)
- 修复注册成功之后报错的 bug。[de86a3](https://github.com/ant-design/ant-design-pro/commit/de86a30cc717ab8945e8fdb56604dbbac7f91b5e)
- 修复了未登录时不跳转到登录界面的问题。[#2157](https://github.com/ant-design/ant-design-pro/issues/2157)
- 修复在固定侧边菜单时，自动收起侧边栏后会留空白区域的问题。 [#2175](https://github.com/ant-design/ant-design-pro/issues/2175)
- 增加了 `繁体中文` 和 [`葡萄牙语`](https://github.com/ant-design/ant-design-pro/pull/2384) 支持。
- 增加了 layout 级别的测试。[#2499](https://github.com/ant-design/ant-design-pro/pull/2499)
- 增加了对 docker 的支持。[#2430](https://github.com/ant-design/ant-design-pro/pull/2430)
- 支持了 IE11。[88be0d2](https://github.com/ant-design/ant-design-pro/commit/88be0d2bed82e2b1c301069156132107707e308b)
- 重构了 AdvancedForm 的 render 方法。[5bcf89](https://github.com/ant-design/ant-design-pro/commit/5bcf895ad440851215084963500e7d8bb594c2dc)
- 抽取 ArticleListContent 为公共组件。[#2482](https://github.com/ant-design/ant-design-pro/pull/2482)

#### 组件

- HeaderSearch 增加 `open` 和 `onVisibleChange` 属性。[5b5a737](https://github.com/ant-design/ant-design-pro/commit/5b5a737a5d851b2635abba0578e63aa464bbe3bf#diff-0919a70b52c8206136618718371372cb)
- PageHeader 增加了 `hiddenBreadcrumb` 属性。[231e72](https://github.com/ant-design/ant-design-pro/commit/231e725abd99c91c4304001fbf784f426f85925e)
- 修复 Ellipsis 的 `tooltip` 表现异常的 bug。[0d47d5](https://github.com/ant-design/ant-design-pro/commit/0d47d5040c5856f783c4dd3b9c0484a1983351f4)
- 修复 在 Firefox 40.0.3 中表现异常的 bug。[85f466](https://github.com/ant-design/ant-design-pro/commit/85f46650114bb19d0f251d839e41182c24316973)
- 修复 Pie `percent`值为 0 时，图表不渲染的问题。[5b2daa](https://github.com/ant-design/ant-design-pro/commit/5b2daa657bf030aa11e7b583825ffe002a7619b7)
- 修复 LoginItem 自定义 `rules` 不工作的问题。[9f89ce](https://github.com/ant-design/ant-design-pro/commit/9f89ce45715b8af83ca7dcb40eb59cbf82f2373e)
- 修复 Ellipsis 组件和 Table 组件共用时表现错误的问题。[#2405](https://github.com/ant-design/ant-design-pro/pull/2405)

### 2.0.0

`2018-09-01`

v2 是一个包含 600 多个 commit 的巨大改动，包含很多变化，更多内容见 [And Design Pro 发布公告](https://www.yuque.com/ant-design/ant-design-pro/ant_design_pro_2.0_is_out) 。

#### 脚手架

- 🌟 增加了四个新的页面
  - [分步对话框](https://preview.pro.ant.design/list/table-list)
  - [信息录入对话框](https://beta.preview.pro.ant.design/list/basic-list)
  - [个人中心](https://preview.pro.ant.design/account/center/articles)
  - [个人设置](https://preview.pro.ant.design/account/settings/base)
- 🌟 增加了 `配置抽屉` 支持 布局切换，光暗主题切换，主色切换等功能。
- 🌟 脚手架切换到 [umi](https://umijs.org/) 。[#1512](https://github.com/ant-design/ant-design-pro/issues/1512)
- 🌟 使用 [umi](https://github.com/umijs/umi-plugin-locale) 支持国际化。
- 🌟 使用 `firebase` 实现接口动态化。

#### 组件

- 🌟 TagSelect 增加 `hideCheckAll` 属性，用于隐藏 `全部` 按钮。
- 🌟 PageHeader 增加 `home` 和 `itemRender` 属性。

### 1.4.4

`2018-08-09`

restored the es directory and index.less.

### 1.4.1

`2018-08-07`

1.4.0 was released using beta tag, This version uses the correct tag.

### 1.4.0

`2018-08-05`

#### 脚手架

- 🐞 修复登录页面在 IE11 浏览器下，Footer 错位的问题。[#1315](https://github.com/ant-design/ant-design-pro/issues/1315)
- 🐞 修复（官网）高级详情页在 IE11 下部分内容未显示的问题。[#1287](https://github.com/ant-design/ant-design-pro/issues/1287)
- 🐞 修复分步表单面包屑路径问题的问题。[#1324](https://github.com/ant-design/ant-design-pro/issues/1324)
- 🐞 修复动态参数路由无法获得 title 的问题。[#1248](https://github.com/ant-design/ant-design-pro/issues/1248)
- 🐞 修复分布表单页跳转时面包屑不更新的问题。[#1409](https://github.com/ant-design/ant-design-pro/issues/1409)

#### 组件

- 🐞 修复 WaterWave `precent` 为 0 时，图表不展示的错误。[27a2353](https://github.com/ant-design/ant-design-pro/commit/bcb9280cd1340888259484b47b69121d47df2152)
- 🐞 修复 Ellipsis 在 Firefox 中死循环的问题。[#1921](https://github.com/ant-design/ant-design-pro/pull/1921)
- 🌟 Trend 增加 `reverseColor` 属性。[#1399](https://github.com/ant-design/ant-design-pro/pull/1399)、
- 🌟 Ellipsis 增加 `caculateShowLength` 属性。[#1673](https://github.com/ant-design/ant-design-pro/pull/1637)
- 🌟 Ellipsis 长度现在包括 `...`。[#1592](https://github.com/ant-design/ant-design-pro/pull/1592)
- 🌟 Login.Captcha 增加 `buttonText`属性。[11df359 ](https://github.com/ant-design/ant-design-pro/commit/189e6c5c599b1cf23570d15b016704ec36793056)

### 2.0.0-beta.1

此次更新主要是支持了 [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)。通过如下配置来使用：

```
 {
    libraryName: 'ant-design-pro',
    libraryDirectory: 'lib',
    style: true,
    camel2DashComponentName: false,
  }
```

在代码中：

```
import { Charts, NumberInfo, Trend } from 'ant-design-pro';
```

### 1.3.0

`2018-04-19`

#### 脚手架

- 🐞 修复了触发异常时页面报错的问题。[#1188](https://github.com/ant-design/ant-design-pro/issues/1188)
- 🐞 修复了浏览器切换到手机端模式时出现报错的问题。[#1215](https://github.com/ant-design/ant-design-pro/issues/1215)
- 🐞 修复了 request.js 使用 FormData 上传文件时报错的问题。[#1217](https://github.com/ant-design/ant-design-pro/issues/1217) [@ChieveiT](https://github.com/ChieveiT)
- 页面
  - 🌟 `查询表格页` 中 StandardTable 组件新增 `rowKey` 属性。[#1175](https://github.com/ant-design/ant-design-pro/pull/1175) [@neoscript99](https://github.com/neoscript99)
  - 🐞 修复 `查询表格页` 中重新搜索后筛选设置失效的问题。[#1209](https://github.com/ant-design/ant-design-pro/issues/1209)

#### 组件

- 🌟 HeaderSearch 新增 `defaultOpen` 属性，可以支持默认展开。[#1179](https://github.com/ant-design/ant-design-pro/pull/1179) [@zhujun24](https://github.com/zhujun24)
- Charts
  - 🐞 修复了 TimelineChart 坐标轴错位以及格式化有误的问题。[#1283](https://github.com/ant-design/ant-design-pro/pull/1283) [@mdluo](https://github.com/mdluo)
  - 🐞 修复了直接引用 Charts 失败的问题。[commit/3bc5c5](https://github.com/ant-design/ant-design-pro/commit/3bc5c54cc9dc416d5f1beced289c36e4a8f33581)

### 1.2.1

`2018-03-27`

- 🌟 支持 prettier。[#1155](https://github.com/ant-design/ant-design-pro/pull/1155)
- 🐞 修复了引用 PageHeader 报错的问题。[#1169](https://github.com/ant-design/ant-design-pro/issues/1169)

### 1.2.0

`2018-03-25`

~ Ant Design Pro 也有国内镜像了 -> http://ant-design-pro.gitee.io ~

#### 脚手架

- 🌟 request 现在可以处理 FormData 了。[#884](https://github.com/ant-design/ant-design-pro/pull/884) [@chengs](https://github.com/chengs)
- 🌟 支持用 Fragment 替代无用的 div。[#330](https://github.com/ant-design/ant-design-pro/issues/330)
- 🌟 使用 puppeteer 替代了 nightmare。[#1006](https://github.com/ant-design/ant-design-pro/pull/1006)
- 🌟 支持路由配置时指定 exact 属性。[#1148](https://github.com/ant-design/ant-design-pro/pull/1148) [@ws456999](https://github.com/ws456999)
- 🌟 面包屑默认加了入了菜单中（非路由项）的层级。[#1053](https://github.com/ant-design/ant-design-pro/pull/1053) [@ReedSun](https://github.com/ReedSun)
- 🐞 修复了无子菜单但其下有多级路由时菜单无法选中的问题。[#821](https://github.com/ant-design/ant-design-pro/issues/821)
- 🐞 修复了首页无权限时点击 logo 也会重定向到 403 页面的问题。[#1098](https://github.com/ant-design/ant-design-pro/issues/1098)
- 页面
  - 🐞 修复了`高级表单页`可编辑表格存在的一些问题，优化了使用体验。[#846](https://github.com/ant-design/ant-design-pro/issues/846) [@wunayou](https://github.com/wunayou)
  - 🐞 修复了`卡片列表页`卡片标题过长时溢出的样式问题。[#948](https://github.com/ant-design/ant-design-pro/issues/948)
  - 🐞 修复了`分步表单页`的 title 没有显示的问题。[#984](https://github.com/ant-design/ant-design-pro/issues/984)
  - 🐞 修复了`查询表格页`中新建规则时数据未重置的问题。[#1015](https://github.com/ant-design/ant-design-pro/issues/1015)
  - 🐞 修复了触发报错时导致无限 loading 的问题。[#976](https://github.com/ant-design/ant-design-pro/issues/976)

#### 组件

- Charts
  - 🐞 修复了 Pie legend 数据无法更新的问题。[#819](https://github.com/ant-design/ant-design-pro/issues/819)
  - 🐞 修复了 ChartCard `total` 属性的展示问题。[#1110](https://github.com/ant-design/ant-design-pro/issues/1110)
  - 🌟❗️ Pie 和 ChartCard `total` 属性新增支持函数类型，去除了代码里不安全的 dangerouslySetInnerHTML 用法，这可能导致 `total` 和 `valueFormat` 属性在用法上的改变，属于 breaking change。[#1142](https://github.com/ant-design/ant-design-pro/issues/1142)
- PageHeader
  - 🌟 新增 `tabDefaultActiveKey` 属性，支持设置默认选中的页签。[commit/e618d4](https://github.com/ant-design/ant-design-pro/commit/e618d4d16ddc9d876f6438c9b77cdebac1e4070b)
  - 🐞 修复了 `location` 属性无法生效的问题。[#970](https://github.com/ant-design/ant-design-pro/pull/970) [@Alexorz](https://github.com/Alexorz)
- Authorized
  - 🐞 修复了 Secured 调用失败的问题。[#862](https://github.com/ant-design/ant-design-pro/issues/862)
  - 🐞 修复了 `authority` 属性为 Promise 时不生效的问题。[#843](https://github.com/ant-design/ant-design-pro/issues/843)
  - 🐞 修复了 PromiseRender 无法正常更新数据的问题。[#987](https://github.com/ant-design/ant-design-pro/pull/987) [@guowenfh](https://github.com/guowenfh)
- SiderMenu
  - 🐞 当子菜单无权限或不存在子菜单时不展示父菜单。[#1047](https://github.com/ant-design/ant-design-pro/pull/1047) [@hzq001](https://github.com/hzq001)
  - 💄 优化了 SiderMenu 的展示体验。[#964](https://github.com/ant-design/ant-design-pro/issues/964)
  - 🐞 修复了菜单项图标为 img 标签时折叠后无法隐藏菜单名的问题。[commit/bacc20](https://github.com/ant-design/ant-design-pro/commit/bacc2031482e16d64243ef29aca181e6d3e2361e)
- 🐞 修复了 CountDown 初始化时的展示问题。[#1009](https://github.com/ant-design/ant-design-pro/issues/1009)

### 1.1.0

`2018-01-26`

#### 脚手架

- 🌟 现在注册完成后权限角色也会更新了！[#724](https://github.com/ant-design/ant-design-pro/issues/724)
- 🌟 重构了全局异常处理相关代码，将异常触发页收纳到顶部下拉列表中。[#675](https://github.com/ant-design/ant-design-pro/pull/675)
- 🌟 优化了登录/注册/注册结果页在大屏/手机上的展现。[#665](https://github.com/ant-design/ant-design-pro/pull/665) [@andriijas](https://github.com/andriijas)
- 🐞 修复了手机端的高度问题。[#788](https://github.com/ant-design/ant-design-pro/issues/788)
- 🐞 修复面包屑在存在带参数的路由时标题匹配有误的问题。[#801](https://github.com/ant-design/ant-design-pro/pull/801) [@Jeepeng](https://github.com/Jeepeng)
- 🐞 修复使用 browserHistory 报错的问题。[#649](https://github.com/ant-design/ant-design-pro/issues/649)
- 🐞 修复了 menu path 为绝对路径时的路径拼接问题。[#697](https://github.com/ant-design/ant-design-pro/issues/697)
- 🐞 修复了不能正常后退的问题。[#729](https://github.com/ant-design/ant-design-pro/issues/729)
- 页面
  - 🐞 修复了高级表单页可编辑表格中编辑按钮被误触发的问题。[#744](https://github.com/ant-design/ant-design-pro/issues/744)
  - 🐞 修复了 firefox 下访问监控页报错的问题。[#677](https://github.com/ant-design/ant-design-pro/issues/677)
  - 🐞 修复了注册结果页注册信息未同步的问题。[#695](https://github.com/ant-design/ant-design-pro/pull/695) [@elevensky](https://github.com/elevensky)
  - 🐞 修复了查询表格页验证误触发的问题。[#755](https://github.com/ant-design/ant-design-pro/issues/755)

#### 组件

- 🌟 TagSelect 新增受控模式。[#761](https://github.com/ant-design/ant-design-pro/issues/761) [@yunxifd](https://github.com/yunxifd)
- PageHeader
  - 🌟 新增 `tabBarExtraContent` 属性，支持配置 tab bar 上额外的元素。[#793](https://github.com/ant-design/ant-design-pro/pull/793) [@kamote](https://github.com/kamote)
  - 🌟 新增 `breadcrumbSeparator` 属性，支持自定义分隔符。[#811](https://github.com/ant-design/ant-design-pro/pull/811) [@unrealsmart](https://github.com/unrealsmart)
  - 🐞 修复了 `tabActiveKey` 未生效的问题。[#681](https://github.com/ant-design/ant-design-pro/issues/681)
- 🌟 Authorized 组件 `authority` 属性为 function 时新增当前权限参数。[#692](https://github.com/ant-design/ant-design-pro/issues/692)
- 🌟 重构了 StandardTable，现在可以通过外部传入的 columns 控制渲染，同时支持多列求和结果展示。[commit/33ef0a](https://github.com/ant-design/ant-design-pro/commit/33ef0adad6c59d4af70632c87e6bf9cffe5949cd)
- 🐞 修复 Login 内不使用 Tab 时，输入框无法输入的问题。[#674](https://github.com/ant-design/ant-design-pro/issues/674) [@lyingd](https://github.com/lyingd)
- 🐞 修复了 Ellipsis 内容未正常折行的问题。[#688](https://github.com/ant-design/ant-design-pro/issues/688)

### 1.0.0 🎆

`2018-01-10`

~ 2018 年的第一个版本，终于告别 0.x 啦，快来看看都有些啥！~

#### 主要变化 💎

- 图表底层升级 [BizCharts](https://github.com/alibaba/BizCharts)，修复了之前的一些问题，更新了部分 UI。[#370](https://github.com/ant-design/ant-design-pro/pull/370)
- 采用全新的菜单及路由配置，能够支持更多更灵活的需求场景，修复了之前存在的一些问题，同时支持指定菜单项/面包屑隐藏。[#442](https://github.com/ant-design/ant-design-pro/pull/442)
- 新增 Authorized 组件，增加权限管理模块，支持通过简单的配置，实现基本的权限管理需求。[#508](https://github.com/ant-design/ant-design-pro/pull/508)
- 升级 Roadhog@2，支持可配置化的代码分割（默认关闭）。[#542](https://github.com/ant-design/ant-design-pro/pull/542) [#562](https://github.com/ant-design/ant-design-pro/pull/562) [@sorrycc](https://github.com/sorrycc)

#### 脚手架

- 🌟 增加[内网使用引导](/docs/getting-start-inner)。
- 🌟 侧边栏针对手机端进行了体验优化。[#463](https://github.com/ant-design/ant-design-pro/pull/463) [@jljsj33](https://github.com/jljsj33)
- 🌟 增加全局异常处理。[#500](https://github.com/ant-design/ant-design-pro/pull/500)
- 🌟 增加 dva-loading，去掉了一堆 loading 处理。[#587](https://github.com/ant-design/ant-design-pro/pull/587) [@andriijas](https://github.com/andriijas)
- 🌟 菜单图标支持配置成图片地址或组件。[commit/74f0a0](https://github.com/ant-design/ant-design-pro/commit/74f0a0aa6a9ba4a144d97fd90e31b4db2342bc66)
- 🌟 增加登录页按钮 loading 效果。[#576](https://github.com/ant-design/ant-design-pro/pull/576)
- 🐞 修复了部分路由没有重定向的问题。[#507](https://github.com/ant-design/ant-design-pro/pull/507)
- 🐞 扩展 dymaicWrapper，防止 Model 重复导入报错。[#506](https://github.com/ant-design/ant-design-pro/issues/506) [@henrydf](https://github.com/henrydf)
- 🐞 修复了分步表单无法匹配任何菜单项，以及点击 logo 无法切换展开菜单的问题。[commit/e2b126](https://github.com/ant-design/ant-design-pro/commit/e2b1261c8f5d275e105e60e4766734c7eccadfb3)

#### 组件

- 🌟 新增 Login 组件。[#147](https://github.com/ant-design/ant-design-pro/pull/147)
- PageHeader
  - 🌟 新增 `activeTabKey` 属性。[commit/a8caa5](https://github.com/ant-design/ant-design-pro/commit/a8caa500ae4bb1fe0b808c93dbc24c84339784be)
  - 🐞 修复了 `breadcrumbList` 属性的优先级问题，更新了相关文档。[commit/d8b0a9](https://github.com/ant-design/ant-design-pro/commit/d8b0a9ecc11cd7ab4491143cdd12bfb8241ad018)
- 🐞 针对部分组件依赖外部资源的问题进行了抽离。[#528](https://github.com/ant-design/ant-design-pro/issues/528) [#560](https://github.com/ant-design/ant-design-pro/issues/560)

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
