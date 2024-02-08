import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";
import "./app.scss";
import { appTheme } from "./app.theme";
import { BoundaryView } from "./views";

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <BoundaryView>
        <Outlet />
      </BoundaryView>
    </ThemeProvider>
  );
}
