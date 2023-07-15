import React, { createContext, useState, useEffect } from "react";

export const MoviesContext = createContext();

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_BEARER}`,
  },
};

export default function MoviesProvider({ children }) {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMoviesByList = async (list) => {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${list}`,
          options
        );

        if (!res.ok)
          throw new Error(`Something went wrong with fetching movies`);

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        if (list === "popular") setPopularMovies(data.results);
        if (list === "now_playing") setNowPlayingMovies(data.results);
        if (list === "upcoming") setUpcomingMovies(data.results);

        setError("");
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesByList("popular");
    fetchMoviesByList("now_playing");
    fetchMoviesByList("upcoming");
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        popularMovies,
        nowPlayingMovies,
        upcomingMovies,
        isLoading,
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
