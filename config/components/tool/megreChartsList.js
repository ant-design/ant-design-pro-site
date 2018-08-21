/**
 * 将所有的图标组件样式打包到一个style中
 * 为了实现 babel-plugin-import
 */

const fs = require('fs');
const path = require('path');

const megreChartsList = () => {
  const chartPath = path.join(__dirname, '../lib/Charts');
  const lessPathString = ['@import "../../style/themes/default.less";'];

  const paths = fs.readdirSync(chartPath);
  paths.forEach((chartItem) => {
    if (
      chartItem !== 'demo' &&
      fs.lstatSync(`${chartPath}/${chartItem}`).isDirectory()
    ) {
      if (fs.existsSync(`${chartPath}/${chartItem}/index.less`)) {
        const constent = fs
          .readFileSync(`${chartPath}/${chartItem}/index.less`)
          .toString();
        lessPathString.push(
          constent.replace('@import "../../style/themes/default.less";', '')
        );
        fs.unlinkSync(`${chartPath}/${chartItem}/index.less`);
      }
    }
  });
  lessPathString.push(
    fs
      .readFileSync(`${chartPath}/index.less`)
      .toString()
      .replace('@import "../../style/themes/default.less";', '')
  );
  fs.writeFileSync(`${chartPath}/index.less`, lessPathString.join('\n'));
};
module.exports = megreChartsList;
