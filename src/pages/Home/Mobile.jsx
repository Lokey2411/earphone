import React from "react";
import { Box } from "@mui/material";
import NavBar from "../../component/layout/NavBar";
import desktopHome from "../../component/img/desktopHome.jpg";
import desktopHomeItem from "../../component/img/desktopHomeItem.png";
import Layout from "../../component/layout";
import CacCauHoi from "../../component/CacCauHoi";
import Footer from "../../component/layout/Footer";
import { styles } from "../../styles";
import { useData } from "../../hooks/useData";

const Mobile = () => {
    const [about] = useData("abouts/search/parent?parent=");
    const [questions] = useData("questions/search/type?type=");
    return (
        <Box>
            <NavBar />
            <Layout.SecondaryBg>
                <Box sx={{ position: "relative", p: "40px 20px" }}>
                    <Box
                        sx={{
                            position: "absolute",
                            justifyContent: "center",
                            ...styles.centerFlex,
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 1,
                        }}
                    >
                        <img
                            width={"100%"}
                            height={"100%"}
                            alt=""
                            src={desktopHome}
                            style={{ objectFit: "cover" }}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            zIndex: 2,
                        }}
                    >
                        <Box
                            sx={{
                                p: "40px 20px",
                                backgroundColor: "#D9D9D9",
                                borderRadius: "30px",
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: "center",
                                    pb: "16px",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                }}
                            >
                                THE THANH SẼ SẴN SÀNG MỞ CỬA VÀO THÁNG 7 NÀY,
                                XEM THÊM VỀ CÁC VỊ TRÍ CÔNG VIỆC CHÚNG TÔI ĐANG
                                TUYỂN DỤNG TẠI ĐÂY
                                <br />
                                <Box sx={{ fontSize: "14px", pt: "16px" }}>
                                    Sẵn sàng tham gia cùng chúng tôi
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    ...styles.centerFlex,
                                    justifyContent: "center",
                                }}
                            >
                                <a
                                    href="/tham-gia-the-thanh"
                                    style={{
                                        padding: "10px",
                                        borderRadius: "19px",
                                        border: "black solid 1px",
                                        fontWeight: "600",
                                        fontSize: "14px",
                                    }}
                                >
                                    Tìm hiểu thêm
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "5px",
                        width: "100%",
                        backgroundColor: "#625C5E",
                    }}
                ></Box>
                {about?.map((info) => (
                    <Box sx={{ backgroundColor: "white" }}>
                        <Box sx={{ p: "60px 24px" }}>
                            <Box
                                sx={{
                                    fontSize: "32px",
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                {info.title}
                            </Box>
                            <Box
                                sx={{
                                    fontSize: "18px",
                                    // margin: "0 16px",
                                    marginTop: "16px",
                                    textAlign: "center",
                                    p: "0px 0px 24px",
                                }}
                            >
                                {info.subtitle}
                            </Box>
                            <Box
                                sx={{
                                    ...styles.centerFlex,
                                    justifyContent: "center",
                                    width: "100%",
                                }}
                            >
                                <img
                                    src={info.image}
                                    alt=""
                                    style={{
                                        objectFit: "cover",
                                        width: "100%",
                                    }}
                                    height={"100%"}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                height: "5px",
                                width: "100%",
                                backgroundColor: "#625C5E",
                            }}
                        ></Box>
                    </Box>
                ))}
                <Box sx={{ mt: "56px", p: "0px 24px 56px" }}>
                    <Box
                        sx={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Câu hỏi thường gặp
                    </Box>
                    <Box sx={{ pt: "24px" }}>
                        <CacCauHoi questions={questions} />
                    </Box>
                </Box>
            </Layout.SecondaryBg>
            <Footer />
        </Box>
    );
};

export default Mobile;
