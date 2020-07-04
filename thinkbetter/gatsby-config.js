/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Think Better`,
    titleTemplate: "%s · Think Better",
    description:
      "A place for models, concepts and tools from everywhere.",
    url: "https://www.thinkbetter.blog", // No trailing slash allowed!
    siteUrl: "https://www.thinkbetter.blog",
    image: "/images/bolt512.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [   `gatsby-plugin-sitemap`, {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      // replace "UA-XXXXXXXXX-X" with your own Tracking ID
      trackingId: "UA-171661096-1",
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `THINKBETTER`,
      short_name: `thinkbetter`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#000000`,
      display: `standalone`,
      icon: `src/images/bolt512.png`,
    },
  },
  'gatsby-plugin-offline',
  'gatsby-plugin-postcss',
  `gatsby-transformer-remark`,
  'gatsby-plugin-dark-mode'],
}
