import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Dialog,
  DialogContent,
  AccordionDetails,
  AccordionSummary,
  Accordion,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import { styles } from "../../styles";
import Footer from "../../component/layout/Footer";
import loithe1 from "../../component/img/loithe1.jpg";
import loithe2 from "../../component/img/loithe2.jpg";
import loithe3 from "../../component/img/loithe3.jpg";
import loithe5 from "../../component/img/loithe5.jpg";
import nhuongquyenslide1 from "../../component/img/nhuongquyenslide1.jpg";
import mohinhcuahang1 from "../../component/img/mohinhcuahang1.jpg";
import mohinhcuahang2 from "../../component/img/mohinhcuahang2.jpg";
import mohinhcuahang3 from "../../component/img/mohinhcuahang3.jpg";
import mohinhcuahang4 from "../../component/img/mohinhcuahang4.jpg";
import taisao1 from "../../component/img/taisao1.jpg";
import taisao2 from "../../component/img/taisao2.jpg";
import taisao3 from "../../component/img/taisao3.jpg";
import nhuongquyenbackground from "../../component/img/nhuongquyenbackground.jpg";
import dangkynhuongquyen from "../../component/img/dangkynhuongquyen.jpg";
import bg1nhuongquyen from "../../component/img/bg1nhuongquyen.jpg";
import ArrowDown from "../../component/svg/icon/ArrowDown";

// const slides1 = [
//   {
//     src: bg1nhuongquyen,
//     title: "Nhượng quyền tại The Thanh Coffee",
//     content:
//       "Chào mừng bạn tới với trang nhượng quyền Thương hiệu The Thanh. Khám phá ngay các cơ hội thú vị để tạo ra lợi nhuận bền vững và tìm hiểu cách trở thành bên nhận nhượng quyền The Thanh.",
//     link1: "/nhuong-quyen/dien-thong-tin",
//     textlink1: "ĐĂNG KÝ NGAY",
//   },
// ];

const slides2 = [
  {
    src: mohinhcuahang1,
    tittle: "ĐỒNG",
    price: "500.000.000 VNĐ",
  },
  {
    src: mohinhcuahang2,
    tittle: "BẠC",
    price: "700.000.000 VNĐ",
  },
  {
    src: mohinhcuahang3,
    tittle: "VÀNG",
    price: "1.300.000.000 VNĐ",
  },
  {
    src: mohinhcuahang4,
    tittle: "KIM CƯƠNG",
    price: "2.500.000.000 VNĐ",
  },
];

const data = [
  {
    tittle: "Sự cần thiết hàng ngày",
    content:
      "Bằng cách đặt ra các mức giá cạnh tranh và mở rộng sự hiện diện của chúng tôi đến các địa điểm thuận tiện, chúng tôi đảm bảo cà phê đặc sản là một phần thiết yếu và dễ tiếp cận trong thói quen hàng ngày.",
    image: loithe1,
  },
  {
    tittle: "Cà phê đặc sản",
    content:
      "Dành riêng cho nghệ thuật cà phê, chúng tôi chỉ tìm kiếm và rang những hạt cà phê ngon nhất. Lựa chọn của chúng tôi phản ánh cam kết của chúng tôi về trải nghiệm cà phê nhất quán và đặc biệt trên tất cả các cửa hàng.",
    image: loithe2,
  },
  {
    tittle: "Chế tạo và giao hàng xuất sắc",
    content:
      "Với việc tập trung vào tính nhất quán và hiệu quả, chúng tôi hợp lý hóa hoạt động của mình để đảm bảo mọi trải nghiệm của khách hàng đều phản ánh các tiêu chuẩn cao của thương hiệu chúng tôi, từ hạt cà phê cho tới đến các loại trà cung cấp.",
    image: loithe3,
  },
  {
    tittle: "Mô hình kinh doanh đổi mới",
    content:
      "Mô hình của chúng tôi tận dụng công nghệ để đạt hiệu quả hoạt động, kiểm soát chất lượng và thu hút khách hàng, thúc đẩy tăng trưởng và tính bền vững cho các đối tác của chúng tôi.",
    image: loithe5,
  },
];

const questions = [
  {
    title:
      "Tôi muốn trở thành bên nhượng quyền của Cà Phê The Thanh tại một tỉnh thành mới, tôi phải nộp đơn như thế nào?",
    answer:
      "Nhấp vào nút THAM GIA THE THANH  trên trang web nhượng quyền này để bắt đầu quá trình nộp đơn. Đừng ngại, chúng tôi mong nhận được phản hồi từ bạn và chúng tôi sẽ luôn hết mình hỗ trợ bạn.",
  },
  {
    title:
      "Phí nhượng quyền để nhận được Thỏa thuận Bản quyền Thương hiệu là bao nhiêu?",
    answer:
      "Phí nhượng quyền từ 500,000,000 VNĐ cho một Cửa hàng Tiêu chuẩn và 300,000,000 VNĐ cho Cửa hàng Không Tiêu chuẩn, trong đó Thỏa thuận Nhượng quyền được cấp trong Thời hạn 10 năm cho một địa điểm cụ thể.",
  },
  {
    title: "Mức phí bản quyền và đóng góp quảng cáo là bao nhiêu?",
    answer:
      "Phí bản quyền thay đổi từ 4,5% đến 6,0% doanh số tùy thuộc vào loại hợp đồng, và chi phí đóng góp quảng cáo hiện là 4% doanh số",
  },
  {
    title:
      "Kích thước điển hình của một cửa hàng Cà Phê The Thanh là bao nhiêu và chi phí xây dựng một nhà hàng như vậy ở Việt Nam là bao nhiêu?",
    answer: `<p dir="ltr">C&agrave; Ph&ecirc; The Thanh cung cấp nhiều m&ocirc; h&igrave;nh ph&aacute;t triển để phục vụ kh&aacute;ch h&agrave;ng tr&ecirc;n nhiều định dạng cửa h&agrave;ng kh&aacute;c nhau, bao gồm nhưng kh&ocirc;ng giới hạn ở Cửa h&agrave;ng kh&ocirc;ng ti&ecirc;u chuẩn v&agrave; Cửa h&agrave;ng Ti&ecirc;u chuẩn:&nbsp;</p>
<p dir="ltr"><strong>Cửa h&agrave;ng kh&ocirc;ng ti&ecirc;u chuẩn:&nbsp;</strong></p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Bao gồm Ki ốt v&agrave; Xe đẩy d&agrave;nh cho c&aacute;c cơ hội ph&aacute;t triển cụ thể với chi ph&iacute; từ 300,000,000 VNĐ&nbsp;</p>
</li>
</ul>
<p dir="ltr"><strong>Cửa h&agrave;ng ti&ecirc;u chuẩn:&nbsp;</strong></p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Cửa h&agrave;ng Đồng với quầy Foodcourt tự phục vụ với diện t&iacute;ch ti&ecirc;u chuẩn từ 30m2 với chi ph&iacute; từ 500,000,000 VNĐ</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Cửa h&agrave;ng Bạc với tuỳ chọn th&ecirc;m chỗ ngồi vỉa h&egrave; hoặc cho việc mua mang đi thuận lợi với diện t&iacute;ch ti&ecirc;u chuẩn từ 60m2 với chi ph&iacute; từ 700,0000,000 VNĐ</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Cửa h&agrave;ng V&agrave;ng với quầy bar pha chế rộng ti&ecirc;u chuẩn đa khu vực, v&agrave; c&aacute;c khu vực chỗ ngồi tuỳ chọn theo vị tr&iacute;/ địa điểm tại địa phương với diện t&iacute;ch ti&ecirc;u chuẩn từ 90m2 v&agrave; c&oacute; chi ph&iacute; x&acirc;y dựng từ 1,300,000,000 VNĐ</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Cửa h&agrave;ng Kim Cương với quầy bar lớn, đầy đủ khu vực chỗ ngồi, ph&ograve;ng họp ti&ecirc;u chuẩn k&egrave;m theo c&aacute;c tiện &iacute;ch mở rộng ph&acirc;n chia theo từng khu vực đa dạng theo nhu cầu chủ sở hữu với điện t&iacute;ch ti&ecirc;u chuẩn từ 150m2 v&agrave; c&oacute; chi ph&iacute; x&acirc;y dựng từ 2,500,000,000 VNĐ&nbsp;</p>
</li>
</ul>
<p dir="ltr"><strong>Xem th&ecirc;m T&agrave;i liệu C&ocirc;ng bố nhượng quyền Thương mại của ch&uacute;ng t&ocirc;i để biết th&ecirc;m th&ocirc;ng tin v&agrave; tuy&ecirc;n bố miễn trừ tr&aacute;ch nhiệm.</strong></p>
<p>&nbsp;</p>`,
  },
  {
    title: "Điều gì làm cho Cà Phê The Thanh trở nên đặc biệt?",
    answer: `<p dir="ltr">Ch&uacute;ng t&ocirc;i l&agrave; thương hiệu qu&aacute;n c&agrave; ph&ecirc; mang tới trải nghiệm tuyệt vời cho kh&aacute;ch h&agrave;ng v&agrave; đối t&aacute;c tr&ecirc;n c&aacute;c dịch vụ m&agrave; ch&uacute;ng t&ocirc;i cung cấp.\</p>
<p dir="ltr"><strong>Ch&uacute;ng t&ocirc;i cung cấp c&agrave; ph&ecirc; v&agrave; c&aacute;c sản phẩm F&amp;B kh&aacute;c c&oacute; chất lượng cao, gi&aacute; cả phải chăng v&agrave; sự tiện lợi cao cho kh&aacute;ch h&agrave;ng.</strong></p>
<p dir="ltr">Bằng c&aacute;ch đặt ra c&aacute;c mức gi&aacute; cạnh tranh chỉ từ 28,000 VNĐ v&agrave; mở rộng sự hiện diện của ch&uacute;ng t&ocirc;i đến c&aacute;c địa điểm thuận tiện, ch&uacute;ng t&ocirc;i đảm bảo c&agrave; ph&ecirc; đặc sản l&agrave; một phần thiết yếu v&agrave; dễ tiếp cận trong th&oacute;i quen h&agrave;ng ng&agrave;y.&nbsp;</p>
<p dir="ltr">Ch&uacute;ng t&ocirc;i đ&atilde; v&agrave; đang:&nbsp;</p>
<ul>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Ch&uacute;ng t&ocirc;i thu mua hạt c&agrave; ph&ecirc; ngon nhất, chuỗi cung ứng từ c&aacute;c nh&agrave; cung cấp h&agrave;ng đầu tr&ecirc;n thế giới về cung cấp bao b&igrave; th&acirc;n thiện với m&ocirc;i trường v&agrave; trang thiết bị chuy&ecirc;n dụng ti&ecirc;u chuẩn thế giới.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Ch&uacute;ng t&ocirc;i minh bạch trong từng kh&acirc;u v&agrave; chặt chẽ trong việc kiểm nghiệm để mang tới sản phẩm chất lượng cao đồng thời tự chủ trong chuỗi hoạt động vận h&agrave;nh để mang tới gi&aacute; cả cạnh tranh nhất cho đối t&aacute;c v&agrave; nhiều lợi &iacute;ch nhất cho người ti&ecirc;u d&ugrave;ng.</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">Với việc tập trung v&agrave;o t&iacute;nh nhất qu&aacute;n v&agrave; hiệu quả, ch&uacute;ng t&ocirc;i hợp l&yacute; h&oacute;a hoạt động của m&igrave;nh để đảm bảo mọi trải nghiệm của kh&aacute;ch h&agrave;ng đều phản &aacute;nh c&aacute;c ti&ecirc;u chuẩn cao của thương hiệu ch&uacute;ng t&ocirc;i, từ hạt c&agrave; ph&ecirc; cho tới đến c&aacute;c loại tr&agrave; cung cấp.&nbsp;</p>
</li>
<li dir="ltr" aria-level="1">
<p dir="ltr" role="presentation">M&ocirc; h&igrave;nh của ch&uacute;ng t&ocirc;i tận dụng c&ocirc;ng nghệ để đạt hiệu quả hoạt động, kiểm so&aacute;t chất lượng v&agrave; thu h&uacute;t kh&aacute;ch h&agrave;ng, th&uacute;c đẩy tăng trưởng v&agrave; t&iacute;nh bền vững cho c&aacute;c đối t&aacute;c của ch&uacute;ng t&ocirc;i. Từ việc hỗ trợ Tuyển dụng, Marketing cho tới c&aacute;c kh&acirc;u trong Vận h&agrave;nh v&agrave; duy tr&igrave; chất lượng dịch vụ ổn định để đạt được sự tăng trưởng như k&igrave; vọng.&nbsp;</p>
</li>
</ul>
<p dir="ltr"><strong>Ch&uacute;ng t&ocirc;i đang ph&aacute;t triển kh&aacute;i niệm ti&ecirc;u thụ c&agrave; ph&ecirc; để tạo ra loại c&agrave; ph&ecirc; đặc sản c&oacute; gi&aacute; cả phải chăng cho mọi người, phục vụ h&agrave;ng ng&agrave;y.</strong></p>
<p dir="ltr">Ước mơ của ch&uacute;ng t&ocirc;i lu&ocirc;n l&agrave; cung cấp c&agrave; ph&ecirc; đặc sản như một <em><strong>nhu cầu thiết yếu h&agrave;ng ng&agrave;y</strong></em> cho tất cả người Việt Nam thưởng thức.&nbsp;</p>
<p dir="ltr">Ch&uacute;ng t&ocirc;i l&agrave;m tất cả mọi điều c&oacute; thể để mọi người c&oacute; được đồ uống v&agrave; trải nghiệm The Thanh tuyệt vời với mức gi&aacute; tốt nhất. Ch&uacute;ng t&ocirc;i hy vọng bạn c&acirc;n nhắc trở th&agrave;nh một phần trong gia đ&igrave;nh của ch&uacute;ng t&ocirc;i để c&ugrave;ng nhau tạo ra những điều tuyệt vời mỗi ng&agrave;y cho bạn v&agrave; cộng đồng địa phương!</p>`,
  },
];
const Desktop = () => {
  // const slider = React.useRef(null);
  const slider2 = React.useRef(null);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(data[0]);
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   appendDots: (dots) => (
  //     <Box position="absolute" bottom="10px" width="100%">
  //       <ul style={{ margin: "0px" }}> {dots} </ul>
  //     </Box>
  //   ),
  //   customPaging: (i) => (
  //     <div
  //       style={{
  //         width: "10px",
  //         height: "10px",
  //         borderRadius: "50%",
  //         backgroundColor: "white",
  //       }}
  //     />
  //   ),
  // };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <NavBar />
      <Layout.MainBg>
        <Box sx={{ pt: "auto" }}>
          {/* <div id="franchies-slider-1">
            <Box
              position="relative"
              width="100%"
              margin="auto"
              boxSizing="border-box"
            >
              <Slider ref={slider} {...settings}>
                {slides1.map((slide, index) => (
                  <Box key={index} position="relative">
                    <img
                      src={slide.src}
                      alt={`Slide ${index}`}
                      style={{
                        width: "100%",
                        height: "550px",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      position="absolute"
                      top="0"
                      maxWidth="100%"
                      height="100%"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      paddingRight="160px"
                      left="160px"
                      color="white"
                      gap="20px"
                    >
                      <Box sx={{ fontSize: "40px", fontWeight: "900" }}>
                        {slide.title}
                      </Box>
                      <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                        {slide.content}
                      </Box>
                      <Box
                        sx={{
                          background: "black",
                          borderRadius: "23px",
                          display: "inline-block",
                          p: "13px 21px",
                          fontSize: "16px",
                          fontWeight: "700",
                          width: "fit-content",
                        }}
                      >
                        <a href={slide.link1}>{slide.textlink1}</a>
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>{slide.text}</Box>
                      <Box
                        sx={{ fontSize: "14px", textDecoration: "underline" }}
                      >
                        <a href={slide.link2}>{slide.textlink2}</a>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Slider>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  bottom: 0,
                  left: "60px",
                  cursor: "poiter",
                }}
                onClick={() => slider?.current?.slickPrev()}
              >
                <svg
                  width="49"
                  height="87"
                  viewBox="0 0 49 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.1875 86.9167L-0.729187 43.8958L42.1875 0.979156L48.9583 7.74999L12.8125 43.8958L48.9583 80.0417L42.1875 86.9167Z"
                    fill="white"
                  />
                </svg>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  bottom: 0,
                  cursor: "poiter",
                  right: "60px",
                }}
                onClick={() => slider?.current?.slickNext()}
              >
                <svg
                  width="49"
                  height="87"
                  viewBox="0 0 49 87"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.81259 0.0833245L49.7293 43.1042L6.81258 86.0208L0.0417486 79.25L36.1876 43.1042L0.041755 6.95832L6.81259 0.0833245Z"
                    fill="white"
                  />
                </svg>
              </Box>
            </Box>
          </div> */}
          <Box sx={{ position: "relative" }}>
            <Box sx={{ ...styles.centerFlex }}>
              <img
                width={"100%"}
                height={"600px"}
                src={bg1nhuongquyen}
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
                opacity: "0.4",
              }}
            ></Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translate(0, -50%)",
                left: 0,
                right: 0,
                textAlign: "center",
                color: "white",
                padding: "0px 60px",
              }}
            >
              <Box
                sx={{
                  fontSize: "55px",
                  fontWeight: "900",
                  "@media (max-width:900px)": {
                    fontSize: "35px",
                  },
                }}
              >
                Nhượng quyền Thương hiệu Cà Phê The Thanh
              </Box>
              <Box
                sx={{
                  fontSize: "24px",
                  fontWeight: "600",
                  p: "30px 0",
                  "@media (max-width:900px)": {
                    fontSize: "20px",
                  },
                }}
              >
                Chào mừng bạn tới với trang điền thông tin Nhượng Quyền cà phê
                The Thanh, vui lòng điền form bên dưới
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              ...styles.fontSize13,
              backgroundColor: "#F5F5F5",
              fontFamily: "Inter",
              width: "100%",
              height: "60px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              textAlign: "center",
              justifyItems: "center",
              fontSize: "20px",
              textTransform: "uppercase",
              fontWeight: "500",
              position: "sticky",
              positon: "-webkit-sticky",
              borderBottom: "1px solid black",
              top: "80px",
              zIndex: "1",
            }}
          >
            <a href="#tai-sao" rel="noopener noreferrer">
              <Box>| tại sao?</Box>{" "}
            </a>
            <a href="#nhuong-quyen-thuong-mai" rel="noopener noreferrer">
              <Box>MÔ HÌNH CỬA HÀNG</Box>
            </a>
            <a href="#tai-sao-nen-tham-gia" rel="noopener noreferrer">
              <Box>TẠI SAO NÊN THAM GIA</Box>
            </a>
            <a href="#loi-the-cua-chung-toi" rel="noopener noreferrer">
              <Box>LỢI THẾ CỦA CHÚNG TÔI</Box>
            </a>
            <a href="#danh-sach-yeu-cau" rel="noopener noreferrer">
              <Box>DANH SÁCH YÊU CẦU</Box>
            </a>
            <a href="#faq" rel="noopener noreferrer">
              <Box>FAQ |</Box>
            </a>
          </Box>
          <Box
            sx={{
              background: "#F3F1EC",
              textAlign: "center",
              color: "black",
            }}
          >
            <div id="tai-sao">
              <Box sx={{ pt: "180px", fontSize: "40px" }}>
                LÝ DO HÀNG ĐẦU NÊN NHƯỢNG QUYỀN VỚI...
              </Box>
              <Box
                sx={{
                  pt: "30px",
                  pb: "10px",
                  fontSize: "24px",
                }}
              >
                THE
              </Box>
              <Box>
                <svg
                  width="378"
                  height="36"
                  viewBox="0 0 378 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28.7014 1.1304V10.323H27.8565C27.35 8.25023 26.8439 6.71807 26.1686 5.72672C25.5777 4.8255 24.7332 4.10461 23.6358 3.56388C23.0449 3.29351 22.031 3.11338 20.5116 3.11338H18.1498V29.2485C18.1498 30.9608 18.2324 32.0427 18.4013 32.4933C18.5701 32.9439 18.9087 33.3045 19.4152 33.6649C19.9217 34.0254 20.6814 34.1155 21.5255 34.1155H22.5374V35.0165H5.90835V34.1155H6.92229C7.85083 34.1155 8.61063 33.9352 9.11711 33.5747C9.53917 33.3044 9.87567 32.9438 10.0445 32.4031C10.2133 32.0426 10.298 30.9608 10.298 29.2485V3.11338H8.01867C5.90835 3.11338 4.30616 3.56375 3.37762 4.55509C2.02702 5.90692 1.18248 7.79962 0.844829 10.323H-0.00012207V1.1304H28.7014Z"
                    fill="black"
                  />
                  <path
                    d="M43.5585 18.7044V29.1588C43.5585 30.8712 43.6411 31.9525 43.8099 32.4031C43.9787 32.8537 44.3174 33.2143 44.8238 33.5747C45.3303 33.9352 46.09 34.0252 46.9342 34.0252H47.946V34.9262H31.4015V34.0252H32.4154C33.344 34.0252 34.1038 33.845 34.6102 33.4845C35.0323 33.2142 35.2844 32.8536 35.5376 32.3129C35.7065 31.9524 35.7911 30.8712 35.7911 29.1588V6.89836C35.7911 5.18604 35.7065 4.1047 35.5376 3.65409C35.3688 3.20348 35.0322 2.84294 34.5257 2.48246C34.0193 2.12197 33.2596 2.03195 32.4154 2.03195H31.4015V1.1304H47.946V2.03195H46.9342C46.0056 2.03195 45.2458 2.21218 44.7394 2.57267C44.3173 2.84303 43.9787 3.20357 43.8099 3.7443C43.6411 4.10479 43.5585 5.18604 43.5585 6.89836V16.4513H54.784V6.89836C54.784 5.18604 54.6993 4.1047 54.5305 3.65409C54.3617 3.20348 54.0251 2.84294 53.5186 2.48246C53.0121 2.12197 52.2524 2.03195 51.4083 2.03195H50.3943V1.1304H66.9389V2.03195H65.927C64.9985 2.03195 64.2387 2.21218 63.7322 2.57267C63.3101 2.84303 62.9716 3.20357 62.8028 3.7443C62.6339 4.10479 62.5513 5.18604 62.5513 6.89836V29.1588C62.5513 30.8712 62.6339 31.9525 62.8028 32.4031C62.9716 32.8537 63.3102 33.2143 63.8167 33.5747C64.3232 33.9352 65.0829 34.0252 65.927 34.0252H66.9389V34.9262H50.3943V34.0252H51.4083C52.3368 34.0252 53.0966 33.845 53.6031 33.4845C54.0252 33.2142 54.3617 32.8536 54.5305 32.3129C54.6993 31.9524 54.784 30.8712 54.784 29.1588V18.7044H43.5585Z"
                    fill="black"
                  />
                  <path
                    d="M87.6214 25.2824H76.3939L75.044 28.6168C74.622 29.6983 74.3681 30.6 74.3681 31.321C74.3681 32.2222 74.7047 32.943 75.4644 33.3936C75.8865 33.664 76.9004 33.8443 78.5887 34.0245V34.9255H68.0371V34.0245C69.1345 33.8443 70.1481 33.3037 70.8234 32.4926C71.5831 31.6815 72.4257 29.9691 73.5231 27.3556L84.8351 0.318878H85.2576L96.6521 28.0761C97.7495 30.6897 98.6786 32.4024 99.3539 33.0333C99.8604 33.574 100.62 33.8442 101.633 33.9343V34.8353H86.2695V33.9343H86.861C88.1272 33.9343 88.9718 33.7541 89.4783 33.3936C89.8159 33.1232 89.9852 32.7627 89.9852 32.222C89.9852 31.9516 89.9007 31.5913 89.8162 31.321C89.8162 31.1407 89.5623 30.5097 89.1403 29.4282L87.6214 25.2824ZM86.7765 23.4804L82.0489 11.8542L77.1543 23.4804H86.7765Z"
                    fill="black"
                  />
                  <path
                    d="M114.126 1.1304L129.743 22.129V7.61949C129.743 5.54668 129.489 4.19465 128.898 3.47367C128.139 2.48232 126.873 2.03195 125.1 2.03195V1.1304H135.567V2.03195C134.217 2.2122 133.287 2.48217 132.865 2.75254C132.443 3.0229 132.022 3.56394 131.769 4.1948C131.516 4.82566 131.347 5.99729 131.347 7.61949V35.8278H130.586L109.145 7.61949V29.1588C109.145 31.1415 109.568 32.4027 110.412 33.1237C111.256 33.8447 112.184 34.1155 113.281 34.1155H114.042V35.0165H102.814V34.1155C104.587 34.1155 105.77 33.7549 106.445 32.9438C107.12 32.2228 107.457 30.9613 107.457 29.1588V5.27622L106.783 4.37522C106.108 3.474 105.515 2.84303 105.009 2.57267C104.502 2.3023 103.743 2.12216 102.814 2.12216V1.22061H114.126V1.1304Z"
                    fill="black"
                  />
                  <path
                    d="M149.917 18.7044V29.1588C149.917 30.8712 150.001 31.9525 150.17 32.4031C150.339 32.8537 150.678 33.2143 151.184 33.5747C151.691 33.9352 152.45 34.0252 153.294 34.0252H154.306V34.9262H137.762V34.0252H138.774C139.702 34.0252 140.462 33.845 140.968 33.4845C141.39 33.2142 141.729 32.8536 141.898 32.3129C142.067 31.9524 142.151 30.8712 142.151 29.1588V6.89836C142.151 5.18604 142.067 4.1047 141.898 3.65409C141.729 3.20348 141.39 2.84294 140.884 2.48246C140.377 2.12197 139.618 2.03195 138.774 2.03195H137.762V1.1304H154.306V2.03195H153.294C152.366 2.03195 151.606 2.21218 151.1 2.57267C150.678 2.84303 150.339 3.20357 150.17 3.7443C150.001 4.10479 149.917 5.18604 149.917 6.89836V16.4513H161.144V6.89836C161.144 5.18604 161.06 4.1047 160.891 3.65409C160.722 3.20348 160.383 2.84294 159.877 2.48246C159.37 2.12197 158.611 2.03195 157.766 2.03195H156.755V1.1304H173.299V2.03195H172.287C171.359 2.03195 170.599 2.21218 170.092 2.57267C169.67 2.84303 169.332 3.20357 169.163 3.7443C168.994 4.10479 168.91 5.18604 168.91 6.89836V29.1588C168.91 30.8712 168.994 31.9525 169.163 32.4031C169.332 32.8537 169.67 33.2143 170.177 33.5747C170.683 33.9352 171.443 34.0252 172.287 34.0252H173.299V34.9262H156.755V34.0252H157.766C158.695 34.0252 159.455 33.845 159.961 33.4845C160.383 33.2142 160.722 32.8536 160.891 32.3129C161.06 31.9524 161.144 30.8712 161.144 29.1588V18.7044H149.917Z"
                    fill="black"
                  />
                  <path
                    d="M217.954 0.319367V12.0352H217.025C216.349 8.97099 215.084 6.62755 213.227 5.00535C211.37 3.38315 209.259 2.57242 206.896 2.57242C204.954 2.57242 203.098 3.20339 201.41 4.37498C199.721 5.63669 198.538 7.16848 197.778 9.15117C196.766 11.6746 196.344 14.4683 196.344 17.5325C196.344 20.5966 196.683 23.3001 197.443 25.8236C198.118 28.347 199.299 30.1495 200.818 31.5013C202.338 32.763 204.363 33.3941 206.727 33.3941C208.753 33.3941 210.526 32.9437 212.215 31.9524C213.903 31.0511 215.59 29.4287 217.447 27.1756V30.0596C215.675 32.0423 213.818 33.4841 211.877 34.3853C209.935 35.2865 207.74 35.7374 205.123 35.7374C201.747 35.7374 198.707 35.0165 196.091 33.5745C193.474 32.1325 191.448 30.0597 190.013 27.356C188.578 24.6524 187.903 21.7683 187.903 18.7041C187.903 15.4597 188.663 12.3954 190.267 9.51146C191.87 6.62755 193.981 4.37449 196.682 2.75229C199.383 1.13009 202.253 0.319367 205.208 0.319367C207.403 0.319367 209.767 0.859946 212.299 1.85129C213.734 2.48215 214.661 2.75229 214.999 2.75229C215.505 2.75229 215.929 2.57253 216.266 2.12192C216.604 1.76143 216.856 1.13038 216.94 0.229156L217.954 0.319367Z"
                    fill="black"
                  />
                  <path
                    d="M239.057 0.588678C244.122 0.408434 248.174 1.94069 251.381 5.27521C254.504 8.60974 256.109 12.8456 256.109 17.8023C256.109 22.1282 254.926 25.9134 252.562 29.1578C249.439 33.4837 245.051 35.6464 239.395 35.6464C233.655 35.6464 229.265 33.5735 226.142 29.4279C223.694 26.1835 222.428 22.3085 222.428 17.8023C222.428 12.7555 224.031 8.60974 227.238 5.27521C230.446 2.03081 234.415 0.408434 239.057 0.588678ZM239.395 2.21081C236.525 2.21081 234.33 3.83328 232.811 6.98756C231.545 9.6011 230.954 13.296 230.954 18.1626C230.954 23.9305 231.881 28.166 233.823 30.9598C235.173 32.8524 237.032 33.8438 239.395 33.8438C240.999 33.8438 242.35 33.3931 243.447 32.582C244.798 31.5005 245.894 29.7887 246.654 27.4455C247.413 25.1023 247.837 22.0381 247.837 18.3431C247.837 13.8369 247.413 10.502 246.654 8.33906C245.894 6.086 244.882 4.5543 243.7 3.65308C242.35 2.66173 240.915 2.21081 239.395 2.21081Z"
                    fill="black"
                  />
                  <path
                    d="M270.965 3.0228V16.9014H271.893C273.328 16.9014 274.427 16.7211 275.355 16.2705C276.199 15.8199 276.959 15.0989 277.634 14.0175C278.225 12.936 278.646 11.4942 278.815 9.69176H279.66V26.725H278.815C278.478 23.4806 277.718 21.4077 276.367 20.4163C275.016 19.425 273.581 18.8844 271.893 18.8844H270.965V29.2481C270.965 30.9605 271.05 32.0423 271.219 32.493C271.388 32.9436 271.724 33.3041 272.231 33.6646C272.737 34.0251 273.497 34.1151 274.341 34.1151H275.355V35.0161H258.811V34.1151H259.822C200.751 34.1151 261.511 33.9349 262.017 33.5744C262.439 33.304 262.693 32.9435 262.947 32.4027C263.116 32.0423 263.198 30.9605 263.198 29.2481V6.9882C263.198 5.27588 263.116 4.19454 262.947 3.74393C262.778 3.29332 262.439 2.93279 261.933 2.5723C261.426 2.21181 200.667 2.1218 259.822 2.1218H258.811V1.22025H285.569V10.9536H284.639C284.386 8.70055 283.88 6.98825 282.951 5.90678C282.023 4.82531 280.757 4.01412 279.069 3.56351C278.14 3.29315 276.367 3.20322 273.919 3.20322L270.965 3.0228Z"
                    fill="black"
                  />
                  <path
                    d="M300.256 3.0228V16.9014H301.184C302.619 16.9014 303.718 16.7211 304.646 16.2705C305.575 15.8199 306.25 15.0989 306.925 14.0175C307.601 12.936 307.937 11.4942 308.106 9.69176H308.951V26.725H308.106C307.853 23.4806 307.009 21.4077 305.658 20.4163C304.307 19.425 302.872 18.8844 301.184 18.8844H300.256V29.2481C300.256 30.9605 300.341 32.0423 300.51 32.493C300.679 32.9436 301.015 33.3041 301.522 33.6646C302.028 34.0251 302.788 34.1151 303.632 34.1151H304.646V35.0161H288.102V34.1151H289.113C290.042 34.1151 290.802 33.9349 291.308 33.5744C291.73 33.304 292.069 32.9435 292.238 32.4027C292.407 32.0423 292.491 30.9605 292.491 29.2481V6.9882C292.491 5.27588 292.407 4.19454 292.238 3.74393C292.069 3.29332 291.73 2.93279 291.224 2.5723C290.717 2.21181 289.958 2.1218 289.113 2.1218H288.102V1.22025H314.86V10.9536H313.93C313.677 8.70055 313.171 6.98825 312.242 5.90678C311.314 4.82531 310.048 4.01412 308.36 3.56351C307.431 3.29315 305.658 3.20322 303.21 3.20322L300.256 3.0228Z"
                    fill="black"
                  />
                  <path
                    d="M329.378 3.02317V16.8116H329.97C331.996 16.8116 333.431 16.181 334.359 14.8292C335.288 13.4773 335.879 11.4949 336.132 8.88133H336.975V26.6352H336.132C335.963 24.7426 335.54 23.1201 334.949 21.8584C334.358 20.5967 333.683 19.7859 332.838 19.3353C332.079 18.8847 330.898 18.7044 329.378 18.7044V28.2573C329.378 30.1499 329.463 31.2314 329.632 31.682C329.801 32.1326 330.055 32.4028 330.477 32.6732C330.899 32.9436 331.574 33.034 332.418 33.034H334.275C337.229 33.034 339.592 32.3126 341.364 30.8706C343.137 29.4287 344.405 27.1757 345.249 24.2017H346.092L344.658 34.9262H317.223V34.0252H318.235C319.164 34.0252 319.924 33.845 320.43 33.4845C320.852 33.2142 321.106 32.8536 321.36 32.3129C321.528 31.9524 321.613 30.8712 321.613 29.1588V6.89836C321.613 5.36628 321.613 4.46508 321.529 4.10459C321.36 3.56386 321.106 3.11303 320.684 2.75254C320.093 2.30192 319.248 2.03195 318.235 2.03195H317.223V1.1304H343.728V11.1344H342.885C342.463 8.70109 341.788 6.89849 340.944 5.90715C340.1 4.82568 339.001 4.01449 337.482 3.56388C336.637 3.29351 334.951 3.11338 332.587 3.11338H329.378V3.02317Z"
                    fill="black"
                  />
                  <path
                    d="M361.287 3.02317V16.8116H361.878C363.904 16.8116 365.339 16.181 366.268 14.8292C367.196 13.4773 367.787 11.4949 368.04 8.88133H368.883V26.6352H368.04C367.871 24.7426 367.448 23.1201 366.857 21.8584C366.266 20.5967 365.591 19.7859 364.747 19.3353C363.987 18.8847 362.806 18.7044 361.287 18.7044V28.2573C361.287 30.1499 361.371 31.2314 361.54 31.682C361.709 32.1326 361.961 32.4028 362.383 32.6732C362.805 32.9436 363.482 33.034 364.326 33.034H366.183C369.138 33.034 371.5 32.3126 373.272 30.8706C375.045 29.4287 376.311 27.1757 377.155 24.2017H378L376.566 34.9262H349.132V34.0252H350.143C351.072 34.0252 351.832 33.845 352.338 33.4845C352.76 33.2142 353.014 32.8536 353.268 32.3129C353.437 31.9524 353.521 30.8712 353.521 29.1588V6.89836C353.521 5.36628 353.521 4.46508 353.437 4.10459C353.268 3.56386 353.014 3.11303 352.592 2.75254C352.001 2.30192 351.156 2.03195 350.143 2.03195H349.132V1.1304H375.636V11.1344H374.793C374.371 8.70109 373.694 6.89849 372.85 5.90715C372.006 4.82568 370.909 4.01449 369.39 3.56388C368.546 3.29351 366.857 3.11338 364.493 3.11338H361.287V3.02317Z"
                    fill="black"
                  />
                </svg>
              </Box>
              <Box
                sx={{
                  p: "50px 140px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "14px",
                  "@media (max-width:1765px)": {
                    p: "50px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    gap: "50px",
                    mb: "30px", // Margin between the rows
                  }}
                >
                  <Box
                    sx={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      border: "1px solid black",
                      color: "black",
                      background: "#F3F1EC",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      p: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        fontStyle: "bold",
                        pb: "15px",
                      }}
                    >
                      THAM GIA CÙNG NGƯỜI MANG TỚI SỰ ĐẢM BẢO
                    </Box>
                    <Box>
                      Chúng tôi là thương hiệu mang tới cho các đối tác cái nhìn
                      hình dung đầy đủ và rõ ràng về Nhượng quyền thương hiệu để
                      nhà đầu tư biết chính xác mình sẽ nhận được gì và lợi ích
                      như thế nào trên từng danh mục đầu tư.
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      border: "1px solid black",
                      color: "black",
                      background: "#F3F1EC",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      p: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        fontStyle: "bold",
                        pb: "15px",
                      }}
                    >
                      SẢN PHẨM TIÊU CHUẨN THẾ GIỚI
                    </Box>
                    <Box style={{ fontSize: "14px" }}>
                      Chúng tôi chuẩn hoá nguồn nguyên liệu, bao bì, máy móc và
                      hệ thống vận hành tiêu chuẩn, đạt đầy đủ chứng nhận và
                      chứng chỉ cao nhất của ngành để mang lại sự an tâm toàn
                      diện cho khách hàng.
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      border: "1px solid black",
                      color: "black",
                      background: "#F3F1EC",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      p: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        fontStyle: "bold",
                        pb: "15px",
                      }}
                    >
                      BẮT ĐẦU VỚI CÔNG THỨC THÀNH CÔNG
                    </Box>
                    <Box style={{ fontSize: "14px" }}>
                      Thực đơn của chúng tôi cung cấp với hương vị thuần Việt,
                      tuỳ chỉnh theo ý khách hàng tạo ra danh mục đồ uống khiến
                      thực khách muốn quay lại nhiều lần.
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%",
                    gap: "50px",
                  }}
                >
                  <Box
                    sx={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      border: "1px solid black",
                      color: "black",
                      background: "#F3F1EC",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      p: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        pb: "15px",
                        fontStyle: "bold",
                      }}
                    >
                      NHẬN SỰ HỖ TRỢ ĐA CHIỀU TRÊN CÁC PHƯƠNG DIỆN
                    </Box>
                    <Box style={{ fontSize: "14px" }}>
                      Chúng tôi có Công ty Hỗ trợ Vận hành hỗ trợ bạn đầy đủ
                      trong việc Tuyển dụng, Marketing, Chuỗi cung ứng để hỗ trợ
                      các đối tác Nhượng quyền của chúng tôi.
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                      border: "1px solid black",
                      color: "black",
                      background: "#F3F1EC",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                      p: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        fontSize: "18px",
                        fontWeight: "600",
                        pb: "15px",
                        fontStyle: "bold",
                      }}
                    >
                      TẦM NHÌN VỀ THỊ TRƯỜNG VIỆT NAM
                    </Box>
                    <Box style={{ fontSize: "14px" }}>
                      Với dân số xấp xỉ 100 triệu người, tiềm năng về thị trường
                      Bán lẻ Đồ uống nhanh chóng, Hợp khẩu vị người Việt và sự
                      tiện lợi cao là vô cùng lớn để chúng ta cùng nhau khai
                      thác và tăng trưởng không giới hạn.
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    color: "black",
                    background: "white",
                    border: "1px solid black",
                    borderRadius: "23px",
                    display: "inline-block",
                    width: "fit-content",
                    p: "13px 20px",
                    mb: "50px",
                    fontWeight: "700",
                    cursor: "pointer",
                  }}
                  onClick={handleClickOpen}
                >
                  CÂU CHUYỆN CỦA CHÚNG TÔI
                </Box>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  maxWidth="md" // kích thước tối đa (sm, md, lg, xl, false)
                  fullWidth={true} // fullWidth làm cho Dialog chiếm toàn bộ chiều rộng của maxWidth
                  sx={{
                    ...styles.fontSize13,
                    "& .MuiDialog-paper": { width: "1148px", maxWidth: "none" },
                  }} // Tùy chỉnh kích thước chính xác
                >
                  <Box
                    sx={{
                      display: "flex",
                      background: "#625C5E",
                      alignItems: "center",
                      justifyContent: "space-between",
                      p: "30px",
                    }}
                  >
                    <Box sx={{ fontSize: "40px", color: "#FFFFFF" }}>
                      Câu chuyện của The Thanh
                    </Box>
                    <Box sx={{ cursor: "poiter" }} onClick={handleClose}>
                      <svg
                        width="39"
                        height="39"
                        viewBox="0 0 39 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.5003 39C30.2698 39 39 30.2694 39 19.4998C39 8.73026 30.2698 0 19.5003 0C8.73083 0 0 8.73026 0 19.4998C0 30.2694 8.73083 39 19.5003 39Z"
                          fill="black"
                        />
                        <path
                          d="M12.7207 12.7196L26.281 26.2803"
                          stroke="white"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26.281 12.7196L12.7207 26.2803"
                          stroke="white"
                          stroke-width="3"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Box>
                  </Box>
                  <DialogContent
                    sx={{
                      fontSize: "18px",
                      lineHeight: "25px",
                      background: "#F3F1EC",
                    }}
                  >
                    <p>
                      Chúng tôi là mô hình bán lẻ dựa trên Công nghệ, chúng tôi{" "}
                      <strong>
                        cung cấp cà phê và các sản phẩm F&B khác có chất lượng
                        cao, giá cả phải chăng và sự tiện lợi cao cho khách
                        hàng.
                      </strong>
                    </p>
                    <p>
                      Chúng tôi bắt đầu với một niềm tin đơn giản: Chúng tôi tin
                      vào tiềm năng và kết nối vô hạn của người Việt sẽ tạo nên
                      những điều ý nghĩa. Chúng tôi kết nối các đối tác, cùng
                      nhau chia sẻ ước mơ và hành động truyền cảm hứng để mọi
                      người nhận biết và tận hưởng niềm vui qua mỗi cốc, mỗi cửa
                      hàng The Thanh tại mỗi thời điểm.
                    </p>
                    <p>
                      Chúng tôi mang tới sản phẩm cà phê với nguồn nguyên liệu
                      đặc sản chất lượng cao, bao bì đạt các tiêu chuẩn an toàn
                      khắt khe nhất của ngành cùng việc Xây dựng chuỗi cung ứng
                      đẳng cấp thế giới nhằm tạo ra trải nghiệm cà phê an toàn,
                      thú vị tới cuộc sống hàng ngày của người dân địa phương
                      bên cạnh một mức giá dễ tiếp cận cho người Việt. Chúng tôi
                      đang phát triển khái niệm tiêu thụ cà phê để tạo ra loại
                      cà phê đặc sản có giá cả phải chăng cho mọi người, hàng
                      ngày.
                    </p>
                    <p>
                      Ước mơ của chúng tôi luôn là cung cấp cà phê đặc sản như
                      một <strong>nhu cầu thiết yếu hàng ngày</strong> cho tất
                      cả mọi người thưởng thức với mức giá tốt nhất. Chúng tôi
                      làm tất cả mọi điều có thể để mọi người có được đồ uống
                      tiêu chuẩn cao và trải nghiệm tuyệt vời với mức giá tốt
                      nhất.
                    </p>
                    <strong>
                      Công nghệ là cốt lõi trong hoạt động kinh doanh của chúng
                      tôi. Công nghệ của chúng tôi áp dụng trên mọi khía cạnh
                      kinh doanh của chúng tôi, từ hoạt động tương tác với khách
                      hàng và mặt tiền cửa hàng đến quản lý chuỗi cung ứng.
                      Chúng tôi tận dụng khả năng phân tích dữ liệu lớn và AI
                      ngày càng phát triển của mình để phân tích khối lượng dữ
                      liệu khổng lồ được tạo ra từ hoạt động của chúng tôi và
                      liên tục tối ưu hóa hệ thống của chúng tôi.
                    </strong>
                    <p>Các giá trị chúng tôi tập trung:</p>
                    <ul>
                      <li>
                        <strong>Chất lượng cao:</strong> Hạt cà phê của chúng
                        tôi đến trực tiếp từ những vùng sản xuất cà phê hàng đầu
                      </li>
                      <li>
                        <strong>
                          Khả năng đáp ứng thị hiếu người dân Việt Nam cao:
                        </strong>{" "}
                        Chúng tôi cung cấp các tuỳ chọn sản phẩm đáp ứng khẩu vị
                        và thói quen của người dân Việt Nam.
                      </li>
                      <li>
                        <strong>Tiện lợi cao:</strong> Chúng tôi cung cấp đồ
                        uống phục vụ trên các nền tảng trực tuyến, chúng tôi
                        chuẩn bị những gì cần thiết để mang tới trải nghiệm mua
                        hàng nhanh chóng và thuận tiện cho các bên liên quan.
                      </li>
                    </ul>
                  </DialogContent>
                </Dialog>
              </Box>
            </div>
            <div id="nhuong-quyen-thuong-mai" style={{ paddingTop: "130px" }}>
              <Box
                sx={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${nhuongquyenslide1})`,
                  width: "100%",
                  height: "663px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Box
                  sx={{
                    fontSize: "32px",
                    textAlign: "center",
                    p: "80px 0",
                    color: "white",
                  }}
                >
                  CÁC MÔ HÌNH CỬA HÀNG NHƯỢNG QUYỀN CỦA CHÚNG TÔI
                </Box>
                <div id="franchies-slider-2">
                  <Box
                    position="relative"
                    width="100%"
                    margin="auto"
                    boxSizing="border-box"
                    padding="0 170px"
                    zIndex="0"
                    color="white"
                  >
                    <Slider ref={slider2} {...settings2}>
                      {slides2.map((slide, index) => (
                        <Box key={index}>
                          <Box
                            sx={{
                              position: "relative",
                              width: "100%",
                              height: "auto",
                            }}
                          >
                            <img
                              loading="lazy"
                              style={{
                                width: "100%",
                                height: "260px",
                                objectFit: "cover",
                              }}
                              alt="giới thiệu về The Thanh Coffee"
                              key={index}
                              src={slide.src}
                            />
                            <Box
                              sx={{
                                background: "#625C5E",
                                p: "21px 25px",
                                boxSizing: "border-box",
                                textAlign: "left",
                                fontSize: "20px",
                                fontWeight: "600",
                              }}
                            >
                              <div id="tai-sao-nen-tham-gia">
                                <Box>{slide.tittle}</Box>
                                <Box>{slide.price}</Box>
                              </div>
                            </Box>
                          </Box>
                        </Box>
                      ))}
                    </Slider>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        bottom: 0,
                        left: "60px",
                        cursor: "pointer",
                      }}
                      onClick={() => slider2?.current?.slickPrev()}
                    >
                      <svg
                        width="49"
                        height="87"
                        viewBox="0 0 49 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M42.1875 86.9167L-0.729187 43.8958L42.1875 0.979156L48.9583 7.74999L12.8125 43.8958L48.9583 80.0417L42.1875 86.9167Z"
                          fill="white"
                        />
                      </svg>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "50%",
                        bottom: 0,
                        right: "60px",
                        cursor: "pointer",
                      }}
                      onClick={() => slider2?.current?.slickNext()}
                    >
                      <svg
                        width="49"
                        height="87"
                        viewBox="0 0 49 87"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.81259 0.0833245L49.7293 43.1042L6.81258 86.0208L0.0417486 79.25L36.1876 43.1042L0.041755 6.95832L6.81259 0.0833245Z"
                          fill="white"
                        />
                      </svg>
                    </Box>
                  </Box>
                </div>
              </Box>
            </div>
          </Box>
          <Box sx={{ display: "flex", gap: "175px", p: "50px 60px 0" }}>
            <Box sx={{ fontSize: "32px" }}>
              <Box sx={{ color: "black", fontWeight: "600", fontSize: "26px" }}>
                TẠI SAO NÊN THAM GIA NHƯỢNG QUYỀN THE THANH COFFEE
              </Box>
              <Box sx={{ p: "20px 0", fontWeight: "600" }}>
                Lý do để trở thành người nhượng quyền của The Thanh
              </Box>
              <Box sx={{ fontSize: "20px", lineHeight: "24px" }}>
                Hãy sở hữu doanh nghiệp của riêng bạn và mang trải nghiệm tuyệt
                vời cho người dân địa phương cùng lợi nhuận bền vững. Bằng cách
                tham gia cùng The Thanh, bạn sẽ được hưởng lợi di sản thương
                hiệu và cung cấp đầy đủ tư liệu để thuận tiện tối đa cho việc
                phát triển. Chúng tôi có chuỗi cung ứng sản phẩm hàng đầu và
                chuyên môn trong việc điều hành nhà hàng và làm hài lòng khách
                hàng, được củng cố thêm nhờ sự hỗ trợ của Công ty Tư Vấn Quản lý
                SaintGiong.
              </Box>
              <Box sx={{ pt: "35px", fontSize: "20px" }}>
                <ul>
                  <li>
                    Bạn sẽ nhận được đào tạo và tiếp cận kiến thức chuyên môn
                    trong mọi khía cạnh của doanh nghiệp
                  </li>
                  <li>
                    Hỗ trợ tích hợp cho các hoạt động vận hành đang diễn ra
                  </li>
                  <li>
                    Nhiều nguồn tài nguyên hỗ trợ sẵn có: Marketing, Nhân sự,
                    Chuỗi cung ứng, Tài chính.
                  </li>
                  <li>
                    Đội ngũ vận hành để hỗ trợ bạn trong việc xây dựng và tích
                    hợp theo nhu cầu.
                  </li>
                  <li>Hỗ trợ của Công ty Tư Vấn Quản lý SaintGiong.</li>
                </ul>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", gap: "20px", pb: "22px" }}>
                <Box>
                  <img
                    src={taisao1}
                    alt="Tại sao tham gia The Thanh Coffee?"
                    width={"235px"}
                    height={"265px"}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box>
                  <img
                    src={taisao2}
                    alt="Tại sao tham gia The Thanh Coffee"
                    width={"200px"}
                    height={"265px"}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Box>
              <Box>
                <div id="loi-the-cua-chung-toi">
                  <img
                    src={taisao3}
                    alt="Tại sao tham gia thế thanh coffee"
                    width={"455px"}
                    height={"260px"}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Box>
            </Box>
          </Box>
          <Box sx={{ p: "70px 60px" }}>
            <Box sx={{ color: "black", fontWeight: "600", fontSize: "26px" }}>
              TRỰC TIẾP TỪ NHỮNG CỐT LÕI MÀ CHÚNG TÔI TẬP TRUNG XÂY DỰNG
            </Box>
            <Box
              sx={{ fontSize: "32px", fontWeight: "600", p: "25px 0 35px 0" }}
            >
              LỢI THẾ MÀ THE THANH MANG TỚI
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              p: "0 60px 70px 60px",
              gap: "145px",
              height: "330px",
            }}
          >
            {selectedItem && (
              <Box
                sx={{
                  border: "1px solid black",
                  display: "flex",
                  width: "86%",
                }}
              >
                <img
                  src={selectedItem.image}
                  alt={selectedItem.content}
                  style={{
                    width: "425px",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Box sx={{ p: "40px 30px 100px" }}>
                  <Box sx={{ fontSize: "32px", fontWeight: "600" }}>
                    {selectedItem.tittle}
                  </Box>
                  <Box
                    sx={{ fontSize: "20px", fontStyle: "italic", pt: "50px" }}
                  >
                    {selectedItem.content}
                  </Box>
                </Box>
              </Box>
            )}
            <div id="danh-sach-yeu-cau">
              <Box>
                {data.map((item, index) => (
                  <Box item key={index} style={{ marginBottom: "25px" }}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width={"60px"}
                      height={"60px"}
                      style={{
                        cursor: "pointer",
                        borderRadius: "50%",
                        width: selectedItem === item ? "80px" : "60px",
                        height: selectedItem === item ? "80px" : "60px",
                      }}
                      onClick={() => handleItemClick(item)}
                    />
                  </Box>
                ))}
              </Box>
            </div>
          </Box>
          <Box sx={{ position: "relative" }}>
            <Box>
              <Box sx={{ p: "0 65px", background: "#FFFFFF" }}>
                <Box sx={{ border: "1px solid black", p: "50px 60px" }}>
                  <Box
                    sx={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    DANH SÁCH YÊU CẦU CẦN CÓ TỪ BÊN NHẬN NHƯỢNG QUYỀN :
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      pt: "40px",
                      gap: "43px",
                      color: "black",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "50px 19px 91px 20px",
                        flex: 1,
                      }}
                    >
                      <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                        NGUỒN TÀI CHÍNH
                      </Box>
                      <Box sx={{ fontSize: "18px", lineHeight: "25px" }}>
                        <ul>
                          <li>
                            Có đầy đủ nguồn lực và mong muốn cam kết cùng nhau
                            phát triển để tạo ra sự tăng trưởng liên tục về quy
                            mô và lợi nhuận.
                          </li>
                          <li>
                            Tài sản lưu động tối thiểu: 1,000,000,000 VNĐ.
                          </li>
                          <li>
                            Giá trị tài sản ròng tối thiểu: 2,000,000,000 VNĐ.
                          </li>
                          <li>
                            Vốn hoá đầy đủ có thể thay đổi tuỳ theo từng Tỉnh/
                            Thành phố và nhu cầu của đối tác đầu tư cũng như quy
                            mô dự án.
                          </li>
                        </ul>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "50px 19px 91px 20px",
                        flex: 1,
                      }}
                    >
                      <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                        KINH NGHIỆM
                      </Box>
                      <Box sx={{ fontSize: "18px", lineHeight: "25px" }}>
                        <ul>
                          <li>
                            Ưu tiên đã từng quản lý nhà hàng, quán cà phê, cửa
                            hàng bán lẻ hoặc các đơn vị khác (Điều kiện này
                            không bắt buộc) .
                          </li>
                          <li>
                            Nhà lãnh đạo nhiệt huyết trong kinh doanh hoặc nhiệt
                            tình hỗ trợ cộng đồng địa phương. Chúng tôi mong đợi
                            tìm kiếm các đối tác khả năng thúc đẩy sự thay đổi
                            và xây dựng tổ chức để mang tới lợi nhuận bền vững
                            và hiệu suất kinh doanh cao.
                          </li>
                        </ul>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "50px 19px 91px 20px",
                        flex: 1,
                      }}
                    >
                      <Box sx={{ fontSize: "24px", fontWeight: "600" }}>
                        SỰ CAM KẾT
                      </Box>
                      <Box sx={{ fontSize: "18px", lineHeight: "25px" }}>
                        <ul>
                          <li>
                            Sẵn sàng cam kết toàn thời gian để điều hành The
                            Thanh Coffee hoặc trở thành đối tác hợp tác.
                          </li>
                          <li>
                            Khả năng và mong muốn mở và vận hành nhiều cửa hàng.
                          </li>
                        </ul>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  p: "125px 404px 125px 65px",
                  fontSize: "26px",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              >
                Quy trình đăng ký của chúng tôi rất đơn giản, bắt đầu bằng đơn
                đăng ký trực tuyến.
              </Box>
              <Box sx={{ p: "0 65px", background: "#FFFFFF" }}>
                <Box sx={{ border: "1px solid black", p: "50px 60px" }}>
                  <Box
                    sx={{
                      color: "black",
                      fontWeight: "600",
                      fontSize: "26px",
                    }}
                  >
                    QUY TRÌNH PHÊ DUYỆT NGƯỜI NHƯỢNG QUYỀN MỚI
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      color: "#black",
                      pt: "40px",
                      gap: "43px",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "40px 10px 80px",
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "150px",
                          fontWeight: "600",
                          textAlign: "right  ",
                        }}
                      >
                        1
                      </Box>
                      <Box
                        sx={{
                          fontSize: "18px",
                          lineHeight: "25px",
                          p: "40px 0 15px 0",
                          fontWeight: "700",
                        }}
                      >
                        ĐĂNG KÝ TRỰC TUYẾN
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>
                        Cung cấp thông tin chi tiết cơ bản về bản thân bạn, địa
                        điểm và lý do bạn muốn điều hành Cà Phê The Thanh.
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "40px 10px 80px",
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "150px",
                          fontWeight: "600",
                          textAlign: "right  ",
                        }}
                      >
                        2
                      </Box>
                      <Box
                        sx={{
                          fontSize: "18px",
                          lineHeight: "25px",
                          fontWeight: "700",
                          p: "40px 0 15px 0",
                        }}
                      >
                        CUỘC GỌI KHÁM PHÁ
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>
                        Trò chuyện cùng đội ngũ của chúng tôi! Sau đấy chúng tôi
                        sẽ gửi các bản cam kết và chúng ta sẽ ký thoả thuận bảo
                        mật thông tin (NDA) trước khi bắt đầu các Quy trình làm
                        việc chính thức cho việc nhận nhượng quyền.
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "40px 10px 80px",
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "150px",
                          fontWeight: "600",
                          textAlign: "right  ",
                        }}
                      >
                        3
                      </Box>
                      <Box
                        sx={{
                          fontSize: "18px",
                          lineHeight: "25px",
                          fontWeight: "700",
                          p: "40px 0 15px 0",
                        }}
                      >
                        XEM XÉT ĐƠN
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>
                        FDD(Thẩm định tài chính doanh nghiệp). Chúng tôi sẽ đánh
                        giá kế hoạch tài chính kinh doanh và Kiểm tra các thông
                        tin về Điều kiện cam kết & Sự đảm bảo tài chính.
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "40px 10px 80px",
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "150px",
                          fontWeight: "600",
                          textAlign: "right  ",
                        }}
                      >
                        4
                      </Box>
                      <Box
                        sx={{
                          fontSize: "18px",
                          lineHeight: "25px",
                          fontWeight: "700",
                          p: "40px 0 15px 0",
                        }}
                      >
                        PHỎNG VẤN TRỰC TIẾP
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>
                        Gặp gỡ nhóm nhượng quyền của The Thanh.
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        background: "#cbc9c5",
                        p: "40px 10px 80px",
                        flex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: "150px",
                          fontWeight: "600",
                          textAlign: "right  ",
                        }}
                      >
                        5
                      </Box>
                      <Box
                        sx={{
                          fontSize: "18px",
                          lineHeight: "25px",
                          fontWeight: "700",
                          p: "40px 0 15px 0",
                        }}
                      >
                        XÁC NHẬN CUỐI CÙNG
                      </Box>
                      <Box sx={{ fontSize: "14px" }}>
                        Khi quá trình phê duyệt hoàn tất: Chúng ta sẽ Ký thỏa
                        thuận, bắt đầu đào tạo bên nhận nhượng quyền, chọn và
                        gửi (các) địa điểm để phê duyệt.
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: "-1",
              }}
            >
              <img
                src={nhuongquyenbackground}
                alt="ảnh back-ground"
                width={"100%"}
                style={{ objectFit: "cover", filter: "blur(5px)" }}
              />
            </Box>
          </Box>
          <div id="faq" style={{ padding: "130px 60px 50px" }}>
            <Box sx={{ fontSize: "26px", fontWeight: "600" }}>
              CÂU HỎI THƯỜNG GẶP
            </Box>
            <Box sx={{ p: "25px 0 50px 0", fontSize: "30px" }}>
              Dưới đây là câu trả lời cho một số câu hỏi phổ biến về cơ hội
              nhượng quyền tại The Thanh
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {questions?.map((question) => (
                <Accordion
                  disableGutters={true}
                  sx={{
                    ...styles.backgroundColor.mauTra,
                    "&.MuiAccordion-root": { boxShadow: "none" },
                    color: "black",
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        sx={{
                          "svg > path": { stroke: "black" },
                          svg: { width: "37px", height: "17px" },
                        }}
                      >
                        <ArrowDown />
                      </Box>
                    }
                    aria-controls="panel1a-content"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                      width: "100%",
                      padding: "30px 50px",
                      ...styles.backgroundColor.xamD9,
                      "& .MuiAccordionSummary-content": { margin: 0 },
                    }}
                  >
                    <Box sx={{ fontSize: "28px" }}>{question.title}</Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      ...styles.backgroundColor.xamE4E3E1,
                      p: "30px 50px",
                      mt: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                      }}
                    >
                      <Box
                        sx={{
                          span: {
                            fontSize: "24px !important",
                            fontFamily: "Inter !important",
                          },
                          li: {
                            fontSize: "24px !important",
                            fontFamily: "Inter !important",
                          },
                          ul: {
                            fontSize: "24px !important",
                            fontFamily: "Inter !important",
                            pl: "40px",
                          },
                          p: {
                            fontSize: "24px !important",
                            fontFamily: "Inter !important",
                          },
                        }}
                        dangerouslySetInnerHTML={{ __html: question.answer }}
                      ></Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </div>
          <Box sx={{ width: "100%", position: "relative" }}>
            <img
              src={dangkynhuongquyen}
              alt="Đăng ký ngay bây giờ"
              width={"100%"}
              height={"663px"}
              style={{ objectFit: "cover" }}
            />
            <Box
              sx={{
                position: "absolute",
                background: "rgba(255, 255, 255, 0.85)",
                p: "50px 60px",
                right: 0,
                top: "30%",
              }}
            >
              <Box sx={{ fontSize: "32px", fontWeight: "600", color: "black" }}>
                ĐĂNG KÝ NGAY BÂY GIỜ
              </Box>
              <Box
                sx={{ fontSize: "30px", fontWeight: "600", p: "13px 0 50px 0" }}
              >
                Để đăng ký, hãy làm theo lời nhắc trong liên kết bên dưới...
              </Box>
              <Box
                sx={{
                  color: "#FFFFFF",
                  background: "black",
                  border: "1px solid black",
                  borderRadius: "23px",
                  display: "inline-block",
                  width: "fit-content",
                  p: "13px 20px",
                  mb: "50px",
                  fontWeight: "700",
                  cursor: "pointer",
                }}
              >
                <a href="/nhuong-quyen/dien-thong-tin">ĐĂNG KÝ NGAY BÂY GIỜ</a>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout.MainBg>
      <Footer />
    </Box>
  );
};

export default Desktop;
