module.exports = function (localName, path) {
  const antdProPath = path.match(/scaffold\/src\/components\/(.*)/)[1];
  const arr = antdProPath.split('/').map(a => a.replace(/([A-Z])/g, '-$1')).map(a => a.toLowerCase());
  arr.pop();
  return `antd-pro${arr.join('-')}-${localName}`;
};
