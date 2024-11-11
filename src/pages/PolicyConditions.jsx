import { Box } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";

const PolicyConditions = () => {
  const policies = [
    "Chính sách an toàn và sức khỏe",
    "Chính sách bảo mật thông tin",
    "Chính sách bảo mật",
    "Chính sách các bên liên quan",
  ];

  const terms = [
    "Điều khoản sử dụng của trung tâm quà tặng doanh nghiệp The Thanh Coffee",
    "Điều khoản sử dụng đặt hàng và thanh toán trên thiết bị di động của The Thanh Coffee dành cho những thành viên không phải là thành viên của My The Thanh",
    "Điều khoản sử dụng dịch vụ Thanh Coffee Express ",
    "Điều khoản sử dụng ứng dụng di động chính thức của The Thanh Coffee",
    "Điều khoản sử dụng Web đặt hàng và thanh toán trên thiết bị di động",
    "Điều khoản và điều kiện đặt hàng và thanh toán trên điện thoại di động của The Thanh Coffee",
    "Điều khoản và điều kiện đặt hàng và thanh toán trên điện thoại đi động của The Thanh Coffee",
    "Điều khoản và điều kiện đặt hàng trên Web của The Thanh Coffee",
    "Điều kiện sử dụng cưa hàng trực tuyến The Thanh Coffee",
  ];

  const generateUrl = (type, index) => {
    return `/dieu-kien-chinh-sach/${type}/${index}`;
  };

  return (
    <Box
      sx={{
        ...styles.fontSize13,
        minHeight: "100vh",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Logotop />
      <Navbardesktop />
      <Box
        sx={{
          p: "240px 239px 140px 239px",
          "@media (max-width:900px)": {
            p: "20px",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "36px",
            fontWeight: "700",
            pb: "64px",
            textAlign: "center",
            "@media (max-width:900px)": {
              mt: "160px",
              fontSize: "32px",
              pb: "30px",
            },
          }}
        >
          Danh sách các chính sách, điều khoản và điều kiện
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            fontSize: "18px",
            "@media (max-width:900px)": {
              fontSize: "14px",
              display: "grid",
            },
          }}
        >
          <Box
            sx={{
              width: "50%",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                pb: "24px",
                "@media (max-width:900px)": {
                  fontSize: "20px",
                },
              }}
            >
              Chính sách
            </Box>
            <Box>
              {policies.map((policy, index) => (
                <Box sx={{ pb: "14px" }} key={index}>
                  <a href={generateUrl("policies", index)}>{policy}</a>
                </Box>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "24px",
                fontWeight: "600",
                pb: "24px",
                "@media (max-width:900px)": {
                  fontSize: "20px",
                },
              }}
            >
              Các điều khoản và điều kiện
            </Box>
            <Box>
              {terms.map((term, index) => (
                <Box sx={{ pb: "14px" }} key={index}>
                  <a href={generateUrl("terms", index)}>{term}</a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default PolicyConditions;
