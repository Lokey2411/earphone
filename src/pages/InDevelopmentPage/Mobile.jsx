import React from "react";
import { styles } from "../../styles";
import { Box, Grid } from "@mui/material";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import NavBar from "../../component/layout/NavBar";
const Mobile = () => {
    return (
        <Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
            <NavBar />
            <Layout.MainBg>
                <Box
                    sx={{
                        ...styles.centerFlex,
                        justifyContent: "center",
                        flexDirection: "column",
                        fontSize: "30px",
                        p: "30px 30px",
                        textAlign: "center",
                    }}
                >
                    <Box sx={{ fontWeight: 600 }}>
                        Trang bạn đang tìm kiếm không khả dụng hoặc đang được
                        phát triển, vui lòng quay lại sau
                    </Box>
                    <Box sx={{ fontSize: "14px", pt: "30px" }}>
                        Vui lòng liên hệ với Dịch vụ khách hàng của chúng tôi
                        hoặc điều hướng đến trang khác
                        <br /> <br />
                        Cảm ơn bạn đã truy cập
                    </Box>
                </Box>
                <Box
                    sx={{
                        borderTop: "solid black 1px",
                        borderBottom: "solid black 1px",
                        p: "30px 30px",
                    }}
                >
                    <Box
                        sx={{
                            fontSize: "18px",
                            fontWeight: 500,
                            textAlign: "center",
                            pb: "30px",
                        }}
                    >
                        Cần sự giúp đỡ nhiều hơn?
                    </Box>
                    <Grid container spacing={2} sx={{ fontSize: "16px" }}>
                        <Grid item xs={12}>
                            <a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
                                <Box
                                    sx={{
                                        borderRadius: "19px",
                                        border: "solid black 1px",
                                        p: "10px 20px",
                                        ...styles.centerFlex,
                                        justifyContent: "center",
                                        gap: "10px",
                                        "&:hover": {
                                            color: "white",
                                            background: "black",
                                        },
                                    }}
                                >
                                    <Box>Nhắn tin cho chúng tôi</Box>
                                </Box>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <a href="https://www.facebook.com/people/C%C3%A0-Ph%C3%AA-The-Thanh/61560917203069/">
                                <Box
                                    sx={{
                                        borderRadius: "19px",
                                        border: "solid black 1px",
                                        p: "10px 20px",
                                        ...styles.centerFlex,
                                        justifyContent: "center",
                                        gap: "10px",
                                        "&:hover": {
                                            color: "white",
                                            background: "black",
                                        },
                                    }}
                                >
                                    <Box>Trò chuyện cùng chúng tôi</Box>
                                </Box>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <a href="/dich-vu-khach-hang">
                                <Box
                                    sx={{
                                        borderRadius: "19px",
                                        border: "solid black 1px",
                                        p: "10px 20px",
                                        ...styles.centerFlex,
                                        justifyContent: "center",
                                        gap: "10px",
                                        "&:hover": {
                                            color: "white",
                                            background: "black",
                                        },
                                    }}
                                >
                                    <Box>Dịch vụ khách hàng</Box>
                                </Box>
                            </a>
                        </Grid>
                        <Grid item xs={12}>
                            <a href="/tim-kiem-cua-hang">
                                <Box
                                    sx={{
                                        borderRadius: "19px",
                                        border: "solid black 1px",
                                        p: "10px 20px",
                                        ...styles.centerFlex,
                                        justifyContent: "center",
                                        gap: "10px",
                                        "&:hover": {
                                            color: "white",
                                            background: "black",
                                        },
                                    }}
                                >
                                    <Box>Tìm kiếm cửa hàng</Box>
                                </Box>
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Layout.MainBg>
            <Footer />
        </Box>
    );
};

export default Mobile;
