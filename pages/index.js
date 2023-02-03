import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>RachelYeeunKim</title>
        <meta name="description" content="Rachel Yeeun Kim's website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.gif" type="image/gif" />
        {/* <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicon/favicon-16x16.png"
          sizes="16x16"
        /> */}
        <meta property="og:title" content="Rachel Yeeun Kim" />
        <meta property="og:description" content="Rachel Yeeun Kim's website" />
        <meta charSet="utf-8" />
        <meta property="og:image" content="/social.png" />
      </Head>
      <img src="soon.png" className="soon"></img>

      <a
        href="https://www.instagram.com/9imyen/"
        className="whole"
        target="_blank"
        rel="noreferrer"
      >
        <div className="whole"></div>
      </a>
    </>
  );
}
