import { Box } from "@mui/material";
import React from "react";
import { styles } from "../styles";
import baovetaisan1 from "../component/img/baovetaisan1.jpg";
import baovetaisan2 from "../component/img/baovetaisan2.jpg";
import baovetaisan3 from "../component/img/baovetaisan3.jpg";
import FooterDesktop from "../component/layout/FooterDesktop";

const AssetProtection = () => {
  return (
    <Box
      sx={{
        ...styles.fontSize13,
        fontSize: "20px",
      }}
    >
      <Box
        sx={{
          fontSize: "60px",
          textAlign: "Center",
          p: "96px",
          "@media (max-width:1200px)": {
            fontSize: "36px",
            p: "20px",
          },
        }}
      >
        Bảo vệ tài sản của The Thanh Coffee
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          left: "50%",
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
            borderTop: "1px solid #747474",
            pt: "32px",
          }}
        >
          Chúng tôi bảo vệ tài sản của mình một cách mạnh mẽ — bao gồm cả tài
          sản vật chất và tài sản vô hình. Tài sản vô hình bao gồm thương hiệu,
          danh tiếng, sở hữu trí tuệ và thông tin bảo mật của chúng tôi.
        </Box>
        <Box>
          <Box
            sx={{ fontSize: "30px", fontWeight: "bold", p: "48px 0 24px 0" }}
          >
            1. An toàn tại nơi làm việc và Tính liên tục trong Kinh doanh
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px" }}>
            <p>
              Chúng tôi tuân thủ tất cả các quy trình an toàn và khẩn cấp tại
              các cơ quan làm việc của chúng tôi và tại các địa điểm của khách
              hàng — bao gồm hướng dẫn ứng phó sự cố và các kế hoạch liên tục
              trong Kinh doanh — và chúng tôi báo cáo ngay các mối đe dọa về an
              toàn, vi phạm bảo mật và các sự cố thảm họa / khủng hoảng có thể
              ảnh hưởng đến việc cung cấp dịch vụ.
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
            sx={{ fontSize: "30px", fontWeight: "bold", p: "48px 0 24px 0" }}
          >
            2. Đặt an toàn cá nhân lên ưu tiên hàng đầu
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px" }}>
            <p>
              Chúng tôi đặt an toàn cá nhân lên hàng đầu. Thực hiện theo tất cả
              các quy trình an toàn và khẩn cấp tại các cơ sở của chúng tôi và
              tại các cơ sở của khách hàng.
            </p>
            <p>
              Hiểu và tuân thủ bất kỳ hạn chế nào đối với kiến thức đóng gói
              trước khi bạn sử dụng.
            </p>
            <ul>
              <li>
                Đe doạ đến cuộc sống, sức khoẻ và sự an toàn của con người
              </li>
              <li>Vi phạm bảo mật (bao gồm cả bảo mật thông tin)</li>
              <li>
                Sự cố thiên tai/khủng hoảng có thể ảnh hưởng đến việc cung cấp
                dịch vụ cho khách hàng và/hoặc hoạt động nội bộ của chúng tôi
              </li>
            </ul>
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
              Trong trường hợp xảy ra bất kỳ sự cố nào như vậy, hãy tuân theo
              mọi hướng dẫn ứng phó sự cố và/hoặc các biện pháp liên tục trong
              Kinh doanh.
            </p>
            <p>
              Vì The Thanh Coffee cam kết cung cấp một môi trường làm việc an
              toàn, bảo mật và không có mối đe dọa, không mang vũ khí đến các cơ
              sở của The Thanh Coffee (ngoại trừ trong phạm vi được cho phép bởi
              bất kỳ luật hiện hành tại Việt Nam). Điều này bao gồm các địa điểm
              công cộng hoặc ngoài trời, nơi diễn ra sự kiện do The Thanh Coffee
              tài trợ hoặc sự kiện đào tạo The Thanh Coffee, tiến hành Kinh
              doanh The Thanh Coffee tại các địa điểm không phải The Thanh
              Coffee và tham dự các sự kiện khách hàng hoặc các sự kiện liên
              quan đến công việc khác.
            </p>
            <p>
              Để bảo vệ The Thanh Coffee, con người và tài sản của chúng tôi,
              The Thanh Coffee có thể yêu cầu khám xét tài sản cá nhân tại địa
              điểm làm việc của công ty và trong phạm vi pháp luật cho phép, có
              thể giám sát bất kỳ lúc nào tất cả tài sản của The Thanh Coffee,
              bao gồm email, tin nhắn tức thời và việc sử dụng internet.
            </p>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default AssetProtection;
