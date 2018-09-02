webpackJsonp([31],{

/***/ 2419:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "异常页用于对页面特定的异常状态进行反馈。通常，它包含对错误状态的阐述，并向用户提供建议或操作，避免用户感到迷失和困惑。"
    ]
  ],
  "meta": {
    "title": "Exception",
    "subtitle": "异常",
    "cols": 1,
    "order": 5,
    "filename": "scaffold/src/components/Exception/index.zh-CN.md"
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
            "backText"
          ],
          [
            "td",
            "默认的返回按钮文本"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "back to home"
          ]
        ],
        [
          "tr",
          [
            "td",
            "type"
          ],
          [
            "td",
            "页面类型，若配置，则自带对应类型默认的 ",
            [
              "code",
              "title"
            ],
            "，",
            [
              "code",
              "desc"
            ],
            "，",
            [
              "code",
              "img"
            ],
            "，此默认设置可以被 ",
            [
              "code",
              "title"
            ],
            "，",
            [
              "code",
              "desc"
            ],
            "，",
            [
              "code",
              "img"
            ],
            " 覆盖"
          ],
          [
            "td",
            "Enum {'403', '404', '500'}"
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
            "title"
          ],
          [
            "td",
            "标题"
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
            "desc"
          ],
          [
            "td",
            "补充描述"
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
            "img"
          ],
          [
            "td",
            "背景图片地址"
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
            "actions"
          ],
          [
            "td",
            "建议操作，配置此属性时默认的『返回首页』按钮不生效"
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
            "linkElement"
          ],
          [
            "td",
            "定义链接的元素"
          ],
          [
            "td",
            "string",
            "|",
            "ReactElement"
          ],
          [
            "td",
            "'a'"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

});