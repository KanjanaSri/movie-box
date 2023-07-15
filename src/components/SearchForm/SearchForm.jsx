import React from "react";
import "./SearchForm.css";

export default function SearchForm({
  queryTerm,
  onSearchChange,
  onSearchSubmit,
}) {
  return (
    <div className="form-container">
      <form onSubmit={onSearchSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search..."
          value={queryTerm}
          onChange={onSearchChange}
        ></input>

        <i
          className="fa-solid fa-magnifying-glass"
          onClick={onSearchSubmit}
        ></i>
      </form>
    </div>
  );
}
