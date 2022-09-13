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
                <div className="countryFlag">
                  <img
                    src={country.flags.svg}
                    height="60"
                    width="100"
                    loading="lazy"
                  ></img>
                </div>

                <div className="countryInfo">
                  <p className="countryName">{country.name.common}</p>
                  <p className="countryCapital">Capital: {country.capital}</p>
                  <p className="countryRegion">Region: {country.region}</p>
                  <p className="countryPopulation">
                    Population: {country.population.toLocaleString("en-US")}
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
