/** @format */
import { RegionMenu } from "../components/RegionMenu";
import { SearchCountry } from "../components/search/SearchCountry";
import { Header } from "../components/Header";

function index() {
  return (
    <>
      <Header />
      <main className="countriesSearchPage main">
        <SearchCountry />
        <RegionMenu />
      </main>
    </>
  );
}

export default index;
