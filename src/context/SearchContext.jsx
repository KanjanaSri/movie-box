import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  return (
    <SearchProvider.Provider value={{}}>{children}</SearchProvider.Provider>
  );
}
