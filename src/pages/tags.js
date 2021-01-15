import React from "react"
import PropTypes from "prop-types"
import SEO from "../components/seo"
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
        <SEO title="Tags"/>

        <div class=" font-inter rounded-lg sm:mx-2 md:mx-20 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl px-8 mb-4 mt-2  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Tags
          </div>
        </div>


        <div class="mt-4 px-8 md:mx-36 md:py-8 md:px-16  border-1 rounded-md text-primary-900 shadow-lg">
            <div class="hidden mb-2 text-2xl -ml-1 md:text-2xl font-semibold  rounded px-1  pl-1 text-primary-900"> 
                Browse   
            </div>
        <ul class="mt-2">
        {group.map(tag => (
          <li class="  -ml-2 " key={tag.fieldValue}>
            <Link class="uppercase inline-block text-secondary-500 hover:text-primary-900 hover:bg-primary-300 rounded p-1 px-2" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} 
              <span class="hidden text-secondary-500">
                &bull;
              </span> 
              <span class = "ml-2 -mt-1 px-2  border-2 border-secondary-500 rounded-full text-primary-900 lowercase text-sm"> 
                {tag.totalCount} 
              </span>
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