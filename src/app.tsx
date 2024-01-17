import { Outlet } from "react-router-dom";
import { ActionBar, BoundaryView } from "./views";
import "./app.scss";

export function App() {
  return (
    <BoundaryView>
      <Outlet />
      <ActionBar />
    </BoundaryView>
  );
}
