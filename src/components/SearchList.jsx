import React, { useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import MovieCard from "./MovieCard";
import NotFound from "./ui/NotFound";
import ErrorMessage from "./ui/ErrorMessage";

export default function SearchList() {
  const { results, isLoading, error } = useContext(SearchContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {!results?.length && <NotFound />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <div className="flex flex-wrap justify-center gap-y-3 gap-x-7 sm:gap-10 mx-3 sm:mx-5 my-10">
          {results?.map((movie) => (
            <MovieCard movie={movie} key={crypto.randomUUID()} />
          ))}
        </div>
      )}
    </main>
  );
}
