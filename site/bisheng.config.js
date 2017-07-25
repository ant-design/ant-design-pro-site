const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

module.exports = {
  port: 8001,
  source: {
    components: './scaffold/src/components',
    docs: './docs',
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    categoryOrder: {
      设计原则: 2,
      Principles: 2,
    },
    typeOrder: {
      General: 0,
      Layout: 1,
      Navigation: 2,
      'Data Entry': 3,
      'Data Display': 4,
      Feedback: 5,
      Localization: 6,
      Other: 7,
    },
  },
  filePathMapper(filePath) {
    return filePath;
  },
  doraConfig: {},
  webpackConfig(config) {
    config.resolve.alias = {
      // 'antd/lib': path.join(process.cwd(), 'components'),
      // antd: path.join(process.cwd(), 'index'),
      'antd-pro': path.join(process.cwd(), 'config/components/index.js'),
      site: path.join(process.cwd(), 'site'),
      'react-router': 'react-router/umd/ReactRouter',
    };

    config.externals = {
      'react-router-dom': 'ReactRouterDOM',
    };

    config.babel.plugins.push([
      require.resolve('babel-plugin-transform-runtime'),
      {
        polyfill: false,
        regenerator: true,
      },
    ]);

    // components 下面的走 css module 其他不变
    config.module.loaders.forEach((loader) => {
      if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
        if (loader.exclude) {
          loader.exclude.push(/components/);
        } else {
          loader.exclude = [/components/];
        }
      }
      if (loader.test.toString() === '/\\.module\\.less$/') {
        loader.test = /components.*.less$/;
      }
    });

    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    return config;
  },
};
