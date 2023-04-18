/** @format */

import { useContext } from "react";
import useSWR from "swr";
import { searchedCountryContext } from "../pages/_app";
import SearchPreview from "./SearchPreview";
import { Loader } from "./Loader";

export function SearchCountry() {
  const { searchedCountry, setSearchedCountry } = useContext(
    searchedCountryContext
  );

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

  const handleChange = (value) => setSearchedCountry(value);

  return (
    <section className="search">
      <svg
        viewBox="0 0 512 512"
        className="search__icon"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
      </svg>

      <input
        className="search__input"
        value={searchedCountry}
        type="search"
        name="q"
        pattern="^[a-zA-Z]+$"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="search for any country..."
      ></input>

      {isLoading ? (
        <Loader />
      ) : (
        <SearchPreview
          countriesData={data?.status == 404 ? false : data}
          searchedCountry={searchedCountry}
        />
      )}
    </section>
  );
}
