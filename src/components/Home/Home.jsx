import HeroSlider from "../HeroSlider/HeroSlider";
import PosterSlider from "../PosterSlider/PosterSlider";
import Loader from "../ui/Loader/Loader";
import ErrorMessage from "../ui/ErrorMessage/ErrorMessage";
import { useContext } from "react";
import { MoviesContext } from "../../context/moviesContext";

export default function Home() {
  const { popularMovies, nowPlayingMovies, upcomingMovies, isLoading, error } =
    useContext(MoviesContext);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && <HeroSlider movies={popularMovies} />}
      {!isLoading && !error && (
        <PosterSlider movies={nowPlayingMovies}>Now Playing</PosterSlider>
      )}
      {!isLoading && !error && (
        <PosterSlider movies={upcomingMovies}>Upcoming Movies</PosterSlider>
      )}
    </>
  );
}
