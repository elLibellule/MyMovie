import styles from "./Popular.module.scss";
import { getMovie } from "@/utils/getMovie";

import MediaCard from "../MediaCard/MediaCard";
import { getDictionary } from "@/utils/dictionaries";

export default async function Popular({ lang }: { lang: string }) {
  const { results } = await getMovie("/movie/popular", [], lang);
  const popularMovies = results.slice(0, 6);

  const i18n = await getDictionary(lang);
  return (
    <div>
      <h2>{i18n.popular.title}</h2>
      <div className={styles.container}>
        {popularMovies.map((movie: any) => (
          <MediaCard key={movie.id} media={movie} lang={lang} />
        ))}
      </div>
    </div>
  );
}
