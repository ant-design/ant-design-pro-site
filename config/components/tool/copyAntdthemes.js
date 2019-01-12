const fs = require('fs-extra');
const path = require('path');

const copyAntdTheme = () => {
  const AntdThemePath = path.join(__dirname, '../../../node_modules/antd/lib/style/');
  const myThemesPath = path.join(__dirname, '../lib/style/');
  fs.copySync(`${AntdThemePath}/themes`, `${myThemesPath}/themes`);
  fs.copySync(`${AntdThemePath}/color`, `${myThemesPath}/color`);
};
module.exports = copyAntdTheme;
