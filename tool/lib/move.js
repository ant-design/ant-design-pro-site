const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function () {
  const scaffoldDir = path.join(cwd, './scaffold/dist');
  const siteDir = path.join(cwd, './_site');

  // change name
  try {
    fs.moveSync(path.join(scaffoldDir, './index.css'), path.join(scaffoldDir, './s.css'));
    fs.moveSync(path.join(scaffoldDir, './index.js'), path.join(scaffoldDir, './s.js'));
    fs.moveSync(path.join(scaffoldDir, './index.html'), path.join(scaffoldDir, './s.html'));
  } catch (e) {
    throw new Error(e);
  }

  // move
  try {
    fs.copySync(scaffoldDir, siteDir);
  } catch (e) {
    throw new Error(e);
  }
};

