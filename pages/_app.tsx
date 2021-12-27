import type { AppProps } from "next/app";
import { MyContainer } from "../components/MyContainer";
import { Navbar } from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MyContainer className="py-8 text-gray-800">
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </MyContainer>
  );
}

export default MyApp;
