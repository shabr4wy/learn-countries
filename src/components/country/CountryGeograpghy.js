/** @format */

export function CountryGeogeapghy({ countryData }) {
  function getNativeName() {
    let nativeNames = { ...countryData?.name?.nativeName };
    return Object.values(nativeNames)[0]?.common;
  }

  return (
    <ul className="countryPage__Geograpghy">
      <li>
        <span className="countryDataLabel">Native Name:</span> {getNativeName()}
      </li>
      <li>
        <span className="countryDataLabel">Capital:</span>{" "}
        {countryData?.capital}
      </li>
      <li>
        <span className="countryDataLabel">Region:</span> {countryData?.region}
      </li>
      <li>
        <span className="countryDataLabel">Sub Region:</span>{" "}
        {countryData?.subregion}
      </li>
      <li>
        <span className="countryDataLabel">Population:</span>{" "}
        {countryData?.population?.toLocaleString("en-US")}
      </li>
    </ul>
  );
}
