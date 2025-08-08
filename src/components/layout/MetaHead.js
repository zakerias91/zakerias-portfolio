/* 
 * Dynamically selects a random theme CSS file on mount
 * Injects page title, favicon, and responsive meta tags
 * Loads FontAwesome and Bootstrap JS libraries (via CDN)
 */

import Head from 'next/head'
import Script from 'next/script';
import { useEffect, useState } from "react";

export default function Header() {

  const [themeHref, setThemeHref] = useState("");

  useEffect(() => {
    // List of available theme stylesheets
    const themes = [
      "theme-1.css", "theme-2.css", "theme-3.css", "theme-4.css",
      "theme-5.css", "theme-6.css", "theme-7.css", "theme-8.css",
      "theme-9.css", "theme-10.css", "theme-11.css", "theme-12.css",
      "theme-13.css", "theme-14.css", "theme-15.css", "theme-16.css"
    ];

    // Randomly pick a theme stylesheet from the list
    const randomTheme = themes[Math.floor(Math.random() * themes.length)];
    setThemeHref(`/assets/css/${randomTheme}`);
  }, []);
  
  return (
    <Head>
    {/* Page Title */}
    <title>Zakerias.com</title>
    {/* Meta */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <link rel="shortcut icon" href="favicon.ico" />

    {/* FontAwesome JS */}
    <Script defer src="/assets/js/all.js" strategy="beforeInteractive" />

    {/* External JS */}
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js" strategy="beforeInteractive" />
    <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js" strategy="beforeInteractive" />

    {/* Load randomly selected theme stylesheet */}
    {themeHref && <link rel="preload" href={themeHref} as="style" onload="this.rel='stylesheet'"/>}
    </Head>
  );
}