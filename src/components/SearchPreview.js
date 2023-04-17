/** @format */

import Link from "next/link";

/** @format */
const SearchPreview = ({ countriesData, searchedCountry }) => {
  return (
    countriesData && (
      <section className="search__ResultPreview">
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
      </section>
    )
  );
};

export default SearchPreview;
