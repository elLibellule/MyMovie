import Link from "next/link";
import Image from "next/image";
import styles from "./MovieSearchResults.module.scss";

function MovieSearchResults({
  movieResults,
  lang,
}: {
  movieResults: any;
  lang: string;
}) {
  return (
    <div className={styles.searchResults}>
      {movieResults.map((movie: any) => (
        <div key={movie.id}>
          <Link
            href={`${lang}/movies/${movie.id}`}
            onMouseDown={(e) => e.preventDefault()}>
            <Image
              width={90}
              height={50}
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MovieSearchResults;
