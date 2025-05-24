import React, { useEffect } from 'react';
import './adsbygoogle.css';

const GoogleAd = () => {
    useEffect(() => {
        const loadAds = () => {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            } catch (e) {
                console.error("AdsbyGoogle push error:", e);
            }
        };

        const insertAdScript = () => {
            const existingScript = document.querySelector(
                'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153"]'
            );

            if (!existingScript) {
                const script = document.createElement("script");
                script.src =
                    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7258253904826153";
                script.async = true;
                script.crossOrigin = "anonymous";
                script.onload = loadAds;
                document.body.appendChild(script);
            } else {
                loadAds();
            }
        };

        // Use requestIdleCallback if supported
        if ('requestIdleCallback' in window) {
            requestIdleCallback(() => insertAdScript());
        } else {
            // Fallback for unsupported browsers
            setTimeout(() => insertAdScript(), 2000);
        }
    }, []);

    return (
        <div className="ad-container" style={{ display: 'flex', justifyContent: 'center' }}>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', width: '100%', height: 'auto', maxWidth: '728px' }}
                data-ad-client="ca-pub-7258253904826153"
                data-ad-slot="2908264820"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </div>
    );
};

export default GoogleAd;
