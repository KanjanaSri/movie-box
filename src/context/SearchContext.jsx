import React, { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

export const SearchContext = createContext();

const api_key = import.meta.env.VITE_API_KEY;

export default function SearchProvider({ children }) {
  const [queryTerm, setQueryTerm] = useState("");
  const [results, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const notInitialRender = useRef(false);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (notInitialRender.current) {
        const controller = new AbortController();
        const fetchMoviesByQuery = async (queryTerm) => {
          try {
            setIsLoading(true);
            setError("");

            const res = await fetch(
              `https://api.themoviedb.org/3/search/movie?query=${queryTerm}&api_key=${api_key}`,
              { signal: controller.signal }
            );

            if (!res.ok)
              throw new Error(`Something went wrong with fetching movie`);

            const data = await res.json();
            if (data.Response === "False") throw new Error("Movie not found");

            setResult(data.results);
            setError("");
          } catch (err) {
            if (err.name !== "AbortError") {
              console.log(err.message);
              setError(err.message);
            }
          } finally {
            setIsLoading(false);
          }
        };

        if (queryTerm.length > 0) fetchMoviesByQuery(queryTerm);

        return function () {
          controller.abort();
        };
      } else {
        notInitialRender.current = true;
      }
    },
    [queryTerm]
  );

  function handleSearchChange(e) {
    setQueryTerm(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    navigate(`/search/${queryTerm}`);
  }
  function handleClear(e) {
    setQueryTerm("");
  }

  return (
    <SearchContext.Provider
      value={{
        queryTerm,
        results,
        isLoading,
        error,
        handleSearchChange,
        handleSearchSubmit,
        handleClear,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
