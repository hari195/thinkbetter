import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import kebabCase from "lodash/kebabCase"
import { Link, graphql } from "gatsby"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
<div>
    <Layout>
        <div class="mt-20 bg-gray-300 font-inter shadow-lg rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-8 py-4 md:px-12 md:py-6 text-left">
            <div class="text-2xl -ml-1 md:text-3xl font-semibold  rounded px-1  pl-1" href="#"> 
                Tags    
            </div>
        <ul class="mt-2">
        {group.map(tag => (
          <li class="text-blue-600 mt-2 ml-1 hover:text-black" key={tag.fieldValue}>
            <Link class="uppercase" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span class = "text-gray-700 lowercase text-sm">&bull; {tag.totalCount} posts</span>
            </Link>
          </li>
        ))}
        </ul>
        </div>
    </Layout>
</div>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`