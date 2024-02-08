import { createTheme } from "@mui/material";

// Declare new variant of MuiButtonBase
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    abtn: true; // Albert's custom Button
  }
}

export const appTheme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {},
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "abtn", color: "primary" },
          style: {
            backgroundColor: "light-color",
            borderRadius: "4px",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            margin: "5px",
            minHeight: "40px",
            color: "dark-color",
            border: "1px solid transparent",

            "&:hover": {
              transform: "scale(1.05)",
              color: "main-color",
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
        },
      },
    },
  },
});
