export const Loader = (props) => (
  <div className="loaderContainer">
    <svg
      className="loader__icon"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        shapeRendering: "crispedges",
      }}
      width="150"
      height="150"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      role="img"
      {...props}
    >
      <title>A spinning circle that indicates loading</title>
      <circle
        cx={50}
        cy={50}
        fill="none"
        stroke="#ffffff"
        strokeWidth={5}
        r={30}
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
    <span>loading... </span>
  </div>
);
