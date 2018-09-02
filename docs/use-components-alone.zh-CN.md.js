webpackJsonp([43],{

/***/ 2482:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "Ant Design Pro 脚手架内提供了一套默认",
      [
        "a",
        {
          "title": null,
          "href": "http://pro.ant.design/components"
        },
        "业务组件"
      ],
      "，这些组件抽象了控制台业务中的一些常见区块。我们将持续维护和迭代这些组件，为中后台业务提供比 Ant Design 基础组件更高级别的抽象。"
    ],
    [
      "h2",
      "如何使用"
    ],
    [
      "p",
      "Ant Design Pro 脚手架内用到的组件分为两种："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "antd 组件：",
          [
            "a",
            {
              "title": null,
              "href": "https://ant.design/docs/react/introduce-cn"
            },
            "https://ant.design/docs/react/introduce-cn"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "pro 自带组件：",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design-pro/tree/master/src/components"
            },
            "https://github.com/ant-design/ant-design-pro/tree/master/src/components"
          ]
        ]
      ]
    ],
    [
      "p",
      "对于脚手架的用户，你可以在脚手架中直接引用/新增/改造 pro 的自带组件，具体方式可参考 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/new-component"
        },
        "新增组件"
      ],
      "。"
    ],
    [
      "p",
      "对于没有使用这套脚手架的开发者，我们提供了一种方式来调用这套内建组件。"
    ],
    [
      "blockquote",
      [
        "p",
        "默认业务组件会发布到 npm 的 ",
        [
          "a",
          {
            "title": null,
            "href": "http://npmjs.com/ant-design-pro"
          },
          "ant-design-pro"
        ],
        " 上。"
      ]
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> ant-design-pro@1.x --save"
      },
      [
        "code",
        "$ npm install ant-design-pro@1.x --save"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'ant-design-pro/dist/ant-design-pro.css'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 统一引入样式</span>"
      },
      [
        "code",
        "import 'ant-design-pro/dist/ant-design-pro.css'; // 统一引入样式"
      ]
    ],
    [
      "p",
      "然后你就可以像使用 Ant Design 组件一样调用 pro 组件了。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> Result <span class=\"token keyword\">from</span> <span class=\"token string\">'ant-design-pro/lib/Result'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Result</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import Result from 'ant-design-pro/lib/Result';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "注意，pro 组件默认依赖于 antd@3.0，需要保证 antd 版本的一致性。"
      ]
    ],
    [
      "h3",
      "按需加载"
    ],
    [
      "p",
      "可以使用 babel-plugin-import 来进行按需加载，加入这个插件后，你可以这么写"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Result <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'ant-design-pro'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Result type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Result } from 'ant-design-pro';\n\nReactDOM.render(<Result type=\"success\" />, mountNode);"
      ]
    ],
    [
      "p",
      "推荐使用这种方式。"
    ],
    [
      "p",
      "babel-plugin-import 配置如下："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": " <span class=\"token punctuation\">{</span>\n    libraryName<span class=\"token punctuation\">:</span> <span class=\"token string\">'ant-design-pro'</span><span class=\"token punctuation\">,</span>\n    libraryDirectory<span class=\"token punctuation\">:</span> <span class=\"token string\">'lib'</span><span class=\"token punctuation\">,</span>\n    style<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    camel2DashComponentName<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        " {\n    libraryName: 'ant-design-pro',\n    libraryDirectory: 'lib',\n    style: true,\n    camel2DashComponentName: false,\n}"
      ]
    ],
    [
      "h2",
      "文档和反馈"
    ],
    [
      "p",
      "你可以在 ",
      [
        "a",
        {
          "title": null,
          "href": "http://pro.ant.design/components"
        },
        "组件页面"
      ],
      " 找到所有的业务组件，以及相关的演示和 API 文档。"
    ],
    [
      "p",
      "组件会随着脚手架的更新而不断迭代，有任何问题和需求可以反馈到 ",
      [
        "a",
        {
          "title": null,
          "href": "http://github.com/ant-design/ant-design-pro/issues"
        },
        "这里"
      ],
      "。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "最新版本：",
          [
            "a",
            {
              "title": null,
              "href": "http://npmjs.com/ant-design-pro"
            },
            [
              "img",
              {
                "title": null,
                "src": "https://img.shields.io/npm/v/ant-design-pro.svg?style=flat-square",
                "alt": "ant-design-pro"
              }
            ]
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "/docs/changelog"
            },
            "更新日志"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 16,
    "title": "独立使用 Pro 组件",
    "type": "进阶",
    "filename": "docs/use-components-alone.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何使用",
          "title": "如何使用"
        },
        "如何使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#文档和反馈",
          "title": "文档和反馈"
        },
        "文档和反馈"
      ]
    ]
  ]
};

/***/ })

});