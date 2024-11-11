import { Box } from "@mui/material";
import { styles } from "../../../styles";
import React from "react";

const MenuFavoriteIconInactive = () => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <svg
        width="13"
        height="12"
        viewBox="0 0 13 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.4848 6.66855C10.499 8.10447 8.5274 9.96414 6.42135 11.1176C4.3153 9.98768 2.34366 8.10447 1.35785 6.66855C0.708107 5.72697 0.125586 4.6442 0.170395 3.49076C0.1928 2.29024 0.954604 1.13674 1.96282 0.642407C2.99344 0.148074 4.22568 0.289347 5.16669 0.971997C5.7044 1.34863 6.13006 1.88996 6.39892 2.50199C6.69018 1.88996 7.11591 1.34863 7.63122 0.971997C8.57223 0.312886 9.80447 0.148074 10.8351 0.642407C11.8657 1.13674 12.605 2.2667 12.6274 3.49076C12.6947 4.66774 12.1346 5.75051 11.4848 6.66855Z"
          stroke="#595959"
          strokeWidth="0.25"
          strokeMiterlimit="10"
        />
      </svg>
    </Box>
  );
};

export default MenuFavoriteIconInactive;
