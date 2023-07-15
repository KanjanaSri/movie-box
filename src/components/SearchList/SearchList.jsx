import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import MovieCard from "../MovieCard/MovieCard";
import NotFound from "../ui/NotFound/NotFound";
import ErrorMessage from "../ui/ErrorMessage/ErrorMessage";
import "./SearchList.css";

export default function SearchList() {
  const { results, isLoading, error } = useContext(SearchContext);

  return (
    <main>
      {!results?.length && <NotFound />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <div className="cards-container">
          {results?.map((movie) => (
            <MovieCard movie={movie} key={crypto.randomUUID()} />
          ))}
        </div>
      )}
    </main>
  );
}
