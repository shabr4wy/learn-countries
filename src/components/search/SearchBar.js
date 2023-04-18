/** @format */

import { useContext } from "react";
import { searchedCountryContext } from "../../pages/_app";
import { Loader } from "../Loader";
import { SearchIcon } from "./SearchIcon";

export function SearchBar({ isLoading }) {
  const { searchedCountry, setSearchedCountry } = useContext(
    searchedCountryContext
  );

  const handleChange = (value) => setSearchedCountry(value);

  return (
    <section className="search__searchBar">
      <SearchIcon />

      <input
        className="search__input"
        value={searchedCountry}
        type="search"
        name="q"
        pattern="^[a-zA-Z]+$"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="search for any country..."
      ></input>

      {isLoading && <Loader />}
    </section>
  );
}
