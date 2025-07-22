import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import Prueba from "./Prueba.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/login/success",
    Component: Prueba,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
