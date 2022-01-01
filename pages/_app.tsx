import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
import Router from "next/router";
import { useEffect, useState } from "react";
import { SpinnerCircularFixed } from "spinners-react";
import { MyContainer } from "../components/MyContainer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

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
        <title>Edvin Trönnberg</title>
        <meta
          name="description"
          content="Edvin Trönnbergs portfolio website that includes projects, skills, contact information and more."
        />
      </Head>
      <header>
        <Navbar />
      </header>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
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
      ) : (
        <Component {...pageProps} />
      )}
    </MyContainer>
  );
}

export default MyApp;
