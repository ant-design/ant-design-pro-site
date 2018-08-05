/**
 * 将js 中引入的 antd 组件加入到 css 和 less 中
 * antd/lib/button
 * 在 css.js 中加入 require('antd/lib/button/style/css')
 * 在 less 中加入 @import '~antd/lib/button/style/index.less';
 */
const fs = require('fs');
const pathTool = require('path');
const { createStyleFolder, appentContent } = require('./createStyleFolder');

createStyleFolder('../lib');
// 所有使用过的 ant 组件
// 之所以是个对象是为了去重
const antdLibMap = {};

const addAntlibtoStyle = function (parentsFolder) {
  const ChartsMap = {};
  const loop = (parents) => {
    const paths = fs.readdirSync(pathTool.join(__dirname, parents));
    paths.forEach((path) => {
      if (path === '_utils') {
        return;
      }
      const fileStatus = fs.lstatSync(pathTool.join(__dirname, parents, path));
      if (fileStatus.isFile() && path.indexOf('.js') > -1) {
        const relaPath = pathTool.join(__dirname, parents, path);
        const jsString = fs.readFileSync(relaPath).toString();
        const execArray = jsString.match(/(antd\/lib\/)(\w*((-)*\w+)*)/gi);
        if (!execArray) {
          return;
        }
        if (relaPath.includes('Charts')) {
          execArray.forEach((antdLib) => {
            antdLibMap[antdLib] = true;
            ChartsMap[antdLib] = true;
          });
          return;
        }
        const cssPathString = [];
        const lessPathString = [];

        execArray.forEach((antdLib) => {
          antdLibMap[antdLib] = true;
          cssPathString.push(`require('${antdLib}/style/css')`);
          lessPathString.push(`require('${antdLib}/style/index');`);
        });
        const stylePath = pathTool.join(__dirname, parents, 'style');
        if (stylePath.includes('style/style')) {
          return false;
        }
        if (!fs.existsSync(stylePath)) {
          fs.mkdirSync(stylePath);
        }
        // appent to css.js
        const cssJsPath = pathTool.join(__dirname, parents, 'style/css.js');
        appentContent(cssJsPath, cssPathString.join('\n'));

        // appent to index.js
        const lessJsPath = pathTool.join(__dirname, parents, 'style/index.js');
        appentContent(lessJsPath, lessPathString.join('\n'));
      }
      if (fileStatus.isDirectory()) {
        loop(pathTool.join(parents, path));
      }
    });
  };
  loop(parentsFolder);

  const cssPathString = [];
  const lessPathString = [];
  Object.keys(ChartsMap).forEach((antdLib) => {
    cssPathString.push(`require('${antdLib}/style/css')`);
    lessPathString.push(`require('${antdLib}/style/index');`);
  });
  // appent to css.js
  const cssJsPath = pathTool.join(__dirname, '../lib/Charts', 'style/css.js');
  appentContent(cssJsPath, cssPathString.join('\n'));

  // appent to index.js
  const lessJsPath = pathTool.join(__dirname, '../lib/Charts', 'style/index.js');
  appentContent(lessJsPath, lessPathString.join('\n'));
};

addAntlibtoStyle('../lib');
