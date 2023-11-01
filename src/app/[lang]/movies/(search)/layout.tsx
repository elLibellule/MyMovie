import SearchSideBar from "@/components/SearchSideBar/SearchSideBar";
import styles from "./layout.module.scss";
import { getMovie } from "@/utils/getMovie";
import { getDictionary } from "@/utils/dictionaries";

const MovieSearchLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) => {
  const { genres } = await getMovie("/genre/movie/list", [], lang);
  const i18n = await getDictionary(lang);

  return (
    <div className={styles.searchContainer}>
      <SearchSideBar genres={genres} lang={lang} i18n={i18n} />
      <div>{children}</div>
    </div>
  );
};

export default MovieSearchLayout;
