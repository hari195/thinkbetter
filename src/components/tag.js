import React from "react"


export default function Tag({ children }) {
    return (
      
        <div class="p-1 mr-2 text-sm border-2 hover:border-primary-700 border-secondary-500 uppercase rounded-md text-primary-900  font-semibold shadow-lg hover:bg-primary-700 hover:text-primary-100" >
                     
            {children}
         
        </div>
 
        
    );
}