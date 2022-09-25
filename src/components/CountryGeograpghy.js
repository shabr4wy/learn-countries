export function CountryGeogeapghy({ countryData }) {
  function getNativeName() {
    let nativeNames = { ...countryData.name.nativeName };
    return Object.values(nativeNames)[0].common;
  }

  return (
    <ul className="countryPage__countryGeograpghy">
      <li>Native Name: {getNativeName()}</li>
      <li> Capital: {countryData.capital}</li>
      <li> Region: {countryData.region}</li>
      <li> Sub Region: {countryData.subregion}</li>
      <li>Population: {countryData.population.toLocaleString("en-US")}</li>
    </ul>
  );
}
