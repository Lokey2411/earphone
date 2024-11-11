import React, { useContext } from "react";
import { styles } from "../../styles";
import { Box } from "@mui/material";
import { MobileContext } from "../../store/context/Mobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const ShopOpen = () => {
	const { isMobile } = useContext(MobileContext);
	return <Box sx={{ ...styles.fontSize13 }}>{isMobile ? <Mobile /> : <Desktop />}</Box>;
};

export default ShopOpen;
