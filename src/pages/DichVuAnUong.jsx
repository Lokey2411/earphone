import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import cuahang1 from "../component/img/cuahang1.png";
import giaohang2 from "../component/img/giaohang2.png";
import Footer from "../component/layout/Footer";
import { ExpandMore } from "@mui/icons-material";

const DichVuAnUong = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordions = [
    {
      title: "Làm thế nào để tôi đặt hàng Dịch vụ ăn uống?",
      content:
        "Chỉ cần truy cập thanhcoffee.com/catering và chọn 'Bắt ​​đầu đặt suất ăn'. Sau đó, chọn địa điểm, lên lịch ngày giờ nhận hàng và đặt hàng.",
    },
    {
      title:
        "Có phải tất cả các địa điểm của The Thanh đều nhận đơn đặt hàng của Dịch vụ ăn uống không?",
      content:
        "Không phải tất cả các địa điểm của The Thanh đều nhận đơn đặt hàng của Dịch vụ ăn uống vào thời điểm này. Bạn có thể tìm thấy các nhà hàng tham gia trong khu vực của mình bằng cách truy cập thanhcoffee.com/catering , sau đó chọn 'Bắt ​​đầu đặt suất ăn'.",
    },
    {
      title: "Tôi có thể giao đơn hàng Dịch vụ ăn uống của mình được không?",
      content:
        "Tất cả các đơn hàng Dịch vụ ăn uống đều có thể nhận tại các cửa hàng The Thanh tham gia. Các tùy chọn giao hàng phục vụ ăn uống có thể khả dụng tùy thuộc vào nhà hàng bạn đặt hàng. Vui lòng liên hệ trực tiếp với nhà hàng để tìm hiểu xem họ có cung cấp dịch vụ giao hàng cho các đơn hàng phục vụ ăn uống hay không.",
    },
    {
      title: "Tôi phải đặt hàng Dịch vụ ăn uống trước bao lâu?",
      content:
        "Đơn hàng của Dịch vụ ăn uống phải được đặt trên trang web ít nhất 24 giờ trước thời gian nhận hàng của bạn. Nếu bạn muốn đặt hàng với thông báo trước ít hơn 24 giờ, vui lòng liên hệ trực tiếp với nhà hàng—qua điện thoại hoặc trực tiếp đến nhà hàng. Đơn đặt hàng có thể được đặt trên trang web tối đa 30 ngày trước ngày nhận hàng của bạn.",
    },
    {
      title: "Giá của Dịch vụ ăn uống là bao nhiêu?",
      content:
        "Xin lưu ý rằng bạn không thể đặt dịch vụ ăn uống khi nhà hàng đóng cửa. Nếu bạn gặp sự cố khi đặt hàng khi nhà hàng đã chọn mở cửa, hãy làm mới trang và thử lại. Nếu vấn đề vẫn tiếp diễn, vui lòng liên hệ với chúng tôi để được hỗ trợ.",
    },
    {
      title: "Tôi nên làm gì nếu nhận được thông báo lỗi đơn hàng hoặc lỗi?",
      content:
        "Xin lưu ý rằng bạn không thể đặt dịch vụ ăn uống khi nhà hàng đóng cửa. Nếu bạn gặp sự cố khi đặt hàng khi nhà hàng đã chọn mở cửa, hãy làm mới trang và thử lại. Nếu vấn đề vẫn tiếp diễn, vui lòng liên hệ với chúng tôi để được hỗ trợ.",
    },
  ];
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <NavbarOrder />
      <Box sx={{ p: "100px 150px 50px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ fontSize: "30px", fontWeight: "700", p: "50px 0" }}>
            DỊCH VỤ ĂN UỐNG
          </Box>
          <img
            style={{ width: "70%", height: "300px", objectFit: "cover" }}
            src={cuahang1}
            alt=""
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
            Bắt đầu đặt hàng đồ uống của bạn
          </Box>
        </Box>
        <Box sx={{ fontSize: "30px", fontWeight: "500" }}>
          Mang món quà của The Thanh đến các bữa tiệc, ngày lễ, sự kiện công ty
          và nhiều sự kiện khác của bạn với The Thanh.
        </Box>
        <Box sx={{ display: "flex", pt: "100px", gap: "300px" }}>
          <Box>
            <Box sx={{ fontSize: "28px", pb: "30px" }}>Đặt lên đĩa</Box>
            <Box sx={{ fontSize: "16px" }}>
              Đặt mua các đĩa làm sẵn với tất cả các món yêu thích trên The
              Thanh của bạn hoặc do bạn tự chế biến — từ Đồ nướng cho đến các
              món ăn trưa. Chọn từ đĩa cho 6 hoặc 12 người.
            </Box>
          </Box>
          <Box>
            <img
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
              src={giaohang2}
              alt=""
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", pt: "100px", gap: "300px" }}>
          <Box>
            <img
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
              src={giaohang2}
              alt=""
            />
          </Box>
          <Box>
            <Box sx={{ fontSize: "28px", pb: "30px" }}>
              Cần lập kế hoạch trước?
            </Box>
            <Box sx={{ fontSize: "16px" }}>
              The Thanh làm cho mọi việc trở nên dễ dàng! Đơn đặt hàng phục vụ
              ăn uống có thể được đặt trước từ 24 giờ đến 30 ngày, vì vậy bạn
              luôn sẵn sàng cho bất kỳ dịp nào.
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "32px",
            p: "100px 0",
            textAlign: "center",
            fontWeight: "700",
          }}
        >
          Các câu hỏi thường gặp
        </Box>
        <Box sx={{ width: "1000px", margin: "auto" }}>
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                "&:not(:last-child)": {
                  borderBottom: "1px solid #ccc",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Typography>{accordion.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordion.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default DichVuAnUong;
