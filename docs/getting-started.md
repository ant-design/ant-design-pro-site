---
order: 0
title: 开始使用
type: 入门
---

## 写在前面

Ant Design Pro 秉承 [Ant Design](http://ant.design/) 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼的典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践。我们也十分期待你的参与和反馈。

据此，我们构建了这个遵循 [Ant Design](http://ant.design) 设计规范的企业级中后台前端解决方案，一套基于 React 的中后台管理和控制台的脚手架，可以帮助你快速搭建企业级中后台产品原型。下面的文档将具体介绍如何开始使用这个脚手架。

## 安装

有两种方式进行安装：

```bash
$ git clone --depth=1 git@github.com:ant-design/ant-design-pro.git my-project
$ cd my-project
```

或者点击 [https://github.com/ant-design/ant-design-pro/archive/master.zip](https://github.com/ant-design/ant-design-pro/archive/master.zip) 下载到本地后解压。

## 目录结构

我们已经为您生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```bash
├── mock                     # 本地模拟数据
├── public
│   ├── favicon.ico          # Favicon
│   └── index.html           # HTML 入口模板
├── src
│   ├── common               # 应用公用配置，如导航信息
│   ├── components           # 业务通用组件
│   ├── e2e                  # 集成测试用例
│   ├── layouts              # 通用布局
│   ├── models               # dva model
│   ├── routes               # 业务页面入口和常用模板
│   ├── services             # 后台接口服务
│   ├── utils                # 工具库
│   ├── g2.js                # 可视化图形配置
│   ├── polyfill.js          # 兼容性垫片
│   ├── theme.js             # 主题配置
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
