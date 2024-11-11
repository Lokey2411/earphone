import { Box, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ProjectMaximizeIcon from "../../../../../component/svg/icon/ProjectMaximizeIcon";
import Demo from "../../../../../component/img/youtube.jpg";
import projectsDemo from "../../../../../component/img/projectsDemo.png";
const Desktop = () => {
    const [isHover, setIsHover] = useState(false);
    const [popUp, setPopUp] = useState(false);
    return (
        <Box sx={{ p: "48px 12px" }}>
            <Box sx={{ fontWeight: 600, fontSize: "36px" }}>
                Tên dự án Khối Bromma, Hangar 3
            </Box>
            <Box sx={{ p: "24px 0 32px" }}>
                Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska
                và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp
                để dự án có hiệu quả về mặt chi phí nhất có thể.
            </Box>
            <Box
                onMouseOver={() => setIsHover(true)}
                onMouseOut={() => setIsHover(false)}
                sx={{ position: "relative" }}
            >
                <img alt="project" src={projectsDemo} width={"100%"} />
                {isHover && (
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    p: "20px",
                                    background: "white",
                                    borderRadius: "8px",
                                    textAlign: "center",
                                    cursor: "pointer",
                                }}
                            >
                                <Box
                                    sx={{
                                        color: "#06542D",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                    }}
                                >
                                    TÊN KHU VỰC
                                </Box>
                                <Box sx={{ fontSize: "12px" }}>
                                    Nhấp để xem chi tiết
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    width: 0,
                                    height: 0,
                                    borderLeft: "11px solid transparent",
                                    borderRight: "11px solid transparent",
                                    borderTop: "11px solid white",
                                }}
                            ></Box>
                        </Box>
                    </Box>
                )}
            </Box>
            <Box sx={{ p: "24px 0 36px", fontSize: "14px", fontWeight: 500 }}>
                1/6 - Bromma Blocks
            </Box>
            <Box sx={{ fontSize: "18px" }}>
                Một phép tính carbon dioxide đã được thực hiện để định lượng
                những tác động tích cực của các nỗ lực bảo vệ môi trường của dự
                án về mặt giảm phát thải carbon dioxide và các chất tương đương
                carbon dioxide. Với những nỗ lực bảo vệ môi trường của chúng tôi
                đối với dự án, lượng khí thải carbon dioxide đã giảm 500-600 tấn
                so với một dự án xây dựng tương đương có quy mô như Bromma
                Block. Tương ứng với 70 chuyến đi vòng quanh Trái Đất.
            </Box>
        </Box>
    );
};

export default Desktop;
