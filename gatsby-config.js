/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
    },
  ],
  siteMetadata: {
    siteTitle: `Gomtl Consulting`,
    siteTitleAlt: `Gomtl.`,
    siteHeadline: `Gomtl.`,
    siteUrl: `https://gomtlconsulting.com`,
    siteDescription: `Gomtl Consulting`,
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
  },
};
