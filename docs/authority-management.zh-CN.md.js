webpackJsonp([87],{

/***/ 2447:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "权限组件 Authorized"
    ],
    [
      "p",
      "这是脚手架权限管理的基础，基本思路是通过比对当前权限与准入权限，决定展示正常渲染内容还是异常内容，使用方式详见 ",
      [
        "a",
        {
          "title": null,
          "href": "/components/Authorized"
        },
        "Authorized 文档"
      ],
      "。"
    ],
    [
      "h2",
      "应用实例"
    ],
    [
      "p",
      "通过对数据的组织及权限组件的应用，脚手架实现了基本的权限管理，下面简单介绍了几个常见场景的应用方式。"
    ],
    [
      "blockquote",
      [
        "p",
        "脚手架中对组件 export 的 RenderAuthorized 函数进行了",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js"
          },
          "基本封装"
        ],
        "，默认传入当前的权限（mock 数据），因此在脚手架中使用时，无需再关注当前权限。"
      ]
    ],
    [
      "h3",
      "控制菜单和路由显示"
    ],
    [
      "p",
      "如需对某些页面进行权限控制，只须在路由配置文件 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/config/router.config.js"
        },
        "router.config.js"
      ],
      " 中设置 ",
      [
        "code",
        "authority"
      ],
      " 属性即可，代表该路由的准入权限，pro 的路由系统中会默认包裹 ",
      [
        "code",
        "Authorized"
      ],
      " 进行判断处理。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/form'</span><span class=\"token punctuation\">,</span>\n  icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'form'</span><span class=\"token punctuation\">,</span>\n  children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/form/basic-form'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'basicform'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Forms/BasicForm'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/form/step-form'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'stepform'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Forms/StepForm'</span><span class=\"token punctuation\">,</span>\n    authority<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'guest'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 配置准入权限，可以配置多个角色</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/form/advanced-form'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'advancedform'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Forms/AdvancedForm'</span><span class=\"token punctuation\">,</span>\n    authority<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'admin'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 配置准入权限，可以配置多个角色</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  path: '/form',\n  icon: 'form',\n  name: 'form',\n  children: [{\n    path: '/form/basic-form',\n    name: 'basicform',\n    component: './Forms/BasicForm',\n  }, {\n    path: '/form/step-form',\n    name: 'stepform',\n    component: './Forms/StepForm',\n    authority: ['guest'], // 配置准入权限，可以配置多个角色\n  }, {\n    path: '/form/advanced-form',\n    name: 'advancedform',\n    component: './Forms/AdvancedForm',\n    authority: ['admin'], // 配置准入权限，可以配置多个角色\n  }],\n}"
      ]
    ],
    [
      "h3",
      "控制页面元素显示"
    ],
    [
      "p",
      "使用 ",
      [
        "a",
        {
          "title": null,
          "href": "http://pro.ant.design/components/Authorized#Authorized"
        },
        "Authorized"
      ],
      " 或 ",
      [
        "a",
        {
          "title": null,
          "href": "http://pro.ant.design/components/Authorized#Authorized.Secured"
        },
        "Authorized.Secured"
      ],
      " 可以很方便地控制元素/组件的渲染，具体使用方式参见组件文档。"
    ],
    [
      "h3",
      "修改当前权限"
    ],
    [
      "p",
      "脚手架中使用 ",
      [
        "code",
        "localStorage"
      ],
      " 模拟权限角色，实际项目中可能需要从后台读取。\n脚手架中实现了一个简单的刷新权限方法，在登录/注销等关键节点对当前权限进行了更新。\n具体可以查看 ",
      [
        "code",
        "login.js"
      ],
      " 中对 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/c93b0169a500427ee5fdd3c2977886c86aa3d59a/src/pages/User/models/login.js#L24"
        },
        "reloadAuthorized "
      ],
      " 的调用。"
    ]
  ],
  "meta": {
    "order": 24,
    "title": "权限管理",
    "type": "进阶",
    "filename": "docs/authority-management.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "权限控制是中后台系统中常见的需求之一，你可以利用我们提供的权限控制组件，实现一些基本的权限控制功能，脚手架中也包含了几个简单示例以提供参考。"
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
          "href": "#权限组件-Authorized",
          "title": "权限组件 Authorized"
        },
        "权限组件 Authorized"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#应用实例",
          "title": "应用实例"
        },
        "应用实例"
      ]
    ]
  ]
};

/***/ })

});