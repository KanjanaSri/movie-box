import React, { useState, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));
const MovieList = lazy(() => import("./components/MovieList/MovieList"));
const SavedList = lazy(() => import("./components/SavedList/SavedList"));

import Footer from "./components/ui/Footer/Footer";
import NotFound from "./components/ui/NotFound/NotFound";
import About from "./components/ui/About/About";
import Contact from "./components/ui/Contact/Contact";
import Loader from "./components/ui/Loader/Loader";

function App() {
  return (
    <>
      <Header
      // queryTerm={queryTerm}
      // onSearchChange={handleSearchChange}
      // onSearchSubmit={handleSearchSubmit}
      />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/movie/:id"
            element={
              <MovieDetail
              // onSaveMovie={handleSaveMovie}
              // savedList={savedList}
              />
            }
          />
          <Route
            path="/search/:query"
            element={
              <MovieList
              // movies={queryMovies}
              // queryIsLoading={queryIsLoading}
              // queryError={queryError}
              // showRemove={false}
              />
            }
          />
          <Route
            path="/saved-list"
            element={
              <SavedList
              // savedList={savedList}
              // onRemoveMovie={handleRemoveMovie}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
