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
    
        <div class="bg-primary-100 shadow-lg font-inter rounded-lg mt-4 sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 text-left">
            <div class="text-2xl -ml-1 md:text-3xl font-semibold  rounded px-1  pl-1 text-primary-900"> 
                Tags    
            </div>
        <ul class="mt-2">
        {group.map(tag => (
          <li class=" mt-2 -ml-2 " key={tag.fieldValue}>
            <Link class="uppercase inline-block hover:text-primary-900 text-copy-500 hover:bg-primary-300 rounded p-1 px-2" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} <span class = "text-primary-700 hover:bg-primary-300  lowercase text-sm">&bull; {tag.totalCount} posts</span>
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