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
    <div className="countryPage__borders">
      <p className="countryPage__bordersLabel">Border Countries: </p>
      <ul className="countryPage_bordersList">
        {borderCountries &&
          borderCountries.map((borderCountry) => (
            <li key={borderCountry.name.common}>
              <Link to={`/${borderCountry.name.common}`}>
                {borderCountry.name.common}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
