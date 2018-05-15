const fs = require('fs-extra');
const path = require('path');

const copyAntdthemes = () => {
  const AntdthemesPath = path.join(
    __dirname,
    '../../../node_modules/antd/lib/style/'
  );
  const myThemesPath = path.join(__dirname, '../lib/style/');
  fs.copySync(`${AntdthemesPath}/themes`, `${myThemesPath}/themes`);
  fs.copySync(`${AntdthemesPath}/color`, `${myThemesPath}/color`);
};
module.exports = copyAntdthemes;
