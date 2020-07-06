import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import kebabCase from "lodash/kebabCase"
import SEO from "../components/seo"
import Share from "../components/share"
import Tag from "../components/tag"

export default function BlogPost({ data }) {
    const { pathname } = useLocation()
    const post = data.markdownRemark
    const title = data.markdownRemark.frontmatter.title
    const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
    //function sayHello() {
      //var popup = document.getElementById("myPopup");
      //popup.classList.toggle("hidden");
    //}

    return (

      <Layout>
                <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}

        />
          <Helmet title={title} />
      <div class="h-20 md:h-16 ">
</div>
<div class="bg-gray-100 shadow-lg font-inter rounded-lg mt-4 sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 text-left">
        <div class="flex justify-between items-center">
            <div class="text-gray-600 font-normal">
                {data.markdownRemark.frontmatter.displaydate}
            </div>
            <div class="uppercase text-blue-900 font-bold hover:text-gray-200 hover:bg-gray-800 rounded p-1">
                <Share title={data.markdownRemark.frontmatter.title} summary={data.markdownRemark.frontmatter.condensed} pathname = {pathname} url={data.site.siteMetadata.url}/>
            </div>

        </div>
        <div>
            <a class="text-3xl -ml-1 font-medium hover:text-gray-200 hover:bg-red-400 rounded px-1  pl-1" href="#"> 
                {data.markdownRemark.frontmatter.title}
            </a>
        </div>
        <div class="flex justify items-center flex-wrap ">
                {data.markdownRemark.frontmatter.tags.map(tag => (
          <Tag class="p-1 mr-2 text-sm lowercase rounded-md text-blue-900 font-semibold shadow-inner2 hover:bg-gray-800 hover:text-white" key={tag.fieldValue}>
            <Link class="uppercase" to={`/tags/${kebabCase(tag)}/`}>
              {tag} 
            </Link>
          </Tag>

        ))}


        </div>

        <div class="mt-2 text-lg text-gray-900 text-justify" dangerouslySetInnerHTML={{ __html: post.html }} />
              
    
  </div>
 
  
        
      </Layout>
    )
  }
  export const query = graphql`
    query($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        html
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
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
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

    }
  `