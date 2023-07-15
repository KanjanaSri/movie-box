import React from "react";
import MovieList from "../MovieList/MovieList";
import { useContext } from "react";
import { SaveListContext } from "../../context/SaveListContext";
import "./SaveList.css";

export default function SaveList() {
  const { saveList, handleRemoveMovie } = useContext(SaveListContext);

  if (!saveList?.length) return <h1 className="empty">List is empty</h1>;

  return (
    <div className="cards-container">
      <MovieList
        saveMovies={saveList}
        onRemoveMovie={handleRemoveMovie}
        showRemove={true}
      />
    </div>
  );
}
