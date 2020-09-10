module.exports = {
  siteMetadata: {
    title: 'ANT DESIGN PRO',
    description: 'Out-of-box UI solution for enterprise applications',
    author: 'Ant Design',
    siteUrl: 'https://pro.ant.design',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-72788897-5',
      },
    },
    {
      resolve: 'gatsby-plugin-less',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
    'gatsby-plugin-typescript',
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
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/docs',
        path: `${__dirname}/docs/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: '/blog',
        path: `${__dirname}/blog/`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-img-warpper-p',
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
  ],
};
