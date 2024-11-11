import { Box } from "@mui/material";
import React from "react";
import CauHoiThuongGap from "./CauHoiThuongGap";

const CacCauHoi = React.memo(({ questions }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {questions?.map((question) => (
        <CauHoiThuongGap key={question?.id} question={question} />
      ))}
    </Box>
  );
});

export default CacCauHoi;
