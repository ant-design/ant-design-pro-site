#!/usr/bin/env node
/**
 * 这个方法用来处理 css-modlue
 * 由于没有开源插件，所以自己撸了一个
 */
const path = require('path');
const glob = require('glob');
const getLocalIdentName = require('./getLocalIdentName');
const copyAntdThemes = require('./copyAntdthemes');
const AddLocalIdentName = require('./AddLocalIdentName');
const replaceDefaultLess = require('./replaceDefaultLess');

// copy antd themes to lib
copyAntdThemes();

// 寻找所有的 less 文件
glob
  .sync(path.join(__dirname, '../lib/**/**.less'), { ignore: ['node_modules'] })
  .forEach(lessPath => {
    if (lessPath.includes('style')) {
      return;
    }
    // post css add localIdentNameplugin
    const fileContent = replaceDefaultLess(lessPath);
    // push less file
    AddLocalIdentName(lessPath, fileContent, getLocalIdentName(lessPath));
  });
