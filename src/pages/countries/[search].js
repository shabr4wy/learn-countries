/** @format */

import { CountriesList } from "../../components/CountriesList";
import { Header } from "../../components/Header";
import { RegionMenu } from "../../components/RegionMenu";
import { SearchCountry } from "../../components/SearchCountry";

const Search = () => {
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

export default Search;
