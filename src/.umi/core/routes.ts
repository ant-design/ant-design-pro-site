// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/tianba/Documents/code/openSource/ant-design-pro-site/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [require('/Users/tianba/Documents/code/openSource/ant-design-pro-site/node_modules/@umijs/preset-dumi/lib/theme/layout').default],
    "component": (props) => {
        const { default: getDemoRenderArgs } = require('/Users/tianba/Documents/code/openSource/ant-design-pro-site/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
        const { default: Previewer } = require('dumi-theme-default/src/builtins/Previewer.tsx');
        const { default: demos } = require('@@/dumi/demos');
        const { usePrefersColor } = require('dumi/theme');

        
      const renderArgs = getDemoRenderArgs(props, demos);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
        }
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [require('/Users/tianba/Documents/code/openSource/ant-design-pro-site/node_modules/@umijs/preset-dumi/lib/theme/layout').default, require('/Users/tianba/Documents/code/openSource/ant-design-pro-site/node_modules/dumi-theme-default/src/layout.tsx').default],
    "routes": [
      {
        "path": "/",
        "component": require('../../../README.md').default,
        "exact": true,
        "meta": {
          "locale": "zh-CN",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1620782846000,
          "componentName": "ant-design-pro-site",
          "slugs": [
            {
              "depth": 1,
              "value": "Ant Design Pro Site",
              "heading": "ant-design-pro-site"
            },
            {
              "depth": 3,
              "value": "Development",
              "heading": "development"
            },
            {
              "depth": 3,
              "value": "Deploy",
              "heading": "deploy"
            },
            {
              "depth": 3,
              "value": "Publish Components",
              "heading": "publish-components"
            }
          ],
          "title": "Ant Design Pro Site"
        },
        "title": "Ant Design Pro Site"
      },
      {
        "path": "/en-US/config/api",
        "component": require('../../../docs/config/api.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/api.en-US.md",
          "updatedTime": 1623142349828,
          "title": "API",
          "order": 2,
          "nav": {
            "title": "Config",
            "path": "/en-US/config"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "history",
              "heading": "history"
            },
            {
              "depth": 2,
              "value": "Link",
              "heading": "link"
            },
            {
              "depth": 3,
              "value": "NavLink",
              "heading": "navlink"
            },
            {
              "depth": 3,
              "value": "useHistory",
              "heading": "usehistory"
            },
            {
              "depth": 3,
              "value": "useLocation",
              "heading": "uselocation"
            },
            {
              "depth": 3,
              "value": "useParams",
              "heading": "useparams"
            },
            {
              "depth": 3,
              "value": "useRouteMatch",
              "heading": "useroutematch"
            }
          ],
          "locale": "en-US"
        },
        "title": "API"
      },
      {
        "path": "/config/api",
        "component": require('../../../docs/config/api.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/api.zh-CN.md",
          "updatedTime": 1623142349829,
          "title": "API",
          "order": 2,
          "nav": {
            "title": "配置",
            "path": "/config"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "history",
              "heading": "history"
            },
            {
              "depth": 2,
              "value": "Link",
              "heading": "link"
            },
            {
              "depth": 3,
              "value": "NavLink",
              "heading": "navlink"
            },
            {
              "depth": 3,
              "value": "useHistory",
              "heading": "usehistory"
            },
            {
              "depth": 3,
              "value": "useLocation",
              "heading": "uselocation"
            },
            {
              "depth": 3,
              "value": "useParams",
              "heading": "useparams"
            },
            {
              "depth": 3,
              "value": "useRouteMatch",
              "heading": "useroutematch"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "API"
      },
      {
        "path": "/en-US/config/config",
        "component": require('../../../docs/config/config.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/config.en-US.md",
          "updatedTime": 1623142349830,
          "title": "Config",
          "order": 1,
          "nav": {
            "title": "Config",
            "path": "/en-US/config"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "base",
              "heading": "base"
            },
            {
              "depth": 2,
              "value": "chainWebpack",
              "heading": "chainwebpack"
            },
            {
              "depth": 2,
              "value": "devServer",
              "heading": "devserver"
            },
            {
              "depth": 2,
              "value": "devtool",
              "heading": "devtool"
            },
            {
              "depth": 2,
              "value": "dynamicImport",
              "heading": "dynamicimport"
            },
            {
              "depth": 2,
              "value": "dynamicImportSyntax",
              "heading": "dynamicimportsyntax"
            },
            {
              "depth": 2,
              "value": "exportStatic",
              "heading": "exportstatic"
            },
            {
              "depth": 2,
              "value": "externals",
              "heading": "externals"
            },
            {
              "depth": 2,
              "value": "fastRefresh ",
              "heading": "fastrefresh"
            },
            {
              "depth": 2,
              "value": "hash",
              "heading": "hash"
            },
            {
              "depth": 2,
              "value": "headScripts",
              "heading": "headscripts"
            },
            {
              "depth": 2,
              "value": "history",
              "heading": "history"
            },
            {
              "depth": 2,
              "value": "links",
              "heading": "links"
            },
            {
              "depth": 2,
              "value": "outputPath",
              "heading": "outputpath"
            },
            {
              "depth": 2,
              "value": "proxy",
              "heading": "proxy"
            },
            {
              "depth": 2,
              "value": "publicPath",
              "heading": "publicpath"
            },
            {
              "depth": 2,
              "value": "routes",
              "heading": "routes"
            },
            {
              "depth": 2,
              "value": "runtimePublicPath",
              "heading": "runtimepublicpath"
            },
            {
              "depth": 2,
              "value": "targets",
              "heading": "targets"
            },
            {
              "depth": 2,
              "value": "theme",
              "heading": "theme"
            }
          ],
          "locale": "en-US"
        },
        "title": "Config"
      },
      {
        "path": "/config/config",
        "component": require('../../../docs/config/config.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/config.zh-CN.md",
          "updatedTime": 1623142349831,
          "title": "配置",
          "order": 1,
          "nav": {
            "title": "配置",
            "path": "/config"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "base",
              "heading": "base"
            },
            {
              "depth": 2,
              "value": "chainWebpack",
              "heading": "chainwebpack"
            },
            {
              "depth": 2,
              "value": "devServer",
              "heading": "devserver"
            },
            {
              "depth": 2,
              "value": "devtool",
              "heading": "devtool"
            },
            {
              "depth": 2,
              "value": "dynamicImport",
              "heading": "dynamicimport"
            },
            {
              "depth": 2,
              "value": "dynamicImportSyntax",
              "heading": "dynamicimportsyntax"
            },
            {
              "depth": 2,
              "value": "exportStatic",
              "heading": "exportstatic"
            },
            {
              "depth": 2,
              "value": "externals",
              "heading": "externals"
            },
            {
              "depth": 2,
              "value": "fastRefresh ",
              "heading": "fastrefresh"
            },
            {
              "depth": 2,
              "value": "hash",
              "heading": "hash"
            },
            {
              "depth": 2,
              "value": "headScripts",
              "heading": "headscripts"
            },
            {
              "depth": 2,
              "value": "history",
              "heading": "history"
            },
            {
              "depth": 2,
              "value": "links",
              "heading": "links"
            },
            {
              "depth": 2,
              "value": "outputPath",
              "heading": "outputpath"
            },
            {
              "depth": 2,
              "value": "proxy",
              "heading": "proxy"
            },
            {
              "depth": 2,
              "value": "publicPath",
              "heading": "publicpath"
            },
            {
              "depth": 2,
              "value": "routes",
              "heading": "routes"
            },
            {
              "depth": 2,
              "value": "runtimePublicPath",
              "heading": "runtimepublicpath"
            },
            {
              "depth": 2,
              "value": "targets",
              "heading": "targets"
            },
            {
              "depth": 2,
              "value": "theme",
              "heading": "theme"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "配置"
      },
      {
        "path": "/en-US/config/runtime-api",
        "component": require('../../../docs/config/runtime-api.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/runtime-api.en-US.md",
          "updatedTime": 1623142349831,
          "title": "Runtime Config",
          "order": 3,
          "nav": {
            "title": "Config",
            "path": "/en-US/config"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "getInitialState",
              "heading": "getinitialstate"
            },
            {
              "depth": 2,
              "value": "initialStateConfig",
              "heading": "initialstateconfig"
            },
            {
              "depth": 2,
              "value": "request",
              "heading": "request"
            },
            {
              "depth": 2,
              "value": "layout",
              "heading": "layout"
            }
          ],
          "locale": "en-US"
        },
        "title": "Runtime Config"
      },
      {
        "path": "/config/runtime-api",
        "component": require('../../../docs/config/runtime-api.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/config/runtime-api.zh-CN.md",
          "updatedTime": 1623142349832,
          "title": "运行时配置",
          "order": 3,
          "nav": {
            "title": "配置",
            "path": "/config"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "getInitialState",
              "heading": "getinitialstate"
            },
            {
              "depth": 2,
              "value": "initialStateConfig",
              "heading": "initialstateconfig"
            },
            {
              "depth": 2,
              "value": "request",
              "heading": "request"
            },
            {
              "depth": 2,
              "value": "layout",
              "heading": "layout"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "运行时配置"
      },
      {
        "path": "/en-US/docs/adding-images-fonts-and-files",
        "component": require('../../../docs/docs/adding-images-fonts-and-files.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/adding-images-fonts-and-files.en-US.md",
          "updatedTime": 1623144469824,
          "order": 44,
          "title": "Add pictures, fonts and files",
          "group": {
            "title": "styles and resources",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Add SVG",
              "heading": "add-svg"
            },
            {
              "depth": 3,
              "value": "TypesScript",
              "heading": "typesscript"
            }
          ],
          "locale": "en-US"
        },
        "title": "Add pictures, fonts and files"
      },
      {
        "path": "/docs/adding-images-fonts-and-files",
        "component": require('../../../docs/docs/adding-images-fonts-and-files.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/adding-images-fonts-and-files.zh-CN.md",
          "updatedTime": 1623144017563,
          "order": 24,
          "title": "添加图片，字体和文件",
          "group": {
            "title": "样式和资源",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "添加 SVG",
              "heading": "添加-svg"
            },
            {
              "depth": 3,
              "value": "TypesScript",
              "heading": "typesscript"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "添加图片，字体和文件"
      },
      {
        "path": "/en-US/docs/advanced-menu",
        "component": require('../../../docs/docs/advanced-menu.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/advanced-menu.en-US.md",
          "updatedTime": 1623144019151,
          "order": 22,
          "title": "Advanced menu",
          "group": {
            "title": "Advanced Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Request the menu from the server",
              "heading": "request-the-menu-from-the-server"
            },
            {
              "depth": 2,
              "value": "Custom highlight",
              "heading": "custom-highlight"
            },
            {
              "depth": 2,
              "value": "Change the layout according to the path",
              "heading": "change-the-layout-according-to-the-path"
            }
          ],
          "locale": "en-US"
        },
        "title": "Advanced menu"
      },
      {
        "path": "/docs/advanced-menu",
        "component": require('../../../docs/docs/advanced-menu.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/advanced-menu.zh-CN.md",
          "updatedTime": 1623142785447,
          "order": 90,
          "title": "菜单的高级用法",
          "group": {
            "title": "高级使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "从服务端请求菜单",
              "heading": "从服务端请求菜单"
            },
            {
              "depth": 2,
              "value": "自定义高亮",
              "heading": "自定义高亮"
            },
            {
              "depth": 2,
              "value": "根据路径更换布局",
              "heading": "根据路径更换布局"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "菜单的高级用法"
      },
      {
        "path": "/en-US/docs/assets",
        "component": require('../../../docs/docs/assets.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/assets.en-US.md",
          "updatedTime": 1623142785428,
          "order": 30,
          "title": "Use Pro's Assets",
          "group": {
            "title": "Advanced Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "What is a block",
              "heading": "what-is-a-block"
            },
            {
              "depth": 3,
              "value": "Using blocks",
              "heading": "using-blocks"
            },
            {
              "depth": 3,
              "value": "Blocks and templates",
              "heading": "blocks-and-templates"
            },
            {
              "depth": 3,
              "value": "Layout block",
              "heading": "layout-block"
            },
            {
              "depth": 2,
              "value": "more content",
              "heading": "more-content"
            }
          ],
          "locale": "en-US"
        },
        "title": "Use Pro's Assets"
      },
      {
        "path": "/docs/assets",
        "component": require('../../../docs/docs/assets.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/assets.zh-CN.md",
          "updatedTime": 1623142785446,
          "order": 91,
          "title": "Pro 资产的使用",
          "group": {
            "title": "高级使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "什么是区块",
              "heading": "什么是区块"
            },
            {
              "depth": 3,
              "value": "使用区块",
              "heading": "使用区块"
            },
            {
              "depth": 3,
              "value": "区块和模板",
              "heading": "区块和模板"
            },
            {
              "depth": 3,
              "value": "布局区块",
              "heading": "布局区块"
            },
            {
              "depth": 2,
              "value": "更多内容",
              "heading": "更多内容"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Pro 资产的使用"
      },
      {
        "path": "/en-US/docs/authority-management",
        "component": require('../../../docs/docs/authority-management.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/authority-management.en-US.md",
          "updatedTime": 1623143399176,
          "order": 30,
          "title": "Permission Management",
          "group": {
            "title": "Data Management",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "1. Introduction",
              "heading": "1-introduction"
            },
            {
              "depth": 2,
              "value": "2. Usage",
              "heading": "2-usage"
            },
            {
              "depth": 3,
              "value": "Initialization",
              "heading": "initialization"
            },
            {
              "depth": 3,
              "value": "Permission control in Component",
              "heading": "permission-control-in-component"
            },
            {
              "depth": 2,
              "value": "3. Permission control for routing and menus",
              "heading": "3-permission-control-for-routing-and-menus"
            }
          ],
          "locale": "en-US"
        },
        "title": "Permission Management"
      },
      {
        "path": "/docs/authority-management",
        "component": require('../../../docs/docs/authority-management.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/authority-management.zh-CN.md",
          "updatedTime": 1623143424247,
          "order": 30,
          "title": "权限管理",
          "group": {
            "title": "数据管理",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "一、简介",
              "heading": "一、简介"
            },
            {
              "depth": 2,
              "value": "二、如何使用",
              "heading": "二、如何使用"
            },
            {
              "depth": 3,
              "value": "初始化",
              "heading": "初始化"
            },
            {
              "depth": 3,
              "value": "页面内的权限控制",
              "heading": "页面内的权限控制"
            },
            {
              "depth": 2,
              "value": "三、路由和菜单的权限控制",
              "heading": "三、路由和菜单的权限控制"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "权限管理"
      },
      {
        "path": "/en-US/docs/build",
        "component": require('../../../docs/docs/build.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/build.en-US.md",
          "updatedTime": 1623142785409,
          "order": 31,
          "title": "Build",
          "group": {
            "title": "Build & Deployment",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Build",
              "heading": "build"
            },
            {
              "depth": 3,
              "value": "Analyze build result",
              "heading": "analyze-build-result"
            },
            {
              "depth": 3,
              "value": "Server-side rendering (SSR)",
              "heading": "server-side-rendering-ssr"
            }
          ],
          "locale": "en-US"
        },
        "title": "Build"
      },
      {
        "path": "/docs/build",
        "component": require('../../../docs/docs/build.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/build.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 31,
          "title": "构建",
          "group": {
            "title": "构建和部署",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "构建",
              "heading": "构建"
            },
            {
              "depth": 3,
              "value": "分析构建文件体积",
              "heading": "分析构建文件体积"
            },
            {
              "depth": 3,
              "value": "服务端渲染（SSR）",
              "heading": "服务端渲染（ssr）"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "构建"
      },
      {
        "path": "/en-US/docs/css-modules",
        "component": require('../../../docs/docs/css-modules.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/css-modules.en-US.md",
          "updatedTime": 1623143431986,
          "order": 22,
          "title": "CSS Modules",
          "group": {
            "title": "styles and resources",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "CSS Modules",
              "heading": "css-modules"
            }
          ],
          "locale": "en-US"
        },
        "title": "CSS Modules"
      },
      {
        "path": "/docs/css-modules",
        "component": require('../../../docs/docs/css-modules.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/css-modules.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 22,
          "title": "CSS Modules",
          "group": {
            "title": "样式和资源",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "CSS Modules"
      },
      {
        "path": "/en-US/docs/css",
        "component": require('../../../docs/docs/css.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/css.en-US.md",
          "updatedTime": 1623142785409,
          "order": 20,
          "title": "Using css",
          "group": {
            "title": "styles and resources",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [],
          "locale": "en-US"
        },
        "title": "Using css"
      },
      {
        "path": "/docs/css",
        "component": require('../../../docs/docs/css.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/css.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 20,
          "title": "使用 css",
          "group": {
            "title": "样式和资源",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "使用 css"
      },
      {
        "path": "/en-US/docs/debug",
        "component": require('../../../docs/docs/debug.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/debug.en-US.md",
          "updatedTime": 1623142785391,
          "order": 34,
          "title": "Debug",
          "group": {
            "title": "Network Request",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Element panel",
              "heading": "element-panel"
            },
            {
              "depth": 3,
              "value": "Console panel",
              "heading": "console-panel"
            },
            {
              "depth": 3,
              "value": "Web requests",
              "heading": "web-requests"
            },
            {
              "depth": 2,
              "value": "SourceMap",
              "heading": "sourcemap"
            },
            {
              "depth": 2,
              "value": "Bug debugging method",
              "heading": "bug-debugging-method"
            },
            {
              "depth": 3,
              "value": "The dicot positioning",
              "heading": "the-dicot-positioning"
            },
            {
              "depth": 3,
              "value": "The duckling method",
              "heading": "the-duckling-method"
            },
            {
              "depth": 3,
              "value": "Rewrite it again",
              "heading": "rewrite-it-again"
            }
          ],
          "locale": "en-US"
        },
        "title": "Debug"
      },
      {
        "path": "/docs/debug",
        "component": require('../../../docs/docs/debug.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/debug.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 34,
          "title": "调试",
          "group": {
            "title": "后端集成",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "元素面板",
              "heading": "元素面板"
            },
            {
              "depth": 3,
              "value": "控制台面板",
              "heading": "控制台面板"
            },
            {
              "depth": 3,
              "value": "网络面板",
              "heading": "网络面板"
            },
            {
              "depth": 2,
              "value": "SourceMap",
              "heading": "sourcemap"
            },
            {
              "depth": 2,
              "value": "bug 调试方法",
              "heading": "bug-调试方法"
            },
            {
              "depth": 3,
              "value": "二分法定位",
              "heading": "二分法定位"
            },
            {
              "depth": 3,
              "value": "小黄鸭法",
              "heading": "小黄鸭法"
            },
            {
              "depth": 3,
              "value": "重写一遍",
              "heading": "重写一遍"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "调试"
      },
      {
        "path": "/en-US/docs/deploy",
        "component": require('../../../docs/docs/deploy.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/deploy.en-US.md",
          "updatedTime": 1623142785409,
          "order": 32,
          "title": "Deployment",
          "group": {
            "title": "Build & Deployment",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Release",
              "heading": "release"
            },
            {
              "depth": 3,
              "value": "Routing and server integration",
              "heading": "routing-and-server-integration"
            },
            {
              "depth": 2,
              "value": "Deploy to a non-root directory",
              "heading": "deploy-to-a-non-root-directory"
            },
            {
              "depth": 2,
              "value": "Deploy to different platforms",
              "heading": "deploy-to-different-platforms"
            },
            {
              "depth": 3,
              "value": "use nginx",
              "heading": "use-nginx"
            },
            {
              "depth": 3,
              "value": "use Spring Boot",
              "heading": "use-spring-boot"
            },
            {
              "depth": 3,
              "value": "use express",
              "heading": "use-express"
            },
            {
              "depth": 3,
              "value": "use egg",
              "heading": "use-egg"
            }
          ],
          "locale": "en-US"
        },
        "title": "Deployment"
      },
      {
        "path": "/docs/deploy",
        "component": require('../../../docs/docs/deploy.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/deploy.zh-CN.md",
          "updatedTime": 1623142785429,
          "order": 32,
          "title": "部署",
          "group": {
            "title": "构建和部署",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "部署",
              "heading": "部署"
            },
            {
              "depth": 2,
              "value": "前端路由与服务端的结合",
              "heading": "前端路由与服务端的结合"
            },
            {
              "depth": 2,
              "value": "部署到非根目录",
              "heading": "部署到非根目录"
            },
            {
              "depth": 2,
              "value": "部署到不同的平台",
              "heading": "部署到不同的平台"
            },
            {
              "depth": 3,
              "value": "使用 nginx",
              "heading": "使用-nginx"
            },
            {
              "depth": 3,
              "value": "使用 spring boot",
              "heading": "使用-spring-boot"
            },
            {
              "depth": 3,
              "value": "使用 express",
              "heading": "使用-express"
            },
            {
              "depth": 3,
              "value": "使用 egg",
              "heading": "使用-egg"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "部署"
      },
      {
        "path": "/en-US/docs/development",
        "component": require('../../../docs/docs/development.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/development.en-US.md",
          "updatedTime": 1623142785447,
          "order": 11,
          "title": "Start Project",
          "group": {
            "title": "Basic Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "start your build",
              "heading": "start-your-build"
            },
            {
              "depth": 2,
              "value": "Differentiate environment",
              "heading": "differentiate-environment"
            },
            {
              "depth": 2,
              "value": "MOCK",
              "heading": "mock"
            }
          ],
          "locale": "en-US"
        },
        "title": "Start Project"
      },
      {
        "path": "/docs/development",
        "component": require('../../../docs/docs/development.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/development.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 10,
          "title": "启动项目",
          "group": {
            "title": "基础使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "启动项目",
              "heading": "启动项目"
            },
            {
              "depth": 2,
              "value": "区分环境",
              "heading": "区分环境"
            },
            {
              "depth": 2,
              "value": "MOCK",
              "heading": "mock"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "启动项目"
      },
      {
        "path": "/en-US/docs/environment-manage",
        "component": require('../../../docs/docs/environment-manage.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/environment-manage.en-US.md",
          "updatedTime": 1623142785447,
          "order": 11,
          "title": "environment variable",
          "group": {
            "title": "Advanced Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Environment variables",
              "heading": "environment-variables"
            },
            {
              "depth": 3,
              "value": "Default environment variables",
              "heading": "default-environment-variables"
            },
            {
              "depth": 3,
              "value": "Set environment variables",
              "heading": "set-environment-variables"
            },
            {
              "depth": 2,
              "value": "Multi-operation environment management",
              "heading": "multi-operation-environment-management"
            },
            {
              "depth": 3,
              "value": "Get the name of the current running environment",
              "heading": "get-the-name-of-the-current-running-environment"
            },
            {
              "depth": 3,
              "value": "Multiple environments and multiple configuration files",
              "heading": "multiple-environments-and-multiple-configuration-files"
            },
            {
              "depth": 2,
              "value": "How to deal with errors",
              "heading": "how-to-deal-with-errors"
            },
            {
              "depth": 2,
              "value": "The principle of variable use",
              "heading": "the-principle-of-variable-use"
            }
          ],
          "locale": "en-US"
        },
        "title": "environment variable"
      },
      {
        "path": "/docs/environment-manage",
        "component": require('../../../docs/docs/environment-manage.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/environment-manage.zh-CN.md",
          "updatedTime": 1623142785429,
          "order": 92,
          "title": "环境变量",
          "group": {
            "title": "高级使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "环境变量",
              "heading": "环境变量"
            },
            {
              "depth": 3,
              "value": "默认环境变量",
              "heading": "默认环境变量"
            },
            {
              "depth": 3,
              "value": "设置环境变量",
              "heading": "设置环境变量"
            },
            {
              "depth": 2,
              "value": "多运行环境管理",
              "heading": "多运行环境管理"
            },
            {
              "depth": 3,
              "value": "获取当前运行环境名称",
              "heading": "获取当前运行环境名称"
            },
            {
              "depth": 3,
              "value": "多环境多份配置文件",
              "heading": "多环境多份配置文件"
            },
            {
              "depth": 2,
              "value": "报错的处理方式",
              "heading": "报错的处理方式"
            },
            {
              "depth": 2,
              "value": "变量使用的原理",
              "heading": "变量使用的原理"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "环境变量"
      },
      {
        "path": "/en-US/docs/faq",
        "component": require('../../../docs/docs/faq.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/faq.en-US.md",
          "updatedTime": 1623142785446,
          "order": 91,
          "title": "FAQ",
          "group": {
            "title": "Other",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "What is the difference between Ant Design React and Ant Design Pro?",
              "heading": "what-is-the-difference-between-ant-design-react-and-ant-design-pro"
            },
            {
              "depth": 3,
              "value": "How do I use Ant Design Pro?",
              "heading": "how-do-i-use-ant-design-pro"
            },
            {
              "depth": 3,
              "value": "Can I use Ant Design Pro in a production environment?",
              "heading": "can-i-use-ant-design-pro-in-a-production-environment"
            },
            {
              "depth": 3,
              "value": "How do I update Ant Design Pro?",
              "heading": "how-do-i-update-ant-design-pro"
            },
            {
              "depth": 3,
              "value": "How do I request a menu from the server?",
              "heading": "how-do-i-request-a-menu-from-the-server"
            },
            {
              "depth": 3,
              "value": "How to use Conventional Routing?",
              "heading": "how-to-use-conventional-routing"
            },
            {
              "depth": 3,
              "value": "How to use mock data after build？",
              "heading": "how-to-use-mock-data-after-build？"
            },
            {
              "depth": 3,
              "value": "How to close page permission control",
              "heading": "how-to-close-page-permission-control"
            },
            {
              "depth": 3,
              "value": "How do I modify the default webpack configuration?",
              "heading": "how-do-i-modify-the-default-webpack-configuration"
            },
            {
              "depth": 3,
              "value": "How do I add babel plugins?",
              "heading": "how-do-i-add-babel-plugins"
            },
            {
              "depth": 3,
              "value": "How do I use static resources such as pictures?",
              "heading": "how-do-i-use-static-resources-such-as-pictures"
            },
            {
              "depth": 3,
              "value": "Why is there a # character in my url? How do I get rid of?",
              "heading": "why-is-there-a--character-in-my-url-how-do-i-get-rid-of"
            },
            {
              "depth": 3,
              "value": "How do I proxy the server url?",
              "heading": "how-do-i-proxy-the-server-url"
            },
            {
              "depth": 3,
              "value": "How do I add scss support?",
              "heading": "how-do-i-add-scss-support"
            },
            {
              "depth": 3,
              "value": "I'm getting a git commit error. How do I fix it?",
              "heading": "im-getting-a-git-commit-error-how-do-i-fix-it"
            },
            {
              "depth": 3,
              "value": "How do I stop the browser from opening automatically on npm start?",
              "heading": "how-do-i-stop-the-browser-from-opening-automatically-on-npm-start"
            },
            {
              "depth": 3,
              "value": "Does Ant Design Pro support internationalization?",
              "heading": "does-ant-design-pro-support-internationalization"
            },
            {
              "depth": 3,
              "value": "Npm installation of puppeteer is failing",
              "heading": "npm-installation-of-puppeteer-is-failing"
            },
            {
              "depth": 3,
              "value": "Is english documentation available?",
              "heading": "is-english-documentation-available"
            },
            {
              "depth": 3,
              "value": "After Ant Design Pro upgrades from 1.X to 2.X and after version, page layout components (such as BasicLayout) are reloaded when the page is redirected (redirect)",
              "heading": "after-ant-design-pro-upgrades-from-1x-to-2x-and-after-version-page-layout-components-such-as-basiclayout-are-reloaded-when-the-page-is-redirected-redirect"
            },
            {
              "depth": 3,
              "value": "Some component languages cannot be switched when switching languages",
              "heading": "some-component-languages-cannot-be-switched-when-switching-languages"
            }
          ],
          "locale": "en-US"
        },
        "title": "FAQ"
      },
      {
        "path": "/docs/faq",
        "component": require('../../../docs/docs/faq.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/faq.zh-CN.md",
          "updatedTime": 1623142785428,
          "order": 91,
          "title": "常见问题",
          "group": {
            "title": "其它",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Ant Design React 和 Ant Design Pro 有什么区别？",
              "heading": "ant-design-react-和-ant-design-pro-有什么区别？"
            },
            {
              "depth": 3,
              "value": "如何使用 Ant Design Pro？",
              "heading": "如何使用-ant-design-pro？"
            },
            {
              "depth": 3,
              "value": "是否可以在生产环境中使用 Ant Design Pro？",
              "heading": "是否可以在生产环境中使用-ant-design-pro？"
            },
            {
              "depth": 3,
              "value": "如何更新 Ant Design Pro？",
              "heading": "如何更新-ant-design-pro？"
            },
            {
              "depth": 3,
              "value": "如何从服务器请求菜单？",
              "heading": "如何从服务器请求菜单？"
            },
            {
              "depth": 3,
              "value": "如何使用 Umi 约定式路由",
              "heading": "如何使用-umi-约定式路由"
            },
            {
              "depth": 3,
              "value": "build 之后如何使用 mock 数据？",
              "heading": "build-之后如何使用-mock-数据？"
            },
            {
              "depth": 3,
              "value": "如何关闭页面权限控制",
              "heading": "如何关闭页面权限控制"
            },
            {
              "depth": 3,
              "value": "如何修改默认 webpack 配置？",
              "heading": "如何修改默认-webpack-配置？"
            },
            {
              "depth": 3,
              "value": "如何添加 babel 插件？",
              "heading": "如何添加-babel-插件？"
            },
            {
              "depth": 3,
              "value": "如何使用图片等静态资源？",
              "heading": "如何使用图片等静态资源？"
            },
            {
              "depth": 3,
              "value": "我的 url 里怎么有 # 号？要如何去掉？",
              "heading": "我的-url-里怎么有--号？要如何去掉？"
            },
            {
              "depth": 3,
              "value": "如何代理到后端服务器？",
              "heading": "如何代理到后端服务器？"
            },
            {
              "depth": 3,
              "value": "如何添加 scss 支持？",
              "heading": "如何添加-scss-支持？"
            },
            {
              "depth": 3,
              "value": "Git commit 时报错？",
              "heading": "git-commit-时报错？"
            },
            {
              "depth": 3,
              "value": "站点是否支持国际化？",
              "heading": "站点是否支持国际化？"
            },
            {
              "depth": 3,
              "value": "npm 安装 puppeteer 失败",
              "heading": "npm-安装-puppeteer-失败"
            },
            {
              "depth": 3,
              "value": "English Documentation？",
              "heading": "english-documentation？"
            },
            {
              "depth": 3,
              "value": "Ant Design Pro 从 1.X 升级到 2.X 以及之后版本，页面进行重定向（redirect）时，页面布局组件（如 BasicLayout）会重新加载",
              "heading": "ant-design-pro-从-1x-升级到-2x-以及之后版本，页面进行重定向（redirect）时，页面布局组件（如-basiclayout）会重新加载"
            },
            {
              "depth": 3,
              "value": "切换语言时某些组件语言无法切换",
              "heading": "切换语言时某些组件语言无法切换"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "常见问题"
      },
      {
        "path": "/en-US/docs/folder",
        "component": require('../../../docs/docs/folder.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/folder.en-US.md",
          "updatedTime": 1623142785819,
          "order": 12,
          "title": "folder structure",
          "group": {
            "title": "Basic Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Page code structure recommendation",
              "heading": "page-code-structure-recommendation"
            }
          ],
          "locale": "en-US"
        },
        "title": "folder structure"
      },
      {
        "path": "/docs/folder",
        "component": require('../../../docs/docs/folder.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/folder.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 11,
          "title": "文件夹结构",
          "group": {
            "title": "基础使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "目录结构",
              "heading": "目录结构"
            },
            {
              "depth": 3,
              "value": "页面代码结构推荐",
              "heading": "页面代码结构推荐"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "文件夹结构"
      },
      {
        "path": "/en-US/docs/getting-started",
        "component": require('../../../docs/docs/getting-started.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/getting-started.en-US.md",
          "updatedTime": 1623142785409,
          "order": 3,
          "title": "Getting Started",
          "group": {
            "title": "Introduction",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Tips before development",
              "heading": "tips-before-development"
            },
            {
              "depth": 2,
              "value": "Init",
              "heading": "init"
            },
            {
              "depth": 2,
              "value": "Development",
              "heading": "development"
            },
            {
              "depth": 3,
              "value": "start",
              "heading": "start"
            },
            {
              "depth": 3,
              "value": "build",
              "heading": "build"
            },
            {
              "depth": 3,
              "value": "analyze",
              "heading": "analyze"
            },
            {
              "depth": 3,
              "value": "lint",
              "heading": "lint"
            },
            {
              "depth": 3,
              "value": "lint:fix",
              "heading": "lintfix"
            },
            {
              "depth": 3,
              "value": "i18n-remove",
              "heading": "i18n-remove"
            }
          ],
          "locale": "en-US"
        },
        "title": "Getting Started"
      },
      {
        "path": "/docs/getting-started",
        "component": require('../../../docs/docs/getting-started.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/getting-started.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 3,
          "title": "开始使用",
          "group": {
            "title": "入门",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "开发前的输入",
              "heading": "开发前的输入"
            },
            {
              "depth": 2,
              "value": "准备工作",
              "heading": "准备工作"
            },
            {
              "depth": 3,
              "value": "包管理器",
              "heading": "包管理器"
            },
            {
              "depth": 3,
              "value": "Terminal",
              "heading": "terminal"
            },
            {
              "depth": 2,
              "value": "初始化",
              "heading": "初始化"
            },
            {
              "depth": 2,
              "value": "开发",
              "heading": "开发"
            },
            {
              "depth": 3,
              "value": "start",
              "heading": "start"
            },
            {
              "depth": 3,
              "value": "build",
              "heading": "build"
            },
            {
              "depth": 3,
              "value": "analyze",
              "heading": "analyze"
            },
            {
              "depth": 3,
              "value": "lint",
              "heading": "lint"
            },
            {
              "depth": 3,
              "value": "lint:fix",
              "heading": "lintfix"
            },
            {
              "depth": 3,
              "value": "i18n-remove",
              "heading": "i18n-remove"
            },
            {
              "depth": 2,
              "value": "内部使用",
              "heading": "内部使用"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "开始使用"
      },
      {
        "path": "/en-US/docs/graph",
        "component": require('../../../docs/docs/graph.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/graph.en-US.md",
          "updatedTime": 1623142785466,
          "order": 15,
          "title": "Chart",
          "group": {
            "title": "Page Development",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Get started quickly",
              "heading": "get-started-quickly"
            },
            {
              "depth": 2,
              "value": "easy to use",
              "heading": "easy-to-use"
            },
            {
              "depth": 3,
              "value": "Chart type",
              "heading": "chart-type"
            }
          ],
          "locale": "en-US"
        },
        "title": "Chart"
      },
      {
        "path": "/docs/graph",
        "component": require('../../../docs/docs/graph.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/graph.zh-CN.md",
          "updatedTime": 1623142785428,
          "order": 15,
          "title": "图表",
          "group": {
            "title": "页面开发",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "快速上手",
              "heading": "快速上手"
            },
            {
              "depth": 2,
              "value": "简单使用",
              "heading": "简单使用"
            },
            {
              "depth": 3,
              "value": "图表类型",
              "heading": "图表类型"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "图表"
      },
      {
        "path": "/en-US/docs/i18n",
        "component": require('../../../docs/docs/i18n.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/i18n.en-US.md",
          "updatedTime": 1623142785447,
          "order": 22,
          "title": "i18n",
          "group": {
            "title": "Advanced Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Getting Started",
              "heading": "getting-started"
            },
            {
              "depth": 3,
              "value": "Format Message",
              "heading": "format-message"
            },
            {
              "depth": 3,
              "value": "Set Locale",
              "heading": "set-locale"
            },
            {
              "depth": 3,
              "value": "Remove globalization",
              "heading": "remove-globalization"
            }
          ],
          "locale": "en-US"
        },
        "title": "i18n"
      },
      {
        "path": "/docs/i18n",
        "component": require('../../../docs/docs/i18n.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/i18n.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 93,
          "title": "国际化",
          "group": {
            "title": "高级使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "开始使用",
              "heading": "开始使用"
            },
            {
              "depth": 3,
              "value": "格式化字符串",
              "heading": "格式化字符串"
            },
            {
              "depth": 3,
              "value": "设置区域",
              "heading": "设置区域"
            },
            {
              "depth": 3,
              "value": "删除全球化",
              "heading": "删除全球化"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "国际化"
      },
      {
        "path": "/en-US/docs/initial-state",
        "component": require('../../../docs/docs/initial-state.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/initial-state.en-US.md",
          "updatedTime": 1623142785409,
          "order": 32,
          "title": "Global Initial State",
          "group": {
            "title": "Data Management",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Introduction",
              "heading": "introduction"
            },
            {
              "depth": 2,
              "value": "How to use",
              "heading": "how-to-use"
            },
            {
              "depth": 3,
              "value": "Initialization",
              "heading": "initialization"
            },
            {
              "depth": 3,
              "value": "Consuming in a component",
              "heading": "consuming-in-a-component"
            },
            {
              "depth": 3,
              "value": "Related umi plugins",
              "heading": "related-umi-plugins"
            }
          ],
          "locale": "en-US"
        },
        "title": "Global Initial State"
      },
      {
        "path": "/docs/initial-state",
        "component": require('../../../docs/docs/initial-state.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/initial-state.zh-CN.md",
          "updatedTime": 1623142785429,
          "order": 32,
          "title": "全局初始数据",
          "group": {
            "title": "数据管理",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "简介",
              "heading": "简介"
            },
            {
              "depth": 2,
              "value": "如何使用",
              "heading": "如何使用"
            },
            {
              "depth": 3,
              "value": "初始化",
              "heading": "初始化"
            },
            {
              "depth": 3,
              "value": "在组件中消费",
              "heading": "在组件中消费"
            },
            {
              "depth": 3,
              "value": "相关 umi 插件",
              "heading": "相关-umi-插件"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "全局初始数据"
      },
      {
        "path": "/en-US/docs/introduction",
        "component": require('../../../docs/docs/introduction.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/introduction.en-US.md",
          "updatedTime": 1623142785446,
          "order": 4,
          "title": "Beginner's Need to know",
          "group": {
            "title": "Introduction",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 1,
              "value": "web technology",
              "heading": "web-technology"
            },
            {
              "depth": 2,
              "value": "Node.js Basic front-end development environment",
              "heading": "nodejs-basic-front-end-development-environment"
            },
            {
              "depth": 2,
              "value": "Webpack A must-learn and must-know packaging tool for the front end",
              "heading": "webpack-a-must-learn-and-must-know-packaging-tool-for-the-front-end"
            },
            {
              "depth": 2,
              "value": "React Router routing library",
              "heading": "react-router-routing-library"
            },
            {
              "depth": 2,
              "value": "proxy Reverse proxy tool",
              "heading": "proxy-reverse-proxy-tool"
            },
            {
              "depth": 2,
              "value": "dva Lightweight application framework",
              "heading": "dva-lightweight-application-framework"
            },
            {
              "depth": 2,
              "value": "fabric Strict but not strict lint rule set",
              "heading": "fabric-strict-but-not-strict-lint-rule-set"
            },
            {
              "depth": 2,
              "value": "TypeScript JavaScript with types",
              "heading": "typescript-javascript-with-types"
            },
            {
              "depth": 2,
              "value": "Ant Design Front-end component library",
              "heading": "ant-design-front-end-component-library"
            },
            {
              "depth": 2,
              "value": "Ant Design Chart Simple and easy to use React chart library",
              "heading": "ant-design-chart-simple-and-easy-to-use-react-chart-library"
            },
            {
              "depth": 2,
              "value": "ProComponents template components",
              "heading": "procomponents-template-components"
            },
            {
              "depth": 2,
              "value": "useModel Simple Data Flow",
              "heading": "usemodel-simple-data-flow"
            },
            {
              "depth": 2,
              "value": "Runtime and compile time",
              "heading": "runtime-and-compile-time"
            },
            {
              "depth": 2,
              "value": "Umi",
              "heading": "umi"
            }
          ],
          "locale": "en-US"
        },
        "title": "Beginner's Need to know"
      },
      {
        "path": "/docs/introduction",
        "component": require('../../../docs/docs/introduction.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/introduction.zh-CN.md",
          "updatedTime": 1623142785446,
          "order": 4,
          "title": "新手需知",
          "group": {
            "title": "入门",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "web 技术",
              "heading": "web-技术"
            },
            {
              "depth": 2,
              "value": "Node.js 前端开发基础环境",
              "heading": "nodejs-前端开发基础环境"
            },
            {
              "depth": 2,
              "value": "Webpack 前端必学必会的打包工具",
              "heading": "webpack-前端必学必会的打包工具"
            },
            {
              "depth": 2,
              "value": "React Router 路由库",
              "heading": "react-router-路由库"
            },
            {
              "depth": 2,
              "value": "proxy 反向代理工具",
              "heading": "proxy-反向代理工具"
            },
            {
              "depth": 2,
              "value": "dva 轻量级的应用框架",
              "heading": "dva-轻量级的应用框架"
            },
            {
              "depth": 2,
              "value": "fabric 严格但是不严苛的 lint 规则集",
              "heading": "fabric-严格但是不严苛的-lint-规则集"
            },
            {
              "depth": 2,
              "value": "TypeScript 带类型的 JavaScript",
              "heading": "typescript-带类型的-javascript"
            },
            {
              "depth": 2,
              "value": "Ant Design 前端组件库",
              "heading": "ant-design-前端组件库"
            },
            {
              "depth": 2,
              "value": "Ant Design Chart简单好用的 React 图表库",
              "heading": "ant-design-chart简单好用的-react-图表库"
            },
            {
              "depth": 2,
              "value": "ProComponents 模板组件",
              "heading": "procomponents-模板组件"
            },
            {
              "depth": 2,
              "value": "useModel 简易数据流",
              "heading": "usemodel-简易数据流"
            },
            {
              "depth": 2,
              "value": "运行时和编译时",
              "heading": "运行时和编译时"
            },
            {
              "depth": 2,
              "value": "Umi 的插件",
              "heading": "umi-的插件"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "新手需知"
      },
      {
        "path": "/en-US/docs/layout",
        "component": require('../../../docs/docs/layout.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/layout.en-US.md",
          "updatedTime": 1623142785409,
          "order": 15,
          "title": "Layout",
          "group": {
            "title": "Page Development",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "UI configuration",
              "heading": "ui-configuration"
            },
            {
              "depth": 3,
              "value": "Layout style",
              "heading": "layout-style"
            },
            {
              "depth": 3,
              "value": "Menu display",
              "heading": "menu-display"
            },
            {
              "depth": 3,
              "value": "Navigate the upper right corner",
              "heading": "navigate-the-upper-right-corner"
            },
            {
              "depth": 3,
              "value": "Custom footer",
              "heading": "custom-footer"
            },
            {
              "depth": 3,
              "value": "Custom Layout",
              "heading": "custom-layout"
            },
            {
              "depth": 1,
              "value": "The layout is essentially a special component, and the corresponding component of the sub-route will be passed into the layout component as props. The easyst layout is like this",
              "heading": "the-layout-is-essentially-a-special-component-and-the-corresponding-component-of-the-sub-route-will-be-passed-into-the-layout-component-as-props-the-easyst-layout-is-like-this"
            },
            {
              "depth": 2,
              "value": "Routing configuration",
              "heading": "routing-configuration"
            },
            {
              "depth": 3,
              "value": "Permission routing",
              "heading": "permission-routing"
            },
            {
              "depth": 3,
              "value": "404 / 403",
              "heading": "404--403"
            },
            {
              "depth": 3,
              "value": "Nested layout",
              "heading": "nested-layout"
            },
            {
              "depth": 3,
              "value": "Hide the left menu, hide the navigation header, and footer according to the route",
              "heading": "hide-the-left-menu-hide-the-navigation-header-and-footer-according-to-the-route"
            },
            {
              "depth": 3,
              "value": "Modification of menu layout mode",
              "heading": "modification-of-menu-layout-mode"
            },
            {
              "depth": 2,
              "value": "Custom layout",
              "heading": "custom-layout-1"
            },
            {
              "depth": 2,
              "value": "More",
              "heading": "more"
            },
            {
              "depth": 3,
              "value": "Close the Layout plugin",
              "heading": "close-the-layout-plugin"
            }
          ],
          "locale": "en-US"
        },
        "title": "Layout"
      },
      {
        "path": "/docs/layout",
        "component": require('../../../docs/docs/layout.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/layout.zh-CN.md",
          "updatedTime": 1623142785447,
          "order": 15,
          "title": "布局",
          "group": {
            "title": "页面开发",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "UI 配置",
              "heading": "ui-配置"
            },
            {
              "depth": 3,
              "value": "布局样式",
              "heading": "布局样式"
            },
            {
              "depth": 3,
              "value": "菜单展示",
              "heading": "菜单展示"
            },
            {
              "depth": 3,
              "value": "导航右上角",
              "heading": "导航右上角"
            },
            {
              "depth": 3,
              "value": "自定义 footer",
              "heading": "自定义-footer"
            },
            {
              "depth": 2,
              "value": "路由配置",
              "heading": "路由配置"
            },
            {
              "depth": 3,
              "value": "权限路由",
              "heading": "权限路由"
            },
            {
              "depth": 3,
              "value": "404 / 403",
              "heading": "404--403"
            },
            {
              "depth": 3,
              "value": "嵌套布局",
              "heading": "嵌套布局"
            },
            {
              "depth": 3,
              "value": "根据路由隐藏左侧菜单、隐藏导航头、footer",
              "heading": "根据路由隐藏左侧菜单、隐藏导航头、footer"
            },
            {
              "depth": 3,
              "value": "菜单布局展示方式的修改",
              "heading": "菜单布局展示方式的修改"
            },
            {
              "depth": 2,
              "value": "自定义布局",
              "heading": "自定义布局"
            },
            {
              "depth": 2,
              "value": "更多",
              "heading": "更多"
            },
            {
              "depth": 3,
              "value": "关闭 Layout 插件",
              "heading": "关闭-layout-插件"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "布局"
      },
      {
        "path": "/en-US/docs/less",
        "component": require('../../../docs/docs/less.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/less.en-US.md",
          "updatedTime": 1623142785409,
          "order": 23,
          "title": "use less",
          "group": {
            "title": "styles and resources",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "index.less",
              "heading": "indexless"
            },
            {
              "depth": 2,
              "value": "index.ts",
              "heading": "indexts"
            },
            {
              "depth": 2,
              "value": "Use variables",
              "heading": "use-variables"
            },
            {
              "depth": 3,
              "value": "index.less",
              "heading": "indexless-1"
            },
            {
              "depth": 3,
              "value": "index.ts",
              "heading": "indexts-1"
            }
          ],
          "locale": "en-US"
        },
        "title": "use less"
      },
      {
        "path": "/docs/less",
        "component": require('../../../docs/docs/less.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/less.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 23,
          "title": "使用 less",
          "group": {
            "title": "样式和资源",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "index.less",
              "heading": "indexless"
            },
            {
              "depth": 2,
              "value": "index.ts",
              "heading": "indexts"
            },
            {
              "depth": 2,
              "value": "使用变量",
              "heading": "使用变量"
            },
            {
              "depth": 3,
              "value": "index.less",
              "heading": "indexless-1"
            },
            {
              "depth": 3,
              "value": "index.ts",
              "heading": "indexts-1"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "使用 less"
      },
      {
        "path": "/en-US/docs/lint",
        "component": require('../../../docs/docs/lint.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/lint.en-US.md",
          "updatedTime": 1623142785429,
          "order": 31,
          "title": "Lint",
          "group": {
            "title": "Quality",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "📏 Rule list",
              "heading": "-rule-list"
            },
            {
              "depth": 4,
              "value": "no-nested-ternary does not support fix",
              "heading": "no-nested-ternary-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "react / jsx-closing-tag-location Automatic fix",
              "heading": "react--jsx-closing-tag-location-automatic-fix"
            },
            {
              "depth": 4,
              "value": "consistent-return does not support fix",
              "heading": "consistent-return-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "react / prefer-stateless-function fix is ​​not supported",
              "heading": "react--prefer-stateless-function-fix-is-not-supported"
            },
            {
              "depth": 4,
              "value": "no-cond-assign does not support fix",
              "heading": "no-cond-assign-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "require-yield Fix is ​​not supported",
              "heading": "require-yield-fix-is-not-supported"
            },
            {
              "depth": 4,
              "value": "prefer-destructuring partial support fix",
              "heading": "prefer-destructuring-partial-support-fix"
            },
            {
              "depth": 4,
              "value": "react / destructuring-assignment fix is ​​not supported",
              "heading": "react--destructuring-assignment-fix-is-not-supported"
            },
            {
              "depth": 4,
              "value": "comma-dangle prettier all fix",
              "heading": "comma-dangle-prettier-all-fix"
            },
            {
              "depth": 4,
              "value": "max-len part fix",
              "heading": "max-len-part-fix"
            },
            {
              "depth": 4,
              "value": "no-mixed-operators does not support fix",
              "heading": "no-mixed-operators-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "react / no-array-index-key Does not support fix",
              "heading": "react--no-array-index-key-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "@ typescript-eslint / no-use-before-define Fix is ​​not supported",
              "heading": "-typescript-eslint--no-use-before-define-fix-is-not-supported"
            },
            {
              "depth": 4,
              "value": "no-use-before-define fix is ​​not supported",
              "heading": "no-use-before-define-fix-is-not-supported"
            },
            {
              "depth": 4,
              "value": "no-param-reassign does not support fix",
              "heading": "no-param-reassign-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "react-hooks / rules-of-hooks Partial support fix",
              "heading": "react-hooks--rules-of-hooks-partial-support-fix"
            },
            {
              "depth": 4,
              "value": "import / no-extraneous-dependencies does not support fix",
              "heading": "import--no-extraneous-dependencies-does-not-support-fix"
            },
            {
              "depth": 4,
              "value": "import / no-unresolved Fix is ​​not supported",
              "heading": "import--no-unresolved-fix-is-not-supported"
            },
            {
              "depth": 3,
              "value": "🌚 Solution",
              "heading": "-solution"
            }
          ],
          "locale": "en-US"
        },
        "title": "Lint"
      },
      {
        "path": "/docs/lint",
        "component": require('../../../docs/docs/lint.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/lint.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 31,
          "title": "Lint",
          "group": {
            "title": "质量",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "📏 规则列表",
              "heading": "-规则列表"
            },
            {
              "depth": 4,
              "value": "no-nested-ternary 不支持 fix",
              "heading": "no-nested-ternary-不支持-fix"
            },
            {
              "depth": 4,
              "value": "react/jsx-closing-tag-location 自动 fix",
              "heading": "reactjsx-closing-tag-location-自动-fix"
            },
            {
              "depth": 4,
              "value": "consistent-return  不支持 fix",
              "heading": "consistent-return--不支持-fix"
            },
            {
              "depth": 4,
              "value": "react/prefer-stateless-function  不支持 fix",
              "heading": "reactprefer-stateless-function--不支持-fix"
            },
            {
              "depth": 4,
              "value": "no-cond-assign  不支持 fix",
              "heading": "no-cond-assign--不支持-fix"
            },
            {
              "depth": 4,
              "value": "require-yield  不支持 fix",
              "heading": "require-yield--不支持-fix"
            },
            {
              "depth": 4,
              "value": "prefer-destructuring 部分支持 fix",
              "heading": "prefer-destructuring-部分支持-fix"
            },
            {
              "depth": 4,
              "value": "react/destructuring-assignment  不支持 fix",
              "heading": "reactdestructuring-assignment--不支持-fix"
            },
            {
              "depth": 4,
              "value": "comma-dangle prettier 全部 fix",
              "heading": "comma-dangle-prettier-全部-fix"
            },
            {
              "depth": 4,
              "value": "max-len 部分 fix",
              "heading": "max-len-部分-fix"
            },
            {
              "depth": 4,
              "value": "no-mixed-operators  不支持 fix",
              "heading": "no-mixed-operators--不支持-fix"
            },
            {
              "depth": 4,
              "value": "react/no-array-index-key  不支持 fix",
              "heading": "reactno-array-index-key--不支持-fix"
            },
            {
              "depth": 4,
              "value": "@typescript-eslint/no-use-before-define  不支持 fix",
              "heading": "typescript-eslintno-use-before-define--不支持-fix"
            },
            {
              "depth": 4,
              "value": "no-use-before-define   不支持 fix",
              "heading": "no-use-before-define---不支持-fix"
            },
            {
              "depth": 4,
              "value": "no-param-reassign 不支持 fix",
              "heading": "no-param-reassign-不支持-fix"
            },
            {
              "depth": 4,
              "value": "react-hooks/rules-of-hooks  部分支持 fix",
              "heading": "react-hooksrules-of-hooks--部分支持-fix"
            },
            {
              "depth": 4,
              "value": "import/no-extraneous-dependencies 不支持 fix",
              "heading": "importno-extraneous-dependencies-不支持-fix"
            },
            {
              "depth": 4,
              "value": "import/no-unresolved  不支持 fix",
              "heading": "importno-unresolved--不支持-fix"
            },
            {
              "depth": 3,
              "value": "🌚 掩耳盗铃解决法",
              "heading": "-掩耳盗铃解决法"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Lint"
      },
      {
        "path": "/en-US/docs/new-page",
        "component": require('../../../docs/docs/new-page.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/new-page.en-US.md",
          "updatedTime": 1623142785447,
          "order": 12,
          "title": "New Page",
          "group": {
            "title": "Page Development",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Manually create",
              "heading": "manually-create"
            },
            {
              "depth": 2,
              "value": "Add ts, less files",
              "heading": "add-ts-less-files"
            },
            {
              "depth": 3,
              "value": "New layout",
              "heading": "new-layout"
            },
            {
              "depth": 2,
              "value": "Add files to menus and routes",
              "heading": "add-files-to-menus-and-routes"
            },
            {
              "depth": 3,
              "value": "Use iconFont in the menu",
              "heading": "use-iconfont-in-the-menu"
            }
          ],
          "locale": "en-US"
        },
        "title": "New Page"
      },
      {
        "path": "/docs/new-page",
        "component": require('../../../docs/docs/new-page.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/new-page.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 12,
          "title": "新增页面",
          "group": {
            "title": "页面开发",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "手动创建",
              "heading": "手动创建"
            },
            {
              "depth": 2,
              "value": "新增 ts、less 文件",
              "heading": "新增-ts、less-文件"
            },
            {
              "depth": 3,
              "value": "新增布局",
              "heading": "新增布局"
            },
            {
              "depth": 2,
              "value": "将文件加入菜单和路由",
              "heading": "将文件加入菜单和路由"
            },
            {
              "depth": 3,
              "value": "在菜单中使用 iconFont",
              "heading": "在菜单中使用-iconfont"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "新增页面"
      },
      {
        "path": "/en-US/docs/openapi",
        "component": require('../../../docs/docs/openapi.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/openapi.en-US.md",
          "updatedTime": 1623142785447,
          "order": 30,
          "title": "OpenAPI",
          "group": {
            "title": "Network Request",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Install plugin",
              "heading": "install-plugin"
            },
            {
              "depth": 2,
              "value": "如何使用",
              "heading": "如何使用"
            },
            {
              "depth": 3,
              "value": "requestLibPath",
              "heading": "requestlibpath"
            },
            {
              "depth": 3,
              "value": "mock",
              "heading": "mock"
            },
            {
              "depth": 3,
              "value": "Documentation",
              "heading": "documentation"
            }
          ],
          "locale": "en-US"
        },
        "title": "OpenAPI"
      },
      {
        "path": "/docs/openapi",
        "component": require('../../../docs/docs/openapi.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/openapi.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 30,
          "title": "OpenAPI",
          "group": {
            "title": "后端集成",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "安装插件",
              "heading": "安装插件"
            },
            {
              "depth": 2,
              "value": "如何使用",
              "heading": "如何使用"
            },
            {
              "depth": 3,
              "value": "requestLibPath",
              "heading": "requestlibpath"
            },
            {
              "depth": 3,
              "value": "mock",
              "heading": "mock"
            },
            {
              "depth": 3,
              "value": "文档",
              "heading": "文档"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "OpenAPI"
      },
      {
        "path": "/en-US/docs/overview",
        "component": require('../../../docs/docs/overview.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/overview.en-US.md",
          "updatedTime": 1623142785446,
          "order": 0,
          "title": "Document overview",
          "group": {
            "title": "Introduction",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [],
          "locale": "en-US"
        },
        "title": "Document overview"
      },
      {
        "path": "/docs/overview",
        "component": require('../../../docs/docs/overview.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/overview.zh-CN.md",
          "updatedTime": 1623142785428,
          "order": 0,
          "title": "文档总览",
          "group": {
            "title": "入门",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "文档总览"
      },
      {
        "path": "/en-US/docs/porxy",
        "component": require('../../../docs/docs/porxy.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/porxy.en-US.md",
          "updatedTime": 1623142785409,
          "order": 32,
          "title": "Proxy",
          "group": {
            "title": "Network Request",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "Same-origin strategy",
              "heading": "same-origin-strategy"
            },
            {
              "depth": 3,
              "value": "Used in development",
              "heading": "used-in-development"
            },
            {
              "depth": 3,
              "value": "CORS",
              "heading": "cors"
            },
            {
              "depth": 4,
              "value": "express config",
              "heading": "express-config"
            },
            {
              "depth": 4,
              "value": "nginx config",
              "heading": "nginx-config"
            },
            {
              "depth": 4,
              "value": "java config",
              "heading": "java-config"
            },
            {
              "depth": 3,
              "value": "Advanced usage",
              "heading": "advanced-usage"
            }
          ],
          "locale": "en-US"
        },
        "title": "Proxy"
      },
      {
        "path": "/docs/proxy",
        "component": require('../../../docs/docs/proxy.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/proxy.zh-CN.md",
          "updatedTime": 1623142785730,
          "order": 32,
          "title": "代理",
          "group": {
            "title": "后端集成",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "同源策略",
              "heading": "同源策略"
            },
            {
              "depth": 3,
              "value": "在开发中使用",
              "heading": "在开发中使用"
            },
            {
              "depth": 3,
              "value": "CORS",
              "heading": "cors"
            },
            {
              "depth": 4,
              "value": "express 中的配置",
              "heading": "express-中的配置"
            },
            {
              "depth": 4,
              "value": "nginx 中的配置",
              "heading": "nginx-中的配置"
            },
            {
              "depth": 4,
              "value": "java 手动配置",
              "heading": "java-手动配置"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "代理"
      },
      {
        "path": "/en-US/docs/request",
        "component": require('../../../docs/docs/request.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/request.en-US.md",
          "updatedTime": 1623142785409,
          "order": 31,
          "title": "Request",
          "group": {
            "title": "Network Request",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Introduction",
              "heading": "introduction"
            },
            {
              "depth": 2,
              "value": "How to use",
              "heading": "how-to-use"
            },
            {
              "depth": 3,
              "value": "Using request",
              "heading": "using-request"
            },
            {
              "depth": 3,
              "value": "Using useRequest",
              "heading": "using-userequest"
            },
            {
              "depth": 2,
              "value": "Middleware & Interceptors",
              "heading": "middleware--interceptors"
            },
            {
              "depth": 3,
              "value": "Middleware: middlewares",
              "heading": "middleware-middlewares"
            },
            {
              "depth": 3,
              "value": "Pre-request interception: requestInterceptors",
              "heading": "pre-request-interception-requestinterceptors"
            },
            {
              "depth": 3,
              "value": "Post-response interceptors: responseInterceptors",
              "heading": "post-response-interceptors-responseinterceptors"
            },
            {
              "depth": 2,
              "value": "Uniform specification",
              "heading": "uniform-specification"
            },
            {
              "depth": 3,
              "value": "Uniform error handling",
              "heading": "uniform-error-handling"
            },
            {
              "depth": 3,
              "value": "Uniform interface specification",
              "heading": "uniform-interface-specification"
            },
            {
              "depth": 2,
              "value": "Reference: back-end interface specification recommendations",
              "heading": "reference-back-end-interface-specification-recommendations"
            }
          ],
          "locale": "en-US"
        },
        "title": "Request"
      },
      {
        "path": "/docs/request",
        "component": require('../../../docs/docs/request.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/request.zh-CN.md",
          "updatedTime": 1623142785748,
          "order": 31,
          "title": "网络请求",
          "group": {
            "title": "后端集成",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "简介",
              "heading": "简介"
            },
            {
              "depth": 2,
              "value": "如何使用",
              "heading": "如何使用"
            },
            {
              "depth": 3,
              "value": "使用 request",
              "heading": "使用-request"
            },
            {
              "depth": 3,
              "value": "使用 useRequest",
              "heading": "使用-userequest"
            },
            {
              "depth": 2,
              "value": "中间件 & 拦截器",
              "heading": "中间件--拦截器"
            },
            {
              "depth": 3,
              "value": "中间件：middlewares",
              "heading": "中间件：middlewares"
            },
            {
              "depth": 3,
              "value": "请求前拦截：requestInterceptors",
              "heading": "请求前拦截：requestinterceptors"
            },
            {
              "depth": 3,
              "value": "响应后拦截：responseInterceptors",
              "heading": "响应后拦截：responseinterceptors"
            },
            {
              "depth": 2,
              "value": "统一规范",
              "heading": "统一规范"
            },
            {
              "depth": 3,
              "value": "统一错误处理",
              "heading": "统一错误处理"
            },
            {
              "depth": 3,
              "value": "统一接口规范",
              "heading": "统一接口规范"
            },
            {
              "depth": 2,
              "value": "参考：后端接口规范建议",
              "heading": "参考：后端接口规范建议"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "网络请求"
      },
      {
        "path": "/en-US/docs/resource",
        "component": require('../../../docs/docs/resource.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/resource.en-US.md",
          "updatedTime": 1623142785409,
          "order": 94,
          "title": "Design Kit",
          "group": {
            "title": "Other",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Axure Library ",
              "heading": "axure-library"
            },
            {
              "depth": 2,
              "value": "Ant Design Pro Sketch ",
              "heading": "ant-design-pro-sketch"
            },
            {
              "depth": 2,
              "value": "Other resources of Ant Design",
              "heading": "other-resources-of-ant-design"
            }
          ],
          "locale": "en-US"
        },
        "title": "Design Kit"
      },
      {
        "path": "/docs/resource",
        "component": require('../../../docs/docs/resource.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/resource.zh-CN.md",
          "updatedTime": 1623142785409,
          "order": 94,
          "title": "设计资源",
          "group": {
            "title": "其它",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Axure Library ",
              "heading": "axure-library"
            },
            {
              "depth": 2,
              "value": "Ant Design Pro Sketch ",
              "heading": "ant-design-pro-sketch"
            },
            {
              "depth": 2,
              "value": "其他 Ant Design 设计资源",
              "heading": "其他-ant-design-设计资源"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "设计资源"
      },
      {
        "path": "/en-US/docs/router-and-nav",
        "component": require('../../../docs/docs/router-and-nav.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/router-and-nav.en-US.md",
          "updatedTime": 1623142785748,
          "order": 10,
          "title": "Router and Nav",
          "group": {
            "title": "Page Development",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Basic Structure",
              "heading": "basic-structure"
            },
            {
              "depth": 3,
              "value": "Router",
              "heading": "router"
            },
            {
              "depth": 3,
              "value": "Menu",
              "heading": "menu"
            },
            {
              "depth": 3,
              "value": "Fetch menu from server",
              "heading": "fetch-menu-from-server"
            },
            {
              "depth": 3,
              "value": "Bread Crumbs",
              "heading": "bread-crumbs"
            },
            {
              "depth": 2,
              "value": "Example",
              "heading": "example"
            },
            {
              "depth": 3,
              "value": "Menu jump to a URL",
              "heading": "menu-jump-to-a-url"
            },
            {
              "depth": 3,
              "value": "Add Page",
              "heading": "add-page"
            },
            {
              "depth": 3,
              "value": "Add layout",
              "heading": "add-layout"
            },
            {
              "depth": 3,
              "value": "Use a custom icon in the menu",
              "heading": "use-a-custom-icon-in-the-menu"
            },
            {
              "depth": 3,
              "value": "Routing with parameters",
              "heading": "routing-with-parameters"
            }
          ],
          "locale": "en-US"
        },
        "title": "Router and Nav"
      },
      {
        "path": "/en-US/docs/simple-model",
        "component": require('../../../docs/docs/simple-model.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/simple-model.en-US.md",
          "updatedTime": 1623142785409,
          "order": 19,
          "title": "easy Model",
          "group": {
            "title": "Data Management",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Introduction",
              "heading": "introduction"
            },
            {
              "depth": 2,
              "value": "Usage",
              "heading": "usage"
            },
            {
              "depth": 3,
              "value": "1. Creating the Model",
              "heading": "1-creating-the-model"
            },
            {
              "depth": 3,
              "value": "2. Using the Model",
              "heading": "2-using-the-model"
            },
            {
              "depth": 3,
              "value": "3. Linking Models",
              "heading": "3-linking-models"
            },
            {
              "depth": 2,
              "value": "Other",
              "heading": "other"
            },
            {
              "depth": 3,
              "value": "VSCode plugin",
              "heading": "vscode-plugin"
            },
            {
              "depth": 3,
              "value": "DVA Migration",
              "heading": "dva-migration"
            }
          ],
          "locale": "en-US"
        },
        "title": "easy Model"
      },
      {
        "path": "/docs/simple-model",
        "component": require('../../../docs/docs/simple-model.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/simple-model.zh-CN.md",
          "updatedTime": 1623142785429,
          "order": 19,
          "title": "简易数据流",
          "group": {
            "title": "数据管理",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "简介",
              "heading": "简介"
            },
            {
              "depth": 2,
              "value": "如何使用",
              "heading": "如何使用"
            },
            {
              "depth": 3,
              "value": "一、新建 Model",
              "heading": "一、新建-model"
            },
            {
              "depth": 3,
              "value": "二、使用 Model",
              "heading": "二、使用-model"
            },
            {
              "depth": 3,
              "value": "三、Model 性能优化",
              "heading": "三、model-性能优化"
            },
            {
              "depth": 2,
              "value": "其他",
              "heading": "其他"
            },
            {
              "depth": 3,
              "value": "相关 umi 插件",
              "heading": "相关-umi-插件"
            },
            {
              "depth": 3,
              "value": "VSCode 插件",
              "heading": "vscode-插件"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "简易数据流"
      },
      {
        "path": "/en-US/docs/test",
        "component": require('../../../docs/docs/test.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/test.en-US.md",
          "updatedTime": 1623142785409,
          "order": 32,
          "title": "Test",
          "group": {
            "title": "Quality",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Document Convention",
              "heading": "document-convention"
            },
            {
              "depth": 2,
              "value": "Write test",
              "heading": "write-test"
            },
            {
              "depth": 2,
              "value": "Test component",
              "heading": "test-component"
            },
            {
              "depth": 3,
              "value": "React test",
              "heading": "react-test"
            },
            {
              "depth": 2,
              "value": "testing report",
              "heading": "testing-report"
            },
            {
              "depth": 2,
              "value": "e2e test",
              "heading": "e2e-test"
            }
          ],
          "locale": "en-US"
        },
        "title": "Test"
      },
      {
        "path": "/docs/test",
        "component": require('../../../docs/docs/test.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/test.zh-CN.md",
          "updatedTime": 1623142785446,
          "order": 94,
          "title": "测试",
          "group": {
            "title": "质量",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "文件约定",
              "heading": "文件约定"
            },
            {
              "depth": 2,
              "value": "写测试",
              "heading": "写测试"
            },
            {
              "depth": 2,
              "value": "测试组件",
              "heading": "测试组件"
            },
            {
              "depth": 3,
              "value": "React 的测试",
              "heading": "react-的测试"
            },
            {
              "depth": 2,
              "value": "测试报告",
              "heading": "测试报告"
            },
            {
              "depth": 2,
              "value": "e2e 测试",
              "heading": "e2e-测试"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "测试"
      },
      {
        "path": "/en-US/docs/title-landing",
        "component": require('../../../docs/docs/title-landing.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/title-landing.en-US.md",
          "updatedTime": 1623142785409,
          "order": 13,
          "title": "Title and loading page",
          "group": {
            "title": "Basic Usage",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Title and Logo",
              "heading": "title-and-logo"
            },
            {
              "depth": 2,
              "value": "favicon",
              "heading": "favicon"
            },
            {
              "depth": 2,
              "value": "Load page",
              "heading": "load-page"
            },
            {
              "depth": 3,
              "value": "js before loading",
              "heading": "js-before-loading"
            },
            {
              "depth": 3,
              "value": "js after loading",
              "heading": "js-after-loading"
            },
            {
              "depth": 3,
              "value": "Loading in business",
              "heading": "loading-in-business"
            }
          ],
          "locale": "en-US"
        },
        "title": "Title and loading page"
      },
      {
        "path": "/docs/title-landing",
        "component": require('../../../docs/docs/title-landing.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/title-landing.zh-CN.md",
          "updatedTime": 1623142785446,
          "order": 12,
          "title": "标题和加载页",
          "group": {
            "title": "基础使用",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "标题和 Logo",
              "heading": "标题和-logo"
            },
            {
              "depth": 2,
              "value": "favicon",
              "heading": "favicon"
            },
            {
              "depth": 2,
              "value": "加载页",
              "heading": "加载页"
            },
            {
              "depth": 3,
              "value": "js 加载前",
              "heading": "js-加载前"
            },
            {
              "depth": 3,
              "value": "js 加载后",
              "heading": "js-加载后"
            },
            {
              "depth": 3,
              "value": "业务中的加载",
              "heading": "业务中的加载"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "标题和加载页"
      },
      {
        "path": "/en-US/docs/type-script",
        "component": require('../../../docs/docs/typeScript.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/typeScript.en-US.md",
          "updatedTime": 1623142785446,
          "order": 31,
          "title": "TypeScript",
          "group": {
            "title": "Quality",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "When is type recommended and when is interface used?",
              "heading": "when-is-type-recommended-and-when-is-interface-used"
            },
            {
              "depth": 2,
              "value": "Define interface data",
              "heading": "define-interface-data"
            },
            {
              "depth": 2,
              "value": "Generic",
              "heading": "generic"
            },
            {
              "depth": 2,
              "value": "Define n ways to write a component",
              "heading": "define-n-ways-to-write-a-component"
            },
            {
              "depth": 2,
              "value": "umi common types",
              "heading": "umi-common-types"
            },
            {
              "depth": 3,
              "value": "Page related",
              "heading": "page-related"
            },
            {
              "depth": 2,
              "value": "Add parameters for Window",
              "heading": "add-parameters-for-window"
            },
            {
              "depth": 2,
              "value": "Type of component",
              "heading": "type-of-component"
            },
            {
              "depth": 3,
              "value": "Form",
              "heading": "form"
            },
            {
              "depth": 3,
              "value": "Table",
              "heading": "table"
            },
            {
              "depth": 2,
              "value": "Some small pits",
              "heading": "some-small-pits"
            },
            {
              "depth": 3,
              "value": "React.ReactText[]",
              "heading": "reactreacttext"
            },
            {
              "depth": 3,
              "value": "React.forwardRef",
              "heading": "reactforwardref"
            },
            {
              "depth": 3,
              "value": "Dynamic increase",
              "heading": "dynamic-increase"
            },
            {
              "depth": 3,
              "value": "Value can be null or undefined",
              "heading": "value-can-be-null-or-undefined"
            },
            {
              "depth": 3,
              "value": "There is no typescript definition in a library",
              "heading": "there-is-no-typescript-definition-in-a-library"
            },
            {
              "depth": 3,
              "value": "@ts-ignore",
              "heading": "ts-ignore"
            }
          ],
          "locale": "en-US"
        },
        "title": "TypeScript"
      },
      {
        "path": "/docs/type-script",
        "component": require('../../../docs/docs/typeScript.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/typeScript.zh-CN.md",
          "updatedTime": 1623142785447,
          "order": 31,
          "title": "TypeScript",
          "group": {
            "title": "质量",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "什么时候推荐用 type 什么时候用 interface ？",
              "heading": "什么时候推荐用-type-什么时候用-interface-？"
            },
            {
              "depth": 2,
              "value": "定义接口数据",
              "heading": "定义接口数据"
            },
            {
              "depth": 2,
              "value": "泛型",
              "heading": "泛型"
            },
            {
              "depth": 2,
              "value": "定义一个组件的 n 种写法",
              "heading": "定义一个组件的-n-种写法"
            },
            {
              "depth": 2,
              "value": "umi 常用类型",
              "heading": "umi-常用类型"
            },
            {
              "depth": 3,
              "value": "页面相关",
              "heading": "页面相关"
            },
            {
              "depth": 2,
              "value": "为 Window 增加参数",
              "heading": "为-window-增加参数"
            },
            {
              "depth": 2,
              "value": "组件的类型",
              "heading": "组件的类型"
            },
            {
              "depth": 3,
              "value": "Form",
              "heading": "form"
            },
            {
              "depth": 3,
              "value": "Table",
              "heading": "table"
            },
            {
              "depth": 2,
              "value": "一些小坑",
              "heading": "一些小坑"
            },
            {
              "depth": 3,
              "value": "React.ReactText[]",
              "heading": "reactreacttext"
            },
            {
              "depth": 3,
              "value": "React.forwardRef",
              "heading": "reactforwardref"
            },
            {
              "depth": 3,
              "value": "动态增加",
              "heading": "动态增加"
            },
            {
              "depth": 3,
              "value": "值可以为 null 或 undefined",
              "heading": "值可以为-null-或-undefined"
            },
            {
              "depth": 3,
              "value": "某个库不存在 typescript 的定义",
              "heading": "某个库不存在-typescript-的定义"
            },
            {
              "depth": 3,
              "value": "@ts-ignore",
              "heading": "ts-ignore"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "TypeScript"
      },
      {
        "path": "/en-US/docs/upgrade-v5",
        "component": require('../../../docs/docs/upgrade-v5.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/upgrade-v5.en-US.md",
          "updatedTime": 1623142785409,
          "order": 92,
          "title": "Upgrade to V5",
          "group": {
            "title": "Other",
            "path": "/en-US/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "initialState",
              "heading": "initialstate"
            },
            {
              "depth": 2,
              "value": "Layout",
              "heading": "layout"
            },
            {
              "depth": 2,
              "value": "Permissions",
              "heading": "permissions"
            },
            {
              "depth": 2,
              "value": "Request",
              "heading": "request"
            },
            {
              "depth": 2,
              "value": "Miscellaneous",
              "heading": "miscellaneous"
            }
          ],
          "locale": "en-US"
        },
        "title": "Upgrade to V5"
      },
      {
        "path": "/docs/upgrade-v5",
        "component": require('../../../docs/docs/upgrade-v5.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/upgrade-v5.zh-CN.md",
          "updatedTime": 1623142785447,
          "order": 92,
          "title": "升级到 V5",
          "group": {
            "title": "其它",
            "path": "/docs/"
          },
          "nav": {
            "title": "文档",
            "path": "/docs"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "initialState",
              "heading": "initialstate"
            },
            {
              "depth": 2,
              "value": "Layout",
              "heading": "layout"
            },
            {
              "depth": 2,
              "value": "权限",
              "heading": "权限"
            },
            {
              "depth": 2,
              "value": "请求",
              "heading": "请求"
            },
            {
              "depth": 2,
              "value": "其他杂项",
              "heading": "其他杂项"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "升级到 V5"
      },
      {
        "path": "/en-US/blog/antd-4.0",
        "component": require('../../../blog/antd-4.0.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/antd-4.0.en-US.md",
          "updatedTime": 1619001803000,
          "order": 6,
          "title": "Migration antd@4 Guide",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2020-01-16T00:00:00.000Z",
          "slugs": [
            {
              "depth": 3,
              "value": "🚀 Upgrade points",
              "heading": "-upgrade-points"
            },
            {
              "depth": 3,
              "value": "Migration method",
              "heading": "migration-method"
            },
            {
              "depth": 3,
              "value": "Used in Pro",
              "heading": "used-in-pro"
            },
            {
              "depth": 3,
              "value": "✨ A teaser",
              "heading": "-a-teaser"
            }
          ],
          "locale": "en-US"
        },
        "title": "Migration antd@4 Guide"
      },
      {
        "path": "/blog/antd-4.0",
        "component": require('../../../blog/antd-4.0.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/antd-4.0.zh-CN.md",
          "updatedTime": 1604371193000,
          "order": 6,
          "title": "迁移 antd@4 指南",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2020-01-16T00:00:00.000Z",
          "slugs": [
            {
              "depth": 3,
              "value": "🚀 升级点",
              "heading": "-升级点"
            },
            {
              "depth": 3,
              "value": "🚚 迁移方法",
              "heading": "-迁移方法"
            },
            {
              "depth": 3,
              "value": "💎 Pro 中使用",
              "heading": "-pro-中使用"
            },
            {
              "depth": 3,
              "value": "✨ 一个预告",
              "heading": "-一个预告"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "迁移 antd@4 指南"
      },
      {
        "path": "/en-US/blog/best-front0end",
        "component": require('../../../blog/best-front0end.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/best-front0end.en-US.md",
          "updatedTime": 1583046302000,
          "order": 7,
          "title": "Front-end best practices coming soon",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2020-02-29T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "🤷‍♂️ Why Best Practices Are Needed",
              "heading": "🤷♂️-why-best-practices-are-needed"
            },
            {
              "depth": 2,
              "value": "🏄‍♂️ 我们的解决方案",
              "heading": "♂️-我们的解决方案"
            },
            {
              "depth": 3,
              "value": "🕹 Strong constraints",
              "heading": "-strong-constraints"
            },
            {
              "depth": 3,
              "value": "🧬 Convention",
              "heading": "🧬-convention"
            },
            {
              "depth": 2,
              "value": "🛒 其他的方案",
              "heading": "🛒-其他的方案"
            }
          ],
          "locale": "en-US"
        },
        "title": "Front-end best practices coming soon"
      },
      {
        "path": "/blog/best-front0end",
        "component": require('../../../blog/best-front0end.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/best-front0end.zh-CN.md",
          "updatedTime": 1619051659000,
          "order": 7,
          "title": "前端最佳实践即将发布",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2020-02-29T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "🤷‍♂️ 为什么需要最佳实践",
              "heading": "🤷♂️-为什么需要最佳实践"
            },
            {
              "depth": 2,
              "value": "🏄‍♂️ 我们的解决方案",
              "heading": "♂️-我们的解决方案"
            },
            {
              "depth": 3,
              "value": "🕹 强约束",
              "heading": "-强约束"
            },
            {
              "depth": 3,
              "value": "🧬 约定化",
              "heading": "🧬-约定化"
            },
            {
              "depth": 2,
              "value": "🛒 其他的方案",
              "heading": "🛒-其他的方案"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "前端最佳实践即将发布"
      },
      {
        "path": "/en-US/blog/better-block",
        "component": require('../../../blog/better-block.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/better-block.en-US.md",
          "updatedTime": 1574587487000,
          "order": 5,
          "title": "Better Block",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-06-28T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "🚀 Faster",
              "heading": "-faster"
            },
            {
              "depth": 2,
              "value": "🌟 TypeScript to JavaScript",
              "heading": "-typescript-to-javascript"
            },
            {
              "depth": 2,
              "value": "💄 Better umi block list",
              "heading": "-better-umi-block-list"
            },
            {
              "depth": 4,
              "value": "Reference document",
              "heading": "reference-document"
            }
          ],
          "locale": "en-US"
        },
        "title": "Better Block"
      },
      {
        "path": "/blog/better-block",
        "component": require('../../../blog/better-block.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/better-block.zh-CN.md",
          "updatedTime": 1574587487000,
          "order": 5,
          "title": "Block 新升级",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-06-28T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "🚀 更快的安装速度",
              "heading": "-更快的安装速度"
            },
            {
              "depth": 2,
              "value": "🌟 TypeScript 转 JavaScript",
              "heading": "-typescript-转-javascript"
            },
            {
              "depth": 2,
              "value": "💄 umi block list 优化",
              "heading": "-umi-block-list-优化"
            },
            {
              "depth": 4,
              "value": "参考文档",
              "heading": "参考文档"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Block 新升级"
      },
      {
        "path": "/en-US/blog/change-theme",
        "component": require('../../../blog/change-theme.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/change-theme.en-US.md",
          "updatedTime": 1586175857000,
          "order": 1,
          "title": "Customize theme on runtime",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-05-07T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "background",
              "heading": "background"
            },
            {
              "depth": 2,
              "value": "Merge less",
              "heading": "merge-less"
            },
            {
              "depth": 2,
              "value": "Convert css-module",
              "heading": "convert-css-module"
            },
            {
              "depth": 2,
              "value": "Extracting fewer variables",
              "heading": "extracting-fewer-variables"
            },
            {
              "depth": 2,
              "value": "Existing question",
              "heading": "existing-question"
            },
            {
              "depth": 2,
              "value": "Future improvements",
              "heading": "future-improvements"
            }
          ],
          "locale": "en-US"
        },
        "title": "Customize theme on runtime"
      },
      {
        "path": "/blog/change-theme",
        "component": require('../../../blog/change-theme.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/change-theme.zh-CN.md",
          "updatedTime": 1586175857000,
          "order": 1,
          "title": "在线更换主题",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-05-07T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "背景",
              "heading": "背景"
            },
            {
              "depth": 2,
              "value": "合并 less",
              "heading": "合并-less"
            },
            {
              "depth": 2,
              "value": "转化 css-module",
              "heading": "转化-css-module"
            },
            {
              "depth": 2,
              "value": "抽取 less 变量",
              "heading": "抽取-less-变量"
            },
            {
              "depth": 2,
              "value": "现有的问题",
              "heading": "现有的问题"
            },
            {
              "depth": 2,
              "value": "未来的改进",
              "heading": "未来的改进"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "在线更换主题"
      },
      {
        "path": "/en-US/blog/deploy-pro",
        "component": require('../../../blog/deploy-pro.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/deploy-pro.en-US.md",
          "updatedTime": 1619001803000,
          "order": 6,
          "title": "How do we deploy open source projects?",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-11-02T00:00:00.000Z",
          "slugs": [
            {
              "depth": 3,
              "value": "Technical selection",
              "heading": "technical-selection"
            },
            {
              "depth": 3,
              "value": "Preview deployment",
              "heading": "preview-deployment"
            },
            {
              "depth": 3,
              "value": "Built-in variable",
              "heading": "built-in-variable"
            }
          ],
          "locale": "en-US"
        },
        "title": "How do we deploy open source projects?"
      },
      {
        "path": "/blog/deploy-pro",
        "component": require('../../../blog/deploy-pro.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/deploy-pro.zh-CN.md",
          "updatedTime": 1619001803000,
          "order": 6,
          "title": "我们是如何部署开源项目的?",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-11-02T00:00:00.000Z",
          "slugs": [
            {
              "depth": 3,
              "value": "技术选型",
              "heading": "技术选型"
            },
            {
              "depth": 3,
              "value": "Preview 的部署",
              "heading": "preview-的部署"
            },
            {
              "depth": 3,
              "value": "内置变量",
              "heading": "内置变量"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "我们是如何部署开源项目的?"
      },
      {
        "path": "/en-US/blog/dynamic-theme",
        "component": require('../../../blog/dynamic-theme.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/dynamic-theme.en-US.md",
          "updatedTime": 1575739131000,
          "order": 8,
          "title": "Black theme and dynamic switching",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-12-25T00:00:00.000Z",
          "slugs": [],
          "locale": "en-US"
        },
        "title": "Black theme and dynamic switching"
      },
      {
        "path": "/blog/dynamic-theme",
        "component": require('../../../blog/dynamic-theme.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/dynamic-theme.zh-CN.md",
          "updatedTime": 1575739131000,
          "order": 8,
          "title": "黑色主题和动态切换",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-12-25T00:00:00.000Z",
          "slugs": [],
          "locale": "zh-CN"
        },
        "title": "黑色主题和动态切换"
      },
      {
        "path": "/en-US/blog/layout-new-style",
        "component": require('../../../blog/layout-new-style.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/layout-new-style.en-US.md",
          "updatedTime": 1587539046000,
          "order": 8,
          "title": "Layout New Style",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2020-04-21T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "AntDesign Pro Modification Points",
              "heading": "antdesign-pro-modification-points"
            },
            {
              "depth": 2,
              "value": "The navigation menu section",
              "heading": "the-navigation-menu-section"
            },
            {
              "depth": 3,
              "value": "Structure and size",
              "heading": "structure-and-size"
            },
            {
              "depth": 3,
              "value": "Custom secondary actions",
              "heading": "custom-secondary-actions"
            },
            {
              "depth": 3,
              "value": "Menus are too long for too many interactions",
              "heading": "menus-are-too-long-for-too-many-interactions"
            },
            {
              "depth": 2,
              "value": "Top navigation interaction section",
              "heading": "top-navigation-interaction-section"
            },
            {
              "depth": 3,
              "value": "Structure and size",
              "heading": "structure-and-size-1"
            },
            {
              "depth": 3,
              "value": "Color version",
              "heading": "color-version"
            },
            {
              "depth": 3,
              "value": "Search interaction optimization",
              "heading": "search-interaction-optimization"
            },
            {
              "depth": 3,
              "value": "Utility Hover effect optimization",
              "heading": "utility-hover-effect-optimization"
            },
            {
              "depth": 2,
              "value": "Mixed Menu New Mode",
              "heading": "mixed-menu-new-mode"
            },
            {
              "depth": 3,
              "value": "Demo",
              "heading": "demo"
            }
          ],
          "locale": "en-US"
        },
        "title": "Layout New Style"
      },
      {
        "path": "/blog/layout-new-style",
        "component": require('../../../blog/layout-new-style.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/layout-new-style.zh-CN.md",
          "updatedTime": 1619416398000,
          "order": 8,
          "title": "Layout 的全新样式",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2020-04-21T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "AntDesign Pro  主要修改点",
              "heading": "antdesign-pro--主要修改点"
            },
            {
              "depth": 2,
              "value": "导航菜单部分",
              "heading": "导航菜单部分"
            },
            {
              "depth": 3,
              "value": "结构与尺寸",
              "heading": "结构与尺寸"
            },
            {
              "depth": 3,
              "value": "自定义辅助操作",
              "heading": "自定义辅助操作"
            },
            {
              "depth": 3,
              "value": "菜单过长过多交互",
              "heading": "菜单过长过多交互"
            },
            {
              "depth": 2,
              "value": "顶部导航交互部分",
              "heading": "顶部导航交互部分"
            },
            {
              "depth": 3,
              "value": "结构与尺寸",
              "heading": "结构与尺寸-1"
            },
            {
              "depth": 3,
              "value": "颜色版本",
              "heading": "颜色版本"
            },
            {
              "depth": 3,
              "value": "搜索交互优化",
              "heading": "搜索交互优化"
            },
            {
              "depth": 3,
              "value": "实用工具 Hover 效果优化",
              "heading": "实用工具-hover-效果优化"
            },
            {
              "depth": 2,
              "value": "混合菜单新模式",
              "heading": "混合菜单新模式"
            },
            {
              "depth": 3,
              "value": "样例",
              "heading": "样例"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Layout 的全新样式"
      },
      {
        "path": "/en-US/blog/new-pro-use",
        "component": require('../../../blog/new-pro-use.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/new-pro-use.en-US.md",
          "updatedTime": 1619001803000,
          "order": 1,
          "title": "Layout component of Ant Design Pro",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-05-08T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "Use",
              "heading": "use"
            },
            {
              "depth": 2,
              "value": "Advanced usage",
              "heading": "advanced-usage"
            },
            {
              "depth": 3,
              "value": "Custom Menu",
              "heading": "custom-menu"
            },
            {
              "depth": 4,
              "value": "menuDataRender Props",
              "heading": "menudatarender-props"
            },
            {
              "depth": 4,
              "value": "menuItemRender Props",
              "heading": "menuitemrender-props"
            },
            {
              "depth": 3,
              "value": "SettingDrawer",
              "heading": "settingdrawer"
            },
            {
              "depth": 3,
              "value": "PageContainer",
              "heading": "pagecontainer"
            },
            {
              "depth": 3,
              "value": "RouteContext",
              "heading": "routecontext"
            }
          ],
          "locale": "en-US"
        },
        "title": "Layout component of Ant Design Pro"
      },
      {
        "path": "/blog/new-pro-use",
        "component": require('../../../blog/new-pro-use.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/new-pro-use.zh-CN.md",
          "updatedTime": 1619001803000,
          "order": 1,
          "title": "Pro 的 Layout 组件",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-05-08T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            },
            {
              "depth": 2,
              "value": "高级用法",
              "heading": "高级用法"
            },
            {
              "depth": 3,
              "value": "自定义菜单",
              "heading": "自定义菜单"
            },
            {
              "depth": 4,
              "value": "menuDataRender Props",
              "heading": "menudatarender-props"
            },
            {
              "depth": 4,
              "value": "menuItemRender Props",
              "heading": "menuitemrender-props"
            },
            {
              "depth": 3,
              "value": "SettingDrawer",
              "heading": "settingdrawer"
            },
            {
              "depth": 3,
              "value": "PageContainer",
              "heading": "pagecontainer"
            },
            {
              "depth": 3,
              "value": "RouteContext",
              "heading": "routecontext"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "Pro 的 Layout 组件"
      },
      {
        "path": "/en-US/blog/protable",
        "component": require('../../../blog/protable.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/protable.en-US.md",
          "updatedTime": 1619001803000,
          "order": 7,
          "title": "Quickly Builds CRUD's",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2020-03-01T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "🤷‍♂️ Why Do You Make ProTable",
              "heading": "🤷♂️-why-do-you-make-protable"
            },
            {
              "depth": 2,
              "value": "🦄 更多的功能",
              "heading": "-更多的功能"
            }
          ],
          "locale": "en-US"
        },
        "title": "Quickly Builds CRUD's"
      },
      {
        "path": "/blog/protable",
        "component": require('../../../blog/protable.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/protable.zh-CN.md",
          "updatedTime": 1604371193000,
          "order": 7,
          "title": "ProTable 快速搭建 CRUD 的利器",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2020-03-01T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "🤷‍♂️ 为什么要做 ProTable",
              "heading": "🤷♂️-为什么要做-protable"
            },
            {
              "depth": 2,
              "value": "🦄 更多的功能",
              "heading": "-更多的功能"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "ProTable 快速搭建 CRUD 的利器"
      },
      {
        "path": "/en-US/blog/proxy",
        "component": require('../../../blog/proxy.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/proxy.en-US.md",
          "updatedTime": 1619001803000,
          "order": 7,
          "title": "Same-origin policy cross-domain and agent",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-11-24T00:00:00.000Z",
          "slugs": [
            {
              "depth": 3,
              "value": "Same-origin strategy",
              "heading": "same-origin-strategy"
            },
            {
              "depth": 3,
              "value": "Used in development",
              "heading": "used-in-development"
            },
            {
              "depth": 3,
              "value": "CORS",
              "heading": "cors"
            },
            {
              "depth": 4,
              "value": "express config",
              "heading": "express-config"
            },
            {
              "depth": 4,
              "value": "nginx config",
              "heading": "nginx-config"
            },
            {
              "depth": 4,
              "value": "java config",
              "heading": "java-config"
            },
            {
              "depth": 3,
              "value": "Advanced usage",
              "heading": "advanced-usage"
            }
          ],
          "locale": "en-US"
        },
        "title": "Same-origin policy cross-domain and agent"
      },
      {
        "path": "/blog/proxy",
        "component": require('../../../blog/proxy.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/proxy.zh-CN.md",
          "updatedTime": 1583932115000,
          "order": 7,
          "title": "同源策略 跨域与代理",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-11-24T00:00:00.000Z",
          "slugs": [
            {
              "depth": 3,
              "value": "同源策略",
              "heading": "同源策略"
            },
            {
              "depth": 3,
              "value": "在开发中使用",
              "heading": "在开发中使用"
            },
            {
              "depth": 3,
              "value": "CORS",
              "heading": "cors"
            },
            {
              "depth": 4,
              "value": "express 中的配置",
              "heading": "express-中的配置"
            },
            {
              "depth": 4,
              "value": "nginx 中的配置",
              "heading": "nginx-中的配置"
            },
            {
              "depth": 4,
              "value": "java 手动配置",
              "heading": "java-手动配置"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "同源策略 跨域与代理"
      },
      {
        "path": "/en-US/blog/use-eslint-typescript",
        "component": require('../../../blog/use-eslint-typescript.en-US.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/use-eslint-typescript.en-US.md",
          "updatedTime": 1619001803000,
          "order": 1,
          "title": "Let's use eslint",
          "group": {
            "title": "Blog",
            "path": "/en-US/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/en-US/blog",
            "order": 3
          },
          "time": "2019-06-21T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "Cause",
              "heading": "cause"
            },
            {
              "depth": 2,
              "value": "Result",
              "heading": "result"
            },
            {
              "depth": 2,
              "value": "Use",
              "heading": "use"
            }
          ],
          "locale": "en-US"
        },
        "title": "Let's use eslint"
      },
      {
        "path": "/blog/use-eslint-typescript",
        "component": require('../../../blog/use-eslint-typescript.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "blog/use-eslint-typescript.zh-CN.md",
          "updatedTime": 1619001803000,
          "order": 1,
          "title": "一起来用 eslint 吧",
          "group": {
            "title": "Blog",
            "path": "/blog/"
          },
          "nav": {
            "title": "Blog",
            "path": "/blog",
            "order": 3
          },
          "time": "2019-06-21T00:00:00.000Z",
          "slugs": [
            {
              "depth": 2,
              "value": "起因",
              "heading": "起因"
            },
            {
              "depth": 2,
              "value": "结果",
              "heading": "结果"
            },
            {
              "depth": 2,
              "value": "使用",
              "heading": "使用"
            }
          ],
          "locale": "zh-CN"
        },
        "title": "一起来用 eslint 吧"
      },
      {
        "path": "/en-US",
        "component": require('../../../README.md').default,
        "exact": true,
        "meta": {
          "locale": "en-US",
          "order": null,
          "filePath": "README.md",
          "updatedTime": 1620782846000,
          "componentName": "ant-design-pro-site",
          "slugs": [
            {
              "depth": 1,
              "value": "Ant Design Pro Site",
              "heading": "ant-design-pro-site"
            },
            {
              "depth": 3,
              "value": "Development",
              "heading": "development"
            },
            {
              "depth": 3,
              "value": "Deploy",
              "heading": "deploy"
            },
            {
              "depth": 3,
              "value": "Publish Components",
              "heading": "publish-components"
            }
          ],
          "title": "Ant Design Pro Site"
        },
        "title": "Ant Design Pro Site"
      },
      {
        "path": "/en-US/docs/proxy",
        "component": require('../../../docs/docs/proxy.zh-CN.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/docs/proxy.zh-CN.md",
          "updatedTime": 1623142785730,
          "order": 32,
          "title": "代理",
          "group": {
            "title": "后端集成",
            "path": "/en-US/docs"
          },
          "nav": {
            "title": "文档",
            "path": "/en-US/docs"
          },
          "slugs": [
            {
              "depth": 3,
              "value": "同源策略",
              "heading": "同源策略"
            },
            {
              "depth": 3,
              "value": "在开发中使用",
              "heading": "在开发中使用"
            },
            {
              "depth": 3,
              "value": "CORS",
              "heading": "cors"
            },
            {
              "depth": 4,
              "value": "express 中的配置",
              "heading": "express-中的配置"
            },
            {
              "depth": 4,
              "value": "nginx 中的配置",
              "heading": "nginx-中的配置"
            },
            {
              "depth": 4,
              "value": "java 手动配置",
              "heading": "java-手动配置"
            },
            {
              "depth": 3,
              "value": "高级用法",
              "heading": "高级用法"
            }
          ],
          "locale": "en-US"
        },
        "title": "代理"
      },
      {
        "path": "/en-US/config",
        "meta": {},
        "exact": true,
        "redirect": "/en-US/config/config"
      },
      {
        "path": "/config",
        "meta": {},
        "exact": true,
        "redirect": "/config/config"
      },
      {
        "path": "/en-US/docs/",
        "meta": {},
        "exact": true,
        "redirect": "/en-US/docs/overview"
      },
      {
        "path": "/en-US/docs",
        "meta": {},
        "exact": true,
        "redirect": "/en-US/docs/overview"
      },
      {
        "path": "/docs/",
        "meta": {},
        "exact": true,
        "redirect": "/docs/overview"
      },
      {
        "path": "/docs",
        "meta": {},
        "exact": true,
        "redirect": "/docs/overview"
      },
      {
        "path": "/en-US/blog/",
        "meta": {},
        "exact": true,
        "redirect": "/en-US/blog/change-theme"
      },
      {
        "path": "/en-US/blog",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/en-US/blog/change-theme"
      },
      {
        "path": "/blog/",
        "meta": {},
        "exact": true,
        "redirect": "/blog/change-theme"
      },
      {
        "path": "/blog",
        "meta": {
          "order": 3
        },
        "exact": true,
        "redirect": "/blog/change-theme"
      }
    ],
    "title": "Ant Design Pro",
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
