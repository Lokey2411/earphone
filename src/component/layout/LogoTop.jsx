import React from "react";
import { styles } from "../../styles.js";
import { Box } from "@mui/material";

const Logotop = () => {
  return (
    <Box
      sx={{
        ...styles.fontSize13,
        ...styles.backgroundColor.xamdad8d4,
        position: "fixed",
        fontFamily: "Inter",
        zIndex: 10,
        width: "100%",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Box
          sx={{
            fontSize: "12px",
            color: "black",
            "&:hover": {
              color: "black",
            },
          }}
        >
          <a href="/">THE THANH COFFEE</a>
        </Box>
      </Box>
    </Box>
  );
};

export default Logotop;
