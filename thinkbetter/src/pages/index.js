import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Layout from "../components/layout";


export default function Home() {
  return (
    
    <div>
      <Layout />
      <Header />
      <h1 class="bg-gray-500">Hello Gatsby!</h1>
      <p>What a world.</p>
      <Footer />
    </div>
  );
}