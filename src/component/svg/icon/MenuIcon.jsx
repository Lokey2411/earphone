import { Box } from "@mui/material";
import React from "react";

const MenuIcon = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <svg
        width="15"
        height="8"
        viewBox="0 0 15 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.22551 6.99634L14.6255 6.99634"
          stroke="white"
          stroke-width="0.8568"
          stroke-miterlimit="10"
        />
        <path
          d="M0.22551 1.00641L14.6255 1.00641"
          stroke="white"
          stroke-width="0.8568"
          stroke-miterlimit="10"
        />
      </svg>
    </Box>
  );
};

export default MenuIcon;
