import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CondensedPost from "../components/condensed-post"


export default function Home() {
  return (
    
    <div>
      <Layout>

        <br>
        </br>
        <div class="mt-16 font-inter rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-8 py-4 md:px-20 text-left">
          <div class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-gray-500 rounded px-1  pl-1" href="#"> 
            Recent Articles 
            <span class = "text-lg text-gray-600 p-4 ml-4 mb-8">
              VIEW ALL
            </span>
          </div>
        </div>

        <CondensedPost type="articles" />
        <br>
        </br>
        <div class="mt-4 font-inter rounded-lg ml-8 mr-8 sm:ml-16 sm:mr-16 px-8 py-4 md:px-20 text-left">
          <a class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-gray-500 rounded px-1  pl-1" href="#"> 
            Recent Chatter
          </a>
        </div>

        <CondensedPost type="chatter" />
  
      </Layout>
    </div>
  );
}
