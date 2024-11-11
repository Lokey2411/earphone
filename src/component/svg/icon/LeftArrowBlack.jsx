import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";

const LeftArrowBlack = ({ width = "6", height = "10" }) => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5.07769 4.90318L1 8.5647"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default LeftArrowBlack;
