webpackJsonp([89],{

/***/ 2445:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "在日常开发中，往往是前后端分离的，这个时候约定好一套接口标准，前后端各自独立开发，就不会被对方的技术难点给阻塞住，从而保证项目进度。"
    ],
    [
      "p",
      "在 Ant Design Pro 中我们已经有了一套比较完善的 mock 功能，而 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/nikogu/roadhog-api-doc"
        },
        "roadhog-api-doc"
      ],
      " 工具，则能够从项目的 mock 数据中读取接口信息生成对应的文档，这样就能够更加清晰明了的展现项目的接口情况。"
    ],
    [
      "p",
      "效果如下：",
      [
        "a",
        {
          "title": null,
          "href": "https://preview.pro.ant.design/api.html"
        },
        "Pro API Docs"
      ],
      "。"
    ],
    [
      "h2",
      "如何使用"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> roadhog-api-doc -g"
      },
      [
        "code",
        "$ npm install roadhog-api-doc -g"
      ]
    ],
    [
      "h3",
      "本地服务"
    ],
    [
      "p",
      "进入到项目根目录，运行："
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ roadhog-api-doc start <span class=\"token punctuation\">[</span>port<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "$ roadhog-api-doc start [port]"
      ]
    ],
    [
      "p",
      "就可以在当前项目跑起一个文档网站，但是前提是必须跟 Ant Design Pro 一样是基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog"
        },
        "roadhog"
      ],
      " 的项目，并且使用了数据 mock 功能，因为文档的信息来源就是 mock 文件。"
    ],
    [
      "p",
      "需要额外注意的是，上面的 ",
      [
        "code",
        "port"
      ],
      " 参数指的是当前本地的 ",
      [
        "code",
        "roadhog"
      ],
      " 应用起的服务，如果指定了可以在本地直接点击访问项目接口，没有指定则会静态化网络请求。"
    ],
    [
      "h3",
      "静态站点生成"
    ],
    [
      "p",
      "项目根目录，运行："
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ roadhog-api-doc build"
      },
      [
        "code",
        "$ roadhog-api-doc build"
      ]
    ],
    [
      "p",
      "会生成三个文档站点静态文件：",
      [
        "code",
        "api.html"
      ],
      "、",
      [
        "code",
        "api.js"
      ],
      "、",
      [
        "code",
        "api.css"
      ],
      "，你可以将其部署到自己的站点中供线上访问，这里的数据已经被静态化（转换网络请求为代码数据）。"
    ],
    [
      "h3",
      "书写文档"
    ],
    [
      "p",
      "通常来讲，你无需额外加入任何依赖就可以生成文档，但是如果你需要对接口做出说明，需要按照以下格式对 ",
      [
        "code",
        "roadhog mock"
      ],
      " 文件进行修改："
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> roadhog-api-doc --save-dev <span class=\"token comment\" spellcheck=\"true\"># 将 roadhog-api-doc 作为本地工具依赖安装</span>"
      },
      [
        "code",
        "$ npm install roadhog-api-doc --save-dev # 将 roadhog-api-doc 作为本地工具依赖安装"
      ]
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> format <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'roadhog-api-doc'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> proxy <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'GET /api/currentUser'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    $desc<span class=\"token punctuation\">:</span> <span class=\"token string\">\"获取当前用户接口\"</span><span class=\"token punctuation\">,</span>\n    $params<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      pageSize<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        desc<span class=\"token punctuation\">:</span> <span class=\"token string\">'分页'</span><span class=\"token punctuation\">,</span>\n        exp<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    $body<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'momo.zxy'</span><span class=\"token punctuation\">,</span>\n      avatar<span class=\"token punctuation\">:</span> imgMap<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">,</span>\n      userid<span class=\"token punctuation\">:</span> <span class=\"token string\">'00000001'</span><span class=\"token punctuation\">,</span>\n      notifyCount<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span>proxy<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { format } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/currentUser': {\n    $desc: \"获取当前用户接口\",\n    $params: {\n      pageSize: {\n        desc: '分页',\n        exp: 2,\n      },\n    },\n    $body: {\n      name: 'momo.zxy',\n      avatar: imgMap.user,\n      userid: '00000001',\n      notifyCount: 12,\n    },\n  },\n};\n\nexport default format(proxy);"
      ]
    ],
    [
      "p",
      "其中："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "$desc: 接口说明"
        ]
      ],
      [
        "li",
        [
          "p",
          "$params: 接口参数说明，对象描述各个参数的意义"
        ]
      ],
      [
        "li",
        [
          "p",
          "$body: 数据返回结果，通常就是 mock 的数据"
        ]
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/PVfsHataJahAwAVaKDtp.png"
        }
      ]
    ],
    [
      "h3",
      "本地测试 mock 数据和真实端口"
    ],
    [
      "p",
      "当启动本地的 API Docs 站点以后，可以点击 ",
      [
        "code",
        "send"
      ],
      " 按钮发送 ",
      [
        "code",
        "POST"
      ],
      " 或者 ",
      [
        "code",
        "GET"
      ],
      " 请求，并且返回值会在弹出框中显示："
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/mkgrIEbmhXZFbSOWvTCz.png"
        }
      ]
    ],
    [
      "p",
      "其中需要注意的是，如果启动 API Docs 站点时，没有加端口号，那么这里的返回数据是静态数据，如果加了端口号并且本地也同时跑起了项目，那么就会直接返回实际数据。"
    ],
    [
      "p",
      "如果你想直接访问线上的真实数据，那么需要改写当前项目的 ",
      [
        "code",
        ".roadhog.mock.js"
      ],
      "，",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/sorrycc/roadhog#mock"
        },
        "重定向"
      ],
      "到线上路径。"
    ],
    [
      "p",
      "可以通过访问 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/nikogu/roadhog-api-doc"
        },
        "roadhog-api-doc github"
      ],
      " 了解更多。"
    ]
  ],
  "meta": {
    "order": 19,
    "title": "使用 API 文档工具",
    "type": "进阶",
    "filename": "docs/api-doc.zh-CN.md"
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
    ]
  ]
};

/***/ })

});