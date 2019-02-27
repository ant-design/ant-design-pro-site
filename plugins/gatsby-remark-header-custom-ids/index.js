/*!
 * Based on 'gatsby-remark-autolink-headers'
 * Original Author: Kyle Mathews <mathews.kyle@gmail.com>
 * Copyright (c) 2015 Gatsbyjs
 */

const toString = require('mdast-util-to-string');
const visit = require('unist-util-visit');
const slugs = require('github-slugger')();

function patch(context, key, value) {
  if (!context[key]) {
    context[key] = value;
  }

  return context[key];
}

module.exports = ({ markdownAST }, { icon = '#', className = `anchor`, maintainCase = false }) => {
  slugs.reset();

  visit(markdownAST, 'heading', node => {
    // Support custom-id syntax.
    const rawHeader = toString(node);
    const match = /^.+(\s*\{#([a-z0-9\-_]+?)\}\s*)$/.exec(rawHeader);
    const id = match ? match[2] : slugs.slug(rawHeader, maintainCase);
    if (match) {
      // Remove the custom ID part from the text node.
      const lastNode = node.children[node.children.length - 1];
      lastNode.value = lastNode.value.replace(match[1], '');
    }

    const data = patch(node, 'data', {});

    patch(data, 'id', id);
    patch(data, 'htmlAttributes', {});
    patch(data, 'hProperties', {});
    patch(data.htmlAttributes, 'id', id);
    patch(data.hProperties, 'id', id);

    if (icon !== false) {
      node.children.push({
        type: 'link',
        url: `#${id}`,
        title: null,
        data: {
          hProperties: {
            'aria-hidden': true,
            class: className,
          },
          hChildren: [
            {
              type: 'raw',
              // The Octicon link icon is the default. But users can set their own icon via the "icon" option.
              value: icon,
            },
          ],
        },
      });
    }
  });

  return markdownAST;
};
