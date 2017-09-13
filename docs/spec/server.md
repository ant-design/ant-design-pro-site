---
order: 6
title: 和服务端进行交互
---

## 前端请求流程

在 Ant Design Pro 中，一个完整的前端 UI 交互到服务端处理流程是这样的：

1. UI 组件交互操作
2. Dispatch model effect，调用 model 的 effect
3. Call service，调用统一管理的 service 请求函数
4. Fetch request，使用封装的 request.js 发送请求
5. Server return，获取服务端返回
6. Put model reducer，然后调用 reducer 改变 state
7. Update model，更新 model

从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 `services` 文件夹中，并且一般按照 model 纬度进行拆分文件，如：

```
services/
  user.js
  api.js
  ...
```

其中，`utils/request.js` 是基于 [fetch](https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch) 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 [request.js](https://github.com/ant-design/test2/blob/master/src/utils/request.js)。

### Effect 处理异步请求

在处理复杂的异步请求的时候，很容易让逻辑混乱，陷入嵌套陷阱，所以 Ant Design Pro 的底层基础框架 [dva](https://github.com/dvajs/dva) 使用 `effect` 的方式来管理同步化异步请求：

```js
effects: {
  *fetch({ payload }, { call, put }) {
    yield put({
      type: 'changeLoading',
      payload: true,
    });
    // 异步请求 1
    const response = yield call(queryFakeList, payload);
    yield put({
      type: 'save',
      payload: response,
    });
    // 异步请求 2
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

通过 [generator](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*) 和 [yield](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield) 使得异步调用的逻辑处理跟同步一样，更多可参看 [dva async logic](https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md#async-logic)。

## 统一处理错误信息

为了处理复杂的网络异常情况，一般需要统一处理错误信息，由于 Ant Design Pro 使用 `request.js` 统一处理请求，所以错误的处理也可以很方便的加入其中：

```js
import fetch from 'dva/fetch';

// 结合 antd 信息组件显示错误信息
import { notification } from 'antd';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  // 判断返回的异常，进行统一反馈
  return response.json().then((result) => {
    if (result.code) {
      notification.error({
        message: result.name,
        description: result.message,
      });
    }
    if (result.stack) {
      notification.error({
        message: '请求错误',
        description: result.message,
      });
    }
    const error = new Error(result.message);
    error.response = response;
    throw error;
  });
}

export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .catch(err => ({ err }));
}
```

## 从 mock 直接切换到服务端请求

通常来讲只要 mock 的接口和真实的服务端接口保持一致，那么只需要关闭 mock 即可直接访问服务端接口，修改 `.roadhogrc.mock.js`，返回为空对象即可。
