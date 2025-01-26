import { createContext, useContext, useState, ReactNode } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// Define the shape of the context
interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

// Create the context
const ThemeToggleContext = createContext<ThemeContextType | undefined>(
  undefined
);

// Custom hook to use the theme context
export const useThemeToggle = (): ThemeContextType => {
  const context = useContext(ThemeToggleContext);
  if (!context) {
    throw new Error(
      "useThemeToggle must be used within a ThemeContextProvider"
    );
  }
  return context;
};

// Define custom colors for light and dark modes
const lightModeColors = {
  primary: "#ffffff", // White
  secondary: "#3ec16d", // Light Blue
  contrastText: "#e9f8ee",
};

const darkModeColors = {
  primary: "#505051", // Dark Grey
  secondary: "#bfbfc2", // Light Grey
  contrastText: "rgba(255, 255, 255, 0.1)",
};

// Theme context provider component
const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Create the theme based on the current mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? darkModeColors.primary : lightModeColors.primary,
        contrastText: isDarkMode
          ? darkModeColors.contrastText
          : lightModeColors.contrastText,
      },
      secondary: {
        main: isDarkMode ? darkModeColors.secondary : lightModeColors.secondary,
        contrastText: isDarkMode
          ? darkModeColors.contrastText
          : lightModeColors.contrastText,
      },
    },
  });

  // Function to toggle between light and dark modes
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
