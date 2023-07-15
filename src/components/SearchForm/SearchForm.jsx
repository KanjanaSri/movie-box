import React, { useContext } from "react";
import "./SearchForm.css";
import { SearchContext } from "../../context/SearchContext";

export default function SearchForm() {
  const { queryTerm, handleSearchChange, handleSearchSubmit, handleClear } =
    useContext(SearchContext);

  return (
    <div className="form-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={queryTerm}
          onChange={handleSearchChange}
        ></input>

        <i className="fa-solid fa-xmark" onClick={handleClear}></i>
      </form>
    </div>
  );
}
