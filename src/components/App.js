import "../App.css";
import { useState, useEffect } from "react";
import { CountriesList } from "./CountriesList";
import { RegionMenu } from "./RegionMenu";
import { SearchCountry } from "./SearchCountry";
import { Country } from "./Country";
import { Route, Routes } from "react-router-dom";
import { Header } from "./Header";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");
  const [countries, setCountries] = useState([]);

  const preferredTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(preferredTheme);

  // initialize the app with the preferred theme
  if (preferredTheme === "light") {
    document.body.style.cssText =
      "background-color: hsl(0, 0%, 97%); color: hsl(200, 15%, 8%)";

    // no 'else' statement as the default theme is dark.
  }

  // toggle theme
  const handleClick = () => {
    // switch to dark theme
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.body.style.cssText =
        "background-color: hsl(207, 26%, 17%); color: white";
    } else {
      // switch to light theme
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.body.style.cssText =
        "background-color: hsl(0, 0%, 97%); color: hsl(200, 15%, 8%)";
    }
  };

  const toggleElementBackground = () => {
    return theme === "light" ? "white" : "hsl(209, 23%, 22%)";
  };

  const toggleSvgFill = (lightColorMode, darkColorMode) => {
    return theme === "light" ? lightColorMode : darkColorMode;
  };

  const updateSearchResult = (id, fetchedData) => {
    setCountries((prev) => [{ id, data: fetchedData }, ...prev]);
  };

  const deleteSearchResult = (id) => {
    setCountries((prevState) =>
      prevState.filter((element) => element.id === id)
    );
  };

  // fetch countries data
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCountries = async () => {
      if (selectedRegion === "selectRegion") {
        deleteSearchResult("input");
      } else if (selectedRegion) {
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
          signal,
        })
          .then((res) => {
            return res.json();
          })
          .then((regionCountries) => {
            updateSearchResult("select", regionCountries);
          });
      }
    };
    getCountries();

    // clean up effect
    return () => controller.abort();
  }, [selectedRegion]);

  // get input result
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    if (searchedCountry) {
      async function getCountry() {
        await fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`, {
          signal,
        })
          .then((res) => {
            return res.json();
          })
          .then((searchResult) => {
            updateSearchResult("input", searchResult);
          });
      }
      getCountry();
    } else {
      deleteSearchResult("select");
    }

    // clean up effect
    return () => controller.abort();
  }, [searchedCountry]);

  return (
    <div className="app">
      <Header
        handleClick={handleClick}
        toggleSvgFill={toggleSvgFill}
        toggleElementBackground={toggleElementBackground}
      />
      <Routes>
        <Route
          exact
          path="/learn-countries"
          element={
            <main className="countriesSearchPage main">
              <SearchCountry
                setSearchedCountry={setSearchedCountry}
                searchedCountry={searchedCountry}
                toggleSvgFill={toggleSvgFill}
                toggleElementBackground={toggleElementBackground}
              />
              <RegionMenu
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                toggleSvgFill={toggleSvgFill}
                toggleElementBackground={toggleElementBackground}
              />
              <CountriesList
                countries={countries}
                selectedRegion={selectedRegion}
                toggleElementBackground={toggleElementBackground}
              />
            </main>
          }
        />
        <Route
          path="/learn-countries/:countryCode"
          element={
            <Country toggleElementBackground={toggleElementBackground} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
