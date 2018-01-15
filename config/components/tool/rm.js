#!/usr/bin/env node

// remove dump Components

const fs = require('fs-extra');
const path = require('path');
const components = require('../components.config.js');

const libDirs = fs.readdirSync(path.join(__dirname, '../lib'));

libDirs.forEach((d) => {
  if (components.indexOf(d) < 0 && d !== 'index.js') {
    // lib
    fs.removeSync(path.join(__dirname, `../lib/${d}`));
    // es
    fs.removeSync(path.join(__dirname, `../es/${d}`));
  }
});
