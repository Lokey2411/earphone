import { Box } from "@mui/material";
import React from "react";
import { styles } from "../styles";
import baomatdulieu2 from "../component/img/baomatdulieu2.jpg";
import sohuutritue1 from "../component/img/sohuutritue1.jpg";
import FooterDesktop from "../component/layout/FooterDesktop";

const Intellectualproperty = () => {
  return (
    <Box
      sx={{
        ...styles.fontSize13,
        fontSize: "20px",
        background: "#06542D",
        height: "50vh",
        "@media (max-width:900px)": {
          fontSize: "16px",
        },
      }}
    >
      <Box
        sx={{
          fontSize: "60px",
          color: "white",
          textAlign: "Center",
          pt: "192px",
          pb: "96px",
          "@media (max-width:900px)": {
            fontSize: "36px",
            p: "20px",
          },
        }}
      >
        Sở hữu trí tuệ
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          textAlign: "center",
        }}
      >
        <img
          src={sohuutritue1}
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
        <Box sx={{ color: "#747474", lineHeight: "28px" }}>
          Chúng tôi bảo vệ và tôn trọng quyền sở hữu trí tuệ của những người
          khác cũng như bảo vệ quyền sở hữu trí tuệ của The Thanh Coffee, bao
          gồm cả kiến thức đã được đóng gói thành tài liệu.
        </Box>
        <Box>
          <Box
            sx={{
              lineHeight: "38px",
              fontSize: "30px",
              fontWeight: "600",
              pt: "48px",
              "@media (max-width:900px)": {
                fontSize: "22px",
              },
            }}
          >
            1. Bảo vệ và tôn trọng quyền sở hữu trí tuệ của đối thủ cạnh tranh,
            khách hàng, đối tác Kinh doanh, nhà cung cấp, Công ty cũ và những
            người khác
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px" }}>
            <p>
              Tôn trọng những cam kết của bạn với các nhà tuyển dụng cũ. Không
              cho phép bất kỳ nhân viên nào sử dụng, tiết lộ hoặc mang đến The
              Thanh Coffee bất kỳ tài liệu điện tử hoặc bản cứng nào của người
              sử dụng lao động cũ hoặc bất kỳ bên nào khác mà không có sự cho
              phép rõ ràng bằng văn bản, ngay cả khi nhân viên đó đã tạo tài
              liệu và ngay cả khi tài liệu đó không chứa thông tin nhạy cảm hoặc
              bí mật. Nếu bạn biết rằng ai đó đang làm điều này, hãy yêu cầu họ
              dừng lại, nhắc họ rằng điều đó là sai và — vì rủi ro đối với The
              Thanh Coffee rất cao — hãy báo cáo điều đó cho Bộ phận pháp lý.
            </p>
            <p>
              Không sử dụng, phân phối, sao chép hoặc xóa tài liệu của khách
              hàng khỏi trang web của khách hàng, nếu không có thỏa thuận bằng
              văn bản phản ánh quyền của The Thanh Coffee được làm như vậy.
            </p>
            <p>
              Không tải xuống hoặc sử dụng tài liệu có bản quyền — chẳng hạn như
              ảnh, phim, tệp nhạc, chương trình phần mềm hoặc mã nguồn — mà
              không có giấy phép thích hợp. Nhận biết rằng tài liệu có sẵn để
              xem hoặc tải xuống trên internet không phải là dấu hiệu cho thấy
              tài liệu đó có thể được sử dụng mà không cần giấy phép.
            </p>
            <img
              src={baomatdulieu2}
              width={"100%"}
              alt="Bảo vệ và tôn trọng quyền sở hữu trí tuệ của đối thủ cạnh tranh, khách hàng, đối tác Kinh doanh, nhà cung cấp, Công ty cũ và những người khác"
            />
            <figcaption style={{ textAlign: "center" }}>
              Bảo vệ và tôn trọng quyền sở hữu trí tuệ của đối thủ cạnh tranh,
              khách hàng, đối tác Kinh doanh, nhà cung cấp, Công ty cũ và những
              người khác
            </figcaption>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              lineHeight: "38px",
              fontSize: "30px",
              fontWeight: "600",
              pt: "48px",
              "@media (max-width:900px)": {
                fontSize: "22px",
              },
            }}
          >
            2. Bảo vệ tài sản trí tuệ của The Thanh Coffee, bao gồm cả kiến thức
            được đóng gói thành văn bản
          </Box>
          <Box sx={{ color: "#747474", lineHeight: "28px" }}>
            <p>
              Sở hữu trí tuệ của The Thanh Coffee giúp chúng tôi vượt trội hơn
              so với các đối thủ cạnh tranh. Sở hữu trí tuệ của chúng tôi là
              thông tin chứng nhận giúp phân biệt The Thanh Coffee với phần còn
              lại của thị trường và làm cho khách hàng cảm thấy xứng đáng với
              khoản đầu tư đáng kể dành cho The Thanh Coffee để tạo ra giá trị
              duy nhất mà chỉ The Thanh Coffee mới có thể cung cấp. Việc bảo vệ,
              giữ lại và tận dụng quyền sở hữu của chúng tôi đối với quyền sở
              hữu trí tuệ của The Thanh Coffee trong quá trình đàm phán và cam
              kết với khách hàng, nhà cung cấp và các bên khác. Đánh dấu tất cả
              các đề xuất, chất liệu và tài liệu bí mật của The Thanh Coffee
              theo nguyên tắc của The Thanh Coffee. Chỉ chia sẻ thông tin với
              những người có nhu cầu biết và chỉ khi thích hợp sau khi xác nhận
              rằng đã có thỏa thuận không tiết lộ và các biện pháp bảo vệ khác.
            </p>
            <p>
              Hiểu và tuân thủ bất kỳ hạn chế nào đối với kiến thức đóng gói
              trước khi bạn sử dụng.
            </p>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default Intellectualproperty;
