import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const Header = lazy(() => import("./components/Header"));
const MovieDetail = lazy(() => import("./components/MovieDetail"));
const SaveList = lazy(() => import("./components/SaveList"));

import Footer from "./components/ui/Footer";
import NotFound from "./components/ui/NotFound";
import About from "./components/ui/About";
import Contact from "./components/ui/Contact";
import Loader from "./components/ui/Loader";
import SearchList from "./components/SearchList";

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
          <Route path="/save-list" element={<SaveList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
