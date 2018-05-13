#!/usr/bin/env node
/**
 * 这个方法用来处理 css-modlue
 * 由于没有开源插件，所以自己撸了一个
 */
const prettier = require('prettier');
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
          // 将global的 节点加到 parents
          if (item.selector === ':global') {
            const parentNodes = item.parent.nodes;
            const childrenNodes = item.nodes;
            const index = parentNodes.findIndex((node) => {
              return node.selector === ':global';
            });
            childrenNodes.unshift(index, 1);
            Array.prototype.splice.apply(parentNodes, item.nodes);
            item.parent.nodes = parentNodes;
            return;
          }
          if (item.selector) {
            if (item.selector.includes(':global(')) {
              // converted :global(.className）
              const className = item.selector.match(/:global\((\S*)\)/)[1];
              item.selector = className;
              return;
            }
            const className = item.selector.replace(
              /\./g,
              `.${localIdentName}`
            );
            item.selector = className;
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
      // creact to style folder
      const stylePath = `${path.dirname(lessPath)}`;
      if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath);
      }
      const content = prettier.format(result.css, { parser: 'css' });
      fs.writeFileSync(`${stylePath}/index.css`, content);
      fs.writeFileSync(`${stylePath}/css.js`, "require('./index.css');");
    });
};

const lessAddlocalIdentName = function (lessPath, lessText, localIdentName) {
  postcss([localIdentNameplugin({ localIdentName })])
    .process(lessText, { syntax })
    .then((result) => {
      if (fs.existsSync(lessPath)) {
        fs.unlinkSync(lessPath);
      }
      const stylePath = path.join(lessPath, '../', 'style');
      // creact style folder
      if (!fs.existsSync(stylePath)) {
        fs.mkdirSync(stylePath);
      }
      const content = prettier.format(result.content, { parser: 'css' });
      // writer addlocalIdentName less
      fs.writeFileSync(`${stylePath}/index.less`, content);
      // creact index.js
      fs.writeFileSync(`${stylePath}/index.js`, "require('./index.less');");
      // less to css
      less2css(`${stylePath}/index.less`);
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
