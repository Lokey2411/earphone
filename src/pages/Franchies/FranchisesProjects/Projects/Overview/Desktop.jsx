import { Box } from "@mui/material";
import React from "react";
import { useState } from "react";
import projectsMapDemo from "../../../../../component/img/projectsMapDemo.png";
import projectsDemo from "../../../../../component/img/projectsDemo.png";
const Desktop = () => {
    const [isMapOpen, setIsMapOpen] = useState(1);
    const projectSpecs = [
        {
            type: "Xây dựng",
            markedSegment: "Trung tâm mua sắm/khu thương mại",
            concept: "Nghiên cứu trường hợp về tính bền vững",
            startAt: "2024",
            endAt: "2024",
            customer: "The Thanh",
            country: "Việt Nam",
            city: "Hà Nội",
            status: "Đã hoàn thành",
        },
    ];
    return (
        <Box sx={{ p: "48px 12px" }}>
            <Box sx={{ fontWeight: 600, fontSize: "36px", pb: "32px" }}>
                Tên dự án Khối Bromma, Hangar 3
            </Box>
            <Box
                sx={{
                    display: "flex",
                    textAlign: "center",
                    fontWeight: 500,
                    fontSize: "14px",
                }}
            >
                <Box
                    onClick={() => setIsMapOpen(1)}
                    sx={{
                        border: "solid black 1px",
                        p: "8px 10px",
                        width: "60px",
                        cursor: "pointer",
                        ...(isMapOpen === 1 && { borderBottom: 0 }),
                    }}
                >
                    Hình ảnh
                </Box>
                <Box
                    onClick={() => setIsMapOpen(2)}
                    sx={{
                        border: "solid black 1px",
                        p: "8px 10px",
                        borderLeft: 0,
                        width: "60px",
                        cursor: "pointer",
                        ...(isMapOpen === 2 && { borderBottom: 0 }),
                    }}
                >
                    Bản đồ
                </Box>
                <Box
                    sx={{
                        width: "calc(100% - 160px)",
                        borderBottom: "solid black 1px",
                    }}
                ></Box>
            </Box>
            <Box sx={{ p: "20px 0 " }}>
                {isMapOpen === 1 && (
                    <img alt="project" src={projectsDemo} width={"100%"} />
                )}
                {isMapOpen === 2 && (
                    <img
                        alt="projectMap"
                        src={projectsMapDemo}
                        width={"100%"}
                    />
                )}
            </Box>
            <Box sx={{ pb: "40px", fontSize: "14px", fontWeight: 500 }}>
                1/6 - Bromma Blocks
            </Box>
            <Box sx={{ display: "flex", gap: "32px" }}>
                <Box sx={{ width: "calc(100% - 253px)" }}>
                    <Box sx={{ fontSize: "30px", fontWeight: 600 }}>
                        Từ nhà chứa máy bay đến trung tâm mua sắm hiện đại
                    </Box>
                    <Box
                        sx={{ fontSize: "16px" }}
                        dangerouslySetInnerHTML={{
                            __html: `<p>
                            Skanska đ&atilde; x&acirc;y dựng giai đoạn thứ hai
                            của trung t&acirc;m mua sắm Bromma Blocks ở
                            ph&iacute;a t&acirc;y Stockholm. Tại đ&oacute;,
                            ch&uacute;ng t&ocirc;i đ&atilde; biến một nh&agrave;
                            chứa m&aacute;y bay từ năm 1947 th&agrave;nh một
                            trung t&acirc;m mua sắm ba tầng si&ecirc;u hiện đại
                            với hơn 80 cửa h&agrave;ng, c&ugrave;ng với một gara
                            ngầm với 330 chỗ đậu xe. Hợp đồng c&oacute; tổng
                            gi&aacute; trị l&agrave; 700 triệu SEK v&agrave;
                            kh&aacute;ch h&agrave;ng l&agrave; KF Fastigheter.
                        </p>
                        <p>
                            Nh&agrave; chứa m&aacute;y bay l&agrave; một
                            t&ograve;a nh&agrave; lịch sử được bảo vệ v&agrave;
                            c&aacute;c phần đ&aacute;ng kể b&ecirc;n
                            ngo&agrave;i cũng như c&aacute;c gi&agrave;n
                            th&eacute;p lớn c&oacute; nhịp l&ecirc;n đến 75
                            m&eacute;t v&agrave; kh&ocirc;ng gian b&ecirc;n
                            trong độc đ&aacute;o được bảo tồn để giữ lại bầu
                            kh&ocirc;ng kh&iacute; của s&acirc;n bay. Hiệu quả
                            năng lượng l&agrave; một mục ti&ecirc;u quan trọng
                            kh&aacute;c v&agrave; KF Fastigheter đ&atilde; nộp
                            đơn xin ph&acirc;n loại GreenBuilding. Theo
                            c&aacute;ch n&agrave;y, c&aacute;i cũ đ&atilde; được
                            kết hợp với c&aacute;i mới.
                        </p>
                        <p>
                            Trong thời gian x&acirc;y dựng, c&ocirc;ng trường
                            x&acirc;y dựng l&agrave; một trong những c&ocirc;ng
                            trường lớn nhất Stockholm, cả về số lượng c&ocirc;ng
                            nh&acirc;n cũng như quy m&ocirc;. V&agrave;o
                            th&aacute;ng 3 năm 2010, c&oacute; khoảng 300 người
                            l&agrave;m việc tại nh&agrave; chứa m&aacute;y bay
                            rộng 150.000 m&eacute;t khối.
                        </p>
                        <p>
                            Do đ&oacute;, việc lập kế hoạch cho dự &aacute;n
                            n&agrave;y l&agrave; một th&aacute;ch thức hậu cần
                            phi thường. Cũng c&oacute; một sự b&ugrave;ng nổ
                            kinh tế đang diễn ra khi c&aacute;c nỗ lực lập
                            tr&igrave;nh v&agrave; lập kế hoạch được bắt đầu
                            v&agrave;o m&ugrave;a thu năm 2006, điều n&agrave;y
                            l&agrave;m cho việc đảm bảo chuy&ecirc;n m&ocirc;n
                            ph&ugrave; hợp v&agrave;o đ&uacute;ng thời điểm
                            trong suốt dự &aacute;n trở n&ecirc;n cực kỳ quan
                            trọng.
                        </p>
                        <p>
                            C&ocirc;ng việc cải tạo v&agrave; mở rộng Hanger 3
                            được bắt đầu v&agrave;o th&aacute;ng 6 năm 2008
                            v&agrave; kết th&uacute;c v&agrave;o th&aacute;ng 9
                            năm 2010, khi Bromma Blocks được kh&aacute;nh
                            th&agrave;nh.
                        </p>`,
                        }}
                    ></Box>
                </Box>
                <Box sx={{ width: "253px" }}>
                    <Box sx={{ pb: "16px", fontWeight: 500 }}>Sự thật</Box>
                    <Box sx={{ p: "24px", background: "#F2F2F2" }}>
                        {projectSpecs.map((item) => (
                            <Box sx={{ fontSize: "12px" }}>
                                <strong>Dịch vụ:</strong> {item.type}
                                <br />
                                <strong>Phân khúc đánh dấu:</strong>{" "}
                                {item.markedSegment}
                                <br />
                                <strong>Khái niệm:</strong> {item.concept}
                                <Box
                                    sx={{
                                        m: "16px 0",
                                        height: "0.5px",
                                        background: "#999999",
                                    }}
                                ></Box>
                                <strong>Ngày bắt đầu:</strong> {item.startAt}
                                <br />
                                <strong>Ngày hoàn thành:</strong> {item.endAt}
                                <Box
                                    sx={{
                                        m: "16px 0",
                                        height: "0.5px",
                                        background: "#999999",
                                    }}
                                ></Box>
                                <strong>Khách hàng:</strong> {item.customer}
                                <Box
                                    sx={{
                                        m: "16px 0",
                                        height: "0.5px",
                                        background: "#999999",
                                    }}
                                ></Box>
                                <strong>Quốc gia:</strong> {item.country}
                                <br />
                                <strong>Thành phố:</strong> {item.city}
                                <br />
                                <strong>Tình trạng dự án:</strong> {item.status}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Desktop;
