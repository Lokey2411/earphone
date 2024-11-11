import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import { makeStyles } from "@mui/styles";
import phanthuongvauudai from "../component/img/phanthuongvauudai.png";
import phanthuongvauudai2 from "../component/img/phanthuongvauudai2.jpg";
import phanthuongvauudai3 from "../component/img/phanthuongvauudai3.jpg";
import Footer from "../component/layout/Footer";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  button: {
    backgroundColor: "transparent",
    border: "1px solid #ccc",
    "&.active": {
      backgroundColor: "#3F2021",
      color: "white",
    },
  },
});
const PhanThuongVaUuDai = () => {
  const lists = [
    {
      img: phanthuongvauudai2,
      title: "Tiramisu Cold Brew mới",
      content:
        "Tiramisu Cold Brew mới của chúng tôi được ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu. Được phủ lớp bọt espresso, đây là thức uống mùa hè êm dịu hoàn hảo để xua tan cái nóng.*Áp dụng các điều khoản.",
      linkText: "Đặt hàng ngay",
    },
    {
      img: phanthuongvauudai2,
      title: "Tiramisu Cold Brew mới",
      content:
        "Tiramisu Cold Brew mới của chúng tôi được ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu. Được phủ lớp bọt espresso, đây là thức uống mùa hè êm dịu hoàn hảo để xua tan cái nóng.*Áp dụng các điều khoản.",
      linkText: "Đặt hàng ngay",
    },
    {
      img: phanthuongvauudai2,
      title: "Tiramisu Cold Brew mới",
      content:
        "Tiramisu Cold Brew mới của chúng tôi được ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu. Được phủ lớp bọt espresso, đây là thức uống mùa hè êm dịu hoàn hảo để xua tan cái nóng.*Áp dụng các điều khoản.",
      linkText: "Đặt hàng ngay",
    },
    {
      img: phanthuongvauudai2,
      title: "Tiramisu Cold Brew mới",
      content:
        "Tiramisu Cold Brew mới của chúng tôi được ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu. Được phủ lớp bọt espresso, đây là thức uống mùa hè êm dịu hoàn hảo để xua tan cái nóng.*Áp dụng các điều khoản.",
      linkText: "Đặt hàng ngay",
    },
    {
      img: phanthuongvauudai2,
      title: "Tiramisu Cold Brew mới",
      content:
        "Tiramisu Cold Brew mới của chúng tôi được ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu. Được phủ lớp bọt espresso, đây là thức uống mùa hè êm dịu hoàn hảo để xua tan cái nóng.*Áp dụng các điều khoản.",
      linkText: "Đặt hàng ngay",
    },
    {
      img: phanthuongvauudai2,
      title: "Tiramisu Cold Brew mới",
      content:
        "Tiramisu Cold Brew mới của chúng tôi được ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu. Được phủ lớp bọt espresso, đây là thức uống mùa hè êm dịu hoàn hảo để xua tan cái nóng.*Áp dụng các điều khoản.",
      linkText: "Đặt hàng ngay",
    },
  ];
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
        <Box sx={{ p: "95px 100px", display: "flex", gap: "200px" }}>
          <Box sx={{ fontSize: "18px" }}>
            <Box sx={{ fontSize: "48px", fontWeight: "700" }}>
              Giới thiệu Đồ uống và đồ ăn mới của chúng tôi
            </Box>
            <Box sx={{ pt: "15px", pb: "60px", fontSize: "20px" }}>
              Hãy mạnh dạn và gọi món Tiramisu Cold Brew mới của chúng tôi. Được
              ủ trong 16 giờ để có hương vị cà phê đậm đà và êm dịu.
            </Box>
            <Box
              sx={{
                color: "#FFFFFF",
                p: "18px 30px",
                background: "#006241",
                borderRadius: "50px",
                display: "inline-block",
                width: "fit-content",
              }}
            >
              Đặt hàng ngay
            </Box>
          </Box>
          <Box>
            <img
              width={"400px"}
              height={"auto"}
              src={phanthuongvauudai}
              alt=""
            />
            <Box
              sx={{ textAlign: "right", cursor: "pointer" }}
              onClick={handleClickOpen}
            >
              * Áp dụng các điều khoản.
            </Box>
            <Dialog
              open={open}
              onClick={handleClose}
              maxWidth="400px"
              sx={{ ...styles.fontSize13 }}
            >
              <Box sx={{ p: "40px 70px", textAlign: "center" }}>
                <Box sx={{ pb: "40px", fontSize: "40px", fontWeight: "600" }}>
                  Áp dụng các điều khoản.
                </Box>
                <Box sx={{ fontSize: "25px", lineHeight: "35px" }}>
                  Tại các nhà hàng tham gia ở Việt Nam trong thời gian có hạn.
                  Các loại đồ uống này được làm từ 100% sữa hoặc kem Việt Nam.
                  '100% Việt Nam Dairy (& design)' là nhãn hiệu của Dairy
                  Farmers of Việt Nam. ©The Thanh, 2024
                </Box>
                <Box
                  sx={{
                    color: "#FFFFFF",
                    p: "18px 30px",
                    background: "#006241",
                    borderRadius: "50px",
                    display: "inline-block",
                    width: "fit-content",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                >
                  ĐỒNG Ý
                </Box>
              </Box>
            </Dialog>
          </Box>
        </Box>
        <Box sx={{ pb: "20px" }}>
          <Box
            sx={{
              p: "0 100px",
              fontSize: "42px",
              pb: "25px",
              fontWeight: "700",
            }}
          >
            Phần thưởng & Ưu đãi
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              m: "0 100px",
              p: "20px",
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Box>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7503 23.9165H17.2503V14.3332H14.7503V23.9165ZM16.0003 11.4807C16.3817 11.4807 16.7014 11.3516 16.9595 11.0936C17.2175 10.8355 17.3466 10.5158 17.3466 10.1344C17.3466 9.75303 17.2175 9.43331 16.9595 9.17525C16.7014 8.91748 16.3817 8.78859 16.0003 8.78859C15.6189 8.78859 15.2992 8.91748 15.0412 9.17525C14.7831 9.43331 14.6541 9.75303 14.6541 10.1344C14.6541 10.5158 14.7831 10.8355 15.0412 11.0936C15.2992 11.3516 15.6189 11.4807 16.0003 11.4807ZM16.0032 31.8332C13.8132 31.8332 11.7548 31.4176 9.82782 30.5865C7.90088 29.7554 6.22477 28.6275 4.79949 27.2028C3.37421 25.778 2.24574 24.1026 1.41408 22.1765C0.582686 20.2504 0.166992 18.1925 0.166992 16.0028C0.166992 13.8128 0.582548 11.7543 1.41366 9.82734C2.24477 7.90039 3.37269 6.22428 4.79741 4.799C6.22213 3.37373 7.89755 2.24525 9.82366 1.41359C11.7498 0.582198 13.8077 0.166504 15.9974 0.166504C18.1874 0.166504 20.2459 0.582059 22.1728 1.41317C24.0998 2.24428 25.7759 3.3722 27.2012 4.79692C28.6264 6.22164 29.7549 7.89706 30.5866 9.82317C31.418 11.7493 31.8337 13.8072 31.8337 15.9969C31.8337 18.1869 31.4181 20.2454 30.587 22.1723C29.7559 24.0993 28.628 25.7754 27.2032 27.2007C25.7785 28.6259 24.1031 29.7544 22.177 30.5861C20.2509 31.4175 18.193 31.8332 16.0032 31.8332ZM16.0003 29.3332C19.7225 29.3332 22.8753 28.0415 25.4587 25.4582C28.042 22.8748 29.3337 19.7221 29.3337 15.9998C29.3337 12.2776 28.042 9.12484 25.4587 6.5415C22.8753 3.95817 19.7225 2.6665 16.0003 2.6665C12.2781 2.6665 9.12533 3.95817 6.54199 6.5415C3.95866 9.12484 2.66699 12.2776 2.66699 15.9998C2.66699 19.7221 3.95866 22.8748 6.54199 25.4582C9.12533 28.0415 12.2781 29.3332 16.0003 29.3332Z"
                    fill="#1C1B1F"
                  />
                </svg>
              </Box>
              <Box>
                <Box>Hiện tại không có ưu đãi nào.</Box>
                <Box>
                  Hãy kiểm tra lại vào thứ Hai tuần tới — sẽ có thêm nhiều ưu
                  đãi khác!
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            boxSizing: "border-box",
            background: "#F9F5EE",
            mt: "20px",
            p: "40px",
          }}
        >
          <Container component="main" sx={{ mb: 10 }}>
            <Grid container spacing={3}>
              {lists.map((key, index) => (
                <Grid item xs={12} sm={12} md={6} key={index}>
                  <Link
                    to={`/chi-tiet-cong-viec/${key.id}`}
                    style={{ textDecoration: "none", cursor: "pointer" }}
                  >
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="400"
                        sx={{ objectFit: "cover" }}
                        image={key.img}
                        alt={key.title}
                      />
                      <CardContent>
                        <Typography
                          variant="body2"
                          fontSize="24px"
                          color="black"
                        >
                          {key.title}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            fontWeight="300"
                            fontSize="16px"
                          >
                            {key.content}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body2"
                          color="#006241"
                          fontSize="16px"
                          textAlign="right"
                        >
                          {key.linkText}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box sx={{ background: "#FFFFFF", p: "100px" }}>
          <img
            width={"100%"}
            height={"auto"}
            style={{ borderRadius: "20px" }}
            src={phanthuongvauudai3}
            alt=""
          />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default PhanThuongVaUuDai;
