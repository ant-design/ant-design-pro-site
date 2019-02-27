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
            test: /ant-design-pro/,
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
      '@antv/g2': 'G2',
      '@antv/data-set': 'DataSet',
      DataSet: 'DataSet',
      react: 'React',
      bizcharts: 'BizCharts',
      'react-dom': 'ReactDOM',
    },
  });
};
