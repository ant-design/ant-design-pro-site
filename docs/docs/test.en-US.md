---
order: 32
title: Test
group:
  title: Quality
nav:
  title: Documents
  path: /docs
  order: 1
---

Umi has built-in [jest](https://jestjs.io/) as a test plan. Executing `npm test` will automatically execute the \*.(test|e2e).js file under your project.

Jest is based on the node environment, so this means that the code runs in node instead of in the browser, which makes our tests run faster, and jest also provides some browser environments, such as [jsdom](https: //github.com/tmpvar/jsdom), but it is still unrealistic to simulate all behaviors of the browser. So jest is mainly used to test logic and behavior, not to test some browser quirks.

If you need it, you may need to write e2e test scripts specifically. Instead of using jest.

## Document Convention

Jest will find all files in the following paradigm:

- Files with `.js` suffix in `__tests__` folders
- Files with `.test.js` suffix
- Files with `.spec.js` suffix

These files and folders can be located at any depth, but we recommend placing the test files (or folders) next to the code they are testing, so that the relative path import looks shorter. Putting the same path also helps Find tests faster in large projects.

## Write test

To create a test, add (or) a block containing the name of the test and its code. You can choose to pack them in blocks for logical grouping, but it is neither required nor recommended.

Jest provides a built-in global function ʻexpect()` for making assertions. Here is a basic example:

```ts
import sum from './sum';

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});
```

[Document here](https://jestjs.io/docs/expect#methods) You can see all the assertion functions. Sometimes you may need a mock function, you can use [`jest.fn()` and `expect(fn).toBeCalled()`](https://jestjs.io/docs/expect#tohavebeencalled) To test whether the function is called.

## Test component

The scope of component testing is very wide, from the smoke test to test whether the component can work normally, to the easy test of certain behaviors and outputs of the component, and the complete life cycle to the change of each state.

Different components in the business should be weighed according to different business states. If you have not tested it yet, it is recommended to add a smoke test first.

```tsx | pure
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
```

This test will mount the component, and then test whether it throws errors. It only requires very little coding to bring great benefits. This is a good start. If you encounter problems caused by updated status, you need to introduce more specific tests to assert the output and expected behavior.

### React test

If you want to test the behavior and expected output of specific components, we recommend using [react-testing-library](https://github.com/testing-library/react-testing-library).

> Enzyme is also a good choice, but it is a bit slow to update. React-testing-library is officially recommended by react.

`react-testing-library` is a library for testing React components in a manner similar to how end users use components. It is very suitable for unit testing, integration and e2e testing of React components and applications. It is more directly used with DOM nodes, so it is recommended to use it with jest-dom, so that it is convenient to make assertions.

If you want to use `react-testing-library` you can install it with the following command.

```bash
npm install --save @testing-library/react @testing-library/jest-dom
```

Next we need to introduce the global configuration in `tests/setupTests.js`, the content is like this:

```ts
// react-testing-library displays your component as document.body,
// This will add a custom assertion to jest-dom
import '@testing-library/jest-dom';
```

Add it down and we can write test cases.

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

> [snapshot](https://jestjs.io/blog/2016/07/27/jest-14.html) is a very low-cost test method, but it works well and can easily monitor some dom changes.

We can view more usage from [`react-testing-library's documentation and examples`](https://testing-library.com/docs/react-testing-library/intro/).

## testing report

jest comes with a test report that requires no configuration and is very friendly to the new syntax. Execute `npm test - --coverage` to see results similar to the following.

![Test Report](https://i.imgur.com/5bFhnTS.png)

## e2e test

E2E is the abbreviation of "End to End" and can be translated into "end to end" test. It imitates the user, starting from a certain entrance, and gradually performing operations until a certain task is completed. Unlike unit testing, the latter usually requires testing parameters, parameter types, parameter values, parameter numbers, return values, throwing errors, etc. The purpose is to ensure that a specific function can complete its work stably and reliably under any circumstances. Unit testing assumes that as long as all functions are working properly, the entire product will work properly.

Relatively speaking, the E2E test does not emphasize the need to cover all usage scenarios. It focuses on whether a complete chain of operations can be completed. For the web front-end, we also pay attention to whether the interface layout and content information meet expectations.

Pro comes with an e2e test, we can quickly start a test case in the project.

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

The above use case is to visit the page of `http://localhost:8000` and determine whether it contains the dom element of footer. In Pro, `page` will be injected by default, so that each test can share a code. For more details, please visit [puppeteer](https://github.com/puppeteer/puppeteer).
