import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../../styles";

const NewsCenterArrow = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="inner-arrow"
          d="M13.4995 26.0003C20.4031 26.0003 26 20.4036 26 13.5C26 6.59636 20.4031 1 13.4995 1C6.59582 1 1 6.59636 1 13.5C1 20.4036 6.59582 26.0003 13.4995 26.0003Z"
          stroke="#4A4A4A"
          strokeMiterlimit="10"
        />
        <path
          id="outer-border"
          d="M15.5024 19.2002L9.97803 13.3241L15.5024 7.80029"
          stroke="#4A4A4A"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default NewsCenterArrow;
