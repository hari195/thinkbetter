import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import { useLocation } from "@reach/router"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Share from "../components/share"

export default function Resources() {

  const { pathname } = useLocation()
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          url
          twitterUsername
          title
          siteUrl
          keywords
          image
          description
          titleTemplate
        }
      }
    
      }
  `)


  return (
    
    <div>
      <Layout>
      <SEO title="Resources"/>
      <div class=" font-inter rounded-lg sm:mx-2 md:mx-20 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl px-8 mb-4 mt-2  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Resources
          </div>
          <div class="hidden px-8 mb-4 text-primary-900">
            Curated resources on varying topics from everywhere.
          </div>
        </div>


     <div class=" mt-4 px-8 md:mx-36 md:py-8 md:px-16  border-1 rounded-md text-primary-900 shadow-lg" >
      <div class="flex justify-between items-center">
        <div class="text-2xl font-semibold mb-4 text-primary-900 ">
           API
        </div>
        <div class="uppercase font-bold rounded p-1">
          <Share title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} summary={data.site.siteMetadata.description} pathname={pathname} />  
        </div>
      </div>
      <ul class="list-disc text-lg">
        <li class="inline-link"><a href="https://public-apis.io/">
          Public APIs
        </a></li>
      </ul>
    </div>   


        <div class="mt-4 px-8 md:mx-36 md:py-8 md:px-16  border-1 rounded-md text-primary-900 shadow-lg" >
      <div class="flex justify-between items-center">
        <div class="text-2xl font-semibold mb-4 text-primary-900 ">
           Podcast Episodes
        </div>
        <div class="uppercase font-bold rounded p-1">
          <Share title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} summary={data.site.siteMetadata.description} pathname={pathname} />  
        </div>
      </div>
      <ul class="list-disc text-lg">
        <li class="inline-link"><a href="https://www.youtube.com/watch?v=3qHkcs3kG44&ab_channel=PowerfulJRE">
          Joe Rogan x Naval Ravikant
        </a></li>
        <li class="inline-link"><a href="https://www.youtube.com/watch?v=HiYo14wylQw&ab_channel=TimFerriss">
          Tim Ferris x Naval Ravikant
        </a></li>
        <li class="inline-link"><a href="https://fs.blog/knowledge-project/bill-ackman/">
          The Knowledge Podcast x Bill Ackman
        </a></li>
        <li class="inline-link"><a href="https://fs.blog/knowledge-project/sanjay-bakshi/">
          The Knowledge Podcast x Sanjay Bakshi
        </a></li>
        <li class="inline-link"><a href="https://podcasts.google.com/feed/aHR0cHM6Ly9pbnZlc3RsaWtldGhlYmVzdC5saWJzeW4uY29tL3Jzcw/episode/ZTkwN2I2NTRkNDc4NDRhZGIwZTkxN2E3MWYzNTIzZGU?sa=X&ved=0CA0QkfYCahcKEwiojonBg7LuAhUAAAAAHQAAAAAQAQ">
         Invest Like the Best x Chris Bloomstran x What Makes a Quality Company
        </a></li>
      
      </ul>
    </div>

    <div class=" mt-4 px-8 md:mx-36 md:py-8 md:px-16  border-1 rounded-md text-primary-900 shadow-lg" >
      <div class="flex justify-between items-center">
        <div class="text-lg md:text-2xl font-semibold mb-4 text-primary-900 ">
           Thinkbetter Tech Stack
        </div>
        <div class="uppercase font-bold rounded p-1">
          <Share title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} summary={data.site.siteMetadata.description} pathname={pathname} />  
        </div>
      </div>
      <ul class="list-disc text-md md:text-lg">
        <li class="inline-link"><a href="https://www.gatsbyjs.com/"> Gatsby JS</a></li>
        <li class="inline-link"><a href="https://tailwindcss.com/"> Tailwind CSS</a></li>
      </ul>
    </div>




  

     <div class="hidden mt-4 px-8 md:mx-36 md:py-8 md:px-16  border-1 rounded-md text-primary-900 shadow-lg" >
      <div class="flex justify-between items-center">
        <div class="text-2xl font-semibold mb-4 text-primary-900 ">
           Topic
        </div>
        <div class="uppercase font-bold rounded p-1">
          <Share title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} summary={data.site.siteMetadata.description} pathname={pathname} />  
        </div>
      </div>
      <ul class="list-disc text-lg">
        <li class="inline-link"><a href="#">
          Bullet 1
        </a></li>
        <li class="inline-link"><a href="#">
          Bullet 1
        </a></li>
        <li class="inline-link"><a href="#">
          Bullet 1
        </a></li>
      </ul>
    </div>       

        
      </Layout>
    </div>
  );
}
