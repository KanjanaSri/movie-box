import { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import HeroSlider from "./HeroSlider";
import PosterSlider from "./PosterSlider";
import Loader from "./ui/Loader";
import ErrorMessage from "./ui/ErrorMessage";

export default function Home() {
  const { popularMovies, nowPlayingMovies, upcomingMovies, isLoading, error } =
    useContext(MoviesContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && <HeroSlider movies={popularMovies} />}
      {!isLoading && !error && (
        <PosterSlider movies={nowPlayingMovies}>
          <h1 className="my-10 text-2xl sm:text-3xl italic font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-rose-400">
            Now Playing
          </h1>
        </PosterSlider>
      )}
      {!isLoading && !error && (
        <PosterSlider movies={upcomingMovies}>
          <h1 className="my-10 text-2xl sm:text-3xl italic font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-rose-400">
            Upcoming Movies
          </h1>
        </PosterSlider>
      )}
    </>
  );
}
