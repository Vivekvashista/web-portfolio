import {createTheme} from "@material-ui/core/styles";
import typography from "./typography";

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: `#424141`,
    },
    secondary: {
      main: `#1B5AB9`,
    },
    text: {
      hint: '#5f86ec',
    }
  },
  typography: {
    ...typography,
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
  utils: {
    link: {
      textDecoration: 'underline',
      "&:hover": {
        textDecoration: 'none'
      }
    }
  }
});