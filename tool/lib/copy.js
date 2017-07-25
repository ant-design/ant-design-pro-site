const fs = require('fs-extra');
const beautify = require('js-beautify').js_beautify;

const cwd = process.cwd();

module.exports = function () {
  const pkg = JSON.parse(fs.readFileSync(`${cwd}/scaffold/package.json`, 'utf8'));
  const antdProPkg = JSON.parse(fs.readFileSync(`${cwd}/config/components/package.json`, 'utf8'));

  antdProPkg.dependencies = pkg.dependencies;

  const newAntdProPkg = beautify(JSON.stringify(antdProPkg), { indent_size: 2 });

  fs.writeFileSync(`${cwd}/config/components/package.json`, newAntdProPkg, 'utf8');
};

