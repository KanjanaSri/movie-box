import React from "react";
import MovieList from "../MovieList/MovieList";
import { useContext } from "react";
import { SaveListContext } from "../../context/SaveListContext";

export default function SavedList() {
  const { saveList, handleRemoveMovie } = useContext(SaveListContext);
  const emptyListStyle = {
    display: "flex",
    minHeight: "80vh",
    justifyContent: "center",
    alignItems: "center",
  };
  if (!saveList?.length) return <h1 style={emptyListStyle}>List is empty</h1>;

  return (
    <div>
      <MovieList
        movies={saveList}
        onRemoveMovie={handleRemoveMovie}
        showRemove={true}
      />
    </div>
  );
}
