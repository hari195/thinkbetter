/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Think Better`,
    titleTemplate: "%s",
    description:
      "A place for models, concepts and tools from everywhere.",
    url: "https://www.thinkbetter.blog", // No trailing slash allowed!
    siteUrl: "https://www.thinkbetter.blog",
    image: "/images/bolt512.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ThinkBetterBlog",
    keywords: "mental models, thinking, thought, systems thinking, psychology"
  },
  plugins: [   `gatsby-plugin-sitemap`, 
  {
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
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`,
  },},
      
  
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `THINKBETTER`,
      short_name: `thinkbetter`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#0056f0`,
      display: `standalone`,
      icon: `src/images/bolt512.png`,
    },
  },
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      // Add any options here
    },},

  {
    resolve: `gatsby-plugin-feed`,
    options: {
      query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
      feeds: [
        {
          serialize: ({ query: { site, allMarkdownRemark } }) => {
            return allMarkdownRemark.edges.map(edge => {
              return Object.assign({}, edge.node.frontmatter, {
                description: edge.node.excerpt,
                date: edge.node.frontmatter.date,
                url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                custom_elements: [{ "content:encoded": edge.node.html }],
              })
            })
          },
          query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    fields { slug }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
          `,
          output: "/rss.xml",
          title: "Think Better Blog RSS Feed",
        },
      ],
    },
  },

  'gatsby-plugin-offline',
  'gatsby-plugin-postcss',
  `gatsby-transformer-remark`,
  'gatsby-plugin-dark-mode',`gatsby-transformer-sharp`, `gatsby-plugin-sharp`,
],
}
