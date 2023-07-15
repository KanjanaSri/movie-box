import React from "react";
import { useContext } from "react";
import { SaveListContext } from "../../context/SaveListContext";
import MovieCard from "../MovieCard/MovieCard";
import "./SaveList.css";

export default function SaveList() {
  const { saveList, handleRemoveMovie } = useContext(SaveListContext);

  if (!saveList?.length) return <h1 className="empty">List is empty</h1>;

  return (
    <div className="cards-container">
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
