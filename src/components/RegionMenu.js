export function RegionMenu({
  theme,
  handleChange,
  selectedRegion,
  toggleElementBackground,
}) {
  return (
    //region menu
    <section className="regionMenu">
      <select
        style={{ background: toggleElementBackground() }}
        value={selectedRegion ? selectedRegion : "selectRegion"}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="selectRegion">select Region</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <svg
        style={{ fill: theme === "light" ? "hsl(200, 15%, 8%)" : "white" }}
        className="regionMenu__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        {/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
        <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
      </svg>
    </section>
  );
}
