import { Box } from "@mui/material";
import { styles } from "../../../styles";

import React from "react";

const TickVIcon = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g id="Group 164">
          <circle id="Ellipse 6" cx="10" cy="10" r="10" fill="#006241" />
          <path
            id="Vector"
            d="M5 10.6559L8.72325 14.9159L14.3749 6"
            stroke="white"
            strokeWidth="0.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </Box>
  );
};

export default TickVIcon;
