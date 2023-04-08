/** @format */

// /** @format */

import { useState, useEffect } from "react";
import { CountriesList } from "./CountriesList";
import { RegionMenu } from "./RegionMenu";
import { SearchCountry } from "./SearchCountry";
import { Country } from "./Country";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Loader } from "./Loader";

function index() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const [loader, setLoader] = useState(false);

  const updateSearchResult = (id, fetchedData) => {
    setCountries((prev) => [{ id, data: fetchedData }, ...prev]);
  };

  const deleteSearchResult = (id) => {
    setCountries((prevState) =>
      prevState.filter((element) => element.id === id)
    );
  };

  // fetch countries data
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCountries = async () => {
      if (selectedRegion === "selectRegion") {
        deleteSearchResult("input");
        setLoader(false);
      } else if (selectedRegion) {
        setLoader(true);
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
          signal,
        })
          .then((res) => {
            return res.json();
          })
          .then((regionCountries) => {
            setLoader(false);
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
        setLoader(true);
        await fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`, {
          signal,
        })
          .then((res) => {
            return res.json();
          })
          .then((searchResult) => {
            setLoader(false);
            updateSearchResult("input", searchResult);
          })
          .catch(() => {
            !signal.aborted && setLoader(false);
          });
      }
      getCountry();
    } else {
      deleteSearchResult("select");
      setLoader(false);
    }

    // clean up effect
    return () => controller.abort();
  }, [searchedCountry]);

  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          exact
          path="/learn-countries"
          element={
            <main className="countriesSearchPage main">
              <SearchCountry
                setSearchedCountry={setSearchedCountry}
                searchedCountry={searchedCountry}
              />
              <RegionMenu
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
              />
              <CountriesList countries={countries} />
            </main>
          }
        />
        <Route
          path="/learn-countries/:countryCode"
          element={<Country setLoader={setLoader} />}
        />
      </Routes>

      {loader && <Loader />}
    </div>
  );
}

export default index;
