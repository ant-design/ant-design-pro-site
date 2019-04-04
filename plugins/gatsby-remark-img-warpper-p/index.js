/*!
 * Based on 'gatsby-remark-autolink-headers'
 * Original Author: Kyle Mathews <mathews.kyle@gmail.com>
 * Copyright (c) 2015 Gatsbyjs
 */

const visit = require('unist-util-visit');

module.exports = ({ markdownAST }) => {
  visit(markdownAST, 'html', node => {
    if (
      node.value.includes('<img') &&
      !node.value.includes('<pre') &&
      !node.value.includes('class="icon" ')
    ) {
      node.value = `<p> ${node.value} </p>`;
    }
  });
  return markdownAST;
};
