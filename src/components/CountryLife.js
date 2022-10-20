export function CountryLife({ countryData }) {
  function getCurrency() {
    let currencies = { ...countryData.currencies };
    const values = Object.values(currencies);

    return (
      <ol className="countryPage__currencies">
        {values?.map((currency) => (
          <li key={currency.name}>
            {currency.name} - {currency.symbol}
          </li>
        ))}
      </ol>
    );
  }

  function getLanguages() {
    let languages = { ...countryData.languages };
    return Object.values(languages).join(", ");
  }

  return (
    <ul className="countryPage__life">
      <li>
        <span className="countryDataLabel">Languages:</span> {getLanguages()}
      </li>
      <li>
        <span className="countryDataLabel">Currencies:</span> {getCurrency()}
      </li>
      <li>
        <span className="countryDataLabel">Start Of The Week: </span>
        {countryData?.startOfWeek}
      </li>
      <li>
        <span className="countryDataLabel">Car Side:</span>{" "}
        {countryData.car.side}
      </li>
    </ul>
  );
}
