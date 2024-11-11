import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from "@mui/material";
import ArrowDownBlack from "../../../component/svg/icon/ArrowDownBlack";
import { styles } from "../../../styles";
import FakeVideo from "../../../component/img/FakeVideo.jpg";
import coffeeorder from "../../../component/img/coffeeorder.jpg";
import Footer from "../../../component/layout/Footer";
import { useData } from "../../../hooks/useData";
import { useLocation } from "react-router-dom";
import { getRouteName } from "../../../functions/controller";
import ExitCircleIcon from "../../../component/svg/icon/ExitCircleIcon";
import PayQR from "../../PayQR";
import { useState } from "react";
import BuyOnAppIcon from "../../../component/img/sanphamtrenapp.png";

const Mobile = () => {
  const location = useLocation();
  // get route
  const urlName = getRouteName(location.pathname);
  const [questions] = useData("questions/search/type?type=" + urlName);
  const [qr, setQr] = useState(0);

  return (
    <Box>
      {qr === 1 && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            bottom: 0,
            width: "100%",
            background: "#ffffff" /* Màu nền với độ mờ */,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "1000",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                background: "#DBDAD5",
                height: "40px",
                ...styles.centerFlex,
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  right: 8,
                  transform: "translate(0,-50%)",
                  zIndex: 1002,
                }}
                onClick={() => setQr(0)}
              >
                <ExitCircleIcon />
              </Box>
            </Box>
            <PayQR />
          </Box>
        </Box>
      )}
      <Box sx={{ position: "fixed", left: 0, right: 0, zIndex: "4" }}>
        <Box
          sx={{
            background: "#DBDAD5",
            p: "10px 18px",
            height: "50px",
            borderBottom: "1px #575757 solid",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              ...styles.fontSize13,
              fontSize: "15px",
              fontWeight: "bold",
            }}
          >
            Americano
          </Box>
          <Box
            sx={{
              ...styles.fontSize13,
              fontSize: "10px",
            }}
          >
            Chỉ từ 35.000đ/ly
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.fontSize13,
            fontSize: "8px",
            display: "flex",
            background: "#DBDAD5",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "40px",
          }}
        >
          <Box sx={{ ...styles.fontSize13, fontSize: "8px" }}>
            Mở qua ứng dụng
          </Box>
          <Box
            sx={{
              pl: "10px",
              ...styles.centerFlex,
            }}
          >
            <img src={BuyOnAppIcon} width={"12px"} height={"12px"} />
          </Box>
          <Box
            sx={{
              display: "grid",
              pl: "20px",
            }}
          >
            <Box>Mua tại cửa hàng</Box>
            <Box
              sx={{
                fontWeight: "bold",
                textDecorationLine: "underline",
              }}
            >
              Chọn một cửa hàng
            </Box>
          </Box>
          <Box
            sx={{
              p: "0px 15px",
            }}
          >
            <ArrowDownBlack />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "15px",
          p: "105px 20px 15px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Lựa chọn nào tốt nhất cho bạn?
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          boxSizing: "border-box",
          p: "0 20px 16px",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
            width: "100%",
          }}
          src={FakeVideo}
          alt="lựa chọn tốt nhất cho bạn"
        />
      </Box>
      <Box
        sx={{
          p: "20px 10px 0px",
        }}
      >
        <Box
          sx={{
            ...styles.fontSize13,
            display: "flex",
            fontSize: "15px",
            fontWeight: "bold",
            background: "#F2F0EB",
            mb: "5px",
            height: "66px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            borderRadius: "10px",
          }}
        >
          Nóng
        </Box>
        <Box
          sx={{
            ...styles.fontSize13,
            display: "flex",
            fontSize: "15px",
            fontWeight: "bold",
            background: "#F2F0EB",
            mb: "5px",
            height: "66px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            borderRadius: "10px",
          }}
        >
          Lạnh
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          display: "flex", // Sử dụng flexbox
          alignItems: "center", // Căn nội dung theo chiều dọc vào giữa
          justifyContent: "center",
          p: "0",
          m: "0",
        }}
      >
        <ul>
          <li
            style={{
              textAlign: "center",
              fontSize: "10px",
            }}
          >
            Ngon hơn khi uống lạnh
          </li>
        </ul>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "15px",
          p: "15px 20px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Bạn có muốn tuỳ chỉnh loại sữa không?
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          boxSizing: "border-box",
          p: "0 20px 16px",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
            width: "100%",
          }}
          src={FakeVideo}
          alt=""
        />
      </Box>
      <Box
        sx={{
          p: "20px 10px 0px",
        }}
      ></Box>
      <Box
        sx={{
          ...styles.fontSize13,
          display: "flex",
          fontSize: "15px",
          fontWeight: "bold",
          background: "#F2F0EB",
          mb: "5px",
          height: "66px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #000",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <Box>Đổi sang sữa ít kem béo</Box>
        <Box
          sx={{
            fontWeight: "normal",
          }}
        >
          +10.000đ
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          display: "flex",
          fontSize: "15px",
          fontWeight: "bold",
          background: "#F2F0EB",
          mb: "5px",
          height: "66px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #000",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <Box>Đổi sang kem muối</Box>
        <Box
          sx={{
            fontWeight: "normal",
          }}
        >
          +10.000đ
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          display: "flex",
          fontSize: "15px",
          fontWeight: "bold",
          background: "#F2F0EB",
          mb: "5px",
          height: "66px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #000",
          borderRadius: "10px",
          flexDirection: "column",
        }}
      >
        <Box>Đổi sang milk foam</Box>
        <Box
          sx={{
            fontWeight: "normal",
          }}
        >
          +10.000đ
        </Box>
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "15px",
          p: "15px 20px",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Bạn có muốn thêm Topping vào ly Cà phê không?
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          boxSizing: "border-box",
          p: "0 20px 16px",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
            width: "100%",
          }}
          src={FakeVideo}
          alt="lựa chọn tốt nhất cho bạn"
        />
      </Box>
      <Box
        sx={{
          p: "20px 10px 0px",
        }}
      >
        <Box
          sx={{
            ...styles.fontSize13,
            display: "flex",
            fontSize: "15px",
            fontWeight: "bold",
            background: "#F2F0EB",
            mb: "5px",
            height: "66px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <Box>Thêm chân châu hoàng kim</Box>
          <Box
            sx={{
              fontWeight: "normal",
            }}
          >
            +10.000đ
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.fontSize13,
            display: "flex",
            fontSize: "15px",
            fontWeight: "bold",
            background: "#F2F0EB",
            mb: "5px",
            height: "66px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <Box>Thêm thạch pudding</Box>
          <Box
            sx={{
              fontWeight: "normal",
            }}
          >
            +10.000đ
          </Box>
        </Box>
        <Box
          sx={{
            ...styles.fontSize13,
            display: "flex",
            fontSize: "15px",
            fontWeight: "bold",
            background: "#F2F0EB",
            mb: "5px",
            height: "66px",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #000",
            borderRadius: "10px",
            flexDirection: "column",
          }}
        >
          <Box>Thêm kem muối</Box>
          <Box
            sx={{
              fontWeight: "normal",
            }}
          >
            +10.000đ
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          p: "35px 22px 30px 19px",
        }}
      >
        <Box
          sx={{
            ...styles.centerFlex,
            ...styles.fontSize13,
            fontSize: "32px",
          }}
        >
          Ly cafe của bạn đã sẵn sàng
        </Box>
        <Box
          sx={{
            ...styles.centerFlex,
            ...styles.fontSize13,
            fontSize: "32px",
            color: "#00754A",
          }}
        >
          Hãy thưởng thức như cách bạn muốn
        </Box>
      </Box>
      <Box
        sx={{
          borderRadius: "15px",
          overflow: "hidden",
          boxSizing: "border-box",
          p: "0 20px 16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            borderRadius: "10px",
            width: "auto",
          }}
          src={coffeeorder}
          alt="lựa chọn tốt nhất cho bạn"
        />
      </Box>
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          p: "14px 20px 10px 20px",
        }}
      >
        Americano
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "16px",
          p: "14px 20px 10px 20px",
        }}
      >
        Chỉ từ 35.000đ/ly
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "16px",
          display: "flex",
          justifyContent: "space-between",
          p: "0px 20px",
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
          p: "20px 20px 20px 20px",
          borderBottom: "1px solid black",
        }}
      ></Box>
      <Box
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          p: "20px 20px 10px 20px",
        }}
      >
        Americano
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "16px",
        }}
      >
        <ul>
          <li>Lạnh</li>
          <li>Kem muối</li>
          <li>Thạch Pudding</li>
        </ul>
      </Box>
      <Box
        onClick={() => (setQr(1), console.log(qr))}
        sx={{
          ...styles.fontSize13,
          fontSize: "14px",
          color: "#ffffff",
          background: "#1E3932",
          height: "40px",
          width: "auto",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Hiển thị mã đơn hàng
      </Box>
      <Box
        sx={{
          p: "20px 20px 20px 20px",
          borderBottom: "1px solid black",
        }}
      ></Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "11px",
          p: "20px 20px 20px 20px",
        }}
      >
        Chi tiết giao hàng cho khu vực của bạn sẽ được hiển thị trong Checkout.
      </Box>
      <Box
        sx={{
          ...styles.fontSize13,
          fontSize: "17px",
          fontWeight: "bold",
          p: "0 0 17px 20px",
        }}
      >
        Các câu hỏi thường gặp
      </Box>
      {questions?.map((q) => (
        <Accordion
          sx={{
            ...styles.fontSize13,
          }}
          key={q?.id}
        >
          <AccordionSummary
            expandIcon={<ArrowDownBlack />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {q?.title}
          </AccordionSummary>
          <AccordionDetails>{q?.answer}.</AccordionDetails>
        </Accordion>
      ))}
      <Footer />
    </Box>
  );
};

export default Mobile;
