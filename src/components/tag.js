import React from "react"


export default function Tag({ children }) {
    return (
      
        <div class="p-1 mr-2 text-sm uppercase rounded-md text-primary-900 bg-primary-300 font-semibold shadow-lg hover:bg-primary-700 hover:text-primary-100" >
                     
            {children}
         
        </div>
 
        
    );
}