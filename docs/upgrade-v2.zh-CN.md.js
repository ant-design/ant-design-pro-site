webpackJsonp([45],{

/***/ 2472:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "在 Ant Design Pro 2.0 版本中除了很多功能性上的增强外，我们还将前端构建工具从 roadhog 升级到了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/"
        },
        "UmiJS"
      ],
      "（简称 umi）。之所以说是升级而不是替换，是因为 umi 不仅仅是前端构建工具，它还包含了路由以及一套插件机制用于构建一个完整的 React 应用。"
    ],
    [
      "p",
      "所以如果你想要更好的在原有的项目中去添加 Ant Design Pro 2.0 的功能，将 2.0 的代码移植到你的项目中，你最好将你的项目从 roadhog 迁移到 umi。这边文档会指引你完成迁移工作，在此之前你可能需要先阅读 umi 的",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/"
        },
        "文档"
      ],
      "，使得先对 umi 有一个初步的认识，这对你的迁移工作会很有帮助。下面是以后大概的步骤，再往后会有更具体的说明。"
    ],
    [
      "p",
      "注：该迁移指南是基于当前最新的 v1 版本编写的,迁移指南对应的修改你可以在升级示例的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/commit/dc2118db78f9b2b7072051fea558e8d1386ce34c"
        },
        "commit"
      ],
      " 中查看。该 commit 只作为参考，不能直接应用在你的项目中，如果你的版本过老可能会有一些细节不一样，请结合具体情况迁移"
    ],
    [
      "h2",
      "迁移步骤概览"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "把 ",
          [
            "code",
            "package.json"
          ],
          " roadhog 的依赖修改为 umi。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 ",
          [
            "code",
            ".webpackrc.js"
          ],
          " 中的配置到 ",
          [
            "code",
            "config/config.js"
          ],
          " 中。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 ",
          [
            "code",
            "src/ruotes"
          ],
          " 目录名称为 pages，pages 是 umi 约定的目录。"
        ]
      ],
      [
        "li",
        [
          "p",
          "删除 ",
          [
            "code",
            "src/models/index.js"
          ],
          "，在 umi 中 models 文件夹中的 dva model 会被自动挂载。"
        ]
      ],
      [
        "li",
        [
          "p",
          "重命名 ",
          [
            "code",
            "index.ejs"
          ],
          " 为 ",
          [
            "code",
            "pages/document.ejs"
          ],
          "，它是 umi 约定的文件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 ",
          [
            "code",
            "index.less"
          ],
          " 为 ",
          [
            "code",
            "global.less"
          ],
          " 和修改 ",
          [
            "code",
            "index.js"
          ],
          " 为 ",
          [
            "code",
            "global.js"
          ],
          "，他们也是 umi 约定的文件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "在 ",
          [
            "code",
            "config/config.js"
          ],
          " 中添加路由配置 routes。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 ",
          [
            "code",
            "src/layouts/BasicLayout.js"
          ],
          " 中的组件嵌套语法。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 404 页面。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改权限路由 AuthorizedRoute 的逻辑。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 mock。"
        ]
      ],
      [
        "li",
        [
          "p",
          "在 ",
          [
            "code",
            ".gitignore"
          ],
          " 中添加 umi 相关文件。"
        ]
      ],
      [
        "li",
        [
          "p",
          "通过执行 ",
          [
            "code",
            "tnpm start"
          ],
          " 和 ",
          [
            "code",
            "tnpm run lint"
          ],
          " 修改可能出现的问题。"
        ]
      ]
    ],
    [
      "h2",
      "迁移步骤细节"
    ],
    [
      "h3",
      "修改 roadhog 依赖为 umi"
    ],
    [
      "p",
      "打开项目根目录下的 ",
      [
        "code",
        "package.json"
      ],
      "，修改依赖为 umi："
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "\"dependencies\": {\n<span class=\"token deleted\">- \"dva\": \"^2.2.3\",</span>\n<span class=\"token deleted\">- \"dva-loading\": \"^2.0.3\",</span>\n<span class=\"token deleted\">- \"antd\": \"^3.8.0\",</span>\n<span class=\"token deleted\">- \"react\": \"^16.4.1\",</span>\n<span class=\"token deleted\">- \"react-dom\": \"^16.4.1\",</span>\n<span class=\"token deleted\">- \"react-loadable\": \"^5.5.0\",</span>\n<span class=\"token inserted\">+ \"umi-plugin-react\": \"^1.0.0-beta.21\"</span>\n},\n\"devDependencies\": {\n<span class=\"token inserted\">+ \"umi\": \"^2.0.0-beta.21\",</span>\n<span class=\"token deleted\">- \"roadhog\": \"^2.4.2\",</span>\n<span class=\"token deleted\">- \"roadhog-api-doc\": \"^1.1.2\",</span>\n}"
      },
      [
        "code",
        "\"dependencies\": {\n- \"dva\": \"^2.2.3\",\n- \"dva-loading\": \"^2.0.3\",\n- \"antd\": \"^3.8.0\",\n- \"react\": \"^16.4.1\",\n- \"react-dom\": \"^16.4.1\",\n- \"react-loadable\": \"^5.5.0\",\n+ \"umi-plugin-react\": \"^1.0.0-beta.21\"\n},\n\"devDependencies\": {\n+ \"umi\": \"^2.0.0-beta.21\",\n- \"roadhog\": \"^2.4.2\",\n- \"roadhog-api-doc\": \"^1.1.2\",\n}"
      ]
    ],
    [
      "p",
      "在 umi 中内置了 React，通过 umi-plugin-react 插件集内置了 antd 和 dva 等 React 技术栈常用的库。可以参考 ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/plugin/umi-plugin-react.html"
        },
        "umi-plugin-react 的文档"
      ],
      "。"
    ],
    [
      "p",
      "另外 ",
      [
        "code",
        "package.json"
      ],
      " 中的 scripts 也要做对应的修改："
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "<span class=\"token deleted\">- \"start\": \"cross-env ESLINT=none roadhog dev\",</span>\n<span class=\"token deleted\">- \"start:no-proxy\": \"cross-env NO_PROXY=true ESLINT=none roadhog dev\",\t    </span>\n<span class=\"token deleted\">- \"build\": \"cross-env ESLINT=none roadhog build\",</span>\n<span class=\"token inserted\">+ \"start\": \"umi dev\",</span>\n<span class=\"token inserted\">+ \"start:no-mock\": \"cross-env MOCK=none umi dev\",</span>\n<span class=\"token inserted\">+ \"build\": \"umi build\",</span>"
      },
      [
        "code",
        "- \"start\": \"cross-env ESLINT=none roadhog dev\",\n- \"start:no-proxy\": \"cross-env NO_PROXY=true ESLINT=none roadhog dev\",\t    \n- \"build\": \"cross-env ESLINT=none roadhog build\",\n+ \"start\": \"umi dev\",\n+ \"start:no-mock\": \"cross-env MOCK=none umi dev\",\n+ \"build\": \"umi build\","
      ]
    ],
    [
      "p",
      "修改完成之后记得不要忘记使用 ",
      [
        "code",
        "npm update"
      ],
      " 将依赖更新到最新。"
    ],
    [
      "h3",
      "添加配置文件 config/config.js"
    ],
    [
      "p",
      "umi 约定了 ",
      [
        "code",
        ".umirc.js"
      ],
      " 和 ",
      [
        "code",
        "config/config.js"
      ],
      " 为 umi 的配置文件（二选一），在 Ant Design Pro 中因为配置比较多，我们选择使用 ",
      [
        "code",
        "config/config.js"
      ],
      "。"
    ],
    [
      "p",
      "你需要在项目中创建 ",
      [
        "code",
        "config/config.js"
      ],
      "，该配置文件需要默认导出一个对象，里面包含了 umi 的全部配置。你可以先初始化为如下内容："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  plugins<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">[</span>\n    <span class=\"token string\">'umi-plugin-react'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      antd<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      dva<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        hmr<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  plugins: [[\n    'umi-plugin-react',\n    {\n      antd: true,\n      dva: {\n        hmr: true,\n      },\n    }\n  ]]\n};"
      ]
    ],
    [
      "p",
      "该配置会挂载 umi-plugin-react 插件集并打开 antd 和 dva 插件，使得你在项目中可以直接使用 antd 和 dva。"
    ],
    [
      "p",
      "添加 ",
      [
        "code",
        "config/config.js"
      ],
      " 之后你可以将你项目下的 ",
      [
        "code",
        ".webpackrc.js"
      ],
      " 中的配置也迁移到 ",
      [
        "code",
        "config/config.js"
      ],
      " 中。 ",
      [
        "code",
        ".webpackrc.js"
      ],
      " 是 af-webpack 的配置文件，umi 和 roadhog 都是依赖于它，所以你可以直接迁移过来。迁移过来之后就可以删除原有的 ",
      [
        "code",
        ".webpackrc.js"
      ],
      " 和 ",
      [
        "code",
        ".babelrc.js"
      ],
      " 文件了。"
    ],
    [
      "p",
      "不过需要注意的是 ",
      [
        "code",
        ".webpackrc.js"
      ],
      " 中的如下配置是没有必要复制到 ",
      [
        "code",
        "config/config.js"
      ],
      " 中的："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "entry: umi 会有默认的路由机制，需要删除该配置。"
        ]
      ],
      [
        "li",
        [
          "p",
          "extraBabelPlugins: umi-plugin-react 中会内置对 antd 的按需编译的支持，不再需要手动配置。"
        ]
      ],
      [
        "li",
        [
          "p",
          "env: env 下的 dva-hmr 插件不再需要，可以直接在 umi-plugin-react 配置中开启。"
        ]
      ],
      [
        "li",
        [
          "p",
          "alias: umi 中默认会添加 ",
          [
            "code",
            "@/"
          ],
          " 的别名到 src 目录。"
        ]
      ],
      [
        "li",
        [
          "p",
          "html: umi 默认使用 ",
          [
            "code",
            "src/pages/document.ejs"
          ],
          " 作为 html 模板。"
        ]
      ]
    ],
    [
      "p",
      "另外我们推荐将 ",
      [
        "code",
        "theme"
      ],
      " 配置直接写到 ",
      [
        "code",
        "config/config.js"
      ],
      " 中，然后就可以删除掉 ",
      [
        "code",
        "src/theme.js"
      ],
      " 了。"
    ],
    [
      "h3",
      "修改 ruotes 为 pages"
    ],
    [
      "p",
      "在 umi 中大量使用了约定和配置来高效的实现一些功能，其中 umi 就约定了 ",
      [
        "code",
        "src/pages"
      ],
      " 目录为页面组件的存放目录。在 Ant Design Pro 1.0 中，我们的页面都存放在 ",
      [
        "code",
        "src/routes"
      ],
      " 下面，所以我们只需要将 routes 重命名为 pages 即可。"
    ],
    [
      "h3",
      "删除 models/index.js"
    ],
    [
      "p",
      "在 umi 中，挂载了 dva 的插件之后 models 下的文件会被默认当做 dva model 引入，所以不再需要在 ",
      [
        "code",
        "models/index.js"
      ],
      " 中来手动挂载 model，可以直接删除该文件。"
    ],
    [
      "h3",
      "修改 index.ejs"
    ],
    [
      "p",
      "移动 ",
      [
        "code",
        "index.ejs"
      ],
      " 到 ",
      [
        "code",
        "pages/document.ejs"
      ],
      "，它是 umi 约定的文件。参考 ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/html-template.html"
        },
        "œumi HTML 模板\n文档"
      ],
      "。"
    ],
    [
      "h3",
      "修改 index.js 和 index.less"
    ],
    [
      "p",
      "重命名 ",
      [
        "code",
        "index.js"
      ],
      " 为 ",
      [
        "code",
        "global.js"
      ],
      "，重命名 ",
      [
        "code",
        "index.less"
      ],
      " 为 ",
      [
        "code",
        "global.less"
      ],
      "，他们会被 umi 自动挂载。可以参考 umi 的",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/app-structure.html"
        },
        "目录约定"
      ],
      "。另外因为 dva 插件会自动挂载 model 并默认添加 dva-loading 插件，所以 index.js 中的 dva 相关的内容可以被移除了。只需要保留类似下面这些初始化逻辑："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token string\">'./polyfill'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'moment/locale/zh-cn'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token string\">'./rollbar'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import './polyfill';\nimport 'moment/locale/zh-cn';\nimport './rollbar';"
      ]
    ],
    [
      "p",
      "另外 ",
      [
        "code",
        "global.less"
      ],
      " 中的 ",
      [
        "code",
        ":global"
      ],
      " 标志也可以移除了，因为 ",
      [
        "code",
        "global.less"
      ],
      " 中的样式默认就是全局的，这里要注意的是除了它其它都会默认使用 cssModule。"
    ],
    [
      "h3",
      "添加路由配置"
    ],
    [
      "p",
      "这一步是最重要的，umi 内置了路由的实现，提供了约定式和配置式两种路由方式。在 Ant Design Pro 中我们使用配置式路由的方式。你需要在 ",
      [
        "code",
        "config/config.js"
      ],
      " 中添加配置项 ",
      [
        "code",
        "routes"
      ],
      "，在这里我们基于 ",
      [
        "code",
        "/dashboard"
      ],
      " 页面提供了一个样例，你需要按照你的项目具体做下迁移。我们推荐添加一个 ",
      [
        "code",
        "config/router.config.js"
      ],
      " 的文件然后在 ",
      [
        "code",
        "config/config.js"
      ],
      " 中引入它："
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// config/router.config.js</span>\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/BasicLayout'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token comment\" spellcheck=\"true\">// dashboard</span>\n      <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span> redirect<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashboard'</span><span class=\"token punctuation\">,</span>\n        icon<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashboard'</span><span class=\"token punctuation\">,</span>\n        routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/analysis'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'analysis'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Analysis'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/monitor'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'monitor'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Monitor'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/dashboard/workplace'</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'workplace'</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">'./Dashboard/Workplace'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// config/router.config.js\nmodule.exports = [\n  {\n    path: '/',\n    component: '../layouts/BasicLayout',\n    routes: [\n      // dashboard\n      { path: '/', redirect: '/dashboard/analysis' },\n      {\n        path: '/dashboard',\n        name: 'dashboard',\n        icon: 'dashboard',\n        routes: [\n          { path: '/dashboard/analysis', name: 'analysis', component: './Dashboard/Analysis' },\n          { path: '/dashboard/monitor', name: 'monitor', component: './Dashboard/Monitor' },\n          { path: '/dashboard/workplace', name: 'workplace', component: './Dashboard/Workplace' },\n        ],\n      },\n    ],\n  },\n];"
      ]
    ],
    [
      "p",
      "其中 component 是一个字符串，是相对于 ",
      [
        "code",
        "src/pages"
      ],
      " 的路径，更多的路由配置你可以参考 v2 版本的路由配置，和 umi 的文档。另外原有的 1.0 版本的路由代码 ",
      [
        "code",
        "src/common/router.js"
      ],
      " 和 ",
      [
        "code",
        "src/router.js"
      ],
      " 也可以删除了。"
    ],
    [
      "h3",
      "修改布局组件"
    ],
    [
      "p",
      "因为不在使用 react-router@4 的组件式路由，所以你需要修改你的布局组件。把其中的 ",
      [
        "code",
        "<Switch/>"
      ],
      " 组件部分修改为 ",
      [
        "code",
        "{this.props.children}"
      ],
      "。"
    ],
    [
      "h3",
      "修改 404 页面"
    ],
    [
      "p",
      "在 umi 中默认使用 ",
      [
        "code",
        "src/pages/404.js"
      ],
      " 作为 404 页面，你需要将原来的 ",
      [
        "code",
        "src/routes/Exception/404.js"
      ],
      " 迁移过去。"
    ],
    [
      "h3",
      "修改权限路由"
    ],
    [
      "p",
      "在 2.0 中，你可以直接使用 umi 提供的",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html#%E6%9D%83%E9%99%90%E8%B7%AF%E7%94%B1"
        },
        "权限路由"
      ],
      "的方案。当然你也可以保留 1.0 中的方案继续使用。由于不是必要的，在本文中就不做具体说明了。"
    ],
    [
      "h3",
      "修改 mock 数据"
    ],
    [
      "p",
      "在 umi 中，默认会将 ",
      [
        "code",
        "mock/*.js"
      ],
      " 的文件作为 mock 文件。所以可以将 mock 数据的 URL 信息迁移到 mock 文件中后删除 ",
      [
        "code",
        ".roadhogrc.mock.js"
      ],
      " 文件，但是要注意的是直接写在 ",
      [
        "code",
        ".roadhogrc.mock.js"
      ],
      " 中的 mock 数据需要迁移出来，比如可以新建 ",
      [
        "code",
        "mock/common.js"
      ],
      " 来迁移这部分数据。"
    ],
    [
      "p",
      "更多说明可以参考 umi 的文档",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/mock-data.html"
        },
        "Mock 数据"
      ],
      "。"
    ],
    [
      "h3",
      "修改 .gitignore"
    ],
    [
      "p",
      "使用 umi 后你需要将 umi 在开发和构建中的临时文件添加到 ",
      [
        "code",
        ".gitignore"
      ],
      " 里面。"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token punctuation\">.</span>umi\n<span class=\"token punctuation\">.</span>umi<span class=\"token operator\">-</span>production"
      },
      [
        "code",
        ".umi\n.umi-production"
      ]
    ],
    [
      "h3",
      "修改代码别名等细节"
    ],
    [
      "p",
      "以上的操作完成之后你就可以运行 ",
      [
        "code",
        "npm start"
      ],
      " 启动你的项目了，你会看到报错，但是不要慌，按照报错信息一步一步修改即可。你可能需要修改的内容有："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "修改别名 ",
          [
            "code",
            "components/"
          ],
          " 为 ",
          [
            "code",
            "@/components"
          ],
          "。当然你也可以直接在 ",
          [
            "code",
            "config/config.js"
          ],
          " 保留原有的别名。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 ",
          [
            "code",
            "src/utils/request.js"
          ],
          " 中和 dva 相关的部分。可以直接使用 ",
          [
            "code",
            "umi/router"
          ],
          " 来做跳转。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "src/utils/request.js"
          ],
          " 的 ",
          [
            "code",
            "/exception/400"
          ],
          " 可以改为 ",
          [
            "code",
            "/400"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          "去掉 ",
          [
            "code",
            "BasicLayout"
          ],
          " 中的 ",
          [
            "code",
            "const baseRedirect = this.getBaseRedirect();"
          ],
          " 相关逻辑，跳转的逻辑可以通过 umi 的 routes 配置实现。"
        ]
      ],
      [
        "li",
        [
          "p",
          "修改 ",
          [
            "code",
            "BasicLayout"
          ],
          " 中的 ",
          [
            "code",
            "getPageTitle"
          ],
          " 和 ",
          [
            "code",
            "getBreadcrumbNameMap"
          ],
          " 的相关逻辑，参考下面的代码实现。完整代码参考 v1 升级 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design-pro/commit/dc2118db78f9b2b7072051fea558e8d1386ce34c"
            },
            "commit"
          ],
          "。"
        ]
      ]
    ],
    [
      "p",
      "注：",
      [
        "code",
        "memoizeOne"
      ],
      " 是 ",
      [
        "code",
        "memoize-one"
      ],
      " npm 包提供的方法，你需要先 install memoize-one。",
      [
        "code",
        "deepEqual"
      ],
      " 是 ",
      [
        "code",
        "lodash.isequal"
      ],
      " 包提供的，也需要安装相关依赖。"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">/**\n * 获取面包屑映射\n * @param {Object} menuData 菜单配置\n */</span>\n<span class=\"token keyword\">const</span> getBreadcrumbNameMap <span class=\"token operator\">=</span> <span class=\"token function\">memoizeOne</span><span class=\"token punctuation\">(</span>meun <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> routerMap <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> mergeMeunAndRouter <span class=\"token operator\">=</span> meunData <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    meunData<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span>meunItem <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>meunItem<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">mergeMeunAndRouter</span><span class=\"token punctuation\">(</span>meunItem<span class=\"token punctuation\">.</span>children<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Reduce memory usage</span>\n      routerMap<span class=\"token punctuation\">[</span>meunItem<span class=\"token punctuation\">.</span>path<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> meunItem<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token function\">mergeMeunAndRouter</span><span class=\"token punctuation\">(</span>meun<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> routerMap<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> deepEqual<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "/**\n * 获取面包屑映射\n * @param {Object} menuData 菜单配置\n */\nconst getBreadcrumbNameMap = memoizeOne(meun => {\n  const routerMap = {};\n  const mergeMeunAndRouter = meunData => {\n    meunData.forEach(meunItem => {\n      if (meunItem.children) {\n        mergeMeunAndRouter(meunItem.children);\n      }\n      // Reduce memory usage\n      routerMap[meunItem.path] = meunItem;\n    });\n  };\n  mergeMeunAndRouter(meun);\n  return routerMap;\n}, deepEqual);"
      ]
    ],
    [
      "p",
      "除了项目能够正常启动，你还应该再运行下 ",
      [
        "code",
        "tnpm run lint"
      ],
      " 来解决下部分在迁移过程中产生的比较低级的问题。你可能需要处理的问题和方案如下："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "no-unused-vars"
          ],
          " 错误，检查下没有问题就可以删除它了。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "react/destructuring-assignment"
          ],
          " 错误，你可能需要修改类似 ",
          [
            "code",
            "this.props.children"
          ],
          " 为 ",
          [
            "code",
            "const { children } = this.props"
          ],
          " 之类的错误。"
        ]
      ]
    ],
    [
      "p",
      "另外我们推荐你迁移到 2.0 推荐的 lint 规则，让你的代码更优雅。"
    ],
    [
      "h2",
      "使用 2.0 中的新功能"
    ],
    [
      "p",
      "完成 roadhog 到 umi 的迁移后要使用 2.0 的新功能就会变得简单。2.0 中我们主要有如下的新特性添加："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "新增用户信息页面。"
        ]
      ],
      [
        "li",
        [
          "p",
          "支持国际化。"
        ]
      ],
      [
        "li",
        [
          "p",
          "支持风格切换。"
        ]
      ]
    ],
    [
      "h3",
      "新增用户信息页面"
    ],
    [
      "p",
      "你只需要将 v2 ",
      [
        "code",
        "pages"
      ],
      " 目录下对应的代码 copy 到你的项目中并在 ",
      [
        "code",
        "config/config.js"
      ],
      " 中修改 routes 配置即可。这部分相对来说比较简单，这里不做过多说明。另外除了新增的用户信息页面外，你也可以参考其他页面的更新去跳转你自己项目中的代码。"
    ],
    [
      "h3",
      "支持国际化"
    ],
    [
      "p",
      "在 Ant Design Pro 2.0 中我们使用了 umi 的插件 ",
      [
        "code",
        "umi-plugin-locale"
      ],
      " 来实现国际化。该插件也已经内置到了 ",
      [
        "code",
        "umi-plugin-react"
      ],
      " 插件集中。你可以在该插件集的配置中添加 ",
      [
        "code",
        "locale"
      ],
      " 配置来开启国际化。"
    ],
    [
      "p",
      "开启国际化插件之后你就可以在项目目录下添加 ",
      [
        "code",
        "locales"
      ],
      " 文件夹，按照约定添加国际化资源文件后就可以通过在项目中使用 ",
      [
        "code",
        "umi/locale"
      ],
      " 暴露的 API 来实现国际化了。"
    ],
    [
      "p",
      "更多关于 ",
      [
        "code",
        "umi-plugin-locale"
      ],
      " 的配置可以插件它的",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/plugin/umi-plugin-react.html#locale"
        },
        "文档"
      ],
      "。"
    ],
    [
      "h3",
      "支持风格切换"
    ],
    [
      "p",
      "Ant Design Pro 使用了 less + cssModule 作为样式的解决方案，你可以通过配置 less 编译时的 lessVars 来就该主题样式配置，在 umi 中内置了该功能，你可以在配置文件中配置 ",
      [
        "code",
        "theme"
      ],
      " 来实现。参考 umi 的",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/config/#theme"
        },
        "配置文档"
      ],
      "。"
    ],
    [
      "p",
      "但是 v2 版本支持的导航布局方式等的调整主要是代码的业务逻辑的升级，你可以参考 v2 代码中的 ",
      [
        "code",
        "src/layouts/BasicLayout.js"
      ],
      " 的代码做调整。"
    ],
    [
      "p",
      "对于在线的主题切换，因为 less 是在构建时编译的，要想实现在切换，需要支持 less 在在线编译等问题。为了解决该问题，我们开发了 ",
      [
        "code",
        "ant-design-theme"
      ],
      " 的 webpack 插件和 ",
      [
        "code",
        "merge-less"
      ],
      " 插件一起实现了这样的功能。如果你有需要，你可以参考 v2 代码中的 ",
      [
        "code",
        "config/plugin.config.js"
      ],
      " 和 ",
      [
        "code",
        "src/models/setting.sj"
      ],
      " 来添加对应代码。"
    ],
    [
      "h3",
      "更多"
    ],
    [
      "p",
      "更多请查看 Ant Design Pro 2.0 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.yuque.com/ant-design/ant-design-pro/ant_design_pro_2.0_is_out"
        },
        "发布日志"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 24,
    "title": "升级到 2.0 版本",
    "type": "其他",
    "filename": "docs/upgrade-v2.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#迁移步骤概览",
          "title": "迁移步骤概览"
        },
        "迁移步骤概览"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#迁移步骤细节",
          "title": "迁移步骤细节"
        },
        "迁移步骤细节"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-2.0-中的新功能",
          "title": "使用 2.0 中的新功能"
        },
        "使用 2.0 中的新功能"
      ]
    ]
  ]
};

/***/ })

});