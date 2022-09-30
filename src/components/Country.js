import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BorderCountries } from "./BorderCountries";
import { CountryGeogeapghy } from "./CountryGeograpghy";
import { CountryLife } from "./CountryLife";

export function Country() {
  const [countryData, setCountryData] = useState("");

  let params = useParams();

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
      <Link className="countryPage__backbtn" to="/learn-countries">
        ← search page
      </Link>
      {countryData && (
        <div className="countryPage__grid">
          <div className="countryPage__flag">
            <img
              src={countryData.flags.svg}
              alt={countryData.name.common + " flag"}
              loading="lazy"
            ></img>
          </div>

          <div>
            <p className="countryPage__name">{countryData.name.common}</p>
          </div>

          <CountryGeogeapghy countryData={countryData} />
          <CountryLife countryData={countryData} />
          <BorderCountries countryData={countryData} />
        </div>
      )}
    </div>
  );
}
