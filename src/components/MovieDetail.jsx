import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchMoviesById } from "../util/helper";
import { SaveListContext } from "../context/SaveListContext";
import Loader from "./ui/Loader";
import ErrorMessage from "./ui/ErrorMessage";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <main className="bg-gradient-to-br from-violet-700 to-indigo-900 min-h-screen pb-10">
          <button
            onClick={() => navigate(-1)}
            className="text-xs sm:text-sm md:text-base m-7 px-2 py-1 bg-zinc-300 opacity-60 rounded-lg sm:rounded-xl text-black"
          >
            <i className="fa-solid fa-backward"></i> Go Back
          </button>

          <div className="sm:w-11/12 md:w-5/6 lg:w-4/6 flex flex-col sm:flex-row justify-center items-center gap-10 mx-4 sm:mx-auto">
            <img
              className="w-52 sm:w-60 md:w-72 rounded-2xl drop-shadow-xl"
              src={
                movie?.poster_path
                  ? `${base_url}${movie?.poster_path}`
                  : "/error.png"
              }
            />

            <div>
              <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-4">
                {movie?.title}
              </h1>
              <div className="flex gap-2 sm:gap-3 text-sm md:text-base divide-x-2">
                <span>{`${Math.floor(movie?.runtime / 60)} hr ${
                  movie?.runtime % 60
                } min`}</span>

                <span className="pl-2">
                  Rating {movie?.vote_average.toFixed(1)}
                </span>

                <button
                  onClick={() => handleSaveMovie(movie)}
                  className="px-2 font-semibold flex items-center gap-2 text-orange-400 hover:scale-110 duration-300"
                >
                  {didSaved ? (
                    <i className="fa-solid fa-bookmark" />
                  ) : (
                    <i className="fa-regular fa-bookmark" />
                  )}
                  Save
                </button>
              </div>

              <div className="flex flex-wrap gap-3 my-6">
                {movie?.genres.map((g) => (
                  <span
                    key={crypto.randomUUID()}
                    className="text-xs sm:text-sm border-2 border-white rounded-3xl py-1 px-4"
                  >
                    {g.name}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base">{movie?.overview}</p>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
