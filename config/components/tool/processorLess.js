#!/usr/bin/env node
/**
 * 这个方法用来处理 css-modlue
 * 由于没有开源插件，所以自己撸了一个
 */

const fs = require('fs-extra');
const path = require('path');
const getLocalIdentName = require('./getLocalIdentName');
const copyAntdthemes = require('./copyAntdthemes');
const AddlocalIdentName = require('./AddlocalIdentName');
const replacedefaultLess = require('./replacedefaultLess');

// read less file list
const lessArray = ['@import "./style/themes/default.less";'];

const loopAllLess = function (parents) {
  const paths = fs.readdirSync(path.join(__dirname, parents));
  paths.forEach((itemPath) => {
    if (itemPath === 'style' || itemPath === 'demo') {
      return;
    }
    // file status
    const fileStatus = fs.lstatSync(path.join(__dirname, parents, itemPath));
    // is file
    // is Directory
    if (fileStatus.isDirectory()) {
      loopAllLess(path.join(parents, itemPath));
      return;
    }
    // is less file
    if (itemPath.indexOf('.less') > -1) {
      const relaPath = path.join(__dirname, parents, itemPath);
      // post css add localIdentNameplugin
      const fileContent = replacedefaultLess(relaPath);
      // push less file
      lessArray.push(
        fileContent.replace('@import "../../style/themes/default.less";', '')
      );
      AddlocalIdentName(relaPath, fileContent, getLocalIdentName(relaPath));
    }
  });
};

// copy antd themes to lib
copyAntdthemes();

// covert less
loopAllLess('../lib');
