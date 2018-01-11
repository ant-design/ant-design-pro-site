const fs = require('fs-extra');
// const shell = require('shelljs');

const cwd = process.cwd();

module.exports = function () {
  const pkg = JSON.parse(fs.readFileSync(`${cwd}/scaffold/package.json`, 'utf8'));
  const antdProPkg = JSON.parse(fs.readFileSync(`${cwd}/config/components/package.config.json`, 'utf8'));
  antdProPkg.version = pkg.version;

  // shell.exec('./node_modules/.bin/autod -p ./scaffold/src/components/', (code, stdout, stderr) => {
  //   if (!stderr) {
  //     const deps = JSON.parse(stdout.match(/{[^{}]*}/)[0]);
  //     antdProPkg.dependencies = deps;
  //   } else {
  //     throw new Error(stderr);
  //   }
  // });

  antdProPkg.dependencies = pkg.dependencies;

  const dumps = [
    'antd',
    'react',
    'react-dom',
    'core-js',
    'dva',
    'dva-loading',
  ];

  dumps.forEach((dump) => {
    delete antdProPkg.dependencies[dump];
  });

  fs.writeFileSync(`${cwd}/config/components/package.json`, JSON.stringify(antdProPkg, null, 2), 'utf8');
};
