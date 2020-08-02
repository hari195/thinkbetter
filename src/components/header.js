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
  if (pathname !== "/"){ aboutTabHeader =    <div class="rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-md md:text-md hover:bg-primary-300">
  <Link to="/about/">About</Link>
  </div>} 
  else{
    aboutTabHeader = <div class="hidden rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-md md:text-md hover:bg-primary-300">
    <Link to="/about/">About</Link>
    </div>
  }
  
  return (
<div>

    <header class="top-0 mb-4 z-10 bg-primary-100 text-primary-900 fixed shadow-lg md:h-auto w-full md:px-12 py-2 transition-all duration-300 items-center justify-between"> 
        <div class="md:flex items-center justify-around md:justify-between">
     
            <h1 class="flex justify-center  items-center whitespace-no-wrap px-2 md:py-1 text-center text-xl font-sans font-bold tracking-tighter md:text-3xl md:rounded-lg hover:shadow-2xl hover:bg-primary-300 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current text-copy-500 w-6 h-6 md:w-6 md:h-6">
                    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                </svg>   
                <Link class="text-primary-900" to="/">Think Better<span class="text-secondary-500">.</span></Link>
            </h1>
       
            <div class=" flex items-center flex-wrap text-center align-center font-inter px-1 md:px-0 justify-around">
                <div class="rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-md md:text-md hover:bg-primary-300">
                    <Link to="/articles/">Articles</Link>
                </div>

                <div class="rounded-lg uppercase md:ml-1 px-2 py-1 md:px-4 md:py-2 font-semibold text-md md:text-md hover:bg-primary-300">
                    <Link to="/tags/">Browse</Link>
                </div>

                      {aboutTabHeader}

                <div class="rounded-lg p-2 align-center  px-2 pb-1 hover:text-white hover:bg-primary-300 fill-current">
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

                <Link to="/search/" class="hidden text-blue-200 hover:text-white hover:bg-gray-800 rounded-lg p-2 px-2 ml-1 fill-current" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-6 h-6">
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
                    </svg>
                </Link>
                
            </div>  
        </div>
    </header>
    <div class="h-16"></div>

            
</div>
  );
}

export default Header