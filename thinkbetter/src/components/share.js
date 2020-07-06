import React from 'react'
import twitterIcon from '../images/bolt512.png'
import fbIcon from '../images/bolt512.png'


const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} @hkr195`;

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}`;

    const reddit = `http://www.reddit.com/submit?url=${props.url +
        props.pathname}&title=${props.title}`;

    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url}&title=${props.title}&summary=${props.summary}&source=`;

    
    return (
        
    <div class="flex text-center">
        <div class="p-2 rounded-lg hover:bg-gray-500">
        <a href={fb} target="_blank">
                        <img src={fbIcon} alt="facebook" class="w-6 h-6" />
                    </a>
        </div>
        <div class="p-2 rounded-lg hover:bg-gray-500 ">
        <a href={twitter} target="_blank" >
                        <img src={twitterIcon} alt="twitter" class="w-6 h-6" />
                    </a>
        </div>
        <div class="p-2 rounded-lg hover:bg-gray-500">
        <a href={reddit} target="_blank" >
                        <img src={twitterIcon} alt="reddit" class="w-6 h-6" />
                    </a>
        </div>
        <div class="p-2 rounded-lg hover:bg-gray-500">
        <a href={linkedin} target="_blank" >
                        <img src={twitterIcon} alt="linkedin" class="w-6 h-6" />
                    </a>
        </div>
    </div>
                  
    )
}

export default Share;