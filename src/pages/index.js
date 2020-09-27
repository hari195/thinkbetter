import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CondensedArticles from "../components/condensed-articles"
import AllArticles from "../components/all-articles"
import AllChatter from "../components/all-chatter"
import AllContent from "../components/all-content"
import CondensedAboutCard from "../components/condensed-about-card"

export default function Home() {
  return (
    
    <div>
      <Layout>
     
        <br>
        </br>
        <div class=" font-inter rounded-lg ml-8 mr-8 sm:mx-2  px-8 py-4 md:px-20 md:text-left items-center text-center">
          <div class="text-2xl -ml-1 md:text-3xl font-semibold rounded px-1 pl-1 text-primary-900"> 
            Notes
            <span class = "hidden  uppercase rounded-lg text-lg text-primary-700 p-2 ml-4 mb-8  ">
              &bull;<Link class="ml-6 hover:bg-primary-300 p-2 rounded-lg" to="/chatter/">view all</Link>
            </span>
          </div>
        </div>


        <AllChatter/>
        <br>
        </br>

    
      </Layout>
    </div>
  );
}
