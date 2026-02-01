import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, image, url, type = 'article', author = 'Bishal Bashyal' }) => {
    const siteName = 'Bishal Bashyal Portfolio';
    const fullTitle = `${title} | ${siteName}`;
    const canonicalUrl = `https://bishalb.com${url}`; // Update with actual domain
    const twitterHandle = '@bishalbashyal'; // Update if you have one

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={canonicalUrl} />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
            {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

            {/* Structured Data (JSON-LD) */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": type === 'article' ? 'BlogPosting' : 'WebPage',
                    "headline": title,
                    "image": [image],
                    "datePublished": new Date().toISOString(), // In a real app, pass the actual date
                    "author": [{
                        "@type": "Person",
                        "name": author,
                        "url": "https://bishalb.com"
                    }]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
