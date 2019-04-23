---
order: 15
title: UI 测试
type: 进阶
---

UI 测试是项目研发流程中的重要一环，有效的测试用例可以梳理业务需求，保证研发的质量和进度，让工程师可以放心的重构代码和新增功能。

Ant Design Pro 封装了一套简洁易用的 React 单元测试和 E2E 测试方案，在项目根目录运行以下命令就能运行测试用例。

```bash
$ npm run test:all  # 执行所有测试
```

<img style="box-shadow:none;margin:0;" src="https://gw.alipayobjects.com/zos/rmsportal/EFKJzIswQgWNJzDQNpKr.png" width="700" />

下面简单介绍如何在项目中书写你的业务测试用例。

## 单元测试

单元测试用于测试 React UI 组件的表现。我们参考了 [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)，使用 [jest](http://facebook.github.io/jest/) 作为测试框架。

jest 是一个 node 端运行的测试框架，使用了 jsdom 来模拟 DOM 环境，适合用于快速测试 React 组件的逻辑表现，需要真实浏览器可以参考 E2E 测试部分。

### 写一个用例

比如，我们可以建一个文件 `src/routes/Result/Success.test.js` 来测试成功页面组件的 UI 表现。

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Success from './Success'; // 引入对应的 React 组件

it('renders with Result', () => {
  const wrapper = shallow(<Success />); // 进行渲染
  expect(wrapper.find('Result').length).toBe(1); // 有 Result 组件
  expect(wrapper.find('Result').prop('type')).toBe('success'); // Result 组件的类型是成功
});
```

这里使用了 [enzyme](http://airbnb.io/enzyme/docs/api/index.html) 作为测试库，它提供了大量实用的 API 来帮助我们测试 React 组件。断言部分沿用了 jest 默认的 [jasmine2 expect 语法](https://facebook.github.io/jest/docs/en/expect.html#content)。

### 本地执行

使用以下的命令将统一搜索和执行 `src` 下 `*.test.js` 格式的用例文件。

```bash
$ npm test .test.js
```

#### 执行单个或一组用例

```bash
$ npm test src/routes/Result/Success.test.js  # 测试 Success.test.js
$ npm test src/routes                         # 测试 routes 下的所有用例文件
```

### 测试 dva 包装组件

被 dva `connect` 的 React 组件可以使用下面方式进行测试。

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

it('renders Dashboard', () => {
  // 使用包装后的组件
  const wrapper = shallow(<Dashboard.WrappedComponent user={{ list: [] }} />);
  expect(wrapper.find('Table').props().dataSource).toEqual([]);
});
```

## e2e 测试

端到端测试也叫冒烟测试，用于测试真实浏览器环境下前端应用的流程和表现，相当于代替人工去操作应用。

我们引入了 [puppeteer](https://github.com/googlechrome/puppeteer) 作为 E2E 测试的工具，puppeteer 是 Google Chrome 团队官方的无界面（Headless）Chrome 工具。它默认使用 chrome / chromium 作为浏览器环境运行你的应用，并且提供了非常语义化的 API 来描述业务逻辑。

### 写一个 e2e 用例

假设有一个需求，用户在登录页面输入错误的用户名和密码，点击登录后，出现错误提示框。

<img src="https://gw.alipayobjects.com/zos/rmsportal/oZeYewGOUJkmqXAPoOFC.gif" width="400" />

我们写一个用例来保障这个流程。在 `src/e2e/` 目录下建一个 `Login.e2e.js` 文件，按上述业务需求描述测试用例。

```js
import puppeteer from 'puppeteer';

describe('Login', () => {
  it('should login with failure', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.type('#userName', 'mockuser');
    await page.type('#password', 'wrong_password');
    await page.click('button[type="submit"]');
    await page.waitForSelector('.ant-alert-error'); // should display error
    await page.close();
    browser.close();
  });
});
```

更多 puppeteer 的方法可以参考 [puppeteer/docs/api.md](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)。

### 运行用例

运行下列命令将执行 src 下所有的 `*.e2e.js` 用例文件。

```bash
$ npm test .e2e.js
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/LGCXopksUYMUhjRgdYSz.png" width="700" />

> 注意，本地测试 e2e 用例需要启动 `npm start`，否则会报 `Failed: navigation error` 的错误。

## watch 模式

```
$ npm test -- --watch
```

添加 `--watch` 配置可以进入 watch 模式，当你修改和保存文件时，Jest 会自动执行相应用例。Jest 的命令行工具也提供了各种方便的快捷键来执行你需要的用例。

<img src="https://gw.alipayobjects.com/zos/rmsportal/MnmxiavystfcBDskyKRg.png" width="700" />

## 测试覆盖率

```
$ npm test -- --coverage
```

添加 `--coverage` 配置可以显示项目的测试覆盖率。

<img src="https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67" width="700" />

## 聚焦和忽略用例

使用 `xit()` 取代 `it()` 可以暂时忽略用例，`fit()` 可以聚焦当前用例并忽略其他所有用例。这两个方法可以帮助你在开发过程中只关注当前需要的用例。

## 接入集成测试服务

如果需要接入 travis、CircleCI、Gitlab CI 等集成测试环境，可以参考本仓库提供的 `.travis.yml`。

注意 e2e 测试需要集成环境支持 electron，如果不支持，你可以使用 `npm test .test.js` 单独运行单元测试。

## 参考链接

更多测试技巧和功能请参考以下链接。

- [create-react-app tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [jest](https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)
- [puppeteer](https://github.com/googlechrome/puppeteer)
- [Using with puppeteer](https://facebook.github.io/jest/docs/en/puppeteer.html)
