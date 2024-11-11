import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../../styles";

const CustomerArrowRightGreen = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="7"
        height="10"
        viewBox="0 0 7 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0.460083L5.58506 5.02208L1 9.53944"
          stroke="#006241"
          strokeMiterlimit="10"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default CustomerArrowRightGreen;
