import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Share from "../components/share"

// Components
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  //const tagHeader = `${totalCount} post${
   // totalCount === 1 ? "" : "s"
  //} tagged with "${tag}"`


  return (
    <div>
        <Layout>
           
<div class="bg-primary-100 shadow-lg font-inter rounded-lg mt-4 sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 text-left">
        <div class="flex justify-between items-center">
        <div class="capitalize text-2xl -ml-1 md:text-3xl font-semibold text-primary-900 rounded px-1  pl-1"> 
               {tag}
        </div>
            <div class="uppercase rounded p-1">
                <Share />
            </div>
        </div>

      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug} class=" mt-2 -ml-2  ">
              <Link class="inline-block hover:text-primary-900 text-copy-500 hover:bg-primary-300 rounded p-1 px-2" to={slug}>{title}</Link> <br></br>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
            <div class="-mx-2 mt-4 font-semibold uppercase">
      <Link to="/tags" class="p-2 text-copy-500 hover:text-primary-900 rounded-lg hover:bg-primary-300" >view All tags</Link>
      </div>
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