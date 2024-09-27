import { App } from "@/app";
import { Contact, Home, Project } from "@/pages";
import { ErrorView } from "@/views";
import ComponentsGalleryView from "@/views/ComponentsGalleryView";
import NotFound from "@/views/NotFound/NotFound";
import ProjectDetailView, {
  projectDetailLoader,
} from "@/views/ProjectDetailView";
import { createBrowserRouter } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorView />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "works",
        element: <Project />,
        errorElement: <ErrorView />,
      },
      {
        path: "works/:id",
        element: <ProjectDetailView />,
        loader: projectDetailLoader,
      },
      {
        path: "components",
        element: <ComponentsGalleryView />,
      },
      {
        path: "contact",
        element: <Contact />,
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
