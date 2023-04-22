/** @format */

import Link from "next/link";
import { Loader } from "./Loader";

export function CountriesList({ countries, isLoading }) {
  return (
    // countries list
    <section>
      {countries && countries?.message !== "Not Found" ? (
        <ul className="countriesList">
          {countries?.map((country) => (
            <li key={country.name?.common} className="countryItem">
              <Link href={`/country/${country.cca2}`}>
                <div className="countriesList__countryFlag">
                  <img
                    src={country.flags?.svg}
                    alt={country.name?.common + " flag"}
                    loading="lazy"
                  ></img>
                </div>
                <ul className="countriesList__countryGeogrpahy">
                  <li>
                    <strong> {country.name?.common} </strong>{" "}
                  </li>
                  <li>
                    {" "}
                    <span className="countryDataLabel">Capital: </span>{" "}
                    {country.capital}
                  </li>
                  <li>
                    {" "}
                    <span className="countryDataLabel">Region: </span>{" "}
                    {country.region}
                  </li>
                  <li>
                    <span className="countryDataLabel">Population: </span>{" "}
                    {country.population?.toLocaleString("en-US")}
                  </li>
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      ) : // loader renders when fetching search bar result as it uses client side rendering.
      isLoading ? (
        <Loader />
      ) : (
        <p className="noSearchResult">
          No country is matched, please try again.
        </p>
      )}
    </section>
  );
}
