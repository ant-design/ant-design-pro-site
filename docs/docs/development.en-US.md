---
order: 11
title: Start Project
group:
  title: Basic Usage
nav:
  title: Documents
  path: /docs
  order: 1
---

Ant Design Pro 以 umi 作为脚手架，启动和开发与 umi 基本相同。

## start your build

Execute `npm run start` under the project root to start the project.

![strat](https://gw.alipayobjects.com/zos/antfincdn/%26df0HXZbRD/4B634700-7C4F-44BA-A45C-E250601C8971.png)

Visit the following interface at [http://localhost:8000/](http://localhost:8000/).

![app](https://gw.alipayobjects.com/zos/antfincdn/9bvHFQRjep/0B7EE9A4-2CD7-4626-9B8E-DEEA85EE2126.png)

> Because user permissions are used by default, you can use admin to sign in to see all pages.

## Differentiate environment

For more information, see [environment variables](/docs/environment-manage)

## MOCK

In many cases, the front end is really developed before it's completed, and we need to use mock data. Two ways of defining mocks are agreed in Pro.

- Access in the mock of the root
- Configured in the file of mock.ts in src/page

A standard mock consists of three parts, for example, a List configuration.

```tsx | pure
export default {
  'GET /api/rule': [{ name: '12' }],
  'POST /api/rule': (req: Request, res: Response, u: string) => {
    res.send({
      success: true,
    });
  },
};
```

The first part is the Method configuration of the network request, the full list can be seen [here](https://developer.mozilla.org/zh-CN/docs/web/HTTP/Methods). Generally we use GET and POST.

The second part is the URL, which is the address where we initiate the network request. Generally we will use a uniform prefix to facilitate the use of agents.

The third part is data processing, we can configure a JSON, JSON data will be returned directly. Or configure a function with three parameters [req](https://expressjs.com/en/4x/api.html#req), [res](https://expressjs.com/en/4x/api.html#res),url. Use it in the same way as [express](https://expressjs.com/). The data must be returned by `res.send`.
