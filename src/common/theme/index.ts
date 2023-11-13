import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#64CCC5",
      dark: "#176B87",
      light: "#64CCC5",
    },
    secondary: {
      main: "#00000040",
    },
    warning: {
      main: "#D6B85A",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Consolas",
  },
});

export default theme;
