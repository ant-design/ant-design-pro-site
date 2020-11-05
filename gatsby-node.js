// eslint-disable-next-line import/no-extraneous-dependencies
const fsExtra = require('fs-extra');

exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.onCreatePage = require('./gatsby/onCreatePage');
