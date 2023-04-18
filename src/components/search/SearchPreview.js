/** @format */

import Link from "next/link";
import { useContext } from "react";
import { searchedCountryContext } from "../../pages/_app";

/** @format */
const SearchPreview = ({ countriesData }) => {
  const { searchedCountry } = useContext(searchedCountryContext);
  return (
    <section className="search__searchPreview">
      {countriesData ? (
        <>
          <ul>
            {countriesData?.map((countryData) => (
              <li key={countryData?.name?.common}>
                <Link href={`/country/${countryData.cca2}`}>
                  <img
                    className="search__flag"
                    src={countryData?.flags?.svg}
                    alt={countryData?.name?.common + " flag"}
                    loading="lazy"
                  ></img>

                  <p>
                    <strong>{countryData?.name?.common}</strong>
                  </p>
                  <p>{countryData?.capital}</p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={{
              pathname: `/SearchResult`,
              query: { search: searchedCountry },
            }}
          >
            View all countries
          </Link>
        </>
      ) : (
        searchedCountry && <p>No country is matched, please try again.</p>
      )}
    </section>
  );
};

export default SearchPreview;
