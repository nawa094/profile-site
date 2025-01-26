import { AppBar, Button, Stack, Toolbar } from "@mui/material";
import { useThemeToggle } from "../ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
  ];

  const { toggleTheme } = useThemeToggle();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar
      position="static"
      sx={{ borderRadius: 100, width: "50%", marginLeft: "25%" }}
    >
      <Toolbar>
        <Stack direction="row" sx={{ flexGrow: 1 }}>
          {routes.map((route) => (
            <Button
              key={route.path}
              color="inherit"
              onClick={() => navigate(route.path)}
              sx={{
                fontWeight:
                  location.pathname === route.path ? "bold" : "normal",
                backgroundColor:
                  location.pathname === route.path
                    ? "rgba(255, 255, 255, 0.1)"
                    : "transparent",
              }}
            >
              {route.label}
            </Button>
          ))}
        </Stack>
        <Button color="inherit" onClick={toggleTheme}>
          Toggle Theme
        </Button>
      </Toolbar>
    </AppBar>
  );
};
