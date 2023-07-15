import { Link, NavLink } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>
      <SearchForm />
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
            Save List
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
