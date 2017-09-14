---
order: 0
title: 开始使用
---

Ant Design Pro 是一个遵循 [Ant Design](http://ant.design) 设计规范的企业级中后台前端解决方案。我们提供了一个基于 React 的一套后台管理和控制台的脚手架，帮助快速搭建您的企业中后台业务产品。下面的文档将介绍如何开始开发和使用这个脚手架。

## 安装

有两种方式进行安装：

```bash
$ git clone git@github.com:ant-design/ant-design-pro.git
```

或者点击 [https://github.com/ant-design/ant-design/archive/master.zip](https://github.com/ant-design/ant-design/archive/master.zip) 下载到本地后解压。

## 目录结构

我们已经为您生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。

```
├── mock                     // 模拟数据
├── public
│   ├── favicon.ico
│   └── index.html           // HTML 入口模板
├── src
│   ├── common               // 应用公用配置，如导航信息
│   ├── components           // 业务通用组件
│   ├── e2e                  // 集成测试用例
│   ├── layouts              // 通用布局
│   ├── models               // dva model
│   ├── routes               // 业务页面入口和常用模板
│   ├── services             // 后台接口服务
│   ├── utils                // 工具库
│   ├── index.js             // 应用入口
│   ├── index.less           // 全局样式
│   └── router.js            // 全局路由
├── tests                    // 测试工具
├── README.md
└── package.json
```

## 本地开发

安装依赖。

```bash
$ cd ant-design-pro
$ npm install
```

> 如果网络状况不佳，可以使用 [cnpm](https://cnpmjs.org/) 进行加速。

```bash
$ npm start
```

![](https://gw.alipayobjects.com/zos/rmsportal/VgAWyWGqPmXAXpNVPvNT.png)

启动完成后会自动打开浏览器访问 [http://localhost:8000](http://localhost:8000)，你看到下面的页面就代表成功了。

![首页截图]()

接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、国际化、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。
