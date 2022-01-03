import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { MyContainer } from "../components/MyContainer";
import { Navbar } from "../components/Navbar";
import { BASE_WEBSITE_NAME } from "../constants";
import "../styles/globals.css";

const appImageUrl = "https://i.imgur.com/CSsJjUQ.png";
const metaDescription =
  "A personal portfolio, showcasing projects, skills, contact information and more.";
const deployedSiteURL = "https://edvin-tronnberg.vercel.app/";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const start = (url: string) => {
      setIsLoading(true);
    };
    const end = (url: string) => {
      setIsLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <MyContainer className="py-8 text-gray-800">
      <Head>
        <title>{BASE_WEBSITE_NAME}</title>
        <meta name="description" content={metaDescription} />
        {/* facebook meta */}
        <meta property="og:url" content={deployedSiteURL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={BASE_WEBSITE_NAME} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={appImageUrl} />

        {/* twitter meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="edvin-tronnberg.vercel.app" />
        <meta property="twitter:url" content={deployedSiteURL} />
        <meta name="twitter:title" content={BASE_WEBSITE_NAME} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={appImageUrl} />
      </Head>
      <header>
        <Navbar />
      </header>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center align-middle justify-center min-h-[100vh]"
          >
            <SpinnerCircularFixed
              size={100}
              thickness={80}
              speed={300}
              color="rgba(239, 68, 68,1)"
              secondaryColor="rgba(172, 57, 57, 0)"
              className="mt-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {!isLoading && <Component {...pageProps} />}
    </MyContainer>
  );
}

export default MyApp;
