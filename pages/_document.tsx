import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic SEO */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Tofunmi is a frontend developer building modern, responsive web apps with React,Next, Tailwind CSS, and TypeScript." />
        <meta name="author" content="Tofunmi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Tofunmi | Frontend Developer Portfolio" />
        <meta property="og:description" content="Building modern, fast web apps using React, Next and Tailwind CSS." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tofunmi.xyz" />
        <meta property="og:image" content="https://devtofunmi.tofunmi.xyz/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Funmi | Frontend Developer" />
        <meta name="twitter:description" content="Check out my portfolio showcasing React and Tailwind projects." />
        <meta name="twitter:image" content="https://devtofunmi.tofunmi.xyz/og-image.png" />
      </Head>
      <body className="antialiased bg-white text-gray-900 dark:bg-black dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
