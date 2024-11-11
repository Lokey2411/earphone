import React from "react";
import {
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import { styles } from "../../styles";
import NavBar from "../../component/layout/NavBar";
import Layout from "../../component/layout";
import Footer from "../../component/layout/Footer";
import SuppilerStandardArrowDownBlack from "../../component/svg/icon/SuppilerStandardArrowDownBlack";
import ChamSocKhachHangNutMauXanhNhat from "../../component/ChamSocKhachHangNutMauXanhNhat";

const Mobile = () => {
  const standards = [
    {
      title:
        "\u0110\u1ea1o lu\u1eadt minh b\u1ea1ch trong chu\u1ed7i cung \u1ee9ng c\u1ee7a Vi\u1ec7t Nam",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "T\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c",
      detailText: "",
      subCopyrights: [],
    },
    {
      title:
        "\u0110i\u1ec1u kho\u1ea3n v\u00e0 \u0110i\u1ec1u ki\u1ec7n ti\u00eau chu\u1ea9n c\u1ee7a The Thanh Coffee",
      description:
        "Ch\u00fang t\u00f4i y\u00eau c\u1ea7u b\u1ea3n th\u00e2n v\u00e0 c\u00e1c nh\u00e0 cung c\u1ea5p c\u1ee7a ch\u00fang t\u00f4i ph\u1ea3i tu\u00e2n th\u1ee7 c\u00e1c ti\u00eau chu\u1ea9n cao nh\u1ea5t. Vui l\u00f2ng xem l\u1ea1i nh\u1eefng \u0111i\u1ec1u sau v\u00e0 \u0111\u1ea3m b\u1ea3o b\u1ea1n c\u00f3 th\u1ec3 cam k\u1ebft:",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "\u0110i\u1ec1u kho\u1ea3n v\u00e0 \u0110i\u1ec1u ki\u1ec7n ti\u00eau chu\u1ea9n c\u1ee7a The Thanh Coffee",
      detailText: "Xem ngay",
      subCopyrights: [],
    },
    {
      title:
        "Quy t\u1eafc \u1ee9ng x\u1eed d\u00e0nh cho nh\u00e0 cung c\u1ea5p c\u1ee7a The Thanh Coffee",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Quy t\u1eafc \u1ee9ng x\u1eed d\u00e0nh cho nh\u00e0 cung c\u1ea5p c\u1ee7a The Thanh Coffee",
      detailText: "Xem ngay",
      subCopyrights: [],
    },
    {
      title:
        "Th\u1ecfa thu\u1eadn B\u00ed m\u1eadt v\u00e0 Kh\u00f4ng ti\u1ebft l\u1ed9 (CNDA)",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Th\u1ecfa thu\u1eadn B\u00ed m\u1eadt v\u00e0 Kh\u00f4ng ti\u1ebft l\u1ed9 (CNDA)",
      detailText: "m\u1eabu CNDA",
      subCopyrights: [],
    },
    {
      title:
        "Ti\u00eau chu\u1ea9n an to\u00e0n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng th\u1ef1c ph\u1ea9m v\u00e0 phi th\u1ef1c ph\u1ea9m",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Ti\u00eau chu\u1ea9n an to\u00e0n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng th\u1ef1c ph\u1ea9m v\u00e0 phi th\u1ef1c ph\u1ea9m",
      detailText: "",
      subCopyrights: [
        {
          title:
            "Ti\u00eau chu\u1ea9n d\u00e0nh cho nh\u00e0 cung c\u1ea5p phi th\u1ef1c ph\u1ea9m",
          description: "",
          detailLink: "",
          detailFile: "",
          created_at: "2024-04-16T09:41:23.000000Z",
          updated_at: "2024-04-16T09:41:23.000000Z",
          parent:
            "Ti\u00eau chu\u1ea9n an to\u00e0n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng th\u1ef1c ph\u1ea9m v\u00e0 phi th\u1ef1c ph\u1ea9m",
          detailText: "",
        },
        {
          title:
            "Ti\u00eau chu\u1ea9n d\u00e0nh cho nh\u00e0 cung c\u1ea5p th\u1ef1c ph\u1ea9m",
          description: "",
          detailLink: "",
          detailFile: "",
          created_at: "2024-04-16T09:41:23.000000Z",
          updated_at: "2024-04-16T09:41:23.000000Z",
          parent:
            "Ti\u00eau chu\u1ea9n an to\u00e0n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng th\u1ef1c ph\u1ea9m v\u00e0 phi th\u1ef1c ph\u1ea9m",
          detailText: "",
        },
      ],
    },
    {
      title:
        "Ti\u00eau chu\u1ea9n b\u1ea3o m\u1eadt chu\u1ed7i cung \u1ee9ng c\u1ee7a The Thanh Coffee",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Ti\u00eau chu\u1ea9n b\u1ea3o m\u1eadt chu\u1ed7i cung \u1ee9ng c\u1ee7a The Thanh Coffee",
      detailText: "Xem ngay",
      subCopyrights: [],
    },
    {
      title:
        "Ti\u00eau chu\u1ea9n d\u00e0nh cho nh\u00e0 cung c\u1ea5p phi th\u1ef1c ph\u1ea9m",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Ti\u00eau chu\u1ea9n an to\u00e0n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng th\u1ef1c ph\u1ea9m v\u00e0 phi th\u1ef1c ph\u1ea9m",
      detailText: "",
      subCopyrights: [],
    },
    {
      title:
        "Ti\u00eau chu\u1ea9n d\u00e0nh cho nh\u00e0 cung c\u1ea5p th\u1ef1c ph\u1ea9m",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Ti\u00eau chu\u1ea9n an to\u00e0n v\u00e0 ch\u1ea5t l\u01b0\u1ee3ng th\u1ef1c ph\u1ea9m v\u00e0 phi th\u1ef1c ph\u1ea9m",
      detailText: "",
      subCopyrights: [],
    },
    {
      title: "Ti\u00eau chu\u1ea9n nh\u00e0 cung c\u1ea5p",
      description:
        "Trong h\u01a1n 1000 n\u0103m, The Thanh Coffee \u0111\u00e3 c\u1ed1ng hi\u1ebfn h\u1ebft m\u00ecnh \u0111\u1ec3 truy\u1ec1n c\u1ea3m h\u1ee9ng v\u00e0 nu\u00f4i d\u01b0\u1ee1ng tinh th\u1ea7n khu ph\u1ed1 t\u1ea1i m\u1ed9t th\u1eddi \u0111i\u1ec3m. Ch\u00fang t\u00f4i r\u1ea5t vinh d\u1ef1 \u0111\u01b0\u1ee3c h\u1ee3p t\u00e1c v\u1edbi c\u00e1c nh\u00e0 cung c\u1ea5p, cho c\u1ea3 nhu c\u1ea7u b\u00e1n l\u1ebb v\u00e0 phi b\u00e1n l\u1ebb, nh\u1eefng ng\u01b0\u1eddi c\u00f3 c\u00f9ng cam k\u1ebft v\u1edbi ch\u00fang t\u00f4i trong vi\u1ec7c n\u00e2ng cao Tr\u1ea3i nghi\u1ec7m Thanh Cofee cho kh\u00e1ch h\u00e0ng v\u00e0 c\u1ed9ng \u0111\u1ed3ng m\u00e0 ch\u00fang t\u00f4i ph\u1ee5c v\u1ee5.",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent: "Ti\u00eau chu\u1ea9n nh\u00e0 cung c\u1ea5p",
      detailText: "",
      subCopyrights: [],
    },
    {
      title:
        "Ti\u00eau chu\u1ea9n t\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c c\u1ee7a The Thanh Coffee cho h\u00e0ng h\u00f3a s\u1ea3n xu\u1ea5t",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "T\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c",
      detailText: "",
      subCopyrights: [],
    },
    {
      title:
        "Ti\u00eau chu\u1ea9n t\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 tr\u00e1ch nhi\u1ec7m c\u1ee7a The Thanh Coffee",
      description:
        "Cam k\u1ebft c\u1ee7a ch\u00fang t\u00f4i l\u00e0 tr\u1edf th\u00e0nh m\u1ed9t doanh nghi\u1ec7p c\u00f3 tr\u00e1ch nhi\u1ec7m.",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Ti\u00eau chu\u1ea9n t\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 tr\u00e1ch nhi\u1ec7m c\u1ee7a The Thanh Coffee",
      detailText:
        "T\u00ecm hi\u1ec3u th\u00eam v\u1ec1 T\u00ecm ngu\u1ed3n cung \u1ee9ng s\u1ea3n ph\u1ea9m b\u1ec1n v\u1eefng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c c\u1ee7a The Thanh Coffee",
      subCopyrights: [
        {
          title:
            "T\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c",
          description: "",
          detailLink: "",
          detailFile: "",
          created_at: "2024-04-16T09:41:23.000000Z",
          updated_at: "2024-04-16T09:41:23.000000Z",
          parent:
            "Ti\u00eau chu\u1ea9n t\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 tr\u00e1ch nhi\u1ec7m c\u1ee7a The Thanh Coffee",
          detailText: "",
        },
      ],
    },
    {
      title:
        "T\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c",
      description: "",
      detailLink: "",
      detailFile: "",
      created_at: "2024-04-16T09:41:23.000000Z",
      updated_at: "2024-04-16T09:41:23.000000Z",
      parent:
        "Ti\u00eau chu\u1ea9n t\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 tr\u00e1ch nhi\u1ec7m c\u1ee7a The Thanh Coffee",
      detailText: "",
      subCopyrights: [
        {
          title:
            "\u0110\u1ea1o lu\u1eadt minh b\u1ea1ch trong chu\u1ed7i cung \u1ee9ng c\u1ee7a Vi\u1ec7t Nam",
          description: "",
          detailLink: "",
          detailFile: "",
          created_at: "2024-04-16T09:41:23.000000Z",
          updated_at: "2024-04-16T09:41:23.000000Z",
          parent:
            "T\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c",
          detailText: "",
        },
        {
          title:
            "Ti\u00eau chu\u1ea9n t\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c c\u1ee7a The Thanh Coffee cho h\u00e0ng h\u00f3a s\u1ea3n xu\u1ea5t",
          description: "",
          detailLink: "",
          detailFile: "",
          created_at: "2024-04-16T09:41:23.000000Z",
          updated_at: "2024-04-16T09:41:23.000000Z",
          parent:
            "T\u00ecm ngu\u1ed3n cung \u1ee9ng c\u00f3 \u0111\u1ea1o \u0111\u1ee9c",
          detailText: "",
        },
      ],
    },
  ];
  return (
    <Box sx={{ ...styles.fontSize13, fontSize: "14px" }}>
      <NavBar />
      <Layout.MainBg>
        <Box
          sx={{
            backgroundColor: "#1E3932",
            p: "80px 24px 130px",
            ...styles.fontColor.mauTrang,
          }}
        >
          <Box sx={{ fontSize: "24px", fontWeight: 700, pb: "24px" }}>
            {standards[0].title}
          </Box>
          <Box sx={{ fontSize: "14px", lineHeight: "150%" }}>
            {standards[0].description}
          </Box>
        </Box>
        <Box sx={{ p: "40px 24px 14px" }}>
          <Box
            sx={{
              fontSize: "20px",
              lineHeight: "150%",
              fontWeight: 700,
              pb: "34px",
            }}
          >
            Tiêu chuẩn dành cho các nhà cung cấp của The Thanh Coffee
          </Box>
          <Box sx={{ lineHeight: "150%", pb: "26px" }}>
            Chúng tôi yêu cầu bản thân và các nhà cung cấp của chúng tôi phải
            tuân thủ các tiêu chuẩn cao nhất. Vui lòng xem lại những điều sau và
            đảm bảo bạn có thể cam kết:
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            {standards
              .filter(
                (standard, index) =>
                  standard.parent === standard.title && index !== 0
              )
              .map((standard) => (
                <Accordion
                  sx={{
                    textAlign: "justify",
                    borderBottom: "solid #666666 1px",
                    borderRadius: "0px",
                    "&.MuiAccordion-root:last-of-type": { borderRadius: "0px" },
                    "&.MuiAccordion-root": { boxShadow: "0" },
                    "&.MuiPaper-root::before": { backgroundColor: "white" },
                    "& .MuiButtonBase-root": { p: 0, gap: "20px" },
                  }}
                  disableGutters={true}
                >
                  <AccordionSummary
                    expandIcon={<SuppilerStandardArrowDownBlack />}
                    aria-controls="panel1a-content"
                    sx={{
                      color: "black",
                      "&	.MuiAccordionSummary-content": {
                        margin: 0,
                      },
                    }}
                  >
                    <Box sx={{ fontSize: "16px", fontWeight: 500 }}>
                      {standard.title}
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{ "&.MuiAccordionDetails-root": { p: 0 } }}
                  >
                    {standard.description && (
                      <Box
                        sx={{
                          p: "32px 0px 20px",
                          color: "#5F5F5F",
                          lineHeight: "150%",
                        }}
                      >
                        {standard.description}
                      </Box>
                    )}
                    <Box
                      sx={{
                        ...styles.fontColor.xanhNhat006241,
                        textDecoration: "underline",
                        pb: "20px",
                      }}
                    >
                      Mẫu xác nhận
                    </Box>
                    <AccordionDetails>
                      {standard.subCopyrights.map((subCopyright) => (
                        <Box
                          sx={{
                            ...styles.fontColor.xanhNhat006241,
                            textDecoration: "underline",
                            p: "16px 0px 30px",
                          }}
                          key={subCopyright.title}
                        >
                          {subCopyright.title}
                        </Box>
                      ))}
                    </AccordionDetails>
                    {standard.detailText && (
                      <Box sx={{ pb: "36px" }}>
                        <ChamSocKhachHangNutMauXanhNhat
                          value={standard.detailText}
                        />
                      </Box>
                    )}
                  </AccordionDetails>
                </Accordion>
              ))}
          </Box>
        </Box>
      </Layout.MainBg>
      <Footer />
    </Box>
  );
};

export default Mobile;
