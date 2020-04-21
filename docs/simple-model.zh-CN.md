---
order: 19
title: 简易数据流
type: 基础使用
---

## 简介

中后台场景下，绝大多数页面的数据流转都是在当前页完成，在页面挂载的时候请求后端接口获取并消费，这种场景下并不需要复杂的数据流方案。但是也存在需要全局共享的数据，如用户的角色权限信息或者其他一些页面间共享的数据。那么怎么才能缓存并支持在多个页面直接去共享这部分数据呢。

为了实现在多个页面中的数据共享，已经一些业务可能需要的简易的数据流管理的场景，我们基于 hooks & umi 插件实现了一种轻量级的全局数据共享的方案。实现上我们通过 [@umijs/plugin-model](./plugin-model)  插件来通过一个轻量级的方案来支持这样的需求，该插件内置已在 bigfish@3 中。

## 如何使用

### 一、新建 Model

在 `src/model` 目录下新建文件，文件名会成为 model 的 namespace. 允许使用 ts, tsx, js, jsx 四种后缀。

> eg. `demo.ts` 的 namespace 是 `demo`

一个 model 的内容需要是一个 JavaScript function，并被默认导出，可以在 function 中使用 hooks.<br />例如下面的例子就是一个合法的 model:

```javascript
// demo.ts
export default () => 'Hello World';
```

当然在实际使用场景中，model 会更加复杂，例如下面的计数器的例子：

```javascript
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

在代码中使用 model，需要从 Bigfish 中导出 useModel。useModel 是一个 React Custom Hook，可接受 1-2 个参数。最简单的使用场景如下：

```jsx
import { useModel } from '@alipay/bigfish';

export default () => {
  const message = useModel('demo');
  return <div>{message}</div>;
};
```

其中 message 会包含 demo model 的返回值，即：Hello World；

对于可选的第二个参数，可以用于性能优化，当组件只需要消费一个 model 中部分参数，对于其他参数的变化并不关心时，可以传入一个函数用于过滤，函数的返回值将取代 model 的返回值，成为 useModel 的整体返回值。例如：

```jsx
import { useModel } from '@alipay/bigfish';
import { Button } from '@alipay/bigfish/antd';

export default () => {
  const { add, minus } = useModel('model', (ret) => ({
    add: ret.increment,
    minus: ret.decrement,
  }));

  return (
    <Button.Group>
      <Button onClick={add}>add by 1</Button>
      <Button onClick={minus}>minus by 1</Button>
    </Button.Group>
  );
};
```

上面的例子中，作为一个 ButtonGroup 组件，对 counter 的值并不关心，只需要使用  increment 和  decrement 两个方法，因此使用第二个参数，过滤掉了 counter 这一频繁变化的值。

### 三、Model 间互相依赖

你可以在一个 Model 中使用另一个 Model 的数据，使用方法和在页面中完全相同。需要注意的是，不可以出现循环依赖。例如 Model A 依赖了 B，B 依赖了 C，那么 C 不可以再次依赖 A，否则将触发死循环。

## 其他

### VSCode 插件

plugin-model 会监听文件变化，动态生成可消费的 hooks 及对应 ts 类型，因此具有较好的代码补全能力。如果需要实现代码跳转，可以配合 vscode 插件，启用后 command + 鼠标左键点击 `useModel('namespace')` 中 namespace 的字符串，即可跳转到对应的 model 文件。<br />![2019-12-23 11.57.43.gif](https://intranetproxy.alipay.com/skylark/lark/0/2019/gif/184725/1577073518336-afe6f03d-f817-491a-848a-5feeb4ecd72b.gif#align=left&display=inline&height=1138&name=2019-12-23%2011.57.43.gif&originHeight=1138&originWidth=2062&size=6737458&status=done&style=none&width=2062)<br />[https://marketplace.visualstudio.com/items?itemName=litiany4.umijs-plugin-model](https://marketplace.visualstudio.com/items?itemName=litiany4.umijs-plugin-model)

### dva 如何迁移过来

见[《dva 迁移到中台最佳实践简易数据流》](./faq-dva)。
