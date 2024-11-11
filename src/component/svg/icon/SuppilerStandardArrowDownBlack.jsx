import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../../styles";

const SuppilerStandardArrowDownBlack = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.70048 8.652L7.32349 9.029C7.42348 9.12898 7.55909 9.18515 7.70049 9.18514C7.8419 9.18514 7.9775 9.12896 8.07748 9.02898L7.70048 8.652ZM15.3809 1.725C15.5891 1.51679 15.5891 1.17921 15.3809 0.971014C15.1727 0.762814 14.8351 0.762827 14.6269 0.971043L15.3809 1.725ZM0.153534 1.85945L7.32349 9.029L8.07746 8.27499L0.907501 1.10544L0.153534 1.85945ZM8.07748 9.02898L15.3809 1.725L14.6269 0.971043L7.32347 8.27502L8.07748 9.02898Z"
          fill="black"
        />
      </svg>
    </Box>
  );
};

export default SuppilerStandardArrowDownBlack;
