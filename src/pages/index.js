import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CondensedArticles from "../components/condensed-articles"
import AllArticles from "../components/all-articles"
import AboutCard from "../components/about-card"

export default function Home() {
  return (
    
    <div>
      <Layout>
      <AboutCard /> 
        <br>
        </br>
        <div class=" font-inter rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-8 py-4 md:px-20 text-left">
          <div class="text-2xl -ml-1 md:text-3xl font-semibold rounded px-1 pl-1 text-primary-900"> 
            Articles
            <span class = "hidden uppercase rounded-lg text-lg text-primary-700 p-2 ml-4 mb-8  ">
              &bull;<Link class="ml-6 hover:bg-primary-300 p-2 rounded-lg" to="/articles/">view all</Link>
            </span>
          </div>
        </div>

        <AllArticles/>
        <br>
        </br>

    
      </Layout>
    </div>
  );
}
