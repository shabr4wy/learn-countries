import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export function SearchCountry({
  setCountries,
  setIsCountryFounded,
  toggleElementBackground,
}) {
  const [searchedCountry, setSearchedCountry] = useState("");

  const handleChange = (event) => {
    setSearchedCountry(event.target.value);
  };

  // debounce search input
  // you don't know what is debouncing? check the following article:
  // https://css-tricks.com/debouncing-throttling-explained-examples/
  // how to debounce? check the following article:
  // https://dmitripavlutin.com/react-throttle-debounce/
  const debounceHandleChange = useMemo(() => debounce(handleChange, 200), []);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (searchedCountry) {
      async function getCountry() {
        await fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`, {
          signal,
        })
          .then((res) => {
            setIsCountryFounded(true);
            return res.json();
          })
          .then((searchResult) => {
            setCountries([...searchResult]);

            // make session storage the source of truth
            window.sessionStorage.setItem(
              "countries",
              JSON.stringify([...searchResult])
            );
          })
          .catch(() => {
            // prevent catch from running unless the result is invalid
            if (signal.aborted === false) {
              setIsCountryFounded(false);
            }
          });
      }
      getCountry();
    } else {
      setCountries("");

      // prevent showing "no country found" as the text input is already empty
      setIsCountryFounded(true);
    }

    // clean up effect
    return () => controller.abort();
  }, [searchedCountry, setCountries, setIsCountryFounded]);

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
        onChange={debounceHandleChange}
        placeholder="search for a country..."
        style={{ background: toggleElementBackground() }}
      ></input>
    </section>
  );
}
