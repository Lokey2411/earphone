import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";

const AddIcon = ({ width = "15", height = "15" }) => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 6 6"
        fill="none"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M3.07019 5.15002C4.2576 5.15002 5.22015 4.16953 5.22015 2.96002C5.22015 1.75052 4.2576 0.77002 3.07019 0.77002C1.88278 0.77002 0.920166 1.75052 0.920166 2.96002C0.920166 4.16953 1.88278 5.15002 3.07019 5.15002Z"
            stroke="#060606"
            strokeWidth="0.4"
            strokeMiterlimit="10"
          />
          <g id="Group_2">
            <path
              id="Vector_2"
              d="M3.07007 1.75V4.17999"
              stroke="#060606"
              strokeWidth="0.4"
              strokeMiterlimit="10"
            />
            <path
              id="Vector_3"
              d="M4.27014 2.95996H1.88013"
              stroke="#060606"
              strokeWidth="0.4"
              strokeMiterlimit="10"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
};

export default AddIcon;
