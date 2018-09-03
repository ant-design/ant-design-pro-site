webpackJsonp([53],{

/***/ 2464:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "Ant Design Pro 是一套基于 React 技术栈的单页面应用，我们提供的是前端代码和本地模拟数据的开发模式，\n通过 API 的形式和任何技术栈的服务端应用一起工作。下面将简单介绍和服务端交互的基本写法。"
    ],
    [
      "h2",
      "前端请求流程"
    ],
    [
      "p",
      "在 Ant Design Pro 中，一个完整的前端 UI 交互到服务端处理流程是这样的："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "UI 组件交互操作；"
        ]
      ],
      [
        "li",
        [
          "p",
          "调用 model 的 effect；"
        ]
      ],
      [
        "li",
        [
          "p",
          "调用统一管理的 service 请求函数；"
        ]
      ],
      [
        "li",
        [
          "p",
          "使用封装的 request.js 发送请求；"
        ]
      ],
      [
        "li",
        [
          "p",
          "获取服务端返回；"
        ]
      ],
      [
        "li",
        [
          "p",
          "然后调用 reducer 改变 state；"
        ]
      ],
      [
        "li",
        [
          "p",
          "更新 model。"
        ]
      ]
    ],
    [
      "p",
      "从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 ",
      [
        "code",
        "services"
      ],
      " 文件夹中，并且一般按照 model 维度进行拆分文件，如："
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "services<span class=\"token operator\">/</span>\n  user<span class=\"token punctuation\">.</span>js\n  api<span class=\"token punctuation\">.</span>js\n  <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>"
      },
      [
        "code",
        "services/\n  user.js\n  api.js\n  ..."
      ]
    ],
    [
      "p",
      "其中，",
      [
        "code",
        "utils/request.js"
      ],
      " 是基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch"
        },
        "fetch"
      ],
      " 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。具体可以参看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/utils/request.js"
        },
        "request.js"
      ],
      "。"
    ],
    [
      "p",
      "例如在 services 中的一个请求用户信息的例子："
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token operator\">/</span><span class=\"token operator\">/</span> services<span class=\"token operator\">/</span>user<span class=\"token punctuation\">.</span>js\nimport request from <span class=\"token string\">'../utils/request'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nexport async function <span class=\"token function\">query</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  return <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/api/users'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\nexport async function <span class=\"token function\">queryCurrent</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  return <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/api/currentUser'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> models<span class=\"token operator\">/</span>user<span class=\"token punctuation\">.</span>js\nimport { queryCurrent } from <span class=\"token string\">'../services/user'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n<span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\neffects<span class=\"token punctuation\">:</span> {\n  <span class=\"token operator\">*</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span>{ payload }<span class=\"token punctuation\">,</span> { call<span class=\"token punctuation\">,</span> put }<span class=\"token punctuation\">)</span> {\n    <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n    <span class=\"token keyword\">const</span> response <span class=\"token operator\">=</span> yield <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>queryUsers<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n    <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n  }<span class=\"token punctuation\">,</span>\n}"
      },
      [
        "code",
        "// services/user.js\nimport request from '../utils/request';\n\nexport async function query() {\n  return request('/api/users');\n}\n\nexport async function queryCurrent() {\n  return request('/api/currentUser');\n}\n\n// models/user.js\nimport { queryCurrent } from '../services/user';\n...\neffects: {\n  *fetch({ payload }, { call, put }) {\n    ...\n    const response = yield call(queryUsers);\n    ...\n  },\n}"
      ]
    ],
    [
      "h3",
      "处理异步请求"
    ],
    [
      "p",
      "在处理复杂的异步请求的时候，很容易让逻辑混乱，陷入嵌套陷阱，所以 Ant Design Pro 的底层基础框架 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/dvajs/dva"
        },
        "dva"
      ],
      " 使用 ",
      [
        "code",
        "effect"
      ],
      " 的方式来管理同步化异步请求："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "effects<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token operator\">*</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> payload <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> call<span class=\"token punctuation\">,</span> put <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'changeLoading'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// 异步请求 1</span>\n    <span class=\"token keyword\">const</span> response <span class=\"token operator\">=</span> <span class=\"token keyword\">yield</span> <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>queryFakeList<span class=\"token punctuation\">,</span> payload<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'save'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> response<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// 异步请求 2</span>\n    <span class=\"token keyword\">const</span> response2 <span class=\"token operator\">=</span> <span class=\"token keyword\">yield</span> <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>queryFakeList2<span class=\"token punctuation\">,</span> payload<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'save2'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> response2<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'changeLoading'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "effects: {\n  *fetch({ payload }, { call, put }) {\n    yield put({\n      type: 'changeLoading',\n      payload: true,\n    });\n    // 异步请求 1\n    const response = yield call(queryFakeList, payload);\n    yield put({\n      type: 'save',\n      payload: response,\n    });\n    // 异步请求 2\n    const response2 = yield call(queryFakeList2, payload);\n    yield put({\n      type: 'save2',\n      payload: response2,\n    });\n    yield put({\n      type: 'changeLoading',\n      payload: false,\n    });\n  },\n},"
      ]
    ],
    [
      "p",
      "通过 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*"
        },
        "generator"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/yield"
        },
        "yield"
      ],
      " 使得异步调用的逻辑处理跟同步一样，更多可参看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/dvajs/dva/blob/master/docs/GettingStarted.md#async-logic"
        },
        "dva async logic"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 7,
    "title": "和服务端进行交互",
    "type": "入门",
    "filename": "docs/server.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#前端请求流程",
          "title": "前端请求流程"
        },
        "前端请求流程"
      ]
    ]
  ]
};

/***/ })

});