import React from 'react';
import {theme} from "./theming/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {useState} from "react";
import {darkTheme} from "./theming/darkTheme";

export const ThemeContext = React.createContext();

const ThemeHandler = () => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const toggleTheme = () =>
    setCurrentTheme(curr => curr === theme ? darkTheme : theme);

  return (
    <ThemeContext.Provider value={{
      mode: currentTheme === theme ? 'light' : 'dark',
      toggleTheme
    }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline/>
        <App/>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeHandler;
