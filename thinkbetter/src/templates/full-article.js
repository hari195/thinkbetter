import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
    const post = data.markdownRemark
    return (
      <Layout>
      <div class="bg-primary-100 h-20 md:h-16 ">
</div>
<div class="bg-gray-300 shadow-lg font-inter rounded-lg mt-4 sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 text-left">
        <div class="flex justify-between items-center">
            <div class="text-gray-600 font-normal">
                {data.markdownRemark.frontmatter.displaydate}
            </div>
            <div class="uppercase text-blue-900 font-bold hover:text-gray-200 hover:bg-gray-800 rounded p-1">
                Share
            </div>
        </div>
        <div>
            <a class="text-3xl -ml-1 font-medium hover:text-gray-200 hover:bg-red-400 rounded px-1  pl-1" href="#"> 
                {data.markdownRemark.frontmatter.title}
            </a>
        </div>
        <div class="flex justify items-center flex-wrap ">
            <div class="p-1 -ml-2">
                   <div class="p-1 lowercase rounded-md text-gray-800 bg-gray-400 font-semibold shadow-lg border hover:border-black hover:bg-gray-100 hover:text-black">
                        thinking
                    </div>
            </div>
            <div class="p-1">
                   <div class="p-1 lowercase rounded-md text-blue-900 font-semibold shadow-lg hover:bg-gray-800 hover:text-white">
                        knowledge
                    </div>
            </div>
            <div class="p-1">
                   <div class="p-1 lowercase rounded-md text-blue-900 font-semibold shadow-inner2 hover:bg-gray-800 hover:text-white">
                        brain
                    </div>
            </div>

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
        }
        excerpt
      }
    }
  `