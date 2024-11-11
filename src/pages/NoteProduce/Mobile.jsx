import { Box } from "@mui/material";
import { styles } from "../../styles";

const Mobile = () => {
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Box
        sx={{
          borderBottom: "1px solid #575757",
          p: "88px 28px 87px",
        }}
      >
        <ul style={{ paddingLeft: "20px" }}>
          <li>
            Tất cả giá hiển thị là giá ăn uống tại cửa hàng (đã bao gồm thuế).
          </li>
          <li>
            Thuế suất khác nhau đối với dịch vụ ăn uống tại cửa hàng và mua mang
            về(10% đối với rượu và một số sản phẩm).
          </li>
          <li>Số lượng mua có thể bị giới hạn tùy thuộc vào sản phẩm.</li>
          <li>Sản phẩm có thể đã hết.</li>
          <li>
            Một số cửa hàng có thể có giá khác nhau hoặc có thể không có sẵn.
          </li>
          <li>
            Hình ảnh và minh họa được sử dụng trên trang này bao gồm hình ảnh.
          </li>
          <li>
            Sữa đậu nành được sử dụng tại Thanh Coffee là sữa đậu nành biến
            tính.
          </li>
          <li>
            Thay đổi cà phê The ThanhCoffee của bạn thành sữa đậu nành, sữa yến
            mạch hoặc sữa hạnh nhân là 500.000đ.
          </li>
          <li>
            Sữa đậu nành, sữa hạnh nhân và sữa yến mạch không phải là sữa hoặc
            đồ uống từ sữa.
          </li>
        </ul>
      </Box>
      <Box sx={{ p: "35px 40px" }}>
        <Box
          sx={{
            p: "10px 45px",
            display: "flex",
            fontSize: "14px",
            fontWeight: "700",
            border: "1px solid black",
            background: "#1E3932",
            height: "40px",
            color: "#FFFFFF",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            borderRadius: "10px",
            textTransform: "uppercase",
          }}
        >
          Xem cửa hàng gần nhất
        </Box>
      </Box>
    </Box>
  );
};

export default Mobile;
