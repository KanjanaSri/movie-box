import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import MoviesProvider from "./context/MoviesContext.jsx";
import SaveListProvider from "./context/SaveListContext.jsx";
import SearchProvider from "./context/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MoviesProvider>
      <SaveListProvider>
        <SearchProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </SearchProvider>
      </SaveListProvider>
    </MoviesProvider>
  </BrowserRouter>
);
