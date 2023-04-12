/** @format */

import { Country } from "../../components/Country";
import { getCountreisCodes } from "../../modules/countryPage";

export async function getStaticPaths() {
  // code is used to fetch country data
  const countriesCode = await getCountreisCodes();

  const paths = countriesCode.map((countryCode) => {
    return { params: { countryCode } };
  });

  return { paths, fallback: false };
}

const CountryPage = ({ countryData, borderCountriesData }) => {
  return (
    <Country
      countryData={countryData[0]}
      borderCountriesData={borderCountriesData}
    />
  );
};

export default CountryPage;
