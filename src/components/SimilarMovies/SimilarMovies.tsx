import { getMovie } from "@/utils/getMovie";
import styles from "./SimilarMovies.module.scss";
import MediaCard from "../MediaCard/MediaCard";

const SimilarMovies = async ({
  movieId,
  lang,
}: {
  movieId: any;
  lang: string;
}) => {
  const { results } = await getMovie(`/movie/${movieId}/similar`, [], lang);
  return (
    <div className={styles.similar}>
      <div className={styles.list}>
        {results.slice(0, 6).map((movie: any) => (
          <MediaCard media={movie} key={movie.id} lang={lang} />
        ))}
      </div>
    </div>
  );
};

export default SimilarMovies;
