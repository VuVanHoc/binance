import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    secondary: {
      main: "#15a570",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    allVariants: {
      fontWeight: 500,
    },
    body1: {
      color: "#858e9c",
      fontSize: 16,
    },
  },
});

export default theme;
