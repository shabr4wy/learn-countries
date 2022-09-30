import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function BorderCountries({ countryData }) {
  const [borderCountries, setBorderCountries] = useState("");

  useEffect(() => {
    async function getBorders() {
      countryData &&
        countryData.borders &&
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
      <span> Border Countries: </span>
      {borderCountries &&
        borderCountries.map((borderCountry) => (
          <Link
            key={borderCountry.name.common}
            to={`/${borderCountry.name.common}`}
          >
            <li>{borderCountry.name.common}</li>
          </Link>
        ))}
    </ul>
  );
}
