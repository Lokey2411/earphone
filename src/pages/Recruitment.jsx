import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import { useTheme } from "@emotion/react";
import phongcachlamviec from "../component/img/phongcachlamviec.jpg";
import giatrimachungtoicoitrongdoivoiungvien from "../component/img/giatrimachungtoicoitrongdoivoiungvien.jpg";

const Recruitment = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      {isMobile ? (
        <Box
          sx={{
            ...styles.fontSize13,
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/d252/c397/067723efcb2cd830f09226dbdb793d2e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dW0F2IIeJRi3CNKIK9YncClM7SqAkOVgDt7SHP-Qja2tlxNajDOcRTXtH0jujzp6b97yfXVCdoFrmHKf425JEUxeTJLfktsKfsyaujKXqWysDaTIEPYaja8Qi8ngMuek0t04VhDBGn7S5~HdVhqwIVE6n-3wjySxytOpQbWAIh4VnpOzhzUYTyNkS2qNtDidn9ofqNI7~XCY~0-2xNBOMnMQm4poQWgkuTSQXrbMhYuh0Wla59GpKkLcEZMoZkz5rDVAdRLIoaPO6Iz3lR6feYBvPSyNFCRXb0rvV6XoPXWd2y~EXW3BOXNJW-rnV0vEQtrnSrTHM6TkWVSAy2cz0Q__)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flexDirection: "column",
            display: "flex",
            minHeight: "100vh",
          }}
        >
          <Logotop />
          <Navbardesktop />
          <Box sx={{ pt: "160px" }}>
            <Box
              sx={{
                p: "0 20px 40px 20px",
                textAlign: "center",
              }}
            >
              <Box sx={{ fontSize: "20px", pb: "20px", fontWeight: "600" }}>
                Tuyển dụng
              </Box>
              <Box sx={{ fontSize: "36px", fontWeight: "700", pb: "16px" }}>
                Công việc tại The Thanh Coffee
              </Box>
              <Box sx={{ fontSize: "20px", fontWeight: "400" }}>
                Chào mừng đến với kênh tuyển dụng của The Thanh Coffee
              </Box>
            </Box>
            <Box
              sx={{
                margin: "20px",
              }}
            >
              <a href="/cong-viec-tai-cua-hang">
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "15px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                  }}
                >
                  Công việc tại cửa hàng
                </Box>
              </a>
              <a href="/cong-viec-tai-van-phong">
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "15px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                  }}
                >
                  Công việc tại văn phòng
                </Box>
              </a>
              <a href="/san-xuat-va-phan-phoi">
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "15px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                  }}
                >
                  Sản xuất và phân phối
                </Box>
              </a>
              <a href="/cong-viec-ban-thoi-gian">
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "15px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                  }}
                >
                  Việc làm bán thời gian
                </Box>
              </a>
            </Box>
            <Box sx={{ textAlign: "center", pt: "30px" }}>
              <Box sx={{ fontSize: "20px", fontWeight: "600" }}>Tuyển dụng</Box>
              <Box sx={{ fontSize: "36px", fontWeight: "700", p: "20px 0" }}>
                Nội dung khác
              </Box>
              <Box sx={{ fontSize: "20px" }}>Xem thêm nội dung</Box>
            </Box>
            <Box
              sx={{
                p: { xs: "24px", md: "96px 140px 140px 140px" }, // Adjust padding for mobile
                display: "flex",
                flexDirection: { xs: "column", md: "row" }, // Stack vertically on mobile
                justifyContent: "center",
                gap: "32px",
              }}
            >
              <Box
                sx={{
                  flex: "1 1 100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{ position: "relative", display: "block", width: "100%" }}
                >
                  <img
                    src={phongcachlamviec}
                    alt="Phong cách làm việc"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "30%",
                      background:
                        "linear-gradient(to top, rgba(6, 84, 45, 0.85), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      bottom: "24px",
                      right: "46px",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      <a href="/phong-cach-lam-viec" rel="noreferrer">
                        Xem Thêm
                      </a>
                    </Box>
                    <Box>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0007 18.6666L18.6673 14M18.6673 14L14.0007 9.33331M18.6673 14H9.33398M25.6673 14C25.6673 20.4433 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4433 2.33398 14C2.33398 7.55666 7.55733 2.33331 14.0007 2.33331C20.444 2.33331 25.6673 7.55666 25.6673 14Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ fontSize: "24px", fontWeight: "600", pt: "32px" }}>
                  Phong cách làm việc
                </Box>
              </Box>

              <Box
                sx={{
                  flex: "1 1 100%",
                  maxWidth: "100%",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{ position: "relative", display: "block", width: "100%" }}
                >
                  <img
                    src={giatrimachungtoicoitrongdoivoiungvien}
                    alt="Giá trị mà chúng tôi coi trọng đối với ứng viên"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "30%",
                      background:
                        "linear-gradient(to top, rgba(6, 84, 45, 0.85), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      bottom: "24px",
                      right: "46px",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      <a href="/gia-tri-chung-toi-coi-trong" rel="noreferrer">
                        Xem Thêm
                      </a>
                    </Box>
                    <Box>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0007 18.6666L18.6673 14M18.6673 14L14.0007 9.33331M18.6673 14H9.33398M25.6673 14C25.6673 20.4433 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4433 2.33398 14C2.33398 7.55666 7.55733 2.33331 14.0007 2.33331C20.444 2.33331 25.6673 7.55666 25.6673 14Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    pt: "32px",
                  }}
                >
                  Giá trị mà chúng tôi coi trọng đối với ứng viên
                </Box>
              </Box>
            </Box>
          </Box>
          <FooterDesktop />
        </Box>
      ) : (
        <Box
          sx={{
            ...styles.fontSize13,
            backgroundImage:
              "url(https://s3-alpha-sig.figma.com/img/d252/c397/067723efcb2cd830f09226dbdb793d2e?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dW0F2IIeJRi3CNKIK9YncClM7SqAkOVgDt7SHP-Qja2tlxNajDOcRTXtH0jujzp6b97yfXVCdoFrmHKf425JEUxeTJLfktsKfsyaujKXqWysDaTIEPYaja8Qi8ngMuek0t04VhDBGn7S5~HdVhqwIVE6n-3wjySxytOpQbWAIh4VnpOzhzUYTyNkS2qNtDidn9ofqNI7~XCY~0-2xNBOMnMQm4poQWgkuTSQXrbMhYuh0Wla59GpKkLcEZMoZkz5rDVAdRLIoaPO6Iz3lR6feYBvPSyNFCRXb0rvV6XoPXWd2y~EXW3BOXNJW-rnV0vEQtrnSrTHM6TkWVSAy2cz0Q__)",
            backgroundSize: "cover", // Kích thước ảnh nền
            backgroundPosition: "center", // Vị trí ảnh nền
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Logotop />
          <Navbardesktop />
          <Box sx={{ pt: "240px" }}>
            <Box
              sx={{
                p: "0 140px 96px 140px",
                textAlign: "center",
              }}
            >
              <Box sx={{ fontSize: "14px", pb: "20px", fontWeight: "600" }}>
                Tuyển dụng
              </Box>
              <Box sx={{ fontSize: "48px", fontWeight: "700", pb: "16px" }}>
                Công việc tại The Thanh Coffee
              </Box>
              <Box sx={{ fontSize: "20px", fontWeight: "400" }}>
                Chào mừng đến với kênh tuyển dụng của The Thanh Coffee
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                width: "70%",
                pb: "auto",
              }}
            >
              <a
                href="/cong-viec-tai-cua-hang"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "16px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                    flex: "1 0 45%",
                  }}
                >
                  Công việc tại cửa hàng
                </Box>
              </a>
              <a
                href="/cong-viec-tai-van-phong"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "16px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                    flex: "1 0 45%",
                  }}
                >
                  Công việc tại văn phòng
                </Box>
              </a>
              <a
                href="/san-xuat-va-phan-phoi"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "16px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                    flex: "1 0 45%",
                  }}
                >
                  Sản xuất và phân phối
                </Box>
              </a>
              <a
                href="/cong-viec-ban-thoi-gian"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "35px 54px",
                    m: "16px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    cursor: "pointer",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Đổ bóng
                    transition: "box-shadow 0.3s ease-in-out", // Hiệu ứng chuyển đổi đổ bóng
                    "&:hover": {
                      boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)", // Đổ bóng khi hover
                    },
                    flex: "1 0 45%",
                  }}
                >
                  Việc làm bán thời gian
                </Box>
              </a>
            </Box>
            <Box sx={{ textAlign: "center", pt: "236px" }}>
              <Box sx={{ fontSize: "14px", fontWeight: "600" }}>Tuyển dụng</Box>
              <Box sx={{ fontSize: "48px", fontWeight: "700", p: "16px 0" }}>
                Nội dung khác
              </Box>
              <Box sx={{ fontSize: "20px" }}>Xem thêm nội dung</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: "96px 140px 140px 140px",
                justifyContent: "center",
                gap: "32px",
                flexWrap: "wrap", // Ensure wrapping for smaller screens
              }}
            >
              <Box
                sx={{
                  maxWidth: "calc(50% - 16px)",
                  flex: "1 1 calc(50% - 16px)",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "block",
                    width: "100%",
                  }}
                >
                  <img
                    src={phongcachlamviec}
                    alt="Phong cách làm việc"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "30%",
                      background:
                        "linear-gradient(to top, rgba(6, 84, 45, 0.85), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      bottom: "24px",
                      right: "46px",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      <a href="/phong-cach-lam-viec" rel="noreferrer">
                        Xem Thêm
                      </a>
                    </Box>
                    <Box>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0007 18.6666L18.6673 14M18.6673 14L14.0007 9.33331M18.6673 14H9.33398M25.6673 14C25.6673 20.4433 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4433 2.33398 14C2.33398 7.55666 7.55733 2.33331 14.0007 2.33331C20.444 2.33331 25.6673 7.55666 25.6673 14Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ fontSize: "24px", fontWeight: "600", pt: "32px" }}>
                  Phong cách làm việc
                </Box>
              </Box>

              <Box
                sx={{
                  maxWidth: "calc(50% - 16px)",
                  flex: "1 1 calc(50% - 16px)",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{ position: "relative", display: "block", width: "100%" }}
                >
                  <img
                    src={giatrimachungtoicoitrongdoivoiungvien}
                    alt="Giá trị mà chúng tôi coi trọng đối với ứng viên"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "30%", // Gradient at the bottom of the image
                      background:
                        "linear-gradient(to top, rgba(6, 84, 45, 0.85), transparent)",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      display: "flex",
                      bottom: "24px",
                      right: "46px",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <Box
                      sx={{
                        color: "#FFFFFF",
                        fontSize: "18px",
                        fontWeight: "500",
                      }}
                    >
                      <a href="/gia-tri-chung-toi-coi-trong" rel="noreferrer">
                        Xem Thêm
                      </a>
                    </Box>
                    <Box>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.0007 18.6666L18.6673 14M18.6673 14L14.0007 9.33331M18.6673 14H9.33398M25.6673 14C25.6673 20.4433 20.444 25.6666 14.0007 25.6666C7.55733 25.6666 2.33398 20.4433 2.33398 14C2.33398 7.55666 7.55733 2.33331 14.0007 2.33331C20.444 2.33331 25.6673 7.55666 25.6673 14Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    pt: "32px",
                  }}
                >
                  Giá trị mà chúng tôi coi trọng đối với ứng viên
                </Box>
              </Box>
            </Box>
          </Box>
          <FooterDesktop />
        </Box>
      )}
    </Box>
  );
};

export default Recruitment;
