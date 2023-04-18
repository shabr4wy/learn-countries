/** @format */

import Link from "next/link.js";
import { SwitchTheme } from "./SwitchTheme.js";

export function Header() {
  return (
    <header className="header">
      <div className="header__title">
        <Link href="/">
          <h2>Search The World</h2>
        </Link>
      </div>

      <SwitchTheme />
    </header>
  );
}
