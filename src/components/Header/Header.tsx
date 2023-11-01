import React from "react";
import Link from "next/link";

import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MovieSearch from "../MovieSearch/MovieSearch";
import LangSelector from "../LangSelector/LangSelector";
import { getDictionary } from "@/utils/dictionaries";

const Header = async ({ lang }: { lang: string }) => {
  const i18n = await getDictionary(lang);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href="/">MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${lang}/series`}>{i18n.header.nav.series}</Link>
            </li>

            <li>
              <Link href={`/${lang}/movies`}>{i18n.header.nav.movies}</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch i18n={i18n} lang={lang} />
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <LangSelector />
      </div>
    </header>
  );
};

export default Header;
