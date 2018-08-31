---
order: 21
title: Changelog
type: Other
---

[Older Version](http://03x.pro.ant.design/)

### 2.0.0

`2018-09-01`、

V2 is a huge change with 600 commits, including many changes, see for more[And Design Pro release](https://medium.com/ant-design/beautiful-and-powerful-ant-design-pro-2-0-release-51358da5af95).

#### Scaffold

- 🌟 增加了四个新的页面

  - [Step-by-step Modal](https://preview.pro.ant.design/list/table-list) 
  - [Information entry Modal](https://beta.preview.pro.ant.design/list/basic-list)
  - [Personal center](https://preview.pro.ant.design/account/center/articles)
  - [Personal settings](https://preview.pro.ant.design/account/settings/base)
  
- 🌟 Added `Setting Drawer` support for layout switching, light and dark theme switching, main color switching and other functions.
- 🌟 Scaffolding switch to [umi](https://umijs.org/). [#1512](https://github.com/ant-design/ant-design-pro/issues/1512)
- 🌟 Use [umi-plugin-locale](https://github.com/umijs/umi-plugin-locale) support for internationalization.
- 🌟 Use `firebase` to implement interface dynamization.

#### Components

- 🌟 TagSelect adds the `hideCheckAll` attribute to hide the `全部` button.
- 🌟 PageHeader adds `home` and `itemRender` attributes.

### 1.4.4

`2018-08-09`

restored the es directory and index.less.

### 1.4.1

`2018-08-07`

1.4.0 was released using beta tag, This version uses the correct tag.

### 1.4.0

`2018-08-05`

#### Scaffold

- 🐞 Fix the problem that the login page is misplaced at the bottom of IE11. [#1315](https://github.com/ant-design/ant-design-pro/issues/1315)
- 🐞 Fix the problem that the (official website) advanced details page is not displayed in the IE11 section. [#1287](https://github.com/ant-design/ant-design-pro/issues/1287)
- 🐞 Fix the problem of the breadcrumb path problem in the Step Form. [#1324](https://github.com/ant-design/ant-design-pro/issues/1324)
- 🐞 Fixed an issue where dynamic parameter routing could not get title. [#1248](https://github.com/ant-design/ant-design-pro/issues/1248)
- 🐞 Fix the problem that the breadcrumbs on the distribution form page are not updated. [#1409](https://github.com/ant-design/ant-design-pro/issues/1409)

#### Components

- 🐞 Fix the error that the chart does not show when WaterWave `precent` is 0. [27a2353](https://github.com/ant-design/ant-design-pro/commit/bcb9280cd1340888259484b47b69121d47df2152)
- 🐞 Fix Ellipsis break in Firefox. [#1921](https://github.com/ant-design/ant-design-pro/pull/1921)
- 🌟 Trend adds the `reverseColor` attribute. [#1399](https://github.com/ant-design/ant-design-pro/pull/1399)
- 🌟 Ellipsis adds the `caculateShowLength` attribute. [#1673](https://github.com/ant-design/ant-design-pro/pull/1637)
- 🌟 Ellipsis length now includes `...`. [#1592](https://github.com/ant-design/ant-design-pro/pull/1592)
- 🌟 Login.Captcha adds the `buttonText` property. [11df359 ](https://github.com/ant-design/ant-design-pro/commit/189e6c5c599b1cf23570d15b016704ec36793056)

### 2.0.0-beta.1

This update supports [babel-plugin-import] (https://www.npmjs.com/package/babel-plugin-import).

Configuration is as follows

```
  {
     libraryName: 'ant-design-pro',
     libraryDirectory: 'lib',
     Style: true,
     camel2DashComponentName: false,
   }
```

in code 

```
import { Charts, NumberInfo, Trend } from 'ant-design-pro';
```

### 1.3.0

`2018-04-19`

#### Scaffold

- 🐞 Fix error when the exception is triggered. [#1188](https://github.com/ant-design/ant-design-pro/issues/1188)
- 🐞 Fix error when the browser switched to mobile phone mode. [#1215](https://github.com/ant-design/ant-design-pro/issues/1215)
- 🐞 Fix error when request.js uses FormData to upload files. [#1217](https://github.com/ant-design/ant-design-pro/issues/1217) [@ChieveiT](https://github.com/ChieveiT)
- Pages
  - 🌟 Add `rowKey` prop for StandardTable in `table-list` page. [#1175](https://github.com/ant-design/ant-design-pro/pull/1175) [@neoscript99](https://github.com/neoscript99)
  - 🐞 Fix the problem of invalid filter setting after re-search in `table-list` page. [#1209](https://github.com/ant-design/ant-design-pro/issues/1209)

#### Components

- 🌟 Add `defaultOpen` prop for HeaderSearch to support default expansion state. [#1179](https://github.com/ant-design/ant-design-pro/pull/1179) [@zhujun24](https://github.com/zhujun24)
- Charts
  - 🐞 Fix the issue of misaligned axes and incorrect format with TimelineChart. [#1283](https://github.com/ant-design/ant-design-pro/pull/1283) [@mdluo](https://github.com/mdluo)
  - 🐞 Fix Charts can not be imported directly. [commit/3bc5c5](https://github.com/ant-design/ant-design-pro/commit/3bc5c54cc9dc416d5f1beced289c36e4a8f33581)

### 1.2.1

`2018-03-27`

- 🌟 Support prettier. [#1155](https://github.com/ant-design/ant-design-pro/pull/1155)
- 🐞 Fix error when use PageHeader. [#1169](https://github.com/ant-design/ant-design-pro/issues/1169)

### 1.2.0

`2018-03-25`

~ Ant Design Pro has chinese mirror site now -> http://ant-design-pro.gitee.io ~

#### Scaffold

- 🌟 request can handle FormData now. [#884](https://github.com/ant-design/ant-design-pro/pull/884) [@chengs](https://github.com/chengs)
- 🌟 Support using Fragment instead of useless div. [#330](https://github.com/ant-design/ant-design-pro/issues/330)
- 🌟 Use puppeteer instead of nightmare. [#1006](https://github.com/ant-design/ant-design-pro/pull/1006)
- 🌟 Support setting the `exact` prop in the routes config. [#1148](https://github.com/ant-design/ant-design-pro/pull/1148) [@ws456999](https://github.com/ws456999)
- 🌟 Add the menu levels(which are not listed in routes config) into breadcrumb. [#1053](https://github.com/ant-design/ant-design-pro/pull/1053) [@ReedSun](https://github.com/ReedSun)
- 🐞 Fix the menu with multiple levels of routing but no submenus can not be selected. [#821](https://github.com/ant-design/ant-design-pro/issues/821)
- 🐞 Fix clicking on the logo will redirect to 403 page when the home page is not authorized. [#1098](https://github.com/ant-design/ant-design-pro/issues/1098)
- Pages
  - 🐞 Fix some problems of the editable table in `advanced-form` page, and make some improvements of user experience. [#846](https://github.com/ant-design/ant-design-pro/issues/846) [@wunayou](https://github.com/wunayou)
  - 🐞 Fix `card-list` page overflow issue when the title is too long. [#948](https://github.com/ant-design/ant-design-pro/issues/948)
  - 🐞 Fix `step-form` page title missing. [#984](https://github.com/ant-design/ant-design-pro/issues/984)
  - 🐞 Fix `table-list` page data is not reset when a new rule is created. [#1015](https://github.com/ant-design/ant-design-pro/issues/1015)
  - 🐞 Fix infinite loading when an exception is triggered. [#976](https://github.com/ant-design/ant-design-pro/issues/976)

#### Components

- Charts
  - 🐞 Fix Pie legend data can not be updated. [#819](https://github.com/ant-design/ant-design-pro/issues/819)
  - 🐞 Fix display issue of ChartCard `total` prop. [#1110](https://github.com/ant-design/ant-design-pro/issues/1110)
  - 🌟❗️ `total` prop of Pie 和 ChartCard can support function type now. We removed the unsafe using of dangerouslySetInnerHTML, which may lead to a breaking change in the usage of `total` and `valueFormat`. [#1142](https://github.com/ant-design/ant-design-pro/issues/1142)
- PageHeader
  - 🌟 Add `tabDefaultActiveKey` prop for supporting default selected pane. [commit/e618d4](https://github.com/ant-design/ant-design-pro/commit/e618d4d16ddc9d876f6438c9b77cdebac1e4070b)
  - 🐞 Fix `location` can not take effect. [#970](https://github.com/ant-design/ant-design-pro/pull/970) [@Alexorz](https://github.com/Alexorz)
- Authorized
  - 🐞 Fix Secured calling failed. [#862](https://github.com/ant-design/ant-design-pro/issues/862)
  - 🐞 Fix invalid Promise type `authority`. [#843](https://github.com/ant-design/ant-design-pro/issues/843)
  - 🐞 Fix PromiseRender update issue. [#987](https://github.com/ant-design/ant-design-pro/pull/987) [@guowenfh](https://github.com/guowenfh)
- SiderMenu
  - 🐞 Hide the parent menu when the submenu does not have permission or there is no submenu. [#1047](https://github.com/ant-design/ant-design-pro/pull/1047) [@hzq001](https://github.com/hzq001)
  - 💄 Optimized the display of SiderMenu. [#964](https://github.com/ant-design/ant-design-pro/issues/964)
  - 🐞 Fixed the menu name with img type icon can not be hidden when the SiderMenu is folded. [commit/bacc20](https://github.com/ant-design/ant-design-pro/commit/bacc2031482e16d64243ef29aca181e6d3e2361e)
- 🐞 Fix CountDown display issue at initialization. [#1009](https://github.com/ant-design/ant-design-pro/issues/1009)

### 1.1.0

`2018-01-26`

#### Scaffold

- 🌟 Now the authority role can be updated after registration! [#724](https://github.com/ant-design/ant-design-pro/issues/724)
- 🌟 Refactor the global exception handling code, move the exception-trigger page into the top drop-down list. [#675](https://github.com/ant-design/ant-design-pro/pull/675)
- 🌟 Optimize login/register/register-result page display on big screen/mobile phone. [#665](https://github.com/ant-design/ant-design-pro/pull/665) [@andriijas](https://github.com/andriijas)
- 🐞 Fix page height issue on the mobile phone. [#788](https://github.com/ant-design/ant-design-pro/issues/788)
- 🐞 Fix the breadcrumb title match issue when there are routes with parameters. [#801](https://github.com/ant-design/ant-design-pro/pull/801) [@Jeepeng](https://github.com/Jeepeng)
- 🐞 Fix error when browserHistory is used. [#649](https://github.com/ant-design/ant-design-pro/issues/649)
- 🐞 Fix path splicing issue when menu path is absolute. [#697](https://github.com/ant-design/ant-design-pro/issues/697)
- 🐞 Fix can not fall back normally. [#729](https://github.com/ant-design/ant-design-pro/issues/729)
- Pages
  - 🐞 Fix the falsely triggered issue of the edit button in editable-form of advanced-form page. [#744](https://github.com/ant-design/ant-design-pro/issues/744)
  - 🐞 Fix monitor page error in firefox. [#677](https://github.com/ant-design/ant-design-pro/issues/677)
  - 🐞 Fixed registration information synchronization issue in register-result page. [#695](https://github.com/ant-design/ant-design-pro/pull/695) [@elevensky](https://github.com/elevensky)
  - 🐞 Fixed validation was falsely triggered in table-list page. [#755](https://github.com/ant-design/ant-design-pro/issues/755)

#### Components

- 🌟 TagSelect add controlled mode. [#761](https://github.com/ant-design/ant-design-pro/issues/761) [@yunxifd](https://github.com/yunxifd)
- PageHeader 
  - 🌟 Add `tabBarExtraContent` prop to support extra elements config on tab bar. [#793](https://github.com/ant-design/ant-design-pro/pull/793) [@kamote](https://github.com/kamote)
  - 🌟 Add `breadcrumbSeparator` prop to support custom separator. [#811](https://github.com/ant-design/ant-design-pro/pull/811) [@unrealsmart](https://github.com/unrealsmart)
  - 🐞 Fix invalid `tabActiveKey`. [#681](https://github.com/ant-design/ant-design-pro/issues/681)
- 🌟 Add the current authority parameters for Authorized with function type `authority`. [#692](https://github.com/ant-design/ant-design-pro/issues/692)
- 🌟 Refactor StandardTable, now the columns can be passed from outside to control rendering, and support multiple column summation results display. [commit/33ef0a](https://github.com/ant-design/ant-design-pro/commit/33ef0adad6c59d4af70632c87e6bf9cffe5949cd)
- 🐞 Fix the input issue of Login without Tab. [#674](https://github.com/ant-design/ant-design-pro/issues/674) [@lyingd](https://github.com/lyingd)
- 🐞 Fix Ellipsis word wrap issue. [#688](https://github.com/ant-design/ant-design-pro/issues/688)

### 1.0.0 🎆

`2018-01-10`

~ The first version of 2018, say goodbye to 0.x finally, let's take a look ~

#### Major changes 💎

- Upgrade to [BizCharts](https://github.com/alibaba/BizCharts), fix some legacy issues and update the UI. [#370](https://github.com/ant-design/ant-design-pro/pull/370)
- Use a new way to config new menus and routes which can support more and more flexible demand scenarios. Fix some legacy issues, and support hidden specified menu/route. [#442](https://github.com/ant-design/ant-design-pro/pull/442)
- Add Authorized component and authority manage module, now we can meet basic authority management requirements through simple configuration. [#508](https://github.com/ant-design/ant-design-pro/pull/508)
- Upgrade to Roadhog@2, support configurable code splitting(default off). [#542](https://github.com/ant-design/ant-design-pro/pull/542) [#562](https://github.com/ant-design/ant-design-pro/pull/562) [@sorrycc](https://github.com/sorrycc)

#### Scaffold

- 🌟 Add [inner getting-start doc](/docs/getting-start-inner).
- 🌟 Optimize mobile phone experience of sidebar. [#463](https://github.com/ant-design/ant-design-pro/pull/463) [@jljsj33](https://github.com/jljsj33)
- 🌟 Add global exception handler. [#500](https://github.com/ant-design/ant-design-pro/pull/500)
- 🌟 Add dva-loading to remove some redundant loading handling code. [#587](https://github.com/ant-design/ant-design-pro/pull/587) [@andriijas](https://github.com/andriijas)
- 🌟 Menu icon supports configuration as picture address or component. [commit/74f0a0](https://github.com/ant-design/ant-design-pro/commit/74f0a0aa6a9ba4a144d97fd90e31b4db2342bc66)
- 🌟 Add loading effect for button in login page. [#576](https://github.com/ant-design/ant-design-pro/pull/576)
- 🐞 Fix some routes did not redirect. [#507](https://github.com/ant-design/ant-design-pro/pull/507)
- 🐞 Extend dymaicWrapper to prevent model from repeatedly importing errors. [#506](https://github.com/ant-design/ant-design-pro/issues/506) [@henrydf](https://github.com/henrydf)
- 🐞 Fix the problem of step-forms page can not match any menu item, and clicking on the logo can not switch the expanded menu. [commit/e2b126](https://github.com/ant-design/ant-design-pro/commit/e2b1261c8f5d275e105e60e4766734c7eccadfb3)

#### Components

- 🌟 Add new component Login. [#147](https://github.com/ant-design/ant-design-pro/pull/147)
- PageHeader
  - 🌟 Add `activeTabKey` prop. [commit/a8caa5](https://github.com/ant-design/ant-design-pro/commit/a8caa500ae4bb1fe0b808c93dbc24c84339784be)
  - 🐞 Fix priority issue of `breadcrumbList` prop and updated related documents. [commit/d8b0a9](https://github.com/ant-design/ant-design-pro/commit/d8b0a9ecc11cd7ab4491143cdd12bfb8241ad018)
- 🐞 Solve the problem that some components depend on external resources. [#528](https://github.com/ant-design/ant-design-pro/issues/528) [#560](https://github.com/ant-design/ant-design-pro/issues/560)

### 0.3.0

`2017-11-20`

- Scaffold
  - 🌟 Upgrade to [Dynamic Router](https://pro.ant.design/docs/router-and-nav), on-demand loading accelerate page display speed. [#184](https://github.com/ant-design/ant-design-pro/pull/184) [@WhatAKitty](https://github.com/WhatAKitty)
  - 🌟 Access [sentry.io](https://sentry.io/alipay-me/) to monitor js error and improve project feedback. [b8a96c5](https://github.com/ant-design/ant-design-pro/commit/b8a96c5b853dc6aca16ec462655a875914292ddb)
  - 🐞 Fix abnormal display of three-level routing breadcrumbs. [#128](https://github.com/ant-design/ant-design-pro/issues/128)
  - 🐞 Fix warning when repeatedly clicking on the currently active menu. [#159](https://github.com/ant-design/ant-design-pro/issues/159)
  - 🐞 Fix NO_PROXY in windows. [#181](https://github.com/ant-design/ant-design-pro/issues/181)
  - 🐞 Fix `Lodash Debounce` can not take effect when `window.onResize` is triggered. [5cce044](https://github.com/ant-design/ant-design-pro/commit/5cce044192684535c93a23952ec831529b71f350)

- Components
  - 🌟 Keep component style independence, remove the dependency of `antd v2-compatible-reset.less`. [63b7645](https://github.com/ant-design/ant-design-pro/commit/63b76456fd8a79f1f08edc0cbf6e00487793e6ce)
  - 🐞 Fix Timeline get incorrect values. [#130](https://github.com/ant-design/ant-design-pro/issues/130)
  - 🐞 Refactor the TagSelect `state` handler to avoid abnormal state in multiple scenes. [#161](https://github.com/ant-design/ant-design-pro/issues/161)
  - 🐞 Fix many issues of Ellipsis. [#167](https://github.com/ant-design/ant-design-pro/issues/167) [#212](https://github.com/ant-design/ant-design-pro/issues/212)
  - 🐞 Upgrade the packaging tool to fix the problem that the repetition of `className` causes the style to appear garbled. [#205](https://github.com/ant-design/ant-design-pro/issues/205)

### 0.2.2

`2017-11-09`

- 🌟 Open international support. [#120](https://github.com/ant-design/ant-design-pro/issues/120)
- 🌟 Optimize multiple detail styles, making the overall look more refined.

- Scaffold
  - 🌟 Optimize network request error interface response and fault tolerance. [#82](https://github.com/ant-design/ant-design-pro/issues/82)
  - 🐞 Fix third level menu expansion issue. [#125](https://github.com/ant-design/ant-design-pro/pull/125)
  
- Components
  - 🌟 Separate component styles for compatibility with non-CssModule projects. [#85](https://github.com/ant-design/ant-design-pro/issues/85)
  - 🐞 Fix PageHeader can not support url parameter. [#64](https://github.com/ant-design/ant-design-pro/issues/64)
  - 🐞 Fix HeaderSearch `onPressEnter` method can not get parameters. [#131](https://github.com/ant-design/ant-design-pro/issues/131)
  - 🌟 Add new component Ellipsis. [#133](https://github.com/ant-design/ant-design-pro/issues/133)

### 0.2.1

`2017-11-02`

- 🐞 Fix package dependency error and `module export` exception. [#73](https://github.com/ant-design/ant-design-pro/issues/73)

- Scaffold
  - 🐞 Fix the Charts.Pie position offset issue in the analysis-page. [#76](https://github.com/ant-design/ant-design-pro/issues/76)
  - 🐞 Fix Editable Table edit/save issue. [#68](https://github.com/ant-design/ant-design-pro/issues/68)
  - 📱 Increase responsive support for search form in table-list page. [9709268](https://github.com/ant-design/ant-design-pro/commit/97092686cfbcc69b29b1f038c18b17a98a25d8d5)

- Components
  - 📱 Optimize the responsiveness of Charts.Pie. [8d9b7cf](https://github.com/ant-design/ant-design-pro/commit/8d9b7cfd94bc45adb4b26e44ff9ec83ea760dacd) [84ebabf](https://github.com/ant-design/ant-design-pro/commit/84ebabf53daa609c830d331594dd03772bbf3599)

### 0.2.0

`2017-10-31`

- 📱 Fully optimize and upgrade template responsiveness.
- 🌟 Completely optimize the overall design details.

- Scaffold
  - 🐞 Fix the logout issue. [#52](https://github.com/ant-design/ant-design-pro/issues/52)
  - 🐞 Fix monitor-page style issue. [#40](https://github.com/ant-design/ant-design-pro/issues/40)
  
- Components
  - 🌟 optimize the `logo` size of PageHeader. [0d177915](https://github.com/ant-design/ant-design-pro/commit/0d1779157883ad456b5efd0a04f2f50fb65db05c)
  - 🌟 Optimize display of chart loading. [#33](https://github.com/ant-design/ant-design-pro/issues/33)
  - 🐞 Fix responsive style issue about title of Pie. [34027103](https://github.com/ant-design/ant-design-pro/issues/33#issuecomment-340271035)
  - 🐞 Fix overflow issue of Radar in safari. [39](https://github.com/ant-design/ant-design-pro/pull/39)

### 0.1.10

`2017-10-27`

💎 The first version of Ant Design Pro.

We provide:

- A React scaffold.
- 7 standard scenes, 22 page templates.
- A complete set of processes and supporting documentation include develop, debug, simulate data and deploy.
- 14 boutique components.
