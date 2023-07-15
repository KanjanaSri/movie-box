import React from "react";
import MovieList from "../MovieList/MovieList";

export default function SavedList({ savedList, onRemoveMovie }) {
  const emptyListStyle = {
    display: "flex",
    minHeight: "80vh",
    justifyContent: "center",
    alignItems: "center",
  };
  if (!savedList?.length) return <h1 style={emptyListStyle}>List is empty</h1>;

  return (
    <div>
      <MovieList
        movies={savedList}
        onRemoveMovie={onRemoveMovie}
        showRemove={true}
      />
    </div>
  );
}
