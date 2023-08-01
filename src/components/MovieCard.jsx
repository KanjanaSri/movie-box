import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onRemoveMovie, showRemove }) {
  if (!movie) return;
  const poster_url = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="relative w-28 sm:w-44 md:w-52">
      {showRemove && (
        <div
          className="absolute right-0 text-sm sm:text-base px-3 py-1 bg-red-800 shadow-inner rounded-tr-2xl rounded-bl-2xl"
          onClick={() => onRemoveMovie(movie.id)}
        >
          <i className="fa-solid fa-circle-exclamation mr-1" />
          Remove
        </div>
      )}

      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${movie.poster_path ? poster_url : "/error.png"}`}
          alt={movie.title}
          className="rounded-2xl"
        />
      </Link>
      <p className="text-xs sm:text-sm md:text-base my-3">{movie.title}</p>
    </div>
  );
}
