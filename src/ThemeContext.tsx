import React, { createContext, useState, useContext, ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeToggleContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const useThemeToggle = (): ThemeContextType => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error(
      "useThemeToggle must be used within a ThemeContextProvider"
    );
  }
  return context;
};

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeToggleContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export default ThemeContextProvider;
