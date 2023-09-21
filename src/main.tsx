import { RouterProvider } from "react-router-dom";
import appRoute from "./routes/app.route.tsx";
import "./index.scss";
import ReactDOM from "react-dom/client";
import React from "react";

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
  </React.StrictMode>
);
