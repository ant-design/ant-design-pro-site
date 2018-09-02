webpackJsonp([79],{

/***/ 2446:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "在用户使用过程中，可能遇到各种异常情况，比如页面404，申请结果失败，请求的返回异常等等，这篇文档会按照报错形式的不同，分别介绍下相应的处理建议。"
    ],
    [
      "h2",
      "页面级报错"
    ],
    [
      "h3",
      "应用场景"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "路由直接引导到报错页面，比如你输入的网址没有匹配到任何页面，可以由路由引导到预设的 404 页面。"
        ]
      ],
      [
        "li",
        [
          "p",
          "代码控制跳转到报错页面，比如根据请求返回的数据，将没有权限的用户引导到 403 页面。"
        ]
      ]
    ],
    [
      "h3",
      "实现"
    ],
    [
      "p",
      "针对页面级的报错，我们提供了两个业务组件供你选择，可以很方便地实现一个报错页面："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://preview.pro.ant.design/#/exception/404"
            },
            "Exception 异常页"
          ]
        ]
      ]
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token operator\">&lt;</span>Exception type<span class=\"token operator\">=</span><span class=\"token string\">\"404\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>"
      },
      [
        "code",
        "<Exception type=\"404\" />"
      ]
    ],
    [
      "p",
      "默认支持 404，403，500 三种错误，也可自定义文案等内容。"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://preview.pro.ant.design/#/result/fail"
            },
            "Result 结果页"
          ]
        ]
      ]
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "  <span class=\"token operator\">&lt;</span>Result\n    type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n    title<span class=\"token operator\">=</span><span class=\"token string\">\"提交失败\"</span>\n    description<span class=\"token operator\">=</span><span class=\"token string\">\"请核对并修改以下信息后，再重新提交。\"</span>\n    actions<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Button size<span class=\"token operator\">=</span><span class=\"token string\">\"large\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"primary\"</span><span class=\"token operator\">></span>返回修改<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>"
      },
      [
        "code",
        "  <Result\n    type=\"error\"\n    title=\"提交失败\"\n    description=\"请核对并修改以下信息后，再重新提交。\"\n    actions={<Button size=\"large\" type=\"primary\">返回修改</Button>}\n  />"
      ]
    ],
    [
      "p",
      "这个组件一般用在提交结果展示，文案操作等均可自定义。"
    ],
    [
      "h2",
      "提示性报错"
    ],
    [
      "h3",
      "应用场景"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "表单项校验报错。"
        ]
      ],
      [
        "li",
        [
          "p",
          "操作反馈。"
        ]
      ],
      [
        "li",
        [
          "p",
          "网络请求错误。"
        ]
      ]
    ],
    [
      "h3",
      "实现"
    ],
    [
      "p",
      "关于表单项报错，请参考 ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/form-cn/"
        },
        "antd Form"
      ],
      " 中的实现。对于操作反馈和网络请求错误提示，有一些组件可能会用到："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://ant.design/components/alert-cn/"
            },
            "Alert"
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
              "href": "http://ant.design/components/message-cn/"
            },
            "message"
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
              "href": "http://ant.design/components/notification-cn/"
            },
            "notification"
          ]
        ]
      ]
    ],
    [
      "p",
      "在单页应用中，最常见的需求就是处理网络错误信息，我们可以利用 message 和 notification 来吐出响应的接口/网络/业务数据错误。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/cVTaurnfguplvNbctgBN.png",
          "width": "400"
        }
      ]
    ],
    [
      "p",
      "Ant Design Pro 封装了一个强大的 ",
      [
        "code",
        "request.js"
      ],
      " 统一处理请求，提供了默认的错误处理以及提示。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">const</span> checkStatus <span class=\"token operator\">=</span> response <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>response<span class=\"token punctuation\">.</span>status <span class=\"token operator\">>=</span> <span class=\"token number\">200</span> <span class=\"token operator\">&amp;&amp;</span> response<span class=\"token punctuation\">.</span>status <span class=\"token operator\">&lt;</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> response<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">const</span> errortext <span class=\"token operator\">=</span> codeMessage<span class=\"token punctuation\">[</span>response<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">]</span> <span class=\"token operator\">||</span> response<span class=\"token punctuation\">.</span>statusText<span class=\"token punctuation\">;</span>\n  notification<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`请求错误 </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>response<span class=\"token punctuation\">.</span>status<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>response<span class=\"token punctuation\">.</span>url<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> errortext<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> error <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Error</span><span class=\"token punctuation\">(</span>errortext<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  error<span class=\"token punctuation\">.</span>name <span class=\"token operator\">=</span> response<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">;</span>\n  error<span class=\"token punctuation\">.</span>response <span class=\"token operator\">=</span> response<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">throw</span> error<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const checkStatus = response => {\n  if (response.status >= 200 && response.status < 300) {\n    return response;\n  }\n  const errortext = codeMessage[response.status] || response.statusText;\n  notification.error({\n    message: `请求错误 ${response.status}: ${response.url}`,\n    description: errortext,\n  });\n  const error = new Error(errortext);\n  error.name = response.status;\n  error.response = response;\n  throw error;\n};"
      ]
    ],
    [
      "p",
      "为了方便展示 404 等页面，我们在 ",
      [
        "code",
        "request.js"
      ],
      " 中封装了根据状态跳转到相应页面的逻辑,建议在线上环境中删除这个逻辑，代码如下："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "    <span class=\"token punctuation\">.</span><span class=\"token keyword\">catch</span><span class=\"token punctuation\">(</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> status <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token number\">401</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// @HACK</span>\n        <span class=\"token comment\" spellcheck=\"true\">/* eslint-disable no-underscore-dangle */</span>\n        window<span class=\"token punctuation\">.</span>g_app<span class=\"token punctuation\">.</span>_store<span class=\"token punctuation\">.</span><span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          type<span class=\"token punctuation\">:</span> <span class=\"token string\">'login/logout'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token comment\" spellcheck=\"true\">// environment should not be used</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token number\">403</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        router<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/exception/403'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">&lt;=</span> <span class=\"token number\">504</span> <span class=\"token operator\">&amp;&amp;</span> status <span class=\"token operator\">>=</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        router<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/exception/500'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">>=</span> <span class=\"token number\">404</span> <span class=\"token operator\">&amp;&amp;</span> status <span class=\"token operator\">&lt;</span> <span class=\"token number\">422</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        router<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/exception/404'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "    .catch(e => {\n      const status = e.name;\n      if (status === 401) {\n        // @HACK\n        /* eslint-disable no-underscore-dangle */\n        window.g_app._store.dispatch({\n          type: 'login/logout',\n        });\n        return;\n      }\n      // environment should not be used\n      if (status === 403) {\n        router.push('/exception/403');\n        return;\n      }\n      if (status <= 504 && status >= 500) {\n        router.push('/exception/500');\n        return;\n      }\n      if (status >= 404 && status < 422) {\n        router.push('/exception/404');\n      }\n    });"
      ]
    ],
    [
      "p",
      "完整代码可参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"
        },
        "https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"
      ]
    ]
  ],
  "meta": {
    "order": 17,
    "title": {
      "en-US": "Error Handle",
      "zh-CN": "错误处理"
    },
    "type": "进阶",
    "filename": "docs/error-handle.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#页面级报错",
          "title": "页面级报错"
        },
        "页面级报错"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#提示性报错",
          "title": "提示性报错"
        },
        "提示性报错"
      ]
    ]
  ]
};

/***/ })

});