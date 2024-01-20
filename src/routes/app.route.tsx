import { App } from "@/app";
import { Home, Project } from "@/pages";
import { ErrorView } from "@/views";
import NotFound from "@/views/NotFound/NotFound";
import ProjectDetailView from "@/views/ProjectDetailView";
import { projectDetailLoader } from "@/views/ProjectDetailView";
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
      {
        path: "mine",
        element: <Project />,
        errorElement: <ErrorView />,
      },
      {
        path: "mine/:id",
        element: <ProjectDetailView />,
        loader: projectDetailLoader,
        errorElement: <NotFound />,
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
