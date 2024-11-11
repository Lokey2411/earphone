import React from "react";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import { styles } from "../../styles";
import { Box, Grid } from "@mui/material";
import ArrowRightBlack from "../../component/svg/icon/ArrowRightBlack";
import DrinksItems from "../../component/DrinksItems";
import { useData } from "../../hooks/useData";
import { getRandomSubItem } from "../../functions/controller";

const Mobile = () => {
  const [allProduct] = useData("products");
  const deXuatItems = getRandomSubItem(allProduct, 4);
  const favoriteItems = localStorage.getItem("yeuthich")
    ? JSON.parse(localStorage.getItem("yeuthich"))
    : [];
  return (
    <Box>
      <NavBar />
      <Layout.MainBg>
        <Box
          sx={{
            height: "42px",
            ...styles.backgroundColor.mauTra,
            ...styles.centerFlex,
            ...styles.pad20,
          }}
        >
          <a
            href="/do-uong"
            rel="noreferrer"
            style={{ ...styles.centerFlex, gap: "10px" }}
          >
            <Box>
              <ArrowRightBlack />
            </Box>
            <Box
              sx={{
                fontSize: "13px",
              }}
            >
              Trở lại
            </Box>
          </a>
        </Box>
        <Box sx={{ ...styles.pad20, pb: "56px" }}>
          <Box
            sx={{
              fontSize: "15px",
              fontWeight: "bold",
              p: "18px 0px",
            }}
          >
            Danh sách yêu thích của bạn ({favoriteItems?.length} mục)
          </Box>
          {favoriteItems.length > 0 ? (
            <Grid container spacing={2}>
              {favoriteItems.map((items) => (
                <DrinksItems key={items.id} item={items} />
              ))}
            </Grid>
          ) : (
            <Box>
              <Box sx={{ fontWeight: 400, pb: "18px" }}>
                Thêm các mục vào danh sách mong muốn của bạn để bạn có thể lưu
                chúng cho lần sau.
              </Box>
              <Box sx={{ ...styles.centerFlex }}>
                <a
                  href="/do-uong"
                  style={{
                    cursor: "pointer",
                    padding: "10px 36px",
                    backgroundColor: "#1E3932",
                    border: 0,
                    borderRadius: "7px",
                    color: "white",
                    fontWeight: 700,
                  }}
                >
                  TIẾP TỤC MUA SẮM
                </a>
              </Box>
            </Box>
          )}
          {/* gợi ý mua sắm */}
          {/* <Box sx={{ fontWeight: "bold", fontSize: "15px", p: "18px 0px" }}>
            Gợi ý mua sắm
          </Box>
          <Box sx={{ ...styles.centerFlex, gap: "9px" }}>
            <Box sx={{ ...styles.centerFlex }}>
              <Box
                sx={{
                  cursor: "pointer",
                  p: "7px 14px",
                  backgroundColor: "#006241",
                  border: 0,
                  borderRadius: "7px",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                MOCHA BẠC HÀ
              </Box>
            </Box>
            <Box sx={{ ...styles.centerFlex }}>
              <Box
                sx={{
                  cursor: "pointer",
                  p: "7px 14px",
                  backgroundColor: "#006241",
                  border: 0,
                  borderRadius: "7px",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                LATTE HẠT DẺ
              </Box>
            </Box>
          </Box> */}
          {/* đã xem gần đây */}
          {/* <Box sx={{ fontWeight: "bold", fontSize: "15px", p: "18px 0px" }}>
            Đã xem gần đây
          </Box>
          <Box
            sx={{
              ...styles.centerFlex,
              flexWrap: "wrap",
              gap: "8px",
              rowGap: "40px",
            }}
          >
            {favoriteItems.map((items) => (
              <DrinksItems key={items.id} item={items} />
            ))}
          </Box> */}
          <Box sx={{ fontWeight: "bold", fontSize: "15px", p: "18px 0px" }}>
            Được đề xuất cho bạn
          </Box>
          <Grid container spacing={2}>
            {deXuatItems?.map((items) => (
              <DrinksItems key={items?.id} item={items} />
            ))}
          </Grid>
        </Box>
      </Layout.MainBg>
      <Footer />
    </Box>
  );
};

export default Mobile;
