---
order: 15
title: UI 测试
---

UI 测试是项目研发流程中的重要一环，有效的测试用例可以梳理业务需求，保证研发的质量和进度，让工程师可以放心的重构代码和新增功能。

Ant Design Pro 封装了一套简洁易用的 React 单元测试和 E2E 测试方案，在项目根目录运行以下命令就能运行测试用例。

```
$ npm start
$ npm test  // 执行所有测试
```

下面简单介绍如何在项目中书写你的业务测试用例。

## 单元测试

单元测试用于测试 React UI 组件的表现。我们参考了 [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)，使用 [jest](http://facebook.github.io/jest/) 作为测试框架。

jest 是一个 node 端运行的测试框架，使用了 jsdom 来模拟 DOM 环境，适合用于快速测试 React 组件的逻辑表现，需要真实浏览器可以参考 E2E 测试部分。

### 写一个用例

比如，我们可以建一个文件 `src/routes/Result/Success.test.js` 来测试成功页面组件的 UI 表现。

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Success from './Success';   // 引入对应的 React 组件

it('renders with Result', () => {
  const wrapper = shallow(<Success />);                           // 进行渲染
  expect(wrapper.find('Result').length).toBe(1);                  // 有 Result 组件
  expect(wrapper.find('Result').prop('type')).toBe('success');    // Result 组件的类型是成功
});
```

这里使用了 [enzyme](http://airbnb.io/enzyme/docs/api/index.html) 作为测试库，它提供了大量实用的 API 来帮助我们测试 React 组件。断言部分沿用了 [jest](https://facebook.github.io/jest/docs/en/expect.html#content) 默认的 expect 语法。

### 本地执行

使用以下的命令执行所有的单元测试，将统一搜索和执行 `src` 下 `*.test.js` 格式的文件。

```
$ npm run unit-test
```

#### 执行单个或一组用例

```
$ npm run unit-test -- src/routes/Result/Success.test.js  // 测试 Success.test.js
$ npm run unit-test -- src/routes                         // 测试 routes 下的所有 *.test.js
```

#### watch 模式

```
$ npm run unit-test -- --watch
```

使用 `--watch` 可以进入 watch 模式，当你修改和保存文件时，Jest 会自动执行相应用例。Jest 的命令行工具也提供了各种方便的快捷键来执行你需要的用例。

![](https://gw.alipayobjects.com/zos/rmsportal/jdJnrFUtvMLoFOZebeou.png)

### 测试 dva 包装组件

被 dva `connect` 的 React 组件可以使用下面方式进行测试。

### 测试覆盖率

更多单元测试的信息请参考 [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)。

## E2E 测试

也叫冒烟测试，用于测试真实环境下前端应用的流程和表现，不拘于具体实现。

## 接入集成测试服务

## 参考链接

- [create-react-app tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [jest](https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)
- [nightmare](http://www.nightmarejs.org/)
- [jest-with-nightmare](https://github.com/vigetlabs/jest-with-nightmare)
