import { Container } from "@mui/material";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Container sx={{ width: "100%", marginTop: 0 }}>
      <NavBar />
      <Container sx={{ marginTop: 4 }}>
        <Outlet />
      </Container>
    </Container>
  );
};

export default MainLayout;
