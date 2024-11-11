import { Box } from "@mui/material";
import { styles } from "../../../styles";
import React from "react";

const CustomerSearchIcon = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.29089 15.5807C12.3172 15.5807 15.5807 12.3167 15.5807 8.29035C15.5807 4.26401 12.3172 1 8.29089 1C4.26456 1 1 4.26401 1 8.29035C1 12.3167 4.26456 15.5807 8.29089 15.5807Z"
          stroke="#666666"
          strokeWidth="0.9121"
          strokeMiterlimit="10"
        />
        <path
          d="M13.2344 13.6572L19.2051 19.6281"
          stroke="#666666"
          strokeWidth="0.9121"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
};

export default CustomerSearchIcon;
