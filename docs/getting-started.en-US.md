---
order: 0
title: Getting Started
type: Introduction
---

## Foreword

Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by [Ant Design](http://ant.design/), this project introduces higher level components; we have developed templates, components, and a   corresponding design kit to improve the user and development experience for admin interfaces.

Your help is welcomed and much appreciated. With your feedback we can make incremental progress towards elegant and well designed components. Please open a issue or submit a pull request!

With those objectives in mind, we have built the following templates, and have built a scaffold based on React.js, which should help you prototyping production-ready admin interfaces.

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
- User
  - Login
  - Register
  - Register Result
```

## Who are using

Dozens of applications are trying Ant Design Pro in Ant Financial and Alibaba Group, welcome to leave your information in [Ant Design Pro Users](https://github.com/ant-design/ant-design-pro/issues/99) if you or your organization is using it.

### For Designer

If you are product manager or designer, you can find the [design kit](/docs/resource) here.

### For Developer

We will walk you through the steps to get started.

## Preparation

You will need [node](http://nodejs.org/) and [git](https://git-scm.com/). The project is based on [ES2015+](https://babeljs.io/learn-es2015/), [React](http://facebook.github.io/react/), [dva](http://github.com/dvajs/dva), [g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) and [antd](https://ant.design/docs/react/introduce). It would be helpful if you have pre-existing knowledge on those.

## Installation

There are two ways to install.

### Clone the Git Repository

```bash
$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
```

### Use the Command Line

You can also use [ant-design-pro-cli](https://github.com/ant-design/ant-design-pro-cli).

```bash
$ npm install ant-design-pro-cli -g
$ mkdir my-project && cd my-project
$ pro new  # Initialize Scaffold
```

## Scaffolding

We have provided a scaffold which includes common routes for admins and demonstrates our component library. The project layout is as follows:

```bash
├── mock                     # Local Mock Data
├── public
│   └── favicon.ico          # Favicon
├── src
│   ├── assets               # Local static files
│   ├── common               # Common Configuration like Navigation
│   ├── components           # Components
│   ├── e2e                  # Integrated Test Case
│   ├── layouts              # Common Layouts
│   ├── models               # dva Model
│   ├── routes               # Sub-pages and templates
│   ├── services             # Back-end Services
│   ├── utils                # Utility
│   ├── g2.js                # Dataviz Configuration
│   ├── theme.js             # Theme Configuration
│   ├── index.ejs            # HTML Entry
│   ├── index.js             # App Entry
│   ├── index.less           # Global Stylesheet
│   └── router.js            # Route Entry File
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

<img src="https://gw.alipayobjects.com/zos/rmsportal/DaIsSQRbNkwOXbMDhqEx.png" width="700" />

This will automatically open [http://localhost:8000](http://localhost:8000). If you see the following page then you have succeeded.

<img src="https://gw.alipayobjects.com/zos/rmsportal/psqyFTiRoXQeaNZdjppA.png" width="700" alt="Screenshot" />

You're all set!

We have built-in models, standard components, mock data, hot module reloading, state management, i18n, global router, etc.
You can continue exploring other documents for more details on those topics.
