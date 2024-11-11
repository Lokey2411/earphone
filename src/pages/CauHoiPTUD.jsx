import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import { styles } from "../styles";
import NavbarOrder from "../component/layout/NarBarOrder";
import Footer from "../component/layout/Footer";
import { ExpandMore } from "@mui/icons-material";

const CauHoiVePhanThuongVaUuDai = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const accordions = [
    {
      title: "Phần thưởng của The Thanh",
      content: "Phần thưởng của The Thanh",
    },
    {
      title: "Thông tin tài khoản",
      content: "Thông tin tài khoản",
    },
    {
      title: "Phương thức thanh toán",
      content: "Phương thức thanh toán",
    },
    {
      title: "Những đơn đặt hàng gần đây",
      content: "Những đơn đặt hàng gần đây",
    },
    {
      title: "Sở thích giao tiếp",
      content: "Sở thích giao tiếp",
    },
  ];
  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <NavbarOrder />
      <Box sx={{ pt: "100px" }}>
        <Box sx={{ width: "500px", margin: "auto", p: "100px 0" }}>
          {accordions.map((accordion, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                "&:not(:last-child)": {
                  borderBottom: "1px solid #ccc",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  borderBottom: "1px solid #ccc",
                }}
              >
                <Typography>{accordion.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{accordion.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CauHoiVePhanThuongVaUuDai;
