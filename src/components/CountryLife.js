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
      <li>Languages: {getLanguages()}</li>
      <li>Currency: {getCurrency()}</li>
      <li>Car Side: {countryData.car.side}</li>
    </ul>
  );
}
