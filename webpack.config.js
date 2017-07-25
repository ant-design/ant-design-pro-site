// This config is for building dist files
const webpack = require('webpack');
const getWebpackConfig = require('antd-tools/lib/getWebpackConfig');

// noParse still leave `require('./locale' + name)` in dist files
// ignore is better
// http://stackoverflow.com/q/25384360
function ignoreMomentLocale(webpackConfig) {
  delete webpackConfig.module.noParse;
  webpackConfig.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
}

module.exports = function (webpackConfig) {
  webpackConfig = getWebpackConfig(webpackConfig, true);

  if (process.env.RUN_ENV === 'PRODUCTION') {
    webpackConfig.forEach((config) => {
      ignoreMomentLocale(config);
    });
  }
  return webpackConfig;
};
