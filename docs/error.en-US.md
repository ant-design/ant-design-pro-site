---
order: 17
title: Error Handle
type: Advanced
---

During the user's use, various abnormal situations may be encountered, such as page 404, application result failure, request return exception, etc. This document will introduce the corresponding processing suggestions according to the different forms of error.

## Page-level error

### Application scenario

- The route leads directly to the error page. For example, if the URL you entered does not match any page, it can be routed to the default 404 page.
- Code control jumps to the error page, such as returning data based on the request, and boots the user without permission to 403 page.

### achieve

For page-level error, we provide two business components for you to choose, you can easily implement an error page:

- [Exception exception page](http://preview.pro.ant.design/#/exception/404)

  ```js
  <Exception type="404" />
  ```

The default supports 404, 403, 500 three kinds of errors, but also can customize the copy and other content.

- [Result result page](http://preview.pro.ant.design/#/result/fail)

  ```js
  <Result
    type="error"
    title="Submit Failed"
    description="Please check and modify the following information before resubmitting."
    actions={<Button size="large" type="primary">Return to edit</Button>}
  />
  ```

This component is generally used for submitting results, and copying operations can be customized.

> By default, scaffolding will redirect URLs that cannot match the page to the default 404 page. If you need to customize this page, you can modify the file `./src/routes/Exception/404.js` and the related route configuration here. [BasicLayout.js#L362](https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js#L230)

## Informed error

### Application scenario

- Form item verification error.
- Operational feedback.
- Network request error.

### achieve

For errors on form items, please refer to the implementation in [antd Form] (http://ant.design/components/form-cn/). For operation feedback and network request error prompts, there are some components that may be used:

- [Alert](http://ant.design/components/alert-cn/)
- [message](http://ant.design/components/message-cn/)
- [notification](http://ant.design/components/notification-cn/)

In single-page applications, the most common requirement is to handle network error messages. We can use message and notification to spit out the responding interface/network/service data errors.

<img src="https://gw.alipayobjects.com/zos/rmsportal/cVTaurnfguplvNbctgBN.png" width="400" />

```js
import fetch from 'dva/fetch';
import { notification } from 'antd';

...

fetch(url)
  .then(response => response.json())
  .catch((error) => {
    // Processing the data returned by the interface format error logic
    if (error.code) {
      notification.error({
        message: error.name,
        description: error.message,
      });
    }
    if ('stack' in error && 'message' in error) {
      notification.error({
        message: `Request Error: ${url}`,
        description: error.message,
      });
    }
    return error;
  });
```

Ant Design Pro encapsulates a `request.js` unified processing request. For complete code, refer to:
https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js
