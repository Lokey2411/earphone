import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import giatrimachungtoicoitrongdoivoiungvien2 from "../component/img/giatrimachungtoicoitrongdoivoiungvien2.jpg.png";
import baomatdulieu1 from "../component/img/baomatdulieu1.jpg";
import { Link } from "react-router-dom";

const Seriously = () => {
  const ListItems = [
    {
      id: 1,
      img: baomatdulieu1,
      title: "Người sáng Tạo giá trị mới",
      content:
        "Đối mặt với thực tế, đương đầu với thách thức và tận dụng những lợi thế địa phương theo từng thời điểm trong cơ cấu kinh doanh cửa hàng, khúc đẩy thay đổi từ nhiều khía cạnh khác nhau, bao gồm cả dịch vụ và môi trường nơi họ làm việc.",
    },
    {
      id: 2,
      img: baomatdulieu1,
      title: "Người sáng Tạo giá trị mới",
      content:
        "Đối mặt với thực tế, đương đầu với thách thức và tận dụng những lợi thế địa phương theo từng thời điểm trong cơ cấu kinh doanh cửa hàng, khúc đẩy thay đổi từ nhiều khía cạnh khác nhau, bao gồm cả dịch vụ và môi trường nơi họ làm việc.",
    },
    {
      id: 3,
      img: baomatdulieu1,
      title: "Người sáng Tạo giá trị mới",
      content:
        "Đối mặt với thực tế, đương đầu với thách thức và tận dụng những lợi thế địa phương theo từng thời điểm trong cơ cấu kinh doanh cửa hàng, khúc đẩy thay đổi từ nhiều khía cạnh khác nhau, bao gồm cả dịch vụ và môi trường nơi họ làm việc.",
    },
    {
      id: 4,
      img: baomatdulieu1,
      title: "Người sáng Tạo giá trị mới",
      content:
        "Đối mặt với thực tế, đương đầu với thách thức và tận dụng những lợi thế địa phương theo từng thời điểm trong cơ cấu kinh doanh cửa hàng, khúc đẩy thay đổi từ nhiều khía cạnh khác nhau, bao gồm cả dịch vụ và môi trường nơi họ làm việc.",
    },
  ];
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <Navbardesktop />
      <Box
        sx={{
          ...styles.fontSize13,
          pt: "145px",
          display: "flex",
          textAlign: "justify",
        }}
      >
        <Box
          sx={{
            color: "black",
            backgroundSize: "cover",
            p: "246px 704px 242px 140px",
            backgroundPosition: "right ",
            backgroundRepeat: "no-repeat",
            backgroundImage: `linear-gradient(270deg, rgba(230, 238, 234, 0.03) 36.55%, #dad8d4 99.52%), url(${giatrimachungtoicoitrongdoivoiungvien2})`, // Thêm gradient và hình ảnh nền
            "@media (max-width:900px)": {
              p: "20px",
              backgroundPosition: "right center",
              backgroundImage: `linear-gradient(270deg, rgba(230, 238, 234, 0.03) 50%, #dad8d4 99%), url(${giatrimachungtoicoitrongdoivoiungvien2})`, // Thêm gradient và hình ảnh nền
            },
          }}
        >
          <Box
            sx={{
              fontSize: "48px",
              lineHeight: "60px",
              pb: "24px",
              "@media (max-width:900px)": {
                fontSize: "32px",
              },
            }}
          >
            Giá trị mà chúng tôi coi trọng đối với ứng viên
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
            Điều quan trọng nhất đối với The Thanh là sự kết nối nhằm tạo nên sự
            thân mật với khách hàng tại các cửa hàng của mình. Chúng tôi mong
            muốn các cộng sự làm việc tại cửa hàng không chỉ có kỹ năng quản lý
            cửa hàng mà còn là những giá trị mà chúng tôi muốn họ trân trọng,
            mang theo trong mọi hành động, việc làm và cách thức họ làm mọi điều
            cùng nhau.
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#dad8d4",
          p: "128px 140px",
          color: "black",
          "@media (max-width:900px)": {
            p: "50px 20px",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            fontSize: "48px",
            pb: "42px",
            "@media (max-width:900px)": {
              fontSize: "32px",
            },
          }}
        >
          Đối tác sẽ đồng hành cùng chúng tôi là ai?
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            fontSize: "18px",
            lineHeight: "28px",
            boxSizing: "border-box",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 2,
                  textAlign: "justify",
                }}
              >
                Chúng tôi đang tìm kiếm những cộng sự có sự đồng cảm sâu sắc với
                giá trị và văn hoá mà The Thanh tôn trọng, cũng như sẵn sàng
                đóng góp những giá trị lớn hơn trong tương lai. Chúng tôi hy
                vọng có thể đồng hành cùng những ứng viên có chung mục tiêu với
                The Thanh và thích bắt đầu cuộc hành trình với mục tiêu trong
                từng giai đoạn. Mọi người sẽ đồng hành cùng nhau vì điều bản
                thân muốn làm và hỗ trợ nhau trong sự thấu hiểu, biết ơn, trân
                trọng để cùng nhau mang tới cho khách hàng, cộng đồng, môi
                trường những giá trị hoàn thiện nhất có thể. Chúng tôi đang tìm
                kiếm những ứng viên tương lai cùng chung tay để xây dựng cộng
                đồng The Thanh Coffee đa dạng, sáng tạo và phát triển theo cách
                mà mỗi người đều là một phần đóng góp quan trọng của chúng tôi.
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box
                sx={{
                  textAlign: "justify",
                  p: 2,
                }}
              >
                <strong>Dám nghĩ dám làm:</strong> Chúng tôi tìm kiếm những tinh
                thần sẵn sàng đối mặt với thực tế, dám đương đầu với thách thức,
                dám đưa ra những ý tưởng mới để cải thiện chất lượng sản phẩm và
                dịch vụ, giải pháp phù hợp với nhu cầu của khách hàng. Chúng tôi
                mong muốn mang đến sự thoải mái, giá trị trọn vẹn cho khách hàng
                dựa trên tinh thần hỗ trợ và sự thấu hiểu lẫn nhau.{" "}
                <p>
                  <strong>Sáng tạo giá trị khác biệt:</strong> Chúng tôi hy vọng
                  các cộng sự của mình có ý thức trong từng ý nghĩ, hành động để
                  cùng nhau tạo nên những giá trị hiện hữu. Chúng tôi coi trọng
                  những trải nghiệm thoải mái, gần gũi và nâng cao trải nghiệm
                  của khách hàng theo từng thời điểm, bởi nó làm nên sự khác
                  biệt của The Thanh, xuất phát từ những giá trị thật tâm, thấu
                  hiểu địa phương và địa lý Việt Nam.{" "}
                </p>
                <p>
                  <strong>Viết lên câu chuyện của riêng bạn:</strong> Là những
                  người có niềm đam mê với cà phê, chúng tôi trân trọng những
                  câu chuyện được lan tỏa từ đó. Chúng tôi luôn chào đón những
                  người bạn mới có chung niềm đam mê, coi trọng giá trị của
                  khoảnh khắc thường nhật, những điều tự nhiên và những khoảnh
                  khắc ý nghĩa cùng nhau. Mọi nhân viên được khuyến khích sáng
                  tạo, viết lên câu chuyện của riêng mình và ra mở ra cánh cửa
                  tương lai của chúng ta.{" "}
                </p>
                <p>
                  <strong>Ươm mầm cho sự kết nối:</strong> Chúng tôi ưu tiên
                  việc đề xuất các phương pháp, quy trình và cách thức quản lý
                  khả thi để mang lại sự thấu hiểu cho các bên liên quan và tạo
                  môi trường làm việc lành mạnh. Mỗi người đều có vai trò và
                  đóng góp riêng để tạo nên sự thành công chung, đó là sự khẳng
                  định về giá trị của mỗi cá nhân.
                </p>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          p: "128px 140px 96px 140px",
          "@media (max-width:900px)": {
            p: "20px",
          },
        }}
      >
        <Box
          sx={{
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "60px",
            textAlign: "center",
            "@media (max-width:900px)": {
              fontSize: "32px",
              lineHeight: "40px",
            },
          }}
        >
          Khả năng mà chúng tôi coi trọng để đi cùng nhau
        </Box>
        <Box
          sx={{
            fontSize: "20px",
            lineHeight: "36px",
            color: "#5A5A5A",
            pt: "24px",
            pb: "96px",
            textAlign: "center",
            "@media (max-width:900px)": {
              fontSize: "20px",
              pb: "40px",
            },
          }}
        >
          And a subheading describing your site, too
        </Box>

        <Box sx={{ boxSizing: "border-box" }}>
          <Container component="main">
            <Grid container spacing={4}>
              {ListItems.map((item, index) => (
                <Grid item xs={12} sm={6} key={index} sx={{ display: "flex" }}>
                  <Link
                    to={`/gia-tri-chung-toi-coi-trong/${item.id}`}
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      display: "flex",
                      flexGrow: 1,
                    }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        width: "100%",
                        boxShadow: "none",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="345"
                        image={item.img}
                        alt={item.title}
                        style={{ borderRadius: "8px" }}
                      />
                      <CardContent sx={{ p: 0, mt: "24px" }}>
                        <Typography
                          color="#101828"
                          fontSize="24px"
                          fontWeight="600"
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="#475467"
                          fontSize="16px"
                          mt={2}
                          textAlign="justify"
                        >
                          {item.content}
                        </Typography>
                        <Box
                          sx={{
                            textAlign: "center",
                            fontSize: "20px",
                            fontWeight: "500",
                          }}
                        >
                          Xem Thêm {"->"}
                        </Box>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <Box
        sx={{
          p: "96px 140px 196px 140px",
          "@media (max-width:900px)": {
            p: "20px",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            fontSize: "48px",
            "@media (max-width:900px)": {
              fontSize: "32px",
            },
          }}
        >
          Lời hứa
        </Box>
        <Box
          sx={{
            fontSize: "24px",
            lineHeight: "36px",
            fontWeight: "500",
            fontStyle: "italic",
            textAlign: "justify",
            "@media (max-width:900px)": {
              fontSize: "16px",
            },
          }}
        >
          <p>
            Đồng hành suốt chặng đường và trân trọng những câu chuyện của riêng
            bạn.
          </p>
          <p>
            The Thanh chứng minh sự thành công theo từng giai đoạn của thương
            hiệu - liên tục hướng đến một môi trường làm việc, kết nối đầy cơ
            hội, tiềm năng cho sự phát triển và sự nghiệp của mỗi cá nhân. Chúng
            tôi không ngừng nỗ lực để tạo ra những môi trường làm việc trên toàn
            cầu, nơi mà mọi người đều được chào đón và cảm thấy mình thuộc về.
            The Thanh luôn khuyến khích và tôn trọng sự đa dạng trong đội ngũ
            cộng sự của mình - sự đa dạng về đặc điểm cá nhân, quốc gia, văn hóa
            và quan điểm sẽ là nguồn động viên và sức mạnh cho sự phát triển bền
            vững của The Thanh.
          </p>
          <p>
            Chúng tôi hiểu rằng mỗi người đều có những khó khăn dù trong công
            việc hay cuộc sống và chúng ta sẽ đồng hành và hỗ trợ lẫn nhau để có
            thể vượt qua nó. Chúng tôi cam kết tạo ra một môi trường làm việc
            tích cực, nơi bạn có thể cảm thấy an toàn, được tôn trọng và đánh
            giá cao. Chúng tôi tin rằng, khi mỗi người cảm thấy mình được hỗ trợ
            và thuộc về, họ có thể làm việc hiệu quả hơn và tạo ra giá trị lớn
            hơn cho cả bản thân và thương hiệu.
          </p>
          <p>
            Chúng tôi trân trọng những câu chuyện và chúng ta sẽ tìm thấy ý
            nghĩa trong việc mình làm bằng việc để tâm tới từng cách thức và quá
            trình. Đó chính là lời hứa của chúng tôi - một lời hứa về sự hỗ trợ,
            sự đồng lòng và sự gắn kết. Hãy cùng chúng tôi tạo nên những giá trị
            trọn vẹn nhất mà mỗi người đều tự hào và cảm thấy mình thuộc về.
          </p>
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default Seriously;
