---
order: 0
title: Getting Started
type: Introduction
---

## Foreword

Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](http://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.

Your help is welcomed and much appreciated. With your feedback we can make incremental progress towards elegant and well designed components. Please open an issue or submit a pull request!

With those objectives in mind, we have built the following templates and a scaffold based on React.js, which should help you prototyping production-ready admin interfaces.

```
- Dashboard
  - Analytic
  - Monitor
  - Workspace
- Form
  - Basic Form
  - Step Form
  - Advanced Form
- List
  - Standard Table
  - Standard List
  - Card List
  - Search List (Project/Applications/Article)
- Profile
  - Simple Profile
  - Advanced Profile
- Result
  - Success
  - Failed
- Exception
  - 403
  - 404
  - 500
- Account
  - Account Center
  - Account Settings
- Graphic Editor
  - Flow Editor
  - Mind Editor
  - Koni Editor
- User
  - Login
  - Register
  - Register Result
```

> All of the above pages can be found in Pro's [Blocks](https://github.com/ant-design/pro-blocks).

## Users of Ant Design Pro

Hundreds of applications within Ant Financial and Alibaba Group are using Ant Design Pro. You are welcome to leave your information in [Ant Design Pro Users](https://github.com/ant-design/ant-design-pro/issues/99) if you or your organization is using it.

### For Designers

If you are a product manager or designer, you can find the [design kit](/docs/resource) here.

### For Developers

We will walk you through the steps to get started.

## Preparation

You will need [yarn](https://yarnpkg.com), [node](http://nodejs.org/) and [git](https://git-scm.com/). The project is based on [ES2015+](https://babeljs.io/learn-es2015/), [React](http://facebook.github.io/react/), [UmiJS](https://umijs.org/), [dva](http://github.com/dvajs/dva), [g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) and [antd](https://ant.design/docs/react/introduce). It would be helpful if you have pre-existing knowledge on those.

## Installation

Create a new empty folder as project root. Execute command in the folder:

```bash
yarn create umi myApp
```

or

```bash
npm create umi myApp
```

Choose `ant-design-pro`：

```bash
 Select the boilerplate type (Use arrow keys)
❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
```

Ant Design Pro will be installed automatically.

## Scaffolding

We have provided a scaffold which includes common routes for admins and demonstrates our component library. The project layout is as follows:

```bash
├── config                   # umi config, include routes and webpack etc.
├── mock                     # Local Mock Data
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # Local static files
│   ├── components           # Components
│   ├── e2e                  # Integrated Test Case
│   ├── layouts              # Common Layouts
│   ├── models               # Global dva Model
│   ├── pages                # Sub-pages and templates
│   ├── services             # Back-end Services
│   ├── utils                # Utility
│   ├── locales              # i18n resources
│   ├── global.less          # Global Stylesheet
│   └── global.ts            # Global JS
├── tests                    # Tests Configuration
├── README.md
└── package.json
```

## Development

Install Dependencies

```bash
$ npm install
```

```bash
$ npm start
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/uHAzKpIQDMGdmjIxZLOV.png" width="700" />

This will automatically open [http://localhost:8000](http://localhost:8000). If you see the following page then you have succeeded. <img src="https://user-images.githubusercontent.com/5378891/58090083-0b68c700-7bf9-11e9-8f52-d55ab2ebaab5.png" width="700" alt="Screenshot" />

You're all set!

We have built-in **mock data**, **hot module reloading**, **state management**,**i18n**, **global router**, etc. You can continue exploring other documents for more details on those topics.

## Next Steps

[> Block Development](/docs/block-cn) Quickly build standard pages.

[> Traditional development mode](/docs/router-and-nav-cn), fully custom development.
