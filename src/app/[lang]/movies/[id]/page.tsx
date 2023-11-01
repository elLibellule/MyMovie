import MovieDetails from "@/components/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/SimilarMovies/SimilarMovies";
import { getMovie } from "@/utils/getMovie";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export const dynamic = "force-static";
export const revalidate = 3600;

async function MovieIdPage({
  params: { id, lang },
}: {
  params: { id: string; lang: string };
}) {
  const movie = await getMovie(`/movie/${id}`, [], lang);
  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargement ...</p>}>
        <SimilarMovies movieId={movie.id} lang={lang} />
      </Suspense>
    </div>
  );
}

export default MovieIdPage;
