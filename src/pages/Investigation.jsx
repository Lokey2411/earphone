import { Box } from "@mui/material";
import React from "react";
import { styles } from "../styles";
import baovetaisan1 from "../component/img/baovetaisan1.jpg";
import baovetaisan2 from "../component/img/baovetaisan2.jpg";
import FooterDesktop from "../component/layout/FooterDesktop";

const Investigation = () => {
  return (
    <Box
      sx={{
        ...styles.fontSize13,
        fontSize: "20px",
        textAlign: "justify",
        "@media (max-width:900px)": {
          fontSize: "16px",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "48px",
          textAlign: "Center",
          pt: "96px",
          pb: "40px",
          color: "#06542D",
          fontWeight: "600",
          "@media (max-width:900px)": {
            fontSize: "36px",
            pt: "20px",
            pb: "20px",
          },
        }}
      >
        Điều tra, Tố tụng và Kiểm toán
      </Box>
      <Box
        sx={{
          background: "#06542D",
          margin: "0 auto",
          height: "2px",
          width: "20%",
        }}
      ></Box>
      <Box
        sx={{
          p: "0 260px",
          pt: "48px",
          pb: "64px",
          color: "#747474",
          textAlign: "center",
          "@media (max-width:900px)": {
            p: "20px",
          },
        }}
      >
        Chúng tôi bảo vệ và tôn trọng quyền sở hữu trí tuệ của những người khác
        cũng như bảo vệ quyền sở hữu trí tuệ của The Thanh Coffee, bao gồm cả
        kiến thức đã được đóng gói thành tài liệu.
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          textAlign: "center",
        }}
      >
        <img
          src={baovetaisan1}
          width={"80%"}
          height={"456px"}
          style={{ objectFit: "cover" }}
          alt="Tổng quan bảo mật dữ liệu"
        />
      </Box>
      <Box
        sx={{
          p: "0 360px",
          pt: "128px",
          "@media (max-width:900px)": {
            p: "20px",
          },
        }}
      >
        <Box>
          <Box
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              p: "48px 0 24px 0",
              "@media (max-width:900px)": {
                fontSize: "22px",
              },
            }}
          >
            1. Tuân thủ và hợp tác đầy đủ với các cuộc điều tra, kiện tụng và
            kiểm toán
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px" }}>
            <p>
              Bất cứ khi nào bạn tham gia vào các cuộc điều tra nội bộ hoặc
              chính phủ, kiện tụng hoặc kiểm toán đang diễn ra, hãy hợp tác đầy
              đủ với các hướng dẫn điều tra và nói toàn bộ sự thật.
            </p>
            <img
              src={baovetaisan2}
              width={"100%"}
              alt="Bảo vệ và tôn trọng quyền sở hữu trí tuệ của đối thủ cạnh tranh, khách hàng, đối tác Kinh doanh, nhà cung cấp, Công ty cũ và những người khác"
            />
            <figcaption style={{ textAlign: "center", fontSize: "14px" }}>
              An toàn tại nơi làm việc và Tính liên tục trong Kinh doanh
            </figcaption>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              p: "48px 0 24px 0",
              "@media (max-width:900px)": {
                fontSize: "22px",
              },
            }}
          >
            2. Cho phép các chuyên gia điều tra và chỉ làm việc với nhân viên
            được ủy quyền
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px", pb: "48px" }}>
            <p>
              Không bao giờ tự mình tiến hành điều tra — tất cả các yêu cầu tiến
              hành điều tra nội bộ phải được báo cáo và được sự cho phép của
              Điều tra Công ty hoặc Cơ quan Bảo vệ Tài sản. Chỉ làm việc với
              nhân viên Pháp lý được ủy quyền để trả lời các vụ kiện tụng hoặc
              trát đòi hầu tòa (bao gồm cả yêu cầu của khách hàng) hoặc các yêu
              cầu từ chính phủ, cơ quan thực thi pháp luật, kiểm toán viên bên
              ngoài hoặc cơ quan quản lý.
            </p>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              fontSize: "30px",
              fontWeight: "bold",
              pb: "24px",
              "@media (max-width:900px)": {
                fontSize: "22px",
              },
            }}
          >
            3. Xác định và bảo quản thông tin liên quan và bảo vệ thông tin liên
            lạc bí mật
          </Box>
          <Box
            sx={{
              color: "#747474",
              lineHeight: "28px",
              pb: "140px",
              "@media (max-width:900px)": {
                pb: "30px",
              },
            }}
          >
            <p>
              Không bao giờ tự mình tiến hành điều tra — tất cả các yêu cầu tiến
              hành điều tra nội bộ phải được báo cáo và được sự cho phép của
              Điều tra Công ty hoặc Cơ quan Bảo vệ Tài sản. Chỉ làm việc với
              nhân viên Pháp lý được ủy quyền để trả lời các vụ kiện tụng hoặc
              trát đòi hầu tòa (bao gồm cả yêu cầu của khách hàng) hoặc các yêu
              cầu từ chính phủ, cơ quan thực thi pháp luật, kiểm toán viên bên
              ngoài hoặc cơ quan quản lý.
            </p>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default Investigation;
