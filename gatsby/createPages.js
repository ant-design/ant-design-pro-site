const { resolve } = require('path');

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  // Used to detect and prevent duplicate redirects

  const docsTemplate = resolve(__dirname, '../src/templates/docs.tsx');
  const blogTemplate = resolve(__dirname, '../src/templates/blog.tsx');

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
    `,
  );

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }
  const redirects = {};

  const { edges } = allMarkdown.data.allMarkdownRemark;
  edges.forEach((edge) => {
    const { slug, underScoreCasePath } = edge.node.fields;
    const getType = () => {
      if (slug.includes('docs/')) {
        return '/docs/';
      }
      if (slug.includes('blog/')) {
        return '/blog/';
      }
      if (slug.includes('config/')) {
        return '/config/';
      }
      return '/blog';
    };
    if (slug.includes('docs/') || slug.includes('/blog') || slug.includes('/config')) {
      const template = slug.includes('/blog') ? blogTemplate : docsTemplate;
      const createArticlePage = (path) => {
        if (underScoreCasePath !== path) {
          redirects[underScoreCasePath] = path;
        }
        return createPage({
          path,
          component: template,
          context: {
            slug,
            // if is docs page
            type: getType(),
            locale: slug.includes('-cn') ? '/-cn/' : '//',
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
    fromPath: '/config',
    redirectInBrowser: true,
    toPath: '/config/config',
  });

  createRedirect({
    fromPath: '/blog',
    redirectInBrowser: true,
    toPath: '/blog/layout-new-style',
  });

  const blogEdges = await graphql(
    `
      {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/blog/" } }
          sort: { order: DESC, fields: [frontmatter___time] }
          limit: 10
        ) {
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
    `,
  );

  const { node } = blogEdges.data.allMarkdownRemark.edges[0];
  const blogPath = node.fields.slug.replace('-cn', '');

  createRedirect({
    fromPath: '/blog-cn',
    redirectInBrowser: true,
    toPath: `${blogPath}-cn`,
  });

  createRedirect({
    fromPath: '/blog/',
    redirectInBrowser: true,
    toPath: blogPath,
  });

  Object.keys(redirects).map((path) =>
    createRedirect({
      fromPath: path,
      redirectInBrowser: true,
      toPath: redirects[path],
    }),
  );
};
