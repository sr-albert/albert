import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import "./app.scss";
import { appTheme } from "./app.theme";
import { BoundaryView } from "./views";

export function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <BoundaryView>
        <Outlet />
      </BoundaryView>
    </ThemeProvider>
  );
}
