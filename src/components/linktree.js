import React from "react"
import { Link,useStaticQuery,graphql } from "gatsby"
import { useLocation } from "@reach/router"


function LinkTree () {
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
    <div class="  sm:ml-16 sm:mr-16 px-6 py-6 md:px-24 md:py-12 items-center ">
      <div class=" items-center justify-center">
        <h1 class="md:flex justify-center hidden items-center whitespace-nowrap px-2 md:py-1 text-center text-xl font-sans font-bold tracking-tighter md:text-3xl md:rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="hidden fill-current text-copy-500 w-6 h-6 md:w-6 md:h-6">
                    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                </svg>   
                <div className="text-primary-900" >Start Here<span class="text-secondary-500">!</span></div>
        </h1>
        <a href="http://thinkbetter.blog">
            <div class="text-xl font-inter font-medium mt-6 bg-primary-500 mx-64 py-2 md:mt-4 text-primary-900 text-center border-2 rounded-md border-red-500 hover:border-yellow-300">
            Notes by Topic
            </div>
        </a>
        </div>
    </div>
</div>

  );
}

export default LinkTree;