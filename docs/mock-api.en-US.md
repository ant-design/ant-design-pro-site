---
order: 13
title: Mock Data
type: Development
---

Mocking data is a significant part of web application front end development which is the key of separating front-end and back-end. We can mock Restful API of background service to avoid development block of service side development progress.

We can use [umi](https://umijs.org/) to mock data in Ant Design Pro.

## Use umi

In umi, files in `mock` directory means mocking files, which export definitions of APIs. It supports realtime refreshment and ES6, and has friendly errors prompts. More details in [umijs.org#mock-data](https://umijs.org/guide/mock-data.html).

```js
export default {
  // literal Object and Array
  'GET /api/users': { users: [1, 2] },

  // GET could be omitted
  '/api/users/1': { id: 1 },

  // implement simple API by express@4
  'POST /api/users/create': (req, res) => {
    res.end('OK');
  },

  // Forward to another server
  // `/assets/0.0.50/index.css` will be forword https://assets.online/assets/0.0.50/index.css
  'GET /assets/*': 'https://assets.online/',

  // Forward to another server with glob matcher
  // `/someDir/0.0.50/index.css` will be forword to https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
};
```

When you start server by `umi dev`, the mock service will handle network requests (such as `GET /api/users`) according to your rules defined in the `mock` directory. You can respond to client with literal data, or process the request with a function, or forward the request to another server.

For example, there is a mapping rule like this:

```
'GET /api/currentUser': {
  name: 'momo.zxy',
  avatar: imgMap.user,
  userid: '00000001',
  notifyCount: 12,
},
```

Now you can see the result in browser console when visits `/api/currentUser`:

Request:

<img src="https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png" width="400" />

Response:

<img src="https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png" width="600" />

### Using Mock.js

[Mock.js](http://mockjs.com/) is a popular mock library that can help to generate mock data. You can use any library you like along with umi to build mocking service.

```js
import mockjs from 'mockjs';

export default {
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
```

### CORS support

Define header of `response` like this:

```
'POST /api/users/create': (req, res) => {
  ...
  res.setHeader('Access-Control-Allow-Origin', '*');
  ...
},
```

## Divide mock data into different files

We can maintain our mock data in different files for different data models in the large application, and put them in the `mock` directory, then they will be imported automatically.

<img src="https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png" width="200" />

## Delay mock API

In real world the AJAX request usually responds with a network delay which should be simulated in mocking API.

### setTimeout

You can implement the API with `setTimeout`.

```js
'POST /api/forms': (req, res) => {
  setTimeout(() => {
    res.send('Ok');
  }, 1000);
},
```

### Use roadhog-api-doc plugin

We provide `delay` function in [roadhog-api-doc](https://github.com/nikogu/roadhog-api-doc) to make this convenient.

```js
import { delay } from 'roadhog-api-doc';

const proxy = {
  'GET /api/project/notice': getNotice,
  'GET /api/activities': getActivities,
  'GET /api/rule': getRule,
  'GET /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
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

// Delay one second for all interfaces
export default delay(proxy, 1000);
```

### Integrate

If you need to integrate with real service after finishing front end development via mock data, just close the mock data or forward request to the real interfaces.

```bash
$ npm run start:no-mock
```
