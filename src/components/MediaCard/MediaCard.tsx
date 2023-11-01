import React, { ReactNode } from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";
import { getMovie } from "@/utils/getMovie";

interface Media {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
}

const MediaCard = async ({ media, lang }: { media: Media; lang: string }) => {
  const { genres }: { genres: { id: number; name: string }[] } = await getMovie(
    "/genre/movie/list",
    [],
    lang
  );
  return (
    <div className={styles.card}>
      <Link href={`/${lang}/movies/${media.id}`}>
        <div className={styles.image}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.vote}>{media.vote_average}</p>
          <h3>{media.title}</h3>
          <p>{new Date(media.release_date).toLocaleDateString("fr-FR")}</p>
          <h4>
            Genres :
            {genres
              .filter((genre) => {
                return media.genre_ids.includes(genre.id);
              })
              .map((gender) => (
                <p key={gender.id}>{gender.name}</p>
              ))}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
