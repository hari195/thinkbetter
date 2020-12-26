import React from "react"
import Helmet from 'react-helmet'
import Footer from "./footer"
import LatticeHeader from "./lattice-header"
import SEO from "../components/seo"


export default function LatticeLayout({ children }) {
    return (
        <div id="lattice-layout" >
            <div class="bg-pattern">
                <SEO />
            <Helmet>
                <head profile="http://www.w3.org/2005/10/profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Helmet>
            <LatticeHeader />
            {children}
            <Footer />
            </div>
        </div>
    );
}