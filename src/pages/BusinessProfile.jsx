import { Box } from "@mui/material";
import React from "react";
import { styles } from "../styles";
import baovetaisan1 from "../component/img/baovetaisan1.jpg";
import baovetaisan2 from "../component/img/baovetaisan2.jpg";
import baovetaisan3 from "../component/img/baovetaisan3.jpg";
import FooterDesktop from "../component/layout/FooterDesktop";

const BusinessProfile = () => {
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
          fontSize: "60px",
          textAlign: "Center",
          p: "96px",
          "@media (max-width:900px)": {
            p: "20px",
            fontSize: "36px",
          },
        }}
      >
        Hồ sơ kinh doanh tại The Thanh Coffee
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
          "@media (max-width:1200px)": {
            p: "20px",
          },
        }}
      >
        <Box
          sx={{
            color: "#747474",
            lineHeight: "28px",
            pt: "32px",
          }}
        >
          Chúng tôi quản lý và xử lý hồ sơ Kinh doanh theo thời gian biểu chuẩn
          của The Thanh Coffee để lưu giữ, tùy thuộc vào các yêu cầu hợp đồng và
          pháp lý khác, chẳng hạn như thông báo lưu giữ do Bộ phận pháp lý phát
          hành.
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
            1. Lưu giữ hồ sơ Kinh doanh một cách thích hợp
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px" }}>
            <p>
              Xác định, quản lý và loại bỏ hồ sơ Kinh doanh theo thời gian biểu
              chuẩn của The Thanh Coffee để lưu giữ — và theo cách nhất quán với
              cách chúng tôi bảo vệ dữ liệu và thông tin.
            </p>
            <p>
              Các khoảng thời gian lưu giữ phản ánh các luật, quy định hiện hành
              và các thông lệ Kinh doanh. Các yêu cầu hợp đồng và các yêu cầu
              pháp lý khác, chẳng hạn như thông báo lưu giữ do Bộ phận pháp lý
              phát hành, chúng tôi có thể sửa đổi các khoảng thời gian lưu giữ
              này.
            </p>
            <p>
              Hồ sơ Kinh doanh phải được lưu giữ trong hệ thống kho lưu trữ được
              The Thanh Coffee phê duyệt trong thời gian lưu giữ.
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
            2. Tiến hành chuyến công tác một cách an toàn, hiệu quả nhất
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
            <p>Tiến hành chuyến công tác một cách an toàn, hiệu quả nhất</p>
            <p>
              Mặc dù công tác là một phần cần thiết trong hoạt động Kinh doanh
              của The Thanh Coffee, nhưng nó thể hiện cam kết về thời gian và
              chi phí chính của công ty. Chúng tôi chịu trách nhiệm đánh giá mọi
              chuyến đi để đảm bảo chi phí hợp lý, tuân thủ các quy định của The
              Thanh Coffee và quốc gia địa phương và có các phê duyệt cần thiết.
            </p>
            <p>
              Thay vì đi công tác, hãy xem xét các lựa chọn thay thế bằng các
              phương thức trực tuyến, chẳng hạn như cuộc gọi hội nghị, hội nghị
              trên web, cuộc họp trực tuyến và các công nghệ cộng tác khác nếu
              có thể.
            </p>
            <img
              src={baovetaisan3}
              width={"100%"}
              alt="Bảo vệ và tôn trọng quyền sở hữu trí tuệ của đối thủ cạnh tranh, khách hàng, đối tác Kinh doanh, nhà cung cấp, Công ty cũ và những người khác"
            />
            <figcaption style={{ textAlign: "center", fontSize: "14px" }}>
              Bảo vệ và tôn trọng quyền sở hữu trí tuệ của đối thủ cạnh tranh,
              khách hàng, đối tác Kinh doanh, nhà cung cấp, Công ty cũ và những
              người khác
            </figcaption>
            <p>
              Chúng tôi có trách nhiệm tuân thủ luật nhập cư của các địa điểm mà
              chúng tôi đến thăm khi tiến hành hoạt động Kinh doanh. Việc không
              tuân thủ luật nhập cư có thể gây ra những hậu quả rất nghiêm trọng
              ảnh hưởng đến mỗi người trong chúng ta, The Thanh Coffee và danh
              tiếng của The Thanh Coffee cũng như khách hàng của chúng ta.
            </p>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default BusinessProfile;
