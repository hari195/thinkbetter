import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AllNotes from "../components/all-notes"


export default function Notes() {
  return (
    
    <div>
      <Layout>

        <div class=" font-inter rounded-lg sm:mx-2 md:mx-20 px-2 pt-4 md:px-24 items-center text-center md:text-left">
          <div class="text-3xl px-8 mb-4 mt-2  font-semibold rounded   text-primary-900 align-middle items-center flex"> 
            Notes
          </div>
        </div>

       

        <AllNotes/>
        <br>
        </br>

        
      </Layout>
    </div>
  );
}
