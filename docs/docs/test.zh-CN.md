---
order: 94
title: 测试
group:
  title: 质量
nav:
  title: 文档
  path: /docs
  order: 1
---

umi 内置了 [jest](https://jestjs.io/) 作为测试方案。执行 `npm test` 会自动执行你的项目下的 \*.(test|e2e).js 文件。

jest 基于 node 环境，所以这意味着代码是运行在 node 中而不是浏览器里，这样虽然让我们的测试跑的更快，而且 jest 也提供了一些浏览器的环境，比如 [jsdom](https://github.com/tmpvar/jsdom), 但是模拟浏览器的所有行为仍然是不现实的。 所以 jest 主要用来测试逻辑和行为，而不是用来测试一些浏览器的怪癖。

如果你有需要，可能需要专门编写 e2e 测试脚本。而不是使用 jest。

## 文件约定

Jest 会查找以下范式的所有文件：

- 文件夹中有后缀的文件 `.js` `__tests__`
- `.test.js` 后缀的文件
- `.spec.js` 后缀的文件

这些文件和文件夹可以位于任何深度，但是我们建议将测试文件（或文件夹）放在他们正在测试的代码旁边，以便使用相对路径导入看起来更短，放在同样的路径还有助于在大型项目中更快地查找测试。

## 写测试

若要创建测试，请添加 （或 ） 包含测试的名称及其代码的块。您可以选择将它们包装在块中进行逻辑分组，但既不是必需的，也不建议这样做。

Jest 提供了用于进行断言的内置全局函数 `expect()`, 下面是个基本的例子：

```ts
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

[这里的文档](https://jestjs.io/zh-Hans/docs/expect#%E6%96%B9%E6%B3%95)可以看到所有的断言函数。有些时候你可能需要 mock 函数，你可以使用 [`jest.fn()` 和 `expect(fn).toBeCalled()`](https://jestjs.io/zh-Hans/docs/expect#tohavebeencalled) 来测试函数是否被调用。

## 测试组件

组件测试的范围很广，从冒烟测试测试组件是否可以正常工作，到浅显的测试组件的某些行为和输出，也会测试完整的生命周期到各个状态的变化。

在业务中不同的组件应该根据不同的业务状态进行权衡，如果你还没有任何测试，这里建议先加个冒烟测试。

```tsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

这个测试会挂载组件，然后测试它有没有抛出错误，只需要很少的编码就可以带来很大的收益，这是一个很好的开始的。如果你碰到了更新状态导致的问题，你就需要引入更具体的测试来断言输出和预期的行为。

### React 的测试

如果你要测试具体的组件的行为和预期的输出，我们推荐使用 [react-testing-library](https://github.com/testing-library/react-testing-library)。

> enzyme 也是个很好的选择，但是它跟更新有些缓慢，react-testing-library 是 react 官方推荐的。

`react-testing-library` 是一个用于测试 React 组件的库，其方式类似于最终用户使用组件的方式。它非常适合 React 组件和应用程序的单元测试、集成和 e2e 测试。它更直接地与 DOM 节点一起使用，因此建议与 jest-dom 一起使用,这样可以方便的做断言。

如果你要使用 `react-testing-library` 可以通过下列命令安装它。

```bash
npm install --save @testing-library/react @testing-library/jest-dom
```

接下来我们需要在 `tests/setupTests.js` 中引入的全局的配置，内容是这样的：

```ts
// react-testing-library 将您的组件显示为document.body，
// 这将为 jest-dom 添加一个自定义断言
import '@testing-library/jest-dom';
```

接下来我们就可以编写测试用例了。

```tsx | pure
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});

it('renders', () => {
  const { asFragment } = render(<App text="Hello!" />);
  expect(asFragment()).toMatchSnapshot();
});
```

> [snapshot](https://jestjs.io/blog/2016/07/27/jest-14.html) 是一个相当低成本的测试方式，但是效果很好，可以很方便的监听一些 dom 变化。

我们可以从 [`react-testing-library 的文档和例子`](https://testing-library.com/docs/react-testing-library/intro/) 来查看更多的用法。

## 测试报告

jest 自带了一个测试报告，无需配置，对新语法也很友好。执行 `npm test -- --coverage` 就能看到类似下面的结果。

![测试报告](https://i.imgur.com/5bFhnTS.png)

## e2e 测试

E2E 是“End to End”的缩写，可以翻译成“端到端”测试。它模仿用户，从某个入口开始，逐步执行操作，直到完成某项工作。与单元测试不同，后者通常需要测试参数、参数类型、参数值、参数数量、返回值、抛出错误等，目的在于保证特定函数能够在任何情况下都稳定可靠完成工作。单元测试假定只要所有函数都正常工作，那么整个产品就能正常工作。

相对来说，E2E 测试并没有那么强调要覆盖全部使用场景，它关注的是 **一个完整的操作链是否能够完成**。对于 Web 前端来说，还关注**界面布局、内容信息是否符合预期**。

Pro 中自带了一个 e2e 的测试，我们可以在项目中快速的开始一个测试用例。

```tsx | pure
it('page should have footer', async () => {
  const BASE_URL = 'http://localhost:8000';
  await page.goto(`${BASE_URL}`);
  await page.waitForSelector('footer', {
    timeout: 2000,
  });
  const haveFooter = await page.evaluate(() => document.getElementsByTagName('footer').length > 0);
  expect(haveFooter).toBeTruthy();
});
```

以上的用例是去访问 `http://localhost:8000` 的页面，并且判断是否含有 dom 元素 footer。在 Pro 中 `page` 会默认注入，这样可以每个测试都公用一份代码，更多的细节可以访问 [puppeteer](https://github.com/puppeteer/puppeteer)。
