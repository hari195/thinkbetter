import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CondensedArticles from "../components/condensed-articles"
import AllArticles from "../components/all-articles"
import AllNotes from "../components/all-notes"
import AllContent from "../components/all-content"
import AboutCard from "../components/about-card"

export default function Home(props) {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark {
      totalCount
    }
  }
  `)

  return (
    
    <div>
      <Layout>
     
        <br>
        </br>
        <AboutCard/>
        <div class=" font-inter rounded-lg sm:mx-2 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl mb-4  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Notes <span class="text-primary-900 border-2 border-secondary-500 rounded-full px-2 ml-2 text-sm" >{data.allMarkdownRemark.totalCount}</span>
            <span class = "hidden  uppercase rounded-lg text-lg text-primary-700 p-2 ml-4 mb-8  ">
              &bull;<Link class="ml-6 hover:bg-primary-300 p-2 rounded-lg" to="/notes/">view all</Link>
            </span>
          </div>
        </div>


        <AllNotes/>
        <br>
        </br>

    
      </Layout>
    </div>
  );
}

