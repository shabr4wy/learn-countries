import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export function Country() {
  let params = useParams();
  const [countryData, setCountryData] = useState("");

  useEffect(() => {
    async function getCountry() {
      await fetch(`https://restcountries.com/v3.1/name/${params.countryName}`)
        .then((res) => {
          return res.json();
        })
        .then((searchResult) => {
          setCountryData({ ...searchResult[0] });
        });
    }
    getCountry();
  }, [params]);

  return (
    <div>
      <Link to="/">back</Link>
    </div>
  );
}
