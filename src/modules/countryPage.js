/** @format */

export async function getCountryData(context) {
  const countryData = await fetch(
    `https://restcountries.com/v3.1/alpha/${context.params.countryCode}`
  );

  return await countryData.json();
}
