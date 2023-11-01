import { getMovie } from "@/utils/getMovie";
import styles from "./SearchResults.module.scss";
import MediaCard from "@/components/MediaCard/MediaCard";

const SearchResults = async ({
  searchParams,
  genreId,
  lang,
}: {
  searchParams: {
    sort_by: string;
    "release_date.gte": string;
    "release_date.lte": string;
  };
  lang: string;
  genreId?: string;
}) => {
  const { results } = await getMovie(
    "/discover/movie",
    [
      { key: "sort_by", value: searchParams.sort_by },
      { key: "release_date.gte", value: searchParams["release_date.gte"] },
      { key: "release_date.lte", value: searchParams["release_date.gte"] },
      { key: "with_genres", value: genreId },
    ],
    lang
  );

  return (
    <div className={styles.results}>
      {results
        .filter((movie: any) => movie.poster_path)
        .map((movie: any) => (
          <MediaCard key={movie.id} media={movie} lang={lang} />
        ))}
    </div>
  );
};

export default SearchResults;
