import { Box } from "@mui/material";
import qrcode from "../../component/img/qrcode.jpg";
import { styles } from "../../styles";

const Mobile = () => {
  return (
    <Box>
      <Box
        sx={{
          ...styles.fontSize13,
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
          textTransform: "uppercase",
          pt: "25px",
        }}
      >
        The
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "20px",
          textTransform: "uppercase",
          fontWeight: "bold",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          pt: "5px",
        }}
      >
        Thanh Coffee
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "11px",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          pt: "10px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Thông tin đơn hàng
      </Box>
      <Box
        sx={{
          ...styles.fontSizeS,
          fontSize: "9px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          pt: "15px",
        }}
      >
        Bạn có thể đặt hàng bằng cách xuất trình mã này tại quầy thanh toán
      </Box>
      <Box
        sx={{
          ...styles.fontSizeS,
          color: "#003E1F",
          fontSize: "10px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          pt: "15px",
        }}
      >
        Tải về điện thoại của bạn
      </Box>

      <Box
        sx={{
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            width: "164px",
          }}
          src={qrcode}
          alt=""
        />
      </Box>
      <Box
        sx={{
          ...styles.fontSizeS,
          fontSize: "20px",
          p: "8px 0px 5px 30px",
          fontWeight: "bold",
        }}
      >
        Americano
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          p: "0px 0px 5px 30px",
        }}
      >
        Loại
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "16px",
          border: "1px solid black",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          m: "0px 30px",
        }}
      >
        <ul
          style={{
            width: "100%",
          }}
        >
          <li>Lạnh</li>
          <li>Kem muối</li>
          <li>Thạch pudding</li>
        </ul>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          p: "12px 0 12px 30px",
        }}
      >
        Kích cỡ
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "16px",
          display: "flex",
          justifyContent: "space-around",
          m: "0px 30px",
          border: "1px solid black",
          borderRadius: "5px",
          height: "34px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Box>Lớn</Box>
        <Box>55.000đ</Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          display: "flex",
          justifyContent: "space-between",
          p: "12px 30px",
        }}
      >
        <Box>Số lượng</Box>
        <Box
          sx={{
            ...styles.fontSize13,
            fontSize: "16px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              border: "1px solid black",
              p: "0 5px",
            }}
          >
            -
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              p: "0 10px",
            }}
          >
            1
          </Box>
          <Box
            sx={{
              border: "1px solid black",
              p: "0 5px",
            }}
          >
            +
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSizeS,
          fontSize: "8px",
        }}
      >
        <ul>
          <li>Giá các sản phẩm bằng tiền Đồng</li>
          <li>
            <a
              href="/luu-y-ve-san-pham"
              style={{ color: "#00754A", textDecoration: "underline" }}
            >
              Lưu ý về sản phẩm
            </a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Mobile;
