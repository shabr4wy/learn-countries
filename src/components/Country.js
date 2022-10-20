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
            <div className="countryPage__nameAndMap">
              <p className="countryPage__name">{countryData.name.common}</p>
              <a
                className="countryPage__locationLink"
                href={countryData?.maps?.googleMaps}
              >
                <svg
                  className="countryPage__locationIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width="18"
                >
                  {/*Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
                  <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                </svg>{" "}
              </a>
            </div>
            <CountryGeogeapghy countryData={countryData} />
            <CountryLife countryData={countryData} />
            <BorderCountries countryData={countryData} />
          </div>
        </div>
      )}
    </main>
  );
}
