/** @format */
import { createContext, useState } from "react";
import "../styles/App.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "../components/Loader";

export const searchedCountryContext = createContext("");

export default function App({ Component, pageProps }) {
  const [searchedCountry, setSearchedCountry] = useState("");

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  router.events?.on("routeChangeStart", () => setIsLoading(true));
  router.events?.on("routeChangeComplete", () => setIsLoading(false));

  return (
    <searchedCountryContext.Provider
      value={{ searchedCountry, setSearchedCountry }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Abdullah Elshabrawy" />
        <meta
          name="description"
          content="a website that shows countries' data such as flag, city capital, population number, region, border countries, and much more"
        />
        <title>Learn Countries</title>
      </Head>
      <Component {...pageProps} />
      {isLoading && <Loader />}

      <Analytics />
    </searchedCountryContext.Provider>
  );
}
