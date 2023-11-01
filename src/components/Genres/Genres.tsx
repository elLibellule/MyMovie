import { getMovie } from "@/utils/getMovie";
import Link from "next/link";
import styles from "./Genres.module.scss";
import { getDictionary } from "@/utils/dictionaries";

const Genres = async ({ lang }: { lang: string }) => {
  const { genres } = await getMovie("/genre/movie/list", [], lang);

  const i18n = await getDictionary(lang);
  return (
    <div>
      <h2>{i18n.genres.title}</h2>
      <div className={styles.container}>
        {genres.map((genre: { id: number; name: string }) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`/${lang}/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
