import { Link, NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

export default function Header({ queryTerm, onSearchChange, onSearchSubmit }) {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <SearchForm
        queryTerm={queryTerm}
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      <ul className="nav-links">
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/saved-list"
          >
            Saved List
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
