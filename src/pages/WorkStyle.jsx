import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import phongcachlamviec1 from "../component/img/phongcachlamviec1.jpg";
import Slider from "react-slick";
import { useTheme } from "@emotion/react";

const WorkStyle = () => {
  var Myvalues = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  var MyvaluesMobile = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const MyvaluesItems = [
    {
      img: phongcachlamviec1,
      tittle: "Đóng góp cho địa phương",
      content:
        "Đóng góp cho địa phương, con người, góp phần tạo nên những điều ý nghĩa và xây dựng một Việt Nam đáng tự hào vì mỗi chúng ta.",
    },
    {
      img: phongcachlamviec1,
      tittle: "Mối quan hệ",
      content:
        "Cân bằng công việc và gia đình, ý nghĩa cho những khoảnh khắc, thân mật trong sự thấu hiểu.",
    },
    {
      img: phongcachlamviec1,
      tittle: "Đóng góp cho địa phương",
      content:
        "Đóng góp cho địa phương, con người, góp phần tạo nên những điều ý nghĩa và xây dựng một Việt Nam đáng tự hào vì mỗi chúng ta.",
    },
    {
      img: phongcachlamviec1,
      tittle: "Đóng góp cho địa phương",
      content:
        "Đóng góp cho địa phương, con người, góp phần tạo nên những điều ý nghĩa và xây dựng một Việt Nam đáng tự hào vì mỗi chúng ta.",
    },
    {
      img: phongcachlamviec1,
      tittle: "Đóng góp cho địa phương",
      content:
        "Đóng góp cho địa phương, con người, góp phần tạo nên những điều ý nghĩa và xây dựng một Việt Nam đáng tự hào vì mỗi chúng ta.",
    },
  ];

  return (
    <Box
      sx={{
        ...styles.fontSize13,
        flexGrow: 1,
        minHeight: "100vh",
        textAlign: "justify",
      }}
    >
      <Logotop />
      <Navbardesktop />
      <Box
        sx={{
          pt: "145px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
          }}
        >
          <img
            width={"100%"}
            height={"879px"}
            style={{
              objectFit: "cover",
              filter: "blur(5px)",
            }}
            src={phongcachlamviec1}
            alt="Phong cách làm việc"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "20%",
              textAlign: "center",
              color: "#FFFFFF",
              p: "0 240px",
              "@media (max-width:900px)": {
                p: "20px",
              },
            }}
          >
            <Box
              sx={{
                fontSize: "48px",
                pb: "16px",
                "@media (max-width:900px)": {
                  fontSize: "32px",
                },
              }}
            >
              Phong cách làm việc
            </Box>
            <Box
              sx={{
                fontSize: "20px",
                lineHeight: "30px",
                "@media (max-width:900px)": {
                  fontSize: "16px",
                },
              }}
            >
              Trân trọng lối sống, trân trọng bản thân, trân trọng khoảnh khắc
              và cảm thấy rằng mọi thứ đều phát triển cùng nhau và liên quan mật
              thiết với nhau, sự phát triển song song của bản thân, cộng đồng và
              cửa hàng. Chúng ta đều cùng mong muốn có một cuộc sống dễ chịu và
              dễ hiểu trong từng điều, mọi việc dù nhỏ hay lớn đều mang về những
              thành tựu luôn đáng được ghi nhận.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#dad8d4",
            p: "96px 240px",
            fontSize: "20px",
            lineHeight: "30px",
            textAlign: "center",
            mb: "96px",
            "@media (max-width:900px)": {
              p: "20px",
              fontSize: "18px",
              mb: "20px",
            },
          }}
        >
          <p style={{ fontStyle: "italic" }}>
            Trân trọng lối sống, bản thân và từng khoảnh khắc
          </p>
          <p>
            Chúng tôi không chỉ tập trung vào việc tạo ra những tách trà và cà
            phê tròn vị mà còn khuyến khích sự đổi mới, đa dạng và phát triển
            bản thân. Đối với các cộng sự của mình, chúng tôi dành cho họ sự tôn
            trọng, quyền tự chủ, dựa trên sự kết hợp song song giữa công việc và
            cuộc sống. Mỗi người được lựa chọn cách thức làm việc phù hợp nhất
            với bản thân, để có sự cân bằng giữa nhu cầu cá nhân, thời gian cho
            bản thân, gia đình và sự nghiệp.{" "}
          </p>
          <p>
            Tại The Thanh, sự tôn trọng giữa các thành viên được đặt lên hàng
            đầu, không phân biệt vị trí cấp bậc trong công ty. Sự đa dạng trong
            con người và ý tưởng của các thành viên khuyến khích sự đổi mới
            xuyên suốt mọi thứ mà chúng ta làm, từ những tách cà phê tròn vị,
            dịch vụ khách hàng tận tâm cho đến nỗ lực bảo vệ môi trường.{" "}
          </p>
          <p>
            Mỗi người trong chúng ta đều có sẵn tiềm năng cho sự phát triển,
            chúng tôi ở đây để thay đổi trên các phương diện nhằm mang tới tác
            động tích cực cho cộng đồng và địa phương.
          </p>
        </Box>
        {isMobile ? (
          <Box sx={{ p: "0 30px", m: "0 auto" }}>
            <Slider {...MyvaluesMobile}>
              {MyvaluesItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background: "#dad8d4",
                      borderRadius: "24px",
                      color: "black",
                    }}
                  >
                    <Box
                      sx={{
                        flex: 1,
                        color: "black",
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          p: "10px 0 10px 32px",
                        }}
                      >
                        {item.tittle}
                      </Box>
                      <Box sx={{ fontSize: "14px", p: "10px 0 10px 32px" }}>
                        {item.content}
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        flex: 1,
                        paddingLeft: "20px",
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.tittle}
                        style={{
                          width: "100%",
                          borderRadius: "24px",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        ) : (
          <div id="work-style">
            <Box
              sx={{
                m: "0 auto",
                p: "0 140px",
              }}
            >
              <Slider {...Myvalues}>
                {MyvaluesItems.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      boxSizing: "border-box",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        background: "#dad8d4",
                        color: "#FFFFFF",
                        borderRadius: "24px",
                      }}
                    >
                      <Box
                        sx={{
                          flex: 1,
                          paddingLeft: "32px",
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                            pb: "16px",
                          }}
                        >
                          {item.tittle}
                        </Box>
                        <Box sx={{ fontSize: "14px" }}>{item.content}</Box>
                      </Box>
                      <Box
                        sx={{
                          flex: 1,
                          paddingLeft: "20px",
                        }}
                      >
                        <img
                          src={item.img}
                          alt={item.tittle}
                          style={{
                            width: "100%",
                            height: "auto",
                            borderRadius: "24px",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </div>
        )}

        <Box
          sx={{
            pt: "96px",
            "@media (max-width:900px)": {
              pt: "20px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "32px",
              p: "0 140px",
              "@media (max-width:900px)": {
                display: "grid",
                p: "20px",
              },
            }}
          >
            <Box
              sx={{
                width: "50%",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Box
                sx={{
                  color: "#353535",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "16px",
                }}
              >
                Trợ lý Quản lý Cửa hàng The Thanh Coffee
              </Box>
              <Box sx={{ fontSize: "14px", lineHeight: "20px" }}>
                <p>
                  Trong vai trò Trợ lý Quản lý Cửa hàng, bạn sẽ cùng Quản lý Cửa
                  hàng tập trung vào việc duy trì và nâng cao chất lượng dịch vụ
                  nhằm mang đến trải nghiệm tuyệt vời cho khách hàng tại The
                  Thanh Coffee. Nền tảng của chất lượng dịch vụ chính là sự phát
                  triển nhân sự, đặc biệt là việc đào tạo các Trưởng ca, nhằm
                  đảm bảo môi trường làm việc tốt nhất cho toàn bộ nhân viên.
                </p>
                <p>
                  Bạn sẽ đóng vai trò lãnh đạo cho cả đội ngũ nhân viên, bao gồm
                  cả nhân viên bán thời gian, học hỏi và phát triển kỹ năng lãnh
                  đạo thông qua việc đạt được những thành tựu lớn trong hoạt
                  động của cửa hàng. Xây dựng mối quan hệ tin cậy với các đồng
                  nghiệp và tham gia vào các chính sách, kế hoạch của cửa hàng
                  sẽ giúp bạn trải nghiệm và cảm nhận sự phát triển cá nhân và
                  nghề nghiệp.
                </p>
                <p>
                  Với vai trò này, bạn không chỉ đóng góp vào sự thành công của
                  cửa hàng mà còn có cơ hội rèn luyện và nâng cao kỹ năng quản
                  lý, lãnh đạo, cùng với việc tạo ra môi trường làm việc tích
                  cực và hiệu quả cho tất cả các cộng sự.
                </p>
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
              <img
                width={"100%"}
                height={"284px"}
                style={{ objectFit: "cover" }}
                src={phongcachlamviec1}
                alt="Công việc tại cửa hàng"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "32px",
              p: "48px 140px",
              "@media (max-width:900px)": {
                display: "grid",
                p: "20px",
              },
            }}
          >
            <Box
              sx={{
                width: "50%",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Box
                sx={{
                  color: "#353535",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "16px",
                }}
              >
                Quản lý Cửa hàng The Thanh Coffee:
              </Box>
              <Box sx={{ fontSize: "14px", lineHeight: "20px" }}>
                <p>
                  Với vai trò Quản lý Cửa hàng tại The Thanh Coffee, bạn sẽ chịu
                  trách nhiệm phát huy tối đa tiềm năng của các cộng sự, lập kế
                  hoạch kinh doanh hiệu quả nhằm đạt được những kết quả xuất sắc
                  và mang đến trải nghiệm tuyệt vời cho khách hàng. Bạn sẽ tạo
                  ra môi trường làm việc dựa trên Sứ mệnh, Lời hứa và Giá trị
                  của chúng tôi, nơi các cộng sự hợp tác và cùng nhau cung cấp
                  dịch vụ tốt nhất.
                </p>
                <p>
                  Bạn sẽ thực hiện các kế hoạch kinh doanh dựa trên ý tưởng của
                  mình, và thông qua sự tương tác với cộng sự, khách hàng và
                  cộng đồng, bạn sẽ thấy được sự thay đổi tích cực mà chúng ta
                  mang lại cho xã hội mỗi ngày. Đồng thời, bạn sẽ phát triển các
                  cộng sự đa dạng, tận dụng đặc điểm của khu vực để tạo nên
                  những cửa hàng độc đáo và mang đậm dấu ấn riêng.
                </p>
                <p>
                  Bằng cách này, bạn sẽ không chỉ đóng góp vào sự thành công của
                  The Thanh Coffee mà còn nâng cao kỹ năng quản lý và lãnh đạo
                  của bản thân, tạo ra một môi trường làm việc tích cực và hiệu
                  quả cho tất cả các cộng sự.
                </p>
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
              <img
                width={"100%"}
                height={"284px"}
                style={{ objectFit: "cover" }}
                src={phongcachlamviec1}
                alt="Công việc tại cửa hàng"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "32px",
              p: "0 140px 140px",
              "@media (max-width:900px)": {
                display: "grid",
                p: "20px",
                mb: "30px",
              },
            }}
          >
            <Box
              sx={{
                width: "50%",
                "@media (max-width:900px)": { width: "100%" },
              }}
            >
              <Box
                sx={{
                  color: "#353535",
                  fontSize: "30px",
                  fontWeight: "700",
                  pb: "16px",
                }}
              >
                Công việc tại cửa hàng The Thanh Coffee:
              </Box>
              <Box sx={{ fontSize: "14px", lineHeight: "20px" }}>
                <p>
                  Chúng tôi tạo ra môi trường làm việc dựa trên Sứ mệnh và Giá
                  trị của mình, nơi các cộng sự hợp tác cùng nhau để cung cấp
                  dịch vụ tuyệt vời một cách nhất quán. Mỗi khoảnh khắc tại The
                  Thanh đều là cơ hội để chúng tôi kết nối, nâng cao nhận thức
                  và cùng nhau trưởng thành.
                </p>
                <p>
                  Tôi cảm nhận được rằng, những gì mình làm và những nỗ lực của
                  tập thể xung quanh đều mang lại sự thay đổi tích cực cho xã
                  hội mỗi ngày. Bằng cách áp dụng ý tưởng của riêng mình một
                  cách tối ưu và hiệu quả vào hoạt động cửa hàng, chúng tôi hợp
                  tác chặt chẽ với các đối tác, khách hàng và cộng đồng.
                </p>
                <p>
                  Chúng tôi chú trọng phát triển các đối tác đa dạng và tạo ra
                  những cửa hàng độc đáo dựa trên lợi thế địa phương, để mang
                  lại những gì thân thuộc và gần gũi với người Việt. Qua đó,
                  chúng tôi cùng nhau xây dựng và phát triển các kỹ năng quản lý
                  nâng cao, tạo nên không gian lý tưởng cho sự phát triển của
                  từng cá nhân và tập thể. The Thanh Coffee không chỉ là một nơi
                  làm việc, mà còn là nơi để các cộng sự học hỏi, sáng tạo và
                  cùng nhau tiến bộ, góp phần xây dựng một cộng đồng mạnh mẽ và
                  gắn kết.
                </p>
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
              <img
                width={"100%"}
                height={"284px"}
                style={{ objectFit: "cover" }}
                src={phongcachlamviec1}
                alt="Công việc tại cửa hàng"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default WorkStyle;
