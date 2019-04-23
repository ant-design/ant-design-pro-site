---
order: 15
title: UI Test
type: Advanced
---

UI testing is an important part of the project development process. Effective test cases can sort out business needs and ensure the quality and progress of development, it enables developers to refactor the code and add new features safely.

Ant Design Pro comes packaged with a handy set of React unit tests and E2E test framework, you can run the following command in the root repository to run test cases by running the following command at the project root.

```bash
$ npm run test:all  # Execute all the tests
```

<img style="box-shadow:none;margin:0;" src="https://gw.alipayobjects.com/zos/rmsportal/EFKJzIswQgWNJzDQNpKr.png" width="700" />

Now we'll give a brief introduction about how to write a test case.

## Unit Tests

Unit tests are used to test the appearance of React UI components. By referencing [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests), we take [jest](http://facebook.github.io/jest/) as the test framework.

Jest is a node-side test framework that uses jsdom to simulate the DOM environment and is suitable for quick testing of the logical behavior of React components. If you care about the performance in a real browser, please refer to the E2E test section.

### Write a case

For example, we could create a file `src/routes/Result/Success.test.js` to test the UI appearance of `Result/Success.js`.

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Success from './Success'; // Introduce the corresponding React component

it('renders with Result', () => {
  const wrapper = shallow(<Success />); // Rendering
  expect(wrapper.find('Result').length).toBe(1); // Has Result component
  expect(wrapper.find('Result').prop('type')).toBe('success'); // The type of the Result component is success
});
```

Here [enzyme](http://airbnb.io/enzyme/docs/api/index.html) is used as a test library, which provides a number of useful APIs to help us test React components. As for the assertion library, we choose [jasmine2 expect grammar](https://facebook.github.io/jest/docs/en/expect.html#content).

### Local execution

Files with suffix `* .test.js` in `src` will be found out and executed by using the following command:

```bash
$ npm test .test.js
```

#### Execute a single or a set of cases

```bash
$ npm test src/routes/Result/Success.test.js  # test Success.test.js
$ npm test src/routes                         # test all test case file in routes
```

### Test dva wrapped components

We can use the following way to test the components wrapped by dva `connect`.

```jsx
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

it('renders Dashboard', () => {
  // Use the wrapped components
  const wrapper = shallow(<Dashboard.WrappedComponent user={{ list: [] }} />);
  expect(wrapper.find('Table').props().dataSource).toEqual([]);
});
```

## e2e test

End-to-end testing, also known as smoke testing, is used to test the process and appearance of front-end applications in a real-world browser environment, equivalent to operating application instead of manually.

We import [puppeteer](https://github.com/googlechrome/puppeteer) as the tool of e2e testing, puppeteer is a headless Chrome tool which created by Google, it uses chrome/chromium as the browser environment by default to run your application, and provides a very semantic API for describing business logic.

### Write a e2e test case

Assuming there is a demand, the user enters the wrong user name and password in the login page, and after clicking on submission, an error message box will appear.

<img src="https://gw.alipayobjects.com/zos/rmsportal/oZeYewGOUJkmqXAPoOFC.gif" width="400" />

We write a test case to ensure this process. Create a `Login.e2e.js` file in the `src/e2e/`directory and describe the test cases as described above for your business needs.

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

Refer to [puppeteer/docs/api.md](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md) for more APIs.

### Run test cases

Run the following command to execute all `*.e2e.js` test cases under src.

```bash
$ npm test .e2e.js
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/LGCXopksUYMUhjRgdYSz.png" width="700" />

> Note: You should run `npm start` before testing e2e cases locally, or it will throw `Failed: navigation error`.

## watch mode

```
$ npm test -- --watch
```

By adding `--watch` configuration you can enter the watch mode, `in which` when you modify and save the file, jest will automatically execute the corresponding test cases. Jest's command line tools also provide a variety of convenient shortcuts to execute the use cases you need.

<img src="https://gw.alipayobjects.com/zos/rmsportal/MnmxiavystfcBDskyKRg.png" width="700" />

## Test coverage

```
$ npm test -- --coverage
```

Add a `--coverage` configuration to display the project's test coverage.

<img src="https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67" width="700" />

## Focus or ignore test cases

Use `xit()` instead of `it()` to temporarily ignore the test case, `fit()` to focus on the current test case and ignore all other test cases. These two methods can help you to focus on the current need of test cases in the development process.

## Access integration testing services

If you need access to integration testing environment such as travis, CircleCI, Gitlab CI, you can refer to [.travis.yml](https://github.com/ant-design/ant-design-pro/blob/master/.travis.yml) provided by this repository.

Note that the e2e test requires integrated environment support [electron](https://electronjs.org/), and if not, you can run unit tests separately using `npm test .test.js`.

## Reference links

For more testing tips and functions, please refer to the following link.

- [create-react-app tests](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)
- [jest](https://facebook.github.io/jest/)
- [enzyme](http://airbnb.io/enzyme/)
- [puppeteer](https://github.com/googlechrome/puppeteer)
- [Using with puppeteer](https://facebook.github.io/jest/docs/en/puppeteer.html)
