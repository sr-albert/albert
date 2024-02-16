import { createTheme } from "@mui/material";

// Declare new variant of MuiButtonBase
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    abtn: true; // Albert's custom Button
    "abtn-circle": true;
  }
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobileS: true;
  }
}

export const appTheme = createTheme({
  breakpoints: {
    values: {
      mobileS: 0,
      xs: 480,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#B88E2F",
      dark: "#121212",
    },
  },
  typography: {},
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "grey",
          margin: "10px 0px",
        },
      },
    },
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
            "&:hover": {
              transform: "scale(1.05)",
              color: "primary.main",
            },
          },
        },
        {
          props: { variant: "abtn-circle", color: "primary" },
          style: {
            backgroundColor: "light-color",
            borderRadius: "50%",
            boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            margin: "5px",
            minHeight: "40px",
            color: "dark-color",
            border: "1px solid transparent",
            "&:hover": {
              transform: "scale(1.05)",
              color: "primary.main",
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
        },
      },
    },
  },
});
