import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchForm() {
  const { queryTerm, handleSearchChange, handleSearchSubmit, handleClear } =
    useContext(SearchContext);

  return (
    <div className=" bg-zinc-700 text-zinc-400 px-3 py-1 md:py-1 rounded-2xl">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="w-32 md:w-48 text-base bg-transparent placeholder:text-zinc-500 focus:outline-none"
          type="text"
          placeholder="Search..."
          spellCheck={false}
          value={queryTerm}
          onChange={handleSearchChange}
        ></input>

        <span className="divide-x-2 divide-zinc-500">
          <i
            className="fa-solid fa-xmark pr-2 text-zinc-500 cursor-pointer"
            onClick={handleClear}
          ></i>
          <i
            class="fa-solid fa-magnifying-glass pl-2 text-sm text-zinc-500 cursor-pointer"
            onClick={handleSearchSubmit}
          ></i>
        </span>
      </form>
    </div>
  );
}
