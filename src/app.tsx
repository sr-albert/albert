import { Outlet } from "react-router-dom";
import "./app.css";
import { ActionBar } from "./views";

export function App() {
  return (
    <div id="app">
      <Outlet />
      <ActionBar />
    </div>
  );
}
