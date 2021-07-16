import React from "react"





export default function TitleRender({ children, data }) {
    if (data.frontmatter.type == "notes"){
    return (
        <div class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-primary-300 rounded px-1 text-primary-900 pl-1" >
            {children}
        </div>
    );}

    else {
        return (
            <div class="flex align-middle items-center">
                
                <div class="text-2xl -ml-1 md:text-3xl font-semibold hover:bg-primary-300 rounded px-1 text-primary-900 pl-1">
                {children}
                </div>
                <div class="text-green-500 uppercase ml-2 p-1 font-semibold rounded-lg border-2 border-green-500">
                    DEEP DIVE
                </div>
            </div>
            
        )
    }
}