import React from "react";
import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie, onRemoveMovie, showRemove }) {
  if (!movie) return;
  const poster_url = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    <div className="card">
      {showRemove && (
        <div className="remove" onClick={() => onRemoveMovie(movie.id)}>
          <i className="fa-solid fa-circle-exclamation" />
          Remove
        </div>
      )}

      <Link to={`/movie/${movie.id}`}>
        <img
          src={`${movie.poster_path ? poster_url : "/error.png"}`}
          alt={movie.title}
          className="card-img"
        />
      </Link>
      <p>{movie.title}</p>
    </div>
  );
}
