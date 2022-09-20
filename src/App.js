import "./App.css";
import { useState, useEffect } from "react";
import { CountriesList } from "./CountriesList";
import { RegionMenu } from "./RegionMenu";
import { SearchCountry } from "./SearchCountry";
import { Country } from "./Country";
import { Route, Routes } from "react-router-dom";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  // store countries data
  const [countriesArray, setCountriesArray] = useState("");

  // to inform user if no country founded
  const [isCountryFounded, setIsCountryFounded] = useState(true);

  // fetch countries data
  useEffect(() => {
    const getCountries = async () => {
      if (selectedRegion) {
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
          .then((res) => {
            // to be able to show search results
            setIsCountryFounded(true);

            return res.json();
          })
          .then((regionCountries) => {
            setCountriesArray([...regionCountries]);
            window.sessionStorage.setItem(
              "countriesArray",
              JSON.stringify([...regionCountries])
            );
          });
      }
    };

    getCountries();
  }, [selectedRegion]);

  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/learn-countries"
          element={
            <div>
              <SearchCountry
                setCountriesArray={setCountriesArray}
                setIsCountryFounded={setIsCountryFounded}
              />
              <RegionMenu
                selectedRegion={selectedRegion}
                handleChange={handleChange}
              />
              <CountriesList
                isCountryFounded={isCountryFounded}
                countriesArray={countriesArray}
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
