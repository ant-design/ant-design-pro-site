/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-multi-assign */
const path = require('path');

const getKebabCase = str => {
  return str
    .replace(/[A-Z]/g, letter => {
      return `-${letter.toLowerCase()}`;
    })
    .replace(/\/-/g, '/');
};
// Add custom fields to MarkdownRemark nodes.
module.exports = exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case 'MarkdownRemark':
      const { permalink } = node.frontmatter;
      const { relativePath, sourceInstanceName } = getNode(node.parent);
      let slug = permalink;
      if (!slug) {
        slug = `${sourceInstanceName}/${relativePath
          .replace('.en-US.md', '')
          .replace('.zh-CN.md', '-cn')
          .replace('.md', '')}`;
      }

      createNodeField({
        node,
        name: 'slug',
        value: getKebabCase(slug.replace('/index', '')),
      });
      createNodeField({
        node,
        name: 'underScoreCasePath',
        value: slug.replace('/index', ''),
      });

      createNodeField({
        node,
        name: 'path',
        value: path.join(sourceInstanceName, relativePath),
      });
  }
};
