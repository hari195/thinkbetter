import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import AllNotes from "../components/all-notes"


export default function Notes() {

  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {type: {eq: "notes"}}}, limit: 10) {
        totalCount
      }
    }
  `)

  return (
    
    <div>
      <Layout>

        <div class=" font-inter rounded-lg sm:mx-2 md:mx-20 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl px-8 mb-4 mt-2  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Notes <span class="text-primary-900 border-2 border-secondary-500 rounded-full px-2 ml-2 text-sm"> {data.allMarkdownRemark.totalCount}</span>
          </div>
        </div>

       

        <AllNotes/>
        <br>
        </br>

        
      </Layout>
    </div>
  );
}
