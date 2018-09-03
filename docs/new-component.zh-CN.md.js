webpackJsonp([61],{

/***/ 2456:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "p",
      "下面以一个简单的静态组件为例进行介绍。假设你的应用中经常需要展现图片，这些图片宽度固定，有一个灰色的背景和一定的内边距，有文字介绍，就像下图这样："
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png",
          "width": "400"
        }
      ]
    ],
    [
      "p",
      "你可以用一个组件来实现这一功能，它有默认的样式，同时可以接收父组件传递的参数进行展示。"
    ],
    [
      "h2",
      "新建文件"
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "src/components"
      ],
      " 下新建一个以组件名命名的文件夹，注意首字母大写，命名尽量体现组件的功能，这里就叫 ",
      [
        "code",
        "ImageWrapper"
      ],
      "。在此文件夹下新增 js 文件及样式文件（如果需要），命名为 ",
      [
        "code",
        "index.js"
      ],
      " 和 ",
      [
        "code",
        "index.less"
      ],
      "。"
    ],
    [
      "blockquote",
      [
        "p",
        "在使用组件时，默认会在 ",
        [
          "code",
          "index.js"
        ],
        " 中寻找 export 的对象，如果你的组件比较复杂，可以分为多个文件，最后在 ",
        [
          "code",
          "index.js"
        ],
        " 中统一 export，就像这样："
      ],
      [
        "pre",
        {
          "lang": "js",
          "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// MainComponent.js</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token operator\">...</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// SubComponent1.js</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token operator\">...</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// SubComponent2.js</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> <span class=\"token operator\">...</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token operator\">...</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// index.js</span>\n<span class=\"token keyword\">import</span> MainComponent <span class=\"token keyword\">from</span> <span class=\"token string\">'./MainComponent'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> SubComponent1 <span class=\"token keyword\">from</span> <span class=\"token string\">'./SubComponent1'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> SubComponent2 <span class=\"token keyword\">from</span> <span class=\"token string\">'./SubComponent2'</span><span class=\"token punctuation\">;</span>\n\nMainComponent<span class=\"token punctuation\">.</span>SubComponent1 <span class=\"token operator\">=</span> SubComponent1<span class=\"token punctuation\">;</span>\nMainComponent<span class=\"token punctuation\">.</span>SubComponent2 <span class=\"token operator\">=</span> SubComponent2<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> MainComponent<span class=\"token punctuation\">;</span>"
        },
        [
          "code",
          "// MainComponent.js\nexport default ({ ... }) => (...);\n\n// SubComponent1.js\nexport default ({ ... }) => (...);\n\n// SubComponent2.js\nexport default ({ ... }) => (...);\n\n// index.js\nimport MainComponent from './MainComponent';\nimport SubComponent1 from './SubComponent1';\nimport SubComponent2 from './SubComponent2';\n\nMainComponent.SubComponent1 = SubComponent1;\nMainComponent.SubComponent2 = SubComponent2;\nexport default MainComponent;"
        ]
      ]
    ],
    [
      "p",
      "你的代码大概是这个样子："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// index.js</span>\n<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> styles <span class=\"token keyword\">from</span> <span class=\"token string\">'./index.less'</span><span class=\"token punctuation\">;</span>    <span class=\"token comment\" spellcheck=\"true\">// 按照 CSS Modules 的方式引入样式文件。</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> src<span class=\"token punctuation\">,</span> desc<span class=\"token punctuation\">,</span> style <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>imageWrapper<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>img<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>src<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">alt</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>desc<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">{</span>desc <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>desc<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>desc<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// index.js\nimport React from 'react';\nimport styles from './index.less';    // 按照 CSS Modules 的方式引入样式文件。\n\nexport default ({ src, desc, style }) => (\n  <div style={style} className={styles.imageWrapper}>\n    <img className={styles.img} src={src} alt={desc} />\n    {desc && <div className={styles.desc}>{desc}</div>}\n  </div>\n);"
      ]
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\">// index<span class=\"token class\">.less</span>\n<span class=\"token class\">.imageWrapper</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">20</span>px <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#f2f4f5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">400</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.img</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> middle<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">max-width</span><span class=\"token punctuation\">:</span> <span class=\"token function\">calc</span><span class=\"token punctuation\">(</span><span class=\"token number\">100%</span> - <span class=\"token number\">32</span>px<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">2.4</span>em <span class=\"token number\">1</span>em<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">box-shadow</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px <span class=\"token number\">20</span>px <span class=\"token function\">rgba</span><span class=\"token punctuation\">(</span><span class=\"token number\">143</span>, <span class=\"token number\">168</span>, <span class=\"token number\">191</span>, <span class=\"token number\">0.35</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// index.less\n.imageWrapper {\n  padding: 0 20px 8px;\n  background: #f2f4f5;\n  width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.img {\n  vertical-align: middle;\n  max-width: calc(100% - 32px);\n  margin: 2.4em 1em;\n  box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);\n}"
      ]
    ],
    [
      "p",
      "到这儿组件就建好了。"
    ],
    [
      "h2",
      "使用"
    ],
    [
      "p",
      "在要使用这个组件的地方，按照组件定义的 API 传入参数，直接使用就好，不过别忘了先引入："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ImageWrapper <span class=\"token keyword\">from</span> <span class=\"token string\">'@/components/ImageWrapper'</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">// @ 表示相对于源文件根目录</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>ImageWrapper\n    src<span class=\"token operator\">=</span><span class=\"token string\">\"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png\"</span>\n    desc<span class=\"token operator\">=</span><span class=\"token string\">\"示意图\"</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import React from 'react';\nimport ImageWrapper from '@/components/ImageWrapper';  // @ 表示相对于源文件根目录\n\nexport default () => (\n  <ImageWrapper\n    src=\"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png\"\n    desc=\"示意图\"\n  />\n);"
      ]
    ]
  ],
  "meta": {
    "order": 5,
    "title": "新增业务组件",
    "type": "入门",
    "filename": "docs/new-component.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "对于一些可能被多处引用的功能模块，建议提炼成业务组件统一管理。这些组件一般有以下特征："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "只负责一块相对独立，稳定的功能；"
        ]
      ],
      [
        "li",
        [
          "p",
          "没有单独的路由配置；"
        ]
      ],
      [
        "li",
        [
          "p",
          "可能是纯静态的，也可能包含自己的 state，但不涉及 dva 的数据流，仅受父组件（通常是一个页面）传递的参数控制。"
        ]
      ]
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
          "href": "#新建文件",
          "title": "新建文件"
        },
        "新建文件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用",
          "title": "使用"
        },
        "使用"
      ]
    ]
  ]
};

/***/ })

});