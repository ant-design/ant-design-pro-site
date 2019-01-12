const postcss = require('postcss');
const prettier = require('prettier');
const less = require('postcss-less-engine');
const fs = require('fs-extra');
const path = require('path');

const less2css = function(stylePath) {
  let lessPath = `${stylePath}/index.less`;
  let cssPath = `${stylePath}/index.css`;
  if (!fs.existsSync(lessPath)) {
    lessPath = `${stylePath}/NoticeList.less`;
    cssPath = `${stylePath}/NoticeList.css`;
  }
  let lessString = fs.readFileSync(lessPath, 'utf8');
  // 修改 less 导入路径为绝对路径
  lessString = lessString.replace(
    '../../style/themes/default.less',
    path.join(__dirname, '../lib/style/themes/default.less')
  );
  postcss([less({ strictMath: true })])
    .process(lessString, { parser: less.parser, from: stylePath })
    .then(result => {
      // creat to style folder
      if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath);
      }
      const content = prettier.format(result.css, { parser: 'css' });
      fs.writeFileSync(cssPath, content);
    });
};

module.exports = less2css;
