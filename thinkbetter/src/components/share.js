import React from 'react'

const Share = props => {

    const twitter = `https://twitter.com/intent/tweet?url=${props.url +
        props.pathname}&text=${props.title} by @hkr195`;

    const fb = `https://www.facebook.com/sharer/sharer.php?u=${props.url +
        props.pathname}`;

    const reddit = `http://www.reddit.com/submit?url=${props.url +
        props.pathname}&title=${props.title}`;

    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${props.url + props.pathname}&title=${props.title}&summary=${props.summary}&source=`;
    const linkedin2 = `https://www.linkedin.com/sharing/share-offsite/?url=${props.url}`;
    
    return (
        
    <div class="flex justify-center text-center share">
        <div class="p-2 rounded-lg hover:bg-primary-300 text-copy-500 hover:text-primary-900">
            <a href={fb} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" alt="facebook" viewBox="0 0 20 20" class="fill-current w-6 h-6" >
                    <path d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z"/>
                </svg>              
            </a>
        </div>
        <div class="p-2 rounded-lg hover:bg-primary-300 text-copy-500 hover:text-primary-900">
        <a href={twitter} target="_blank" >
        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current w-6 h-6" viewBox="0 0 20 20">
            <path  d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 005.588-1.562 3.779 3.779 0 01-3.526-2.621 3.858 3.858 0 001.705-.065 3.779 3.779 0 01-3.028-3.703v-.047a3.766 3.766 0 001.71.473 3.775 3.775 0 01-1.168-5.041 10.716 10.716 0 007.781 3.945 3.813 3.813 0 01-.097-.861 3.773 3.773 0 013.774-3.773 3.77 3.77 0 012.756 1.191 7.602 7.602 0 002.397-.916 3.789 3.789 0 01-1.66 2.088 7.55 7.55 0 002.168-.594 7.623 7.623 0 01-1.884 1.953z"/>
            </svg>
                     
                    </a>
        </div>
        <div class="p-2 rounded-lg hover:bg-primary-300 text-copy-500 hover:text-primary-900">
        <a href={reddit} target="_blank" >
        <svg xmlns="http://www.w3.org/2000/svg" class="hover:text-primary-900 fill-current w-6 h-6" viewBox="0 0 64 64" >
            <circle data-name="layer2" cx="22.5" cy="36.4" r="4.3" class="fill-current  " />
            <path class="fill-current" data-name="layer1" d="M64 32.9a9.585 9.585 0 00-9.4-9.7 8.356 8.356 0 00-4.9 1.5 34.055 34.055 0 00-16.1-4.4l3.5-10.1 7.3 1.7c0 .2-.1.5-.1.7a7.376 7.376 0 101.1-3.8L35 6.3l-4.9 14a33.784 33.784 0 00-16 4.7c.1-.1.2-.1.2-.2a9.068 9.068 0 00-5.1-1.6c-5 0-9.2 4.4-9.2 9.7a9.5 9.5 0 004.7 8.3c1.1 10 13 17.8 27.5 17.8 14.6 0 26.5-8 27.5-18a9.638 9.638 0 004.3-8.1zM51.6 8.6a4 4 0 11-4 4 4.012 4.012 0 014-4zM9.4 26.5a7.789 7.789 0 012.1.4 17.149 17.149 0 00-6.7 10.3 6.452 6.452 0 014.6-10.7zm22.8 29.3c-13.4 0-24.4-7.2-24.4-16.2 0-8.9 10.9-16.2 24.4-16.2 13.4 0 24.3 7.2 24.3 16.2S45.6 55.8 32.2 55.8zm27.2-19a17.742 17.742 0 00-6.6-10 5.663 5.663 0 011.8-.3 6.257 6.257 0 016.1 6.4 5.44 5.44 0 01-1.3 3.9z" />
            <circle class="fill-current" data-name="layer2" cx="41" cy="36.4" r="4.3" />
            <path class="fill-current " data-name="layer1" d="M40.3 46c-9.1 6-16.5.3-16.8.1a1.7 1.7 0 00-2.3.2 1.607 1.607 0 00.2 2.3A17.783 17.783 0 0031.8 52a18.23 18.23 0 0010.3-3.3 1.623 1.623 0 10-1.8-2.7z" />
        </svg>
       
                    </a>
        </div>
        <div class="p-2 rounded-lg hover:bg-primary-300 text-copy-500 hover:text-primary-900">
        <a href={linkedin} target="_blank" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current w-6 h-6">
            <path  d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"/>
        </svg>
                    </a>
        </div>
    </div>
                  
    )
}

export default Share;