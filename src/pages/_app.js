/** @format */
import { createContext, useState } from "react";
import "../styles/App.css";
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
