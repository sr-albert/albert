import { App } from "@/app";
import { Home, Project } from "@/pages";
import { ErrorView } from "@/views";
import NotFound from "@/views/NotFound/NotFound";
import { createBrowserRouter } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // {
      //   path: "/contact",
      //   element: <Contact />,
      //   action: actionContactSubmit,
      // },
      // {
      //   path: "/project",
      //   element: <Project />,
      // },
    ],
  },
  {
    path: "/mine",
    element: <Project />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "mine/:projectId",
        element: <Project />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorView />,
  },
]);

export default appRoute;
