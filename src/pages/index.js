import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import RecentNotes from "../components/recent-notes"
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

        <div class=" font-inter rounded-lg sm:mx-2 md:mx-36 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl mb-4  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Latest <span class="text-primary-900 border-2 border-secondary-500 rounded-full px-2 ml-2 text-sm" >3/{data.allMarkdownRemark.totalCount}</span>
            <span class = " uppercase rounded-lg text-lg ml-2">
              &bull;<Link class="ml-2 inline-link rounded-lg" to="/notes/">view all</Link>
            </span>
          </div>
        </div>

       
        <RecentNotes/>

        <div class=" text-lg justify-center text-center items-center flex uppercase  ">
        <Link class="ml-2 inline-link rounded-lg font-semibold" to="/notes/">view all</Link>
          <span class="text-primary-900 border-2 border-secondary-500 rounded-full px-2 ml-2 text-sm"> {data.allMarkdownRemark.totalCount}</span>
        </div>


        <br>
        </br>
        
    
      </Layout>
    </div>
  );
}

