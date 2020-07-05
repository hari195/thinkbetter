import React from 'react'
import twitterIcon from '../images/bolt512.png'
import fbIcon from '../images/bolt512.png'


const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @hkr195`;

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}`;

    return (
        <div>
            <h3 >Share</h3>
            <ul >
                <li>
                    <a href={fb} target="blank">
                        <img src={fbIcon} alt="facebook" />
                    </a>
                </li>
                <li>
                    <a href={twitter} target="blank">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Share;