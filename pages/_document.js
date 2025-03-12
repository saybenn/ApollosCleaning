import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Modern browsers (WebP) */}
        <link rel="icon" type="image/webp" href="/favicon.webp" sizes="32x32" />

        {/* Fallbacks for older browsers */}
        <link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
        {/* ✅ Load Google Fonts here instead of inside <Head> in _app.js */}

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=STIX+Two+Text:ital,wght@0,400..700;1,400..700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
