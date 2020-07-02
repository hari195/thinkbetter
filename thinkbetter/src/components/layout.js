import React from "react"
import Helmet from 'react-helmet'
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
    return (
        <div id="layout">
            <Helmet>
                <head profile="http://www.w3.org/2005/10/profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>THINK BETTER</title>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </div>
    );
}