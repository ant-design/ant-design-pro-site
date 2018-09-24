---
order: 0
title: Getting Started
type: Introduction
---

## Foreword

Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](http://ant.design/), this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.

Your help is welcomed and much appreciated. With your feedback we can make incremental progress towards elegant and well designed components. Please open a issue or submit a pull request!

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
- User
  - Login
  - Register
  - Register Result
```

## Users of Ant Design Pro

Hundreds of applications within Ant Financial and Alibaba Group are using Ant Design Pro. You are welcome to leave your information in [Ant Design Pro Users](https://github.com/ant-design/ant-design-pro/issues/99) if you or your organization is using it.

### For Designers

If you are a product manager or designer, you can find the [design kit](/docs/resource) here.

### For Developers

We will walk you through the steps to get started.

## Preparation

You will need [node](http://nodejs.org/) and [git](https://git-scm.com/). The project is based on [ES2015+](https://babeljs.io/learn-es2015/), [React](http://facebook.github.io/react/), [UmiJS](https://umijs.org/), [dva](http://github.com/dvajs/dva), [g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) and [antd](https://ant.design/docs/react/introduce). It would be helpful if you have pre-existing knowledge on those.

## Installation

Install our newest scaffold by cloning git repository.

```bash
$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
```

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
│   └── global.js            # Global JS
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

This will automatically open [http://localhost:8000](http://localhost:8000). If you see the following page then you have succeeded.

<img src="https://gw.alipayobjects.com/zos/rmsportal/PVmvmxKUsAryuFbGqUmV.png" width="700" alt="Screenshot" />

You're all set!

We have built-in models, standard components, mock data, hot module reloading, state management, i18n, global router, etc.
You can continue exploring other documents for more details on those topics.
