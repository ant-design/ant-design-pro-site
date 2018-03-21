---
order: 7
title: Work with Server
type: Introduction
---

Ant Design Pro is a single-page application based on the React technology stack. We provide a development model with front-end code and local mock data. Work with server-side applications of any technology stack through the Restful APIs. The following is a brief introduction to the basic syntax of interaction with the server.

## Front-end request flow

In Ant Design Pro, a complete front-end UI interaction to the server-side processing flow is like this:

1. UI component interaction;
2. Call the effect of model;
3. Call the unified management service request function;
4. Send request using encapsulated request.js;
5. Get server return;
6. Then call reducer to change the state;
7. Update the model.

From the above, we can see that unified request processing is placed in the services folder for the convenience of management and maintenance, and files are generally split according to the model dimension. For example:

```
services/
  user.js
  api.js
  ...
```

Among them, `utils/request.js` is an encapsulation, which is based on [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) and facilitates unified processing of request such as POST and GET, request header, and error message. See [request.js](https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js) for details.

An example of requesting user information in services:

```
// services/user.js
import request from '../utils/request';

export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}

// models/user.js
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

### Effect handling async requests

When dealing with complex async requests, it's easy to clutter the logic and get stuck in a nesting trap, so Ant Design Pro's underlying infrastructure [dva](https://github.com/dvajs/dva) uses the `effect` approach. To manage synchronous async requests:

```js
effects: {
  *fetch({ payload }, { call, put }) {
    yield put({
      type: 'changeLoading',
      payload: true,
    });
    // async request 1
    const response = yield call(queryFakeList, payload);
    yield put({
      type: 'save',
      payload: response,
    });
    // async request 2
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

Through [generator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*) and [yield](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield) makes the logical processing of asynchronous calls just like synchronizing. See [dva async logic](https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md#async-logic) for more details.

## Switch from mock directly to server request

In general, as long as the mock api and the real server api are the same, you only need to redirect the mock to the corresponding server interface.

```js
// .roadhogrc.mock.js
export default {
  'GET /api/(.*)': 'https://your.server.com/api/',
};
```

So the api `http://localhost:8001/api/applications` in your browser will be reverse proxyed to `https://your.server.com/api/applications`.

### Close mock

To close the mock method we recommend using environment variables, which you can set in `package.json`:

```js
"script" : {
  "start": "roadhog server",
  "start:no-proxy": "cross-env NO_PROXY=true roadhog server"
}
```

Then make a judgment in `.roadhogrc.mock.js`:

```js
const noProxy = process.env.NO_PROXY === 'true';
...
export default noProxy ? {} : delay(proxy, 1000);
```
