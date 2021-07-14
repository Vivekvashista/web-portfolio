import {createTheme} from "@material-ui/core/styles";
import typography from "./typography";

export const theme = createTheme({
  palette: {
    common:{
      white: `#fff`,
      black: `#000`
    },
    primary: {
      main: `#FFFEF9`,
    },
    secondary: {
      main: `#1B5AB9`,
    },
    error: {
      main: `#f44336`,
    },
    background: {
      main: "#FFFEF9",
    },
    text: {
      primary: '#767d86',
      secondary: '#5f86ec'
    }
  },
  typography: {
    ...typography
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          "scroll-behaviour": "smooth",
          "box-sizing": "border-box",
          "font-family": "Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,\n" +
            "    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        },
        body: {
          letterSpacing: '0.08rem !important'
        }
      },
    },
  },
});