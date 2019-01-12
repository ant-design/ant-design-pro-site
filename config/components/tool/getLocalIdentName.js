module.exports = function(path) {
  const antdProPath = path.match(/config\/components\/lib\/(.*)/)[1];
  const arr = antdProPath
    .split('/')
    .map(a => a.replace(/([A-Z])/g, '-$1'))
    .map(a => a.toLowerCase());
  arr.pop();
  return `antd-pro${arr.join('-')}-`.replace('--', '-');
};
