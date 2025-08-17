import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Fonts, Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Pick and inject the theme before first paint - CLS fix */}
        <Script id="theme-picker" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var themes = [
                  "theme-1.css","theme-2.css","theme-3.css","theme-4.css",
                  "theme-5.css","theme-6.css","theme-7.css","theme-8.css",
                  "theme-9.css","theme-10.css","theme-11.css","theme-12.css",
                  "theme-13.css","theme-14.css","theme-15.css","theme-16.css"
                ];
                var key = "themeHref";
                var href = localStorage.getItem(key);
                if (!href) {
                  href = "/assets/css/" + themes[Math.floor(Math.random() * themes.length)];
                  localStorage.setItem(key, href);
                }
                document.write('<link rel="stylesheet" href="' + href + '">');
              } catch (e) {}
            })();
          `}
        </Script>
      </Head>
      <body>
        {/* Global scripts that must run after the app */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
