import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

import AboutCard from "../components/about-card"

export default function Home() {
  return (
    
    <div>
      <Layout>
      <AboutCard /> 
      </Layout>
    </div>
  );
}
