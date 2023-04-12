/** @format */

export async function getCountryData(context) {
  const countryData = await fetch(
    `https://restcountries.com/v3.1/alpha/${context.params.countryCode}`
  );

  return await countryData.json();
}

export async function storeCountriesCode(allCountriesData) {
  let countriesCode = [];

  allCountriesData?.map((country) => {
    countriesCode.push(`${country.cca2}`);
  });

  return countriesCode;
}

// country code is used to fetch country data
export async function getCountreisCodes() {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  const allCountriesData = await res.json();

  const countriesCode = await storeCountriesCode(allCountriesData);

  return countriesCode;
}

export async function getBorderCountriesData(countryData) {
  const res = countryData[0].borders
    ? await fetch(
        `https://restcountries.com/v3.1/alpha/?codes=${countryData[0].borders.join()}`
      )
    : null;

  const borderCountriesData = res ? await res.json() : null;

  return borderCountriesData;
}
