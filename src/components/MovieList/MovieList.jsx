import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({ saveMovies, onRemoveMovie, showRemove }) {
  return (
    <div className="cards-container">
      {saveMovies?.map((movie) => (
        <MovieCard
          movie={movie}
          onRemoveMovie={onRemoveMovie}
          showRemove={showRemove}
          key={crypto.randomUUID()}
        />
      ))}
    </div>
  );
}
