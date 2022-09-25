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
      ) : (
        <p className="noSearchResult">
          No country is founded, please try again.
        </p>
      )}
    </section>
  );
}
