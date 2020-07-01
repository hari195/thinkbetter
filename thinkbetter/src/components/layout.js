import React from "react"
import Helmet from 'react-helmet'

export default function Layout() {
    return (
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>THINK BETTER</title>
            </Helmet>
        </div>
    );
}