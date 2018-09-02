webpackJsonp([71],{

/***/ 2463:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "Ant Design Pro 提供了由设计师精心设计抽象的图表类型，是在 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/alibaba/BizCharts"
        },
        "BizCharts"
      ],
      " 图表库基础上的二次封装，同时提供了业务中常用的图表套件，可以单独使用，也可以组合起来实现复杂的展示效果。"
    ],
    [
      "p",
      "目前一共包涵 10 个图表类型，以及 2 个图表套件："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "饼状图（Pie）"
        ]
      ],
      [
        "li",
        [
          "p",
          "柱状图（Bar）"
        ]
      ],
      [
        "li",
        [
          "p",
          "仪表盘（Gauge）"
        ]
      ],
      [
        "li",
        [
          "p",
          "雷达图（Radar）"
        ]
      ],
      [
        "li",
        [
          "p",
          "标签云（TagCloud）"
        ]
      ],
      [
        "li",
        [
          "p",
          "水波图（WaterWave）"
        ]
      ],
      [
        "li",
        [
          "p",
          "迷你柱状图（MiniBar）"
        ]
      ],
      [
        "li",
        [
          "p",
          "迷你区域图（MiniArea）"
        ]
      ],
      [
        "li",
        [
          "p",
          "迷你进度条（MiniProgress）"
        ]
      ],
      [
        "li",
        [
          "p",
          "带有时间轴的折线图（TimelineChart）"
        ]
      ],
      [
        "li",
        [
          "p",
          "图表卡片（ChartCard）"
        ]
      ],
      [
        "li",
        [
          "p",
          "图表字段（Field）"
        ]
      ]
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://pro.ant.design/components/Charts-cn/"
        },
        "查看图表组件"
      ]
    ],
    [
      "h2",
      "使用 Ant Design Pro 的图表"
    ],
    [
      "p",
      "Charts 图表套件是在 ",
      [
        "code",
        "components/Charts"
      ],
      " 包中，引用到项目就像使用其它组件一样："
    ],
    [
      "blockquote",
      [
        "p",
        "你也可以通过单独使用 pro 的包的方式使用图表组件：",
        [
          "a",
          {
            "title": null,
            "href": "https://pro.ant.design/docs/use-components-alone-cn"
          },
          "独立使用 Pro 组件"
        ]
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ChartCard<span class=\"token punctuation\">,</span> MiniBar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@/components/Charts'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> visitData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    x<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2017-09-01\"</span><span class=\"token punctuation\">,</span>\n    y<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    x<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2017-09-02\"</span><span class=\"token punctuation\">,</span>\n    y<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    x<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2017-09-03\"</span><span class=\"token punctuation\">,</span>\n    y<span class=\"token punctuation\">:</span> <span class=\"token number\">88</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    x<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2017-09-04\"</span><span class=\"token punctuation\">,</span>\n    y<span class=\"token punctuation\">:</span> <span class=\"token number\">65</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ChartCard</span>\n    <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>支付笔数<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">action</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>支付笔数反应交易质量<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>exclamation-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">total</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>6,500<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">contentHeight</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">46</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MiniBar</span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">46</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>visitData<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ChartCard</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { ChartCard, MiniBar } from '@/components/Charts';\nimport { Tooltip, Icon } from 'antd';\n\nconst visitData = [\n  {\n    x: \"2017-09-01\",\n    y: 100\n  },\n  {\n    x: \"2017-09-02\",\n    y: 120\n  },\n  {\n    x: \"2017-09-03\",\n    y: 88\n  },\n  {\n    x: \"2017-09-04\",\n    y: 65\n  }\n];\n\nReactDOM.render(\n  <ChartCard\n    title=\"支付笔数\"\n    action={\n      <Tooltip title=\"支付笔数反应交易质量\">\n        <Icon type=\"exclamation-circle-o\" />\n      </Tooltip>\n    }\n    total=\"6,500\"\n    contentHeight={46}\n  >\n    <MiniBar height={46} data={visitData} />\n  </ChartCard>,\n  mountNode\n);"
      ]
    ],
    [
      "p",
      "就可以实现一个最简单的图表组合："
    ],
    [
      "p",
      [
        "img",
        {
          "width": "260",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/yzmUFELvhCXXhsIRZOLT.png"
        }
      ]
    ],
    [
      "h2",
      "使用 BizCharts 绘制图表"
    ],
    [
      "p",
      "如果 Ant Design Pro 不能满足你的业务需求，可以直接使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/alibaba/BizCharts"
        },
        "BizCharts"
      ],
      " 封装自己的图表组件。"
    ],
    [
      "h3",
      "引入 BizCharts"
    ],
    [
      "p",
      "通过 npm 安装"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "npm install bizcharts <span class=\"token operator\">-</span><span class=\"token operator\">-</span>save"
      },
      [
        "code",
        "npm install bizcharts --save"
      ]
    ],
    [
      "p",
      "在项目中使用"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Chart<span class=\"token punctuation\">,</span> Axis<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Geom <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'bizcharts'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Chart</span> <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">400</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">data</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">forceFit</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Axis</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>month<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Axis</span> <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>temperature<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">label</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> formatter<span class=\"token punctuation\">:</span> val <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>val<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">°C`</span></span> <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">}</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">crosshairs</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> type <span class=\"token punctuation\">:</span> <span class=\"token string\">\"y\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Geom</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>line<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">position</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>month*temperature<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">color</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token string\">'city'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Geom</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">'</span>point<span class=\"token punctuation\">'</span></span> <span class=\"token attr-name\">position</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>month*temperature<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">size</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">color</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token string\">'city'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Chart</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "import { Chart, Axis, Tooltip, Geom } from 'bizcharts';\n\nconst data = [...];\n\n<Chart height={400} data={data} forceFit>\n  <Axis name=\"month\" />\n  <Axis name=\"temperature\" label={{ formatter: val => `${val}°C` }} />\n  <Tooltip crosshairs={{ type : \"y\" }} />\n  <Geom type=\"line\" position=\"month*temperature\" size={2} color={'city'} />\n  <Geom type='point' position=\"month*temperature\" size={4} color={'city'} />\n</Chart>"
      ]
    ],
    [
      "p",
      "参看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://alibaba.github.io/BizCharts/demo.html"
        },
        "更多 Demo"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 11,
    "title": "图表",
    "type": "进阶",
    "filename": "docs/graph.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-Ant-Design-Pro-的图表",
          "title": "使用 Ant Design Pro 的图表"
        },
        "使用 Ant Design Pro 的图表"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-BizCharts-绘制图表",
          "title": "使用 BizCharts 绘制图表"
        },
        "使用 BizCharts 绘制图表"
      ]
    ]
  ]
};

/***/ })

});