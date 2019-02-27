module.exports = {
  siteMetadata: {
    title: 'ANT DESIGN PRO',
    description: 'Out-of-box UI solution for enterprise applications',
    author: 'Ant Design',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-less',
      options: {
        javascriptEnabled: true,
      },
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/components',
        path: `${__dirname}/scaffold/src/components`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/docs',
        path: `${__dirname}/docs/`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark-antd',
      options: {
        plugins: ['gatsby-remark-header-custom-ids', 'gatsby-remark-prismjs'],
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
