import { Outlet } from "react-router-dom";
import { ActionBar } from "./views";
import "./app.scss";

export function App() {
  return (
    <div id="app">
      <Outlet />
      <ActionBar />
    </div>
  );
}
