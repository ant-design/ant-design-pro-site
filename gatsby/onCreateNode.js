/* eslint-disable camelcase */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
/* eslint-disable no-multi-assign */
const path = require('path');

// Parse date information out of blog post filename.

function buildRedirectString(permalink, redirect_from) {
  if (!permalink || !permalink.endsWith('.html')) {
    return redirect_from ? JSON.stringify(redirect_from) : '';
  }

  const basePath = permalink.slice(0, -'.html'.length);
  let redirects = [basePath, `${basePath}/`];
  if (Array.isArray(redirect_from)) {
    redirects = redirects.concat(redirect_from);
  }

  return JSON.stringify(redirects);
}

// Add custom fields to MarkdownRemark nodes.
module.exports = exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  switch (node.internal.type) {
    case 'MarkdownRemark':
      const { permalink, redirect_from } = node.frontmatter;
      const { relativePath, sourceInstanceName } = getNode(node.parent);
      let slug = permalink;
      if (!slug) {
        // This will likely only happen for the partials in /content/home.
        slug = `${sourceInstanceName}/${relativePath.replace('.md', '.html')}`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug.replace('/index', ''),
      });

      // Used to generate a GitHub edit link.
      // this presumes that the name in gastby-config.js refers to parent folder
      createNodeField({
        node,
        name: 'path',
        value: path.join(sourceInstanceName, relativePath),
      });

      // Used by createPages() above to register redirects.
      createNodeField({
        node,
        name: 'redirect',
        value: buildRedirectString(permalink, redirect_from),
      });
  }
};
