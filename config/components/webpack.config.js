// This config is for building dist files
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');
const postcssConfig = require('antd-tools/lib/postcssConfig');
const deepAssign = require('deep-assign');

const babelDecorators = require('babel-plugin-transform-decorators-legacy');

const config = getWebpackConfig(false);

const cwd = process.cwd();
const filename = 'ant-design-pro';

const webpackConfig = config[0];

webpackConfig.entry = {
  [filename + '.min']: './umd.js',
};
//
//webpackConfig.output.libraryTarget = 'umd';
//webpackConfig.output.filename = '[name].js';

// remove CommonsChunkPlugin
//webpackConfig.plugins.splice(0, 2);

// Parse all less files as css module.
webpackConfig.module.rules.forEach(function (rule, index) {
  if (rule.test.toString() === '/\\.jsx?$/') {
    const len = rule.options.plugins.length - 1;
    rule.options.plugins.splice(len - 2, len - 1);
    rule.options.plugins.push(require.resolve('babel-plugin-transform-decorators-legacy'));
    rule.options.plugins.push(require.resolve('babel-plugin-transform-class-properties'));
  }

  if (rule.test.toString() === '/\\.less$/') {
    rule.use = ExtractTextPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: '[path]',
            getLocalIdent: (context, localIdentName, localName, options) => {
              const antdProPath = context.resourcePath.match(/scaffold\/src\/components\/(.*)/)[1];
              const arr = antdProPath.split('/').map(a => a.replace(/([A-Z])/g, '-$1')).map(a => a.toLowerCase());
              arr.pop();
              return `antd-pro${arr.join('-')}-${localName}`;
            }
          },
        },
        {
          loader: 'postcss-loader',
          options: Object.assign({}, postcssConfig, { sourceMap: true }),
        },
        {
          loader: 'less-loader',
          options: {
            sourceMap: true,
          },
        },
      ],
    })
  }
});

// compress
//webpackConfig.plugins.push(
//  new ExtractTextPlugin(filename + '.css', {
//    disable: false,
//    allChunks: true,
//  })
//);
//webpackConfig.plugins.push(
//  new ExtractTextPlugin(filename + '.min.css', {
//    disable: false,
//    allChunks: true,
//  })
//);
//webpackConfig.plugins.push(
//  new webpack.optimize.UglifyJsPlugin({
//    include: /\.min\.js$/,
//    minimize: true,
//    compress: {
//      warnings: false,
//    },
//  })
//);
//webpackConfig.plugins.push(
//  new OptimizeCssAssetsPlugin({
//    assetNameRegExp: /\.min\.css$/,
//  })
//);

const uncompressedConfig = deepAssign({}, webpackConfig);
uncompressedConfig.entry = {
  [filename]: './umd.js',
};
uncompressedConfig.plugins = uncompressedConfig.plugins.concat();

uncompressedConfig.plugins.splice(uncompressedConfig.plugins.length - 4, uncompressedConfig.plugins.length - 1);

module.exports = [webpackConfig, uncompressedConfig];
