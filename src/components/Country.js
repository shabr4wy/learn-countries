import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BorderCountries } from "./BorderCountries";
import { CountryGeogeapghy } from "./CountryGeograpghy";
import { CountryLife } from "./CountryLife";

export function Country({ setLoader }) {
  const [countryData, setCountryData] = useState("");

  let params = useParams();

  useEffect(() => {
    async function getCountry() {
      setLoader(true);
      await fetch(`https://restcountries.com/v3.1/alpha/${params.countryCode}`)
        .then((res) => {
          return res.json();
        })
        .then((searchResult) => {
          setLoader(false);
          setCountryData({ ...searchResult[0] });
        });
    }
    getCountry();
  }, [params.countryCode, setLoader]);

  return (
    <main className="countryPage main">
      <Link className="countryPage__backToSearch" to="/learn-countries">
        ← search page
      </Link>
      {countryData && (
        <div className="countryPage__data">
          <div className="countryPage__flag">
            <img
              src={countryData.flags.svg}
              alt={countryData.name.common + " flag"}
              loading="lazy"
            ></img>
          </div>

          <div className="countryPage__details">
            <p className="countryPage__name">{countryData.name.common}</p>
            <CountryGeogeapghy countryData={countryData} />
            <CountryLife countryData={countryData} />
            <BorderCountries countryData={countryData} />
          </div>
        </div>
      )}
    </main>
  );
}
