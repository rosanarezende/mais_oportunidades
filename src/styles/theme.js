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
    fontFamily: ["Helvetica Narrow CE", "Helvetica", "sans-serif"],
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

  // shape: { borderRadius: 5 },
  overrides: {
    // MuiTypography: {
    //   root: {
    //     marginBottom: '5px',
    //   },
    // },
    // MuiInputBase: {
    //   root: {
    //     color: '#4c6f77',
    //     fontSize: 'min(14px, 3.5vw)',
    //   },
    // },
    MuiOutlinedInput: {
      root: {
        borderRadius: "26px",
      },
      // input: {
      //   fontSize: 'min(14px, 3.5vw)',
      //   height: '12px',
      // },
    },
    // MuiFilledInput: {
    //   root: {
    //     borderRadius: "26px",
    //   },
    // },
    // MuiFormLabel: {
    //   root: {
    //     color: 'rgba(0, 0, 0, 0.6)',
    //   },
    // },
    // MuiTextField: {
    //   root: {
    //     margin: '5px',
    //   },
    // },
    MuiButton: {
      root: {
        borderRadius: "26px",
        // textTransform: 'none',
        // margin: '0 5px 5px 0',
        // fontSize: 'min(14px, 3.5vw)',
        // letterSpacing: '1px',
      },
      // fullWidth: {
      //   maxWidth: 'min(200px, 50vw)',
      // },
    },
    MuiPaper: {
      rounded: {
        borderRadius: "16px",
      },
    },
    // MuiListItem:  {
    //   root: {
    //     backgroundColor: "#fff",
    //   },
    //   selected: {
    //     backgroundColor: "#fff",
    //   },
    //   focusVisible: {
    //     backgroundColor: "#fff",
    //   }
    // },
    // MuiTableSortLabel: {
    //   root: {
    //     color: '#4c6f77',
    //     '&:hover': {
    //       color: '#C1D8DE',
    //     },
    //     '&$active': {
    //       color: '#4c6f77',
    //     },
    //   },
    // },
    // MuiIcon: {
    //   root: {
    //     color: '#4c6f77',
    //   },
    // },
  },
  // props: {
  // MuiButton: {
  //   variant: 'outlined',
  //   color: 'secondary',
  // },
  // MuiTextField: {
  //   variant: 'outlined',
  //   color: 'secondary',
  // },
  // MuiAppBar: {
  //   elevation: 1,
  // },
  // MuiPaper: {
  //   elevation: 0,
  // },
  // },
});
