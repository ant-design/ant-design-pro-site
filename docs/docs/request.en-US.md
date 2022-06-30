---
order: 31
title: Request
group:
  title: Network Request
nav:
  title: Documents
  path: /docs
  order: 1
---

## Introduction

For middle and back-end applications, a large part of the work lies in the request back-end CRUD interface, in order to further **reduce the user's perception of the request layer**, we removed the default generated utils/request.ts file, and instead exposed to developers through **configuration** of the way to do the request configuration and enhanced processing; at the same time through the business summary of a set of standard **interface structure specification** and **provide unified interface parsing, error handling** capabilities; subsequent will continue to improve configurable items, provide vertical scenarios such as lists, login failure and other solutions.

At the same time, we have a built-in useRequest Hook to encapsulate some common data processing logic, through which you can more simply implement related functions.

## How to use

### Using request

With `import { request } from 'umi';` you can use the built-in request method. [request](https://umijs.org/plugins/plugin-request#request) takes two arguments, the first one is the url and the second one is the options of the request. options is formatted as in umi-request.

Most of the usage of [request](https://umijs.org/plugins/plugin-request#request) is equivalent to umi-request, except that options extends skipErrorHandler with a configuration of true will skip the default error handling and is used for some specific interfaces in the project.

The sample code is as follows.

```tsx | pure
request('/api/user', {
  params: {
    name: 1,
  },
  skipErrorHandler: true,
});
```

### Using useRequest

useRequest is a Hook built into the best practices, through which you get the power of the request interface, whether it's page-flipping or loading more or combining with antd's Table component becomes very easy. A minimal example is as follows.

```tsx | pure
import { useRequest } from 'umi';
export default () => {
  const { data, error, loading } = useRequest(() => {
    return services.getUserList('/api/test');
  });
  if (loading) {
    return <div>loading... </div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{data.name}</div>;
};
```

The first argument to useRequest takes a function that returns a Promise, which is one of the services that OneAPI automatically generates if you have access to OneAPI.

The data returned by the Hook is the data field in the actual JSON data returned by the backend, which is easy to use (of course you can also modify it through configuration). See its [API documentation](https://umijs.org/plugins/plugin-request#userequest) for more on the use of useRequest.

<!-- ### Middleware -->

## Middleware & Interceptors

In some cases we need to do some special processing before the network request is made or after the response. For example, the corresponding Access Token is automatically added to the Header before each request.

[@umijs/plugin-request](https://umijs.org/plugins/plugin-request#responseinterceptors) provides three runtime configuration items to help us accomplish similar needs.

### Middleware: middlewares

Middlewares, like interceptors, also allow developers to gracefully do enhanced processing before and after network requests. However, it is a little more complex to use and we recommend using interceptors in preference.

The sample code is as follows.

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

The execution order is as follows.

> request1 -> request2 -> response -> response2 -> response1

It is strongly recommended that you take a closer look at [umi-request](https://github.com/umijs/umi-request) about [middleware's documentation](https://github.com/umijs/umi-request/blob/master/README) \_zh-cn.md# middleware).

### Pre-request interception: requestInterceptors

To intercept web requests before they are processed by `.then` or `catch`, you can add the following configuration inside the `src/app.tsx` web request configuration.

```tsx | pure
export const request: RequestConfig = {
  // Add a pre-request interceptor that automatically adds an AccessToken
  requestInterceptors: [authHeaderInterceptor],
};
```

`requestInterceptors` receives an array, each item of the array is a request interceptor. Equivalent to umi-request's `request.interceptors.request.use()`.

The sample interceptor code is as follows.

```tsx | pure
// src/app.tsx
const authHeaderInterceptor = (url: string, options: RequestConfig) => {
const authHeader = { Authorization: 'Bearer xxxxxx' };
return {
  url: `${url}`,
  options: { . . options, interceptors: true, headers: authHeader }
};
};
```

See the [interceptor documentation](<(https://github.com/umijs/umi-request#interceptor)>) for [umi-request](https://github.com/umijs/umi-request) for more details.

### Post-response interceptors: responseInterceptors

In the network request response `.then` or `catch` processing interception before processing, using basically the same method as [requestInterceptors](request-cn#requestInterceptors: requestinterceptors).

The specific sample code is as follows.

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

## Uniform specification

### Uniform error handling

Interface requests are not always 100% successful, but normally we expect them to be successful and only fail if there is a network exception or a problem with permissions, etc. So we usually expect the code logic to consider only the successful cases, and for exceptions just handle them uniformly in one place.

In best practice, we have defined a set of interface formatting and error handling specifications that will uniformly indicate an error when it fails, and the code will only need to consider success. You can use `import { request } from 'umi';` to get that capability using the request method built into the best practice.

The default interface format is

```tsx | pure
export interface response {
  success: boolean; // if request is success
  data?: any; // response data
  errorCode?: string; // code for errorType
  errorMessage?: string; // message display to user
  showType?: number; // error display type: 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
  traceId?: string; // Convenient for back-end Troubleshooting: unique request ID
  host?: string; // onvenient for backend Troubleshooting: host of current access server
}
```

Of course you can also modify or customize some of the logic of your project through the runtime configuration of `request` exposed in `app.tsx`, see `@umijs/plugin-request`'s [documentation](https://umijs.org/plugins/plugin- request).

When there is an HTTP error or `success` is `false` in the returned data request will throw an exception which will be caught by useRequest when you use it, in most cases you don't need to care about the exception, the uniform error handling will do a uniform error hints. For some scenarios where you need to handle errors manually, you can use the `onError` method or the `error` object exposed by useRequest to do custom handling.

### Uniform interface specification

In addition to the outermost specification defined above for error handling, we also provide a specification for the data format within `data`. For paging scenarios we recommend the following format for the backend, so that the frontend can easily interface with antd's Table component, but of course, if the backend is not in this format, you can use the `formatResult` configuration of the `useRequest` Hook to do the conversion.

```tsx | pure
{
 list: [
 current?]
 current?: number,
 pageSize?: number,
 total?: number,
}
```

## Reference: back-end interface specification recommendations

In order to be able to distinguish between pages and interfaces when finally deployed, and also to facilitate front-end debugging to do interface forwarding, we recommend adding the `/api` prefix to the back-end interface path.

In addition, the return format of the interface is recommended to refer to the unified interface specification, to facilitate uniform error handling, the example is as follows.

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

For easy ones it can be as follows.

```tsx | pure
{
"success": true,
"data": {},
"errorMessage": "error message"
}
```

Refer to the Uniform Error Handling and Uniform Interface specification above for details.

If the backend return format does not conform to the specification you can refer to `@umijs/plugin-request`'s [documentation](https://umijs.org/plugins/plugin-request) to configure the `errorConfig.adaptor` compatibility in the runtime configuration.
