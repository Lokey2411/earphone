import { Box } from "@mui/material";
import React from "react";
import { RESPONSIVE_MOBILE } from "../../styles";

const Layout = {
	MainBg: ({ children }) => {
		return <Box sx={{ p: "56px 0px 0px", [RESPONSIVE_MOBILE]: { p: "0px 0px 0px" } }}>{children}</Box>;
	},
	SecondaryBg: ({ children }) => {
		return <Box sx={{ backgroundColor: "#F3F1EC", p: "56px 0px 0px" }}>{children}</Box>;
	},
	ThirdBg: ({ children }) => {
		return <Box sx={{ backgroundColor: "#E6EEEA", p: "145px 0px 0px" }}>{children}</Box>;
	},
};

export default Layout;
