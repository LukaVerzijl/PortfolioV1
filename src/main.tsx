import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic.ts";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
