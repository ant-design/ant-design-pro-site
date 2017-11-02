const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function () {
  const pkg = JSON.parse(fs.readFileSync(`${cwd}/scaffold/package.json`, 'utf8'));
  const antdProPkg = JSON.parse(fs.readFileSync(`${cwd}/config/components/package.json`, 'utf8'));
  antdProPkg.version = pkg.version;
  antdProPkg.dependencies = pkg.dependencies;
  delete antdProPkg.dependencies.antd;
  delete antdProPkg.dependencies.react;
  delete antdProPkg.dependencies['react-dom'];
  delete antdProPkg.dependencies['core-js'];
  delete antdProPkg.dependencies.dva;
  delete antdProPkg.dependencies.qs;
  delete antdProPkg.dependencies['react-document-title'];
  fs.writeFileSync(`${cwd}/config/components/package.json`, JSON.stringify(antdProPkg, null, 2), 'utf8');
};
