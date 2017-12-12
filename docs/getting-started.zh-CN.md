---
order: 0
title: 开始使用
type: 入门
---

## 写在前面

Ant Design Pro 是一个企业级中后台前端/设计解决方案，我们秉承 [Ant Design](http://ant.design/) 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

我们基于上述目标和提供了以下的典型模板，并据此构建了一套基于 React 的中后台管理控制台的脚手架，它可以帮助你快速搭建企业级中后台产品原型。

```
- Dashboard
  - 分析页
  - 监控页
  - 工作台
- 表单页
  - 基础表单页
  - 分步表单页
  - 高级表单页
- 列表页
  - 查询表格
  - 标准列表
  - 卡片列表
  - 搜索列表（项目/应用/文章）
- 详情页
  - 基础详情页
  - 高级详情页
- 结果
  - 成功页
  - 失败页
- 异常
  - 403 无权限
  - 404 找不到
  - 500 服务器出错
- 帐户
  - 登录
  - 注册
  - 注册成功
```

## 谁在使用

目前蚂蚁金服和阿里巴巴内部数十个项目正在尝试 Pro 的研发模式，如果你和你的组织使用了这个产品，欢迎到 [Ant Design Pro Users](https://github.com/ant-design/ant-design-pro/issues/99) 留言。

### For 设计者

如果你是产品或设计师，你可以找到和 Pro 一一配套的 [Axure/Sketch 设计资源](/docs/resource)，大幅度提升设计效率和沟通效率。

### For 开发者

如果你是工程师，在接下来的文档中，我们将具体介绍如何使用这个脚手架。

## 前序准备

你的本地环境需要安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[React](http://facebook.github.io/react/)、[dva](http://github.com/dvajs/dva)、[g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 和 [antd](https://ant.design/docs/react/introduce-cn)，提前了解和学习这些知识会非常有帮助。

## 安装

有两种方式进行安装：

### 直接 clone git 仓库

```bash
$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project
$ cd my-project
```

### 使用命令行工具

你可以使用集成化的命令行工具 [ant-design-pro-cli](https://github.com/ant-design/ant-design-pro-cli)。

```bash
$ npm install ant-design-pro-cli -g
$ mkdir my-project && cd my-project
$ pro new  # 安装脚手架
```

## 目录结构

我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── mock                     # 本地模拟数据
├── public
│   └── favicon.ico          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── common               # 应用公用配置，如导航信息
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # dva model
│   ├── routes               # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── g2.js                # 可视化图形配置
│   ├── theme.js             # 主题配置
│   ├── index.ejs            # HTML 入口模板
│   ├── index.js             # 应用入口
│   ├── index.less           # 全局样式
│   └── router.js            # 路由入口
├── tests                    # 测试工具
├── README.md
└── package.json
```

## 本地开发

安装依赖。

```bash
$ npm install
```

> 如果网络状况不佳，可以使用 [cnpm](https://cnpmjs.org/) 进行加速。

```bash
$ npm start
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/DaIsSQRbNkwOXbMDhqEx.png" width="700" />

启动完成后会自动打开浏览器访问 [http://localhost:8000](http://localhost:8000)，你看到下面的页面就代表成功了。

<img src="https://gw.alipayobjects.com/zos/rmsportal/psqyFTiRoXQeaNZdjppA.png" width="700" alt="首页截图" />

接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、国际化、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。
