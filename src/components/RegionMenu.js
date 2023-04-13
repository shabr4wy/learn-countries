/** @format */

import Link from "next/link";

export function RegionMenu() {
  return (
    <section className="regionMenu">
      <ul className="regionMenu__list">
        <li>
          <Link href="countries/africa">Africa</Link>
        </li>
        <li>
          <Link href="countries/americas">Americas</Link>
        </li>
        <li>
          <Link href="countries/asia">Asia</Link>
        </li>
        <li>
          <Link href="countries/europe">Europe</Link>
        </li>
        <li>
          <Link href="countries/oceania">Oceania</Link>
        </li>
      </ul>
    </section>
  );
}
