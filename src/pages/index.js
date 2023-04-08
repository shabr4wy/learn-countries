/** @format */

// /** @format */

import { useState, useEffect } from "react";
import { RegionMenu } from "../components/RegionMenu";
import { SearchCountry } from "../components/SearchCountry";
import { Header } from "../components/Header";

function index() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");

  // fetch countries data
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCountries = async () => {
      if (selectedRegion === "selectRegion") {
        deleteSearchResult("input");
      } else if (selectedRegion) {
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
          signal,
        })
          .then((res) => {
            return res.json();
          })
          .then((regionCountries) => {
            updateSearchResult("select", regionCountries);
          });
      }
    };
    getCountries();

    // clean up effect
    return () => controller.abort();
  }, [selectedRegion]);

  // get input result
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (searchedCountry) {
      async function getCountry() {
        await fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`, {
          signal,
        })
          .then((res) => {
            return res.json();
          })
          .then((searchResult) => {})
          .catch(() => {
            !signal.aborted;
          });
      }
      getCountry();
    }

    // clean up effect
    return () => controller.abort();
  }, [searchedCountry]);

  return (
    <>
      <Header />
      <main className="countriesSearchPage main">
        <SearchCountry
          setSearchedCountry={setSearchedCountry}
          searchedCountry={searchedCountry}
        />
        <RegionMenu
          selectedRegion={selectedRegion}
          setSelectedRegion={setSelectedRegion}
        />
      </main>
    </>
  );
}

export default index;
