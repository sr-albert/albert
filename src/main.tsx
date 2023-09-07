import { render } from "preact";
import { RouterProvider } from "react-router-dom";
import appRoute from "./routes/app.route.tsx";
import "./index.scss";

render(<RouterProvider router={appRoute} />, document.getElementById("app")!);
