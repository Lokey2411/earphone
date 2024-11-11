import React from "react";
import { Box } from "@mui/material";
import { styles } from "../styles";
const ChamSocKhachHangNutMauXanhNhat = ({ value }) => {
  return (
    <Box sx={{ ...styles.centerFlex }}>
      <Box
        sx={{
          borderRadius: "18px",
          border: "solid #06542D 1px",
          p: "10px 20px",
          color: "#06542D",
        }}
      >
        {value}
      </Box>
    </Box>
  );
};

export default ChamSocKhachHangNutMauXanhNhat;
