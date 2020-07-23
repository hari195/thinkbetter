import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import CondensedCard from "./condensed-card"

export default function CondensedArticles (props) {
   
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
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "article"}}}) {
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
              published
              displaydate
              tags
              type
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

