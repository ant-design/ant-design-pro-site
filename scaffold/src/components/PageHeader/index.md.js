webpackJsonp([20],{

/***/ 2428:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "页头用来声明页面的主题，包含了用户所关注的最重要的信息，使用户可以快速理解当前页面是什么以及它的功能。"
    ]
  ],
  "meta": {
    "title": {
      "en-US": "PageHeader",
      "zh-CN": "PageHeader"
    },
    "subtitle": "页头",
    "cols": 1,
    "order": 11,
    "filename": "scaffold/src/components/PageHeader/index.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "title 区域"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "logo"
          ],
          [
            "td",
            "logo区域"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "action"
          ],
          [
            "td",
            "操作区，位于 title 行的行尾"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "home"
          ],
          [
            "td",
            "默认的主页说明文字"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "content"
          ],
          [
            "td",
            "内容区"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "extraContent"
          ],
          [
            "td",
            "额外内容区，位于content的右侧"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "breadcrumbList"
          ],
          [
            "td",
            "面包屑数据，配置了此属性时 ",
            [
              "code",
              "routes"
            ],
            " ",
            [
              "code",
              "params"
            ],
            " ",
            [
              "code",
              "location"
            ],
            " ",
            [
              "code",
              "breadcrumbNameMap"
            ],
            " 无效"
          ],
          [
            "td",
            "array<{title: ReactNode, href?: string}>"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "routes"
          ],
          [
            "td",
            "面包屑相关属性，router 的路由栈信息"
          ],
          [
            "td",
            "object[]"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "params"
          ],
          [
            "td",
            "面包屑相关属性，路由的参数"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "location"
          ],
          [
            "td",
            "面包屑相关属性，当前的路由信息"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "breadcrumbNameMap"
          ],
          [
            "td",
            "面包屑相关属性，路由的地址-名称映射表"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabList"
          ],
          [
            "td",
            "tab 标题列表"
          ],
          [
            "td",
            "array<{key: string, tab: ReactNode}>"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabActiveKey"
          ],
          [
            "td",
            "当前高亮的 tab 项"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabDefaultActiveKey"
          ],
          [
            "td",
            "默认高亮的 tab 项"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "第一项"
          ]
        ],
        [
          "tr",
          [
            "td",
            "wide"
          ],
          [
            "td",
            "是否定宽"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onTabChange"
          ],
          [
            "td",
            "切换面板的回调"
          ],
          [
            "td",
            "(key) => void"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "itemRender"
          ],
          [
            "td",
            "自定义节点方法"
          ],
          [
            "td",
            "(menuItem) => ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ],
        [
          "tr",
          [
            "td",
            "linkElement"
          ],
          [
            "td",
            "定义链接的元素，默认为 ",
            [
              "code",
              "a"
            ],
            "，可传入 react-router 的 Link"
          ],
          [
            "td",
            "string",
            "|",
            "ReactElement"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "面包屑的配置方式有三种，一是直接配置 ",
        [
          "code",
          "breadcrumbList"
        ],
        "，二是结合 ",
        [
          "code",
          "react-router@2"
        ],
        " ",
        [
          "code",
          "react-router@3"
        ],
        "，配置 ",
        [
          "code",
          "routes"
        ],
        " 及 ",
        [
          "code",
          "params"
        ],
        " 实现，类似 ",
        [
          "a",
          {
            "title": null,
            "href": "https://ant.design/components/breadcrumb-cn/#components-breadcrumb-demo-router"
          },
          "面包屑 Demo"
        ],
        "，三是结合 ",
        [
          "code",
          "react-router@4"
        ],
        "，配置 ",
        [
          "code",
          "location"
        ],
        " ",
        [
          "code",
          "breadcrumbNameMap"
        ],
        "，优先级依次递减，脚手架中使用最后一种。 对于后两种用法，你也可以将 ",
        [
          "code",
          "routes"
        ],
        " ",
        [
          "code",
          "params"
        ],
        " 及 ",
        [
          "code",
          "location"
        ],
        " ",
        [
          "code",
          "breadcrumbNameMap"
        ],
        " 放到 context 中，组件会自动获取。"
      ]
    ]
  ]
};

/***/ })

});