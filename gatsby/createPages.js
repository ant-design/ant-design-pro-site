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
  const redirectList = {};

  allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug;
    if (slug.includes('docs/') || slug.includes('/components')) {
      let template = docsTemplate;
      if (slug.includes('/components')) {
        template = componentsTemplate;
      }
      const createArticlePage = path => {
        const demoQuery = slug
          .split('.')
          .shift()
          .split('/')
          .pop();
        redirectList[path.replace('.zh-CN.html', '').replace('.en-US.html', '')] = true;
        return createPage({
          path,
          component: template,
          context: {
            slug,
            demo: `/${demoQuery}/demo//`,
          },
        });
      };

      // Register primary URL.
      createArticlePage(slug.replace('/index', ''));
    }
  });

  // redirect getting-started -> getting-started.en-US.html
  Object.keys(redirectList).map(path => {
    return createRedirect({
      fromPath: `${path}`,
      redirectInBrowser: true,
      toPath: `${path}.en-US.html`,
    });
  });

  createRedirect({
    fromPath: '/docs/',
    redirectInBrowser: true,
    toPath: '/docs/getting-started.en-US.html',
  });

  createRedirect({
    fromPath: '/components/',
    redirectInBrowser: true,
    toPath: '/components/AvatarList.en-US.html',
  });
};
