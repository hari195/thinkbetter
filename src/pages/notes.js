import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AllNotes from "../components/all-notes"


export default function Notes() {
  return (
    
    <div>
      <Layout>

        <br>
        </br>
        <div class="font-inter rounded-lg ml-4 mr-4 sm:mx-2  px-8 pt-4 md:px-20 md:text-left items-center text-center">
          <div class="text-2xl -ml-1 text-primary-900 md:text-3xl font-semibold rounded px-1  pl-1" > 
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
