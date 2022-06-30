---
order: 31
title: 网络请求
group:
  title: 后端集成
nav:
  title: 文档
  path: /docs
  order: 1
---

## 简介

对于中后台应用来说，很大一部分工作就在于请求后端的 CRUD 的接口，为进一步**降低用户对请求层的感知**，我们移除了默认生成的 utils/request.ts 文件，改成通过**配置化**的方式暴露给开发者做请求的配置和增强处理；同时通过业务总结出一套标准的**接口结构规范**，并**提供统一的接口解析、错误处理**的能力；后续将持续完善可配置项、提供垂直场景如列表、登录失效等解决方案。

同时我们内置了一个 useRequest 的 Hook 来封装一些常见的处理数据的逻辑，通过它你可以更加简单的实现相关功能。

## 如何使用

### 使用 request

通过 `import { request } from 'umi';` 你可以使用内置的请求方法。 [request](https://umijs.org/zh-CN/plugins/plugin-request#request) 接收两个参数，第一个参数是 url，第二个参数是请求的 options。options 具体格式参考 umi-request。

[request](https://umijs.org/zh-CN/plugins/plugin-request#request) 的大部分用法等同于 umi-request，一个不同的是 options 扩展了一个配置 skipErrorHandler，该配置为 true 是会跳过默认的错误处理，用于项目中部分特殊的接口。

示例代码如下：

```tsx | pure
request('/api/user', {
  params: {
    name: 1,
  },
  skipErrorHandler: true,
});
```

### 使用 useRequest

useRequest 是最佳实践中内置的一个 Hook，通过它你可以获得强大的请求接口的能力，不管是翻页还是加载更多还是和 antd 的 Table 容易许多。一个最简单的示例如下：

```tsx | pure
import { useRequest } from 'umi';
export default () => {
  const { data, error, loading } = useRequest(() => {
    return services.getUserList('/api/test');
  });
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data.name}</div>;
};
```

其中 useRequest 的第一个参数接收一个 function，该 function 需要返回一个 Promise，如果你接入了 OneAPI 那么 OneAPI 自动生成的 services 就是一个个这样的 function。

该 Hook 的返回中暴露了各项值，然后你就可以消费它们了，该 Hook 返回的 data 是后端实际返回 JSON 数据中的 data 字段，方便使用（当然你也可以通过配置修改）。更多关于 useRequest 的用法参考它的 [API 文档](https://umijs.org/zh-CN/plugins/plugin-request#userequest)。

<!-- ### 中间件 -->

## 中间件 & 拦截器

在某些情况下我们需要在网络请求发出前或响应后做一些特殊处理。比如，在每次请求前在 Header 内自动加上对应的 Access Token。

[@umijs/plugin-request](https://umijs.org/zh-CN/plugins/plugin-request#responseinterceptors) 提供了三个运行时配置项来帮助我们完成类似需求。

### 中间件：middlewares

中间件和拦截器一样，同样可以让开发者优雅地做网络请求前后的增强处理。但是用起来稍复杂，推荐优先使用拦截器。

示例代码如下：

```tsx | pure
// src/app.tsx
const demo1Middleware = async (ctx: Context, next: () => void) => {
  console.log('request1');
  await next();
  console.log('response1');
};

const demo2Middleware = async (ctx: Context, next: () => void) => {
  console.log('request2');
  await next();
  console.log('response2');
};

export const request: RequestConfig = {
  middlewares: [demo1Middleware, demo2Middleware],
};
```

执行顺序如下：

> request1 -> request2 -> response -> response2 -> response1

强烈建议你再细看一下 [umi-request](https://github.com/umijs/umi-request) 关于 [中间件的文档](https://github.com/umijs/umi-request/blob/master/README_zh-CN.md#中间件)。

### 请求前拦截：requestInterceptors

在网络请求的 `.then` 或 `catch` 处理前拦截，你可以在 `src/app.tsx` 网络请求配置内增加如下配置：

```tsx | pure
export const request: RequestConfig = {
  // 新增自动添加AccessToken的请求前拦截器
  requestInterceptors: [authHeaderInterceptor],
};
```

`requestInterceptors` 接收一个数组，数组的每一项为一个 request 拦截器。等同于 umi-request 的 `request.interceptors.request.use()` 。

拦截器示例代码如下：

```tsx | pure
// src/app.tsx
const authHeaderInterceptor = (url: string, options: RequestConfig) => {
  const authHeader = { Authorization: 'Bearer xxxxxx' };
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: authHeader },
  };
};
```

更具体内容见 [umi-request](https://github.com/umijs/umi-request) 的 [拦截器文档](<(https://github.com/umijs/umi-request#interceptor)>)。

### 响应后拦截：responseInterceptors

在网络请求响应的 `.then` 或 `catch` 处理前拦截处理，使用方法基本和 [requestInterceptors](request-cn#请求前拦截：requestinterceptors) 相同。

具体示例代码如下：

```tsx | pure
// src/app.tsx
const demoResponseInterceptors = (response: Response, options: RequestConfig) => {
  response.headers.append('interceptors', 'yes yo');
  return response;
};

export const request: RequestConfig = {
  responseInterceptors: [demoResponseInterceptors],
};
```

## 统一规范

### 统一错误处理

接口请求并不一定是 100% 成功的，但是正常情况下我们预期接口都是成功的，只有网络异常或者权限等问题的情况下才会出现接口请求失败。所以我们通常期望的是代码逻辑只需要考虑成功的情况，对于异常情况只要在一个地方统一处理即可。

在最佳实践中，我们定义了一套接口格式和错误处理的规范，当失败时会统一提示错误，代码只需要考虑成功即可。你可以使用 `import { request } from 'umi';`  来使用最佳实践内置的请求方法来获得该能力。

默认的接口格式为：

```tsx | pure
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

当然你也可以通过 `app.tsx`  中暴露的 `request`  的运行时配置来修改或者自定义自己项目的一些逻辑，具体参考 `@umijs/plugin-request`  的[文档](https://umijs.org/zh-CN/plugins/plugin-request)。

当出现 HTTP 错误或者返回的数据中 `success`  为 `false`  的情况下 request 会抛出一个异常，当你使用 useRequest 的时候该异常会被 useRequest 捕获，大部分情况下你不需要关心异常的情况，统一的错误处理会做统一的错误提示。对于部分场景需要手动处理错误的时候你可以通过 useRequest 暴露的 `onError`  方法或者 `error`  对象来做自定义处理。

### 统一接口规范

除了上面错误处理所定义的最外层的规范以外，对于 `data`  内的数据格式我们也提供了一套规范。对于分页场景来说我们推荐后端采用如下的格式，这样前端可以很简单的和 antd 的 Table 组件对接，当然，如果后端不是这个格式也可以使用 `useRequest` Hook 的 `formatResult`  配置来做转换。

```tsx | pure
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

```tsx | pure
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

```tsx | pure
{
"success": true,
"data": {},
"errorMessage": "error message"
}
```

具体参考上面的统一错误处理和统一接口规范。

如果后端返回格式不符合规范的可以参考 `@umijs/plugin-request` 的[文档](https://umijs.org/zh-CN/plugins/plugin-request)，配置运行时配置中的 `errorConfig.adaptor` 兼容。
