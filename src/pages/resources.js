import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"



export default function Home() {
  return (
    
    <div>
      <Layout>
      <SEO title="Resources"/>
      <div class=" font-inter rounded-lg sm:mx-2 md:mx-20 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl mb-4  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Resources
          </div>
        </div>

        <div class="mt-4 px-8 md:mx-36 md:p-8 border-1 rounded-md text-primary-900 shadow-lg" >    
          <div class="text-xl font-semibold mb-4">
            Topic
          </div>

          <ul class="list-decimal text-lg">
            <li class="inline-link"><a href="#"> Bullet 1</a></li>
            <li class="inline-link"><a href="#"> Bullet 1</a></li>
            <li class="inline-link"><a href="#"> Bullet 1</a></li>
            <li class="inline-link"><a href="#"> Bullet 1</a></li>
          </ul>
        </div>

        
        
      </Layout>
    </div>
  );
}
