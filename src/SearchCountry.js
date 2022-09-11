import { useState } from "react";

export function SearchCountry({ countriesArray }) {
  const [searchedCountry, setSearchedCountry] = useState("");

  function handleChange(value) {
    setSearchedCountry(value);
  }
  return (
    <section className="search">
      <input
        value={searchedCountry && searchedCountry}
        onChange={(e) => handleChange(e.target.value)}
        className="search__input"
        placeholder="search for a country..."
      ></input>
    </section>
  );
}
