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
      
      <div key={node.id} class="bg-primary-100 font-inter shadow-lg  rounded-lg px-6 md:px-16 mb-2 border-2 border-copy-100 md:mx-10 py-10 text-left">
    

          <div class="flex justify-between items-center">
            <div class="text-primary-700 font-normal">
                {node.frontmatter.displaydate}
            </div>
            <div class="uppercase font-bold  rounded p-1">
                <Share title={node.frontmatter.title} summary={node.excerpt} pathname = {node.fields.slug} url={props.data.site.siteMetadata.url}/>
            </div>

        </div>

        <div>
          <Link to={node.fields.slug} class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-primary-300 rounded px-1 text-primary-900 pl-1"> 
          {node.frontmatter.title}{" "}
          </Link>
          {node.frontmatter.featuredImage}
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
          <p>{node.excerpt}
            <span class="capitalize text-secondary-500 text-md font-light hover:text-primary-900 hover:bg-primary-300 rounded p-1">
            <Link to={node.fields.slug}>continue reading</Link>
            </span>
          </p>
        </div>
      </div>
    ))}
</div>

  );
}

