import React from "react"

const Header = () => {
   
  return (
<div>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <head profile="http://www.w3.org/2005/10/profile">
    </head>

    <header class="mb-4 z-10 theme-light bg-primary-100 fixed shadow-lg md:h-auto w-full md:px-8 py-1 transition-all duration-300 items-center justify-between"> 
    
        <div class="md:flex items-center justify-around md:justify-between">
            <a href="www.google.com">
            <h1 class="flex uppercase justify-center text-gray-900 items-center whitespace-no-wrap px-2 md:py-1 text-center text-xl font-inter  font-light md:text-2xl md:rounded-lg hover:shadow-2xl tracking-widest hover:bg-blue-900 hover:text-gray-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 20 20" class="fill-current w-6 h-6 md:w-6 md:h-6">
                    <path d="M13 8V0L8.11 5.87 3 12h4v8L17 8h-4z"/>
                </svg>   
                think better
            </h1>
            </a>
               
            <div class=" flex items-center flex-wrap text-center font-inter px-1 md:px-0 justify-around">
                

                <a class="text-blue-200 hover:text-white hover:bg-gray-800 rounded-lg p-2 px-4 md:p-4 fill-current" href="/articles">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-6 h-6">
                        <path d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/>
                    </svg>
                </a>


                <a class="uppercase rounded-lg md:ml-1 px-2 py-1 md:px-4 md:py-2 font-normal hover:bg-gray-800 hover:text-gray-200" href="www.google.com">
                    Articles
                </a>

                <a class="uppercase rounded-lg  md:ml-1 px-2 py-1 md:px-4 md:py-2 text-sm md:text-md font-semibold md:font-bold hover:bg-gray-400 hover:text-gray-800" href="www.google.com">
                    Chatter
                </a>

                <a class="uppercase rounded-lg  mr-1 md:ml-1 px-2 py-1 md:px-4 md:py-2 text-sm md:text-md font-semibold bg-blue-900 text-white hover:bg-gray-100 hover:text-gray-900 hover:border-black border" href="#subscribe">
                    Subscribe
                </a>
            </div>  
        </div>
    </header>
</div>
  );
}

export default Header