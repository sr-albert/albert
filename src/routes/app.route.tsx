import { createBrowserRouter } from "react-router-dom";
import { App } from "@/app";
import { Contact, Home, Project } from "@/pages";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Something went wrong !</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

export default appRoute;
