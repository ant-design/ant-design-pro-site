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
  const redirectToSlugMap = {};

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
                redirect
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

      // Register redirects as well if the markdown specifies them.
      if (edge.node.fields.redirect) {
        let redirect = JSON.parse(edge.node.fields.redirect);
        if (!Array.isArray(redirect)) {
          redirect = [redirect];
        }

        redirect.forEach(fromPath => {
          if (redirectToSlugMap[fromPath] != null) {
            console.error(
              `Duplicate redirect detected from "${fromPath}" to:\n` +
                `* ${redirectToSlugMap[fromPath]}\n` +
                `* ${slug}\n`
            );
            process.exit(1);
          }

          // A leading "/" is required for redirects to work,
          // But multiple leading "/" will break redirects.
          // For more context see github.com/reactjs/reactjs.org/pull/194
          const toPath = slug.startsWith('/') ? slug : `/${slug}`;

          redirectToSlugMap[fromPath] = slug;
          createRedirect({
            fromPath: `/${fromPath}`,
            redirectInBrowser: true,
            toPath,
          });
        });
      }
    }
  });

  const newestBlogEntry = await graphql(
    `
      {
        allMarkdownRemark(
          limit: 1
          filter: { fileAbsolutePath: { regex: "/docs/" } }
          sort: { fields: [fields___path], order: DESC }
        ) {
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
  const newestBlogNode = newestBlogEntry.data.allMarkdownRemark.edges[0].node;
  // Blog landing page should always show the most recent blog entry.
  ['/docs/', '/docs'].map(slug =>
    createRedirect({
      fromPath: slug,
      redirectInBrowser: true,
      toPath: newestBlogNode.fields.slug,
    })
  );
};
