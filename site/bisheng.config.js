const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

const isDev = process.env.NODE_ENV === 'development';

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
      //'dva/router': 'react-router',
      //'react-router': 'react-router/umd/ReactRouter',
    };

    config.externals = Object.assign({}, config.externals, {
      react: 'React',
      'react-dom': 'ReactDOM',
      'bizcharts': 'BizCharts',
      '@antv/data-set': 'DataSet',
      'react-router-dom': 'ReactRouterDOM',
    });

    // components 下面的走 css module 其他不变
    config.module.loaders.forEach((loader) => {
      if (
        typeof loader.test === 'function' &&
        loader.test.toString().indexOf('\\.less$') > -1
      ) {
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

    // config.plugins.push(new CSSSplitWebpackPlugin({ size: 4000 }));

    return config;
  },
  htmlTemplateExtraData: {
    isDev,
  },
};
