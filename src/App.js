import "./App.css";
import { useState, useEffect } from "react";

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
      <select
        value={selectedRegion ? selectedRegion : "selectRegion"}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="selectRegion">select Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default App;
