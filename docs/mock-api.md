---
order: 13
title:
  en-US: Mock Data 
  zh-CN: Mock 和联调 
type: 进阶
---

Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。

在 Ant Design Pro 中，因为我们底层的工具是 roadhog，而它自带了代理请求功能，通过代理请求就能够轻松处理数据模拟的功能。

## 使用 roadhog 的请求代理功能

在通过配置 `.roadhogrc.mock.js` 来处理代理请求，支持基于 `require` 动态分析的实时刷新，支持 ES6 语法，以及友好的出错提示，详情参看 [roadhog](https://github.com/sorrycc/roadhog#mock)。

```js
export default {
  // 支持值为 Object 和 Array
  'GET /api/users': { users: [1, 2] },

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },

  // Forward 到另一个服务器
  'GET /assets/*': 'https://assets.online/',

  // Forward 到另一个服务器，并指定子路径
  // 请求 /someDir/0.0.50/index.css 会被代理到 https://g.alicdn.com/tb-page/taobao-home, 实际返回 https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
};
```

当客户端（浏览器）发送请求，如：`GET /api/users`，那么本地启动的 `roadhog server` 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。

比如定义如下映射规则：

```
'GET /api/currentUser': {
  name: 'momo.zxy',
  avatar: imgMap.user,
  userid: '00000001',
  notifyCount: 12,
},
```

访问的本地 `/api/users` 接口：

请求头

<img src="https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png" width="400" />

返回的数据

<img src="https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png" width="600" />

### 引入 Mock.js

[Mock.js](http://mockjs.com/) 是常用的辅助生成模拟数据的第三方库，当然你可以用你喜欢的任意库来结合 roadhog 构建数据模拟功能。

```js
import mockjs from 'mockjs';

export default {
  // 使用 mockjs 等三方库
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
```

### 添加跨域请求头

设置 `response` 的请求头即可：

```
'POST /api/users/create': (req, res) => {
  ...
  res.setHeader('Access-Control-Allow-Origin', '*');
  ...
},
```

## 合理的拆分你的 mock 文件

对于整个系统来说，请求接口是复杂并且繁多的，为了处理大量模拟请求的场景，我们通常把每一个数据模型抽象成一个文件，统一放在 `mock` 的文件夹中，然后再在 `.roadhog.mock.js` 中引入。

<img src="https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png" width="200" />

`.roadhog.mock.js` 的样例如下：

```js
import mockjs from 'mockjs';

// 引入分离的 mock 文件
import { getRule, postRule } from './mock/rule';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { getProfileBasicData } from './mock/profile';
import { getProfileAdvancedData } from './mock/profile';
import { getNotices } from './mock/notices';

const proxy = {
  'GET /api/fake_list': getFakeList,
  'GET /api/fake_chart_data': getFakeChartData,
  'GET /api/profile/basic': getProfileBasicData,
  'GET /api/profile/advanced': getProfileAdvancedData,
  'GET /api/notices': getNotices,
};

export default proxy;
```

## 如何模拟延迟

为了更加真实的模拟网络数据请求，往往需要模拟网络延迟时间。

### 手动添加 setTimeout 模拟延迟

你可以在重写请求的代理方法，在其中添加模拟延迟的处理，如：

```js
'POST /api/forms': (req, res) => {
  setTimeout(() => {
    res.send('Ok');
  }, 1000);
},
```

### 使用插件模拟延迟

上面的方法虽然简便，但是当你需要添加所有的请求延迟的时候，可能就麻烦了，不过可以通过第三方插件来简化这个问题，如：[roadhog-api-doc](https://github.com/nikogu/roadhog-api-doc)。

```js
import { delay } from 'roadhog-api-doc';

const proxy = {
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'GET /api/rule': getRule,
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }]
  }),
  'GET /api/fake_list': getFakeList,
  'GET /api/fake_chart_data': getFakeChartData,
  'GET /api/profile/basic': getProfileBasicData,
  'GET /api/profile/advanced': getProfileAdvancedData,
  'POST /api/register': (req, res) => {
    res.send({ status: 'ok' });
  },
  'GET /api/notices': getNotices,
};

// 调用 delay 函数，统一处理
export default delay(proxy, 1000);
```

## 生成 API 文档

在跟服务端联调开发的时候，往往需要约定接口，包含路径，方法，参数，返回值等信息，`roadhog-api-doc` 提供通过 `.roadhog.mock.js` 自动生成文档的功能，安装使用详见：[roadhog-api-doc](https://github.com/nikogu/roadhog-api-doc)。

而相关的文档信息，同样需要按照 roadhog-api-doc 提供的方式写到 `.roadhog.mock.js` 中。

```js
import { postRule } from './mock/rule';
import { format } from 'roadhog-api-doc';

const proxy = {
  'GET /api/currentUser': {
    // 接口描述
    $desc: "获取当前用户接口",
    // 接口参数
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    // 接口返回
    $body: {
      name: 'momo.zxy',
      avatar: imgMap.user,
      userid: '00000001',
      notifyCount: 12,
    },
  },
  'POST /api/rule': {
    $params: {
      pageSize: {
        desc: '分页',
        exp: 2,
      },
    },
    $body: postRule,
  },
};

// format 函数用于保证本地的模拟正常，如果写了文档，这个函数转换是必要的
export default format(proxy);
```

生成的结果如下：

<img width="500" src="https://gw.alipayobjects.com/zos/rmsportal/TKmBIxyMTBiMJZtAlBgg.png" />

### 联调

当本地开发完毕之后，如果服务器的接口满足之前的约定，那么你只需要不开本地代理或者重定向代理到目标服务器就可以访问真实的服务端数据，非常方便。
