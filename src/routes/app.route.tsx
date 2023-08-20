import { createBrowserRouter, useRouteError } from "react-router-dom";
import { App } from "@/app";
import { Contact, Home, Project, actionContactSubmit } from "@/pages";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
        action: actionContactSubmit,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

export default appRoute;
