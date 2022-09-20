import { useState, useEffect } from "react";

export function SearchCountry({ setCountriesArray }) {
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleChange = (event) => {
    setSearchedCountry(event.target.value);
  };

  useEffect(() => {
    if (searchedCountry) {
      async function getCountry() {
        await fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`)
          .then((res) => {
            return res.json();
          })
          .then((searchResult) => {
            setCountriesArray([...searchResult]);

            // make session storage the source of truth
            window.sessionStorage.setItem(
              "countriesArray",
              JSON.stringify([...searchResult])
            );
          });
      }
      getCountry();
    } else {
      setCountriesArray("");
    }
  }, [searchedCountry]);

  return (
    <section className="search">
      <input
        value={searchedCountry && searchedCountry}
        onChange={handleChange}
        className="search__input"
        placeholder="search for a country..."
      ></input>
    </section>
  );
}
