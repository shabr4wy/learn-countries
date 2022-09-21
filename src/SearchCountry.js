import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export function SearchCountry({ setCountriesArray, setIsCountryFounded }) {
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
            // to be able to show search results
            setIsCountryFounded(true);

            return res.json();
          })
          .then((searchResult) => {
            setCountriesArray([...searchResult]);

            // make session storage the source of truth
            window.sessionStorage.setItem(
              "countriesArray",
              JSON.stringify([...searchResult])
            );
          })
          .catch(() => {
            // inform user that is no country founded

            // make catch works only if no search result to prevent unexpected behavior
            // beacause without if the catch wil work after fetch is aborted
            if (signal.aborted === false) {
              setIsCountryFounded(false);
            }
          });
      }
      getCountry();
    } else {
      setCountriesArray("");

      // prevent showing "no country found" as the text input is already empty
      setIsCountryFounded(true);
    }

    // clean up effect
    return () => controller.abort();
  }, [searchedCountry]);

  return (
    <section className="search">
      <input
        onChange={debounceHandleChange}
        className="search__input"
        placeholder="search for a country..."
      ></input>
    </section>
  );
}
