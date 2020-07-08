import React from "react"
import { Link,useStaticQuery,graphql } from "gatsby"
import Share from "./share"
import { useLocation } from "@reach/router"


function AboutCard () {
    const { pathname } = useLocation()
    var themeVariable = "theme-dark";
    if( typeof window !== 'undefined') {
        themeVariable = window.localStorage.getItem("theme");
      } 

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
<div >
<div class=" md:flex sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 items-center ">
      <div class="md:w-1/2 items-center ">
        

      <h1 class="flex justify-center  items-center whitespace-no-wrap px-2 md:py-1 text-center text-xl font-sans font-bold tracking-tighter md:text-3xl md:rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current text-copy-500 w-6 h-6 md:w-6 md:h-6">
                    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                </svg>   
                <div className="text-primary-900" >Think Better.</div>
            </h1>
       
        <div class="text-xl font-inter font-medium mt-4 text-primary-900">
            <p>This is a blog aimed at familiarizing ideas and concepts from unfamiliar fields and building an online
                mental toolbox to help you make better decisions and of course, <span class="font-semibold flex-no-wrap">think better.</span> 
           </p>
           <Share title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} summary={data.site.siteMetadata.description} pathname={pathname} />
    
        </div>
    </div>
    <div class="md:w-1/2">
        <img src={'../../darkcoverpic.jpg'} class="rounded-lg" alt="Hello" />
    </div>
  </div>
</div>

  );
}

export default AboutCard;