---
order: 19
title: 使用 API 文档工具
type: 进阶
---

在日常开发中，往往是前后端分离的，这个时候约定好一套接口标准，前后端各自独立开发，就不会被对方的技术难点给阻塞住，从而保证项目进度。

在 Ant Design Pro 中我们已经有了一套比较完善的 mock 功能，而 [roadhog-api-doc](https://github.com/nikogu/roadhog-api-doc) 工具，则能够从项目的 mock 数据中读取接口信息生成对应的文档，这样就能够更加清晰明了的展现项目的接口情况。

效果如下：[Pro API Docs](https://preview.pro.ant.design/api.html)。

## 如何使用

```bash
$ npm install roadhog-api-doc -g
```

### 本地服务

进入到项目根目录，运行：

```bash
$ roadhog-api-doc start [port]
```

就可以在当前项目跑起一个文档网站，但是前提是必须跟 Ant Design Pro 一样是基于 [roadhog](https://github.com/sorrycc/roadhog) 的项目，并且使用了数据 mock 功能，因为文档的信息来源就是 mock 文件。

需要额外注意的是，上面的 `port` 参数指的是当前本地的 `roadhog` 应用起的服务，如果指定了可以在本地直接点击访问项目接口，没有指定则会静态化网络请求。

### 静态站点生成

项目根目录，运行：

```bash
$ roadhog-api-doc build
```

会生成三个文档站点静态文件：`api.html`、`api.js`、`api.css`，你可以将其部署到自己的站点中供线上访问，这里的数据已经被静态化（转换网络请求为代码数据）。

### 书写文档

通常来讲，你无需额外加入任何依赖就可以生成文档，但是如果你需要对接口做出说明，需要按照以下格式对 `roadhog mock` 文件进行修改：

```bash
$ npm install roadhog-api-doc --save-dev # 将 roadhog-api-doc 作为本地工具依赖安装
```

```js
import { format } from 'roadhog-api-doc';

const proxy = {
  'GET /api/currentUser': {
    $desc: "获取当前用户接口",
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: {
      name: 'momo.zxy',
      avatar: imgMap.user,
      userid: '00000001',
      notifyCount: 12,
    },
  },
};

export default format(proxy);
```

其中：

- $desc: 接口说明
- $params: 接口参数说明，对象描述各个参数的意义
- $body: 数据返回结果，通常就是 mock 的数据

<img width="600" src="https://gw.alipayobjects.com/zos/rmsportal/PVfsHataJahAwAVaKDtp.png" />

### 本地测试 mock 数据和真实端口

当启动本地的 API Docs 站点以后，可以点击 `send` 按钮发送 `POST` 或者 `GET` 请求，并且返回值会在弹出框中显示：

<img width="600" src="https://gw.alipayobjects.com/zos/rmsportal/mkgrIEbmhXZFbSOWvTCz.png" />

其中需要注意的是，如果启动 API Docs 站点时，没有加端口号，那么这里的返回数据是静态数据，如果加了端口号并且本地也同时跑起了项目，那么就会直接返回实际数据。

如果你想直接访问线上的真实数据，那么需要改写当前项目的 `.roadhog.mock.js`，[重定向](https://github.com/sorrycc/roadhog#mock)到线上路径。

可以通过访问 [roadhog-api-doc github](https://github.com/nikogu/roadhog-api-doc) 了解更多。
