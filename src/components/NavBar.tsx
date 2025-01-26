import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Tooltip,
  useTheme,
} from "@mui/material";
import { useThemeToggle } from "../ThemeContext";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledTypography } from "./StyledTypography";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const NavBar = () => {
  const routes = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
  ];

  const { toggleTheme } = useThemeToggle();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();

  return (
    <AppBar
      position="fixed"
      sx={{
        borderRadius: 100,
        width: { xs: "90%", sm: "70%", md: "50%" }, // Responsive width
        marginLeft: { xs: "5%", sm: "15%", md: "25%" }, // Responsive margin
        top: 15, // Stick to the top
        left: 0, // Stick to the left
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <Stack direction="row" spacing={3} sx={{ flexGrow: 1 }}>
          {routes.map((route) => (
            <Button
              key={route.path}
              color="inherit"
              onClick={() => navigate(route.path)}
              sx={{
                borderRadius: 100,
                fontWeight:
                  location.pathname === route.path ? "bold" : "normal",
                backgroundColor:
                  location.pathname === route.path
                    ? theme.palette.action.selected // Use a subtle selected color
                    : "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover, // Add hover effect
                },
              }}
            >
              <StyledTypography>{route.label}</StyledTypography>
            </Button>
          ))}
        </Stack>
        <Tooltip title="Toggle theme">
          <Button
            color="inherit"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </Button>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
