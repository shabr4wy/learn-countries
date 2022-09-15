import { Link } from "react-router-dom";

export function CountriesList({ countriesArray }) {
  return (
    // countries list
    <section>
      <ul className="countriesList">
        {countriesArray &&
          countriesArray.map((country) => (
            <li key={country.name.common} className="countryItem">
              <Link to={`/${country.name.common}`}>
                <div className="countriesList__countryFlag">
                  <img
                    src={country.flags.svg}
                    alt={country.name.common + " flag"}
                    height="60"
                    width="100"
                    loading="lazy"
                  ></img>
                </div>

                <ul className="countriesList__countryGeogrpahy">
                  <li>{country.name.common}</li>
                  <li>Capital: {country.capital}</li>
                  <li>Region: {country.region}</li>
                  <li>
                    Population: {country.population.toLocaleString("en-US")}
                  </li>
                </ul>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
