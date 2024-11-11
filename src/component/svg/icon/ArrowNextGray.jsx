import { Box } from "@mui/material";
import { styles } from "../../../styles";
import React from "react";

const ArrowNextGray = ({ width = "22", height = "22" }) => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.0003 21C16.5231 21 21 16.5228 21 11C21 5.47718 16.5231 1 11.0003 1C5.47746 1 1 5.47718 1 11C1 16.5228 5.47746 21 11.0003 21Z"
          fill="#DEDEE2"
          stroke="black"
          strokeWidth="0.25"
          strokeMiterlimit="10"
        />
        <path
          d="M9 7L12.7731 11L9 14.7728"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default ArrowNextGray;
