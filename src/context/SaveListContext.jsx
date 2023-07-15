import React, { createContext, useState } from "react";

export const SaveListContext = createContext();

export default function SaveListProvider({ children }) {
  const [saveList, setSaveList] = useState([]);

  function handleSaveMovie(newMovie) {
    let didSaved = false;
    saveList.forEach((movie) => {
      if (movie.id === newMovie.id) didSaved = true;
    });

    if (!didSaved) {
      setSaveList((savedList) => [...savedList, newMovie]);
    }
  }
  function handleRemoveMovie(id) {
    setSaveList((saveList) => saveList?.filter((movie) => movie.id !== id));
  }

  return (
    <SaveListContext.Provider
      value={{
        saveList,
        setSaveList,
        handleSaveMovie,
        handleRemoveMovie,
      }}
    >
      {children}
    </SaveListContext.Provider>
  );
}
