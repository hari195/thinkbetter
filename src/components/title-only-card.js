import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Share from "./share"
import { useLocation } from "@reach/router"
import Tag from "./tag"
export default function TitleOnlyCard (props) {
  const { pathname } = useLocation()

  
  return (
<div >
    {props.data.allMarkdownRemark.edges.map(({ node }) => ( 
      
      <div key={node.id} class="transition-all duration-1000 bg-primary-100 font-inter shadow-lg  rounded-lg px-4 md:px-16 mb-2 border-2 border-secondary-500 md:mx-44 py-6 text-left">
    

          <div class="flex justify-between items-center">
            <div class="flex items-center">
              <div class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-primary-300 rounded px-1 text-primary-900 pl-1">
                {node.frontmatter.title}
              </div>
               <div class="text-green-500 uppercase ml-2 p-1 font-semibold rounded-lg border-2 border-green-500">
                    DEEP DIVE
                </div>
            </div>
            <div class="uppercase font-bold rounded p-1">
                <Share title={node.frontmatter.title} summary={node.frontmatter.condensed} pathname = {node.fields.slug} url={props.data.site.siteMetadata.url}/>
            </div>

        </div>

        <div>
          <Link to={node.fields.slug} class="hidden text-2xl -ml-1 md:text-3xl font-semibold hover:bg-primary-300 rounded px-1 text-primary-900 pl-1"> 
          {node.frontmatter.title}{" "}
          </Link>
          {node.frontmatter.featuredImage}
        </div>

        
        <div class="flex justify items-center flex-wrap mt-2 ">
                {node.frontmatter.tags.map(tag => (
          <Tag  key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag)}/`}>
              {tag} 
            </Link>
          </Tag>

        ))}
        </div>
      
        <div class="hidden mt-1 text-gray-600 text-justify ">
          <div class="mt-2 text-md text-primary-900 tracking-normal leading-6 font-normal" dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      </div>
    ))}
</div>

  );
}

