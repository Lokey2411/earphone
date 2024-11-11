import { Box, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import Logotop from "../../component/layout/LogoTop";
import Navbardesktop from "../../component/layout/NavBarDesktop";
import FooterDesktop from "../../component/layout/FooterDesktop";
import { styles } from "../../styles";
import loiichvadacquyen from "../../component/img/loiichvadacquyen.jpg";

const BenefitsandPrivileges = () => {
  const [dialogOpen, setDialogOpen] = React.useState(0);
  return (
    <Box
      sx={{
        ...styles.fontSize13,
        flexGrow: 1,
        minHeight: "100vh",
        textAlign: "left",
      }}
    >
      <Logotop />
      <Navbardesktop />
      <Box>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ ...styles.centerFlex, pt: "145px" }}>
            <img
              width={"100%"}
              height={"600px"}
              src={loiichvadacquyen}
              alt="anh coffee"
              style={{ objectFit: "cover" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "black",
              opacity: "0.5",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
              top: "241px",
              left: 0,
              right: 0,
              textAlign: "center",
              color: "white",
              padding: "0px 30px",
              "@media (max-width:900px)": {
                top: "200px",
              },
            }}
          >
            <Box
              sx={{
                color: "black",
                border: "1px solid white",
                p: "4px 12px",
                borderRadius: "16px",
                fontSize: "14px",
                fontWeight: "600",
                background: "white",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              Những lợi ích
            </Box>
            <Box
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                pt: "64px",
                pb: "20px",
                "@media (max-width:900px)": {
                  fontSize: "36px",
                  pt: "20px",
                },
              }}
            >
              Lợi ích & Đặc quyền
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                "@media (max-width:900px)": {
                  fontSize: "16px",
                },
              }}
            >
              Các lợi ích tốt nhất của chúng tôi rất lớn và có thể tùy chỉnh để
              chúng tôi có thể đầu tư một cách có ý nghĩa vào hành trình của bạn
              - tại nơi làm việc và hơn thế nữa
            </Box>
            <div id="quyen-loi-va-dang-ky">
              <Box
                sx={{
                  color: "#FFC107",
                  fontSize: "20px",
                  fontWeight: "700",
                  pt: "32px",
                  pb: "16px",
                  "@media (max-width:900px)": {
                    fontSize: "16px",
                  },
                }}
              >
                TÔI ĐANG TÌM:
              </Box>
            </div>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                width: "70%",
                pb: "auto",
                justifyContent: "center",
                alignItems: "center",
                "@media (max-width:900px)": {
                  display: "table",
                  width: "80%",
                },
              }}
            >
              <a
                href="#quyen-loi-va-dang-ky"
                rel="noopener noreferrer"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "16px 18px",
                    m: "8px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    borderRadius: "8px",
                    color: "black",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#dad8d4", // Đổ bóng khi hover
                    },
                    flex: "1 0 40%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "@media (max-width:900px)": {
                      fontSize: "14px",
                      p: "5px 10px",
                    },
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V11H14C14.2833 11 14.5208 10.9042 14.7125 10.7125C14.9042 10.5208 15 10.2833 15 10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9H11V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V9H6C5.71667 9 5.47917 9.09583 5.2875 9.2875C5.09583 9.47917 5 9.71667 5 10C5 10.2833 5.09583 10.5208 5.2875 10.7125C5.47917 10.9042 5.71667 11 6 11H9ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="black"
                    />
                  </svg>
                  <Box>Điều kiện Quyền lợi và Đăng ký</Box>
                </Box>
              </a>
              <a
                href="#suc-khoe-va-cuoc-song"
                rel="noopener noreferrer"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "16px 18px",
                    m: "8px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    borderRadius: "8px",
                    color: "black",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#dad8d4", // Đổ bóng khi hover
                    },
                    flex: "1 0 40%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "@media (max-width:900px)": {
                      fontSize: "14px",
                      p: "5px 10px",
                    },
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V11H14C14.2833 11 14.5208 10.9042 14.7125 10.7125C14.9042 10.5208 15 10.2833 15 10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9H11V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V9H6C5.71667 9 5.47917 9.09583 5.2875 9.2875C5.09583 9.47917 5 9.71667 5 10C5 10.2833 5.09583 10.5208 5.2875 10.7125C5.47917 10.9042 5.71667 11 6 11H9ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="black"
                    />
                  </svg>
                  <Box>Lợi ích sức khỏe & cuộc sống</Box>
                </Box>
              </a>
              <a
                href="#dac-quyen"
                rel="noopener noreferrer"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "16px 18px",
                    m: "8px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    borderRadius: "8px",
                    color: "black",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#dad8d4", // Đổ bóng khi hover
                    },
                    flex: "1 0 40%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "@media (max-width:900px)": {
                      fontSize: "14px",
                      p: "5px 10px",
                    },
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V11H14C14.2833 11 14.5208 10.9042 14.7125 10.7125C14.9042 10.5208 15 10.2833 15 10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9H11V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V9H6C5.71667 9 5.47917 9.09583 5.2875 9.2875C5.09583 9.47917 5 9.71667 5 10C5 10.2833 5.09583 10.5208 5.2875 10.7125C5.47917 10.9042 5.71667 11 6 11H9ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="black"
                    />
                  </svg>
                  <Box>Đặc quyền dành cho cộng sự</Box>
                </Box>
              </a>
              <a
                href="#qua-tang"
                rel="noopener noreferrer"
                style={{ width: "50%", textDecoration: "none" }}
              >
                <Box
                  sx={{
                    fontSize: "20px",
                    fontWeight: "700",
                    boxSizing: "border-box",
                    p: "16px 18px",
                    m: "8px",
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid black",
                    textDecoration: "none",
                    borderRadius: "8px",
                    color: "black",
                    cursor: "pointer",
                    "&:hover": {
                      background: "#dad8d4", // Đổ bóng khi hover
                    },
                    flex: "1 0 40%",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    "@media (max-width:900px)": {
                      fontSize: "14px",
                      p: "5px 10px",
                    },
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11V14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14V11H14C14.2833 11 14.5208 10.9042 14.7125 10.7125C14.9042 10.5208 15 10.2833 15 10C15 9.71667 14.9042 9.47917 14.7125 9.2875C14.5208 9.09583 14.2833 9 14 9H11V6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6V9H6C5.71667 9 5.47917 9.09583 5.2875 9.2875C5.09583 9.47917 5 9.71667 5 10C5 10.2833 5.09583 10.5208 5.2875 10.7125C5.47917 10.9042 5.71667 11 6 11H9ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                      fill="black"
                    />
                  </svg>
                  <Box>Giảm giá vật phẩm và Quà tặng</Box>
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: "128px 172px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            fontSize: "18px",
            "@media (max-width:900px)": {
              display: "table",
              p: "20px",
            },
          }}
        >
          <Box
            sx={{
              rowGap: "20px",
              width: "33%",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "48px",
                color: "black",
                fontWeight: "700",
                "@media (max-width:900px)": {
                  fontSize: "32px",
                },
              }}
            >
              Điều kiện Quyền lợi và Đăng ký
            </Box>
            <Box sx={{ pt: "20px", pb: "32px" }}>
              Được xây dựng nhằm mục đích làm cho ngày trở nên đẹp hơn một chút
              theo nhiều cách
            </Box>
            <Box
              sx={{
                p: "8px 24px",
                background: "black",
                border: "1px solid black",
                borderRadius: "20px",
                display: "inline-block",
                width: "fit-content",
                color: "white",
                cursor: "pointer",
                "@media (max-width:900px)": {
                  mb: "20px",
                },
              }}
              onClick={() => setDialogOpen(dialogOpen === 1 ? 0 : 1)}
            >
              Tìm hiểu thêm
            </Box>
            <Dialog
              open={dialogOpen === 1} // Correct usage for opening the dialog
              onClose={() => setDialogOpen(0)} // Optionally handle dialog close
            >
              <DialogContent
                sx={{
                  span: {
                    fontSize: "16px !important",
                    fontFamily: "Inter !important",
                  },
                  li: {
                    fontSize: "16px !important",
                    fontFamily: "Inter !important",
                  },
                  ul: {
                    fontSize: "16px !important",
                    fontFamily: "Inter !important",
                    pl: "40px",
                  },
                  p: {
                    fontSize: "16px !important",
                    fontFamily: "Inter !important",
                  },
                }}
                dangerouslySetInnerHTML={{
                  __html: `<p><strong>Đi&ecirc;̀u kiện Quy&ecirc;̀n lợi và Đăng ký </strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong><em>Đủ đi&ecirc;̀u kiện ban đ&acirc;̀u: </em></strong><span style="font-weight: 400;">Sau khi thuê, tính đủ đi&ecirc;̀u kiện được thi&ecirc;́t lập khi cộng sự bán lẻ theo giờ đã được thanh toán t&ocirc;́i thi&ecirc;̉u 220 giờ trong hai tháng dương lịch liên ti&ecirc;́p. Ngày bắt đ&acirc;̀u nhận trợ c&acirc;́p sẽ là ngày 1 của tháng sau khi cộng sự đủ đi&ecirc;̀u kiện (ngày 1 của tháng thứ hai sau khi thi&ecirc;́t lập đủ đi&ecirc;̀u kiện). Các cộng sự quản lý bán lẻ, bán lẻ và C&aacute;c cấp quản l&yacute; đi&ecirc;̀u hành được trả lương sẽ đủ đi&ecirc;̀u kiện sau khi hoàn thành 90 ngày phục vụ liên tục.</span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;">Sau khi đáp ứng yêu c&acirc;̀u đủ đi&ecirc;̀u kiện ban đ&acirc;̀u, một email sẽ được gửi đ&ecirc;́n cộng sự đ&ecirc;̉ thông báo rằng cửa s&ocirc;̉ đăng ký đang mở và hoàn t&acirc;́t đăng ký của họ đ&ecirc;̉ bắt đ&acirc;̀u bảo hi&ecirc;̉m. Cộng sự phải đăng ký trực tuy&ecirc;́n tại website C&ocirc;ng ty cung cấp với 31 ngày k&ecirc;̉ từ ngày bắt đ&acirc;̀u hoặc trước thời hạn được nêui. Một thời hạn bị bỏ lỡ sẽ d&acirc;̃n đ&ecirc;́n không ghi danh và không nhận được quyền lợi. Cơ hội ghi danh ti&ecirc;́p theo của cộng sự sẽ là trong thời gian Đăng ký lại hàng năm cho một ngày có hiệu lực là ngày 22 tháng 9.</span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong><em>Duy trì tính đủ đi&ecirc;̀u kiện: </em></strong><span style="font-weight: 400;">Đ&ecirc;̉ duy trì đủ đi&ecirc;̀u kiện, cộng sự bán lẻ theo giờ phải được thanh toán t&ocirc;́i thi&ecirc;̉u 240 giờ m&ocirc;̃i quý theo lịch. N&ecirc;́u cộng sự đáp ứng các tiêu chí đủ đi&ecirc;̀u kiện nhận trợ c&acirc;́p liên tục, thì tính đủ đi&ecirc;̀u kiện v&acirc;̃n còn nguyên vẹn và phạm vi bảo hi&ecirc;̉m không bị gián đoạn. Các cộng sự được nghỉ phép đã được phê duyệt ngoài Nghỉ phép cá nhân sẽ được mi&ecirc;̃n.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;">Tính đủ đi&ecirc;̀u kiện được xác định bởi s&ocirc;́ giờ được báo cáo trên phi&ecirc;́u lương cu&ocirc;́i cùng bạn nhận được trong quý dương lịch. Ngày này thường là trước khi k&ecirc;́t thúc quý dương lịch. Vào cu&ocirc;́i m&ocirc;̃i quý dương lịch, The Thanh Coffee ti&ecirc;́n hành ki&ecirc;̉m toán đ&ecirc;̉ xác định tính đủ đi&ecirc;̀u kiện liên tục của m&ocirc;̃i cộng sự dựa trên s&ocirc;́ giờ được thanh toán cho đ&ecirc;́n l&acirc;̀n thanh toán cu&ocirc;́i cùng nhận được trong quý dương lịch đó. Đ&ecirc;̉ giám sát hiệu quả việc trả lương và duy trì quy&ecirc;̀n lợi đủ đi&ecirc;̀u kiện, các cộng sự có th&ecirc;̉ truy cập Lịch Giờ đủ đi&ecirc;̀u kiện hưởng lợi ích trên Trung tâm cộng sự.</span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong><em>M&acirc;́t tính đủ đi&ecirc;̀u kiện: </em></strong><span style="font-weight: 400;">N&ecirc;́u cộng sự bán lẻ theo giờ không th&ecirc;̉ duy trì s&ocirc;́ giờ c&acirc;̀n thi&ecirc;́t trong một quý, tính đủ đi&ecirc;̀u kiện nhận trợ c&acirc;́p sẽ k&ecirc;́t thúc và phạm vi bảo hi&ecirc;̉m sẽ bị tạm ngưng trong quý dương lịch ti&ecirc;́p theo. Các khoản kh&acirc;́u trừ ti&ecirc;̀n lương sẽ k&ecirc;́t thúc vào cu&ocirc;́i tháng mà cuộc ki&ecirc;̉m toán được thực hiện.&nbsp;</span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong><em>Thi&ecirc;́t lập lại tính đủ đi&ecirc;̀u kiện: </em></strong><span style="font-weight: 400;">Cộng sự bán lẻ theo giờ có th&ecirc;̉ thi&ecirc;́t lập lại tính đủ đi&ecirc;̀u kiện và tự động khôi phục bảo hi&ecirc;̉m n&ecirc;́u cộng sự được thanh toán ít nh&acirc;́t 240 giờ trong b&acirc;́t kỳ quý dương lịch nào ti&ecirc;́p theo. N&ecirc;́u phúc lợi bị đình chỉ hoặc phục h&ocirc;̀i vì b&acirc;́t kỳ lý do gì, cộng sự sẽ nhận được thông báo qua thư từ Trung tâm phúc lợi The Thanh Coffee. N&ecirc;́u tính đủ đi&ecirc;̀u kiện được thi&ecirc;́t lập lại, bảo hi&ecirc;̉m sẽ bắt đ&acirc;̀u lại vào ngày 1 của tháng thứ hai của quý dương lịch mới. Ví dụ: một cộng sự được trả lương ít nh&acirc;́t 240 giờ từ ngày 1 tháng 1 đ&ecirc;́n ngày 31 tháng 3 sẽ được phục h&ocirc;̀i vào ngày 1 tháng Năm. Tùy thuộc vào thời đi&ecirc;̉m cộng sự thi&ecirc;́t lập lại tính đủ đi&ecirc;̀u kiện, cộng sự có th&ecirc;̉ được yêu c&acirc;̀u đăng ký lại cho bảo hi&ecirc;̉m mong mu&ocirc;́n.</span></p>`,
                }}
              ></DialogContent>
            </Dialog>
          </Box>
          <Box
            sx={{
              pb: "20px",
              width: "33%",
              lineHeight: "28px",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "14px" }}>
              <Box>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                    fill="black"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Đủ điều kiện ban đầu:</strong> Sau khi thuê, tính đủ
                điều kiện được thiết lập khi cộng sự bán lẻ theo giờ đã được
                thanh toán tối thiểu 220 giờ trong hai tháng dương lịch liên
                tiếp. Ngày bắt đầu nhận trợ cấp sẽ là ngày 1 của tháng sau khi
                cộng sự đủ điều kiện (ngày 1 của tháng thứ hai sau khi thiết lập
                đủ điều kiện). Các cộng sự quản lý bán lẻ, bán lẻ và Các cấp
                quản lý điều hành được trả lương sẽ đủ điều kiện sau khi hoàn
                thành 90 ngày phục vụ liên tục.
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "14px", p: "18px 0" }}>
              <Box>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                    fill="black"
                  />
                </svg>
              </Box>
              <div id="suc-khoe-va-cuoc-song">
                <Box>
                  <strong>Duy trì tính đủ điều kiện:</strong> Để duy trì đủ điều
                  kiện, cộng sự bán lẻ theo giờ phải được thanh toán tối thiểu
                  240 giờ mỗi quý theo lịch. Nếu cộng sự đáp ứng các tiêu chí đủ
                  điều kiện nhận trợ cấp liên tục, thì tính đủ điều kiện vẫn còn
                  nguyên vẹn và phạm vi bảo hiểm không bị gián đoạn. Các cộng sự
                  được nghỉ phép đã được phê duyệt ngoài Nghỉ phép cá nhân sẽ
                  được miễn.
                </Box>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              width: "33%",
              lineHeight: "28px",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "14px", pb: "18px" }}>
              <Box>
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2L7 13L2 8"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Mất tính đủ điều kiện:</strong> Nếu cộng sự bán lẻ theo
                giờ không thể duy trì số giờ cần thiết trong một quý, tính đủ
                điều kiện nhận trợ cấp sẽ kết thúc và phạm vi bảo hiểm sẽ bị tạm
                ngưng trong quý dương lịch tiếp theo. Các khoản khấu trừ tiền
                lương sẽ kết thúc vào cuối tháng mà cuộc kiểm toán được thực
                hiện.
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "14px" }}>
              <Box>
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2L7 13L2 8"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Thiết lập lại tính đủ điều kiện:</strong> Cộng sự bán lẻ
                theo giờ có thể thiết lập lại tính đủ điều kiện và tự động khôi
                phục bảo hiểm nếu cộng sự được thanh toán ít nhất 240 giờ trong
                bất kỳ quý dương lịch nào tiếp theo. Nếu phúc lợi bị đình chỉ
                hoặc phục hồi vì bất kỳ lý do gì, cộng sự sẽ nhận được thông báo
                qua thư từ Trung tâm phúc lợi The Thanh Coffee. Nếu tính đủ điều
                kiện được thiết lập lại, bảo hiểm sẽ bắt đầu lại vào ngày 1 của
                tháng thứ hai của quý dương lịch mới. Ví dụ: một cộng sự được
                trả lương ít nhất 240 giờ từ ngày 1 tháng 1 đến ngày 31 tháng 3
                sẽ được phục hồi vào ngày 1 tháng Năm. Tùy thuộc vào thời điểm
                cộng sự thiết lập lại tính đủ điều kiện, cộng sự có thể được yêu
                cầu đăng ký lại cho bảo hiểm mong muốn.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#999999",
            p: "96px 140px",
            "@media (max-width:900px)": {
              p: "20px",
            },
          }}
        >
          <Box
            sx={{
              p: "32px",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              fontSize: "18px",
              background: "#dad8d4",
              borderRadius: "16px",
              alignItems: "center",
              "@media (max-width:900px)": {
                display: "table",
              },
            }}
          >
            <Box
              sx={{
                rowGap: "20px",
                width: "50%",
                "@media (max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <Box
                sx={{
                  fontSize: "48px",
                  color: "black",
                  fontWeight: "700",
                  "@media (max-width:900px)": {
                    fontSize: "32px",
                  },
                }}
              >
                Lợi ích sức khỏe & cuộc sống
              </Box>
              <Box sx={{ pt: "20px", pb: "32px", lineHeight: "28px" }}>
                Chăm sóc bản thân và gia đình là nền tảng cho con người chúng ta
              </Box>
              <div id="dac-quyen">
                <Box
                  sx={{
                    p: "8px 24px",
                    background: "black",
                    border: "1px solid black",
                    borderRadius: "20px",
                    display: "inline-block",
                    width: "fit-content",
                    color: "white",
                    cursor: "pointer",
                    "@media (max-width:900px)": {
                      mb: "20px",
                    },
                  }}
                  onClick={() => setDialogOpen(dialogOpen === 2 ? 0 : 2)}
                >
                  Tìm hiểu thêm
                </Box>
                <Dialog
                  open={dialogOpen === 2} // Correct usage for opening the dialog
                  onClose={() => setDialogOpen(0)} // Optionally handle dialog close
                >
                  <DialogContent
                    sx={{
                      span: {
                        fontSize: "16px !important",
                        fontFamily: "Inter !important",
                      },
                      li: {
                        fontSize: "16px !important",
                        fontFamily: "Inter !important",
                      },
                      ul: {
                        fontSize: "16px !important",
                        fontFamily: "Inter !important",
                        pl: "40px",
                      },
                      p: {
                        fontSize: "16px !important",
                        fontFamily: "Inter !important",
                      },
                    }}
                    dangerouslySetInnerHTML={{
                      __html: `<p><strong>Lợi ích sức khỏe &amp; cuộc s&ocirc;́ng</strong></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong>Bảo hi&ecirc;̉m nhân thọ</strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;">Bảo hi&ecirc;̉m nhân thọ cơ bản của cộng sự được cung c&acirc;́p cho các cộng sự khi đủ đi&ecirc;̀u kiện hưởng quy&ecirc;̀n lợi. Cộng sự có th&ecirc;̉ chọn mua bảo hi&ecirc;̉m nhân thọ tùy chọn cho bản thân hoặc vợ / ch&ocirc;̀ng đủ đi&ecirc;̀u kiện.</span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;">Đ&ocirc;́i với bảo hi&ecirc;̉m nhân thọ tùy chọncác cộng sự có th&ecirc;̉ được yêu c&acirc;̀u cung c&acirc;́p bằng chứng y t&ecirc;́ tùy thuộc vào mức độ bảo hi&ecirc;̉m được chọn.&nbsp;</span><strong>&nbsp;</strong></p>`,
                    }}
                  ></DialogContent>
                </Dialog>
              </div>
            </Box>
            <Box
              sx={{
                pb: "20px",
                lineHeight: "28px",
                width: "50%",
                "@media (max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <Box sx={{ display: "flex", gap: "14px" }}>
                <Box>
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2L7 13L2 8"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box>
                  <strong>Bảo hiểm nhân thọ:</strong> Bảo hiểm nhân thọ cơ bản
                  của cộng sự được cung cấp cho các cộng sự khi đủ điều kiện
                  hưởng quyền lợi. Cộng sự có thể chọn mua bảo hiểm nhân thọ tùy
                  chọn cho bản thân hoặc vợ / chồng đủ điều kiện. Đối với bảo
                  hiểm nhân thọ tùy chọncác cộng sự có thể được yêu cầu cung cấp
                  bằng chứng y tế tùy thuộc vào mức độ bảo hiểm được chọn.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: "128px 172px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            fontSize: "18px",
            "@media (max-width:900px)": {
              p: "20px",
              display: "table",
            },
          }}
        >
          <Box
            sx={{
              width: "33%",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "48px",
                color: "black",
                fontWeight: "700",
                "@media (max-width:900px)": {
                  fontSize: "32px",
                },
              }}
            >
              Đặc quyền dành cho cộng sự
            </Box>
            <Box sx={{ pt: "20px", pb: "32px", lineHeight: "28px" }}>
              Những chương trình và ưu đãi dành riêng cho các cộng sự
            </Box>
            <div id="qua-tang">
              <Box
                sx={{
                  p: "8px 24px",
                  background: "black",
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "inline-block",
                  width: "fit-content",
                  color: "white",
                  cursor: "pointer",
                  "@media (max-width:900px)": {
                    mb: "20px",
                  },
                }}
                onClick={() => setDialogOpen(dialogOpen === 3 ? 0 : 3)}
              >
                Tìm hiểu thêm
              </Box>
              <Dialog
                open={dialogOpen === 3} // Correct usage for opening the dialog
                onClose={() => setDialogOpen(0)} // Optionally handle dialog close
              >
                <DialogContent
                  sx={{
                    span: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                    },
                    li: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                    },
                    ul: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                      pl: "40px",
                    },
                    p: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<p><strong>Đặc quy&ecirc;̀n dành cho cộng sự</strong></p>
<p><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong></p>
<p><strong>Chương trình k&ecirc;́t n&ocirc;́i cộng sự</strong></p>
<p><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong></p>
<p><strong>Chương trình K&ecirc;́t n&ocirc;́i Cộng sự The Thanh Coffee liên k&ecirc;́t các nhóm cộng sự có chung sở thích, giúp tạo ra một môi trường làm việc h&ocirc;̃ trợ làm việc theo nhóm, vui vẻ và t&acirc;̀m quan trọng của một cuộc s&ocirc;́ng cân bằng. Với t&ocirc;́i thi&ecirc;̉u ba cộng sự, các cộng sự có th&ecirc;̉ thành lập câu lạc bộ hoặc đội của riêng họ và có th&ecirc;̉ nhận được trợ c&acirc;́p lên đ&ecirc;́n 50% cho các chi phí như phí giải đ&acirc;́u và phí vào cửa, đ&ocirc;̀ng phục và thi&ecirc;́t bị, n&ecirc;́u có. Truy cập hoặc Trung tâm cộng sự đ&ecirc;̉ bi&ecirc;́t thêm thông tin.</strong></p>
<p><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong>Chương trình công nhận cộng sự</strong></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;">Thành công của The Thanh Coffee phản ánh ch&acirc;́t lượng, trí tưởng tượng và sáng ki&ecirc;́n của các cộng sự của chúng tôi. Đ&ecirc;̉ ghi nhận những đóng góp của đ&ocirc;́i tác, chúng tôi đã phát tri&ecirc;̉n Chương trình công nhận đ&ocirc;́i tác của The Thanh Coffee. Trong chương trình, có nhi&ecirc;̀u cách đ&ecirc;̉ ghi nhận sự ghi nhận của đ&ocirc;́i tác ở mọi c&acirc;́p độ thành tích. </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><strong>Chương trình giảm giá dành cho cộng sự</strong></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;">Thông qua Công việc Và Sức Khoẻ The Thanhs, The Thanh Coffee cung c&acirc;́p cho các cộng sự quy&ecirc;̀n truy cập vào hơn 100 đặc quy&ecirc;̀n và giảm giá cho các nhu y&ecirc;́u ph&acirc;̉m hàng ngày và các sự kiện quan trọng trong cuộc s&ocirc;́ng như bảo hi&ecirc;̉m nhà và ô tô giảm giá, thành viên câu lạc bộ th&ecirc;̉ dục và hơn th&ecirc;́ nữa.</span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><strong>Thẻ quà tặng kỹ thuật s&ocirc;́: </strong><span style="font-weight: 400;">Nhận mã kỹ thuật s&ocirc;́ ngay lập tức vào email hoặc ví di động đ&ecirc;̉ sử dụng trong các cửa</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
<li style="font-weight: 400;" aria-level="1"><strong>Hoàn ti&ecirc;̀n trực tuy&ecirc;́n: </strong><span style="font-weight: 400;">Chọn từ hàng trăm nhà bán lẻ và ki&ecirc;́m lại ph&acirc;̀n trăm mua hàng vào ví Công việc Và Sức Khoẻ The Thanh. Sau khi hoàn ti&ecirc;̀n từ 100,000đ trở lên, các cộng sự có th&ecirc;̉ chuy&ecirc;̉n ti&ecirc;̀n hoàn lại vào tài khoản Ng&acirc;n h&agrave;ng của họ.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
<li style="font-weight: 400;" aria-level="1"><strong>Ưu đãi tại cửa hàng và độc quy&ecirc;̀n: </strong><span style="font-weight: 400;">Xu&acirc;́t trình Ứng dụng Công việc Và Sức Khoẻ The Thanh khi thanh toán đ&ecirc;̉ được giảm giá khi mua hàng tại cửa hàng. </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
</ul>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<p><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"><br /></span><strong>Đ&ocirc;̀ u&ocirc;́ng mi&ecirc;̃n phí trong khi làm việc</strong><strong><br /></strong><strong> </strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Cộng sự cửa hàng có th&ecirc;̉ uống &mdash; mi&ecirc;̃n phí &mdash; b&acirc;́t kỳ 1 cà phê, trà hoặc đ&ocirc;̀ u&ocirc;́ng có sữa nào trong khi nghỉ giải lao trong ca làm việc của họ hoặc trong 30 phút trước hoặc sau ca làm việc theo lịch trình của cộng sự.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Đ&ocirc;̀ u&ocirc;́ng pha sẵn, bao g&ocirc;̀m nước trái cây và nước đóng chai, được loại trừ khỏi các lợi ích đ&ocirc;̀ u&ocirc;́ng của cộng sự. Các mặt hàng này phải được mua bằng cách sử dụng chi&ecirc;́t kh&acirc;́u 30% của cộng sự.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Quy&ecirc;̀n lợi đ&ocirc;̀ u&ocirc;́ng của cộng sự chỉ dành cho tiêu dùng cá nhân của cộng sự; Một cộng sự không được cho đi đ&ocirc;̀ u&ocirc;́ng cộng sự của họ cho b&acirc;́t kỳ cá nhân nào khác. Đ&ocirc;̀ u&ocirc;́ng của cộng sự có th&ecirc;̉ không được tiêu thụ trong khi cộng sự đang thực sự làm việc, nhưng chỉ trong khi cộng sự đang nghỉ ngơi hoặc nghỉ ăn. Ngoài ra, cộng sự được yêu c&acirc;̀u x&ecirc;́p hàng chờ đợi với các khách hàng khác đ&ecirc;̉ nhận đ&ocirc;̀ u&ocirc;́ng của cộng sự của họ và một cộng sự khác nên xử lý giao dịch trên s&ocirc;̉ đăng ký.</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"><br /></span><strong><em>Đi&ecirc;̀u kiện hưởng đ&ocirc;̀ u&ocirc;́ng mi&ecirc;̃n phí bị giới hạn đ&ocirc;́i với các cộng sự khác khi làm việc trong cửa hàng bán lẻ: </em></strong><em><span style="font-weight: 400;">Các nhà quản lý khu vực do công ty đi&ecirc;̀u hành đủ đi&ecirc;̀u kiện nhận đ&ocirc;̀ u&ocirc;́ng mi&ecirc;̃n phí khi làm việc trong cửa hàng bán lẻ do công ty đi&ecirc;̀u hành.</span></em></p>`,
                  }}
                ></DialogContent>
              </Dialog>
            </div>
          </Box>
          <Box
            sx={{
              pb: "20px",
              lineHeight: "28px",
              width: "33%",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "14px" }}>
              <Box>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                    fill="black"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Chương trình kết nối cộng sự:</strong> Chương trình Kết
                nối Cộng sự The Thanh Coffee liên kết các nhóm cộng sự có chung
                sở thích, giúp tạo ra một môi trường làm việc hỗ trợ làm việc
                theo nhóm, vui vẻ và tầm quan trọng của một cuộc sống cân bằng.
                Với tối thiểu ba cộng sự, các cộng sự có thể thành lập câu lạc
                bộ hoặc đội của riêng họ và có thể nhận được trợ cấp lên đến 50%
                cho các chi phí như phí giải đấu và phí vào cửa, đồng phục và
                thiết bị, nếu có. Truy cập hoặc Trung tâm cộng sự để biết thêm
                thông tin.
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "14px", p: "18px 0" }}>
              <Box>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                    fill="black"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Chương trình công nhận cộng sự:</strong> Thành công của
                The Thanh Coffee phản ánh chất lượng, trí tưởng tượng và sáng
                kiến của các cộng sự của chúng tôi. Để ghi nhận những đóng góp
                của đối tác, chúng tôi đã phát triển Chương trình công nhận đối
                tác của The Thanh Coffee. Trong chương trình, có nhiều cách để
                ghi nhận sự ghi nhận của đối tác ở mọi cấp độ thành tích.{" "}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              lineHeight: "28px",
              width: "33%",
              "@media (max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: "14px" }}>
              <Box>
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2L7 13L2 8"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Chương trình giảm giá dành cho cộng sự:</strong> Thông
                qua Công việc Và Sức Khoẻ The Thanhs, The Thanh Coffee cung cấp
                cho các cộng sự quyền truy cập vào hơn 100 đặc quyền và giảm giá
                cho các nhu yếu phẩm hàng ngày và các sự kiện quan trọng trong
                cuộc sống như bảo hiểm nhà và ô tô giảm giá, thành viên câu lạc
                bộ thể dục và hơn thế nữa.
              </Box>
            </Box>
            <Box sx={{ display: "flex", gap: "14px", p: "18px 0" }}>
              <Box>
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2L7 13L2 8"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box>
                <strong>Đồ uống miễn phí trong khi làm việc:</strong> Cộng sự
                cửa hàng có thể uống — miễn phí — bất kỳ 1 cà phê, trà hoặc đồ
                uống có sữa nào trong khi nghỉ giải lao trong ca làm việc của họ
                hoặc trong 30 phút trước hoặc sau ca làm việc theo lịch trình
                của cộng sự.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#999999",
            p: "96px 140px",
            "@media (max-width:900px)": {
              p: "20px",
            },
          }}
        >
          <Box
            sx={{
              p: "32px",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              fontSize: "18px",
              background: "#dad8d4",
              borderRadius: "16px",
              alignItems: "center",
              "@media (max-width:900px)": {
                p: "20px",
                display: "table",
              },
            }}
          >
            <Box sx={{ rowGap: "20px" }}>
              <Box
                sx={{
                  fontSize: "48px",
                  color: "black",
                  fontWeight: "700",
                  "@media (max-width:900px)": {
                    fontSize: "32px",
                  },
                }}
              >
                Giảm giá vật phẩm và Quà tặng
              </Box>
              <Box sx={{ pt: "20px", pb: "32px", lineHeight: "28px" }}>
                Tất cả các cộng sự của The Thanh Coffee có thể mua đồ uống và
                hàng hóa của The Thanh Coffee với giá chiết khấu tại các cửa
                hàng The Thanh Coffee của công ty sở hữu và điều hành. Ngoài ra,
                lợi ích "đánh dấu" có sẵn như một phương tiện để các cộng sự nếm
                thử và thưởng thức cà phê và trà The Thanh Coffee.
              </Box>
              <Box
                sx={{
                  p: "8px 24px",
                  background: "black",
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "inline-block",
                  width: "fit-content",
                  color: "white",
                  cursor: "pointer",
                  "@media (max-width:900px)": {
                    mb: "20px",
                  },
                }}
                onClick={() => setDialogOpen(dialogOpen === 4 ? 0 : 4)}
              >
                Tìm hiểu thêm
              </Box>
              <Dialog
                open={dialogOpen === 4} // Correct usage for opening the dialog
                onClose={() => setDialogOpen(0)} // Optionally handle dialog close
              >
                <DialogContent
                  sx={{
                    span: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                    },
                    li: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                    },
                    ul: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                      pl: "40px",
                    },
                    p: {
                      fontSize: "16px !important",
                      fontFamily: "Inter !important",
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: `<p><strong>Giảm giá vật ph&acirc;̉m và Quà tặng</strong></p>
<ul>
<li><span style="font-weight: 400;">T&acirc;́t cả các cộng sự của The Thanh Coffee có th&ecirc;̉ mua đ&ocirc;̀ u&ocirc;́ng và hàng hóa của The Thanh Coffee với giá chi&ecirc;́t kh&acirc;́u tại các cửa hàng The Thanh Coffee của công ty sở hữu và đi&ecirc;̀u hành. Ngoài ra, lợi ích "đánh d&acirc;́u" có sẵn như một phương tiện đ&ecirc;̉ các cộng sự n&ecirc;́m thử và thưởng thức cà phê và trà The Thanh Coffee. </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
</ul>
<p><strong>Tặng ph&acirc;̉m cộng sự</strong></p>
<p><strong> </strong><span style="font-weight: 400;">Lợi ích "</span><strong>Tặng ph&acirc;̉m</strong><span style="font-weight: 400;">" cộng sự có sẵn tại các cửa hàng bán lẻ do công ty The Thanh Coffee đi&ecirc;̀u hành như một phương tiện đ&ecirc;̉ các cộng sự l&acirc;́y m&acirc;̃u và thưởng thức cà phê và trà The Thanh Coffee&copy;.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">"</span><strong>Tặng ph&acirc;̉m</strong><span style="font-weight: 400;">" là thuật ngữ được sử dụng cho một mặt hàng cà phê hoặc trà mà các cộng sự có th&ecirc;̉ nhận được mi&ecirc;̃n phí định kỳ theo The Thanh Coffee quy định. Mục đích của lợi ích này là cung c&acirc;́p cho các cộng sự cơ hội khám phá nhi&ecirc;̀u loại cà phê và trà được cung c&acirc;́p, cũng như giới thiệu các sản ph&acirc;̉m này cho bạn bè và gia đình. Đ&ecirc;̉ bi&ecirc;́t danh sách các sản ph&acirc;̉m hiện tại đủ đi&ecirc;̀u kiện n</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;">hận "Tặng phẩm", vui lòng truy cập Trung tâm cộng sự hoặc gửi email cho thedoitac@thanhcoffee.com.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Các cộng sự được khuy&ecirc;́n khích tận dụng lợi ích này m&ocirc;̃i tu&acirc;̀n. Với mục đích của lợi ích này, một "tu&acirc;̀n" là từ thứ Hai đ&ecirc;́n Chủ nhật. N&ecirc;́u một tu&acirc;̀n bị bỏ lỡ, không có cơ hội đ&ecirc;̉ bù đắp cho nó trong những tu&acirc;̀n tới. Bán lại nhãn hiệu cộng sự hoặc sử dụng nó cho lợi nhuận cá nhân đ&ecirc;̀u bị c&acirc;́m.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
</ul>
<p><strong>Giảm giá cho cộng sự (t&acirc;́t cả các địa đi&ecirc;̉m do công ty đi&ecirc;̀u hành)</strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Các cộng sự đủ đi&ecirc;̀u kiện của The Thanh Coffee có th&ecirc;̉ được giảm giá 30% trên giá mua đ&ocirc;̀ u&ocirc;́ng (đ&ocirc;̀ u&ocirc;́ng espresso và đ&ocirc;̀ u&ocirc;́ng sẵn), các mặt hàng thực ph&acirc;̉m và hàng hóa (bao g&ocirc;̀m cả các mặt hàng giảm giá) được mua trong các cửa hàng bán lẻ The Thanh Coffee do công ty đi&ecirc;̀u hành.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Các mặt hàng có th&ecirc;̉ không được mua với chi&ecirc;́t kh&acirc;́u của cộng sự bao g&ocirc;̀m, nhưng không giới hạn, Thẻ The Thanh Coffee, sách phi&ecirc;́u giảm giá và báo.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Giảm giá hàng hóa chỉ dành cho cộng sự. Cộng sự có th&ecirc;̉ mua các mặt hàng đ&ecirc;̉ sử dụng cá nhân hoặc đ&ecirc;̉ tặng làm quà tặng. Cộng sự không được sử dụng chi&ecirc;́t kh&acirc;́u của cộng sự đ&ecirc;̉ mua các mặt hàng cho người khác &mdash; chẳng hạn như thành viên gia đình, bạn bè hoặc người quen &mdash; và sau đó được hoàn trả chi phí. Bán lại các mặt hàng đã mua với chi&ecirc;́t kh&acirc;́u của cộng sự hoặc sử dụng chi&ecirc;́t kh&acirc;́u cho lợi nhuận cá nhân đ&ecirc;̀u bị c&acirc;́m.&nbsp;</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
</ul>
<p><strong>Áp dụng một s&ocirc;́ hạn ch&ecirc;́</strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<ul>
<li><span style="font-weight: 400;">Tặng ph&acirc;̉m cộng sự và giảm giá hàng hóa tại cửa hàng không có sẵn tại các địa đi&ecirc;̉m cửa hàng. Việc giảm giá hoặc giảm giá cũng có th&ecirc;̉ bị giới hạn tại một s&ocirc;́ cửa hàng khái niệm nh&acirc;́t định.</span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
<li><span style="font-weight: 400;">Giảm giá hàng tu&acirc;̀n và giảm giá hàng hóa chỉ dành cho các cộng sự thường xuyên, tạm thời và theo mùa trong bảng lương The Thanh Coffee. Nó không có sẵn cho các nhà cung c&acirc;́p, tư v&acirc;́n, nhà th&acirc;̀u độc lập hoặc nhân viên tạm thời. </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></li>
</ul>
<p><strong>Khi nghỉ hưu</strong><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span></p>
<ul>
<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Một cộng sự nghỉ hưu từ The Thanh Coffee ở độ tu&ocirc;̉i t&ocirc;́i thi&ecirc;̉u 55 với ít nh&acirc;́t 10 năm phục vụ liên tục sẽ nhận được các lợi ích giảm giá hàng hóa và Tặng ph&acirc;̉m cộng sự su&ocirc;́t đời. </span></li>
</ul>`,
                  }}
                ></DialogContent>
              </Dialog>
            </Box>
            <Box sx={{ lineHeight: "28px" }}>
              <Box sx={{ display: "flex", gap: "14px" }}>
                <Box>
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2L7 13L2 8"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box>
                  <strong>Tặng phẩm cộng sự:</strong> Lợi ích "Tặng phẩm" cộng
                  sự có sẵn tại các cửa hàng bán lẻ do công ty The Thanh Coffee
                  điều hành như một phương tiện để các cộng sự lấy mẫu và thưởng
                  thức cà phê và trà The Thanh Coffee©.
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "14px", p: "18px 0" }}>
                <Box>
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2L7 13L2 8"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box>
                  <strong>Giảm giá cho cộng sự: </strong> (tất cả các địa điểm
                  do công ty điều hành) Các cộng sự đủ điều kiện của The Thanh
                  Coffee có thể được giảm giá 30% trên giá mua đồ uống (đồ uống
                  espresso và đồ uống sẵn), các mặt hàng thực phẩm và hàng hóa
                  (bao gồm cả các mặt hàng giảm giá) được mua trong các cửa hàng
                  bán lẻ The Thanh Coffee do công ty điều hành.
                </Box>
              </Box>
            </Box>
            <Box sx={{ lineHeight: "28px" }}>
              <Box sx={{ display: "flex", gap: "14px", pb: "18px" }}>
                <Box>
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2L7 13L2 8"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box>
                  <strong>Áp dụng một số hạn chế:</strong> Tặng phẩm cộng sự và
                  giảm giá hàng hóa tại cửa hàng không có sẵn tại các địa điểm
                  cửa hàng. Việc giảm giá hoặc giảm giá cũng có thể bị giới hạn
                  tại một số cửa hàng khái niệm nhất định.
                </Box>
              </Box>
              <Box sx={{ display: "flex", gap: "14px" }}>
                <Box>
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 2L7 13L2 8"
                      stroke="black"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Box>
                <Box sx={{ pb: "14px" }}>
                  <strong>Khi nghỉ hưu:</strong> Một cộng sự nghỉ hưu từ The
                  Thanh Coffee ở độ tuổi tối thiểu 55 với ít nhất 10 năm phục vụ
                  liên tục sẽ nhận được các lợi ích giảm giá hàng hóa và Tặng
                  phẩm cộng sự suốt đời.
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            p: "128px 172px",
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
            fontSize: "18px",
            alignItems: "center",
            textAlign: "center",
            "@media (max-width:900px)": {
              p: "20px",
              display: "table",
            },
          }}
        >
          <Box
            sx={{ background: "#dad8d4", p: "82px 26px", borderRadius: "18px" }}
          >
            <Box
              sx={{
                pb: "24px",
                fontWeight: "700",
                fontSize: "30px",
              }}
            >
              Sẵn sàng tham gia cùng chúng tôi?
            </Box>
            <a href="/tham-gia-the-thanh" target="_blank" rel="noopener">
              <Box
                sx={{
                  p: "8px 24px",
                  background: "white",
                  border: "1px solid white",
                  borderRadius: "20px",
                  display: "inline-block",
                  width: "fit-content",
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Tìm việc làm
              </Box>
            </a>
          </Box>
          <Box sx={{ p: "20px 0" }}>
            <Box sx={{ color: "black", fontSize: "30px", fontWeight: "700" }}>
              Câu hỏi về lợi ích?
            </Box>
            <Box sx={{ pt: "20px", pb: "24px" }}>
              Đi sâu vào Câu hỏi thường gặp của chúng tôi để biết thông tin về
              tính đủ điều kiện và hơn thế nữa
            </Box>
            <a href="/cau-hoi-thuong-gap" target="_blank" rel="noopener">
              <Box
                sx={{
                  p: "8px 24px",
                  background: "black",
                  border: "1px solid black",
                  borderRadius: "20px",
                  display: "inline-block",
                  width: "fit-content",
                  color: "white",
                }}
              >
                Xem câu hỏi thường gặp
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default BenefitsandPrivileges;
