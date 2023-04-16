/** @format */

import { Header } from "../../components/Header";
import { CountriesList } from "../../components/CountriesList";
import { SearchCountry } from "../../components/SearchCountry";
import { RegionMenu } from "../../components/RegionMenu";

export async function getCountriesData(context) {
  const res = await fetch(
    `https://restcountries.com/v3.1/region/${context.params.region}?fields=name,flags,population,region,capital,cca2`
  );
  const regionCountries = await res.json();

  return regionCountries;
}

export async function getStaticPaths() {
  const paths = ["europe", "africa", "asia", "oceania", "americas"].map(
    (region) => {
      return { params: { region } };
    }
  );
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const regionCountries = await getCountriesData(context);

  return { props: { regionCountries } };
}

const RegionCountries = ({ regionCountries }) => {
  return (
    <>
      <Header />
      <main className="countriesSearchPage main">
        <SearchCountry />
        <RegionMenu />
        <CountriesList countries={regionCountries} />
      </main>
    </>
  );
};

export default RegionCountries;
