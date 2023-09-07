import { render } from "preact";
import { RouterProvider } from "react-router-dom";
import "./index.scss";
import appRoute from "./routes/app.route.tsx";

render(<RouterProvider router={appRoute} />, document.getElementById("app")!);
