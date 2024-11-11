import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";

const ArrowDownGreen = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L5.91019 6.33099L10.8209 1.0233"
          stroke="#00754A"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default ArrowDownGreen;
