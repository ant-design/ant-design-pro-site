const path = require('path');
const CSSSplitWebpackPlugin = require('css-split-webpack-plugin').default;

const isDev = process.env.NODE_ENV === 'development';

const pluginAntdConfig = {
  babelConfig: JSON.stringify({
    plugins: [
      'transform-class-properties',
      'transform-object-rest-spread',
      'transform-decorators-legacy',
    ],
  }),
};

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
    },
  },
  filePathMapper(filePath) {
    return filePath;
  },
  doraConfig: {},
  plugins: [
    `bisheng-plugin-react?${JSON.stringify(pluginAntdConfig)}`,
  ],
  webpackConfig(config) {
    config.resolve.alias = {
      'ant-design-pro/lib': path.join(process.cwd(), 'scaffold/src/components'),
      'ant-design-pro': path.join(process.cwd(), 'config/components/index'),
      site: path.join(process.cwd(), 'site'),
      'dva/router': 'react-router',
      'react-router': 'react-router/umd/ReactRouter',
    };

    config.externals = config.externals || {};
    config.externals['react-router-dom'] = 'ReactRouterDOM';

    config.externals = Object.assign({}, config.externals, {
      react: 'React',
      'react-dom': 'ReactDOM',
      g2: 'G2',
      'g-cloud': 'Cloud',
      'g2-plugin-slider': 'G2.Plugin.slider',
    });

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
  htmlTemplateExtraData: {
    isDev,
  },
};
