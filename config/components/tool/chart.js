/**
 * 将所有的图标组件样式打包到一个style中
 * 为了实现 babel-plugin-import
 */

const fs = require('fs');
const path = require('path');

const charts = () => {
  const chartPath = path.join(__dirname, '../lib/Charts');
  const cssPathString = [];
  const lessPathString = [];
  const paths = fs.readdirSync(chartPath);
  paths.forEach((chartItem) => {
    if (
      chartItem !== 'demo' &&
      chartItem !== 'style' &&
      fs.lstatSync(`${chartPath}/${chartItem}`).isDirectory()
    ) {
      if (fs.existsSync(`${chartPath}/${chartItem}/style/style/css.js`)) {
        cssPathString.push(`require('../${chartItem}/style/css')`);
      }
      if (fs.existsSync(`${chartPath}/${chartItem}/style/index.less`)) {
        lessPathString.push(`@import '../${chartItem}/style/index.less';`);
      }
    }
  });
  const chartCssPath = path.join(__dirname, '../lib/Charts/style/css.js');
  const chartLessPath = path.join(__dirname, '../lib/Charts/style/index.less');
  const cssString = fs.readFileSync(chartCssPath);
  const lessString = fs.readFileSync(chartLessPath);

  fs.writeFileSync(chartCssPath, `${cssPathString.join('\n')}\n${cssString}`);
  fs.writeFileSync(
    chartLessPath,
    `${lessPathString.join('\n')}\n${lessString}`
  );
};
module.exports = charts;
