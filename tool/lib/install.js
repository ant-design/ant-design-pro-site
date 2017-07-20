const co = require('co');
const thunkify = require('thunkify');
const exec = thunkify(require('child_process').exec);
const shelljs = require("shelljs");
const path = require('path');
const fs = require('fs-extra');

const cwd = process.cwd();

module.exports = function (layout) {
  try {
    shell.exec('tnpm install');
  } catch (e) {
    shell.exec('npm install');
  }
}

