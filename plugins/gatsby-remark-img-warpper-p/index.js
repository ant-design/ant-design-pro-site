/*!
 * Based on 'gatsby-remark-autolink-headers'
 * Original Author: Kyle Mathews <mathews.kyle@gmail.com>
 * Copyright (c) 2015 Gatsbyjs
 */

// eslint-disable-next-line import/no-extraneous-dependencies
const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  // eslint-disable-next-line arrow-parens
  visit(markdownAST, 'html', (node) => {
    if (
      node.value.includes('<img') &&
      !node.value.includes('<pre') &&
      !node.value.includes('class="icon" ')
    ) {
      // eslint-disable-next-line no-param-reassign
      node.value = `<p> ${node.value} </p>`;
    }
  });
  return markdownAST;
};
