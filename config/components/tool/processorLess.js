#!/usr/bin/env node
/**
 * 这个方法用来处理 css-modlue
 * 由于没有开源插件，所以自己撸了一个
 */
const path = require('path');
const glob = require('glob');
const getLocalIdentName = require('./getLocalIdentName');
const copyAntdthemes = require('./copyAntdthemes');
const AddlocalIdentName = require('./AddlocalIdentName');
const replacedefaultLess = require('./replacedefaultLess');

// read less file list
const lessArray = ['@import "./style/themes/default.less";'];
// copy antd themes to lib
copyAntdthemes();

// 寻找所有的 less 文件
glob.sync('../**/**.less', { ignore: '../**/node_modules/**' }).forEach(lessPath => {
  const relaPath = path.join(__dirname, '../', lessPath);
  // post css add localIdentNameplugin
  const fileContent = replacedefaultLess(relaPath);
  // push less file
  lessArray.push(fileContent.replace('@import "../../style/themes/default.less";', ''));
  AddlocalIdentName(relaPath, fileContent, getLocalIdentName(relaPath));
});
