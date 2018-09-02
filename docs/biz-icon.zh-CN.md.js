webpackJsonp([85],{

/***/ 2440:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "一、生成图标库代码"
    ],
    [
      "p",
      "首先，搜索并找到你需要的图标，将它采集到你的购物车里，在购物车里，你可以将选中的图标添加到项目中（没有的话，新建一个），后续生成的资源/代码都是以项目为维度的。"
    ],
    [
      "blockquote",
      [
        "p",
        "如果你已经有了设计稿，只是需要生成相关代码，可以上传你的图标后，再进行上面的操作。"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "alt": "账户相关布局",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/jJQYzRyqVFBBamUOppXH.png"
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
      "来到刚才选中的项目页，点击『生成代码』的链接，会在下方生成不同引入方式的代码，下面会分别介绍。"
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "alt": "账户相关布局",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/DbDSgiRukSANKWyhULir.png"
        }
      ]
    ],
    [
      "h2",
      "二、引入"
    ],
    [
      "p",
      "有三种引入方式供你选择：SVG Symbol、Unicode 及 Font class。我们推荐在现代浏览器下使用 SVG Symbol 方式引入。"
    ],
    [
      "h3",
      "SVG Symbol"
    ],
    [
      "p",
      "SVG 符号引入是现代浏览器未来主流的图标引入方式。其方法是预先加载符号，在合适的地方引入并渲染为矢量图形。有如下特点："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "支持多色图标，不再受到单色图标的限制"
        ]
      ],
      [
        "li",
        [
          "p",
          "通过一些技巧，支持像字体那样，通过 ",
          [
            "code",
            "font-size"
          ],
          "、",
          [
            "code",
            "color"
          ],
          " 来调整样式"
        ]
      ],
      [
        "li",
        [
          "p",
          "支持IE 9+ 及现代浏览器"
        ]
      ]
    ],
    [
      "p",
      "一般使用步骤如下："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "切换到 Symbol 页签，复制项目生成的地址代码："
        ],
        [
          "pre",
          {
            "lang": null,
            "highlighted": "<span class=\"token operator\">/</span><span class=\"token operator\">/</span>at<span class=\"token punctuation\">.</span>alicdn<span class=\"token punctuation\">.</span>com<span class=\"token operator\">/</span>t<span class=\"token operator\">/</span>font_405362_lyhvoky9rc7ynwmi<span class=\"token punctuation\">.</span>js"
          },
          [
            "code",
            "//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "加入图标样式代码，如果没有特殊的要求，你可以直接复用 Ant Design 图标的样式"
        ],
        [
          "pre",
          {
            "lang": "css",
            "highlighted": "<span class=\"token selector\"><span class=\"token class\">.icon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>em<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>em<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">fill</span><span class=\"token punctuation\">:</span> currentColor<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">.125</span>em<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            ".icon {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n  vertical-align: -.125em;\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "挑选相应图标并获取类名，应用于页面"
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>svg</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">aria-hidden</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>true<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>use</span> <span class=\"token attr-name\"><span class=\"token namespace\">xlink:</span>href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#icon-ali-pay<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>use</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>svg</span><span class=\"token punctuation\">></span></span>"
          },
          [
            "code",
            "<svg class=\"icon\" aria-hidden=\"true\">\n    <use xlink:href=\"#icon-ali-pay\"></use>\n</svg>"
          ]
        ]
      ]
    ],
    [
      "p",
      "你也可以通过使用 Ant Design 图标组件提供的 ",
      [
        "code",
        "Icon.createFromIconfontCN({...})"
      ],
      " 方法来更加方便地使用图标，使用方式如下："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "配置项目地址，创建图标组件。",
          [
            "a",
            {
              "title": null,
              "href": "https://ant.design/components/icon/#API"
            },
            "详细用法"
          ]
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> IconFont<span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "import { Icon } from 'antd';\n\nconst IconFont = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js'\n});\n\nexport default IconFont;"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "之后可以像使用 ",
          [
            "code",
            "<Icon />"
          ],
          " 组件一样方便地使用，支持配置样式"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconFont</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-ali-pay<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'lightblue'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
          },
          [
            "code",
            "<IconFont type=\"icon-ali-pay\" style={{ fontSize: '16px', color: 'lightblue' }} />"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Unicode"
    ],
    [
      "p",
      "这是最原始的方式，需要三步来完成引入："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "拷贝项目生成的字体库代码，你可以新建一个样式文件来放置图标相关的样式。"
        ],
        [
          "pre",
          {
            "lang": "css",
            "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@font-face</span></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'iconfont'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">src</span><span class=\"token punctuation\">:</span> <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot')</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">src</span><span class=\"token punctuation\">:</span> <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'embedded-opentype'</span><span class=\"token punctuation\">)</span>,\n  <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'woff'</span><span class=\"token punctuation\">)</span>,\n  <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'truetype'</span><span class=\"token punctuation\">)</span>,\n  <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'svg'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "@font-face {\n  font-family: 'iconfont';\n  src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot');\n  src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix') format('embedded-opentype'),\n  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff') format('woff'),\n  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf') format('truetype'),\n  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont') format('svg');\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "加入图标样式代码，如果没有特殊的要求，你可以直接复用 Ant Design 图标的样式。"
        ],
        [
          "pre",
          {
            "lang": "css",
            "highlighted": "<span class=\"token selector\"><span class=\"token class\">.iconfont</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token selector\">display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  &amp;<span class=\"token pseudo-element\">:before</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> block<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"iconfont\"</span> <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">/* 注意与 font-face 中的匹配 */</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            ".iconfont {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  &:before {\n    display: block;\n    font-family: \"iconfont\" !important;  /* 注意与 font-face 中的匹配 */\n  }\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "在项目中鼠标移动到要用的图标上，点击『复制代码』，就得到了图标对应的字体编码，现在可以直接引入了："
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>i</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>iconfont<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token entity\" title=\"&#xe66b;\">&amp;#xe66b;</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>i</span><span class=\"token punctuation\">></span></span>"
          },
          [
            "code",
            "<i class=\"iconfont\">&#xe66b;</i>"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Font Class"
    ],
    [
      "p",
      "这种方式只是在上一种方式的基础上，给每个图标对应设置了一个语义化的类名，方便使用及后期维护。"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "切换到 Font class 页签，在页面头部引入下面生成的 css 代码："
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css"
          },
          [
            "code",
            "//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css"
          ]
        ],
        [
          "blockquote",
          [
            "p",
            "如果不喜欢标签引入的方式，也可以直接拷贝上面链接中的代码到你的样式文件中。如果不喜欢网站默认生成的类名，自己重写这部分代码即可，比如："
          ]
        ],
        [
          "pre",
          {
            "lang": "diff",
            "highlighted": "<span class=\"token deleted\">- .icon-ali-pay:before { content: \"\\e66b\"; }              // 修改前</span>\n<span class=\"token inserted\">+ .monitor-icon-alipay:before { content: \"\\e66b\"; }       // 修改后</span>"
          },
          [
            "code",
            "- .icon-ali-pay:before { content: \"\\e66b\"; }              // 修改前\n+ .monitor-icon-alipay:before { content: \"\\e66b\"; }       // 修改后"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "这时你可以选择拷贝图标对应代码（就是类名，如果类名被重写过，这里记得用修改后的），直接使用："
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>i</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>iconfont icon-ali-pay<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>i</span><span class=\"token punctuation\">></span></span>"
          },
          [
            "code",
            "<i class=\"iconfont icon-ali-pay\"></i>"
          ]
        ],
        [
          "p",
          "不过我们更推荐将它封装一下："
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> BizIcon <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> type <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>i className<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`iconfont icon-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>type<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> BizIcon<span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "import React from 'react';\n\nconst BizIcon = (props) => {\n  const { type } = props;\n  return <i className={`iconfont icon-${type}`} />;\n};\nexport default BizIcon;"
          ]
        ],
        [
          "p",
          "现在可以更加方便地使用："
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BizIcon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ali-pay<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
          },
          [
            "code",
            "<BizIcon type=\"ali-pay\" />"
          ]
        ]
      ]
    ],
    [
      "p",
      "Unicode 和 Font Class 本质上就是字体，你可以通过一些字体的样式属性去控制这种图标的展现，同时浏览器兼容性很好，但不支持多色图标。"
    ],
    [
      "blockquote",
      [
        "p",
        "相关内容可以参考："
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
                "href": "http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code"
              },
              "iconfont.cn 代码使用帮助"
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
                "href": "https://io-meter.com/2014/07/20/replace-icon-fonts-with-svg/"
              },
              "Web 设计新趋势: 使用 SVG 代替 Web Icon Font"
            ]
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 12,
    "title": "业务图标",
    "type": "进阶",
    "filename": "docs/biz-icon.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "通常情况下，你可以通过 Ant Design 提供的 ",
      [
        "code",
        "<Icon />"
      ],
      " 图标组件来使用 ",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/components/icon-cn/"
        },
        "Ant Design 官方图标"
      ],
      "。基本使用方式如下："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>heart<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'hotpink'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"heart\" style={{ fontSize: '16px', color: 'hotpink' }} />"
      ]
    ],
    [
      "p",
      "如果你没有在 Ant Design 官方图标中找到需要的图标，可以到 ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      " 上采集并生成自己的业务图标库，再进行使用。"
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
          "href": "#一、生成图标库代码",
          "title": "一、生成图标库代码"
        },
        "一、生成图标库代码"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#二、引入",
          "title": "二、引入"
        },
        "二、引入"
      ]
    ]
  ]
};

/***/ })

});