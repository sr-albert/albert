import { Outlet } from "react-router-dom";
import "./app.scss";
import { BoundaryView } from "./views";

export function App() {
  return (
    <BoundaryView>
      <Outlet />
    </BoundaryView>
  );
}
