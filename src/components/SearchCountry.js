/** @format */

import { useContext } from "react";
import useSWR from "swr";
import { searchedCountryContext } from "../pages/_app";
import SearchPreview from "./SearchPreview";
import { Loader } from "./Loader";
import { SearchBar } from "./SearchBar";

export function SearchCountry() {
  const { searchedCountry } = useContext(searchedCountryContext);

  const getSearchResult = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchedCountry}?fields=name,flags,capital,cca2`
    );
    const data = await res.json();
    return data;
  };

  const key = searchedCountry
    ? `searchResult?search=${searchedCountry}`
    : "searchResult";

  const { data, isLoading } = useSWR(searchedCountry && key, getSearchResult);

  return (
    <section className="search">
      <SearchBar isLoading={isLoading} />

      <SearchPreview
        countriesData={data?.status == 404 ? false : data}
        searchedCountry={searchedCountry}
      />
    </section>
  );
}
