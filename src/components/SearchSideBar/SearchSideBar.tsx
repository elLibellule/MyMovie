"use client";
import { notFound, useParams, useSelectedLayoutSegment } from "next/navigation";

import Form from "./Form/Form";
import styles from "./SearchSideBar.module.scss";

const SearchSideBar = ({
  genres,
  lang,
  i18n,
}: {
  genres: any;
  lang: string;
  i18n: any;
}) => {
  const segment = useSelectedLayoutSegment();
  const { id } = useParams();

  const getSideBarTitle = () => {
    if (!segment) {
      return i18n.header.nav.movies;
    }
    const genre = genres.find(
      (genre: { id: number; name: string }) => genre.id === Number(id)
    );
    if (!genre) {
      // 404
      return notFound();
    }
    return genre.name;
  };

  const title = getSideBarTitle();

  return (
    <div className={styles.sideBar}>
      <h1>
        {i18n.asideBar.title} &quot;{title}&quot;
      </h1>
      <Form i18n={i18n} lang={lang} />
    </div>
  );
};

export default SearchSideBar;
