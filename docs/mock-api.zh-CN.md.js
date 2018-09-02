webpackJsonp([63],{

/***/ 2462:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "Mock 数据是前端开发过程中必不可少的一环，是分离前后端开发的关键链路。通过预先跟服务器端约定好的接口，模拟请求数据甚至逻辑，能够让前端开发独立自主，不会被服务端的开发所阻塞。"
    ],
    [
      "p",
      "在 Ant Design Pro 中，因为我们的底层框架是 umi，而它自带了代理请求功能，通过代理请求就能够轻松处理数据模拟的功能。"
    ],
    [
      "h2",
      "使用 umi 的 mock 功能"
    ],
    [
      "p",
      "umi 里约定 mock 文件夹下的文件即 mock 文件，文件导出接口定义，支持基于 ",
      [
        "code",
        "require"
      ],
      " 动态分析的实时刷新，支持 ES6 语法，以及友好的出错提示，详情参看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/mock-data.html"
        },
        "umijs.org"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 支持值为 Object 和 Array</span>\n  <span class=\"token string\">'GET /api/users'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> users<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">,</span> <span class=\"token number\">2</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// GET POST 可省略</span>\n  <span class=\"token string\">'/api/users/1'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// 支持自定义函数，API 参考 express@4</span>\n  <span class=\"token string\">'POST /api/users/create'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span> res<span class=\"token punctuation\">.</span><span class=\"token function\">end</span><span class=\"token punctuation\">(</span><span class=\"token string\">'OK'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  // 支持值为 Object 和 Array\n  'GET /api/users': { users: [1, 2] },\n\n  // GET POST 可省略\n  '/api/users/1': { id: 1 },\n\n  // 支持自定义函数，API 参考 express@4\n  'POST /api/users/create': (req, res) => { res.end('OK'); },\n};"
      ]
    ],
    [
      "p",
      "当客户端（浏览器）发送请求，如：",
      [
        "code",
        "GET /api/users"
      ],
      "，那么本地启动的 ",
      [
        "code",
        "umi dev"
      ],
      " 会跟此配置文件匹配请求路径以及方法，如果匹配到了，就会将请求通过配置处理，就可以像样例一样，你可以直接返回数据，也可以通过函数处理以及重定向到另一个服务器。"
    ],
    [
      "p",
      "比如定义如下映射规则："
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token string\">'GET /api/currentUser'</span><span class=\"token punctuation\">:</span> {\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'momo.zxy'</span><span class=\"token punctuation\">,</span>\n  avatar<span class=\"token punctuation\">:</span> imgMap<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">,</span>\n  userid<span class=\"token punctuation\">:</span> <span class=\"token string\">'00000001'</span><span class=\"token punctuation\">,</span>\n  notifyCount<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n}<span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "'GET /api/currentUser': {\n  name: 'momo.zxy',\n  avatar: imgMap.user,\n  userid: '00000001',\n  notifyCount: 12,\n},"
      ]
    ],
    [
      "p",
      "访问的本地 ",
      [
        "code",
        "/api/users"
      ],
      " 接口："
    ],
    [
      "p",
      "请求头"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png",
          "width": "400"
        }
      ]
    ],
    [
      "p",
      "返回的数据"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png",
          "width": "600"
        }
      ]
    ],
    [
      "h3",
      "引入 Mock.js"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "http://mockjs.com/"
        },
        "Mock.js"
      ],
      " 是常用的辅助生成模拟数据的第三方库，当然你可以用你喜欢的任意库来结合 roadhog 构建数据模拟功能。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> mockjs <span class=\"token keyword\">from</span> <span class=\"token string\">'mockjs'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 使用 mockjs 等三方库</span>\n  <span class=\"token string\">'GET /api/tags'</span><span class=\"token punctuation\">:</span> mockjs<span class=\"token punctuation\">.</span><span class=\"token function\">mock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'list|100'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'@city'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'value|1-100'</span><span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'type|0-2'</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import mockjs from 'mockjs';\n\nexport default {\n  // 使用 mockjs 等三方库\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],\n  }),\n};"
      ]
    ],
    [
      "h3",
      "添加跨域请求头"
    ],
    [
      "p",
      "设置 ",
      [
        "code",
        "response"
      ],
      " 的请求头即可："
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token string\">'POST /api/users/create'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> {\n  <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n  res<span class=\"token punctuation\">.</span><span class=\"token function\">setHeader</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Access-Control-Allow-Origin'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'*'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n  <span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span><span class=\"token punctuation\">.</span>\n}<span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "'POST /api/users/create': (req, res) => {\n  ...\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  ...\n},"
      ]
    ],
    [
      "h2",
      "合理的拆分你的 mock 文件"
    ],
    [
      "p",
      "对于整个系统来说，请求接口是复杂并且繁多的，为了处理大量模拟请求的场景，我们通常把每一个数据模型抽象成一个文件，统一放在 ",
      [
        "code",
        "mock"
      ],
      " 的文件夹中，然后他们会自动被引入。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png",
          "width": "200"
        }
      ]
    ],
    [
      "h2",
      "如何模拟延迟"
    ],
    [
      "p",
      "为了更加真实的模拟网络数据请求，往往需要模拟网络延迟时间。"
    ],
    [
      "h3",
      "手动添加 setTimeout 模拟延迟"
    ],
    [
      "p",
      "你可以在重写请求的代理方法，在其中添加模拟延迟的处理，如："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token string\">'POST /api/forms'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    res<span class=\"token punctuation\">.</span><span class=\"token function\">send</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Ok'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "'POST /api/forms': (req, res) => {\n  setTimeout(() => {\n    res.send('Ok');\n  }, 1000);\n},"
      ]
    ],
    [
      "h3",
      "使用插件模拟延迟"
    ],
    [
      "p",
      "上面的方法虽然简便，但是当你需要添加所有的请求延迟的时候，可能就麻烦了，不过可以通过第三方插件来简化这个问题，如：",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/nikogu/roadhog-api-doc/blob/master/lib/utils.js#L5"
        },
        "roadhog-api-doc#delay"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> delay <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'roadhog-api-doc'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> proxy <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'GET /api/project/notice'</span><span class=\"token punctuation\">:</span> getNotice<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/activities'</span><span class=\"token punctuation\">:</span> getActivities<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/rule'</span><span class=\"token punctuation\">:</span> getRule<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/tags'</span><span class=\"token punctuation\">:</span> mockjs<span class=\"token punctuation\">.</span><span class=\"token function\">mock</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    <span class=\"token string\">'list|100'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'@city'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'value|1-100'</span><span class=\"token punctuation\">:</span> <span class=\"token number\">50</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'type|0-2'</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/fake_list'</span><span class=\"token punctuation\">:</span> getFakeList<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/fake_chart_data'</span><span class=\"token punctuation\">:</span> getFakeChartData<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/profile/basic'</span><span class=\"token punctuation\">:</span> getProfileBasicData<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/profile/advanced'</span><span class=\"token punctuation\">:</span> getProfileAdvancedData<span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'POST /api/register'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    res<span class=\"token punctuation\">.</span><span class=\"token function\">send</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> status<span class=\"token punctuation\">:</span> <span class=\"token string\">'ok'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'GET /api/notices'</span><span class=\"token punctuation\">:</span> getNotices<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 调用 delay 函数，统一处理</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">delay</span><span class=\"token punctuation\">(</span>proxy<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { delay } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/project/notice': getNotice,\n  'GET /api/activities': getActivities,\n  'GET /api/rule': getRule,\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }]\n  }),\n  'GET /api/fake_list': getFakeList,\n  'GET /api/fake_chart_data': getFakeChartData,\n  'GET /api/profile/basic': getProfileBasicData,\n  'GET /api/profile/advanced': getProfileAdvancedData,\n  'POST /api/register': (req, res) => {\n    res.send({ status: 'ok' });\n  },\n  'GET /api/notices': getNotices,\n};\n\n// 调用 delay 函数，统一处理\nexport default delay(proxy, 1000);"
      ]
    ],
    [
      "h3",
      "联调"
    ],
    [
      "p",
      "当本地开发完毕之后，如果服务器的接口满足之前的约定，那么只需要",
      [
        "a",
        {
          "title": null,
          "href": "/docs/server-cn#%E4%BB%8E-mock-%E7%9B%B4%E6%8E%A5%E5%88%87%E6%8D%A2%E5%88%B0%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%AF%B7%E6%B1%82"
        },
        "关闭 mock 数据或者代理到服务端的真实接口地址即可"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run start:no-proxy"
      },
      [
        "code",
        "$ npm run start:no-proxy"
      ]
    ]
  ],
  "meta": {
    "order": 13,
    "title": "Mock 和联调",
    "type": "进阶",
    "filename": "docs/mock-api.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-umi-的-mock-功能",
          "title": "使用 umi 的 mock 功能"
        },
        "使用 umi 的 mock 功能"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#合理的拆分你的-mock-文件",
          "title": "合理的拆分你的 mock 文件"
        },
        "合理的拆分你的 mock 文件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何模拟延迟",
          "title": "如何模拟延迟"
        },
        "如何模拟延迟"
      ]
    ]
  ]
};

/***/ })

});