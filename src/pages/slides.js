import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import AboutCard from "../components/about-card"

export default function Home() {
  return (
    
    <div>
      <Layout>
      <SEO title="About"/>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTFTisF_v6S-ke2bfP_0Tgd-O09KeCJqvnpeXBJeoW5U1FyZeh4DZ5RvWWrliNcOtO53lthEcLiZTQg/embed?start=true&loop=false&delayms=3000" 
      frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"
      class="mx-16"></iframe>
      </Layout>
    </div>
  );
}
