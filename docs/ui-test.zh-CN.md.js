webpackJsonp([47],{

/***/ 2470:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "UI 测试是项目研发流程中的重要一环，有效的测试用例可以梳理业务需求，保证研发的质量和进度，让工程师可以放心的重构代码和新增功能。"
    ],
    [
      "p",
      "Ant Design Pro 封装了一套简洁易用的 React 单元测试和 E2E 测试方案，在项目根目录运行以下命令就能运行测试用例。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run test:all  <span class=\"token comment\" spellcheck=\"true\"># 执行所有测试</span>"
      },
      [
        "code",
        "$ npm run test:all  # 执行所有测试"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "style": "box-shadow: none; margin: 0px;",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/EFKJzIswQgWNJzDQNpKr.png",
          "width": "700"
        }
      ]
    ],
    [
      "p",
      "下面简单介绍如何在项目中书写你的业务测试用例。"
    ],
    [
      "h2",
      "单元测试"
    ],
    [
      "p",
      "单元测试用于测试 React UI 组件的表现。我们参考了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests"
        },
        "create-react-app"
      ],
      "，使用 ",
      [
        "a",
        {
          "title": null,
          "href": "http://facebook.github.io/jest/"
        },
        "jest"
      ],
      " 作为测试框架。"
    ],
    [
      "p",
      "jest 是一个 node 端运行的测试框架，使用了 jsdom 来模拟 DOM 环境，适合用于快速测试 React 组件的逻辑表现，需要真实浏览器可以参考 E2E 测试部分。"
    ],
    [
      "h3",
      "写一个用例"
    ],
    [
      "p",
      "比如，我们可以建一个文件 ",
      [
        "code",
        "src/routes/Result/Success.test.js"
      ],
      " 来测试成功页面组件的 UI 表现。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> shallow <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'enzyme'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Success <span class=\"token keyword\">from</span> <span class=\"token string\">'./Success'</span><span class=\"token punctuation\">;</span>   <span class=\"token comment\" spellcheck=\"true\">// 引入对应的 React 组件</span>\n\n<span class=\"token function\">it</span><span class=\"token punctuation\">(</span><span class=\"token string\">'renders with Result'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> wrapper <span class=\"token operator\">=</span> <span class=\"token function\">shallow</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Success</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>                           <span class=\"token comment\" spellcheck=\"true\">// 进行渲染</span>\n  <span class=\"token function\">expect</span><span class=\"token punctuation\">(</span>wrapper<span class=\"token punctuation\">.</span><span class=\"token function\">find</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Result'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">toBe</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>                  <span class=\"token comment\" spellcheck=\"true\">// 有 Result 组件</span>\n  <span class=\"token function\">expect</span><span class=\"token punctuation\">(</span>wrapper<span class=\"token punctuation\">.</span><span class=\"token function\">find</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Result'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">prop</span><span class=\"token punctuation\">(</span><span class=\"token string\">'type'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">toBe</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>    <span class=\"token comment\" spellcheck=\"true\">// Result 组件的类型是成功</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import React from 'react';\nimport { shallow } from 'enzyme';\nimport Success from './Success';   // 引入对应的 React 组件\n\nit('renders with Result', () => {\n  const wrapper = shallow(<Success />);                           // 进行渲染\n  expect(wrapper.find('Result').length).toBe(1);                  // 有 Result 组件\n  expect(wrapper.find('Result').prop('type')).toBe('success');    // Result 组件的类型是成功\n});"
      ]
    ],
    [
      "p",
      "这里使用了 ",
      [
        "a",
        {
          "title": null,
          "href": "http://airbnb.io/enzyme/docs/api/index.html"
        },
        "enzyme"
      ],
      " 作为测试库，它提供了大量实用的 API 来帮助我们测试 React 组件。断言部分沿用了 jest 默认的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://facebook.github.io/jest/docs/en/expect.html#content"
        },
        "jasmine2 expect 语法"
      ],
      "。"
    ],
    [
      "h3",
      "本地执行"
    ],
    [
      "p",
      "使用以下的命令将统一搜索和执行 ",
      [
        "code",
        "src"
      ],
      " 下 ",
      [
        "code",
        "*.test.js"
      ],
      " 格式的用例文件。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">test</span> .test.js"
      },
      [
        "code",
        "$ npm test .test.js"
      ]
    ],
    [
      "h4",
      "执行单个或一组用例"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">test</span> src/routes/Result/Success.test.js  <span class=\"token comment\" spellcheck=\"true\"># 测试 Success.test.js</span>\n$ <span class=\"token function\">npm</span> <span class=\"token function\">test</span> src/routes                         <span class=\"token comment\" spellcheck=\"true\"># 测试 routes 下的所有用例文件</span>"
      },
      [
        "code",
        "$ npm test src/routes/Result/Success.test.js  # 测试 Success.test.js\n$ npm test src/routes                         # 测试 routes 下的所有用例文件"
      ]
    ],
    [
      "h3",
      "测试 dva 包装组件"
    ],
    [
      "p",
      "被 dva ",
      [
        "code",
        "connect"
      ],
      " 的 React 组件可以使用下面方式进行测试。"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> shallow <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'enzyme'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> Dashboard <span class=\"token keyword\">from</span> <span class=\"token string\">'./Dashboard'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">it</span><span class=\"token punctuation\">(</span><span class=\"token string\">'renders Dashboard'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 使用包装后的组件</span>\n  <span class=\"token keyword\">const</span> wrapper <span class=\"token operator\">=</span> <span class=\"token function\">shallow</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Dashboard.WrappedComponent</span> <span class=\"token attr-name\">user</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> list<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">expect</span><span class=\"token punctuation\">(</span>wrapper<span class=\"token punctuation\">.</span><span class=\"token function\">find</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Table'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">props</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">toEqual</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import React from 'react';\nimport { shallow } from 'enzyme';\nimport Dashboard from './Dashboard';\n\nit('renders Dashboard', () => {\n  // 使用包装后的组件\n  const wrapper = shallow(\n    <Dashboard.WrappedComponent user={{ list: [] }} />\n  );\n  expect(wrapper.find('Table').props().dataSource).toEqual([]);\n});"
      ]
    ],
    [
      "h2",
      "e2e 测试"
    ],
    [
      "p",
      "端到端测试也叫冒烟测试，用于测试真实浏览器环境下前端应用的流程和表现，相当于代替人工去操作应用。"
    ],
    [
      "p",
      "我们引入了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/googlechrome/puppeteer"
        },
        "puppeteer"
      ],
      " 作为 E2E 测试的工具，puppeteer 是 Google Chrome 团队官方的无界面（Headless）Chrome 工具。它默认使用 chrome / chromium 作为浏览器环境运行你的应用，并且提供了非常语义化的 API 来描述业务逻辑。"
    ],
    [
      "h3",
      "写一个 e2e 用例"
    ],
    [
      "p",
      "假设有一个需求，用户在登录页面输入错误的用户名和密码，点击登录后，出现错误提示框。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/oZeYewGOUJkmqXAPoOFC.gif",
          "width": "400"
        }
      ]
    ],
    [
      "p",
      "我们写一个用例来保障这个流程。在 ",
      [
        "code",
        "src/e2e/"
      ],
      " 目录下建一个 ",
      [
        "code",
        "Login.e2e.js"
      ],
      " 文件，按上述业务需求描述测试用例。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> puppeteer <span class=\"token keyword\">from</span> <span class=\"token string\">'puppeteer'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">describe</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Login'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">it</span><span class=\"token punctuation\">(</span><span class=\"token string\">'should login with failure'</span><span class=\"token punctuation\">,</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> browser <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> puppeteer<span class=\"token punctuation\">.</span><span class=\"token function\">launch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> page <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> browser<span class=\"token punctuation\">.</span><span class=\"token function\">newPage</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">await</span> page<span class=\"token punctuation\">.</span><span class=\"token function\">type</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#userName'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'mockuser'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">await</span> page<span class=\"token punctuation\">.</span><span class=\"token function\">type</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#password'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'wrong_password'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">await</span> page<span class=\"token punctuation\">.</span><span class=\"token function\">click</span><span class=\"token punctuation\">(</span><span class=\"token string\">'button[type=\"submit\"]'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">await</span> page<span class=\"token punctuation\">.</span><span class=\"token function\">waitForSelector</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.ant-alert-error'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// should display error</span>\n    <span class=\"token keyword\">await</span> page<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    browser<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import puppeteer from 'puppeteer';\n\ndescribe('Login', () => {\n  it('should login with failure', async () => {\n    const browser = await puppeteer.launch();\n    const page = await browser.newPage();\n    await page.type('#userName', 'mockuser');\n    await page.type('#password', 'wrong_password');\n    await page.click('button[type=\"submit\"]');\n    await page.waitForSelector('.ant-alert-error'); // should display error\n    await page.close();\n    browser.close();\n  });\n});"
      ]
    ],
    [
      "p",
      "更多 puppeteer 的方法可以参考 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md"
        },
        "puppeteer/docs/api.md"
      ],
      "。"
    ],
    [
      "h3",
      "运行用例"
    ],
    [
      "p",
      "运行下列命令将执行 src 下所有的 ",
      [
        "code",
        "*.e2e.js"
      ],
      " 用例文件。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> <span class=\"token function\">test</span> .e2e.js"
      },
      [
        "code",
        "$ npm test .e2e.js"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/LGCXopksUYMUhjRgdYSz.png",
          "width": "700"
        }
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "注意，本地测试 e2e 用例需要启动 ",
        [
          "code",
          "npm start"
        ],
        "，否则会报 ",
        [
          "code",
          "Failed: navigation error"
        ],
        " 的错误。"
      ]
    ],
    [
      "h2",
      "watch 模式"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "$ npm test <span class=\"token operator\">-</span><span class=\"token operator\">-</span> <span class=\"token operator\">-</span><span class=\"token operator\">-</span>watch"
      },
      [
        "code",
        "$ npm test -- --watch"
      ]
    ],
    [
      "p",
      "添加 ",
      [
        "code",
        "--watch"
      ],
      " 配置可以进入 watch 模式，当你修改和保存文件时，Jest 会自动执行相应用例。Jest 的命令行工具也提供了各种方便的快捷键来执行你需要的用例。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/MnmxiavystfcBDskyKRg.png",
          "width": "700"
        }
      ]
    ],
    [
      "h2",
      "测试覆盖率"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "$ npm test <span class=\"token operator\">-</span><span class=\"token operator\">-</span> <span class=\"token operator\">-</span><span class=\"token operator\">-</span>coverage"
      },
      [
        "code",
        "$ npm test -- --coverage"
      ]
    ],
    [
      "p",
      "添加 ",
      [
        "code",
        "--coverage"
      ],
      " 配置可以显示项目的测试覆盖率。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://camo.githubusercontent.com/bd0bbda8e44ea747e4c199d0e212d40563ad2fcb/687474703a2f2f692e696d6775722e636f6d2f356246686e54532e706e67",
          "width": "700"
        }
      ]
    ],
    [
      "h2",
      "聚焦和忽略用例"
    ],
    [
      "p",
      "使用 ",
      [
        "code",
        "xit()"
      ],
      " 取代 ",
      [
        "code",
        "it()"
      ],
      " 可以暂时忽略用例，",
      [
        "code",
        "fit()"
      ],
      " 可以聚焦当前用例并忽略其他所有用例。这两个方法可以帮助你在开发过程中只关注当前需要的用例。"
    ],
    [
      "h2",
      "接入集成测试服务"
    ],
    [
      "p",
      "如果需要接入 travis、CircleCI、Gitlab CI 等集成测试环境，可以参考本仓库提供的 ",
      [
        "code",
        ".travis.yml"
      ],
      "。"
    ],
    [
      "p",
      "注意 e2e 测试需要集成环境支持 electron，如果不支持，你可以使用 ",
      [
        "code",
        "npm test .test.js"
      ],
      " 单独运行单元测试。"
    ],
    [
      "h2",
      "参考链接"
    ],
    [
      "p",
      "更多测试技巧和功能请参考以下链接。"
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
              "href": "https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests"
            },
            "create-react-app tests"
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
              "href": "https://facebook.github.io/jest/"
            },
            "jest"
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
              "href": "http://airbnb.io/enzyme/"
            },
            "enzyme"
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
              "href": "https://github.com/googlechrome/puppeteer"
            },
            "puppeteer"
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
              "href": "https://facebook.github.io/jest/docs/en/puppeteer.html"
            },
            "Using with puppeteer"
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 15,
    "title": "UI 测试",
    "type": "进阶",
    "filename": "docs/ui-test.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#单元测试",
          "title": "单元测试"
        },
        "单元测试"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#e2e-测试",
          "title": "e2e 测试"
        },
        "e2e 测试"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#watch-模式",
          "title": "watch 模式"
        },
        "watch 模式"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#测试覆盖率",
          "title": "测试覆盖率"
        },
        "测试覆盖率"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#聚焦和忽略用例",
          "title": "聚焦和忽略用例"
        },
        "聚焦和忽略用例"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#接入集成测试服务",
          "title": "接入集成测试服务"
        },
        "接入集成测试服务"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#参考链接",
          "title": "参考链接"
        },
        "参考链接"
      ]
    ]
  ]
};

/***/ })

});