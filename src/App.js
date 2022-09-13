import "./App.css";
import { useState, useEffect } from "react";
import { CountriesList } from "./CountriesList";
import { RegionMenu } from "./RegionMenu";
import { SearchCountry } from "./SearchCountry";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  // store countries data
  const [countriesArray, setCountriesArray] = useState("");

  // fetch countries data
  useEffect(() => {
    const getCountries = async () => {
      if (selectedRegion) {
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`)
          .then((res) => {
            return res.json();
          })
          .then((regionCountries) => {
            setCountriesArray([...regionCountries]);
          });
      }
    };

    getCountries();
  }, [selectedRegion]);

  return (
    <div className="App">
      <SearchCountry setCountriesArray={setCountriesArray} />
      <RegionMenu selectedRegion={selectedRegion} handleChange={handleChange} />
      <CountriesList countriesArray={countriesArray} />
    </div>
  );
}

export default App;
