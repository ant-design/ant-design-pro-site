module.exports = ({ stage, actions, loaders }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /antv/,
            use: loaders.null(),
          },
          {
            test: /bizcharts/,
            use: loaders.null(),
          },
        ],
      },
    });
    return;
  }
  actions.setWebpackConfig({
    externals: {
      '@antv/data-set': 'DataSet',
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  });
};
