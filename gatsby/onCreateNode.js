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
        // This will likely only happen for the partials in /content/home.
        // DescriptionList.md -> DescriptionList
        slug = `${sourceInstanceName}/${relativePath
          .replace('.en-US.md', '')
          .replace('.zh-CN.md', '-cn')
          .replace('.md', '')}`;
      }

      // Used to generate URL to view this content.
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

      // Used to generate a GitHub edit link.
      // this presumes that the name in gastby-config.js refers to parent folder
      createNodeField({
        node,
        name: 'path',
        value: path.join(sourceInstanceName, relativePath),
      });
  }
};
