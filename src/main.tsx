import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./prismic.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    ),
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
