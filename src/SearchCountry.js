import { useState, useEffect, useMemo } from "react";
import debounce from "lodash.debounce";

export function SearchCountry({ setCountries, setIsCountryFounded }) {
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
