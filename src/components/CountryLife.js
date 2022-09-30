export function CountryLife({ countryData }) {
  function getCurrency() {
    let currencies = { ...countryData.currencies };
    return Object.values(currencies)[0].name;
  }

  function getLanguages() {
    let languages = { ...countryData.languages };
    return Object.values(languages).join(", ");
  }

  return (
    <ul className="countryPage__life">
      <li><span>Languages:</span> {getLanguages()}</li>
      <li><span>Currencies:</span> {getCurrency()}</li>
      <li><span>Car Side:</span> {countryData.car.side}</li>
    </ul>
  );
}
