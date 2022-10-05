import { Link } from "react-router-dom";

export function CountriesList({ countries, selectedRegion, isCountryFounded }) {
  const countriesFromSessionStorage = JSON.parse(
    window.sessionStorage.getItem("countries")
  );

  // check if the user navigated back from country page.
  let countriesToRender;
  if (selectedRegion && countriesFromSessionStorage) {
    countriesToRender = [...countriesFromSessionStorage];
  } else {
    // to render the result of search bar if no region is selected
    countriesToRender = countries;
    // empty setorage to prevent rendering the past search result.
    window.sessionStorage.removeItem("countries");
  }

  return (
    // countries list
    <section>
      {isCountryFounded ? (
        <ul className="countriesList">
          {countriesToRender &&
            countriesToRender.map((country) => (
              <li key={country.name.common} className="countryItem">
                <Link to={`/${country.cca2}`}>
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
          No country is founded, please try again.
        </p>
      )}
    </section>
  );
}
