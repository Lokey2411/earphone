import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import AnhKien from "../component/img/AnhKien.jpg";
import chukycenter from "../component/img/chukycenter.jpg";
import { useTheme } from "@emotion/react";
import { styles } from "../styles";

const Message = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ textAlign: "justify" }}>
      {isMobile ? (
        <Box>
          <Logotop />
          <Navbardesktop />
          <Box sx={{ ...styles.fontSize13, pt: "140px" }}>
            <Box>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Box
                  sx={{
                    width: "8px",
                    background: "black",
                    color: "black",
                  }}
                >
                  ||
                </Box>
                <Box>
                  <Box
                    sx={{
                      fontSize: "14px",
                      color: "#353535",
                      lineHeight: "24px",
                      pb: "40px",
                      fontStyle: "italic",
                      mr: "5px",
                    }}
                  >
                    <p>Thân gửi các cộng sự,</p>
                    <p>
                      Tại The Thanh Coffee, chúng tôi đề cao việc tạo ra giá trị
                      cho khách hàng và mang tới sự thay đổi để tốt hơn mỗi
                      ngày. Chúng tôi cố gắng làm tất cả mọi điều có thể trong
                      để đưa trách nhiệm xã hội vào sản phẩm và dịch vụ của
                      mình, cùng trao nhau cơ hội để mọi người trở thành phiên
                      bản tốt nhất của chính mình, là đồng đội của nhau, cùng
                      nhau phát triển các kỹ năng có giá trị thúc đẩy đổi mới và
                      sức sống văn hoá tại mỗi nơi mà chúng ta hiện diện từ cửa
                      hàng, các nền tảng chúng ta triển khai, khu vực địa phương
                      và hơn thế nữa.
                    </p>
                    <p>
                      Mọi quyết định chúng ta đưa ra đều quan trọng. Chúng ta
                      phải luôn bảo vệ lợi ích của công ty, hành động chính trực
                      và tuân thủ các tiêu chuẩn đạo đức cao nhất để vượt qua kỳ
                      vọng của khách hàng và đạt được các mục tiêu phát triển
                      Kinh doanh bền vững. Để đạt được kì vọng và mong đợi của
                      khách hàng, điều đầu tiên là chúng ta cần hiểu tinh thần
                      và hợp tác với nhau dựa trên việc đạt được kỳ vọng và mong
                      đợi của các cộng sự.
                    </p>
                    <p>
                      Cảm ơn bạn đã tham gia The Thanh Coffee. Mỗi ngày, chúng
                      ta sẽ cùng nhau làm cho The Thanh Coffee trở nên tuyệt vời
                      hơn bao giờ hết. Cảm ơn các bạn đã cam kết và nỗ lực.
                    </p>
                    <p>
                      Chúng ta sẽ cùng nhau kết nối các cộng sự trên tinh thần
                      hợp tác, chia sẻ ước mơ và hành động truyền cảm hứng để
                      tạo nên sự thân tình và ấm áp giữa mọi người. Để mọi người
                      nhận biết trong từng khoảnh khắc và tận hưởng niềm vui qua
                      mỗi cốc, mỗi cửa hàng The Thanh Coffee tại mỗi thời điểm.
                      Gửi lời chúc tốt đẹp nhất để chúc ta cùng nhau viết lên
                      môt hành trình cùng mang tới những điều tốt đẹp cho cộng
                      đồng và Việt Nam.
                    </p>
                    <p>
                      Chúc bạn những điều tốt đẹp nhất trên hành trình này để
                      chúng ta cùng nhau tạo nên những điều tuyệt vời.
                    </p>
                  </Box>
                  <Box sx={{ fontSize: "14px", color: "black", pb: "8px" }}>
                    Tran Thanh,
                  </Box>
                  <Box sx={{ fontSize: "14px", color: "#5A5A5A", pb: "20px" }}>
                    Giám đốc điều hành tại The Thanh Coffee
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                fontSize: "14px",
                p: "10px",
              }}
            >
              <img
                width={"100%"}
                height={"auto"}
                src={AnhKien}
                alt="Trần Thanh Kiên - Founder sáng lập The Thanh Coffee"
              />
              <Box sx={{ pt: "21px", pb: "16px" }}>Than gui,</Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <img
                  src={chukycenter}
                  style={{ width: "60px", height: "40px", objectFit: "cover" }}
                  alt="Chữ ký"
                />
              </Box>
              <Box sx={{ pt: "16px" }}>Tran Thanh</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                p: "10px 0",
                justifyContent: "center",
              }}
            >
              <a href="/nhiem-vu-va-gia-tri" rel="noopener noreferrer">
                <Box
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    border: "2px solid black",
                    color: "#FFFFFF",
                    background: "black",
                    p: "10px 20px",
                    mb: "30px",
                  }}
                >
                  Sứ mệnh và giá trị của chúng tôi {"->"}
                </Box>
              </a>
            </Box>
          </Box>
          <FooterDesktop />
        </Box>
      ) : (
        <Box>
          <Logotop />
          <Navbardesktop />
          <Box sx={{ ...styles.fontSize13, pt: "140px" }}>
            <Box
              sx={{
                display: "flex",
                p: "140px 140px 96px 140px",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  fontSize: "18px",
                  pr: "96px",
                  width: "50%",
                }}
              >
                <img
                  width={"100%"}
                  height={"auto"}
                  src={AnhKien}
                  alt="Trần Thanh Kiên - Founder sáng lập The Thanh Coffee"
                />
                <Box sx={{ pt: "21px", pb: "16px" }}>Thân gửi,</Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <img
                    src={chukycenter}
                    style={{
                      width: "60px",
                      height: "40px",
                      objectFit: "cover",
                    }}
                    alt="Chữ ký"
                  />
                </Box>
                <Box sx={{ pt: "16px" }}>Tran Thanh</Box>
              </Box>
              <Box sx={{ width: "50%" }}>
                <Box sx={{ display: "flex", gap: "20px" }}>
                  <Box
                    sx={{
                      width: "8px",
                      background: "black",
                      color: "black",
                    }}
                  >
                    ||
                  </Box>
                  <Box>
                    <Box
                      sx={{
                        fontSize: "16px",
                        color: "#353535",
                        lineHeight: "24px",
                        pb: "40px",
                        fontStyle: "italic",
                      }}
                    >
                      <p>Thân gửi các cộng sự,</p>
                      <p>
                        Tại The Thanh Coffee, chúng tôi đề cao việc tạo ra giá
                        trị cho khách hàng và mang tới sự thay đổi để tốt hơn
                        mỗi ngày. Chúng tôi cố gắng làm tất cả mọi điều có thể
                        trong để đưa trách nhiệm xã hội vào sản phẩm và dịch vụ
                        của mình, cùng trao nhau cơ hội để mọi người trở thành
                        phiên bản tốt nhất của chính mình, là đồng đội của nhau,
                        cùng nhau phát triển các kỹ năng có giá trị thúc đẩy đổi
                        mới và sức sống văn hoá tại mỗi nơi mà chúng ta hiện
                        diện từ cửa hàng, các nền tảng chúng ta triển khai, khu
                        vực địa phương và hơn thế nữa.
                      </p>
                      <p>
                        Mọi quyết định chúng ta đưa ra đều quan trọng. Chúng ta
                        phải luôn bảo vệ lợi ích của công ty, hành động chính
                        trực và tuân thủ các tiêu chuẩn đạo đức cao nhất để vượt
                        qua kỳ vọng của khách hàng và đạt được các mục tiêu phát
                        triển Kinh doanh bền vững. Để đạt được kì vọng và mong
                        đợi của khách hàng, điều đầu tiên là chúng ta cần hiểu
                        tinh thần và hợp tác với nhau dựa trên việc đạt được kỳ
                        vọng và mong đợi của các cộng sự.
                      </p>
                      <p>
                        Và khi đối mặt với một tình huống khó khăn, tôi hy vọng
                        mọi người sẽ thử thách bản thân và tham khảo ý kiến của
                        đồng nghiệp, để xác định hướng hành động nào phù hợp
                        nhất với giá trị của chúng ta. Nếu bạn có thắc mắc hay
                        cần hỗ trợ, vui lòng trao đổi với người quản lý của bạn
                        hoặc liên hệ với bộ phận Quan hệ Cộng sự.
                      </p>
                      <p>
                        Cảm ơn bạn đã tham gia The Thanh Coffee. Mỗi ngày, chúng
                        ta sẽ cùng nhau làm cho The Thanh Coffee trở nên tuyệt
                        vời hơn bao giờ hết. Cảm ơn các bạn đã cam kết và nỗ
                        lực.
                      </p>
                      <p>
                        Chúng ta sẽ cùng nhau kết nối các cộng sự trên tinh thần
                        hợp tác, chia sẻ ước mơ và hành động truyền cảm hứng để
                        tạo nên sự thân tình và ấm áp giữa mọi người. Để mọi
                        người nhận biết trong từng khoảnh khắc và tận hưởng niềm
                        vui qua mỗi cốc, mỗi cửa hàng The Thanh Coffee tại mỗi
                        thời điểm. Gửi lời chúc tốt đẹp nhất để chúc ta cùng
                        nhau viết lên môt hành trình cùng mang tới những điều
                        tốt đẹp cho cộng đồng và Việt Nam.
                      </p>
                      <p>
                        Chúc bạn những điều tốt đẹp nhất trên hành trình này để
                        chúng ta cùng nhau tạo nên những điều tuyệt vời. Trân
                        trọng.”
                      </p>
                    </Box>
                    <Box sx={{ fontSize: "18px", color: "black", pb: "8px" }}>
                      Tran Thanh,
                    </Box>
                    <Box sx={{ fontSize: "18px", color: "#5A5A5A" }}>
                      Giám đốc điều hành tại The Thanh Coffee
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    pt: "96px",
                  }}
                >
                  <a href="/nhiem-vu-va-gia-tri" rel="noopener noreferrer">
                    <Box
                      sx={{
                        fontSize: "20px",
                        fontWeight: "bold",
                        border: "2px solid black",
                        color: "#FFFFFF",
                        background: "black",
                        p: "16px 40px",
                      }}
                    >
                      Sứ mệnh và giá trị của chúng tôi {"->"}
                    </Box>
                  </a>
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

export default Message;
