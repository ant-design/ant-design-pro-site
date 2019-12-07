// eslint-disable-next-line import/no-extraneous-dependencies
const fsExtra = require('fs-extra');

exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.onCreatePage = require('./gatsby/onCreatePage');

exports.onPostBuild = () => {
  // 复制 CNAME
  fsExtra.copyFileSync(`${__dirname}/CNAME`, `${__dirname}/public/CNAME`, err => {
    if (err) {
      console.error('Error copying file', err);
    }
  });
};
