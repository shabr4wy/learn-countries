export function CountryGeogeapghy({ countryData }) {
  function getNativeName() {
    let nativeNames = { ...countryData.name.nativeName };
    return Object.values(nativeNames)[0].common;
  }

  return (
    <ul className="countryPage__countryGeograpghy">
      <li><span>Native Name:</span> {getNativeName()}</li>
      <li><span>Capital:</span> {countryData.capital}</li>
      <li><span>Region:</span> {countryData.region}</li>
      <li><span>Sub Region:</span> {countryData.subregion}</li>
      <li><span>Population:</span> {countryData.population.toLocaleString("en-US")}</li>
    </ul>
  );
}
