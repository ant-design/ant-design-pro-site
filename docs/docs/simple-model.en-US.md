---
order: 19
title: easy Model
group:
  title: Data Management
nav:
  title: Documents
  path: /docs
  order: 1
---

## Introduction

In basic front-end/back-end data flow scenarios, when the page is mounted, the back-end is queried and data is returned to be consumed by the front-end. In this scenario, there is no need for a complicated data flow solution. This isn't always the case, and data may sometimes need to be shared globally, such as user role permissions or other data which is shared between multiple pages. So, what is the best way to cache and share the data directly between these pages?

In order to achieve data sharing between multiple pages, a easy data flow management solution is needed. To facilitate this we have implemented a lightweight global data sharing solution based on hooks & a umi plug-in (@umijs/plugin-model). The plug-in is built into umi@3.

## Usage

### 1. Creating the Model

Create a new file in the src/models directory, the file name will become the namespace of the model. You can use .js, .jsx, .ts, and .tsx file extensions.

> For example, the namespace of demo.ts is demo.

The content of a model needs to be a JavaScript function, and be exported by default, you can use hooks in the function. The below is an example of a valid model:

```
// demo.ts
export default () => 'Hello World';
```

Of course, in actual real world scenarios, the model will be more complex. Take for example this counter model:

```
// counter.ts
import { useState, useCallback } from 'react';

export default () => {
  const [counter, setCounter] = useState(0);
  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);
  return { counter, increment, decrement };
};
```

### 2. Using the Model

To use the model in code, you need to export useModel from umi. useModel is a React Custom Hook that can accept 1-2 parameters. The easiest usage scenario is as follows:

```
import { useModel } from 'umi';

export default () => {
  const message = useModel('demo');
  return <div>{message}</div>;
};
```

The message will contain the return value of the demo model, that is: 'Hello World';

The optional second parameter, can be used for performance optimization. When the component only needs to consume some parameters in a model, and does not care about the changes of other parameters, a function can be passed in for filtering. The return value of the function will be the return value of the requested paramaters rather than the overall return value of useModel. E.g:

```
import { useModel } from 'umi';
import { Button } from 'antd';

export default () => {
  const { add, minus } = useModel('counter', (ret) => ({
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

In the above example the ButtonGroup component does not care about the value of counter, it only needs to use the increment and decrement methods, so the second parameter is used to filter out the frequently changing value of counter.

### 3. Linking Models

You can use the data of one Model in another Model, the usage method is exactly the same as in the page. It should be noted that circular dependencies cannot occur. For example, If Model A depends on B and B depends on C, then C cannot depend on A, otherwise it will trigger an endless loop.

## Other

### VSCode plugin

The plugin-model will monitor file changes and dynamically generate consumable hooks and corresponding ts types, so it has good code completion capabilities. If you need to implement code jump, you can install the below vscode plug-in. After enabling command + left mouse click on the namespace string in useModel('namespace'), you can jump to the corresponding model file. <br />![2019-12-23 11.57.43.gif](https://gw.alipayobjects.com/zos/antfincdn/WcVbbF6KG2/1577073518336-afe6f03d-f817-491a-848a-5feeb4ecd72b.gif)<br />[https://marketplace.visualstudio.com/items?itemName=litiany4.umijs-plugin-model](https://marketplace.visualstudio.com/items?itemName=litiany4.umijs-plugin-model)

### DVA Migration

Coming soon
