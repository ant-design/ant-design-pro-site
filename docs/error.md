---
order: 18
title: 错误处理
---

## 统一处理网络错误信息

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
