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
    const { slug, underScoreCasePath, path: mdPath } = edge.node.fields;
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

        if (!slug.includes('demo/') && !mdPath.includes('.zh-CN') && !mdPath.includes('.en-US')) {
          createPage({
            path: `${path}-cn`,
            component: template,
            context: {
              slug,
              demo: `/${demoQuery}/demo/`,
            },
          });
        }
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
  // 首页的中文版
  const indexTemplate = resolve(__dirname, '../src/pages/index.js');

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
    fromPath: '/components/',
    redirectInBrowser: true,
    toPath: '/components/avatar-list',
  });
  Object.keys(redirects).map(path =>
    createRedirect({
      fromPath: path,
      redirectInBrowser: true,
      toPath: redirects[path],
    })
  );
};
