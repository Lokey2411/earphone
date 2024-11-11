import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import Logotop from "../component/layout/LogoTop";
import Navbardesktop from "../component/layout/NavBarDesktop";
import FooterDesktop from "../component/layout/FooterDesktop";
import { styles } from "../styles";
import SearchIcon from "@mui/icons-material/Search";
import { useData } from "../hooks/useData";
import CacCauHoi from "../component/CacCauHoi";

const FrequentQuestions = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [questions] = useData("questions/search/type?type=tuyen-dung");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Box sx={{ ...styles.fontSize13 }}>
      <Logotop />
      <Navbardesktop />
      <Box
        sx={{
          p: "241px 140px 140px 140px ",
          "@media (max-width:900px)": {
            p: "160px 20px 20px",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            fontSize: "36px",
            fontWeight: "600",
            pb: "20px",
          }}
        >
          Câu hỏi thường gặp
        </Box>
        <Box
          sx={{
            textAlign: "center",
            pb: "64px",
            "@media (max-width:900px)": {
              p: "20px",
            },
          }}
        >
          <form onSubmit={handleSubmit} className="search-form">
            <TextField
              value={searchTerm}
              onChange={handleChange}
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton type="submit" size="small">
                      <SearchIcon fontSize="large" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              style={{ width: "320px" }}
            />
          </form>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            pb: "20px",
          }}
        >
          <CacCauHoi questions={questions} />
        </Box>
      </Box>
      <FooterDesktop />
    </Box>
  );
};

export default FrequentQuestions;
