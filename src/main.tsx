import { render } from "preact";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import appRoute from "./routes/app.route.tsx";

render(<RouterProvider router={appRoute} />, document.getElementById("app")!);
