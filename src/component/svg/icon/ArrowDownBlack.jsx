import { Box } from "@mui/material";
import { styles } from "../../../styles";
import React from "react";

const ArrowDownBlack = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="15"
        height="15"
        viewBox="0 0 20 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.8893 0.775269L9.58663 10.1291L0.80072 0.775269"
          stroke="black"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};

export default ArrowDownBlack;
