import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  palette: {},
  typography: {},
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});
