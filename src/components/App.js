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
  const [countries, setCountries] = useState("");
  // to inform user if no country founded
  const [isCountryFounded, setIsCountryFounded] = useState(true);

  const preferredTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(preferredTheme);

  // initialize the app with the preferred theme
  if (preferredTheme === "light") {
    document.body.style.cssText =
      "background-color: hsl(0, 0%, 98%); color: hsl(200, 15%, 8%)";

    // no 'else' statement as the default theme is dark.
  }

  // cahnge theme
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
        "background-color: hsl(0, 0%, 98%); color: hsl(200, 15%, 8%)";
    }
  };

  const toggleElementBackground = () => {
    return theme === "light" ? "white" : "hsl(209, 23%, 22%)";
  };

  const toggleSvgFill = (lightColorMode, darkColorMode) => {
    return theme === "light" ? lightColorMode : darkColorMode;
  };

  const handleChange = (value) => {
    setSelectedRegion(value);
  };

  // fetch countries data
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const getCountries = async () => {
      if (selectedRegion) {
        await fetch(`https://restcountries.com/v3.1/region/${selectedRegion}`, {
          signal,
        })
          .then((res) => {
            // to be able to show search results
            setIsCountryFounded(true);

            return res.json();
          })
          .then((regionCountries) => {
            setCountries([...regionCountries]);
            window.sessionStorage.setItem(
              "countries",
              JSON.stringify([...regionCountries])
            );
          });
      }
    };
    getCountries();

    // clean up effect
    return () => controller.abort();
  }, [selectedRegion]);

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
                setCountries={setCountries}
                setIsCountryFounded={setIsCountryFounded}
                toggleElementBackground={toggleElementBackground}
              />
              <RegionMenu
                selectedRegion={selectedRegion}
                handleChange={handleChange}
                toggleElementBackground={toggleElementBackground}
              />
              <CountriesList
                isCountryFounded={isCountryFounded}
                countries={countries}
                selectedRegion={selectedRegion}
                toggleElementBackground={toggleElementBackground}
              />
            </main>
          }
        />
        <Route
          path=":countryCode"
          element={
            <Country toggleElementBackground={toggleElementBackground} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
