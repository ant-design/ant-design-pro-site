---
order: 10
title: 启动项目
group:
  title: 基础使用
nav:
  title: 文档
  path: /docs
  order: 1
---

Ant Design Pro 以 umi 作为脚手架，启动和开发与 umi 基本相同。

## 启动项目

在项目根目录下执行 `npm run start`, 即可启动项目。

![strat](https://gw.alipayobjects.com/zos/antfincdn/%26df0HXZbRD/4B634700-7C4F-44BA-A45C-E250601C8971.png)

此时访问 [http://localhost:8000/](http://localhost:8000/) 即可看到下面的界面。

![app](https://gw.alipayobjects.com/zos/antfincdn/9bvHFQRjep/0B7EE9A4-2CD7-4626-9B8E-DEEA85EE2126.png)

> 由于默认使用了 user 权限，所以需要使用 admin 登录才能看到全部页面。

## 区分环境

详情查看 [环境变量](/zh-CN/docs/environment-manage/)

## MOCK

在很多情况下前端是在后端还没有开发完成之前就开始开发的，这时候我们就需要用到 mock 数据了。Pro 中约定了两种 mock 的定义方式。

- 在根目录的 mock 中接入
- 在 src/page 中的 mock.ts 的文件中配置

一个标准的 mock 由三部分组成，以 List 配置为例。

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

第一部分是 网络请求的 Method 配置，完整的列表可以看[这里](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods)。一般我们都会使用 GET 和 POST。

第二部分是 URL 也就是我们发起网络请求的地址。一般我们会使用统一的前缀方便代理的使用。

第三部分是 数据处理，我们可以配置一个 JSON, JSON 数据会直接返回。或者是配置一个 function，function 有三个参数 [req](https://expressjs.com/en/4x/api.html#req), [res](https://expressjs.com/en/4x/api.html#res)，url 。具体使用方式与 [express](https://expressjs.com/) 相同。数据必须要通过 `res.send` 来返回。
