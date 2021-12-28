import type { AppProps } from "next/app";
import Head from "next/head";
import { MyContainer } from "../components/MyContainer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </MyContainer>
  );
}

export default MyApp;
