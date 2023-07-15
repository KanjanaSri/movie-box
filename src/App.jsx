import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./components/Home/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const MovieDetail = lazy(() => import("./components/MovieDetail/MovieDetail"));
const SaveList = lazy(() => import("./components/SaveList/SaveList"));

import Footer from "./components/ui/Footer/Footer";
import NotFound from "./components/ui/NotFound/NotFound";
import About from "./components/ui/About/About";
import Contact from "./components/ui/Contact/Contact";
import Loader from "./components/ui/Loader/Loader";
import SearchList from "./components/SearchList/SearchList";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/search/:query" element={<SearchList />} />
          <Route path="/saved-list" element={<SaveList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
