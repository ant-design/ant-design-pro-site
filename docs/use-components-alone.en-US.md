---
order: 16
title: Use Pro Components Alone
type: Advanced
---

The scaffold of Ant Design Pro provides a set of [default components](http://pro.ant.design/components), which abstract common block in admin interfaces. We will continue to maintain and iterate these components to provide a higher level of abstraction than Ant Design for admin interfaces.

## Usage

The components in the scaffold of Ant Design Pro are divided into two types:

- antd components: https://ant.design/docs/react/introduce
- pro built-in components: https://github.com/ant-design/ant-design-pro/tree/master/src/components

For scaffolding users, you can import/add/reform pro's built-in components directly. Please refer to [new components](/docs/new-component) for specific usage.

For users without using scaffold, we provide a way to use pro's built-in components.

> Default components will be published to [ant-design-pro](http://npmjs.com/ant-design-pro) in npm's repository.

```bash
$ npm install ant-design-pro --save
```

```jsx
import 'ant-design-pro/dist/ant-design-pro.css'; // Import whole style
```

Then you can import pro's components like Ant Design.

```jsx
import Result from 'ant-design-pro/lib/Result';

ReactDOM.render(<Result type="success" />, mountNode);
```

> Note that pro's components is dependent on antd@3.0 by default and you need to ensure consistency with antd‘s version.

## Document & FeedBack

You can find all components, demos and API documents on [the components' page]((http://pro.ant.design/components)). 

Components will continue to iterate with the scaffold's update. If you have any questions and demands, you can feed back [here](http://github.com/ant-design/ant-design-pro/issues).

- Latest Version：[![ant-design-pro](https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square)](http://npmjs.com/ant-design-pro)
- [Change Log](/docs/changelog)
