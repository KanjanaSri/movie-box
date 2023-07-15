import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMoviesById } from "../../util/helper";
import { useContext } from "react";
import { SaveListContext } from "../../context/SaveListContext";
import Loader from "../ui/Loader/Loader";
import ErrorMessage from "../ui/ErrorMessage/ErrorMessage";
import "./MovieDetail.css";

export default function MovieDetail() {
  const { saveList, handleSaveMovie } = useContext(SaveListContext);

  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original/";

  let didSaved = false;
  saveList?.forEach((savedMovie) => {
    if (savedMovie.id === movie?.id) didSaved = true;
  });

  useEffect(() => {
    fetchMoviesById(id, setMovie, setIsLoading, setError);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <>
          <div className="movie-wrapper">
            <button onClick={() => navigate(-1)} className="back-button">
              <i className="fa-solid fa-backward"></i> Go back
            </button>
            <div className="poster">
              <img
                src={
                  movie?.poster_path
                    ? `${base_url}${movie?.poster_path}`
                    : "/error.png"
                }
              />
            </div>

            <div className="text">
              <h1 className="title">{movie?.title}</h1>
              <span>{`${Math.floor(movie?.runtime / 60)} hr ${
                movie?.runtime % 60
              } min`}</span>
              <span>|</span>
              <span>Rating {movie?.vote_average.toFixed(1)}</span>
              <span>|</span>
              <button
                onClick={() => handleSaveMovie(movie)}
                className="save-btn"
              >
                {didSaved ? (
                  <i className="fa-solid fa-bookmark" />
                ) : (
                  <i className="fa-regular fa-bookmark" />
                )}
                Save
              </button>
              <div className="genres">
                {movie?.genres.map((g) => (
                  <span key={crypto.randomUUID()}>{g.name}</span>
                ))}
              </div>
              <p className="overview">{movie?.overview}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
