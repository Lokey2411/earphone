import React from "react";
import { Box } from "@mui/material";
import { styles } from "../../styles";
import moment from "moment";
import tintuc1 from "../../component/img/tintuc1.png";

const NewsArticleItems = ({ item }) => {
  return (
    <Box>
      <Box sx={{ ...styles.centerFlex }}>
        <img
          width={"100%"}
          alt=""
          src={item.image}
          // src={"/static/media/tintuc1.0df01ef7a7973b575492.png"}
        />
      </Box>
      <Box sx={{ p: "20px 24px", ...styles.backgroundColor.mauTrang }}>
        <Box
          sx={{
            ...styles.fontColor.xam808080,
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "150%",
            pb: "6px",
          }}
        >
          {item.type}
        </Box>
        <Box sx={{ fontSize: "16px", fontWeight: 700, pb: "6px" }}>
          {item.title}
        </Box>
        <Box
          sx={{
            ...styles.fontColor.xam666666,
            fontSize: "12px",
            lineHeight: "150%",
          }}
        >
          {moment(item.time).format("LL")}
        </Box>
      </Box>
    </Box>
  );
};

export default NewsArticleItems;
