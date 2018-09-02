webpackJsonp([69],{

/***/ 2465:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h3",
      "开始使用"
    ],
    [
      "p",
      "pro 通过 umi 插件 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/umi-plugin-locale"
        },
        "umi-plugin-locale"
      ],
      " 来实现全球化的功能，并且默认开启。\n",
      [
        "code",
        "umi-plugin-locale"
      ],
      " 约定 在src/locales 中引入 相应的 js，例如 en-US.js 和 zh-CN.js，\n并且在 ",
      [
        "code",
        "config/config.js"
      ],
      " 中做如下配置："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "plugins<span class=\"token punctuation\">:</span><span class=\"token punctuation\">[</span>\n   <span class=\"token operator\">...</span><span class=\"token punctuation\">,</span>\n   locale<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        enable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n        <span class=\"token keyword\">default</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'zh-CN'</span><span class=\"token punctuation\">,</span> \n        baseNavigator<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> \n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">...</span><span class=\"token punctuation\">.</span>\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "plugins:[\n   ...,\n   locale: {\n        enable: true,\n        default: 'zh-CN', \n        baseNavigator: true, \n    },\n    ....\n]"
      ]
    ],
    [
      "p",
      "就可以在代码中使用全球化的功能了。详细配置参见",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/umi-plugin-locale#usage"
        },
        "config"
      ],
      "。"
    ],
    [
      "p",
      [
        "code",
        "umi-plugin-locale"
      ],
      " 封装了",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/yahoo/react-intl"
        },
        "react-intl"
      ],
      ", api 与 ",
      [
        "code",
        "react-intl"
      ],
      " 基本相同，并做了封装使用起来更加方便。全部 api 如下："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  formatMessage<span class=\"token punctuation\">,</span>\n  setLocale<span class=\"token punctuation\">,</span>\n  getLocale<span class=\"token punctuation\">,</span>\n  FormattedMessage<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/locale'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import {\n  formatMessage,\n  setLocale,\n  getLocale,\n  FormattedMessage,\n} from 'umi/locale';"
      ]
    ],
    [
      "h3",
      "格式化字符串"
    ],
    [
      "p",
      "如果我们在  ",
      [
        "code",
        "en-US.js"
      ],
      " 和 ",
      [
        "code",
        "zh-CN.js"
      ],
      " 中分别作了如下配置："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// en-US.js</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'navbar.lang'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'中文'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// zh-CN.js</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'navbar.lang'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'English'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// en-US.js\n\nexport default {\n  'navbar.lang': '中文',\n}\n\n// zh-CN.js\n\nexport default {\n  'navbar.lang': 'English',\n}"
      ]
    ],
    [
      "p",
      "我们就可以在组件中这样使用"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  FormattedMessage<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/locale'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token operator\">&lt;</span>FormattedMessage id<span class=\"token operator\">=</span><span class=\"token string\">\"navbar.lang\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import {\n  FormattedMessage,\n} from 'umi/locale';\n\nexport default () => {\n  return <div><FormattedMessage id=\"navbar.lang\" /></div>\n}"
      ]
    ],
    [
      "p",
      "在某些情况下，你可能需要直接返回 string。你可以这样使用："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>\n  formatMessage<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'umi/locale'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">{</span><span class=\"token function\">formatMessage</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>id<span class=\"token punctuation\">:</span><span class=\"token string\">'navbar.lang'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import {\n  formatMessage,\n} from 'umi/locale';\n\nexport default () => {\n  return <div>{formatMessage({id:'navbar.lang'})}</div>\n}"
      ]
    ],
    [
      "h3",
      "设置区域"
    ],
    [
      "p",
      [
        "code",
        "umi-plugin-locale"
      ],
      "  暴露了名为 ",
      [
        "code",
        "setLocale"
      ],
      " 和 ",
      [
        "code",
        "getLocale"
      ],
      " 的 api，通过这两个 api 可以方便的切换区域。\n代码看起来像这样的："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": " <span class=\"token operator\">...</span>\n changLang <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> locale <span class=\"token operator\">=</span> <span class=\"token function\">getLocale</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>locale <span class=\"token operator\">||</span> locale <span class=\"token operator\">===</span> <span class=\"token string\">'zh-CN'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'en-US'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setLocale</span><span class=\"token punctuation\">(</span><span class=\"token string\">'zh-CN'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">&lt;</span>Button\n          size<span class=\"token operator\">=</span><span class=\"token string\">\"small\"</span>\n          ghost<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>theme <span class=\"token operator\">===</span> <span class=\"token string\">'dark'</span><span class=\"token punctuation\">}</span>\n          style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n            margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'0 8px'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n          onClick<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">changLang</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token operator\">&lt;</span>FormattedMessage id<span class=\"token operator\">=</span><span class=\"token string\">\"navbar.lang\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        " ...\n changLang = () => {\n    const locale = getLocale();\n    if (!locale || locale === 'zh-CN') {\n      setLocale('en-US');\n    } else {\n      setLocale('zh-CN');\n    }\n  };\n  render(){\n        <Button\n          size=\"small\"\n          ghost={theme === 'dark'}\n          style={{\n            margin: '0 8px',\n          }}\n          onClick={() => {\n            this.changLang();\n          }}\n        >\n          <FormattedMessage id=\"navbar.lang\" />\n        </Button>\n  }"
      ]
    ],
    [
      "p",
      "更多高级的用法可以参照 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/yahoo/react-intl/wiki#getting-started"
        },
        "react-intl 的 api"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 13,
    "title": "国际化",
    "type": "进阶",
    "filename": "docs/i18n.zh-CN.md"
  },
  "toc": [
    "ul"
  ]
};

/***/ })

});