import { Box } from "@mui/material";
import React from "react";
import ProjectMaximizeIcon from "../../../../../component/svg/icon/ProjectMaximizeIcon";
import Demo from "../../../../../component/img/youtube.jpg";
const Desktop = () => {
    const projects = [
        {
            id: 1,
            title: "Tên dự án Khối Bromma, Hangar 3",
            subtitle:
                "Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp để dự án có hiệu quả về mặt chi phí nhất có thể.",
            img: Demo,
            projectName: "Dự án được triển khai theo mô hình hợp tác",
            projectDetail:
                "Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp để dự án có hiệu quả về mặt chi phí nhất có thể.",
        },
        {
            id: 2,
            title: "Tên dự án Khối Bromma, Hangar 3",
            subtitle:
                "Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp để dự án có hiệu quả về mặt chi phí nhất có thể.",
            img: Demo,
            projectName: "Dự án được triển khai theo mô hình hợp tác",
            projectDetail:
                "Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp để dự án có hiệu quả về mặt chi phí nhất có thể.",
        },
        {
            id: 3,
            title: "Tên dự án Khối Bromma, Hangar 3",
            subtitle:
                "Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp để dự án có hiệu quả về mặt chi phí nhất có thể.",
            img: Demo,
            projectName: "Dự án được triển khai theo mô hình hợp tác",
            projectDetail:
                "Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp để dự án có hiệu quả về mặt chi phí nhất có thể.",
        },
    ];
    return (
        <Box sx={{ p: "48px 12px" }}>
            <Box sx={{ fontWeight: 600, fontSize: "36px" }}>
                Tên dự án Khối Bromma, Hangar 3
            </Box>
            <Box sx={{ p: "24px 0 12px" }}>
                Dự án được triển khai theo mô hình hợp tác, có nghĩa là Skanska
                và KF Fastigheter đã hợp tác, cùng nhau phát triển các giải pháp
                để dự án có hiệu quả về mặt chi phí nhất có thể.
            </Box>
            <Box sx={{ fontSize: "18px" }}>
                {projects.map((item, index, array) => (
                    <Box
                        key={item.id}
                        sx={{
                            p: "20px 0",
                            ...(index < array.length - 1 && {
                                borderBottom: "solid black 1px",
                            }),
                        }}
                    >
                        <Box sx={{ fontSize: "24px", fontWeight: 700 }}>
                            {item.title}
                        </Box>
                        <Box sx={{ p: "18px 0 24px" }}>{item.subtitle}</Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "32px",
                            }}
                        >
                            <Box
                                sx={{
                                    height: "250px",
                                    width: "348px",
                                    background: "black",
                                }}
                            >
                                <img
                                    style={{
                                        height: "250px",
                                        width: "348px",
                                        objectFit: "cover",
                                        color: "white",
                                    }}
                                    alt="demo"
                                    src={item.img}
                                />
                            </Box>
                            <Box>
                                <Box
                                    sx={{
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        pb: "24px",
                                    }}
                                >
                                    {item.projectName}
                                </Box>
                                <Box>{item.projectDetail}</Box>
                            </Box>
                            <Box>
                                <ProjectMaximizeIcon />
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Desktop;
