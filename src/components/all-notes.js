import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import FullCard from "./full-card"


export default function AllNotes (props) {
   
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
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "notes"}}}) {
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

