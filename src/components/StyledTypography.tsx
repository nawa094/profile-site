import { Typography, styled } from "@mui/material";

// Create a styled Typography component
export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main, // Always use the secondary color
}));
