const isProduction = process.env.NODE_ENV === 'production';

const isDeploy = process.env.SITE_DEPLOY === 'TRUE';
const menus = require('./formatMenu')
export default {
  title: 'Ant Design Pro',
  mode: 'site',
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  metas: [
    {
      property: 'og:site_name',
      content: 'Ant Design Pro',
    },
    {
      'data-rh': 'keywords',
      property: 'og:image',
      content: 'https://procomponents.ant.design/icon.png',
    },
    {
      property: 'og:description',
      content: '🏆 让中后台开发更简单',
    },
    {
      name: 'keywords',
      content: '中后台,admin,Ant Design,ant design,Table,react,alibaba',
    },
    {
      name: 'description',
      content: '🏆 让中后台开发更简单 包含 table form 等多个组件。',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style"',
      content: 'black-translucent',
    },
  ],
  alias: process.env === 'development' ? alias : {},
  // 用于切换 antd 暗黑模式
  // antd: {
  //   dark: true,
  // },
  resolve: {
    includes: ['docs', 'config', 'blog'],
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'en-US': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/ant-design-pro',
      },
    ],
    'zh-CN': [
      null,
      {
        title: 'GitHub',
        path: 'https://github.com/ant-design/ant-design-pro',
      },
    ],
  },
  analytics: isProduction
    ? {
        ga: 'UA-72788897-5',
      }
    : false,
  hash: true,
  ssr: isDeploy ? {} : undefined,
  exportStatic: {},
  targets: {
    chrome: 80,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
  theme: {
    '@s-site-menu-width': '258px',
  },
  ignoreMomentLocale: true,
  headScripts: ['https://gw.alipayobjects.com/os/antfincdn/fdj3WlJd5c/darkreader.js'],
  externals: { darkreader: 'window.DarkReader' },

  webpack5: {},
  fastRefresh: {},
  lessLoader: {
    test: /\.less$/i,
    loader: [
      // compiles Less to CSS
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
  postcssLoader: {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
  menus
};
