import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Share from "./share"
import { useLocation } from "@reach/router"
import Tag from "./tag"
export default function CondensedCard (props) {
  const { pathname } = useLocation()

  
  return (
<div >
    {props.data.allMarkdownRemark.edges.map(({ node }) => ( 
      
      <div key={node.id} class="bg-primary-100 font-inter shadow-lg mt-4 rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-12 py-8 md:px-20 md:py-12 text-left">
    

          <div class="flex justify-between items-center">
            <div class="text-primary-700 font-normal">
                {node.frontmatter.displaydate}
            </div>
            <div class="uppercase font-bold  rounded p-1">
                <Share title={node.frontmatter.title} summary={node.frontmatter.condensed} pathname = {node.fields.slug} url={props.data.site.siteMetadata.url}/>
            </div>

        </div>

        <div>
          <Link to={node.fields.slug} class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-primary-300 rounded px-1 text-primary-900 pl-1"> 
          {node.frontmatter.title}{" "}
          </Link>
        </div>

        
        <div class="flex justify items-center flex-wrap ">
                {node.frontmatter.tags.map(tag => (
          <Tag  key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag)}/`}>
              {tag} 
            </Link>
          </Tag>

        ))}
        </div>
      
        <div class="mt-1 text-gray-600 text-justify ">
          <p>{node.frontmatter.condensed}...
            <span class="uppercase text-copy-900 text-xs font-bold hover:text-primary-900 hover:bg-primary-300 rounded p-2">
            <Link to={node.fields.slug}>continue reading</Link>
            </span>
          </p>
        </div>
      </div>
    ))}
</div>

  );
}

