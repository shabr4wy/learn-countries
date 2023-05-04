/** @format */

import Link from "next/link";

export function RegionMenu() {
  return (
    <section className="regionMenu">
      <ul className="regionMenu__list">
        <li>
          <Link scroll={false} href="/region/africa">
            Africa
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/region/americas">
            Americas
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/region/asia">
            Asia
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/region/europe">
            Europe
          </Link>
        </li>
        <li>
          <Link scroll={false} href="/region/oceania">
            Oceania
          </Link>
        </li>
      </ul>
    </section>
  );
}
