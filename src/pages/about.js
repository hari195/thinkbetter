import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

import AboutCard from "../components/about-card"

export default function Home() {
  return (
    
    <div>
      <Layout>
      <SEO title="About"/>
      <AboutCard /> 
      </Layout>
    </div>
  );
}
