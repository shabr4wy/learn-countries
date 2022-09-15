import { useState, useEffect } from "react";

export function BorderCountries({ countryData }) {
  const [borderCountries, setBorderCountries] = useState("");

  useEffect(() => {
    async function getBorders() {
      countryData &&
        (await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${countryData.borders.join()}`
        )
          .then((res) => {
            return res.json();
          })
          .then((borderCountries) => {
            setBorderCountries([...borderCountries]);
          }));
    }
    getBorders();
  }, [countryData]);

  return (
    <ul className="countryPage_borders">
      {borderCountries &&
        borderCountries.map((borderCountry) => (
          <li key={borderCountry.name.common}>{borderCountry.name.common}</li>
        ))}
    </ul>
  );
}
