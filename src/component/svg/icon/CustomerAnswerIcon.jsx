import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../../styles";

const CustomerAnswerIcon = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.8668 12.2756H1.14026C0.503903 12.2756 0.00390625 11.7376 0.00390625 11.106V1.44522C0.00390625 0.790254 0.52663 0.275635 1.14026 0.275635H11.8668C12.5032 0.275635 13.0032 0.813646 13.0032 1.44522V11.106C13.0259 11.761 12.5032 12.2756 11.8668 12.2756Z"
          fill="#025129"
        />
        <path d="M9.42445 3.2644H3.58398V4.6053H9.42445V3.2644Z" fill="white" />
        <path
          d="M9.42445 5.60535H3.58398V6.94624H9.42445V5.60535Z"
          fill="white"
        />
        <path
          d="M7.47023 7.94617H3.58398V9.28706H7.47023V7.94617Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default CustomerAnswerIcon;
