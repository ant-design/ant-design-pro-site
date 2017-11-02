const webpack = require('atool-build/lib/webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const cwd = process.cwd();
const filename = 'ant-design-pro';

module.exports = function (webpackConfig) {

  webpackConfig.entry = {
    [filename]: './umd.js',
    [filename + '.min']: './umd.js',
  };

  webpackConfig.output.libraryTarget = 'umd';
  webpackConfig.output.filename = '[name].js';

  if (!webpackConfig.output.externals) {
    webpackConfig.output.externals = {};
  }
  webpackConfig.output.externals['react'] = 'React';
  webpackConfig.output.externals['React'] = 'React';
  webpackConfig.output.externals['ReactDOM'] = 'ReactDOM';
  webpackConfig.output.externals['react-dom'] = 'ReactDOM';
  webpackConfig.output.externals['antd'] = 'antd';

  // remove CommonsChunkPlugin
  webpackConfig.plugins.splice(0, 2);

  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function (loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.test = /\.dont\.exist\.file/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.test = /\.less$/;
      loader.loader = loader.loader.replace('localIdentName=[local]___[hash:base64:5]', 'localIdentName=antd-pro-[local]')
    }
  });

  // compress
  webpackConfig.plugins.push(
    new ExtractTextPlugin(filename + '.css', {
      disable: false,
      allChunks: true,
    })
  );
  webpackConfig.plugins.push(
    new ExtractTextPlugin(filename + '.min.css', {
      disable: false,
      allChunks: true,
    })
  );
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false,
      },
    })
  );
  webpackConfig.plugins.push(
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
    })
  );

  // 返回 webpack 配置对象
  return webpackConfig;
};
