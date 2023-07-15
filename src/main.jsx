import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import MoviesProvider from "./context/MoviesContext.jsx";
import SaveListProvider from "./context/SaveListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MoviesProvider>
    <SaveListProvider>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </SaveListProvider>
  </MoviesProvider>
);
