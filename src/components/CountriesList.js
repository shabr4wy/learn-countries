import { Link } from "react-router-dom";

export function CountriesList({
  countries,
  isCountryFounded,
  toggleElementBackground,
}) {
  let dataToRender = countries[0]?.data;
  return (
    // countries list
    <section>
      {countries && dataToRender?.message !== "Not Found" ? (
        <ul className="countriesList">
          {dataToRender?.map((country) => (
            <li
              key={country.name.common}
              className="countryItem"
              style={{ background: toggleElementBackground() }}
            >
              <Link to={`/learn-countries/${country.cca2}`}>
                <div className="countriesList__countryFlag">
                  <img
                    src={country.flags.svg}
                    alt={country.name.common + " flag"}
                    loading="lazy"
                  ></img>
                </div>

                <ul className="countriesList__countryGeogrpahy">
                  <li>
                    <strong> {country.name.common} </strong>{" "}
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
                    {country.population.toLocaleString("en-US")}
                  </li>
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="noSearchResult">
          No country is matched, please try again.
        </p>
      )}
    </section>
  );
}
