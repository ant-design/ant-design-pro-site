webpackJsonp([73],{

/***/ 2461:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "写在前面"
    ],
    [
      "p",
      "Ant Design Pro 是一个企业级中后台前端/设计解决方案，我们秉承 ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/"
        },
        "Ant Design"
      ],
      " 的设计价值观，致力于在设计规范和基础组件的基础上，继续向上构建，提炼出典型模板/业务组件/配套设计资源，进一步提升企业级中后台产品设计研发过程中的『用户』和『设计者』的体验。随着『设计者』的不断反馈，我们将持续迭代，逐步沉淀和总结出更多设计模式和相应的代码实现，阐述中后台产品模板/组件/业务场景的最佳实践，也十分期待你的参与和共建。"
    ],
    [
      "p",
      "我们基于上述目标和提供了以下的典型模板，并据此构建了一套基于 React 的中后台管理控制台的脚手架，它可以帮助你快速搭建企业级中后台产品原型。"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token operator\">-</span> Dashboard\n  <span class=\"token operator\">-</span> 分析页\n  <span class=\"token operator\">-</span> 监控页\n  <span class=\"token operator\">-</span> 工作台\n<span class=\"token operator\">-</span> 表单页\n  <span class=\"token operator\">-</span> 基础表单页\n  <span class=\"token operator\">-</span> 分步表单页\n  <span class=\"token operator\">-</span> 高级表单页\n<span class=\"token operator\">-</span> 列表页\n  <span class=\"token operator\">-</span> 查询表格\n  <span class=\"token operator\">-</span> 标准列表\n  <span class=\"token operator\">-</span> 卡片列表\n  <span class=\"token operator\">-</span> 搜索列表（项目<span class=\"token operator\">/</span>应用<span class=\"token operator\">/</span>文章）\n<span class=\"token operator\">-</span> 详情页\n  <span class=\"token operator\">-</span> 基础详情页\n  <span class=\"token operator\">-</span> 高级详情页\n<span class=\"token operator\">-</span> 结果\n  <span class=\"token operator\">-</span> 成功页\n  <span class=\"token operator\">-</span> 失败页\n<span class=\"token operator\">-</span> 异常\n  <span class=\"token operator\">-</span> <span class=\"token number\">403</span> 无权限\n  <span class=\"token operator\">-</span> <span class=\"token number\">404</span> 找不到\n  <span class=\"token operator\">-</span> <span class=\"token number\">500</span> 服务器出错\n<span class=\"token operator\">-</span> 个人页\n  <span class=\"token operator\">-</span> 个人中心\n  <span class=\"token operator\">-</span> 个人设置\n<span class=\"token operator\">-</span> 帐户\n  <span class=\"token operator\">-</span> 登录\n  <span class=\"token operator\">-</span> 注册\n  <span class=\"token operator\">-</span> 注册成功"
      },
      [
        "code",
        "- Dashboard\n  - 分析页\n  - 监控页\n  - 工作台\n- 表单页\n  - 基础表单页\n  - 分步表单页\n  - 高级表单页\n- 列表页\n  - 查询表格\n  - 标准列表\n  - 卡片列表\n  - 搜索列表（项目/应用/文章）\n- 详情页\n  - 基础详情页\n  - 高级详情页\n- 结果\n  - 成功页\n  - 失败页\n- 异常\n  - 403 无权限\n  - 404 找不到\n  - 500 服务器出错\n- 个人页\n  - 个人中心\n  - 个人设置\n- 帐户\n  - 登录\n  - 注册\n  - 注册成功"
      ]
    ],
    [
      "h2",
      "谁在使用"
    ],
    [
      "p",
      "目前蚂蚁金服和阿里巴巴内部上百个项目正在尝试 Pro 的研发模式，如果你和你的组织使用了这个产品，欢迎到 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues/99"
        },
        "Ant Design Pro Users"
      ],
      " 留言。"
    ],
    [
      "h3",
      "For 设计者"
    ],
    [
      "p",
      "如果你是产品或设计师，你可以找到和 Pro 一一配套的 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/resource"
        },
        "Axure/Sketch 设计资源"
      ],
      "，大幅度提升设计效率和沟通效率。"
    ],
    [
      "h3",
      "For 开发者"
    ],
    [
      "p",
      "如果你是工程师，在接下来的文档中，我们将具体介绍如何使用这个脚手架。如果你是蚂蚁金服的内网用户，请直接跳到文档 ",
      [
        "a",
        {
          "title": null,
          "href": "https://pro.ant.design/docs/getting-start-inner-cn"
        },
        "开始使用（蚂蚁金服用户）"
      ],
      "。"
    ],
    [
      "h2",
      "前序准备"
    ],
    [
      "p",
      "你的本地环境需要安装 ",
      [
        "a",
        {
          "title": null,
          "href": "http://nodejs.org/"
        },
        "node"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "https://git-scm.com/"
        },
        "git"
      ],
      "。我们的技术栈基于 ",
      [
        "a",
        {
          "title": null,
          "href": "http://es6.ruanyifeng.com/"
        },
        "ES2015+"
      ],
      "、",
      [
        "a",
        {
          "title": null,
          "href": "http://facebook.github.io/react/"
        },
        "React"
      ],
      "、",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/"
        },
        "UmiJS"
      ],
      "、",
      [
        "a",
        {
          "title": null,
          "href": "http://github.com/dvajs/dva"
        },
        "dva"
      ],
      "、",
      [
        "a",
        {
          "title": null,
          "href": "https://antv.alipay.com/zh-cn/g2/3.x/index.html"
        },
        "g2"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/docs/react/introduce-cn"
        },
        "antd"
      ],
      "，提前了解和学习这些知识会非常有帮助。"
    ],
    [
      "h2",
      "安装"
    ],
    [
      "p",
      "有两种方式进行安装："
    ],
    [
      "h3",
      "直接 clone git 仓库"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">git</span> clone --depth<span class=\"token operator\">=</span>1 https://github.com/ant-design/ant-design-pro.git my-project\n$ <span class=\"token function\">cd</span> my-project"
      },
      [
        "code",
        "$ git clone --depth=1 https://github.com/ant-design/ant-design-pro.git my-project\n$ cd my-project"
      ]
    ],
    [
      "h3",
      "使用命令行工具"
    ],
    [
      "p",
      "你可以使用集成化的命令行工具 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro-cli"
        },
        "ant-design-pro-cli"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> ant-design-pro-cli -g\n$ <span class=\"token function\">mkdir</span> my-project <span class=\"token operator\">&amp;&amp;</span> <span class=\"token function\">cd</span> my-project\n$ pro new  <span class=\"token comment\" spellcheck=\"true\"># 安装脚手架</span>"
      },
      [
        "code",
        "$ npm install ant-design-pro-cli -g\n$ mkdir my-project && cd my-project\n$ pro new  # 安装脚手架"
      ]
    ],
    [
      "h2",
      "目录结构"
    ],
    [
      "p",
      "我们已经为你生成了一个完整的开发框架，提供了涵盖中后台开发的各类功能和坑位，下面是整个项目的目录结构。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "├── config                   <span class=\"token comment\" spellcheck=\"true\"># umi 配置，包含路由，构建等配置</span>\n├── mock                     <span class=\"token comment\" spellcheck=\"true\"># 本地模拟数据</span>\n├── public\n│   └── favicon.png          <span class=\"token comment\" spellcheck=\"true\"># Favicon</span>\n├── src\n│   ├── assets               <span class=\"token comment\" spellcheck=\"true\"># 本地静态资源</span>\n│   ├── components           <span class=\"token comment\" spellcheck=\"true\"># 业务通用组件</span>\n│   ├── e2e                  <span class=\"token comment\" spellcheck=\"true\"># 集成测试用例</span>\n│   ├── layouts              <span class=\"token comment\" spellcheck=\"true\"># 通用布局</span>\n│   ├── models               <span class=\"token comment\" spellcheck=\"true\"># 全局 dva model</span>\n│   ├── pages                <span class=\"token comment\" spellcheck=\"true\"># 业务页面入口和常用模板</span>\n│   ├── services             <span class=\"token comment\" spellcheck=\"true\"># 后台接口服务</span>\n│   ├── utils                <span class=\"token comment\" spellcheck=\"true\"># 工具库</span>\n│   ├── locales              <span class=\"token comment\" spellcheck=\"true\"># 国际化资源</span>\n│   ├── global.less          <span class=\"token comment\" spellcheck=\"true\"># 全局样式</span>\n│   └── global.js            <span class=\"token comment\" spellcheck=\"true\"># 全局 JS</span>\n├── tests                    <span class=\"token comment\" spellcheck=\"true\"># 测试工具</span>\n├── README.md\n└── package.json"
      },
      [
        "code",
        "├── config                   # umi 配置，包含路由，构建等配置\n├── mock                     # 本地模拟数据\n├── public\n│   └── favicon.png          # Favicon\n├── src\n│   ├── assets               # 本地静态资源\n│   ├── components           # 业务通用组件\n│   ├── e2e                  # 集成测试用例\n│   ├── layouts              # 通用布局\n│   ├── models               # 全局 dva model\n│   ├── pages                # 业务页面入口和常用模板\n│   ├── services             # 后台接口服务\n│   ├── utils                # 工具库\n│   ├── locales              # 国际化资源\n│   ├── global.less          # 全局样式\n│   └── global.js            # 全局 JS\n├── tests                    # 测试工具\n├── README.md\n└── package.json"
      ]
    ],
    [
      "h2",
      "本地开发"
    ],
    [
      "p",
      "安装依赖。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span>"
      },
      [
        "code",
        "$ npm install"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "如果网络状况不佳，可以使用 ",
        [
          "a",
          {
            "title": null,
            "href": "https://cnpmjs.org/"
          },
          "cnpm"
        ],
        " 进行加速。"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> start"
      },
      [
        "code",
        "$ npm start"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/uHAzKpIQDMGdmjIxZLOV.png",
          "width": "700"
        }
      ]
    ],
    [
      "p",
      "启动完成后会自动打开浏览器访问 ",
      [
        "a",
        {
          "title": null,
          "href": "http://localhost:8000"
        },
        "http://localhost:8000"
      ],
      "，你看到下面的页面就代表成功了。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/PVmvmxKUsAryuFbGqUmV.png",
          "width": "700",
          "alt": "首页截图"
        }
      ]
    ],
    [
      "p",
      "接下来你可以修改代码进行业务开发了，我们内建了典型业务模板、常用业务组件、模拟数据、HMR 实时预览、状态管理、国际化、全局路由等等各种实用的功能辅助开发，你可以继续阅读和探索左侧的其他文档。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "开始使用",
    "type": "入门",
    "filename": "docs/getting-started.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#写在前面",
          "title": "写在前面"
        },
        "写在前面"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#谁在使用",
          "title": "谁在使用"
        },
        "谁在使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#前序准备",
          "title": "前序准备"
        },
        "前序准备"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#安装",
          "title": "安装"
        },
        "安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#目录结构",
          "title": "目录结构"
        },
        "目录结构"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#本地开发",
          "title": "本地开发"
        },
        "本地开发"
      ]
    ]
  ]
};

/***/ })

});