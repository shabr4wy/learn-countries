/** @format */

import { useContext } from "react";
import { CountriesList } from "../components/CountriesList";
import { Header } from "../components/Header";
import { searchedCountryContext } from "./_app";
import useSWR from "swr";

const SearchResult = () => {
  const { searchedCountry } = useContext(searchedCountryContext);

  const getSearchResult = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchedCountry}?fields=name,flags,population,region,capital,cca2`
    );
    const data = await res.json();

    return data;
  };

  const { data } = useSWR(searchedCountry && "searchResult", getSearchResult);
  return (
    <>
      <Header />
      <main className="countriesSearchPage main">
        <CountriesList countries={data} />
      </main>
    </>
  );
};

export default SearchResult;
