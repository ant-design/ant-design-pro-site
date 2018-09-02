webpackJsonp([25],{

/***/ 2420:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "支持多种登录方式切换，内置了几种常见的登录控件，可以灵活组合，也支持和自定义控件配合使用。"
    ]
  ],
  "meta": {
    "title": "Login",
    "subtitle": "登录",
    "cols": 1,
    "order": 15,
    "filename": "scaffold/src/components/Login/index.zh-CN.md"
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
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Login.Password、Login.Mobile-同-Login.UserName",
          "title": "Login.Password、Login.Mobile 同 Login.UserName"
        },
        "Login.Password、Login.Mobile 同 Login.UserName"
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
      "h3",
      "Login"
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
            "defaultActiveKey"
          ],
          [
            "td",
            "默认激活 tab 面板的 key"
          ],
          [
            "td",
            "String"
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
            "onTabChange"
          ],
          [
            "td",
            "切换页签时的回调"
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
            "onSubmit"
          ],
          [
            "td",
            "点击提交时的回调"
          ],
          [
            "td",
            "(err, values) => void"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Login.Tab"
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
            "key"
          ],
          [
            "td",
            "对应选项卡的 key"
          ],
          [
            "td",
            "String"
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
            "tab"
          ],
          [
            "td",
            "选项卡头显示文字"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Login.UserName"
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
            "name"
          ],
          [
            "td",
            "控件标记，提交数据中同样以此为 key"
          ],
          [
            "td",
            "String"
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
            "rules"
          ],
          [
            "td",
            "校验规则，同 Form getFieldDecorator(id, options) 中 ",
            [
              "a",
              {
                "title": null,
                "href": "getFieldDecorator(id, options)"
              },
              "option.rules 的规则"
            ]
          ],
          [
            "td",
            "object[]"
          ],
          [
            "td",
            "-"
          ]
        ]
      ]
    ],
    [
      "p",
      "除上述属性以外，Login.UserName 还支持 antd.Input 的所有属性，并且自带默认的基础配置，包括 ",
      [
        "code",
        "placeholder"
      ],
      " ",
      [
        "code",
        "size"
      ],
      " ",
      [
        "code",
        "prefix"
      ],
      " 等，这些基础配置均可被覆盖。"
    ],
    [
      "h2",
      "Login.Password、Login.Mobile 同 Login.UserName"
    ],
    [
      "h3",
      "Login.Captcha"
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
            "onGetCaptcha"
          ],
          [
            "td",
            "点击获取校验码的回调"
          ],
          [
            "td",
            "() => (void ",
            "|",
            " false ",
            "|",
            " Promise)"
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
            "countDown"
          ],
          [
            "td",
            "倒计时"
          ],
          [
            "td",
            "number"
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
            "buttonText"
          ],
          [
            "td",
            "点击获取校验码的说明文字"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            "'获取验证码'"
          ]
        ]
      ]
    ],
    [
      "p",
      "除上述属性以外，Login.Captcha 支持的属性与 Login.UserName 相同。"
    ],
    [
      "h3",
      "Login.Submit"
    ],
    [
      "p",
      "支持 antd.Button 的所有属性。"
    ]
  ]
};

/***/ })

});