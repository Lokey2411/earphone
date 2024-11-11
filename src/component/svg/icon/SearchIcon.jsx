import { Box } from "@mui/material";
import React from "react";

export const SearchIcon = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <svg
        width="15"
        height="16"
        viewBox="0 0 15 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.4989 12.0795C9.46972 12.0795 11.878 9.52091 11.878 6.36471C11.878 3.2085 9.46972 0.649902 6.4989 0.649902C3.52807 0.649902 1.11972 3.2085 1.11972 6.36471C1.11972 9.52091 3.52807 12.0795 6.4989 12.0795Z"
          stroke="white"
          strokeWidth="0.5355"
          strokeMiterlimit="10"
        />
        <path
          d="M10.2196 10.5145L14.4332 14.9963"
          stroke="white"
          strokeWidth="0.5355"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
};

export default SearchIcon;
