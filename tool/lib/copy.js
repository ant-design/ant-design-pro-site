const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function () {
  const pkg = JSON.parse(fs.readFileSync(`${cwd}/scaffold/package.json`, 'utf8'));
  const antdProPkg = JSON.parse(fs.readFileSync(`${cwd}/config/components/package.json`, 'utf8'));
  antdProPkg.version = pkg.version;
  antdProPkg.dependencies = pkg.dependencies;

  const dumps = [
    'antd',
    'react',
    'react-dom',
    'core-js',
    'dva',
    'qs',
    'react-document-title',
  ];

  dumps.forEach((dump) => {
    delete antdProPkg.dependencies[dump];
  });

  fs.writeFileSync(`${cwd}/config/components/package.json`, JSON.stringify(antdProPkg, null, 2), 'utf8');
};
