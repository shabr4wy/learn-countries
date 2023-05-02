/** @format */

import { useContext } from "react";
import { searchedCountryContext } from "../../pages/_app";
import { Loader } from "../Loader";
import { SearchIcon } from "./SearchIcon";
import { SearchLoader } from "./SearchLoader";

export function SearchBar({ isLoading, mutate }) {
  const { searchedCountry, setSearchedCountry } = useContext(
    searchedCountryContext
  );

  const handleChange = (value) => {
    setSearchedCountry(value);
    mutate();
  };

  return (
    <section className="search__bar">
      {isLoading ? <SearchLoader /> : <SearchIcon />}

      <input
        className="search__input"
        value={searchedCountry}
        type="search"
        name="q"
        autoComplete="off"
        pattern="^[a-zA-Z]+$"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="search for any country..."
      ></input>
    </section>
  );
}
