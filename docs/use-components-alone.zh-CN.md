---
order: 16
title: 独立使用 Pro 组件
type: 进阶
---

Ant Design Pro 脚手架内提供了一套默认[业务组件](http://pro.ant.design/components)，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象。

## 如何使用

Ant Design Pro 脚手架内用到的组件分为两种：

- antd 组件：https://ant.design/docs/react/introduce-cn
- pro 自带组件：https://github.com/ant-design/ant-design-pro/tree/master/src/components

对于脚手架的用户，你可以在脚手架中直接引用/新增/改造 pro 的自带组件，具体方式可参考 [新增组件](/docs/new-component)。

对于没有使用这套脚手架的开发者，我们提供了一种方式来调用这套内建组件。

> 默认业务组件会发布到 npm 的 [ant-design-pro](http://npmjs.com/ant-design-pro) 上。

```bash
$ npm install ant-design-pro --save
```

```jsx
import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式
```

然后你就可以像使用 Ant Design 组件一样调用 pro 组件了。

```jsx
import Result from 'ant-design-pro/lib/Result';

ReactDOM.render(<Result type="success" />, mountNode);
```

> 注意，pro 组件默认依赖于 antd@3.0，需要保证 antd 版本的一致性。

## 文档和反馈

你可以在 [组件页面](http://pro.ant.design/components) 找到所有的业务组件，以及相关的演示和 API 文档。

组件会随着脚手架的更新而不断迭代，有任何问题和需求可以反馈到 [这里](http://github.com/ant-design/ant-design-pro/issues)。

- 最新版本：[![ant-design-pro](https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square)](http://npmjs.com/ant-design-pro)
- [更新日志](/docs/changelog)
