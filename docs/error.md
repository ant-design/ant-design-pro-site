---
order: 16
title: 错误处理
type: 进阶
---

在用户使用过程中，可能遇到各种异常情况，比如页面404，申请结果失败，请求的返回异常等等，这篇文档会按照报错形式的不同，分别介绍下相应的处理建议。

## 页面级报错

### 应用场景

- 路由直接引导到报错页面，比如你可以将无效的链接 redirect 到预设的 404 页面。
- 代码控制跳转到报错页面，比如根据请求返回的数据，将没有权限的用户引导到 403 页面。

### 实现

针对页面级的报错，我们提供了两个业务组件供你选择，可以很方便地实现一个报错页面：

`Exception 异常页`

```js
<Exception type="404" />
```

默认支持 404，403，500 三种错误，也可自定义文案等内容。

`Result 结果页`

```js
<Result
  type="error"
  title="提交失败"
  description="请核对并修改以下信息后，再重新提交。"
  actions={<Button size="large" type="primary">返回修改</Button>}
  />
```

这个组件一般用在提交结果展示，文案操作等均可自定义。

## 提示性报错

### 应用场景

- 表单项校验报错。
- 操作反馈。
- 网络请求错误。

### 实现

关于表单项报错，请参考 [antd Form](https://ant.design/components/form-cn/) 中的实现。对于操作反馈和网络请求错误提示，有一些组件可能会用到：

- [Alert](https://ant.design/components/alert-cn/)
- [message](https://ant.design/components/message-cn/)
- [notification](https://ant.design/components/notification-cn/)

在单页应用中，最常见的需求就是处理网络错误信息，一般我们需要对此进行统一处理，由于 Ant Design Pro 使用 `request.js` 统一处理请求，所以错误的处理也可以很方便的加入其中：

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
