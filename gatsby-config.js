module.exports = {
  siteMetadata: {
    title: 'Gatsby WordPress',
  },
  plugins: [
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'time.com',
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
      },
    },
  ],
};
