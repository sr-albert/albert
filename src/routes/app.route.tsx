import { App } from "@/app";
import { Home } from "@/pages";
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
    path: "*",
    element: <NotFound />,
  },
]);

export default appRoute;
