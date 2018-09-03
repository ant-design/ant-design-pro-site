webpackJsonp([77],{

/***/ 2440:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h3",
      "Ant Design React 和 Ant Design Pro 有什么区别？"
    ],
    [
      "p",
      "可以理解为 Ant Design React 是一套 React 组件库，而 Pro 是使用了这套组件库的完整前端脚手架。"
    ],
    [
      "h3",
      "如何使用 Ant Design Pro？"
    ],
    [
      "p",
      "请阅读文档 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/getting-started"
        },
        "开始使用"
      ],
      "，蚂蚁金服内网用户请阅读 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/getting-start-inner"
        },
        "开始使用（蚂蚁金服用户）"
      ],
      "。"
    ],
    [
      "h3",
      "是否可以在生产环境中使用 Ant Design Pro？"
    ],
    [
      "p",
      "当然可以！Ant Design Pro 基于最新的 antd 版本开发，目前已有多个中后台项目正在使用。"
    ],
    [
      "h3",
      "如何更新 Ant Design Pro？"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "单独升级 ",
          [
            "code",
            "antd"
          ],
          " 版本，用于更新基础组件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "比较不同的 Ant Design Pro 版本间的差异，手动修改本地配置。"
        ]
      ],
      [
        "li",
        [
          "p",
          "也可以尝试合并远程分支：",
          [
            "code",
            "git pull https://github.com/ant-design/ant-design-pro"
          ],
          "（注意，需要自行解决冲突）。"
        ]
      ],
      [
        "li",
        [
          "p",
          "直接在 GitHub 上拷贝最新的典型模板。"
        ]
      ]
    ],
    [
      "h3",
      "npm test 在 ",
      [
        "code",
        "MacOS Sierra"
      ],
      " 下使用报错？"
    ],
    [
      "p",
      "你需要安装 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#npm-test-hangs-on-macos-sierra"
        },
        "watchman"
      ],
      "。"
    ],
    [
      "h3",
      "如何修改默认 webpack 配置？"
    ],
    [
      "p",
      "详见 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#%E9%85%8D%E7%BD%AE"
        },
        "roadhog 配置"
      ],
      "。"
    ],
    [
      "h3",
      "如何添加 babel 插件？"
    ],
    [
      "p",
      "详见 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#extrababelplugins"
        },
        "roadhog extraBabelPlugins"
      ],
      "。"
    ],
    [
      "h3",
      "如何使用图片等静态资源？"
    ],
    [
      "p",
      "可以直接使用绝对路径（需要图床支持），若需直接使用本地文件，可按以下方式引入。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">'../assets/picture.png'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<img src={require('../assets/picture.png')} />"
      ]
    ],
    [
      "h3",
      "我的 url 里怎么有 ",
      [
        "code",
        "#"
      ],
      " 号？要如何去掉？"
    ],
    [
      "p",
      "请参考文档 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/deploy#前端路由与服务端的结合"
        },
        "前端路由与服务端的结合"
      ],
      "。"
    ],
    [
      "h3",
      "如何添加 scss 支持？"
    ],
    [
      "p",
      "在 ",
      [
        "code",
        ".webpackrc"
      ],
      " 中开启 ",
      [
        "code",
        "sass"
      ],
      " 配置，详见 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#sass"
        },
        "sass"
      ],
      "。"
    ],
    [
      "h3",
      "Git commit 时报错？"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/KkPUhMMpGtEdhSGfxxKz.png",
          "width": "600"
        }
      ]
    ],
    [
      "p",
      "脚手架默认开启了 ",
      [
        "a",
        {
          "title": null,
          "href": "http://eslint.org/"
        },
        "eslint"
      ],
      " 代码风格检查，请按照提示内容进行修改后重新提交，也可以手动 ",
      [
        "code",
        "npm run lint"
      ],
      " 进行检查。"
    ],
    [
      "h3",
      "如何禁止 ",
      [
        "code",
        "npm start"
      ],
      " 时自动打开浏览器？"
    ],
    [
      "p",
      "修改 ",
      [
        "code",
        "package.json"
      ],
      " 里的 ",
      [
        "code",
        "scripts.start"
      ],
      " 为："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token string\">\"start\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"cross-env BROWSER=none roadhog server\"</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "\"start\": \"cross-env BROWSER=none roadhog server\","
      ]
    ],
    [
      "h3",
      "站点是否支持国际化？"
    ],
    [
      "p",
      "这是 Ant Design Pro 的特性之一，目前第一个版本只有中文文案。国际化将是我们下一步的首要工作。"
    ],
    [
      "h3",
      "English Documentation?"
    ],
    [
      "p",
      "English Documentation will be translated in next couple of monthes, trace ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues/54#issuecomment-340804479"
        },
        "ant-design/ant-design-pro#54"
      ],
      " \n和",
      [
        "span",
        "ant-design-pro/issues/120"
      ],
      "(",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues/120）了解更多细节。"
        },
        "https://github.com/ant-design/ant-design-pro/issues/120）了解更多细节。"
      ]
    ],
    [
      "hr"
    ],
    [
      "p",
      "更多常见问题可以查看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#troubleshooting"
        },
        "Trouble Shooting"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog"
        },
        "roadhog"
      ],
      "。如果这里未能解决你的问题，欢迎 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/issues"
        },
        "报告给我们"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 22,
    "title": "常见问题",
    "type": "其他",
    "filename": "docs/faq.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "提问之前，请先查阅下面的常见问题。"
    ]
  ],
  "toc": [
    "ul"
  ]
};

/***/ })

});