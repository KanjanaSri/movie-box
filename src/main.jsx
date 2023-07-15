import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import MoviesProvider from "./context/moviesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoviesProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MoviesProvider>
);
