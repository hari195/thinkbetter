import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import { useLocation } from "@reach/router"
import Share from "./share"

export default function Footer() {

  return (
<div>
    <div class=" bottom-0 md:flex pb-4 mt-8 mx-16 ">
        <div class="w-full md:w-1/3 mt-4 text-center md:px-2">
            <div class="font-bold uppercase mb-2">
                <div class="mt-2 font-bold uppercase mb-2">
                    <div class="flex uppercase justify-center text-gray-900 items-center whitespace-no-wrap px-2 md:py-1 text-center  font-inter  font-bold  md:rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current w-6 h-6 mr-1">
                            <path d="M2.929 17.071c3.905 3.905 10.237 3.905 14.142 0 3.905-3.905 3.905-10.237 0-14.142-3.905-3.905-10.237-3.905-14.142 0-3.905 3.905-3.905 10.237 0 14.142zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
                        </svg>   
                        about
                      
                    </div>
                </div>
            </div>
            <div class="mb-2 mx-1 text-gray-900 text-center">
                <p>THINKBETTER is a blog aimed at familiarizing ideas and concepts from unfamiliar fields and building an online
                     mental toolbox to help you make better decisions and of course, <span class="font-semibold flex-no-wrap">think better.</span> 
                </p>
            </div>
        </div>
        <div class="w-full md:w-1/3 border-t mt-4 md:border-l md:border-t-0 border-gray-500 text-center">
            <div class="mt-3 font-bold uppercase mb-2">
                <div class="mt-3 font-bold uppercase mb-2">
                    <div class="flex uppercase justify-center text-gray-900 items-center whitespace-no-wrap px-2 md:py-1 text-center  font-inter  font-bold  md:rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current w-6 h-6 mr-1">
                            <path d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zM7.879 7.879l7.778-3.536-3.536 7.778-7.778 3.536L7.88 7.879zM10 11a1 1 0 100-2 1 1 0 000 2z"/>
                        </svg>   
                        explore
                    </div>
                </div>
            </div>
            <div class="hover:text-blue-500 rounded-lg ">
                <Link to="/tags/">Tags</Link>
            </div>
            <div class="hover:text-blue-500 rounded-lg  ">
                <Link to="/articles/">Articles</Link>
            </div>
            <div class="hover:text-blue-500 rounded-lg  ">
                <Link to="/legal/">Legal</Link>
            </div>
        </div>
        <div class="w-full md:w-1/3 border-t mt-5 md:border-l md:border-t-0 border-gray-500 text-center">
            <div class="mt-2 font-bold uppercase mb-2">
                <div class="flex uppercase justify-center text-gray-900 items-center whitespace-no-wrap px-2 md:py-1 text-center  font-inter  font-bold  md:rounded-lg">
                    <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"/></svg>
                    subscribe
                </div>
            </div>
            <div>
                <form class="px-0 md:px-4">
                    <div class="flex border-b border-gray-600 items-center py-2">
                      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="example@example.com" aria-label="E-MAIL ADDRESS">
                          </input>
                      <button id="subscribe" class="uppercase rounded-lg  mr-1 md:ml-1 px-2 py-1 md:px-4 md:py-2 text-sm md:text-md font-semibold bg-blue-900 text-white hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:shadow-outline focus:bg-red-800 whitespace-no-wrap" type="button">
                       <span class="text-lg mt-1">&#x2709;</span>  Subscribe
                      </button>
                        
                    </div>
                  </form>
            </div>
        </div>
    </div>
    <div class="flex justify-center items-center tracking-widest font-medium mt-2 uppercase">
        &copy; 2020 
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current w-6 h-6 md:w-6 md:h-6">
            <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
        </svg>    
        think better
    </div>
    <br>
    </br>
    <div class="mt-1 pb-4 px-10  flex text-gray-600 justify-around">
        <div class=" bg-gray-300 text-black hover:bg-gray-700 hover:text-gray-100 p-2 rounded-lg">
            <Link to="/legal/">Terms of Use</Link>
        </div>  
        <div class=" bg-gray-300 text-black hover:bg-gray-700 hover:text-gray-100 p-2 rounded-lg">
        <Link to="/legal/">Privacy Policy</Link>
        </div>
        <div class="bg-gray-300 text-black hover:bg-gray-700 hover:text-gray-100 p-2 rounded-lg">
        <Link to="/legal/">Cookies</Link>
        </div>
    </div>
</div>
    
    
  );
}

