import { Box } from "@mui/material";
import React, { useState } from "react";
import { styles } from "../../../styles";
import Layout from "../../../component/layout";
import LogoThanhCoffee from "../../../component/svg/logoThanhCoffee";
import SearchIcon from "../../../component/svg/icon/SearchIcon";
import MailIcon from "../../../component/svg/icon/MailIcon";
import LanguageIcon from "../../../component/svg/icon/LanguageIcon";
import Tab1 from "../FranchisesProjects/Tab1";
import Projects from "./Projects";
import Tab3 from "../FranchisesProjects/Tab3";
import Tab4 from "../FranchisesProjects/Tab4";
import Tab5 from "../FranchisesProjects/Tab5";
import Tab6 from "../FranchisesProjects/Tab6";
import Tab7 from "../FranchisesProjects/Tab7";
import {
    ArrowOutwardOutlined,
    CallOutlined,
    ChevronRight,
    ChevronRightOutlined,
    FacebookOutlined,
    FeedbackOutlined,
    Instagram,
} from "@mui/icons-material";
const Desktop = () => {
    const Tabs = [
        { id: 1, tab: "Về chúng tôi", component: <Tab1 /> },
        { id: 2, tab: "Dự án", component: <Projects /> },
        { id: 3, tab: "Tham gia với chúng tôi", component: <Tab3 /> },
        { id: 4, tab: "Phòng tin tức", component: <Tab4 /> },
        { id: 5, tab: "Sự bền vững", component: <Tab5 /> },
        { id: 6, tab: "Quản trị doanh nghiệp", component: <Tab6 /> },
        { id: 7, tab: "Tầm nhìn xa", component: <Tab7 /> },
    ];
    const [openTab, setOpenTab] = useState(1);
    return (
        <Box sx={{ ...styles.fontSize13 }}>
            <Layout.MainBg>
                <Box sx={{ m: "-24px 165px 64px 140px" }}>
                    <Box sx={{ pb: "24px", display: "flex" }}>
                        <Box
                            sx={{
                                "svg > path": { fill: "black" },
                                svg: { height: "37px", width: "176px" },
                            }}
                        >
                            <LogoThanhCoffee />
                            <Box sx={{ textAlign: "center" }}>
                                CA PHE TOT & TRA NGON
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pb: "18px",
                            borderBottom: "solid #464646 1px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                gap: "20px",
                                fontWeight: 600,
                                fontSize: "14px",
                            }}
                        >
                            {Tabs.map((item) => (
                                <Box
                                    key={item.id}
                                    sx={{ position: "relative" }}
                                >
                                    {openTab === item.id && (
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                left: 0,
                                                right: 0,
                                                bottom: -18,
                                                height: "2.5px",
                                                background: "#459F49",
                                            }}
                                        ></Box>
                                    )}

                                    <Box
                                        onClick={() => setOpenTab(item.id)}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        {item.tab}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "16px",
                            }}
                        >
                            <Box
                                sx={{
                                    ...styles.centerFlex,
                                    "svg>path": {
                                        stroke: "black",
                                        strokeWidth: "1.4px",
                                    },
                                    svg: { width: "20px", height: "20px" },
                                }}
                            >
                                <SearchIcon />
                            </Box>
                            <LanguageIcon />
                            <MailIcon />
                        </Box>
                    </Box>
                    <Box>
                        {Tabs.map((item) => (
                            <Box key={item.id}>
                                {openTab === item?.id && (
                                    <Box>{item.component}</Box>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Layout.MainBg>
            <Box sx={{ background: "#F2F2F2", p: "64px 166px" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        fontSize: "14px",
                        gap: "200px",
                        p: "0 160px 60px",
                        borderBottom: "solid #353535 1px",
                    }}
                >
                    <Box
                        sx={{
                            ...styles.centerFlex,
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <Box sx={{ svg: { width: "56px", height: "56px" } }}>
                            <FeedbackOutlined />
                        </Box>
                        <Box sx={{ fontSize: "16px", fontWeight: 600 }}>
                            Trợ lý phản hồi
                        </Box>
                        <Box>
                            Gửi phản hồi, báo cáo lỗi và yêu cầu cải tiến API và
                            công cụ dành cho nhà phát triển.
                        </Box>
                        <Box
                            sx={{
                                svg: { width: "14px", height: "14px" },
                                ...styles.centerFlex,
                                color: "#1E89DD",
                            }}
                        >
                            <Box>Gửi phản hồi cho chúng tôi </Box>
                            <ChevronRight />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            ...styles.centerFlex,
                            flexDirection: "column",
                            gap: "12px",
                        }}
                    >
                        <Box sx={{ svg: { width: "56px", height: "56px" } }}>
                            <CallOutlined />
                        </Box>
                        <Box sx={{ fontSize: "16px", fontWeight: 600 }}>
                            Liên hệ chúng tôi
                        </Box>
                        <Box>
                            Bạn có thắc mắc hoặc yêu cầu gì không? Chúng tôi có
                            thể hỗ trợ qua điện thoại hoặc email.
                        </Box>
                        <Box
                            sx={{
                                svg: { width: "14px", height: "14px" },
                                ...styles.centerFlex,
                                color: "#1E89DD",
                            }}
                        >
                            <Box>Nhận hỗ trợ </Box>
                            <ChevronRight />
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ p: "24px 0 140px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "128px",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box sx={{ width: "calc(50% - 64px)" }}>
                            <Box
                                sx={{
                                    pb: "16px",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                }}
                            >
                                Về chúng tôi
                            </Box>
                            <Box>
                                The Thanh Coffee là một trong những tập đoàn xây
                                dựng và phát triển dự án hàng đầu thế giới.
                                Chúng tôi hoạt động tại Châu Âu và Bắc Mỹ.
                            </Box>
                            <Box
                                sx={{
                                    p: "10px 0",
                                    color: "#06542D",
                                    fontWeight: 500,
                                }}
                            >
                                Các dự án của chúng tôi
                            </Box>
                            <Box sx={{ color: "#06542D", fontWeight: 500 }}>
                                Các dự án của chúng tôi
                            </Box>
                        </Box>
                        <Box sx={{ width: "calc(50% - 64px)" }}>
                            <Box
                                sx={{
                                    pb: "16px",
                                    fontSize: "18px",
                                    fontWeight: 500,
                                }}
                            >
                                Liên hệ chúng tôi
                            </Box>
                            <Box sx={{ pb: "12px" }}>
                                The Thanh Coffee là một trong những tập đoàn xây
                                dựng và phát triển dự án hàng đầu thế giới.
                                Chúng tôi hoạt động tại Châu Âu và Bắc Mỹ.
                            </Box>
                            <Box
                                sx={{
                                    color: "#06542D",
                                    fontWeight: 500,
                                }}
                            >
                                Liên hệ chúng tôi
                            </Box>
                            <Box
                                sx={{
                                    p: "10px 0",
                                    color: "#06542D",
                                    fontWeight: 500,
                                }}
                            >
                                Hướng dẫn trụ sở chính
                            </Box>
                            <Box
                                sx={{
                                    color: "#06542D",
                                    fontWeight: 500,
                                    svg: { width: "16px", height: "16px" },
                                    ...styles.centerFlex,
                                    gap: "40px",
                                }}
                            >
                                <Box>Xem bản đồ</Box>
                                <ArrowOutwardOutlined />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        pb: "4px",
                        borderBottom: "solid black 1px",
                        fontWeight: 500,
                        fontSize: "18px",
                    }}
                >
                    The Thanh Coffee trên mạng xã hội
                </Box>
                <Box sx={{ p: "18px 0 24px", display: "flex", gap: "12px" }}>
                    <Box
                        sx={{
                            "svg>path": {
                                fill: "white",
                                stroke: "black",
                                strokeWidth: "1.5px",
                            },
                        }}
                    >
                        <FacebookOutlined />
                    </Box>
                    <Box>
                        <Instagram />
                    </Box>
                </Box>
                <Box
                    sx={{
                        ...styles.centerFlex,
                        svg: { width: "12px", height: "12px" },
                        gap: "2px",
                    }}
                >
                    <Box>© 2024 THE THANH COFFEE</Box>
                    <ChevronRightOutlined />
                    <Box>
                        Điều khoản sử dụng, xử lý dữ liệu cá nhân và tùy chọn
                        cookie
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Desktop;
