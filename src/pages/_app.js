/** @format */
import { createContext, useState } from "react";
import "../styles/sass/App.scss";
import { Analytics } from "@vercel/analytics/react";

export const searchedCountryContext = createContext("");

export default function App({ Component, pageProps }) {
  const [searchedCountry, setSearchedCountry] = useState("");

  return (
    <searchedCountryContext.Provider
      value={{ searchedCountry, setSearchedCountry }}
    >
      <Component {...pageProps} />

      <Analytics />
    </searchedCountryContext.Provider>
  );
}
