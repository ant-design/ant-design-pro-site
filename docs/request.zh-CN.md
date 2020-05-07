---
order: 14
title: 网络请求
type: 基础使用
---

## 简介

对于中后台应用来说，很大一部分工作就在于请求后端的 CRUD 的接口，为进一步**降低用户对请求层的感知**，我们移除了默认生成的 utils/request.ts 文件，改成通过**配置化**的方式暴露给开发者做请求的配置和增强处理；同时通过业务总结出一套标准的**接口结构规范**，并**提供统一的接口解析、错误处理**的能力；后续将持续完善可配置项、提供垂直场景如列表、登录失效等解决方案。

同时我们内置了一个 useRequest 的 Hook 来封装一些常见的处理数据的逻辑，通过它你可以更加简单的实现相关功能。

## 如何使用

### 使用 useRequest

useRequest 是最佳实践中内置的一个 Hook，通过它你可以获得强大的请求接口的能力，不管是翻页还是加载更多还是和 antd 的 Table 组件结合都变得非常简单。一个最简单的示例如下：

```javascript
import React from 'react';
import { useRequest } from 'umi';
import services from '@/services/afs2demo';

const YourComponent: React.FC = () => {
  const { data, loading } = useRequest(() => {
    return services.AccountController.addAccount();
  });
  if (loading) {
    return <>Loading...</>;
  }
  return <div>{data?.name}</div>;
};

export default YourComponent;
```

其中 useRequest 的第一个参数接收一个 function，该 function 需要返回一个 Promise，如果你接入了 OneAPI 那么 OneAPI 自动生成的 services 就是一个个这样的 function。

该 Hook 的返回中暴露了各项值，然后你就可以消费它们了，该 Hook 返回的 data 是后端实际返回 JSON 数据中的 data 字段，方便使用（当然你也可以通过配置修改）。更多关于 useRequest 的用法参考它的 [API 文档](https://umijs.org/plugins/plugin-request#userequest)。

### 统一错误处理

接口请求并不一定是 100% 成功的，但是正常情况下我们预期接口都是成功的，只有网络异常或者权限等问题的情况下才会出现接口请求失败。所以我们通常期望的是代码逻辑只需要考虑成功的情况，对于异常情况只要在一个地方统一处理即可。

在最佳实践中，我们定义了一套接口格式和错误处理的规范，当失败时会统一提示错误，代码只需要考虑成功即可。你可以使用 `import { request } from 'umi';`  来使用最佳实践内置的请求方法来获得该能力。

默认的接口格式为：

```typescript
export interface response {
  success: boolean; // if request is success
  data?: any; // response data
  errorCode?: string; // code for errorType
  errorMessage?: string; // message display to user
  showType?: number; // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
  host?: string; // onvenient for backend Troubleshooting: host of current access server
}
```

当然你也可以通过 `app.ts`  中暴露的 `request`  的运行时配置来修改或者自定义自己项目的一些逻辑，具体参考 `@umijs/plugin-request`  的[文档](https://umijs.org/plugins/plugin-request)。

当出现 HTTP 错误或者返回的数据中 `success`  为 `false`  的情况下 request 会抛出一个异常，当你使用 useRequest 的时候该异常会被 useRequest 捕获，大部分情况下你不需要关心异常的情况，统一的错误处理会做统一的错误提示。对于部分场景需要手动处理错误的时候你可以通过 useRequest 暴露的 `onError`  方法或者 `error`  对象来做自定义处理。

### 统一接口规范

除了上面错误处理所定义的最外层的规范以外，对于 `data`  内的数据格式我们也提供了一套规范。对于分页场景来说我们推荐后端采用如下的格式，这样前端可以很简单的和 antd 的 Table 组件对接，当然，如果后端不是这个格式也可以使用 `useRequest` Hook 的 `formatResult`  配置来做转换。

```javascript
{
   list: [
   ],
   current?: number,
   pageSize?: number,
   total?: number,
}
```

## 参考：后端接口规范建议

为了最后部署的时候能够区分页面和接口，同时也是为了方便前端调试做接口的转发，我们推荐后端接口路径统一添加 `/api`  的前缀。

另外接口的返回格式建议参考统一的接口规范，方便做统一的错误处理，示例如下：

```json
{
  "success": true,
  "data": {},
  "errorCode": "1001",
  "errorMessage": "error message",
  "showType": 2,
  "traceId": "someid",
  "host": "10.1.1.1"
}
```

对于简单的可以如下：

```json
{
  "success": true,
  "data": {},
  "errorMessage": "error message"
}
```

具体参考上面的统一错误处理和统一接口规范。

如果后端返回格式不符合规范的可以参考 `@umijs/plugin-request` 的[文档](https://umijs.org/plugins/plugin-request)，配置运行时配置中的 `errorConfig.adaptor` 兼容。
