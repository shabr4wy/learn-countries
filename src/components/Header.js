import { SwitchTheme } from "./SwitchTheme.js";

export function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <h2>Search The World</h2>
      </div>

      <SwitchTheme />
    </header>
  );
}
