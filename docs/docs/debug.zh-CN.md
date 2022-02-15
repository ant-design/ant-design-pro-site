---
order: 34
title: 调试
group:
  title: 后端集成
nav:
  title: 文档
  path: /docs
  order: 1
---

编写代码其实只是开发者的一小部分工作。为了让工作更有效率，我们还必须精通 debug。工欲善其事必先利其器，前端开发现在最好的工具就是 google 的 [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2)，而且还贴心的准备了多语言的版本。

我们在这里会简单的介绍几个常用的功能，更多的功能可以查看官网，看一遍可以极大的提升效率。

- 元素面板
- 控制台面板
- 网络请求

### 元素面板

[元素面板](https://developers.google.com/web/tools/chrome-devtools/inspect-styles)可以检查和实时编辑页面的 HTML 与 CSS。前端的核心竞争力就是美观的样式和适当的交互带来的用户体验。这个 debug 是我们使用的最多的功能。

![元素面板](https://gw.alipayobjects.com/zos/antfincdn/49Hj4%24GyUa/F59465FF-8E99-4F65-B3D5-97003C10DF64.png)

> 对于中国用户推荐使用微软的 edge 最新版本，帮助我们把控制台也做了国际化。降低了使用成本。

元素面板中最重要的功能就是元素检查，这个功能的使用非常频繁，具体可以查看 google 的官方[链接](https://developers.google.com/web/tools/chrome-devtools/inspect-styles)。官方有相应的视频和功能例子。

### 控制台面板

[控制台](https://developers.google.com/web/tools/chrome-devtools/console) 是调试 JS 必备的工具。

![png](https://gw.alipayobjects.com/zos/antfincdn/1tFWntZVBu/64790AE3-1625-45B8-9809-4EC5E7F4AB35.png)

在面板中可以看到 js 的 `console` 输出，`console.log` 输出是简单有效的调试方式。这里介绍输出的小技巧。

首先是输出 state，当然在 hooks 中我们一般是输出某些变量，这种输出方法可以保持格式，在 node 调试中也是非常好用的。

```TS
{JSON.stringify(state, null, 2)}
```

`console.assert` 是调试循环的利器，如果 expression 表达式的结果为 false，Console.assert 将会抛出错误。关键的是，assert 函数不会由于报错而停止评估之后的代码。它可以帮助你调试冗长棘手的代码，或者找到多次迭代后函数自身产生的错误。

```ts
console.assert(expression, message);
```

更加详细的 api 可以看[这里](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)。

在代码中加入 debugger; 就可以将项目停住同时 源代码面板中对齐进行 debug，他会自动生成一个断点。

![debugger](https://gw.alipayobjects.com/zos/antfincdn/OLGUPQ7CyF/loc-breakpoint.png)

### 网络面板

[网络面板](https://developers.google.com/web/tools/chrome-devtools/network)也是我们常用的面板，其中可以看到任何网络请求，查看网络请求的返回和各种状态。

![网络面板](https://gw.alipayobjects.com/zos/antfincdn/5VLhkjfCPu/A45663AA-4173-4A14-A3E4-1DB2DC2522FD.png)

简单的用法在官方的文档中已经详细说明，我们这里推荐一个小技巧，可以将网络请求的结果保存为一个名叫 `temp1` 的变量，我们可以使用 `console.dir(temp1)` 查看对象，当然也可以对它进行操作。

![查询为变量](https://gw.alipayobjects.com/zos/antfincdn/p4PHbdKvJB/A76A1E89-9498-49DB-9608-558D25394E10.png)

## SourceMap

为了保证代码的体积，现有情况下 SourceMap 几乎是必选的配置。在 Pro 中我们的默认打开了 source map,如果你需要别的定义可以在 config.ts 中配置 [devtool](https://webpack.js.org/configuration/devtool/)。

一旦你打开了 SourceMap 就可以在源代码页面使用 Control+P 或 Command+P (Mac) 来打开文件选择，使用方式与 vscode 基本相同。

![devtools](https://gw.alipayobjects.com/zos/antfincdn/1rIW5jiJ8c/8AEB4626-D14A-41E5-BD03-F712437CA947.png)

## bug 调试方法

在我们的开发中，由于对底层的不理解或者兼容性的问题，很有可能会出现白屏或者 Out Of Memory 的问题，也有一些问题没有任何可以 debug 着手的方式。这时候就要用到一些 debug 的方案。

### 二分法定位

二分法是 debug 中最常用也是最好用的方式，非常适用于我的代码昨天还是好的和各类 Out Of Memory 报错。我们可以程序逻辑一点点注释掉，不断地进行排错，完全能把问题可能出现的范围缩小，然后找出罪魁祸首。再用常规手段调试。

node 中 Out Of Memory 最常用的方式就是删除一半依赖，然后进行重试来不断缩小范围，直到找个问题所在。二分调试大法每次遇到棘手的 bug，基本上都能解决，程序员必备技能，无关语言。

### 小黄鸭法

处理 bug 的过程，最难的不是怎么解决问题，而是如何定位代码的 bug，如果实在是一筹莫展，尤其是算法类的问题。我们可以通过小黄鸭法来进行 debug。我们可以找任何物体也可以是同事讲一遍或者讨论一遍，当然上网发帖也是好方式。

### 重写一遍

这个方法成本最高，适用于可以乱七八糟的代码，尤其是陈年代码，如果实在搞不懂修不了 bug，可以加好测试用例重新写一遍。毕竟很多的 bug 其实都是错别字。
