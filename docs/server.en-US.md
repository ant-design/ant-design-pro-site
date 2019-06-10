---
order: 7
title: Communicate with Server
type: Development
---

Ant Design Pro is a SPA based on the React technology stack. We provide a set of front-end code and local simulation data development model. Work in the form of an API with the server application of any technology stack. The basics of interacting with the server are briefly described below.

## Request Process

In Ant Design Pro, a complete front-end UI interaction to the server-side processing flow looks like this:

1. UI component interaction;
2. Call the effect of model;
3. Call the unified management service request function;
4. Send the request using the encapsulated request.ts;
5. Get the server response;
6. Then call reducer to change state;
7. Update the model.

As can be seen from the above process, in order to facilitate management and maintenance, unified request processing is placed in the `services` folder, and the files are generally split according to the model dimension, such as:

```text
services/
  user.ts
  api.ts
  ...
```

Among them, `utils/request.ts` is based on [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), which is convenient for handling POST, GET and other parameters, headers, and error messages. See [request.ts](https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.ts) for details.

For example, an example of requesting user information in services:

```ts
// services/user.ts
import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

// models/user.ts
import { queryCurrent } from '../services/user';
...
effects: {
  *fetch({ payload }, { call, put }) {
    ...
    const response = yield call(queryUsers);
    ...
  },
}
```

### Handling Asynchronous Requests

When dealing with complex asynchronous requests, it's easy to mess up the logic and get stuck in nesting traps, so the underlying infrastructure of Ant Design Pro [dva](https://github.com/dvajs/dva) uses the `effect` concept. To manage synchronized asynchronous requests:

```js
effects: {
  *fetch({ payload }, { call, put }) {
    yield put({
      type: 'changeLoading',
      payload: true,
    });
    // Async request 1
    const response = yield call(queryFakeList, payload);
    yield put({
      type: 'save',
      payload: response,
    });
    // Async request 2
    const response2 = yield call(queryFakeList2, payload);
    yield put({
      type: 'save2',
      payload: response2,
    });
    yield put({
      type: 'changeLoading',
      payload: false,
    });
  },
},
```

Via [generator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*) and [yield](https://developer.mozilla.org/es/docs/Web /JavaScript/Reference/Operators/yield) the logical processing of asynchronous calls the same as synchronization, refer to [dva async logic](https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md #async-logic) for details.
