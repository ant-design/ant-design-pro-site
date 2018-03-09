---
order: 19
title: API Development
type: Advanced
---

In daily development, we usually sperate frontend development from backend development based on an API standard, so that the two teams won't block each other to ensure progress of the project.

In Ant Design Pro we already have a relatively complete set of mock feature, and [roadhog-api-doc](https://github.com/nikogu/roadhog-api-doc) is a tool that can generate API documentation from your mock data to give you a clear overview of your APIs.

Live Demo：[Pro API Docs](https://preview.pro.ant.design/api.html)。

## How to use

```bash
$ npm install roadhog-api-doc -g
```

### Running locally

In the project root directory:

```bash
$ roadhog-api-doc start [port]
```

Then a document website will launch for the current project, provided that it must be a project based on [roadhog](https://github.com/sorrycc/roadhog) as with Ant Design Pro and that the data mock feature to be used because the source of documentation is the mock file.

It should be additionally noted that the above `port` parameter refers to the current local `roadhog` application. If specified, you can directly access the project's API locally. If not specified, the network request will be staticized.

### Generating static site

```bash
$ roadhog-api-doc build
```

This command will generate three files: `api.html`, `api.js`, `api.css`. You can deploy these files to your own site for online access, where the data is already statically converted (translating network requests into hardcode data).

### Writing Documentation

Generally speaking, you can generate documents without adding any dependencies, but if you need to write some note for some APIs, you need to modify the `.roadhog.mock.js` file in the following format:

```bash
$ npm install roadhog-api-doc --save-dev # Install roadhog-api-doc as development dependency
```

```js
import { format } from 'roadhog-api-doc';

const proxy = {
  'GET /api/currentUser': {
    $desc: "Get current user",
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

You can define the following values：

- $desc: Description of the API
- $params: Parameters of the API
- $body: The response of the API

<img width="600" src="https://gw.alipayobjects.com/zos/rmsportal/PVfsHataJahAwAVaKDtp.png" />

### Testing mock data and the real API

After launching the local API document site, you can send the `POST` or` GET` request by clicking the `send` button and the return value will be displayed in the popup:

<img width="600" src="https://gw.alipayobjects.com/zos/rmsportal/mkgrIEbmhXZFbSOWvTCz.png" />

One thing to note is that if you start the API documentation site without the port number, then the return data here is static data, if the port number is added and the project is running locally, it will perform a request to the local server and return the real data.

If you want to have direct access to the real data online, then you need to modify `.roadhog.mock.js`, [redirect] (https://github.com/sorrycc/roadhog#mock) of the current project to the online URL.

Visit [roadhog-api-doc github](https://github.com/nikogu/roadhog-api-doc) for more information.
