webpackJsonp([55],{

/***/ 2479:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "基本结构"
    ],
    [
      "p",
      "在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "路由管理"
          ],
          " 通过约定的语法根据在 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
            },
            [
              "code",
              "router.config.js"
            ]
          ],
          " 中配置路由。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "菜单生成"
          ],
          " 根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "面包屑"
          ],
          " 组件 ",
          [
            "a",
            {
              "title": null,
              "href": "http://pro.ant.design/components/PageHeader"
            },
            "PageHeader"
          ],
          " 中内置的面包屑也可由脚手架提供的配置信息自动生成。"
        ]
      ]
    ],
    [
      "p",
      "下面简单介绍下各个模块的基本思路，如果你对实现过程不感兴趣，只想了解应该怎么实现相关需求，可以直接查看",
      [
        "a",
        {
          "title": null,
          "href": "/docs/router-and-nav#需求实例"
        },
        "需求实例"
      ],
      "。"
    ],
    [
      "h3",
      "路由"
    ],
    [
      "p",
      "目前脚手架中所有的路由都通过 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      " 来统一管理，在 umi 的配置中我们增加了一些参数，如 ",
      [
        "code",
        "name"
      ],
      ",",
      [
        "code",
        "icon"
      ],
      ",",
      [
        "code",
        "hideChildren"
      ],
      ",",
      [
        "code",
        "authority"
      ],
      "，来辅助生成菜单。其中："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "name"
          ],
          " 和 ",
          [
            "code",
            "icon"
          ],
          "分别代表生成菜单项的图标和文本。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "hideChildren"
          ],
          " 用于隐藏不需要在菜单中展示的子路由。用法可以查看 ",
          [
            "code",
            "分步表单"
          ],
          " 的配置。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "hideInMenu"
          ],
          " 可以在菜单中不展示这个路由，包括子路由。效果可以查看 ",
          [
            "code",
            "exception/trigger"
          ],
          "页面。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "authority"
          ],
          " 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。"
        ],
        [
          "blockquote",
          [
            "p",
            "你可能注意到配置中的 ",
            [
              "code",
              "name"
            ],
            " 和菜单实际展示的不同，这是因为我们使用了全球化组件的原因，具体参见 ",
            [
              "a",
              {
                "title": null,
                "href": "/docs/i18n"
              },
              "i18n"
            ]
          ]
        ]
      ]
    ],
    [
      "h3",
      "菜单"
    ],
    [
      "p",
      "菜单根据 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      " 生成，具体逻辑在 ",
      [
        "code",
        "src/layouts/LoadingPage"
      ],
      " 中的 ",
      [
        "code",
        "formatter"
      ],
      " 方法实现。"
    ],
    [
      "blockquote",
      [
        "p",
        "如果你的项目并不需要菜单，你可以直接在 ",
        [
          "code",
          "BasicLayout"
        ],
        " 中删除 ",
        [
          "code",
          "SiderMenu"
        ],
        " 组件的挂载。并在 ",
        [
          "code",
          "src/layouts/LoadingPage"
        ],
        " 中 设置 ",
        [
          "code",
          "const MenuData = []"
        ],
        "。"
      ]
    ],
    [
      "h3",
      "面包屑"
    ],
    [
      "p",
      "面包屑由 ",
      [
        "code",
        "PageHeaderLayout"
      ],
      " 实现，",
      [
        "code",
        "MenuContext"
      ],
      " 将 根据 ",
      [
        "code",
        "MenuData"
      ],
      " 生成的 ",
      [
        "code",
        "breadcrumbNameMap"
      ],
      " 通过 props 传递给了 ",
      [
        "code",
        "PageHeader"
      ],
      "，如果你要做自定义的面包屑，可以通过修改传入的 ",
      [
        "code",
        "breadcrumbNameMap"
      ],
      " 来解决。"
    ],
    [
      "p",
      [
        "code",
        "breadcrumbNameMap"
      ],
      " 示例数据如下："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'/'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> redirect<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span><span class=\"token punctuation\">,</span> locale<span class=\"token punctuation\">:</span> <span class=\"token string\">'menu'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'/dashboard/analysis'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'analysis'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Analysis'</span><span class=\"token punctuation\">,</span>\n    locale<span class=\"token punctuation\">:</span> <span class=\"token string\">'menu.dashboard.analysis'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token operator\">...</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  '/': { path: '/', redirect: '/dashboard/analysis', locale: 'menu' },\n  '/dashboard/analysis': {\n    name: 'analysis',\n    component: './Dashboard/Analysis',\n    locale: 'menu.dashboard.analysis',\n  },\n  ...\n}"
      ]
    ],
    [
      "h2",
      "需求实例"
    ],
    [
      "p",
      "上面对这部分的实现概要进行了介绍，接下来通过实际的案例来说明具体该怎么做。"
    ],
    [
      "h3",
      "新增页面"
    ],
    [
      "p",
      "脚手架默认提供了两种布局模板：",
      [
        "code",
        "基础布局 - BasicLayout"
      ],
      " 以及 ",
      [
        "code",
        "账户相关布局 - UserLayout"
      ],
      "："
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "基础布局",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png"
        }
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "账户相关布局",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png"
        }
      ]
    ],
    [
      "p",
      "如果你的页面可以利用这两种布局，那么只需要在路由配置中增加一条即可："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "  <span class=\"token comment\" spellcheck=\"true\">// app</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/LoadingPage'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token comment\" spellcheck=\"true\">// dashboard</span>\n      <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> redirect<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> path <span class=\"token punctuation\">:</span><span class=\"token string\">'/dashboard/test'</span><span class=\"token punctuation\">,</span>component<span class=\"token punctuation\">:</span><span class=\"token string\">\"./Dashboard/Test\"</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "  // app\n  {\n    path: '/',\n    component: '../layouts/LoadingPage',\n    routes: [\n      // dashboard\n      { path: '/', redirect: '/dashboard/analysis' },\n      { path :'/dashboard/test',component:\"./Dashboard/Test\"},\n    ...\n},"
      ]
    ],
    [
      "p",
      "加好后，会默认生成相关的路由及导航。"
    ],
    [
      "h3",
      "新增布局"
    ],
    [
      "p",
      "在脚手架中我们通过嵌套路由来实现布局模板。",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      " 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以在直接增加一个新的一级数组。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n   <span class=\"token comment\" spellcheck=\"true\">// user</span>\n   <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/user'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/UserLayout'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n   <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n   <span class=\"token comment\" spellcheck=\"true\">// app</span>\n   <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/LoadingPage'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n   <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n   <span class=\"token comment\" spellcheck=\"true\">// new</span>\n   <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/new'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/new_page'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n   <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "module.exports = [\n   // user\n   {\n    path: '/user',\n    component: '../layouts/UserLayout',\n    routes:[...]\n   },\n   // app\n   {\n    path: '/',\n    component: '../layouts/LoadingPage',\n    routes:[...]\n   },\n   // new\n   {\n    path: '/new',\n    component: '../layouts/new_page',\n    routes:[...]\n   },\n]"
      ]
    ],
    [
      "h3",
      "带参数的路由"
    ],
    [
      "p",
      "脚手架默认支持带参数的路由,但是在菜单中显示带参数的路由并不是个好主意，我们并不会自动的帮你注入一个参数，你可能需要在代码中自行处理。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/:page'</span><span class=\"token punctuation\">,</span>hideInMenu<span class=\"token punctuation\">:</span><span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'analysis'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "{ path: '/dashboard/:page',hideInMenu:true, name: 'analysis', component: './Dashboard/Analysis' },"
      ]
    ],
    [
      "p",
      "你可以通过 一下代码来跳转到这个路由："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> router <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/router'</span><span class=\"token punctuation\">;</span>\n\nrouter<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/dashboard/anyParams'</span><span class=\"token punctuation\">)</span>\n\n<span class=\"token comment\" spellcheck=\"true\">//or</span>\n\n<span class=\"token keyword\">import</span> Link <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/link'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">&lt;</span>Link to<span class=\"token operator\">=</span><span class=\"token string\">\"/dashboard/anyParams\"</span><span class=\"token operator\">></span>go<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>"
      },
      [
        "code",
        "import router from 'umi/router';\n\nrouter.push('/dashboard/anyParams')\n\n//or\n\nimport Link from 'umi/link';\n\n<Link to=\"/dashboard/anyParams\">go</Link>"
      ]
    ],
    [
      "p",
      "在路由组件中，可以通过",
      [
        "code",
        "this.props.match.params"
      ],
      " 来获得路由参数。"
    ],
    [
      "p",
      "更多详细内容请参见：",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html#%E7%BA%A6%E5%AE%9A%E5%BC%8F%E8%B7%AF%E7%94%B1"
        },
        "umi#路由"
      ]
    ]
  ],
  "meta": {
    "order": 3,
    "title": {
      "en-US": "Router and Nav",
      "zh-CN": "路由和菜单"
    },
    "type": "入门",
    "filename": "docs/router-and-nav.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "路由和菜单是组织起一个应用的关键骨架，pro 中的路由为了方便管理，使用了中心化的方式，在 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        [
          "code",
          "router.config.js"
        ]
      ],
      " 统一配置和管理。"
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基本结构",
          "title": "基本结构"
        },
        "基本结构"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#需求实例",
          "title": "需求实例"
        },
        "需求实例"
      ]
    ]
  ]
};

/***/ })

});