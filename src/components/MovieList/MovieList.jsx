import MovieCard from "../MovieCard/MovieCard";
import NotFound from "../ui/NotFound/NotFound";
import ErrorMessage from "../ui/ErrorMessage/ErrorMessage";
import "./MovieList.css";

export default function MovieList({
  movies,
  queryIsLoading,
  queryError,
  onRemoveMovie,
  showRemove,
}) {
  return (
    <main>
      {!movies?.length && <NotFound />}
      {queryError && <ErrorMessage message={queryError} />}

      {!queryIsLoading && !queryError && (
        <div className="cards-container">
          {movies?.map((movie) => (
            <MovieCard
              movie={movie}
              onRemoveMovie={onRemoveMovie}
              showRemove={showRemove}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      )}
    </main>
  );
}
