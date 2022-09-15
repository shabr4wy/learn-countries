export function CountryGeogeapghy({ countryData }) {
  function getNativeName() {
    let nativeNames = { ...countryData.name.nativeName };
    return Object.values(nativeNames)[0].common;
  }

  return (
    <ul className="countryPage__geograpghy">
      <li className="countryPage__nativeName">
        Native Name: {getNativeName()}
      </li>
      <li className="countryPage__capital">Capital: {countryData.capital}</li>
      <li className="countryPage__region">Region: {countryData.region}</li>
      <li className="countryPage__subRegion">
        Sub Region: {countryData.subregion}
      </li>
      <li className="countryPage__population">
        Population: {countryData.population.toLocaleString("en-US")}
      </li>
    </ul>
  );
}
