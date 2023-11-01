import Image from "next/image";

import styles from "./MovieCredits.module.scss";
import { getMovie } from "@/utils/getMovie";

async function MovieCredits({ movieId }: { movieId: string }) {
  const { cast } = await getMovie(`/movie/${movieId}/credits`);

  return (
    <div className={styles.credits}>
      {cast.slice(0, 4).map((person: any) => (
        <div key={person.id}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w185/${person.profile_path}`}
            width={90}
            height={90}
            alt={person.name}
          />
          <p>{person.name}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieCredits;
