/* eslint-disable no-console */
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  // Used to detect and prevent duplicate redirects

  const docsTemplate = resolve(__dirname, '../src/templates/docs.tsx');
  // Redirect /index.html to root.
  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  });

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
                underScoreCasePath
                path
              }
            }
          }
        }
      }
    `
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }
  const redirects = {};

  const edges = allMarkdown.data.allMarkdownRemark.edges;
  edges.forEach(edge => {
    const { slug, underScoreCasePath } = edge.node.fields;
    if (slug.includes('docs/') || slug.includes('/blog')) {
      const template = docsTemplate;
      const createArticlePage = path => {
        if (underScoreCasePath !== path) {
          redirects[underScoreCasePath] = path;
        }

        return createPage({
          path,
          component: template,
          context: {
            slug,
            // if is docs page
            type: slug.includes('docs/') ? '/docs/' : '/blog/',
          },
        });
      };

      // Register primary URL.
      createArticlePage(slug.replace('/index', ''));
    }
  });
  // 首页的中文版
  const indexTemplate = resolve(__dirname, '../src/pages/index.tsx');

  createPage({
    path: '/index-cn',
    component: indexTemplate,
  });

  createRedirect({
    fromPath: '/docs/',
    redirectInBrowser: true,
    toPath: '/docs/getting-started',
  });

  createRedirect({
    fromPath: '/blog/',
    redirectInBrowser: true,
    toPath: '/blog/change-theme',
  });
  Object.keys(redirects).map(path =>
    createRedirect({
      fromPath: path,
      redirectInBrowser: true,
      toPath: redirects[path],
    })
  );
};
