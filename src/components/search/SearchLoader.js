/** @format */

export const SearchLoader = () => (
  <div className="search__loaderContainer">
    <svg
      className="searchLoader__icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        shapeRendering: "crispedges",
      }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      role="img"
    >
      <title>A spinning circle that indicates loading</title>
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#ffffff"
        strokeWidth={10}
        r={40}
        strokeDasharray="141.37166941154067 49.12388980384689"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </div>
);
