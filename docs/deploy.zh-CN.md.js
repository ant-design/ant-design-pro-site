webpackJsonp([81],{

/***/ 2453:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "构建"
    ],
    [
      "p",
      "当项目开发完毕，只需要运行一行命令就可以打包你的应用："
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run build"
      },
      [
        "code",
        "$ npm run build"
      ]
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://asciinema.org/a/198144"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://asciinema.org/a/198144.png",
            "alt": "asciicast"
          }
        ]
      ]
    ],
    [
      "p",
      "由于 Ant Design Pro 使用的工具 ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/"
        },
        "Umi"
      ],
      " 已经将复杂的流程封装完毕，构建打包文件只需要一个命令 ",
      [
        "code",
        "umi build"
      ],
      "，构建打包成功之后，会在根目录生成 ",
      [
        "code",
        "dist"
      ],
      " 文件夹，里面就是构建打包好的文件，通常是 ",
      [
        "code",
        "*.js"
      ],
      "、",
      [
        "code",
        "*.css"
      ],
      "、",
      [
        "code",
        "index.html"
      ],
      " 等静态文件。。"
    ],
    [
      "p",
      "如果需要自定义构建，比如指定 ",
      [
        "code",
        "dist"
      ],
      " 目录等，可以通过 ",
      [
        "code",
        "config/config.js"
      ],
      " 进行配置，详情参看：",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/config.html"
        },
        "Umi 配置"
      ],
      "。"
    ],
    [
      "h3",
      "分析构建文件体积"
    ],
    [
      "p",
      "如果你的构建文件很大，你可以通过 ",
      [
        "code",
        "analyze"
      ],
      " 命令构建并分析依赖模块的体积分布，从而优化你的代码。"
    ],
    [
      "pre",
      {
        "lang": "bash",
        "highlighted": "$ <span class=\"token function\">npm</span> run analyze"
      },
      [
        "code",
        "$ npm run analyze"
      ]
    ],
    [
      "p",
      "上面的命令会自动在浏览器打开显示体积分布数据的网页。"
    ],
    [
      "h2",
      "发布"
    ],
    [
      "p",
      "对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 ",
      [
        "code",
        "dist"
      ],
      " 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 ",
      [
        "code",
        "index.html"
      ],
      " 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。"
    ],
    [
      "h3",
      "前端路由与服务端的结合"
    ],
    [
      "p",
      "Ant Design Pro 使用的 Umi 支持两种路由方式：",
      [
        "code",
        "browserHistory"
      ],
      " 和 ",
      [
        "code",
        "hashHistory"
      ],
      "。"
    ],
    [
      "p",
      "可以在 ",
      [
        "code",
        "config/config.js"
      ],
      " 中进行配置选择用哪个方式："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  history<span class=\"token punctuation\">:</span> <span class=\"token string\">'hash'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 默认是 browser</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "export default {\n  history: 'hash', // 默认是 browser\n}"
      ]
    ],
    [
      "p",
      [
        "code",
        "hashHistory"
      ],
      " 使用如 ",
      [
        "code",
        "https://cdn.com/#/users/123"
      ],
      " 这样的 URL，取井号后面的字符作为路径。",
      [
        "code",
        "browserHistory"
      ],
      " 则直接使用 ",
      [
        "code",
        "https://cdn.com/users/123"
      ],
      " 这样的 URL。使用 ",
      [
        "code",
        "hashHistory"
      ],
      " 时浏览器访问到的始终都是根目录下 ",
      [
        "code",
        "index.html"
      ],
      "。使用 ",
      [
        "code",
        "browserHistory"
      ],
      " 则需要服务器做好处理 URL 的准备，处理应用启动最初的 ",
      [
        "code",
        "/"
      ],
      " 这样的请求应该没问题，但当用户来回跳转并在 ",
      [
        "code",
        "/users/123"
      ],
      " 刷新时，服务器就会收到来自 ",
      [
        "code",
        "/users/123"
      ],
      " 的请求，这时你需要配置服务器能处理这个 URL 返回正确的 ",
      [
        "code",
        "index.html"
      ],
      "。如果你能控制服务端，我们推荐使用 ",
      [
        "code",
        "browserHistory"
      ],
      "。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "http://expressjs.com/"
        },
        "express"
      ],
      " 的例子"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "app<span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>express<span class=\"token punctuation\">.</span><span class=\"token function\">static</span><span class=\"token punctuation\">(</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'build'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\napp<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/*'</span><span class=\"token punctuation\">,</span> function <span class=\"token punctuation\">(</span>req<span class=\"token punctuation\">,</span> res<span class=\"token punctuation\">)</span> {\n  res<span class=\"token punctuation\">.</span><span class=\"token function\">sendFile</span><span class=\"token punctuation\">(</span>path<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span>__dirname<span class=\"token punctuation\">,</span> <span class=\"token string\">'build'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'index.html'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
      },
      [
        "code",
        "app.use(express.static(path.join(__dirname, 'build')));\n\napp.get('/*', function (req, res) {\n  res.sendFile(path.join(__dirname, 'build', 'index.html'));\n});"
      ]
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://eggjs.org/"
        },
        "egg"
      ],
      " 的例子"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "<span class=\"token operator\">/</span><span class=\"token operator\">/</span> controller\nexports<span class=\"token punctuation\">.</span>index <span class=\"token operator\">=</span> function<span class=\"token operator\">*</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> {\n  yield this<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token string\">'App.jsx'</span><span class=\"token punctuation\">,</span> {\n    context<span class=\"token punctuation\">:</span> {\n      user<span class=\"token punctuation\">:</span> this<span class=\"token punctuation\">.</span>session<span class=\"token punctuation\">.</span>user<span class=\"token punctuation\">,</span>\n    }<span class=\"token punctuation\">,</span>\n  }<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n}<span class=\"token comment\" spellcheck=\"true\">;</span>\n\n<span class=\"token operator\">/</span><span class=\"token operator\">/</span> router\napp<span class=\"token punctuation\">.</span><span class=\"token function\">get</span><span class=\"token punctuation\">(</span><span class=\"token string\">'home'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'/*'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'home.index'</span><span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
      },
      [
        "code",
        "// controller\nexports.index = function* () {\n  yield this.render('App.jsx', {\n    context: {\n      user: this.session.user,\n    },\n  });\n};\n\n// router\napp.get('home', '/*', 'home.index');"
      ]
    ],
    [
      "p",
      "关于路由更多可以参看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/guide/router.html"
        },
        "Umi 的路由文档"
      ],
      " 。"
    ]
  ],
  "meta": {
    "order": 8,
    "title": "构建和发布",
    "type": "入门",
    "filename": "docs/deploy.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#构建",
          "title": "构建"
        },
        "构建"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#发布",
          "title": "发布"
        },
        "发布"
      ]
    ]
  ]
};

/***/ })

});