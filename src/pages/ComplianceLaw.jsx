import { Box } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";

const ComplianceLaw = () => {
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <Navbardesktop />
      <Box
        sx={{
          p: "240px",
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
              mt: "180px",
              fontSize: "32px",
              pb: "40px",
            },
          }}
        >
          Tuân thủ luật pháp
        </Box>
        <Box
          sx={{
            color: "#464646",
            fontSize: "20px",
            pb: "40px",
            textAlign: "justify",
            "@media (max-width:900px)": {
              fontSize: "16px",
            },
          }}
        >
          <p>
            Chúng tôi tuân thủ tất cả các luật, cho dù địa phương, quốc gia hay
            khu vực. Thành viên của The Thanh Coffee và những người đại diện cho
            chúng tôi có trách nhiệm hiểu các Quy tắc hiện hành và phải làm việc
            với Bộ phận pháp lý để đảm bảo tuân thủ. Vi phạm pháp luật có thể
            dẫn đến tổn hại đáng kể cho The Thanh Coffee, bao gồm các hình phạt
            tài chính, bỏ tù vì hành vi sai trái hình sự và gây thiệt hại cho
            các mối quan hệ Kinh doanh và danh tiếng của chúng tôi.
          </p>
          <p>
            Các tiêu chuẩn và chính sách nêu ở đây không phải là tất cả các tiêu
            chuẩn và chính sách hiện hành của The Thanh Coffee cũng như không
            phải là giải thích toàn diện hay đầy đủ về luật áp dụng cho The
            Thanh Coffee. Tất cả các đối tác của The Thanh Coffee đều có nghĩa
            vụ thường xuyên tìm hiểu các luật hiện hành liên quan đến trách
            nhiệm công việc của họ và tất cả các chính sách của The Thanh
            Coffee. Việc vi phạm các tiêu chuẩn này, chính sách của The Thanh
            Coffee hoặc luật pháp có thể dẫn đến biện pháp kỷ luật lên đến và
            bao gồm cả việc sa thải.
          </p>
          <p>
            Bất kỳ sự từ bỏ Tiêu chuẩn Ứng xử Kinh doanh nào đều phải có sự chấp
            thuận trước bằng văn bản của giám đốc đạo đức và tuân thủ hoặc,
            trong một số trường hợp nhất định, của Hội đồng quản trị hoặc ủy ban
            của Hội đồng quản trị. Nếu luật hiện hành yêu cầu, việc miễn trừ sẽ
            được tiết lộ ngay lập tức theo yêu cầu của luật hiện hành.
          </p>
          <p>
            Các tiêu chuẩn và chính sách được thảo luận ở đây có thể được sửa
            đổi theo thời gian. Các đối tác nên truy cập vào Tiêu chuẩn ứng xử
            trong kinh doanh được đăng tại:
            http://giatrivathuctien.thanhcoffee.com để có phiên bản mới nhất.
          </p>
          <p>
            Tuân theo Quy tắc này sẽ cho phép chúng ta thực sự sống đúng với giá
            trị của mình, hoàn thành sứ mệnh phục vụ khách hàng kép và con
            người, đồng thời tiếp tục giành được sự tin tưởng của khách hàng mà
            chúng tôi phục vụ và cộng đồng nơi chúng tôi sống và làm việc. Khát
            vọng của tập thể chúng ta về tác động tích cực cho Việt Nam phụ
            thuộc vào sự tin tưởng đó và do đó chúng ta sống bằng những hành vi
            được nêu bật trong Quy tắc Đạo đức Kinh doanh này.
          </p>
          <p>
            Quy tắc Đạo đức Kinh doanh The Thanh Coffee được thiết kế để trở
            thành một tài liệu sống. Ủy ban Rủi ro, Kiểm toán và Quản trị của
            Hội đồng Cổ đông chịu trách nhiệm định kỳ hoàn thiện và cập nhật nội
            dung của Quy tắc này.
          </p>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default ComplianceLaw;
