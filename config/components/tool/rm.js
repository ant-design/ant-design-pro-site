#!/usr/bin/env node

// remove dump Components

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

const components = require('../components.config.js');

const libDirs = fs.readdirSync(path.join(__dirname, '../lib'));

libDirs.forEach(d => {
  if (components.indexOf(d) < 0 && d !== 'index.js' && d !== 'index.d.ts') {
    // lib
    fs.removeSync(path.join(__dirname, `../lib/${d}`));
  }
});

// remove all md files
glob.sync('../**/demo', { ignore: '../**/node_modules/**' }).forEach(mdPath => {
  fs.removeSync(mdPath);
});

glob.sync('../**/**.md', { ignore: '../**/node_modules/**' }).forEach(mdPath => {
  fs.removeSync(mdPath);
});
