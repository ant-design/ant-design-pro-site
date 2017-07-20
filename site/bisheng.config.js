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
  doraConfig: {
  },
  webpackConfig(config, webpack) {

    //config.babel.plugins.push('transform-runtime');
    //config.babel.plugins.push(['antd', {
    //  style: 'css'  // if true, use less
    //}]);

    config.resolve.alias = {
      //'antd/lib': path.join(process.cwd(), 'components'),
      //antd: path.join(process.cwd(), 'index'),
      'antd-pro': path.join(process.cwd(), 'ant-design-pro'),
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

    config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    return config;
  },
};
