---
order: 17
title: 错误处理
type: 进阶
---

在用户使用过程中，可能遇到各种异常情况，比如页面 404，申请结果失败，请求的返回异常等等，这篇文档会按照报错形式的不同，分别介绍下相应的处理建议。

## 页面级报错

### 应用场景

- 路由直接引导到报错页面，比如你输入的网址没有匹配到任何页面，可以由路由引导到预设的 404 页面。
- 代码控制跳转到报错页面，比如根据请求返回的数据，将没有权限的用户引导到 403 页面。

### 实现

针对页面级的报错，我们提供了两个业务组件供你选择，可以很方便地实现一个报错页面：

- [Exception 异常页](https://preview.pro.ant.design/exception/404)

```js
<Exception type="404" />
```

默认支持 404，403，500 三种错误，也可自定义文案等内容。

- [Result 结果页](https://preview.pro.ant.design/result/fail)

```js
<Result
  type="error"
  title="提交失败"
  description="请核对并修改以下信息后，再重新提交。"
  actions={
    <Button size="large" type="primary">
      返回修改
    </Button>
  }
/>
```

这个组件一般用在提交结果展示，文案操作等均可自定义。

## 提示性报错

### 应用场景

- 表单项校验报错。
- 操作反馈。
- 网络请求错误。

### 实现

关于表单项报错，请参考 [antd Form](http://ant.design/components/form-cn/) 中的实现。对于操作反馈和网络请求错误提示，有一些组件可能会用到：

- [Alert](http://ant.design/components/alert-cn/)
- [message](http://ant.design/components/message-cn/)
- [notification](http://ant.design/components/notification-cn/)

在单页应用中，最常见的需求就是处理网络错误信息，我们可以利用 message 和 notification 来吐出响应的接口/网络/业务数据错误。

<img src="https://gw.alipayobjects.com/zos/rmsportal/cVTaurnfguplvNbctgBN.png" width="400" />

Ant Design Pro 封装了一个强大的 `request.ts` 统一处理请求，提供了默认的错误处理以及提示。

```js
const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: errortext,
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
};
```

为了方便展示 404 等页面，我们在 `request.ts` 中封装了根据状态跳转到相应页面的逻辑,建议在线上环境中删除这个逻辑，代码如下：

```js
    .catch(e => {
      const status = e.name;
      if (status === 401) {
        // @HACK
        /* eslint-disable no-underscore-dangle */
        window.g_app._store.dispatch({
          type: 'login/logout',
        });
        return;
      }
      // environment should not be used
      if (status === 403) {
        router.push('/exception/403');
        return;
      }
      if (status <= 504 && status >= 500) {
        router.push('/exception/500');
        return;
      }
      if (status >= 404 && status < 422) {
        router.push('/exception/404');
      }
    });
```

完整代码可参考：https://github.com/ant-design/ant-design-pro/blob/80ce8fe43746426abc054c1cf76b8f733f54b001/src/utils/request.ts
