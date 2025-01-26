import "./App.css";
import AppRoutes from "./Routes";
import ThemeContextProvider from "./ThemeContext";

export const App = () => {
  return (
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  );
};
