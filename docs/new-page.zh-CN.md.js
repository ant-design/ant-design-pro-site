webpackJsonp([59],{

/***/ 2458:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "一、新增 js、less 文件"
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "src/routes"
      ],
      " 下新建页面的 js 及 less 文件，如果相关页面有多个，可以新建一个文件夹来放置相关文件。"
    ],
    [
      "p",
      [
        "img",
        {
          "width": "300",
          "alt": "新增页面",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/hjDyFTVOgRwDzAIHApMO.png"
        }
      ]
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "p",
      "样式文件默认使用 ",
      [
        "a",
        {
          "title": null,
          "href": "http://www.ruanyifeng.com/blog/2016/06/css_modules.html"
        },
        "CSS Modules"
      ],
      "，如果需要，你可以在样式文件的头部引入 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "antd 样式变量文件"
      ],
      "："
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"~antd/lib/style/themes/default.less\"</span><span class=\"token punctuation\">;</span></span>"
      },
      [
        "code",
        "@import \"~antd/lib/style/themes/default.less\";"
      ]
    ],
    [
      "p",
      "这样可以很方便地获取 antd 样式变量并在你的文件里使用，有利于保持页面的一致性，也方便实现定制主题。"
    ],
    [
      "h2",
      "二、将文件加入菜单和路由"
    ],
    [
      "p",
      "加入菜单和路由的方式请参照 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/router-and-nav#添加路由/菜单"
        },
        "路由和菜单 - 添加路由/菜单"
      ],
      " 中的介绍完成。加好后，访问 ",
      [
        "code",
        "http://localhost:8000/#/new"
      ],
      " 就可以看到新增的页面了。"
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "新增页面",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/xZIqExWKhdnzDBjajnZg.png"
        }
      ]
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "h2",
      "三、新增 model、service"
    ],
    [
      "p",
      "布局及路由都配置好之后，回到之前新建的 ",
      [
        "code",
        "NewPage.js"
      ],
      "，可以开始写业务代码了！如果需要用到 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/dvajs/dva/"
        },
        "dva"
      ],
      " 中的数据流，还需要在 ",
      [
        "code",
        "src/models"
      ],
      " ",
      [
        "code",
        "src/services"
      ],
      " 中建立相应的 model 和 service，具体可以参考脚手架内置页面的写法。"
    ]
  ],
  "meta": {
    "order": 4,
    "title": "新增页面",
    "type": "入门",
    "filename": "docs/new-page.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常只需要在脚手架的基础上进行简单的配置。"
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
          "href": "#一、新增-js、less-文件",
          "title": "一、新增 js、less 文件"
        },
        "一、新增 js、less 文件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#二、将文件加入菜单和路由",
          "title": "二、将文件加入菜单和路由"
        },
        "二、将文件加入菜单和路由"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#三、新增-model、service",
          "title": "三、新增 model、service"
        },
        "三、新增 model、service"
      ]
    ]
  ]
};

/***/ })

});