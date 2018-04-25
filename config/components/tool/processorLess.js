#!/usr/bin/env node

const syntax = require('postcss-less');
const less = require('postcss-less-engine');
const postcss = require('postcss');
const fs = require('fs');
const path = require('path');

const indexLessPath = path.join(__dirname, '../lib/index.less');

// if index.less exists delete it
if (fs.existsSync(indexLessPath)) {
  fs.unlinkSync(indexLessPath);
}
const localIdentNameplugin = postcss.plugin(
  'localIdentNameplugin',
  ({ localIdentName }) => {
    return (lessAST) => {
      // loop add localIdentName
      const loop = (nodes) => {
        nodes.forEach((item) => {
          // Not converted :global
          if (item.nodes && item.selector !== ':global') {
            loop(item.nodes);
          }
          if (item.selector && item.selector !== ':global') {
            // Not converted :global(.className）
            let className = item.selector.replace(/:global\(\./g, '&&&');
            className = className.replace(/\./g, `.${localIdentName}`);
            item.selector = className.replace(/&&&/g, ':global(.');
          }
        });
      };
      loop(lessAST.nodes);
    };
  }
);

const less2css = function (lessPath) {
  let lessString = fs.readFileSync(lessPath, 'utf8');
  const antdLessPath = `@import '${path.join(
    __dirname,
    '../../../'
  )}/node_modules/`;
  lessString = lessString.replace("@import '~", antdLessPath);
  postcss([less({ strictMath: true })])
    .process(lessString, { parser: less.parser })
    .then((result) => {
      fs.writeFileSync(lessPath.replace('.less', '.css'), result.css);
      fs.writeFileSync(
        `${path.dirname(lessPath)}/css.js`,
        "require('./index.css');"
      );
    });
};

const lessAddlocalIdentName = function (lessPath, lessText, localIdentName) {
  postcss([localIdentNameplugin({ localIdentName })])
    .process(lessText, { syntax })
    .then((result) => {
      if (fs.existsSync(lessPath)) {
        fs.unlinkSync(lessPath);
      }
      // writer addlocalIdentName less
      fs.writeFileSync(lessPath, result.content);
      less2css(lessPath);
    });
};

const getLocalIdentName = function (lessPath) {
  const antdProPath = lessPath.match(/config\/components\/lib\/(.*)/)[1];
  const arr = antdProPath
    .split('/')
    .map(a => a.replace(/([A-Z])/g, '-$1'))
    .map(a => a.toLowerCase());
  arr.pop();
  return `antd-pro${arr.join('-')}-`.replace('--', '-');
};

// const antdLessPath = `@import "${path.join(__dirname, '../')}/node_modules/`;
const replaceTilde = function (lessPath) {
  const fileContent = fs.readFileSync(lessPath).toString();
  return fileContent;
};
// read less file list
const lessArray = [];

const loopAllLess = function (parents) {
  const paths = fs.readdirSync(path.join(__dirname, parents));
  paths.forEach((itemPath) => {
    // file status
    const fileStatus = fs.lstatSync(path.join(__dirname, parents, itemPath));
    // is file
    if (fileStatus.isFile()) {
      // is less file
      if (itemPath.indexOf('.less') > -1) {
        const relaPath = path.join(__dirname, parents, itemPath);
        // push less file
        lessArray.push(
          `@import "${path.join(parents, itemPath).replace('../lib/', './')}";`
        );
        // post css add localIdentNameplugin
        const fileContent = replaceTilde(relaPath);
        lessAddlocalIdentName(
          relaPath,
          fileContent,
          getLocalIdentName(relaPath)
        );
      }
    }
    // is Directory
    if (fileStatus.isDirectory()) {
      loopAllLess(path.join(parents, itemPath));
    }
  });
};

// loop read all less
loopAllLess('../lib');

// generate /lib/index.less
fs.writeFileSync(indexLessPath, lessArray.join('\n'));
fs.copyFileSync(
  path.join(__dirname, '../ant-design-pro.less'),
  path.join(__dirname, '../dist/ant-design-pro.less')
);
