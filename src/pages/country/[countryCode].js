/** @format */

import { Country } from "../../components/Country";
import { Header } from "../../components/Header";

import {
  getCountryData,
  getCountreisCodes,
  getBorderCountriesData,
} from "../../modules/countryPage";

export async function getStaticPaths() {
  // code is used to fetch country data
  const countriesCode = await getCountreisCodes();

  const paths = countriesCode.map((countryCode) => {
    return { params: { countryCode } };
  });

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const countryData = await getCountryData(context);
  const borderCountriesData = await getBorderCountriesData(countryData);

  return { props: { countryData, borderCountriesData } };
}

const CountryPage = ({ countryData, borderCountriesData }) => {
  return (
    <>
      <Header />
      <Country
        countryData={countryData}
        borderCountriesData={borderCountriesData}
      />
    </>
  );
};

export default CountryPage;
