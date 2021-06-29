const fs = require('fs');
const path = require('path');
const fm = require('front-matter');
const dirPath = path.join(__dirname, '/docs/docs');
const filesPath = fs.readdirSync(dirPath);
const menu = {};
filesPath.forEach((filePath) => {
  const data = fs.readFileSync(path.join(dirPath, filePath), 'utf8');
  let { attributes } = fm(data);
  const { nav, group, title, order } = attributes;
  let targetPath = '';
  if (filePath.includes('en-US')) {
    targetPath = nav.path;
  } else {
    targetPath = `/zh-CN${nav.path}`;
  }
  if (!menu[targetPath]) {
    menu[targetPath] = [];
  }
  let groups = menu[targetPath];
  let resultGroup = groups.filter((item) => {
    return item.title === group.title;
  })[0];
  if (!resultGroup) {
    resultGroup = {
      title: group.title,
      children: [],
      order,
    };
    groups.push(resultGroup);
  }
  resultGroup.children.push({ order, path: `docs/${filePath}` });
  resultGroup.order = Math.min(resultGroup.order, order);
});
Object.keys(menu).forEach((key) => {
  menu[key].sort((a, b) => a.order - b.order);
  menu[key].forEach((group) => {
    group.children = group.children.sort((a, b) => a.order - b.order).map((child) => child.path);
  });
});
module.exports = menu;
