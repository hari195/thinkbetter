import React from "react"
import { Link,useStaticQuery,graphql } from "gatsby"
import Share from "./share"
import { useLocation } from "@reach/router"
import RevueSubcribe from "./revue-subscribe"


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
<div class=" md:flex sm:ml-16 sm:mr-16 px-6 py-6 md:px-24 md:py-12 items-center ">
      <div class="md:w-1/2 md:ml-24 items-center ">
        

      <h1 class="md:flex justify-center hidden items-center whitespace-nowrap px-2 md:py-1 text-center text-xl font-sans font-bold tracking-tighter md:text-3xl md:rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current text-copy-500 w-6 h-6 md:w-6 md:h-6">
                    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                </svg>   
                <div className="text-primary-900" >Think Better<span class="text-secondary-500">.</span></div>
            </h1>
       
        <div class="text-xl font-inter font-medium mt-6 md:mt-4 text-primary-900 text-center">
            <p class="hidden">This is a blog aimed at familiarizing ideas and concepts from unfamiliar fields and building an online
                mental toolbox to help you make better decisions and of course, <span class="font-semibold flex-nowrap">think better.</span> 
           </p>
           <p class="hidden">
             A place for <span class="copy-underline">ideas</span>, <span class="copy-underline">concepts</span> and <span class="copy-underline">mental models</span> from everywhere.
            </p>
            <p>
              Exploring the intersections between <span class="copy-underline">thinking</span>, <span class="copy-underline">finance</span> and <span class="copy-underline">tech</span>.
            </p>
            <p>
             <div class="hidden">
               Check out <span class="text-red-500 font-bold">Lattice</span> for analysis on different companies.  
              <span class="inline-link"> Subscribe</span> for a weekly update of interesting notes and analysis delivered to your inbox.
     
             
             </div>
             <div class="hidden"><Link class="inline-link" to="https://thinkbetterblog.substack.com/embed">Subscribe</Link> to receive <span class="hidden copy-underline">exclusive notes</span> a weekly round-up. </div>
      Connect with me <a class="inline-link" href="http://www.twitter.com/thoughtsbyhkr">@thoughtsbyhkr</a>
           </p>
          
        </div>
    </div>
    <div class="md:w-1/2">
        <img src={'../../darkcoverpic.jpg'} class="rounded-lg h-64 w-auto md:ml-12" alt="Hello" />
    </div>
  </div>
</div>

  );
}

export default AboutCard;