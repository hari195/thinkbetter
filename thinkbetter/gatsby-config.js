/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `THINKBETTER`,
  },
  plugins: [    {
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
