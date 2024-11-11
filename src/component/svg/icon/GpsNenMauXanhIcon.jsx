import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../../styles";

const GpsIcon = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.333496" width="48" height="48" rx="10" fill="black" />
        <path
          d="M33.3335 22C33.3335 29 24.3335 35 24.3335 35C24.3335 35 15.3335 29 15.3335 22C15.3335 19.6131 16.2817 17.3239 17.9695 15.636C19.6574 13.9482 21.9465 13 24.3335 13C26.7204 13 29.0096 13.9482 30.6975 15.636C32.3853 17.3239 33.3335 19.6131 33.3335 22Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M24.3335 25C25.9904 25 27.3335 23.6569 27.3335 22C27.3335 20.3431 25.9904 19 24.3335 19C22.6766 19 21.3335 20.3431 21.3335 22C21.3335 23.6569 22.6766 25 24.3335 25Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Box>
  );
};

export default GpsIcon;
