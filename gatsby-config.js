module.exports = {
  siteMetadata: {
    title: 'Gatsby WordPress',
    description: 'Gatsby from WordPress',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'blog.ted.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        includedRoutes: ['**/posts'],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
};
