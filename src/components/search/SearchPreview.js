/** @format */

import Link from "next/link";
import { useContext } from "react";
import { searchedCountryContext } from "../../pages/_app";

/** @format */
const SearchPreview = ({ countriesData, error }) => {
  const { searchedCountry } = useContext(searchedCountryContext);

  return (
    <section className="search__searchPreview">
      {countriesData ? (
        <>
          <ul>
            {countriesData?.map((countryData) => (
              <li key={countryData?.name?.common}>
                <Link
                  className="search__previewItem"
                  href={`/country/${countryData.cca2}`}
                >
                  <img
                    className="previewItem__flag"
                    src={countryData?.flags?.svg}
                    alt={countryData?.name?.common + " flag"}
                    loading="lazy"
                  ></img>

                  <ul>
                    <li className="previewItem__name">
                      <strong>{countryData?.name?.common}</strong>
                    </li>
                    <li className="previewItem__capital">
                      {countryData?.capital}
                    </li>
                  </ul>
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
        error && (
          <p className="search__error">
            No country is matched, please try again.
          </p>
        )
      )}
    </section>
  );
};

export default SearchPreview;
