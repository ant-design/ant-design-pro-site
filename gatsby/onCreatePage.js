module.exports = async ({ page, actions }) => {
  const { createPage } = actions;
  return new Promise((resolvePromise) => {
    if (page.path.includes('docs/error-decoder.html')) {
      // eslint-disable-next-line no-param-reassign
      page.context.slug = 'docs/error-decoder.html';

      createPage(page);
    }
    resolvePromise();
  });
};
