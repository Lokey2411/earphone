import { Box, Dialog, Typography } from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import baovetaisan1 from "../component/img/baovetaisan1.jpg";
import cauchuyencuachungtoi1 from "../component/img/cauchuyencuachungtoi1.png";
import Footer from "../component/layout/Footer";

const CauChuyenCuaChungToi = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <NavbarOrder />
      <Box sx={{ pt: "100px" }}>
        <Box
          sx={{
            background: "#F9F5EE",
            display: "flex",
            p: "147px 92px",
            gap: "92px",
          }}
        >
          <Box
            sx={{ flexBasis: "50%", display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ fontSize: "60px", fontWeight: "700" }}>
              The Thanh vì điều tốt đẹp
            </Box>
            <Box sx={{ fontSize: "40px", fontWeight: "700", p: "30px 0" }}>
              Thay đổi nhỏ, tác động lớn.
            </Box>
            <Box sx={{ fontSize: "28px" }}>
              Tại The Thanh, với hơn 4.000 địa điểm trên khắp Việt Nam, chúng
              tôi tự hào là một phần của mỗi cộng đồng và nhận thấy rằng, với
              quy mô của mình, mỗi điều nhỏ mà chúng tôi làm hoặc thay đổi đều
              có tiềm năng tạo ra tác động lớn.
            </Box>
          </Box>
          <Box sx={{ flexBasis: "50%" }}>
            <img
              width="100%"
              height="auto"
              src="https://s3-alpha-sig.figma.com/img/5a4a/38d5/a87b8e5415c636d29f273663bb730384?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WlLiUP76FVadZvjk3mBJYPK3Yrzgk6j6Kal47VlY~r1ZO-V3yhKtih9sDmb0GuX0F6Mi-bfU~VugbVLDSbdIJn~Uj-85Demlj~c1sV248IQmKH0sEnbw6If2kAdJugLITcg0NAxI7O8b~DwP1rTNHaFxwlSMGAjkgEu-Ws1g21erTFIkuODDYfhlF0SFvwTZzghcGF2nYELJqEhKvsi7u5xFMj6bdzGr~IpffvKENsaKuqAJKyYSlIllToLX5av2JHPHmEM~mJ2N4kTJzRsnQlMTHK0~utRLMo~XDMLUk5YFAMsy3c4WTlaLoceWrND-0LD~u2joX2GUBjdAUzzyAA__"
              alt=""
            />
            <Box
              sx={{ textAlign: "center", pt: "48px", cursor: "pointer" }}
              onClick={handleClickOpen}
            >
              Xem thêm chi tiết
            </Box>
            <Dialog
              open={open}
              onClick={handleClose}
              maxWidth="720px"
              sx={{ ...styles.fontSize13 }}
            >
              <Box sx={{ p: "40px 70px" }}>
                <Box sx={{ pb: "40px", fontSize: "40px", fontWeight: "600" }}>
                  Dễ dàng quan sát quảng cáo truyền hình The Thanh của chúng
                  tôi!
                </Box>
                <Box sx={{ fontSize: "25px", lineHeight: "35px" }}>
                  Chúng ta ai cũng muốn bảo vệ hành tinh của chúng ta. Với The
                  Thanh, đó là biến những vật liệu tái chế thành tác phẩm nghệ
                  thuật. Đối với chúng tôi, đó là biến bao bì của chúng tôi
                  thành tiềm năng. Chúng tôi đã loại bỏ hơn một tỷ sản phẩm nhựa
                  dùng một lần trên toàn Việt Nam. Và chúng tôi tiếp tục hành
                  trình để làm nhiều việc tốt hơn bằng cách làm cho bao bì dành
                  cho khách hàng của chúng tôi có thể tái sử dụng, tái chế. Bởi
                  vì khi chúng ta thay đổi nhỏ trong các khu phố gần và xa,
                  chúng ta có thể tạo ra tác động lớn khắp nơi khắp chốn. The
                  Thanh Coffee. Ghé thăm thanhcoffee.vn để tìm hiểu thêm.
                </Box>
              </Box>
            </Dialog>
          </Box>
        </Box>
        <Box
          sx={{
            background: "#006241",
            textAlign: "center",
            p: "100px 50px",
            color: "white",
          }}
        >
          <Box sx={{ fontSize: "40px", fontWeight: "700", pb: "60px" }}>
            Chúng tôi đã ra mắt The Thanh, một nền tảng tập trung vào việc xây
            dựng con đường bền vững hơn thông qua ba cam kết chính.
          </Box>
          <Box sx={{ fontSize: "24px" }}>
            Ghé thăm Phòng tin tức The Thanh để biết tất cả những câu chuyện mới
            nhất về The Thanh
          </Box>
        </Box>
        <Box sx={{ display: "flex", width: "100%" }}>
          {[
            "Cam kết của chúng tôi với mọi người và cộng đồng",
            "Cam kết của chúng tôi với hành tinh này",
            "Cam kết của chúng tôi về chất lượng thực phẩm và đồ uống",
          ].map((text, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                flexBasis: "33.33%",
                height: "300px", // Chiều cao cố định cho ảnh
                overflow: "hidden",
              }}
            >
              {/* Hình ảnh */}
              <Box
                component="img"
                src={baovetaisan1}
                alt={text}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(70%)", // Làm tối hình ảnh
                }}
              />
              {/* Chữ */}
              <Typography
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
        <Box
          sx={{ p: "100px 150px", textAlign: "center", background: "#F9F5EE" }}
        >
          <Box sx={{ color: "#006241", fontSize: "40px", fontWeight: "700" }}>
            Cam kết của chúng tôi với cộng đồng còn mở rộng đến các khu vực nơi
            chúng tôi cung cấp cà phê.
          </Box>
          <Box sx={{ p: "60px 0" }}>
            <img
              width={"100%"}
              height={"auto"}
              src="https://s3-alpha-sig.figma.com/img/c755/0aeb/8f7caee70ee178c31ceeb6538cc4440d?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DG~MQ8H5cXlmG0oTMkzZjHsmDh3cP1fCAfFAreNeeLgC~XD8q0c79~xgFRrpJ2W9jcWsaNoE2WJRlYjVYT-NKbjAw-VHZuRrTGIZraRr-M2nrxZ9ikbzOSrUnteuSDKLVtexnVU~LU09AFVcCDh0qGRAg2FI1Z3Z6hD6-oqZ6yjd85OjrOmKwpxqA9sZgROMVLLFVgeppL42mXjqINBlP--hCzoTt3ivvtlHjPKTtEriFDfXKidySImtgSrMHuzJ1EvMW2YbK7ARjF04Wss9IwgmoHY9BlalDgL7K7kD6~B0O3MyjpeR7No6squkbdKyQjylt~h3nnUKHdKjLi7VBw__"
              alt=""
            />
          </Box>
          <Box onClick={handleClickOpen} sx={{ cursor: "pointer" }}>
            Xem thêm chi tiết
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: "80px",
            justifyContent: "center",
            alignItems: "center",
            gap: "282px",
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          <Box>Cà phê Thanh được thu mua có trách nhiệm</Box>
          <Box sx={{ fontSize: "22px" }}>
            "Đằng sau mỗi ly cà phê The Thanh mà chúng tôi phục vụ là một cộng
            đồng trồng cà phê. Cùng với các đối tác địa phương, chúng tôi mong
            muốn không ngừng củng cố doanh nghiệp và tương lai của những người
            nông dân trồng cà phê."
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: "80px",
            justifyContent: "center",
            alignItems: "center",
            gap: "282px",
            fontSize: "36px",
            fontWeight: "700",
            background: "#F9F5EE",
          }}
        >
          <Box>Chương trình Cà phê vì Cộng đồng của The Thanh</Box>
          <Box sx={{ fontSize: "22px" }}>
            Giúp nâng cao đời sống của nông dân trồng cà phê thông qua việc đào
            tạo, hợp tác với các nhà xuất khẩu cà phê địa phương, các tổ chức
            phi lợi nhuận và các tổ chức sản xuất.
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            p: "80px 100px",
            background: "#EEE8DD",
          }}
        >
          <Box sx={{ flexBasis: "50%" }}>
            <Box sx={{ fontSize: "36px" }}>Enveritas</Box>
            <Box sx={{ fontSize: "28px", p: "20px 0" }}>
              Chúng tôi hợp tác với Enveritas để kiểm toán 100% các đơn hàng mua
              hạt cà phê mỗi năm theo một bộ chỉ số xã hội, kinh tế và môi
              trường.
            </Box>
            <Box sx={{ lineHeight: "30px", fontSize: "20px" }}>
              Thông qua chương trình cà phê vì cộng đồng của chúng tôi, chúng
              tôi sử dụng mô hình độc đáo của Enveritas, một cách tiếp cận đổi
              mới và chính xác để đo lường tính bền vững ở cấp độ nông trại cho
              tất cả cà phê mà chúng tôi mua. Cùng nhau, chúng tôi gắn kết với
              mọi nhà cung cấp và sử dụng độ chính xác của dữ liệu để xác định
              các thách thức mà nông dân trong chuỗi cung ứng của chúng tôi đang
              đối mặt. Điều này cho phép chúng tôi thiết kế các chương trình tập
              trung vào cam kết nâng cao đời sống của nông dân trong tất cả các
              cộng đồng trồng cà phê của chúng tôi, đồng thời góp phần vào sự
              bền vững và chất lượng tổng thể của sản xuất cà phê.
            </Box>
          </Box>
          <Box sx={{ flexBasis: "50%" }}>
            <img width={"100%"} height={"auto"} src={cauchuyencuachungtoi1} />
          </Box>
        </Box>
        <Box sx={{ p: "80px 100px", background: "#F9F5EE" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "282px",
              fontSize: "36px",
              fontWeight: "700",
            }}
          >
            <Box>Sử dụng phương pháp lấy nông dân làm trung tâm</Box>
            <Box sx={{ fontSize: "22px" }}>
              Cùng với các đối tác của mình, chúng tôi làm việc với những người
              nông dân trồng cà phê để cung cấp cho họ các kỹ năng kỹ thuật và
              kinh doanh nhằm phát huy tiềm năng của họ.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            p: "80px",
            justifyContent: "center",
            alignItems: "center",
            gap: "282px",
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          <Box>
            Cam kết của chúng tôi đối với chất lượng thực phẩm và đồ uống
          </Box>
          <Box sx={{ fontSize: "22px" }}>
            <Box>
              Cam kết sử dụng nguyên liệu chất lượng không chứa màu, hương liệu
              hoặc chất bảo quản nhân tạo
            </Box>
            <Box sx={{ fontSize: "16px", pt: "30px" }}>
              Tại The Thanh, "Luôn Tươi Ngon" không chỉ là một câu khẩu hiệu, mà
              còn là phong cách sống của chúng tôi. Từ cam kết sử dụng các
              nguyên liệu đơn giản đến việc pha chế 100% cà phê Arabica hảo hạng
              mỗi 20 phút, chúng tôi luôn phục vụ khách hàng những món ăn và đồ
              uống chất lượng cao, thơm ngon mỗi ngày.
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CauChuyenCuaChungToi;
