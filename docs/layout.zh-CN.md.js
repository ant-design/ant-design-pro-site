webpackJsonp([65],{

/***/ 2452:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "Ant Design Pro 的布局"
    ],
    [
      "p",
      "在 Ant Design Pro 中，我们抽离了使用过程中的通用布局，都放在 ",
      [
        "code",
        "layouts"
      ],
      " 目录中，分别为："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "BasicLayout：基础页面布局，包含了头部导航，侧边栏和通知栏："
        ]
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png"
        }
      ]
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "UserLayout：抽离出用于登陆注册页面的通用布局"
        ]
      ],
      [
        "li",
        [
          "p",
          "BlankLayout：空白的布局"
        ]
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png"
        }
      ]
    ],
    [
      "h3",
      "如何使用 Ant Design Pro 布局"
    ],
    [
      "p",
      "通常布局是和路由系统紧密结合的，Ant Design Pro 的路由使用了 Umi 的路由方案，为了统一方便的管理路由和页面的关系，我们将配置信息统一抽离到 ",
      [
        "code",
        "config/router.config.js"
      ],
      " 下，通过如下配置定义每个页面的布局："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">{</span>\n  path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n  component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/BasicLayout'</span><span class=\"token punctuation\">,</span>  <span class=\"token comment\" spellcheck=\"true\">// 指定以下页面的布局</span>\n  routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token comment\" spellcheck=\"true\">// dashboard</span>\n    <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> redirect<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashboard'</span><span class=\"token punctuation\">,</span>\n      icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashboard'</span><span class=\"token punctuation\">,</span>\n      routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'analysis'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/monitor'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'monitor'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Monitor'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/workplace'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'workplace'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Workplace'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "module.exports = [{\n  path: '/',\n  component: '../layouts/BasicLayout',  // 指定以下页面的布局\n  routes: [\n    // dashboard\n    { path: '/', redirect: '/dashboard/analysis' },\n    {\n      path: '/dashboard',\n      name: 'dashboard',\n      icon: 'dashboard',\n      routes: [\n        { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },\n        { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },\n        { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },\n      ],\n    },\n  ],\n}]"
      ]
    ],
    [
      "p",
      "映射路由和页面布局（组件）的关系如代码所示，完整映射转换实现可以参看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"
        },
        "router.config.js"
      ],
      "。"
    ],
    [
      "p",
      "更多 Umi 的路由配置方式可以参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html#%E9%85%8D%E7%BD%AE%E5%BC%8F%E8%B7%AF%E7%94%B1"
        },
        "Umi  配置式路由"
      ],
      "。"
    ],
    [
      "h4",
      "Pro 扩展配置"
    ],
    [
      "p",
      "我们在 ",
      [
        "code",
        "router.config.js"
      ],
      " 扩展了一些关于 pro 全局菜单的配置。"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "{\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashboard'</span><span class=\"token punctuation\">,</span>\n  icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashboard'</span><span class=\"token punctuation\">,</span>\n  hideInMenu<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  hideChildrenInMenu<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  hideInBreadcrumb<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  authority<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'admin'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n}"
      },
      [
        "code",
        "{\n  name: 'dashboard',\n  icon: 'dashboard',\n  hideInMenu: true,\n  hideChildrenInMenu: true,\n  hideInBreadcrumb: true,\n  authority: ['admin'],\n}"
      ]
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
          ": 当前路由在菜单和面包屑中的名称，注意这里是国际化配置的 key，具体展示菜单名可以在 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design-pro/blob/v2/src/locales/zh-CN.js"
            },
            "/src/locales/zh-CN.js"
          ],
          " 进行配置。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "icon"
          ],
          ": 当前路由在菜单下的图标名。"
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
          ": 当前路由在菜单中不展现，默认 ",
          [
            "code",
            "false"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "hideChildrenInMenu"
          ],
          ": 当前路由的子级在菜单中不展现，默认 ",
          [
            "code",
            "false"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "hideInBreadcrumb"
          ],
          ": 当前路由在面包屑中不展现，默认 ",
          [
            "code",
            "false"
          ],
          "。"
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
          ": 允许展示的权限，不设则都可见，详见：",
          [
            "a",
            {
              "title": null,
              "href": "/docs/authority-management"
            },
            "权限管理"
          ],
          "。"
        ]
      ]
    ],
    [
      "h2",
      "Ant Design 布局组件"
    ],
    [
      "p",
      "除了 Pro 里的内建布局以为，在一些页面中需要进行布局，可以使用 Ant Design 目前提供的两套布局组件工具：",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/layout/"
        },
        "Layout"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/grid/"
        },
        "Grid"
      ],
      "。"
    ],
    [
      "h3",
      "Grid 组件"
    ],
    [
      "p",
      "栅格布局是网页中最常用的布局，其特点就是按照一定比例划分页面，能够随着屏幕的变化依旧保持比例，从而具有弹性布局的特点。"
    ],
    [
      "p",
      "而 Ant Design 的栅格组件提供的功能更为强大，能够设置间距、具有支持响应式的比例设置，以及支持 ",
      [
        "code",
        "flex"
      ],
      " 模式，基本上涵盖了大部分的布局场景，详情参看：",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/grid/"
        },
        "Grid"
      ],
      "。"
    ],
    [
      "h3",
      "Layout 组件"
    ],
    [
      "p",
      "如果你需要辅助页面框架级别的布局设计，那么 ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/layout/"
        },
        "Layout"
      ],
      " 则是你最佳的选择，它抽象了大部分框架布局结构，使得只需要填空就可以开发规范专业的页面整体布局，详情参看：",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/layout/"
        },
        "Layout"
      ],
      "。"
    ],
    [
      "h3",
      "根据不同场景区分抽离布局组件"
    ],
    [
      "p",
      "在大部分场景下，我们需要基于上面两个组件封装一些适用于当下具体业务的组件，包含了通用的导航、侧边栏、顶部通知、页面标题等元素。例如 Ant Design Pro 的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js"
        },
        "BasicLayout"
      ],
      "。"
    ],
    [
      "p",
      "通常，我们会把抽象出来的布局组件，放到跟 ",
      [
        "code",
        "pages"
      ],
      "、 ",
      [
        "code",
        "components"
      ],
      " 平行的 ",
      [
        "code",
        "layouts"
      ],
      " 文件夹中方便管理。需要注意的是，这些布局组件和我们平时使用的其它组件并没有什么不同，只不过功能性上是为了处理布局问题。"
    ],
    [
      "blockquote",
      [
        "p",
        "除了 Ant Design 官方提供的布局组件，也可以试试 ",
        [
          "a",
          {
            "title": null,
            "href": "https://ant.design/docs/react/recommendation-cn"
          },
          "社区精选"
        ],
        " 里推荐的布局组件。"
      ]
    ]
  ],
  "meta": {
    "order": 2,
    "title": "布局",
    "type": "入门",
    "filename": "docs/layout.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。"
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
          "href": "#Ant-Design-Pro-的布局",
          "title": "Ant Design Pro 的布局"
        },
        "Ant Design Pro 的布局"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Ant-Design-布局组件",
          "title": "Ant Design 布局组件"
        },
        "Ant Design 布局组件"
      ]
    ]
  ]
};

/***/ })

});