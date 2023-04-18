/** @format */

import Link from "next/link";

export function RegionMenu() {
  return (
    <section className="regionMenu">
      <ul className="regionMenu__list">
        <li>
          <Link href="/region/africa">Africa</Link>
        </li>
        <li>
          <Link href="/region/americas">Americas</Link>
        </li>
        <li>
          <Link href="/region/asia">Asia</Link>
        </li>
        <li>
          <Link href="/region/europe">Europe</Link>
        </li>
        <li>
          <Link href="/region/oceania">Oceania</Link>
        </li>
      </ul>
    </section>
  );
}
