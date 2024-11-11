import { Box } from "@mui/material";
import qrcode from "../../component/img/qrcode.jpg";
import { styles } from "../../styles";
import NoteProduce from "../NoteProduce";
import LogoThanhCoffee from "../../component/svg/logoThanhCoffee";
const Desktop = () => {
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Box
        sx={{
          ...styles.centerFlex,
          justifyContent: "center",
          "svg>path": { fill: "black" },
          svg: { width: "267px", height: "67px" },
          pt: "20px",
        }}
      >
        <LogoThanhCoffee />
      </Box>
      <Box
        sx={{
          fontSize: "11px",
          textAlign: "center",
          pt: "10px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Thông tin đơn hàng
      </Box>
      <Box
        sx={{ display: "flex", pt: "20px", borderBottom: "solid black 1px" }}
      >
        <Box sx={{ width: "50%", background: "#F2F0EB" }}>
          <Box sx={{ p: "45px" }}>
            <Box
              sx={{
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Bạn có thể đặt hàng bằng cách xuất trình mã này tại quầy thanh
              toán
            </Box>
            <Box
              sx={{
                color: "#003E1F",
                textAlign: "center",
                fontSize: "16px",
                fontWeight: 500,
                p: "40px 0px 15px",
              }}
            >
              Tải về điện thoại của bạn
            </Box>
            <Box
              sx={{
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
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Americano
            </Box>
            <Box sx={{ p: "15px 0 ", fontSize: "16px", fontWeight: 500 }}>
              Loại
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                border: "1px solid black",
                borderRadius: "10px",
                background: "white",
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
            <Box sx={{ p: "15px 0 ", fontSize: "16px", fontWeight: 500 }}>
              Kích cỡ
            </Box>
            <Box
              sx={{
                fontSize: "16px",
                display: "flex",
                justifyContent: "space-between",
                border: "1px solid black",
                borderRadius: "5px",
                height: "34px",
                alignItems: "center",
                background: "white",
                p: "0px 20px",
              }}
            >
              <Box>Lớn</Box>
              <Box>55.000đ</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: "25px 0 40px",
              }}
            >
              <Box>Số lượng</Box>
              <Box
                sx={{
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
            <ul style={{ paddingLeft: "20px" }}>
              <li>Giá các sản phẩm bằng tiền Đồng</li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ width: "50%", ">div": { display: "flex", height: "100%" } }}>
          <NoteProduce />
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
