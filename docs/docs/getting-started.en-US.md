---
order: 3
title: Getting Started
group:
  title: Introduction
nav:
  title: Documents
  path: /docs
  order: 1
---

Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](http://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.

## Tips before development

Ant Design Pro is a front-end scaffolding. By default, readers have already understood some basic front-end knowledge, and understand umi and Ant Design. If you are a pure novice, it is recommended to read [Beginner's Need to know](/docs/introduction). Sharpen the knife and chop wood by mistake. Knowing some basic knowledge can make the learning curve smoother.

## Init

We provide create umi to quickly initialize scaffolding.

```bash
# use by npm
npx create-umi myapp
# use by yarn
yarn create umi myapp
```

<video src="https://gw.alipayobjects.com/os/antfincdn/0wSaPUs36y/My%252520Sequence_1.mp4" controls width="100%"></video>

Create umi offers a wide range of options to meet the scaffolding needs of different users, and we can choose to develop the language JavaScript or TypeScript.

![language](https://gw.alipayobjects.com/zos/antfincdn/fvy3icO6IL/sshot-4.png)

You can also choose whether to get all the chunks.

![easy](https://gw.alipayobjects.com/zos/antfincdn/Kqlh5sQslh/sshot-1.png)

Select the version of antd, 3 or 4.

![antd](https://gw.alipayobjects.com/zos/antfincdn/oPREL%26PSX9/sshot-2.png)

A successful scaffold log.

![end](https://gw.alipayobjects.com/zos/antfincdn/c7f3Y9B5Om/sshot-3.png)

## Development

The development can begin after the initialization of the scaffolding is successful, and we have provided some commands to assist in the development.

### `cd myapp` && `npm install`

Run this first to install/update any required dependencies.

### `start`

Running this script starts the service and automatically opens the default browser to show your page. When you re-edit the code, the page will also refresh automatically.

![start](https://gw.alipayobjects.com/zos/antfincdn/1x2QB6onvP/74FDD893-9DBD-4A8F-BB70-C0649189BA3C.png)

### `build`

Running this script will compile your project, and you can find the compiled files in the dist directory of the project for deployment.

![build](https://gw.alipayobjects.com/zos/antfincdn/DVK9LCd9Te/75ED2D26-2984-4A8C-886D-C106D9BE4B70.png)

If you need to deploy, you can review the [deployment]((/docs/deploy).

### `analyze`

The analyze script does the same thing as build, but he opens a page showing your dependency information. If you need to optimize performance and package size, you need it.

![analyze](https://gw.alipayobjects.com/zos/antfincdn/ZTXFIYGGr%24/F8302DCB-DA37-4EDE-B6FF-76E35F727BBC.png)

### `lint`

We offer a range of lint scripts, including TypeScript, less, css, md files. You can use this script to see what problems your code has. In commit we automatically run the related lint.

![lint](https://gw.alipayobjects.com/zos/antfincdn/bUQ%24NATOiD/AEA3029A-4B88-4BEF-9C37-166BB32442A4.png)

### `lint:fix`

Same as lint, but the lint error is fixed automatically.

![lint:fix](https://gw.alipayobjects.com/zos/antfincdn/v%24E7PNxq%24R/210AAD0A-0CA1-47F3-9397-85EBD9CD4152.png)

### `i18n-remove`

This script will attempt to remove all i18n code from the project, which is not good for complex run-time code and is used with caution.

> more cli https://umijs.org/docs/cli
