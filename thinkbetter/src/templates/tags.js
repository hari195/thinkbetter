import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
        <Layout>
             <div class="bg-primary-100 h-20 md:h-16 ">
    </div>
<div class="bg-gray-300 shadow-lg font-inter rounded-lg mt-4 sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 text-left">
        <div class="flex justify-between items-center">
        <div>
            <a class="text-3xl -ml-1 font-medium hover:text-gray-200 hover:bg-red-400 rounded px-1  pl-1" href="#"> 
               {tagHeader}
            </a>
        </div>
            <div class="uppercase text-blue-900 font-bold hover:text-gray-200 hover:bg-gray-800 rounded p-1">
                Share
            </div>
        </div>
   
        
      
              
 
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
      </div>
      </Layout>
      </div>
    
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`