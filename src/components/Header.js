export function Header({ handleClick }) {
  return (
    <header className="header">
      <div className="header__title">
        <h2>Search The World</h2>
      </div>

      <div className="header__theme">
        <button className="header__theme__switch" onClick={() => handleClick()}>
          <svg
            className="header__theme__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            {/*  Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.*/}
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
          </svg>

          <span className="header__theme__title">light mode</span>
        </button>
      </div>
    </header>
  );
}