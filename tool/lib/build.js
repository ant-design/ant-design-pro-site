const co = require('co');
const thunkify = require('thunkify');
const exec = thunkify(require('child_process').exec);
const shelljs = require("shelljs");
const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function (layout) {

  const scaffoldDir = path.join(cwd, './dist');
  const siteDir = path.join(cwd, '../_scaffold_site');

  fs.ensureDirSync(siteDir)

  // move
  try {
    fs.copySync(scaffoldDir, siteDir);
  } catch(e) {
    throw new Error(e);
  }

  console.log('scaffold move success');
}

