import { Box, Container, TextField } from "@mui/material";
import React from "react";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import CompanyFileArrowRightWhite from "../../component/svg/icon/CompanyFileArrowRightWhite";
import { useData } from "../../hooks/useData";
import Slider from "react-slick";
import ArrowNextGray from "../../component/svg/icon/ArrowNextGray";
import ArrowPrevGray from "../../component/svg/icon/ArrowPrevGray";
import FakeVideo from "../../component/img/FakeVideo.jpg";
const Mobile = () => {
    const [moreNews] = useData("abouts/ho-so-cong-ty");
    const slider = React.useRef(null);
    var giatrihanhdongslider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    var hoatdongtaichinhslider = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    const hoatdongtaichinh = [
        {
            id: 1,
            title: "Tác động xã hội",
        },
        {
            id: 2,
            title: "Báo cáo thời gian và Chi phí",
        },
        {
            id: 3,
            title: "Báo cáo tài chính",
        },
        {
            id: 4,
            title: "Hồ sơ kinh doanh",
        },
        {
            id: 5,
            title: "Mua sắm hàng hoá và Dịch vụ",
        },
        {
            id: 6,
            title: "Điều tra, Tố tụng và Kiểm toán",
        },
    ];
    return (
        <Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
            <NavBar />
            <Layout.MainBg>
                <Box
                    sx={{
                        p: "44px 33px",
                        backgroundColor: "black",
                        ...styles.fontColor.mauTrang,
                    }}
                >
                    <Box
                        sx={{
                            fontWeight: 700,
                            fontSize: "30px",
                            textAlign: "center",
                            pb: "15px",
                        }}
                    >
                        Hồ sơ công ty
                    </Box>
                    <Box
                        sx={{
                            lineHeight: "150%",
                            fontSize: "12px",
                            textAlign: "center",
                        }}
                    >
                        Trong quá trình hình thành thương hiệu, The Thanh
                        Coffee, chúng tôi luôn chú trọng đến cam kết hoạt động
                        kinh doanh minh bạch và quản lý tài chính rõ ràng. Hồ sơ
                        công ty của chúng tôi được chuẩn bị kỹ lưỡng với đầy đủ
                        giấy tờ chứng minh, đảm bảo sự uy tín và tin cậy trong
                        mọi hoạt động kinh doanh.
                    </Box>
                </Box>
                <Box
                    sx={{
                        p: "30px 24px",
                        fontWeight: 700,
                        fontSize: "20px",
                        textAlign: "center",
                    }}
                >
                    Vận Hành Doanh Nghiệp Có Trách Nhiệm
                </Box>
                <Box sx={{ p: "0px 24px" }}>
                    The Thanh Coffee cam kết tạo ra tác động xã hội tích cực
                    thông qua cách chúng tôi kinh doanh, sự tham gia vào cộng
                    đồng và các khoản đầu tư hỗ trợ các vấn đề xã hội cấp bách.
                    Chúng tôi luôn tự ứng xử có trách nhiệm, hướng đến giải
                    quyết các thách thức xã hội và đóng góp vào sự phát triển
                    bền vững của cộng đồng.
                </Box>
                <Box sx={{ p: "50px 24px 0px" }}>
                    <Box
                        sx={{
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "140%",
                        }}
                    >
                        Cách Tiếp Cận Kinh Doanh Có Trách Nhiệm <br />
                        <br />
                        Chúng tôi cam kết xây dựng giá trị bền vững cho cổ đông
                        và mang lại lợi ích toàn diện cho tất cả các bên liên
                        quan thông qua các hoạt động kinh doanh có trách nhiệm.
                    </Box>
                    <Box sx={{ p: "30px 0px" }}>
                        <Box sx={{ ...styles.centerFlex, gap: "5px" }}>
                            <a
                                href="/cam-ket-ve-hoat-dong"
                                style={{
                                    ...styles.fontColor.xanhNhat006241,
                                    fontSize: "13px",
                                    fontWeight: 700,
                                }}
                            >
                                TÌM HIỂU THÊM
                            </a>
                            <Box
                                sx={{
                                    "& svg > path#arrow-body": {
                                        fill: "#006241",
                                    },
                                    "& svg > path#arrow-head": {
                                        stroke: "#006241",
                                    },
                                }}
                            >
                                <CompanyFileArrowRightWhite />
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: "16px", lineHeight: "140%" }}>
                        <Box>
                            <b>Tăng trưởng nhanh</b> hơn thị trường và chiếm thị
                            phần
                        </Box>
                        <Box
                            sx={{
                                height: "2px",
                                backgroundColor: "#575757",
                                m: "20px 0px",
                            }}
                        ></Box>
                        <Box>
                            <b>Tăng trưởng thu nhập mạnh mẽ</b> với việc mở rộng
                            biên lợi nhuận
                            <b> bền vững </b>trong khi<b> đầu tư </b>ở quy mô
                            lớn.
                        </Box>
                        <Box
                            sx={{
                                height: "2px",
                                backgroundColor: "#575757",
                                m: "20px 0px",
                            }}
                        ></Box>
                        <Box sx={{ pb: "60px" }}>
                            Dòng tiền<b> mạnh,</b>
                            <br />
                            Phân bổ vốn có
                            <b>
                                {" "}
                                kỷ luật, <br />
                                Lợi nhuận đáng kể{" "}
                            </b>
                            cho cổ đông
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: "30px 24px 60px", backgroundColor: "#EFEFEF" }}>
                    <Box sx={{ fontWeight: 700, fontSize: "16px", pb: "20px" }}>
                        Liên hệ
                    </Box>
                    <Box
                        sx={{
                            ...styles.centerFlex,
                            fontSize: "12px",
                            lineHeight: "150%",
                            pb: "20px",
                        }}
                    >
                        <Box sx={{ width: "50%" }}>
                            Hà Nội
                            <Box>
                                <a
                                    href="tel:0911830666"
                                    style={{ color: "rgb(0,102,204)" }}
                                >
                                    0911.830.666
                                </a>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            pb: "20px",
                            fontSize: "12px",
                            lineHeight: "150%",
                            fontWeight: 600,
                        }}
                    >
                        <a
                            href="mailto:lienhe.dautu@thanhcoffee.com"
                            style={{ color: "rgb(0,102,204)" }}
                        >
                            lienhe.dautu@thanhcoffee.com
                        </a>
                    </Box>
                    <Box sx={{ ...styles.centerFlex, marginBottom: "70px" }}>
                        <Box>
                            <a
                                href="/lien-he-dau-tu"
                                style={{ color: "#006241" }}
                            >
                                Tùy chọn liên hệ &gt;
                            </a>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            fontSize: "20px",
                            fontWeight: 700,
                            lineHeight: "140%",
                            pb: "20px",
                        }}
                    >
                        Đăng ký nhận thông báo qua email cho Nhà đầu tư
                    </Box>
                    <Box sx={{ pb: "15px" }}>
                        <Container
                            sx={{
                                "&.MuiContainer-root": {
                                    maxWidth: "100%",
                                    ...styles.backgroundColor.mauTrang,
                                },
                            }}
                            disableGutters
                        >
                            <TextField
                                type="search"
                                id="company-file-search"
                                placeholder="Nhập email"
                                // value={searchTerm}
                                // onChange={handleSearch}
                                // onClick={(e) => {
                                //   e.stopPropagation();
                                // }}
                                sx={{
                                    ...styles.fontSize13,
                                    color: "black",
                                    width: "100%",
                                    "& .MuiOutlinedInput-root": {
                                        border: "none",
                                    },
                                    ".MuiOutlinedInput-notchedOutline:hover,.MuiOutlinedInput-notchedOutline":
                                        {
                                            border: "0.5px solid #000",
                                            borderRadius: "0px",
                                        },
                                    ".MuiInputBase-root": {
                                        paddingRight: "0px",
                                        marginRight: 0,
                                    },
                                    ".MuiInputBase-input": {
                                        p: "10px 14px 10px ",
                                    },
                                }}
                            />
                        </Container>
                    </Box>
                    <Box
                        sx={{
                            ...styles.centerFlex,
                            fontSize: "13px",
                            fontWeight: 700,
                            lineHeight: "150%",
                            ...styles.fontColor.mauTrang,
                        }}
                    >
                        <Box sx={{ backgroundColor: "black", p: "8px 35px" }}>
                            ĐĂNG KÝ
                        </Box>
                    </Box>
                </Box>
            </Layout.MainBg>
            <Footer />
        </Box>
    );
};

export default Mobile;
