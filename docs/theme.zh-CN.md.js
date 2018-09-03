webpackJsonp([49],{

/***/ 2468:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "我们基于 Ant Design 视觉风格搭建了 Ant Design Pro，这套风格经过设计师的精心调配，适合大多数中后台项目。如果对视觉风格有额外的要求，推荐使用以下的方式进行定制。"
    ],
    [
      "h2",
      "主题定制"
    ],
    [
      "p",
      "我们基于 Ant Design React 进行开发，完全支持官方提供的 less 变量定制功能. 你可以在脚手架目录中找到 ",
      [
        "code",
        "config/config.js"
      ],
      " 代码类似这样:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token operator\">...</span>\ntheme<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'font-size-base'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'14px'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'badge-font-size'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'12px'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'btn-font-size-lg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'@font-size-base'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'menu-dark-bg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#00182E'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'menu-dark-submenu-bg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#000B14'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'layout-sider-background'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#00182E'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'layout-body-background'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#f0f2f5'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>"
      },
      [
        "code",
        "...\ntheme: {\n  'font-size-base': '14px',\n  'badge-font-size': '12px',\n  'btn-font-size-lg': '@font-size-base',\n  'menu-dark-bg': '#00182E',\n  'menu-dark-submenu-bg': '#000B14',\n  'layout-sider-background': '#00182E',\n  'layout-body-background': '#f0f2f5',\n};\n..."
      ]
    ],
    [
      "p",
      "Find the variables that need to be modified in ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "All Variables Table"
      ],
      ", and start ",
      [
        "code",
        "npm start"
      ],
      " after modification. , you can see the effect in your app interface."
    ],
    [
      "p",
      "更多方式可以参考官方文档：",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/docs/react/customize-theme-cn"
        },
        "定制主题"
      ],
      "。"
    ],
    [
      "h2",
      "样式覆盖"
    ],
    [
      "p",
      "Ant Design 的通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/style"
        },
        "样式"
      ],
      " 章节来覆盖样式。"
    ],
    [
      "h3",
      "全局覆盖组件"
    ],
    [
      "p",
      "比如在 ",
      [
        "code",
        "src/global.less"
      ],
      " 里修改所有标签的字体大小。"
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// src/index.less</span>\n<span class=\"token selector\">:global</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token selector\">.ant-tag</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// src/index.less\n:global {\n  .ant-tag {\n    font-size: 12px;\n  }\n}"
      ]
    ],
    [
      "h3",
      "单独覆盖指定组件"
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// sample.less</span>\n<span class=\"token selector\">.customTag</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// sample.less\n.customTag {\n  font-size: 18px;\n}"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> styles <span class=\"token keyword\">from</span> <span class=\"token string\">'./sample.less'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">...</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>customTag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>定制标签<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import styles from './sample.less';\n\n...\n\nreturn <Tag className={styles.customTag}>定制标签</Tag>;"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "我们不推荐进行样式覆盖，一是默认主题和组件是经过了设计师精心调节，强行覆盖可能会影响整体效果；二是覆盖代码可能因为组件库版本升级而失效。"
      ]
    ],
    [
      "h2",
      "在线切换主题"
    ],
    [
      "p",
      "pro 中提供了一个可以在线切换主题和布局的 设置抽屉，使用这个抽屉可以很方便的查看更换主题的效果，无需重启脚手架。"
    ],
    [
      "p",
      "为了方便预览，设置中的配置项会被保存在地址栏中，你可以将其拷贝给他人，分享效果。"
    ],
    [
      "blockquote",
      [
        "p",
        "由于 react-router 的特性，地址栏的参数可能被清空。"
      ]
    ],
    [
      "p",
      "您一旦确定了这个配置，可以点击 拷贝代码 按钮将其拷贝，并在 ",
      [
        "code",
        "src/defaultSetting.js"
      ],
      " 中覆盖默认设置。这样您可以将该主题发布和部署。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/defaultSettings.js"
        },
        [
          "code",
          "src/defaultSetting.js"
        ]
      ],
      " 内容如下："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  navTheme<span class=\"token punctuation\">:</span> <span class=\"token string\">'dark'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 菜单的主题</span>\n  primaryColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#1890FF'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// Ant Design 的主色调</span>\n  layout<span class=\"token punctuation\">:</span> <span class=\"token string\">'sidemenu'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 菜单的布局，值为 sidemenu 菜单显示在左侧，值为 topmenu 菜单显示在顶部</span>\n  contentWidth<span class=\"token punctuation\">:</span> <span class=\"token string\">'Fluid'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 内容的布局 Fixed 为定宽到1200px ，Fluid 为流式布局。</span>\n  fixedHeader<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 固定页头</span>\n  autoHideHeader<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 下滑时自动隐藏页头</span>\n  fixSiderbar<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 固定菜单</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "module.exports = {\n  navTheme: 'dark', // 菜单的主题\n  primaryColor: '#1890FF', // Ant Design 的主色调\n  layout: 'sidemenu', // 菜单的布局，值为 sidemenu 菜单显示在左侧，值为 topmenu 菜单显示在顶部\n  contentWidth: 'Fluid', // 内容的布局 Fixed 为定宽到1200px ，Fluid 为流式布局。\n  fixedHeader: false, // 固定页头\n  autoHideHeader: false, // 下滑时自动隐藏页头\n  fixSiderbar: false, // 固定菜单\n};"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "在线修改颜色使用的是 less 在线编译，建议在 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/config.js"
          },
          [
            "code",
            "config/config.js"
          ]
        ],
        "  中配置，提升用户体验。在线编译 less 需要时间，并且会造成卡顿。"
      ]
    ]
  ],
  "meta": {
    "order": 14,
    "title": "更换主题",
    "type": "进阶",
    "filename": "docs/theme.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#主题定制",
          "title": "主题定制"
        },
        "主题定制"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#样式覆盖",
          "title": "样式覆盖"
        },
        "样式覆盖"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#在线切换主题",
          "title": "在线切换主题"
        },
        "在线切换主题"
      ]
    ]
  ]
};

/***/ })

});