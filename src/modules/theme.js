/** @format */

const systemTheme =
  typeof window != "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

const localStorageTheme =
  typeof window != "undefined" && window?.localStorage.getItem("theme");

let preferredTheme = localStorageTheme ? localStorageTheme : systemTheme;

export function checkDarkTheme() {
  if (typeof document != "undefined") {
    preferredTheme == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }
}

export const handleClick = () => {
  preferredTheme = preferredTheme === "light" ? "dark" : "light";

  window.localStorage.setItem("theme", preferredTheme);

  checkDarkTheme();
};
