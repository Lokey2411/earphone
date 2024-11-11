import { Box } from "@mui/material";
import { styles } from "../styles";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";

const ApplySuccess = () => {
  return (
    <Box
      sx={{
        ...styles.fontSize13,
        display: "grid",
        minHeight: "100vh",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Logotop />
      <Navbardesktop />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          p: "0 240px",
          "@media (max-width:900px)": {
            p: "20px",
            mt: "100px",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "60px",
            fontWeight: "700",
            "@media (max-width:900px)": {
              fontSize: "36px",
            },
          }}
        >
          Cảm ơn bạn đã nộp hồ sơ Ứng tuyển. Chúng tôi sẽ phản hồi sớm nhất có
          thể.
        </Box>
        <Box
          sx={{
            color: "#353535",
            fontSize: "20px",
            lineHeight: "30px",
            pt: "24px",
            pb: "32px",
          }}
        >
          Chúng tôi bảo vệ và tôn trọng quyền sở hữu trí tuệ của những người
          khác cũng như bảo vệ quyền sở hữu trí tuệ của The Thanh Coffee, bao
          gồm cả kiến thức đã được đóng gói thành tài liệu.
        </Box>
        <Box
          sx={{
            border: "2px solid #06542D",
            p: "16px 19px 16px 40px",
            textTransform: "uppercase",
            fontSize: "20px",
            fontWeight: "500",
            color: "#06542D",
            "@media (max-width:900px)": {
              p: "10px",
            },
          }}
        >
          Quay lại trang chủ {"->"}
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default ApplySuccess;
