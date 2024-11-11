import { Box } from "@mui/material";
import React from "react";
import { styles } from "../../../styles";

const CompanyFileArrowRightWhite = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="23"
        height="11"
        viewBox="0 0 23 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="arrow-head"
          d="M0 5.04419H21.2641"
          stroke="white"
          stroke-miterlimit="10"
        />
        <path
          id="arrow-body"
          d="M14.4149 9.86375C14.2587 9.64063 14.3263 9.32826 14.5717 9.17208L21.041 5.04425L14.5717 0.916557C14.3486 0.760372 14.281 0.448007 14.4149 0.224885C14.571 0.00176382 14.8846 -0.065189 15.1078 0.0686839L22.2459 4.62031C22.4021 4.70956 22.4703 4.86575 22.4703 5.04425C22.4703 5.22275 22.3798 5.37894 22.2459 5.46819L15.1078 10.02C15.0185 10.0646 14.929 10.1092 14.8398 10.1092C14.6613 10.0868 14.5041 9.99762 14.4149 9.86375Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default CompanyFileArrowRightWhite;
