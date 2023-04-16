/** @format */

import { useContext } from "react";
import { CountriesList } from "../components/CountriesList";
import { Header } from "../components/Header";
import { RegionMenu } from "../components/RegionMenu";
import { SearchCountry } from "../components/SearchCountry";
import { searchedCountryContext } from "./_app";

const SearchResult = () => {
  const { searchedCountry } = useContext(searchedCountryContext);
  console.log(searchedCountry);
  return (
    <>
      <Header />
      <main className="countriesSearchPage main">
        <SearchCountry />
        <RegionMenu />
        <CountriesList />
      </main>
    </>
  );
};

export default SearchResult;
