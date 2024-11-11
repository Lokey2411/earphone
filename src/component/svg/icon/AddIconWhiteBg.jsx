import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";

const AddIconWhiteBg = ({ width = "15", height = "15" }) => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 35 35"
        fill="none"
      >
        <g id="Group">
          <path
            id="Vector"
            d="M17.5003 35C27.1652 35 35 27.1649 35 17.4999C35 7.83485 27.1652 0 17.5003 0C7.83536 0 0 7.83485 0 17.4999C0 27.1649 7.83536 35 17.5003 35Z"
            fill="white"
          />
          <g id="Group_2">
            <g id="Group_3">
              <path
                id="Vector_2"
                d="M17.4883 9L17.5122 26"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M26.0002 17.488L9.00023 17.5119"
                stroke="black"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
};

export default AddIconWhiteBg;
