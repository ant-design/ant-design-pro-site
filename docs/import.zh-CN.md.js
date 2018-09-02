webpackJsonp([67],{

/***/ 2458:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "引入依赖"
    ],
    [
      "p",
      "在终端输入下面的命令完成安装："
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">install</span> react-quill --save"
      },
      [
        "code",
        "$ npm install react-quill --save"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "加上 ",
        [
          "code",
          "--save"
        ],
        " 参数会自动添加依赖到 package.json 中去。"
      ]
    ],
    [
      "h2",
      "使用"
    ],
    [
      "p",
      "直接贴代码了："
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Button<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> ReactQuill <span class=\"token keyword\">from</span> <span class=\"token string\">'react-quill'</span><span class=\"token punctuation\">;</span> \n<span class=\"token keyword\">import</span> <span class=\"token string\">'react-quill/dist/quill.snow.css'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">class</span> <span class=\"token class-name\">NewPage</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'test'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  prompt <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    notification<span class=\"token punctuation\">.</span><span class=\"token function\">open</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">:</span> <span class=\"token string\">'We got value:'</span><span class=\"token punctuation\">,</span>\n      description<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">dangerouslySetInnerHTML</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> __html<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Card</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>富文本编辑器<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ReactQuill</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>prompt<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Prompt<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import React from 'react';\nimport { Button, notification, Card } from 'antd';\nimport ReactQuill from 'react-quill'; \nimport 'react-quill/dist/quill.snow.css';\n\nexport default class NewPage extends React.Component {\n  state = {\n    value: 'test',\n  };\n\n  handleChange = (value) => {\n    this.setState({\n      value,\n    })\n  };\n\n  prompt = () => {\n    notification.open({\n      message: 'We got value:',\n      description: <span dangerouslySetInnerHTML={{ __html: this.state.value }}></span>,\n    });\n  };\n\n  render() {\n    return (\n      <Card title=\"富文本编辑器\">\n        <ReactQuill value={this.state.value} onChange={this.handleChange} />\n        <Button style={{ marginTop: 16 }} onClick={this.prompt}>Prompt</Button>\n      </Card>\n    );\n  }\n}"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "富文本",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/rHQRmMxAbSOCsEFungwd.png"
        }
      ]
    ],
    [
      "p",
      "这样就成功引入了一个富文本组件。有几点值得注意："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "import 时需要注意组件暴露的数据结构；"
        ]
      ],
      [
        "li",
        [
          "p",
          "有一些组件需要额外引入样式，比如本例。"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 8,
    "title": "引入外部模块",
    "type": "入门",
    "filename": "docs/import.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "除了 antd 组件以及脚手架内置的业务组件，有时我们还需要引入其他外部模块，这里以引入富文本组件 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/react-quill"
        },
        "react-quill"
      ],
      " 为例进行介绍。"
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
          "href": "#引入依赖",
          "title": "引入依赖"
        },
        "引入依赖"
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