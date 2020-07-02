import React from "react"
import Helmet from 'react-helmet'

export default function Layout({ children }) {
    return (
        <div id="layout">
            <Helmet>
                <head profile="http://www.w3.org/2005/10/profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>THINK BETTER</title>
            </Helmet>
            {children}
        </div>
    );
}