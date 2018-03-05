---
order: 16
title:
  en-US: Use Pro Components Alone
  zh-CN: 独立使用 Pro 组件
type: Advanced
---

Ant Design Pro framework provides a group of default components(http://pro.ant.design/components)，these components abstract those common areas of monitoring. We will continue maintain and iterate these components, and provide higher abstracts than Ant Design default components for back-end.

## How to Use it

Ant Design Pro framework contains 2 type components:

- antd component：https://ant.design/docs/react/introduce-cn
- Pro component:https://github.com/ant-design/ant-design-pro/tree/master/src/components


For the Ant Design framework users, you can directly use/create/customize Pro components, please refer to the guide: [new components](/docs/new-component)。


For the developers who do not use Ant Design framwwork, we provide another way to use this build-in components.

> Default Pro components will be published on npm. [ant-design-pro](http://npmjs.com/ant-design-pro).

```bash
$ npm install ant-design-pro --save
```

```jsx
import 'ant-design-pro/dist/ant-design-pro.css'; // Import all modules
```

Then, you can import Pro components just as regular Ant Design components. 

```jsx
import Result from 'ant-design-pro/lib/Result';

ReactDOM.render(<Result type="success" />, mountNode);
```

> Be aware，Pro components rely on antd@3.0 by default, please make sure you obtained the correct antd version.

## Documentation and Feedback

You can find components in [components](http://pro.ant.design/components), and their related demo and API documentations.

Components will be updated with framework, if you have any questions or feedbacks, feel free to submit them [here](http://github.com/ant-design/ant-design-pro/issues)。

- Newest version：[![ant-design-pro](https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square)](http://npmjs.com/ant-design-pro)
- [Change log](/docs/changelog)
