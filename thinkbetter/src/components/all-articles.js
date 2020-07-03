import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function AllArticles (props) {
   
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC}
          filter: { frontmatter: {article : { eq: true}} }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date
                condensed
                article
                chatter
                published
                displaydate
              }
              excerpt
            }
          }
        }
      }
  `)

  return (
<div >
    {data.allMarkdownRemark.edges.map(({ node }) => ( 
      
      <div key={node.id} class="bg-white font-inter shadow-lg mt-4 rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-12 py-8 md:px-20 md:py-12 text-left">
        <div class="flex justify-between items-center">
          <div class="text-gray-600 font-normal">
            {node.frontmatter.displaydate} 
          </div>
          <div class="uppercase text-blue-900 font-bold hover:text-gray-200 hover:bg-gray-800 rounded p-1">
            Share
          </div>
        </div>
        <div>
          <a class="text-2xl -ml-1 md:text-3xl font-medium hover:text-gray-200 hover:bg-red-400 rounded px-1  pl-1" href="#"> 
          {node.frontmatter.title}{" "}
          </a>
        </div>
        <div class="mt-1 text-gray-600 text-justify ">
          <p>{node.frontmatter.condensed}...
            <span class="uppercase text-blue-900 text-sm font-bold hover:text-gray-200 hover:bg-gray-800 rounded p-1">
            continue reading
            </span>
          </p>
        </div>
      </div>
    ))}
</div>

  );
}

