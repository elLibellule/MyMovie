"use client";

import { availableLanguages } from "@/utils/i18n";
import styles from "./LangSelector.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const LangSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    setIsOpen(false);
  }, [currentLanguage]);

  return (
    <div className={`${styles.selector} ${isOpen ? styles.enabled : ""} `}>
      <p onClick={() => setIsOpen((currentValue) => !currentValue)}>
        {currentLanguage}
        <span>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </p>
      <ul>
        {availableLanguages
          .filter((lang) => lang !== currentLanguage)
          .map((lang) => (
            <li key={lang}>
              <Link href={`/${lang}`}>{lang}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LangSelector;
