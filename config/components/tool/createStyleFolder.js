/**
 * 将js 中引入的 antd 组件加入到 css 和 less 中
 * antd/lib/button
 * 在 css.js 中加入 require('antd/lib/button/style/css')
 * 在 less 中加入 @import '~antd/lib/button/style/index.less';
 */
const fs = require('fs-extra');
const pathTool = require('path');
const less2css = require('./less2css');
const mergeChartsList = require('./mergeChartsList');

mergeChartsList();

const appendContent = (path, content) => {
  let lessContent = '';
  if (fs.existsSync(path)) {
    lessContent = fs.readFileSync(path);
  }
  lessContent += `${content}\n`;
  fs.writeFileSync(path, lessContent);
};

const createStyleFolder = function(parents) {
  const paths = fs.readdirSync(pathTool.join(__dirname, parents));
  paths.forEach(path => {
    if (path === '_utils' || path === 'style') {
      return;
    }
    const filePath = pathTool.join(__dirname, parents, path);
    const fileStatus = fs.lstatSync(filePath);
    if (fileStatus.isFile() && path.includes('.less')) {
      const stylePath = pathTool.join(__dirname, parents, 'style');
      if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath);
      }
      fs.moveSync(filePath, pathTool.join(stylePath, path));
      less2css(stylePath);
      // add  require to css.js
      const cssJsPath = pathTool.join(stylePath, 'css.js');
      const cssContent = `require('./${path.replace('less', 'css')}');`;
      appendContent(cssJsPath, cssContent);
      // add  require to index.js
      const lessJsPath = pathTool.join(stylePath, 'index.js');
      const lessContent = `require('./${path}');`;
      appendContent(lessJsPath, lessContent);
    }
    if (fileStatus.isDirectory()) {
      if (path === 'style') {
        return;
      }
      createStyleFolder(pathTool.join(parents, path));
    }
  });
};
module.exports = {
  createStyleFolder,
  appendContent,
};
