// eslint-disable-next-line import/no-extraneous-dependencies
const fsExtra = require('fs-extra');

exports.createPages = require('./gatsby/createPages');
exports.onCreateNode = require('./gatsby/onCreateNode');
exports.onCreatePage = require('./gatsby/onCreatePage');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-darkreader/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
