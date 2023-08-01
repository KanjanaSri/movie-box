import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchForm() {
  const { queryTerm, handleSearchChange, handleSearchSubmit, handleClear } =
    useContext(SearchContext);

  return (
    <div className=" bg-zinc-700 text-zinc-400 px-3 py-0.5 md:py-1 rounded-2xl">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="text-sm md:text-base bg-transparent placeholder:text-zinc-500 focus:outline-none"
          type="text"
          placeholder="Search..."
          spellCheck={false}
          value={queryTerm}
          onChange={handleSearchChange}
        ></input>

        <i
          className="fa-solid fa-xmark text-zinc-500 cursor-pointer"
          onClick={handleClear}
        ></i>
      </form>
    </div>
  );
}
