const path = require('path');
const fs = require('fs');
const replaceLib = require('antd-tools/lib/replaceLib');
const isDev = process.env.NODE_ENV === 'development';

function alertBabelConfig(rules) {
  rules.forEach(rule => {
    if (rule.loader && rule.loader === 'babel-loader') {
      if (rule.options.plugins.indexOf(replaceLib) === -1) {
        rule.options.plugins.push(replaceLib);
      }
      rule.options.plugins = rule.options.plugins.filter(
        plugin => !plugin.indexOf || plugin.indexOf('babel-plugin-add-module-exports') === -1
      );
    } else if (rule.use) {
      alertBabelConfig(rule.use);
    }
  });
}

module.exports = {
  port: 8001,
  root: '/',
  source: {
    components: './scaffold/src/components',
    docs: './docs',
  },
  theme: './site/theme',
  htmlTemplate: './site/theme/static/template.html',
  themeConfig: {
    root: '/',
    isDev,
    typeOrder: {
      入门: 0,
      进阶: 1,
      其他: 2,
      Basic: 0,
      Advance: 1,
      Other: 2,
    },
  },
  filePathMapper(filePath) {
    if (filePath === '/index.html') {
      return ['/index.html', '/index-cn.html'];
    }
    if (filePath.endsWith('/index.html')) {
      return [filePath, filePath.replace(/\/index\.html$/, '-cn/index.html')];
    }
    if (filePath !== '/404.html' && filePath !== '/index-cn.html') {
      return [filePath, filePath.replace(/\.html$/, '-cn.html')];
    }
    return filePath;
  },
  webpackConfig(config) {
    config.resolve.alias = {
      'ant-design-pro/lib': path.join(process.cwd(), 'scaffold/src/components'),
      'ant-design-pro': path.join(process.cwd(), 'config/components/index'),
      site: path.join(process.cwd(), 'site'),
    };

    // components 下面的走 css module 其他不变
    config.module.rules.forEach(loader => {
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

    alertBabelConfig(config.module.rules);

    if (isDev) {
      config.devtool = 'source-map';
    }

    config.externals = {
      '@antv/g2': 'G2',
      '@antv/data-set': 'DataSet',
      react: 'React',
      bizcharts: 'BizCharts',
      'react-dom': 'ReactDOM',
      moment: 'moment',
      antd: 'antd',
    };

    return config;
  },
  htmlTemplateExtraData: {
    isDev,
  },
};
