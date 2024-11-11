import { Box, Dialog, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import Footer from "../component/layout/Footer";
import thethanhrewards from "../component/img/thethanhrewards.jpg";
import thethanhrewards1 from "../component/img/thethanhrewards1.png";

const TheThanhRewards = () => {
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
        <Box>
          <Box sx={{ position: "relative" }}>
            <img
              style={{ width: "100%", height: "412px", objectFit: "cover" }}
              src={thethanhrewards}
              alt=""
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "66.5%",
              left: "43%",
              border: "1px solid black",
              p: "25px 50px",
              fontSize: "28px",
              fontWeight: "500",
              backgroundColor: "#FFFFFF",
              borderRadius: "9px",
            }}
          >
            Bạn có <span style={{ color: "red" }}> 0</span> Điểm
          </Box>
        </Box>
        <Box
          sx={{
            m: "120px 150px 50px",
            border: "1px solid black",
            p: "35px 20px",
            borderRadius: "9px",
          }}
        >
          <Box sx={{ fontSize: "26px", fontWeight: "600", pb: "20px" }}>
            Tổng hợp đơn hàng của bạn cho The Thanh?
          </Box>
          <Box sx={{ fontSize: "22px" }}>
            Làm tròn đơn hàng của bạn đến số 5.000đ gần nhất khi quét The Thanh
            Rewards hoặc đặt hàng trước thông qua ứng dụng để hỗ trợ Trại hè The
            Thanh và giúp đỡ trẻ em trong cộng đồng của bạn. Tìm hiểu thêm ở
            đây.
          </Box>
        </Box>
        <Box sx={{ p: "0 150px" }}>
          <img
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
            src={thethanhrewards1}
            alt=""
          />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Box>
              <svg
                width="58"
                height="64"
                viewBox="0 0 58 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.3951 63.6668C11.0551 63.6668 9.88758 63.2335 8.89258 62.3668C7.89758 61.5007 7.33314 60.3949 7.19925 59.0493L0.666748 0.333496H57.3334L50.8334 59.0493C50.6995 60.3949 50.1351 61.5007 49.1401 62.3668C48.1451 63.2335 46.9773 63.6668 45.6367 63.6668H12.3951ZM10.5126 50.761L11.3867 58.581C11.4151 58.8377 11.529 59.0515 11.7284 59.2227C11.9279 59.3932 12.1559 59.4785 12.4126 59.4785H45.6201C45.8762 59.4785 46.104 59.3932 46.3034 59.2227C46.5029 59.0515 46.6167 58.8377 46.6451 58.581L47.5192 50.761H10.5126ZM10.0409 46.5385H48.0084L52.6284 4.52183H5.34008L10.0409 46.5385Z"
                  fill="#006241"
                />
              </svg>
            </Box>
            <Box sx={{ fontSize: "18px" }}>
              Kiếm 10 Điểm cho mỗi giao dịch đủ điều kiện và đổi Điểm để lấy các
              món ăn trong thực đơn thuộc Mức thưởng bạn đã chọn.
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              p: "25px 0",
            }}
          >
            <Box>
              <svg
                width="44"
                height="70"
                viewBox="0 0 44 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7183 61.09H28.2816V58.1408H15.7183V61.09ZM6.35909 70C4.6752 70 3.24992 69.4167 2.08325 68.25C0.916585 67.0833 0.333252 65.6581 0.333252 63.9742V6.02583C0.333252 4.34194 0.916585 2.91667 2.08325 1.75C3.24992 0.583333 4.6752 0 6.35909 0H37.6408C39.3246 0 40.7499 0.583333 41.9166 1.75C43.0833 2.91667 43.6666 4.34194 43.6666 6.02583V63.9742C43.6666 65.6581 43.0833 67.0833 41.9166 68.25C40.7499 69.4167 39.3246 70 37.6408 70H6.35909ZM5.33325 54.2308V63.9742C5.33325 64.2308 5.4402 64.4658 5.65409 64.6792C5.86742 64.8931 6.10242 65 6.35909 65H37.6408C37.8974 65 38.1324 64.8931 38.3458 64.6792C38.5596 64.4658 38.6666 64.2308 38.6666 63.9742V54.2308H5.33325ZM5.33325 49.2308H38.6666V14.1667H5.33325V49.2308ZM5.33325 9.16667H38.6666V6.02583C38.6666 5.76917 38.5596 5.53416 38.3458 5.32083C38.1324 5.10694 37.8974 5 37.6408 5H6.35909C6.10242 5 5.86742 5.10694 5.65409 5.32083C5.4402 5.53416 5.33325 5.76917 5.33325 6.02583V9.16667Z"
                  fill="#006241"
                />
              </svg>
            </Box>
            <Box sx={{ fontSize: "18px" }}>
              Quét thẻ vật lý hoặc thẻ kỹ thuật số được liên kết của bạn để kiếm
              và đổi Điểm cho các giao dịch mua đủ điều kiện.
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Box>
              <svg
                width="44"
                height="70"
                viewBox="0 0 44 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7183 61.09H28.2816V58.1408H15.7183V61.09ZM6.35909 70C4.6752 70 3.24992 69.4167 2.08325 68.25C0.916585 67.0833 0.333252 65.6581 0.333252 63.9742V6.02583C0.333252 4.34194 0.916585 2.91667 2.08325 1.75C3.24992 0.583333 4.6752 0 6.35909 0H37.6408C39.3246 0 40.7499 0.583333 41.9166 1.75C43.0833 2.91667 43.6666 4.34194 43.6666 6.02583V63.9742C43.6666 65.6581 43.0833 67.0833 41.9166 68.25C40.7499 69.4167 39.3246 70 37.6408 70H6.35909ZM5.33325 54.2308V63.9742C5.33325 64.2308 5.4402 64.4658 5.65409 64.6792C5.86742 64.8931 6.10242 65 6.35909 65H37.6408C37.8974 65 38.1324 64.8931 38.3458 64.6792C38.5596 64.4658 38.6666 64.2308 38.6666 63.9742V54.2308H5.33325ZM5.33325 49.2308H38.6666V14.1667H5.33325V49.2308ZM5.33325 9.16667H38.6666V6.02583C38.6666 5.76917 38.5596 5.53416 38.3458 5.32083C38.1324 5.10694 37.8974 5 37.6408 5H6.35909C6.10242 5 5.86742 5.10694 5.65409 5.32083C5.4402 5.53416 5.33325 5.76917 5.33325 6.02583V9.16667Z"
                  fill="#006241"
                />
              </svg>
            </Box>
            <Box sx={{ fontSize: "18px" }}>
              Đổi Điểm của bạn trong Mức thưởng của bạn hoặc gửi chúng vào ngân
              hàng cho lần khác – tùy bạn lựa chọn!
            </Box>
          </Box>
          <Box sx={{ p: "50px 150px" }}>Điều khoản & Điều kiện ( VN | EN )</Box>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <svg
            width="1360"
            height="1"
            viewBox="0 0 1360 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="0.9"
              x2="1360"
              y2="0.9"
              stroke="black"
              stroke-width="0.2"
            />
          </svg>
        </Box>
        <Box sx={{ p: "50px 150px", fontSize: "18px" }}>
          <Box
            sx={{ textAlign: "center", fontSize: "32px", fontWeight: "600" }}
          >
            Liên kết Thẻ Vật lý của tôi
          </Box>
          <Box sx={{ p: "30px 0" }}>
            Khi bạn liên kết thẻ, các lượt truy cập và Phần thưởng hiện có trên
            thẻ vật lý của bạn sẽ được thêm vào tài khoản của bạn. Bây giờ, hãy
            kiếm và đổi Điểm bằng ứng dụng hoặc thẻ vật lý của bạn! Chỉ có thể
            liên kết 1 thẻ vật lý với tài khoản của bạn tại một thời điểm.
          </Box>
          <Box sx={{ fontWeight: "700" }}>
            Số thẻ The Thanh Rewards hiện tại của bạn là 9LXV-3AXW-OPSW
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: "40px",
            }}
          >
            <TextField
              label="Nhập số thẻ"
              variant="outlined"
              placeholder="XXXX-XXXX-XXXX"
            />
          </Box>
          <Box sx={{ textAlign: "center", p: "40px 0" }}>
            <Box
              sx={{
                color: "#FFFFFF",
                p: "18px 35px",
                border: "1px solid #006241",
                borderRadius: "50px",
                background: "#006241",
                textAlign: "center",
                display: "inline-flex", // Cho phép Box thu nhỏ theo nội dung
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Liên kết thẻ của tôi
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <svg
              width="1360"
              height="1"
              viewBox="0 0 1360 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.9"
                x2="1360"
                y2="0.9"
                stroke="black"
                stroke-width="0.2"
              />
            </svg>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "600",
              pt: "40px",
            }}
          >
            Nhập mã khuyến mại
          </Box>
          <Box>Vui lòng nhập mã khuyến mại 12 chữ số bên dưới</Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: "40px",
            }}
          >
            <TextField
              label="Nhập mã khuyễn mãi"
              variant="outlined"
              placeholder="XXXX-XXXX-XXXX"
            />
          </Box>
          <Box sx={{ textAlign: "center", p: "40px 0" }}>
            <Box
              sx={{
                color: "#FFFFFF",
                p: "18px 35px",
                border: "1px solid #006241",
                borderRadius: "50px",
                background: "#006241",
                textAlign: "center",
                display: "inline-flex", // Cho phép Box thu nhỏ theo nội dung
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Gửi mã
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <svg
              width="1360"
              height="1"
              viewBox="0 0 1360 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.9"
                x2="1360"
                y2="0.9"
                stroke="black"
                stroke-width="0.2"
              />
            </svg>
          </Box>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "32px",
              fontWeight: "600",
              pt: "40px",
            }}
          >
            Số thẻ The Thanh của tôi
          </Box>
          <Box sx={{ textAlign: "center", p: "50px 0" }}>9LXV-3AXW-OPSW</Box>
          <Box
            sx={{ textAlign: "center", fontSize: "32px", fontWeight: "600" }}
          >
            Bạn bị mất thẻ The Thanh?
          </Box>
          <Box sx={{ textAlign: "center", p: "50px 0" }}>
            Nếu thẻ vật lý của bạn bị mất hoặc bị đánh cắp, bạn có thể hủy kích
            hoạt thẻ tại đây để xóa khỏi tài khoản của mình - điều này sẽ ngăn
            chặn bất kỳ ai đổi Điểm của bạn. Điều khoản và Điều kiện được áp
            dụng.
          </Box>
          <Box
            sx={{ textAlign: "center", cursor: "pointer" }}
            onClick={handleClickOpen}
          >
            <u>Hủy kích hoạt thẻ</u>
          </Box>
          <Dialog
            open={open}
            onClick={handleClose}
            maxWidth="720px"
            sx={{ ...styles.fontSize13 }}
          >
            <Box sx={{ p: "40px 70px" }}>
              <Box sx={{ pb: "40px", fontSize: "40px", fontWeight: "600" }}>
                Vô hiệu hóa Thẻ quà tặng The Thanh
              </Box>
              <Box sx={{ fontSize: "25px", lineHeight: "35px" }}>
                Nếu thẻ Thẻ quà tặng The Thanh của bạn bị mất hoặc bị đánh cắp,
                bạn có thể hủy kích hoạt và xóa khỏi tài khoản của mình. Bạn sẽ
                nhận được thẻ kỹ thuật số mới để có thể tiếp tục kiếm tiền. Đừng
                lo lắng, tất cả các giao dịch và phần thưởng của bạn sẽ được lưu
                vào tài khoản của bạn.
              </Box>
              <Box sx={{ textAlign: "center", p: "40px 0" }}>
                <Box
                  sx={{
                    color: "#FFFFFF",
                    p: "18px 35px",
                    border: "1px solid #006241",
                    borderRadius: "50px",
                    background: "#006241",
                    textAlign: "center",
                    display: "inline-flex", // Cho phép Box thu nhỏ theo nội dung
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  HUỶ KÍCH HOẠT THẺ
                </Box>
              </Box>
            </Box>
          </Dialog>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default TheThanhRewards;
