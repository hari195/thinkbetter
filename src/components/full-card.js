import React from "react"
import {  Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Share from "./share"
import { useLocation } from "@reach/router"
import Tag from "./tag"
import TitleRender from "./title-render"
export default function FullCard (props) {
  const { pathname } = useLocation()

  
  return (
<div >
    {props.data.allMarkdownRemark.edges.map(({ node }) => ( 
      
      <div key={node.id} class="transition-all duration-1000 bg-primary-100 font-inter shadow-lg  rounded-lg px-6 md:px-16 mb-2 border-2 border-secondary-500 md:mx-44 py-10 text-left">
    

          <div class="flex justify-between items-center">
            <div class="text-primary-900 font-normal">
                {node.frontmatter.displaydate}
            </div>
            <div class="uppercase font-bold rounded p-1">
                <Share title={node.frontmatter.title} summary={node.frontmatter.condensed} pathname = {node.fields.slug} url={props.data.site.siteMetadata.url}/>
            </div>

        </div>

        <TitleRender data={node}>
            
          <Link to={node.fields.slug}> 
          {node.frontmatter.title}{" "}
          </Link>
        </TitleRender>

        
        <div class="flex justify items-center flex-wrap mt-2 ">
                {node.frontmatter.tags.map(tag => (
          <Tag  key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag)}/`}>
              {tag} 
            </Link>
          </Tag>

        ))}
        </div>
      
        <div class="mt-1 text-gray-600 text-justify ">
          <div class="mt-2 text-md text-primary-900 tracking-normal leading-6 font-normal" dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      </div>
    ))}
</div>

  );
}

