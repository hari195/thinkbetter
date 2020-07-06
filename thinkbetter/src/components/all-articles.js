import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CondensedCard from "./condensed-card"

export default function AllArticles (props) {
   
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
          twitterUsername
          title
          siteUrl
          keywords
          image
          description
          titleTemplate
        }
      }
      
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC}
          filter: { frontmatter: {article : { eq: true}} }
        ) {
          totalCount
          edges {
            node {
              fields {
                slug
              }
              id
              frontmatter {
                title
                date
                condensed
                article
                published
                displaydate
                tags
              }
              excerpt
            }
          }
        }
      }
  `)

  return (
<div >
    <CondensedCard data={data} />
</div>

  );
}

