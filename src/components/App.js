import "../App.css";
import { useState, useEffect } from "react";
import { CountriesList } from "./CountriesList";
import { RegionMenu } from "./RegionMenu";
import { SearchCountry } from "./SearchCountry";
import { Country } from "./Country";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [countries, setCountries] = useState("");
  // to inform user if no country founded
  const [isCountryFounded, setIsCountryFounded] = useState(true);

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  // fetch countries data
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCountries = async () => {
      if (selectedRegion) {
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
          signal,
        })
          .then((res) => {
            // to be able to show search results
            setIsCountryFounded(true);

            return res.json();
          })
          .then((regionCountries) => {
            setCountries([...regionCountries]);
            window.sessionStorage.setItem(
              "countries",
              JSON.stringify([...regionCountries])
            );
          });
      }
    };
    getCountries();

    // clean up effect
    return () => controller.abort();
  }, [selectedRegion]);

  return (
    <div className="main">
      <Routes>
        <Route
          exact
          path="/learn-countries"
          element={
            <div className="countriesSearchPage">
              <SearchCountry
                setCountries={setCountries}
                setIsCountryFounded={setIsCountryFounded}
              />
              <RegionMenu
                selectedRegion={selectedRegion}
                handleChange={handleChange}
              />
              <CountriesList
                isCountryFounded={isCountryFounded}
                countries={countries}
                selectedRegion={selectedRegion}
              />
            </div>
          }
        />
        <Route path=":countryName" element={<Country />} />
      </Routes>
    </div>
  );
}

export default App;
