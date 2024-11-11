import {
  Box,
  Checkbox,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import Footer from "../component/layout/Footer";
import { CheckBox } from "@mui/icons-material";

const SoThich = () => {
  const [checked, setChecked] = React.useState(false);
  const [option, setOption] = React.useState("");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeOptions = (event) => {
    setOption(event.target.value);
  };
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <NavbarOrder />
      <Box sx={{ pt: "100px", fontSize: "20px" }}>
        <Box sx={{ p: "100px 400px" }}>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "48px",
              fontWeight: "700",
            }}
          >
            Sở Thích
          </Box>
          <Box sx={{ p: "40px 0" }}>
            Điều chỉnh loại hình thông tin liên lạc bạn nhận được từ chúng tôi
            và cách thức:
          </Box>
          <Box sx={{ borderBottom: "1px solid black", pb: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: "20px",
              }}
            >
              <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
                Phần thưởng The Thanh
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  <Box>Email</Box>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size="medium"
                  />
                </Box>
                <Box>
                  <Box>Thông báo</Box>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size="medium"
                  />
                </Box>
              </Box>
            </Box>
            <Box>
              Các tính năng mới và ưu đãi đặc biệt của Phần thưởng The Thanh
              dành riêng cho bạn.
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid black", pb: "20px", mt: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: "20px",
              }}
            >
              <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
                Sự kiện, Cuộc thi & Khuyến mãi của The Thanh
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  <Box>Email</Box>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size="medium"
                  />
                </Box>
                <Box>
                  <Box>Thông báo</Box>
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    size="medium"
                  />
                </Box>
              </Box>
            </Box>
            <Box>Thêm thực đơn mới, sự kiện và cuộc thi</Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid black", pb: "20px", mt: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: "20px",
              }}
            >
              <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
                Trạng thái & Tiền tip
              </Box>
              <Box>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  size="medium"
                />
              </Box>
            </Box>
            <Box>
              Thông báo giúp bạn đặt hàng dễ dàng hơn. Chúng tôi vẫn sẽ gửi cho
              bạn biên lai để bạn lưu trữ, bất cứ khi nào bạn mua sản phẩm trực
              tiếp hoặc nạp tiền vào The Thanh Card.
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid black", pb: "20px", mt: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: "20px",
              }}
            >
              <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
                Cá nhân hóa quảng cáo
              </Box>
              <Box>
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  size="medium"
                />
              </Box>
            </Box>
            <Box>
              Nếu được bật, chúng tôi có thể chia sẻ thông tin liên lạc và ID
              thiết bị của bạn với phương tiện truyền thông xã hội và các nền
              tảng của bên thứ ba khác để giúp chúng tôi cung cấp quảng cáo và
              ưu đãi có thể khiến bạn và những người khác quan tâm. Bạn có thể
              chọn không tham gia bất kỳ lúc nào, nhưng xin lưu ý rằng việc chọn
              không tham gia có thể ảnh hưởng đến mức độ liên quan của quảng cáo
              và ưu đãi mà bạn có thể nhận được. Để tìm hiểu thêm, vui lòng xem
              Chính sách quyền riêng tư tại:
              https://thethanhcoffee.com/chinh-sach-quyen-rieng-tu hoặc
              https://thethanhcoffee.com/quyenriengtu.
            </Box>
          </Box>
          <Box sx={{ borderBottom: "1px solid black", pb: "20px", mt: "20px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pb: "20px",
              }}
            >
              <Box sx={{ fontSize: "24px", fontWeight: "700" }}>
                Ngôn ngữ ưa thích
              </Box>
              <Box>
                <Box sx={{ minWidth: 150 }}>
                  <FormControl fullWidth>
                    <InputLabel id="select-label">Tiếng Việt</InputLabel>
                    <Select
                      labelId="select-label"
                      id="select"
                      value={option}
                      label="Choose Option"
                      onChange={handleChangeOptions}
                    >
                      <MenuItem value={10}>Tiếng Việt</MenuItem>
                      <MenuItem value={30}>Tiếng Anh</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Box>
            <Box>
              Thay đổi ngôn ngữ giao tiếp của bạn. Ngôn ngữ của ứng dụng sẽ tiếp
              tục được thiết lập theo ngôn ngữ đã chọn của thiết bị.
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", pt: "50px" }}>
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
              CẬP NHẬT
            </Box>
          </Box>
          <Box sx={{ pt: "50px", fontWeight: "700" }}>
            Thông báo về quyền riêng tư
          </Box>
          <Box>
            Là một phần của Phần thưởng The Thanh, chúng tôi sẽ gửi cho bạn các
            ưu đãi được cá nhân hóa trong ứng dụng và, nếu bạn chọn tham gia,
            các tin nhắn khuyến mại qua email. Để xác định các ưu đãi được cá
            nhân hóa của bạn, chúng tôi sử dụng thông tin chúng tôi thu thập
            được từ việc bạn sử dụng ứng dụng và chương trình khách hàng thân
            thiết bao gồm hành vi mua hàng trước đây, trạng thái khách hàng thân
            thiết và các sở thích khác. Để tìm hiểu thêm về các hoạt động thông
            tin cá nhân của The Thanh, vui lòng đọc chính sách bảo mật của chúng
            tôi.
          </Box>
          <Box sx={{ pt: "50px", fontWeight: "700" }}>
            Tùy chọn thông tin vị trí
          </Box>
          <Box>
            Thông tin vị trí của bạn được sử dụng để tìm nhà hàng địa phương và
            cung cấp cho bạn các ưu đãi và khuyến mại có liên quan gần bạn. Bạn
            có thể điều chỉnh tùy chọn vị trí của mình bất kỳ lúc nào trong cài
            đặt thiết bị.
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default SoThich;
