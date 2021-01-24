import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import {Link} from "gatsby"
import {  useState } from "react"
import { useLocation } from "@reach/router"
import useDarkMode from 'use-dark-mode';

const Header = () => {
  
  const darkModeConfig = { classNameDark : "theme-dark", classNameLight: "theme-light"}

  const darkMode = useDarkMode(true, darkModeConfig);
  let aboutTabHeader;
  const { pathname } = useLocation()
  if (pathname !== "/"){ aboutTabHeader =    <div class="rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-sm md:text-sm hover:bg-primary-300">
  <Link to="/about/">About</Link>
  </div>} 
  else{
    aboutTabHeader = <div class="hidden rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-sm md:text-sm hover:bg-primary-300">
    <Link to="/about/">About</Link>
    </div>
  }
  
  return (
<div>
  <header class="top-0 mb-4 z-10 bg-primary-100 text-primary-900 fixed shadow-lg md:h-auto w-full md:px-40 py-2  transition-all duration-1000 items-center justify-between"> 
    <div class="md:flex items-center justify-around md:justify-between">
     
      <h1 class="flex justify-center  items-center whitespace-nowrap px-2 md:py-1 text-center text-xl font-sans font-bold tracking-tighter md:text-3xl md:rounded-lg hover:shadow-2xl hover:bg-primary-300 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current text-copy-500 w-6 h-6 md:w-6 md:h-6">
            <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
        </svg>   
        <Link class="text-primary-900" to="/">Think Better<span class="text-secondary-500">.</span></Link>
      </h1>
       
      <div class=" flex flex-wrap items-center text-center align-center font-inter px-1 md:px-0  justify-center lg:justify-around ">
      
        <div class="rounded-lg p-2 align-center  px-2 pb-1  hover:text-white hover:bg-primary-300 fill-current">
          <ThemeToggler>
            {
            ({ theme, toggleTheme }) => (
              <label id="theme-toggler">
                <input
                  type="checkbox"
                  class="hidden"
                  onChange={darkMode.toggle}
                  
                />
                {darkMode.value === true ? (
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current w-6 h-6">
                    <path fill="#FF9A21" d="M19 9.199h-.98c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799H19c.552 0 1-.357 1-.799 0-.441-.449-.801-1-.801zM10 4.5c-3.051 0-5.5 2.449-5.5 5.5s2.449 5.5 5.5 5.5c3.05 0 5.5-2.449 5.5-5.5S13.049 4.5 10 4.5zm0 9.5c-2.211 0-4-1.791-4-4 0-2.211 1.789-4 4-4a4 4 0 010 8zm-7-4c0-.441-.449-.801-1-.801H1c-.553 0-1 .359-1 .801 0 .441.447.799 1 .799h1c.551 0 1-.358 1-.799zm7-7c.441 0 .799-.447.799-1V1c0-.553-.358-1-.799-1-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1zm0 14c-.442 0-.801.447-.801 1v1c0 .553.359 1 .801 1 .441 0 .799-.447.799-1v-1c0-.553-.358-1-.799-1zm7.365-13.234c.391-.391.454-.961.142-1.273s-.883-.248-1.272.143l-.7.699c-.391.391-.454.961-.142 1.273s.883.248 1.273-.143l.699-.699zM3.334 15.533l-.7.701c-.391.391-.454.959-.142 1.271s.883.25 1.272-.141l.7-.699c.391-.391.454-.961.142-1.274s-.883-.247-1.272.142zm.431-12.898c-.39-.391-.961-.455-1.273-.143s-.248.883.141 1.274l.7.699c.391.391.96.455 1.272.143s.249-.883-.141-1.273l-.699-.7zm11.769 14.031l.7.699c.391.391.96.453 1.272.143.312-.312.249-.883-.142-1.273l-.699-.699c-.391-.391-.961-.455-1.274-.143s-.248.882.143 1.273z"/>
                </svg>   
                </div>
                ) : (
              
                          <div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current w-6 h-6">
                              <path fill="#1A202C" d="M13.719 1.8A8.759 8.759 0 111.8 13.719c3.335 1.867 7.633 1.387 10.469-1.449 2.837-2.837 3.318-7.134 1.45-10.47z"
                                  />
                          </svg>
                      </div>
                )}     
              </label>
            )}
          </ThemeToggler>   
        </div>

        {aboutTabHeader}

        <div class="rounded-lg uppercase md:ml-1 px-1 py-1 md:px-2 md:py-1 font-semibold text-sm md:text-sm hover:bg-primary-300">
          <Link to="/notes/">Notes</Link>
        </div>

        <div class="rounded-lg uppercase md:ml-1 px-1 py-1 md:px-2 md:py-1 font-semibold text-sm md:text-sm hover:bg-primary-300">
            <Link to="/resources/">Resources</Link>
        </div>

        <div class="rounded-lg uppercase md:ml-1 px-1 py-1 md:px-2 md:py-1 font-semibold text-sm md:text-sm hover:bg-primary-300">
            <Link to="/tags/">Browse</Link>
        </div>
              

        <Link to="/lattice" class="hidden hover:bg-primary-300 rounded-lg  px-1 py-1 md:px-2 md:py-1  ml-1 fill-current" >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class=" fill-current text-red-500 w-6 h-6 md:w-7 md:h-7">
            <path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd" />
          </svg>
        </Link>
        
        <div class="hidden  rounded-lg uppercase md:ml-1 px-1 py-1 md:px-2 md:py-1 font-semibold text-sm md:text-sm hover:bg-primary-300">
            <Link to="/Lattice/">Lattice</Link>
        </div>
        
        <div class="hidden rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-sm md:text-sm bg-red-500 hover:bg-primary-300 text-black">
            <Link to="#">Lattice</Link>
        </div>

        <Link to="http://shotbyhkr.com  " class="hidden hover:bg-primary-300 rounded-lg p-2 px-2 ml-1 fill-current" >
          <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-primary-900 w-6 h-6 md:w-7 md:h-7">
            <path fill-rule="evenodd" d="M0 6.006C0 4.898.894 4 2.005 4H5l2-2h6l2 2h2.995C19.102 4 20 4.897 20 6.006v9.988A2.003 2.003 0 0118.01 18H1.99C.892 18 0 17.103 0 15.994V6.006zM10 16a5 5 0 100-10 5 5 0 000 10zm0-2a3 3 0 100-6 3 3 0 000 6z"  fill-rule="evenodd"/>
          </svg>
        </Link>

        <div class="hidden rounded-lg uppercase ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-sm md:text-sm bg-secondary-500 hover:bg-primary-300 text-black">
            <Link to="https://landing.mailerlite.com/webforms/landing/l7c4p8">Subscribe</Link>
        </div>
                
        <Link to="/search/" class="hidden text-blue-200 hover:text-white hover:bg-gray-800 rounded-lg p-2 px-2 ml-1 fill-current" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-6 h-6">
                <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
            </svg>
        </Link>
                
      </div>  
    </div>
  </header>
<div class=" h-24 md:h-16"></div>

            
</div>
  );
}

export default Header