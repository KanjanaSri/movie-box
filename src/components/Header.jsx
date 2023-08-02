import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full h-auto flex flex-wrap justify-between items-center py-4 px-3 sm:px-10 bg-zinc-900">
      <div className="w-14 sm:w-14">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
      </div>

      <SearchForm />

      <button
        className="block sm:hidden text-zinc-300 text-xl"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <i className="fa-solid fa-angles-up"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </button>

      <ul
        className={`${
          open ? "w-screen mt-5" : "hidden"
        } text-center leading-loose sm:text-sm md:text-base sm:flex gap-5 `}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/save-list">Save List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
