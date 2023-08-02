import React, { useEffect, useContext } from "react";
import { SaveListContext } from "../context/SaveListContext";
import MovieCard from "./MovieCard";

export default function SaveList() {
  const { saveList, handleRemoveMovie } = useContext(SaveListContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!saveList?.length)
    return <h1 className="min-h-[70vh] text-center mt-40">List is empty</h1>;

  return (
    <div className="min-h-screen flex flex-wrap justify-center gap-5 sm:gap-10 mx-3 sm:mx-5 my-10">
      {saveList?.map((movie) => (
        <MovieCard
          movie={movie}
          key={crypto.randomUUID()}
          saveMovies={saveList}
          onRemoveMovie={handleRemoveMovie}
          showRemove={true}
        />
      ))}
    </div>
  );
}
