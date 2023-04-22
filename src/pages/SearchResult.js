/** @format */

import { CountriesList } from "../components/CountriesList";
import { Header } from "../components/Header";
import useSWR from "swr";
import { useRouter } from "next/router";

const SearchResult = () => {
  const router = useRouter();
  const searchedCountry = router.query.search;

  console.log(searchedCountry);
  const getSearchResult = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${searchedCountry}?fields=name,flags,population,region,capital,cca2`
    );
    const data = await res.json();

    return data;
  };

  const { data } = useSWR(searchedCountry && "searchResult", getSearchResult);
  return (
    <>
      <Header />
      <main className="searchResultPage main">
        <CountriesList countries={data} isLoading={isLoading} />
      </main>
    </>
  );
};

export default SearchResult;
