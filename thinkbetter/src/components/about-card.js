import React from "react"
import {  Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery,graphql } from "gatsby"
import Share from "./share"
import { useLocation } from "@reach/router"

export default function AboutCard () {
    const { pathname } = useLocation()
    var themeVariable = "theme-dark";
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
      lightimage:file(relativePath: { eq: "images/lightcoverpic.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      darkimage:file(relativePath: { eq: "images/darkcoverpic.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
     
    if( typeof window !== 'undefined') {
        themeVariable = window.localStorage.getItem("theme");
      } 

    
      
  
  return (
<div >
<div class=" md:flex sm:ml-16 sm:mr-16 px-6 py-6 md:px-20 md:py-12 items-center ">
      <div class="md:w-1/2 items-center ">
        <div class="  font-inter font-bold">

                <h1 class="flex uppercase mx-4 justify-center items-center whitespace-no-wrap px-2 md:py-1 text-center text-xl font-inter  font-bold md:text-2xl md:rounded-lg hover:shadow-2xl tracking-widest hover:bg-blue-900 hover:text-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current w-6 h-6 ">
                        <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                    </svg>   
                    think better
                </h1>
            
        </div>
        <div class="text-xl font-inter font-medium mt-4">
            <p>This is a blog aimed at familiarizing ideas and concepts from unfamiliar fields and building an online
                mental toolbox to help you make better decisions and of course, <span class="font-semibold flex-no-wrap">think better.</span> 
           </p>
           <Share title={data.site.siteMetadata.title} url={data.site.siteMetadata.siteUrl} summary={data.site.siteMetadata.description} pathname={pathname} />
    
        </div>
    </div>
    <div class="md:w-1/2">

        {themeVariable === "theme-light" ? (
        <Img fluid={data.lightimage.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.darkimage.childImageSharp.fluid} />
      )}
    </div>
  </div>
</div>

  );
}

