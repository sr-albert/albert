import { Outlet } from "react-router-dom";
import { ActionBar, BoundaryView } from "./views";
import "./app.scss";
import { ActionBarSocial } from "./views/ActionBar";

export function App() {
  return (
    <BoundaryView>
      <Outlet />
      <ActionBar />
      <ActionBarSocial />
    </BoundaryView>
  );
}
