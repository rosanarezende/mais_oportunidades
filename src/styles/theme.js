import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: { paper: "#fff", default: "rgba(0, 0, 0, 0.05);" },
    primary: {
      light: "rgba(92, 208, 81, 1)",
      main: "rgba(57, 198, 71, 1)",
      dark: "rgba(39, 152, 98, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(240, 93, 121, 1)",
      main: "rgba(235, 71, 71, 1)",
      dark: "rgba(208, 91, 60, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },

  typography: {
    fontSize: 14,
    h1: { fontSize: "min(28px, 7.5vw)", fontWeight: "bold" },
    h2: {
      fontSize: "min(24px, 6.5vw)",
      lineHeight: "33px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "min(20px, 5.5vw)",
      lineHeight: "28px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "min(18px, 5vw)",
      lineHeight: "21px",
      fontWeight: "bold",
    },
    h5: { fontSize: "min(18px, 5vw)", lineHeight: "21px" },
    h6: {
      fontSize: "min(16px, 4.5vw)",
      lineHeight: "18px",
      fontWeight: "bold",
    },
    body1: { fontSize: "min(16px, 4.5vw)", lineHeight: "18px" },
    body2: { fontSize: "min(14px, 4vw)", lineHeight: "16px" },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: "26px",
      },
      input: {
        textAlign: "center",
      },
    },
    MuiButton: {
      root: {
        borderRadius: "26px",
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "16px",
      },
    },
    MuiInputLabel: {
      formControl: {
        width: "calc(100% - 18px)",
        textAlign: "center",
      },
      shrink: {
        textAlign: "left",
      },
    },
  },
});
