import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FullCard from "./full-card"

export default function AllChatter (props) {
   
    const data = useStaticQuery(graphql`
    query{
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
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "chatter"}}}) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            id
            html
            frontmatter {
              title
              date
              condensed
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
    <FullCard data={data} />
</div>

  );
}

