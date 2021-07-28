import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#ffffff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#444444",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
