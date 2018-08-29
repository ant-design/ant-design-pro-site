---
order: 13
title: Mock Data
type: Advanced
---

Mocking data is a significant part of web application front end development which is the key of seperating front-end and back-end. We can mock Restful API of background service to avoiding development block of service side development progress.

We can use [roadhog](https://github.com/sorrycc/roadhog) to proxy or mock data in Ant Design Pro.

## Use roadhog

Create `.roadhogrc.mock.js` in your project root directory to mock API like below, more detail in [roadhog](https://github.com/sorrycc/roadhog#mock).

```js
export default {
  // literal Object and Array
  'GET /api/users': { users: [1, 2] },

  // GET could be omitted
  '/api/users/1': { id: 1 },

  // implement simple API by express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },

  // Forward to another server
  // `/assets/0.0.50/index.css` will be forword https://assets.online/assets/0.0.50/index.css
  'GET /assets/*': 'https://assets.online/',

  // Forward to another server with glob matcher
  // `/someDir/0.0.50/index.css` will be forword to https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css
  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',
};
```

When you start server by `roadhog dev`, the mock service will proxy network requests as follow your rules defined in `.roadhogrc.mock.js`.

You can response literal object like this:

```
'GET /api/currentUser': {
  name: 'momo.zxy',
  avatar: imgMap.user,
  userid: '00000001',
  notifyCount: 12,
},
```

Now you can see the result in browser console when visits `/api/users`:

Request:

<img src="https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png" width="400" />

Response:

<img src="https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png" width="600" />

### Using Mock.js

[Mock.js](http://mockjs.com/) is a popular mock library that can help to generate mock data, we can use it in `.roadhogrc.mock.js`.

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

We can maintain our mock data in different files for different data models in the large application, and import them in `.roadhog.mock.js`.

<img src="https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png" width="200" />

`.roadhog.mock.js` would be like:

```js
import mockjs from 'mockjs';

// import mock files
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

## Delay mock API

In real world the AJAX request usually response with a network delay which should be simulated in mocking API.

### setTimeout

You can implement the API within `setTimeout`.

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

// Delay one second for all interfaces
export default delay(proxy, 1000);
```

## Generate API documentation

A detailed API documentation includes path, method, params and response will be helpful when we collaborate with server-side developer. `roadhog-api-doc` can generate one from your `.roadhog.mock.js`.

Implement you API information in `.roadhog.mock.js` like below:

```js
import { postRule } from './mock/rule';
import { format } from 'roadhog-api-doc';

const proxy = {
  'GET /api/currentUser': {
    // Description
    $desc: "Get the current user info",
    // Params
    $params: {
      pageSize: {
        desc: 'Page size',
        exp: 2,
      },
    },
    // Response Body
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
        desc: 'Page size',
        exp: 2,
      },
    },
    $body: postRule,
  },
};

export default format(proxy);
```

Then run the `npm start` and visit `http://localhost:8989`:

<img width="500" src="https://gw.alipayobjects.com/zos/rmsportal/TKmBIxyMTBiMJZtAlBgg.png" />

### Integrate

If you need to integrate with real service after finish front end development via mock data, just [close the mock data or proxy request to the real interfaces](/docs/server-cn#%E4%BB%8E-mock-%E7%9B%B4%E6%8E%A5%E5%88%87%E6%8D%A2%E5%88%B0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AF%B7%E6%B1%82).

```bash
$ npm run start:no-proxy
```
