---
order: 17
title: Error Handle
type: Advanced
---

During the user's use, various abnormal situations may be encountered, such as page 404, application result failure, request return exception, etc. This document will introduce the corresponding processing suggestions according to the error report form.

## Page Error

### When to be used

- The route is directed to the error page. For example, the URL you entered does not match any page and can be routed to the default 404 page.
- Code control jumps to the error page, such as the user returned without permission to the 403 page based on the data returned by the request.

### Achieve

For page-level error reporting, we provide two business components for you to choose from, which makes it easy to implement an error page:

- [Exception Page](http://preview.pro.ant.design/#/exception/404)

  ```js
  <Exception type="404" />
  ```

By default, it supports 404, 403, and 500 errors, and can also customize the copy and other content.

- [Result Page](http://preview.pro.ant.design/#/result/fail)

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

This component is generally used to display the results of the presentation, copywriting operations, etc. can be customized.

## Prompt Error

### When to be used

- Form verification error.
- Operation feedback.
- Network request error.

### Achieve

For an error in the form item, please refer to the implementation in [antd Form](http://ant.design/components/form-cn/). For operational feedback and network request error prompts, there are some components that might be used:

- [Alert](http://ant.design/components/alert-cn/)
- [message](http://ant.design/components/message-cn/)
- [notification](http://ant.design/components/notification-cn/)

In a single-page application, the most common requirement is to handle network error messages. We can use message and notification to spit out the response Interface/Network/Business data errors.

<img src="https://gw.alipayobjects.com/zos/rmsportal/cVTaurnfguplvNbctgBN.png" width="400" />

Ant Design Pro encapsulates a powerful `request.ts` unified processing request, providing default error handling and hints.

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

In order to facilitate the display of 404 and other pages, we encapsulate the logic in the `request.ts` to jump to the corresponding page according to the state. It is recommended to delete this logic in the online environment. The code is as follows:

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

The complete code can refer to: https://github.com/ant-design/ant-design-pro/blob/80ce8fe43746426abc054c1cf76b8f733f54b001/src/utils/request.ts
