import React from "react"


export default function Tag({ children }) {
    return (
      
        <div class="p-1 mr-2 text-sm lowercase rounded-md text-blue-900 font-semibold shadow-inner2 hover:bg-gray-800 hover:text-white" >
                     
            {children}
         
        </div>
 
        
    );
}