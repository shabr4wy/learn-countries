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
      {/* region menu */}
      <section className="regionMenu">
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
      </section>

      {/* countries list */}
      <section>
        <ul className="countriesList">
          {countriesArray &&
            countriesArray.map((country) => (
              <li key={country.name.common} className="countryItem">
                <div className="countryFlag">
                  <img
                    src={country.flags.svg}
                    height="60"
                    width="100"
                    loading="lazy"
                  ></img>
                </div>

                <div className="countryInfo">
                  <p className="countryName">{country.name.common}</p>
                  <p className="countryCapital">Capital: {country.capital}</p>
                  <p className="countryRegion">Region: {country.region}</p>
                  <p className="countryPopulation">
                    Population: {country.population.toLocaleString("en-US")}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
