---
order: 0
title: 开始使用
type: 入门
---

## 写在前面

Ant Design Pro 是一个企业级中后台前端/设计解决方案，我们秉承 [Ant Design](http://ant.design/) 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。

我们基于上述目标和提供了以下的典型模板，并据此构建了一套基于 React 的中后台管理控制台的脚手架，它可以帮助你快速搭建企业级中后台产品原型。

```bash
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
- 个人页
  - 个人中心
  - 个人设置
- 图形编辑器
  - 流程图编辑器
  - 脑图编辑器
  - 拓扑编辑器
- 帐户
  - 登录
  - 注册
  - 注册成功
```

> 以上所有页面都可以在 Pro 的[区块](https://github.com/ant-design/pro-blocks)中找到。

## 谁在使用

目前蚂蚁金服和阿里巴巴内部上百个项目正在尝试 Pro 的研发模式，如果你和你的组织使用了这个产品，欢迎到 [Ant Design Pro Users](https://github.com/ant-design/ant-design-pro/issues/99) 留言。

### For 设计者

如果你是产品或设计师，你可以找到和 Pro 一一配套的 [Axure/Sketch 设计资源](/docs/resource)，大幅度提升设计效率和沟通效率。

### For 开发者

如果你是工程师，在接下来的文档中，我们将具体介绍如何使用这个脚手架。如果你是蚂蚁金服的内网用户，请直接跳到文档 [开始使用（蚂蚁金服用户）](https://pro.ant.design/docs/getting-start-inner-cn)。

## 前序准备

你的本地环境需要安装 [yarn](https://yarnpkg.com)、[node](http://nodejs.org/) 和 [git](https://git-scm.com/)。我们的技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[React](http://facebook.github.io/react/)、[UmiJS](https://umijs.org/)、[dva](http://github.com/dvajs/dva)、[g2](https://antv.alipay.com/zh-cn/g2/3.x/index.html) 和 [antd](https://ant.design/docs/react/introduce-cn)，提前了解和学习这些知识会非常有帮助。

## 安装

新建一个空的文件夹作为项目目录，并在目录下执行：

```bash
yarn create umi
```

or

```bash
npm create umi
```

选择 `ant-design-pro`：

```bash
 Select the boilerplate type (Use arrow keys)
❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.
  app             - Create project with a simple boilerplate, support typescript.
  block           - Create a umi block.
  library         - Create a library with umi.
  plugin          - Create a umi plugin.
```

Ant Design Pro 脚手架将会自动安装。

## 目录结构

我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── config                   # umi 配置，包含路由，构建等配置
├── mock                     # 本地模拟数据
├── public
│   └── favicon.png          # Favicon
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── locales              # 国际化资源
│   ├── global.less          # 全局样式
│   └── global.ts            # 全局 JS
├── tests                    # 测试工具
├── README.md
└── package.json
```

## 本地开发

安装依赖。

```bash
npm install
```

> 如果网络状况不佳，可以使用 [tyarn](https://www.npmjs.com/package/tyarn) 进行加速。

```bash
npm start
```

<img src="https://gw.alipayobjects.com/zos/rmsportal/uHAzKpIQDMGdmjIxZLOV.png" width="700" />

启动完成后会自动打开浏览器访问 [http://localhost:8000](http://localhost:8000)，你看到下面的页面就代表成功了。

<img src="https://user-images.githubusercontent.com/5378891/58090083-0b68c700-7bf9-11e9-8f52-d55ab2ebaab5.png" width="700" alt="首页截图" />

接下来你可以修改代码进行业务开发了，我们内建了**模拟数据**、**HMR 实时预览**、**状态管理**、**国际化**、**全局路由**等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。

## 后续步骤

- [基于区块开发](/docs/block-cn)：快速搭建标准页面。
- [传统开发模式](/docs/router-and-nav-cn)：完全自定义开发。
