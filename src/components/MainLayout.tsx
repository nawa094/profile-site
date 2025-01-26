import { Container, Fab, keyframes, Toolbar, Tooltip } from "@mui/material";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import BusinessIcon from "@mui/icons-material/Business";
import { useState } from "react";

// Define a hover animation
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const MainLayout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cvUrl = "public/nawa_mumbwe_cv.pdf";

  return (
    <Container sx={{ width: "100%", marginTop: 0 }}>
      <NavBar />
      <Toolbar />
      <Container sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
      <Tooltip
        title="Download Nawa's CV"
        arrow
        sx={{
          fontSize: "1.2rem", // Custom font size
          backgroundColor: "primary.main", // Custom background color
        }}
      >
        <Fab
          color="primary"
          aria-label="download CV"
          sx={{
            position: "fixed",
            bottom: 16,
            left: 16,
            animation: `${hoverAnimation} 2s infinite`, // Add animation
            "&:hover": {
              transform: "scale(1.1)", // Scale up on hover
              transition: "transform 0.2s ease-in-out",
            },
          }}
          component="a"
          href={cvUrl}
          download="Nawa_Mumbwe_CV.pdf" // Name of the downloaded file
          onMouseEnter={() => setIsHovered(true)} // Handle hover in
          onMouseLeave={() => setIsHovered(false)}
        >
          {isHovered ? <DownloadIcon /> : <BusinessIcon />} {/* Toggle icons */}
        </Fab>
      </Tooltip>
    </Container>
  );
};

export default MainLayout;
