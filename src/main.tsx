import "animate.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import appRoute from "./routes/app.route.tsx";

import { firebaseApp } from "./services/firebase.service.ts";
import { adminRoute } from "./routes/admin.route.tsx";
firebaseApp;

ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <RouterProvider router={appRoute} />
    <RouterProvider router={adminRoute} />
  </React.StrictMode>
);
