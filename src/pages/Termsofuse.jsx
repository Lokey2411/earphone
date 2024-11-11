import { Box } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";

const Termsofuse = () => {
  return (
    <Box sx={{ ...styles.fontSize13, textAlign: "justify" }}>
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
          ĐIỀU KHOẢN SỬ DỤNG
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            color: "#353535",
            fontWeight: "600",
            pb: "32px",
          }}
        >
          [01/07/2024]
        </Box>
        <Box
          sx={{
            fontSize: "18px",
            lineHeight: "28px",
            "@media (max-width:900px)": {
              fontSize: "16px",
            },
          }}
        >
          <strong>
            Vui lòng đọc kỹ các điều khoản sử dụng của trang web này.
          </strong>
          <p>
            Bằng cách sử dụng trang web này (sau đây gọi là "bạn"), bạn được coi
            là đã chấp nhận các điều khoản và điều kiện được mô tả ở đây. Do đó,
            nếu bạn không đồng ý tuân thủ các Điều khoản Sử dụng này, vui lòng
            không sử dụng Trang web. Các điều khoản sử dụng có thể thay đổi bởi
            The Thanh Coffee. Ngoài ra, việc bạn sử dụng trang Web cấu thành sự
            chấp nhận các điều khoản và điều kiện đã sửa đổi, vì vậy vui lòng
            kiểm tra các điều khoản sử dụng theo thời gian.
          </p>
          <p>
            Mặc dù chúng tôi nỗ lực hợp lý để cung cấp thông tin chính xác và
            kịp thời trên trang web này, chúng tôi không thể hứa rằng thông tin
            được cung cấp sẽ luôn được cập nhật hoặc tất cả thông tin liên quan
            sẽ có sẵn từ trang web này.
          </p>
          <strong>Bản quyền và Thương hiệu</strong>
          <p>
            Trừ khi có quy định khác, mọi hình ảnh, dữ liệu, thông tin và các
            tài sản khác xuất hiện trên Trang web này và các trang web khác do
            chúng tôi sở hữu hoặc kiểm soát ("Thông tin") đều là tài sản của
            chúng tôi. Đây có thể là các tác phẩm được bảo vệ bởi bản quyền,
            nhãn hiệu và các tài sản trí tuệ khác mà chủ sở hữu đã cấp phép cho
            The Thanh Coffee.
          </p>
          <p>
            Tên quán cà phê The Thanh Coffee là tên đã đăng ký. Tất cả các nhãn
            hiệu, logo, tên miền, tên công ty và các chỉ dẫn khác của The Thanh
            Coffee được đề cập trên trang web này là tài sản của The Thanh
            Coffee hoặc các bên được phép sử dụng bởi The Thanh Coffee. Bất kỳ
            việc sao chép, in lại hoặc sử dụng các tài sản này mà không có sự
            đồng ý bằng văn bản từ The Thanh Coffee hoặc chủ sở hữu đều không
            được phép, bao gồm cả phân phối lại.
          </p>
          <strong>Sử dụng cá nhân</strong>
          <p>
            Mục đích của việc sử dụng thông tin này được giới hạn trong việc thu
            thập thông tin. Thông tin này không được sao chép, phân phối, tái
            xuất bản, tải lên, đăng hoặc truyền tải dưới bất kỳ hình thức nào
            ngoài phạm vi sử dụng cá nhân hoặc được pháp luật cho phép rõ ràng,
            trừ khi được The Thanh Coffee cho phép. Bạn không được phân phối
            quyền, xuất bản, chuyển nhượng, sửa đổi, hiển thị, sử dụng không
            đúng cách hoặc tạo các tác phẩm phái sinh từ thông tin này. Trong
            trường hợp sử dụng trái phép thông tin này, người dùng phải bồi
            thường cho The Thanh Coffee cho bất kỳ và tất cả các thiệt hại phát
            sinh. Bạn hiểu rằng bất kỳ việc sử dụng trái phép thông tin này có
            thể gây ra thiệt hại không thể khắc phục cho chúng tôi, và chúng tôi
            có quyền thực hiện hành động pháp lý thích hợp, bao gồm cả lệnh cấm,
            trong trường hợp sử dụng trái phép thông tin này.
          </p>
          <strong>Giới thiệu về ý kiến và bài viết</strong>
          <p>
            Người dùng đồng ý rằng Người dùng hoàn toàn chịu trách nhiệm về nội
            dung của các Bài đăng do Người dùng thực hiện, rằng Người dùng phải
            chịu mọi trách nhiệm và Người dùng sẽ không đăng bất kỳ tài liệu nào
            trái với trật tự công cộng và đạo đức, chẳng hạn như nội dung bất
            hợp pháp, phỉ báng, ngôn ngữ lạm dụng hoặc nội dung khiêu dâm. Bạn
            đồng ý không đăng trên trang web này bất cứ điều gì vi phạm quyền
            của bất kỳ bên thứ ba nào, bao gồm bản quyền, nhãn hiệu, quyền riêng
            tư hoặc các quyền cá nhân và quyền sở hữu khác.
          </p>
          <p>
            Cảm ơn bạn đã quan tâm đến chúng tôi. Tuy nhiên, chúng tôi không sẵn
            sàng chấp nhận bất kỳ ý tưởng nào mà bạn tin rằng bạn sở hữu liên
            quan đến thiết kế, công nghệ sản phẩm hoặc các đề xuất khác mà bạn
            tạo ra, v.v. và chúng tôi không có ý định chấp nhận chúng. Theo đó,
            bạn được cấp quyền miễn phí bản quyền, không độc quyền để sử dụng,
            sao chép, sửa đổi, hiển thị, truyền tải, điều chỉnh, xuất bản, dịch,
            tạo các tác phẩm phái sinh từ và phân phối bất kỳ tài liệu nào được
            đăng trên trang web này trên toàn thế giới, trong bất kỳ phương tiện
            và phương pháp phân phối, truyền tải và hiển thị nào, bao gồm trong
            bất kỳ phương tiện và phương pháp nào hiện đã biết và được phát minh
            sau này. Ngoài ra, người sử dụng lao động đảm bảo không thực hiện
            "quyền nhân thân của tác giả".
          </p>
          <strong>Quyền riêng tư & An toàn</strong>
          <p>
            Để được giải thích về các thông lệ và chính sách của chúng tôi liên
            quan đến việc thu thập, sử dụng và lưu trữ thông tin về Khách Trực
            tuyến, vui lòng xem Chính sách Bảo mật của chúng tôi trong một phần
            riêng. Chúng tôi không đảm bảo rằng các chức năng của trang web này
            sẽ không bị gián đoạn hoặc không có lỗi, hoặc trang web này và các
            máy chủ của nó sẽ được bảo vệ khỏi vi-rút hoặc các yếu tố có hại
            khác. Ngoài ra, ngay cả khi chúng tôi biết rằng có một khiếm khuyết,
            chúng tôi không đảm bảo rằng nó sẽ được sửa chữa.
          </p>
          <strong>Trẻ vị thành niên</strong>
          <p>
            Nếu con bạn đang sử dụng máy tính trực tuyến, bạn nên giám sát con
            bạn. Trẻ vị thành niên không được đăng thông tin mà không có sự đồng
            ý của cha mẹ hoặc người giám hộ.
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            pb: "140px",
            fontSize: "18px",
            color: "#5A5A5A",
            "@media (max-width:900px)": {
              fontSize: "16px",
              pb: "40px",
            },
          }}
        >
          Có hiệu lực từ ngày 1 tháng 7 năm 2024
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default Termsofuse;
