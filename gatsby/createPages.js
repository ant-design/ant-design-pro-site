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

  const docsTemplate = resolve(__dirname, '../src/templates/docs.js');
  const componentsTemplate = resolve(__dirname, '../src/templates/components.js');
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

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const { slug, underScoreCasePath } = edge.node.fields;
    if (slug.includes('docs/') || slug.includes('/components')) {
      let template = docsTemplate;
      if (slug.includes('/components')) {
        template = componentsTemplate;
      }
      const createArticlePage = path => {
        if (underScoreCasePath !== path) {
          redirects[underScoreCasePath] = path;
        }

        const demoQuery = slug
          .split('.')
          .shift()
          .split('/')
          .pop()
          .replace('-cn', '');
        console.log(path, slug);
        return createPage({
          path,
          component: template,
          context: {
            slug,
            demo: `/${demoQuery}/demo/`,
          },
        });
      };

      // Register primary URL.
      createArticlePage(slug.replace('/index', ''));
    }
  });

  createRedirect({
    fromPath: '/docs/',
    redirectInBrowser: true,
    toPath: '/docs/getting-started',
  });

  createRedirect({
    fromPath: '/components/',
    redirectInBrowser: true,
    toPath: '/components/avatarList-cn',
  });
};
