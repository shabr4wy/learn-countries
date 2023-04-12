/** @format */

import { Link } from "next/link";

export function BorderCountries({ borderCountriesData }) {
  return (
    <div className="countryPage__borders">
      <p className="countryPage__bordersLabel">
        Border Countries:
        {!borderCountriesData && (
          <span className="countryPage__noBorders"> No border countries</span>
        )}
      </p>

      {borderCountriesData && (
        <ul className="countryPage_bordersList">
          {borderCountriesData &&
            borderCountriesData.map((borderCountry) => (
              <li key={borderCountry.name.common}>
                <Link href={`country/${borderCountry.cca2}`}>
                  {borderCountry.name.common}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
