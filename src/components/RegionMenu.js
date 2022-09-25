export function RegionMenu({ selectedRegion, handleChange }) {
  return (
    //region menu
    <section className="regionMenu">
      <select
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
    </section>
  );
}