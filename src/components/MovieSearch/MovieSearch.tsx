"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";

function MovieSearch({ lang, i18n }: { lang: string; i18n: any }) {
  const [movieResults, setMovieResults] = useState([]);
  const [isFocus, setisFocus] = useState(false);

  const updateMovieSearch = async (query: string) => {
    try {
      const response = await fetch(
        `/api/movies/search?query=${query}&lang=${lang}`
      );
      if (response.ok) {
        const { results } = await response.json();
        console.log(results);
        setMovieResults(results.filter((movie: any) => movie.backdrop_path));
      } else {
        throw new Error("Failed to search movies");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setFocus = () => {
    setisFocus(!isFocus);
  };

  return (
    <div>
      <DebounceInput
        debounceTimeout={500}
        minLength={2}
        placeholder={i18n.header.nav.searchBar.placeHolder}
        onChange={(e) => updateMovieSearch(e.target.value)}
        onBlurCapture={setFocus}
        onFocus={setFocus}
      />
      {movieResults.length > 0 && isFocus && (
        <MovieSearchResults movieResults={movieResults} lang={lang} />
      )}
    </div>
  );
}

export default MovieSearch;
