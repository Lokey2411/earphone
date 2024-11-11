import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";

const FilterArrowBlackDown = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.93948 0.952515L5.34653 5.49565L1 0.952515"
          stroke="black"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};

export default FilterArrowBlackDown;
