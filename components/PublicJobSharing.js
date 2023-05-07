import Head from 'next/head'
import React from 'react'

const PublicJobSharing = ({ jobTitle2, desc3, array }) => {
    return (
        <div>
            <Head>
                <title>Lineupx Application recruiter job detail</title>
                <meta name="description" content={`Hi! We have an opportunity for ${jobTitle2} | Exp: ${array[0] + ' yrs'} | Job Type: ${array[2]} | Job Location: ${array[1]}`} />
                <meta name="theme-color" content="#008f68" />
                <meta property="og:url" content="https://lineupx.com" />
                <meta property="og:title" content="LineupX" />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={`Hi! We have an opportunity for ${jobTitle2} | Exp: ${array[0] + ' yrs'} | Job Type: ${array[2]} | Job Location: ${array[1]}`} />
                <meta property="og:image" content={`https://vercel-og-nextjs-theta.vercel.app/api/dynamic-image?logourl=${"https://s3.ap-south-1.amazonaws.com/cdn.lineupx.com/images/logo/Icon-Fill-Blue.png"}&title=${jobTitle2}&desc=${desc3}&pageType=${'publicShareJobDescription'}`} />

                <meta name="twitter:site" content={'https://lineupx.com'} />
                <meta name="twitter:title" content={'LineupX'} />
                <meta name="twitter:description" content={`Hi! We have an opportunity for ${jobTitle2} | Exp: ${array[0] + ' yrs'} | Job Type: ${array[2]} | Job Location: ${array[1]}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image:src" content={`https://vercel-og-nextjs-theta.vercel.app/api/dynamic-image?logourl=${"https://s3.ap-south-1.amazonaws.com/cdn.lineupx.com/images/logo/Icon-Fill-Blue.png"}&title=${jobTitle2}&desc=${desc3}&pageType=${'publicShareJobDescription'}`} />
            </Head>

            Hello testing public job sharing {jobTitle2}
            <div>

                {array[0] + ' yrs'}
            </div>
        </div>
    )
}

export default PublicJobSharing