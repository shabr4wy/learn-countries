import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Country() {
  let params = useParams();
  const [countryData, setCountryData] = useState("");

  useEffect(() => {
    async function getCountry() {
      await fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
        .then((res) => {
          return res.json();
        })
        .then((searchResult) => {
          setCountryData({ ...searchResult[0] });
        });
    }
    getCountry();
  }, [params]);

  return (
    <div className="countryPage">
      <Link className="countryPage__backbtn" to="/">
        back
      </Link>
      {countryData && (
        <div className="countryPage__grid">
          <div className="countryPage__flag">
            <img
              src={countryData.flags.svg}
              alt={countryData.name.common + " flag"}
              height="60"
              width="100"
              loading="lazy"
            ></img>
          </div>

          <div>
            <p className="countryPage__name">{countryData.name.common}</p>
          </div>

          <ul className="countryPage__geograpghy">
            <li className="countryPage__capital">
              Capital: {countryData.capital}
            </li>
            <li className="countryPage__region">
              Region: {countryData.region}
            </li>
            <li className="countryPage__subRegion">
              Sub Region: {countryData.subregion}
            </li>
            <li className="countryPage__population">
              Population: {countryData.population.toLocaleString("en-US")}
            </li>
          </ul>

          <ul className="countryPage__life">
            <li>Car Side: {countryData.car.side}</li>
          </ul>
        </div>
      )}
    </div>
  );
}