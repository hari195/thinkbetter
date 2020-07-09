import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CondensedArticles from "../components/condensed-articles"
import AllArticles from "../components/all-articles"


export default function Home() {
  return (
    
    <div>
      <Layout>

        <br>
        </br>
        <div class="mt-16 font-inter rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-8 py-4 md:px-20 text-left">
          <div class="text-2xl -ml-1 text-primary-900 md:text-3xl font-semibold rounded px-1  pl-1" > 
            Articles 
        
          </div>
        </div>

        <AllArticles/>
        <br>
        </br>

        
      </Layout>
    </div>
  );
}
