---
order: 19
title: 简易数据流
group:
  title: 数据管理
nav:
  title: 文档
  path: /docs
  order: 1
---

## 简介

中后台场景下，绝大多数页面的数据流转都是在当前页完成，在页面挂载的时候请求后端接口获取并消费，这种场景下并不需要复杂的数据流方案。但是也存在需要全局共享的数据，如用户的角色权限信息或者其他一些页面间共享的数据。那么怎么才能缓存并支持在多个页面直接去共享这部分数据呢。

为了实现在多个页面中的数据共享，以及一些业务可能需要的简易的数据流管理的场景，我们基于 hooks & umi 插件实现了一种轻量级的全局数据共享的方案。实现上我们通过 [@umijs/plugin-model](https://umijs.org/zh-CN/plugins/plugin-model) 插件来实现一个轻量级的方案来支持这样的需求，该插件已内置在 bigfish@3 中。

## 如何使用

### 一、新建 Model

在 `src/models` 目录下新建文件，文件名会成为 model 的 namespace. 允许使用 ts, js, tsx(推荐), jsx(不推荐) 四种后缀。

> eg. `demo.ts` 的 namespace 是 `demo`

一个 model 的内容需要是一个标准的 JavaScript function，并被默认导出，可以在 function 中使用 hooks.<br />例如下面的例子就是一个合法的 model:

```tsx | pure
// demo.ts
export default () => 'Hello World';
```

在实际使用场景中，model 可以包含其他 hooks，例如下面的计数器的例子：

```tsx | pure
// counter.ts
import { useState, useCallback } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
  return { counter, increment, decrement };
};
```

### 二、使用 Model

在代码中使用 model，需要从 umi 中导出 useModel。useModel 是一个 React Custom Hook，传入 namespace 即可获取对应 model 的返回值。

```tsx | pure
import { useModel } from 'umi';

export default () => {
  const message = useModel('demo');
  return <div>{message}</div>;
};
```

上述例子中的 message 会包含 demo model 的返回值，即：Hello World；

### 三、Model 性能优化

useModel 可以接受一个可选的第二个参数，可以用于性能优化。当组件只需要消费 model 中的部分参数，而对其他参数的变化并不关心时，可以传入一个函数用于过滤。函数的返回值将取代 model 的返回值，成为 useModel 的最终返回值。例如：

```tsx | pure
import { useModel } from 'umi';

export default () => {
  const { add, minus } = useModel('counter', (ret) => ({
    add: ret.increment,
    minus: ret.decrement,
  }));

  return (
    <div>
      <button onClick={add}>add by 1</button>
      <button onClick={minus}>minus by 1</button>
    </div>
  );
};
```

上面的组件对 counter 的值并不关心，只需要使用  increment 和  decrement 两个方法，因此使用第二个参数，过滤掉了 counter 这一频繁变化的值。

## 其他

### 相关 umi 插件

- [plugin-initial-state](https://umijs.org/plugins/plugin-initial-state) 配合 plugin-initial-state 可以快速在组件内获取到全局初始状态
- [plugin-qiankun](https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun) 配合 plugin-qiankun 可以在子应用中获取到主应用传递的 props

### VSCode 插件

umi 启动时，plugin-model 会监听文件变化，动态生成可消费的 hooks 及对应 ts 类型，因此天然具有较好的代码补全能力。如果需要实现代码跳转，可以配合 vscode 插件，启用后 command + 鼠标左键点击(转到定义) `useModel('namespace')` 中 namespace 的字符串，即可跳转到对应的 model 文件。<br />![2019-12-23 11.57.43.gif](https://gw.alipayobjects.com/zos/antfincdn/WcVbbF6KG2/1577073518336-afe6f03d-f817-491a-848a-5feeb4ecd72b.gif)<br />下载链接：[https://marketplace.visualstudio.com/items?itemName=litiany4.umijs-plugin-model](https://marketplace.visualstudio.com/items?itemName=litiany4.umijs-plugin-model)
