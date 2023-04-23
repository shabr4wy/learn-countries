/** @format */

import { useContext } from "react";
import useSWR from "swr";
import { searchedCountryContext } from "../../pages/_app";
import SearchPreview from "./SearchPreview";
import { SearchBar } from "./SearchBar";

export function SearchCountry() {
  const { searchedCountry } = useContext(searchedCountryContext);

  const getSearchResult = async () => {
    return await fetch(
      `https://restcountries.com/v3.1/name/${searchedCountry}?fields=name,flags,capital,cca2`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .catch((err) => {
        console.error(err);
        throw err;
      });
  };

  const { data, isLoading, error, mutate } = useSWR(
    searchedCountry && "searchResult",
    getSearchResult
  );

  // if input is deleted, remove search result of previuos fetch calls.
  !searchedCountry && mutate([]);

  return (
    <section className="search">
      <SearchBar isLoading={isLoading} mutate={mutate} />

      {<SearchPreview countriesData={data} error={error} />}
    </section>
  );
}
