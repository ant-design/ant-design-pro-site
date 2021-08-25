---
order: 34
title: Debug
group:
  title: Network Request
nav:
  title: Documents
  path: /docs
  order: 1
---

Writing code is really only a small part of the developer's work. To make our work more efficient, we must also be proficient in debug. The best tool for front-end development right now is Google's [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2), and it's also a thoughtful, multilingual version.

We will briefly introduce a few commonly used functions here, more functions can view the official website, look at it again can greatly improve efficiency.

- Element panel
- Console panel
- Web requests

### Element panel

[Element panel](https://developers.google.com/web/tools/chrome-devtools/inspect-styles) You can check and edit the HTML and CSS of the page in real time. The core competence of the front end is the user experience of beautiful styles and appropriate interactions. This debug is the feature we use the most.

![元素面板](https://gw.alipayobjects.com/zos/antfincdn/49Hj4%24GyUa/F59465FF-8E99-4F65-B3D5-97003C10DF64.png)

The most important feature in the Element Panel is element checking, which is used very frequently and can be viewed specifically by google's official [link](https://developers.google.com/web/tools/chrome-devtools/inspect-styles). Officially have video and feature examples

### Console panel

[Console](https://developers.google.com/web/tools/chrome-devtools/console) is a must-have tool for debugging JS.

![png](https://gw.alipayobjects.com/zos/antfincdn/1tFWntZVBu/64790AE3-1625-45B8-9809-4EC5E7F4AB35.png)

You can see the `console` output of js in the panel, which is a easy and effective way to debug. Here's a tip for the output.

The first is the output state, of course, in the hooks we generally output some variables, this output method can maintain the format, in node debugging is also very useful.

```TS
{JSON.stringify(state, null, 2)}
```

`console.assert` is a sharpeer for debugging loops, and if the result of the expression expression is false, Console.assert throws an error. Crucially, the assert function does not stop the code after evaluation due to an error. It can help you debug lengthy, tricky code, or find errors that occur after multiple iterations of the function itself.

```ts
console.assert(expression, message);
```

More detailed api to see [here](https://developer.mozilla.org/zh-CN/docs/Web/API/Console).

Add a `debugger;` to your code; You can stop the project while the source code panel is aligned for debug, and he automatically generates a breakpoint.

![debugger](https://gw.alipayobjects.com/zos/antfincdn/OLGUPQ7CyF/loc-breakpoint.png)

### Web requests

[Web requests](https://developers.google.com/web/tools/chrome-devtools/network) is also our commonly used panel, where you can see any network request, see the return of network requests and various states.

![网络面板](https://gw.alipayobjects.com/zos/antfincdn/5VLhkjfCPu/A45663AA-4173-4A14-A3E4-1DB2DC2522FD.png)

easy usage is detailed in the official documentation, and we recommend a tip here that you can save the results of a network request as a variable called `temp1`, which we can view using `console.dir(temp1)` and of course we can manipulate it.

![查询为变量](https://gw.alipayobjects.com/zos/antfincdn/p4PHbdKvJB/A76A1E89-9498-49DB-9608-558D25394E10.png)

## SourceMap

To ensure the volume of the code, SourceMap is almost a mandatory configuration in existing situations. In Pro our default open source map, if you need a different definition can be configured in config.ts [devtool](https://webpack.js.org/configuration/devtool/)。

Once you've turned on SourceMap, you can open the file selection on the source code page using Control-P or Command-P (Mac) in much the same way as vscode.

![devtools](https://gw.alipayobjects.com/zos/antfincdn/1rIW5jiJ8c/8AEB4626-D14A-41E5-BD03-F712437CA947.png)

## Bug debugging method

In our development, due to the underlying understanding or compatibility issues, there is a good chance of white screen or OMM problems, there are some problems that do not have any way to debug to start. This is the time to use some debug scenarios.

### The bisection method

The disciple is the most commonly used and best-used way of debugging, and it works well for my code yesterday or good and all kinds of OMM errors. We can note the program logic a little bit, constantly misnomer, completely narrow the scope of the problem, and then find out the culprit. Then use the conventional means of debugging.

The most common way for OMM in node is to remove half of the dependencies and try again to narrow it down until you find a problem. Two-point debugging method every time encountering a tricky bug, basically can solve, the programmer must have skills, regardless of language.

### The duckling method

The most difficult process to deal with bugs is not how to solve the problem, but how to locate the code of the bug, if it is really a problem, especially the problem of algorithmclass. We can do debug through the duckling method. We can find anything can also be colleagues to talk or discuss it again, of course, online posting is also a good way.

### Rewrite it again

This method is the most expensive and applies to code that can be messy, especially old-age code, and if you really can't figure out how to fix a bug, you can add the test case sits back. After all, a lot of bugs are actually typo.
